#!/usr/bin/env node
/**
 * fetch-factory-images.mjs
 * ------------------------------------------------------------------
 * Factory-page image completion batch (2026-10-25).
 *
 * Audits the live source site's factory / qualification / video / about pages
 * with Playwright Chromium (scrolling for lazy-load + intercepting every image
 * network response, including CSS `background-image` URLs that the static
 * mirror HTML does not surface), then downloads any image not yet on disk via
 * the unblocked CDN sibling omo-oss-image2.thefastimg.com (the primary host
 * omo-oss-image.thefastimg.com answers HTTP 567 anti-hotlink to every direct
 * request).
 *
 * Outputs:
 *   public/images/origin-images/<uuid>.<ext>  — recovered bytes
 *   docs/assets/factory-images-map.json       — missing-image audit + fetch result
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const OUT_DIR = resolve(ROOT, 'public/images/origin-images');
const MAP_OUT = resolve(ROOT, 'docs/assets/factory-images-map.json');

const SOURCE_BASE = 'http://www.hongyingfilter.com/';
const PRIMARY_HOST = 'omo-oss-image.thefastimg.com';
const FALLBACK_HOST = 'omo-oss-image2.thefastimg.com';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// --- chromium resolution -----------------------------------------------------
async function loadChromium() {
  const candidates = ['playwright', 'playwright-core', '/usr/lib/node_modules/openclaw/node_modules/playwright-core'];
  for (const spec of candidates) {
    try {
      return (await import(spec)).chromium;
    } catch {
      /* keep trying */
    }
  }
  return null;
}

const CHROMIUM_EXE = process.env.CHROMIUM_EXE ||
  '/root/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';

// --- helpers -----------------------------------------------------------------
const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

function diskUuids() {
  const set = new Set();
  if (!existsSync(OUT_DIR)) return set;
  for (const name of readdirSync(OUT_DIR)) {
    const m = name.match(UUID_RE);
    if (m) set.add(m[0]);
  }
  return set;
}

async function downloadOnce(url, timeoutMs = 30000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const resp = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': UA } });
    if (!resp.ok) return { ok: false, status: resp.status, size: 0 };
    const buf = Buffer.from(await resp.arrayBuffer());
    return { ok: true, status: resp.status, size: buf.length, buf };
  } catch (e) {
    return { ok: false, status: 0, size: 0, error: e.message };
  } finally {
    clearTimeout(t);
  }
}

// --- live-page image discovery (Playwright) ----------------------------------
async function discoverLiveImages(chromium) {
  const pages = [
    { slug: 'factory', path: 'factory.html' },
    { slug: 'qualification', path: 'qualification.html' },
    { slug: 'video', path: 'video.html' },
    { slug: 'about', path: 'About.html' },
  ];
  const found = {}; // uuid -> { url, ext, page, alt, kind }
  const ctx = await chromium.launchPersistentContext('/tmp/hycarfilter-factory-pw', {
    executablePath: CHROMIUM_EXE,
    headless: true,
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled', '--disable-dev-shm-usage'],
    userAgent: UA,
    viewport: { width: 1440, height: 900 },
  });
  const page = ctx.pages()[0] || (await ctx.newPage());

  // intercept every image response (img src + CSS background)
  page.on('response', (resp) => {
    const ct = resp.headers()['content-type'] || '';
    const url = resp.url();
    if (!ct.startsWith('image/')) return;
    const m = url.match(UUID_RE);
    if (!m) return;
    const uuid = m[0];
    if (found[uuid]) return;
    found[uuid] = { url, ext: (url.split('.').pop() || 'jpg').split('?')[0], page: '?', alt: '', kind: 'network' };
  });

  for (const p of pages) {
    const url = SOURCE_BASE + p.path;
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 900) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 90));
        }
      });
      await page.waitForTimeout(1000);
      // DOM img context
      const imgs = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img')).map((img) => ({
          src: img.currentSrc || img.getAttribute('lazy') || img.getAttribute('src') || '',
          alt: img.alt || '',
        })),
      );
      for (const im of imgs) {
        const m = im.src.match(UUID_RE);
        if (!m) continue;
        const uuid = m[0];
        found[uuid] = found[uuid] || { url: im.src, ext: (im.src.split('.').pop() || 'jpg').split('?')[0], page: p.slug, alt: im.alt, kind: 'img' };
        found[uuid].page = found[uuid].page === '?' ? p.slug : found[uuid].page;
        if (im.alt) found[uuid].alt = im.alt;
      }
    } catch (e) {
      console.error(`  (page ${p.slug} skipped: ${e.message})`);
    }
  }
  await ctx.close();
  // attribute page slugs to network-only finds (css backgrounds) by re-scan is
  // not reliable; keep page as-is.
  return found;
}

// --- main --------------------------------------------------------------------
async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const onDisk = diskUuids();

  const chromium = await loadChromium();
  const live = chromium ? await discoverLiveImages(chromium) : {};
  console.log(`Discovered ${Object.keys(live).length} live images on source factory/qualification/video/about pages.`);

  const report = { discovered: {}, missing: {}, fetched: 0, alreadyOnDisk: 0, dead: 0 };

  let fetched = 0;
  let already = 0;
  let dead = 0;

  for (const [uuid, info] of Object.entries(live)) {
    report.discovered[uuid] = { ...info };
    if (onDisk.has(uuid)) {
      already++;
      report.alreadyOnDisk = already;
      continue;
    }
    // fetch via primary (documents 567), then fallback (image2)
    const primary = await downloadOnce(info.url.replace(PRIMARY_HOST, PRIMARY_HOST));
    let result = primary;
    if (!primary.ok) {
      result = await downloadOnce(info.url.replace(new RegExp(PRIMARY_HOST), FALLBACK_HOST));
    }
    const local = `public/images/origin-images/${uuid}.${info.ext}`;
    const entry = {
      uuid,
      ext: info.ext,
      page: info.page,
      alt: info.alt,
      kind: info.kind,
      sourceUrl: info.url,
      primaryStatus: primary.status || primary.error || null,
      finalStatus: result.status || result.error || null,
      saved: result.ok,
      bytes: result.size,
    };
    if (result.ok) {
      writeFileSync(resolve(ROOT, local), result.buf);
      fetched++;
      report.fetched = fetched;
    } else {
      dead++;
      report.dead = dead;
    }
    report.missing[uuid] = entry;
  }

  mkdirSync(dirname(MAP_OUT), { recursive: true });
  writeFileSync(MAP_OUT, JSON.stringify(report, null, 2));

  console.log(`\nfactory fetch done. discovered=${Object.keys(live).length} alreadyOnDisk=${already} fetched=${fetched} dead=${dead}`);
  console.log(`report -> ${MAP_OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
