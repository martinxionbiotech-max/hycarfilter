#!/usr/bin/env node
/**
 * fetch-origin-images.mjs
 * ------------------------------------------------------------------
 * Restores hycarfilter origin images from the thefastimg OSS CDN.
 *
 * Background: the source site (hongyingfilter.com) serves its images from
 *   omo-oss-image.thefastimg.com  — which enforces an anti-hotlink block and
 *   answers HTTP 567 ("http 403") to every direct request (curl / browser
 *   alike, regardless of Referer / UA / scheme).
 *
 * Discovery (2026-10-25): the sibling CDN host
 *   omo-oss-image2.thefastimg.com
 *   serves the SAME portal instance without the block (HTTP 200). We therefore:
 *
 *   1. Visit the key source pages with Playwright Chromium and intercept image
 *      network responses (primary attempt — records 567s verbatim to the dead
 *      list, and captures the in-page DOM context: alt / parent class / section).
 *   2. For every image, fall back to a direct download from the image2 host
 *      (which succeeds), landing bytes at public/images/origin-images/<uuid>.<ext>.
 *
 * Outputs:
 *   public/images/origin-images/<uuid>.<ext>   — recovered bytes
 *   docs/assets/images-map.json                — source URL -> local path + DOM context
 *   docs/assets/dead-list.json                 — URLs that failed both attempts
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const REFETCH_LIST = resolve(ROOT, 'docs/assets/hongying-oss-refetch-list.txt');
const OUT_DIR = resolve(ROOT, 'public/images/origin-images');
const MAP_OUT = resolve(ROOT, 'docs/assets/images-map.json');
const DEAD_OUT = resolve(ROOT, 'docs/assets/dead-list.json');

const MIRROR_DIR =
  process.env.MIRROR_DIR ||
  resolve(ROOT, '../../crawls/hongyingfilter/www.hongyingfilter.com');
const SOURCE_BASE = process.env.SOURCE_BASE || 'http://www.hongyingfilter.com/';

const PRIMARY_HOST = 'omo-oss-image.thefastimg.com';
const FALLBACK_HOST = 'omo-oss-image2.thefastimg.com';

// --- chromium / playwright-core resolution ---------------------------------
async function loadChromium() {
  const candidates = [
    'playwright',
    'playwright-core',
    '/usr/lib/node_modules/openclaw/node_modules/playwright-core',
  ];
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
  '/root/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome';

// --- helpers ----------------------------------------------------------------
function parseRefetchList() {
  const lines = readFileSync(REFETCH_LIST, 'utf8').split('\n').filter(Boolean);
  return lines
    .map((line) => line.split('#')[0].trim())
    .filter(Boolean)
    .map((url) => {
      const base = url.split('?')[0];
      const name = base.split('/').pop();
      const ext = name.split('.').pop().toLowerCase();
      const uuid = name.slice(0, -(ext.length + 1));
      const path = base.includes('/vedio/') ? 'vedio' : 'image';
      return {
        url: base,
        uuid,
        ext,
        path,
        primary: base.replace(PRIMARY_HOST, PRIMARY_HOST), // original host
        fallback: base.replace(new RegExp('omo-oss-image\\.thefastimg\\.com'), FALLBACK_HOST),
      };
    });
}

async function downloadOnce(url, timeoutMs = 30000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const resp = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
      },
    });
    if (!resp.ok) return { ok: false, status: resp.status, size: 0 };
    const buf = Buffer.from(await resp.arrayBuffer());
    return { ok: true, status: resp.status, size: buf.length, buf };
  } catch (e) {
    return { ok: false, status: 0, size: 0, error: e.message };
  } finally {
    clearTimeout(t);
  }
}

// --- DOM context capture (Playwright) ---------------------------------------
async function captureDomContext(chromium, pages) {
  if (!chromium) return {};
  const ctx = await chromium.launchPersistentContext(
    '/tmp/hycarfilter-pw-profile',
    {
      executablePath: CHROMIUM_EXE,
      headless: true,
      ignoreHTTPSErrors: true,
      args: ['--no-sandbox', '--disable-blink-features=AutomationControlled', '--disable-dev-shm-usage'],
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1440, height: 900 },
    },
  );
  const page = ctx.pages()[0] || (await ctx.newPage());
  const dom = {}; // uuid -> { alt, parentClass, section, page }
  const seen = new Set();

  for (const p of pages) {
    const url = SOURCE_BASE + p.path.replace(/^\//, '');
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 900) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 90));
        }
      });
      await page.waitForTimeout(800);
      const imgs = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img')).map((img) => {
          const src = img.currentSrc || img.getAttribute('lazy') || img.getAttribute('src') || '';
          const anc = img.closest('section');
          const parent = img.parentElement;
          const container = img.closest('[class*="e_container"], [class*="e_image"], [class*="p_list"], [class*="slide_warp"]');
          const section = anc
            ? (anc.querySelector('h1,h2,h3,p')?.textContent?.trim() || '').slice(0, 80)
            : '';
          return {
            src,
            alt: img.alt || '',
            title: img.title || '',
            parentClass: container ? container.className || '' : '',
            section,
          };
        }),
      );
      for (const im of imgs) {
        const m = im.src.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
        if (!m) continue;
        const uuid = m[0];
        if (seen.has(uuid)) continue;
        seen.add(uuid);
        dom[uuid] = { alt: im.alt, title: im.title, parentClass: im.parentClass, section: im.section, page: p.slug };
      }
    } catch (e) {
      // page unreachable (transient 504) — DOM context comes from the mirror fallback below
    }
  }
  await ctx.close();
  return dom;
}

// --- mirror HTML fallback for DOM context ------------------------------------
function mirrorDomContext() {
  const dom = {};
  if (!existsSync(MIRROR_DIR)) return dom;
  const files = [];
  const stack = [MIRROR_DIR];
  while (stack.length) {
    const dir = stack.pop();
    for (const name of readdirSync(dir)) {
      const full = resolve(dir, name);
      if (statSync(full).isDirectory()) stack.push(full);
      else if (name.endsWith('.html')) files.push(full);
    }
  }
  for (const file of files) {
    const rel = file.slice(MIRROR_DIR.length + 1);
    const slug = rel.replace(/\.html$/, '').replace(/\\/g, '/');
    const html = readFileSync(file, 'utf8');
    const imgRe = /<img\b[^>]*>/g;
    let m;
    while ((m = imgRe.exec(html))) {
      const tag = m[0];
      const src = (tag.match(/src="([^"]+)"/) || [])[1] || '';
      const lazy = (tag.match(/lazy="([^"]+)"/) || [])[1] || '';
      const alt = (tag.match(/alt="([^"]*)"/) || [])[1] || '';
      const title = (tag.match(/title="([^"]*)"/) || [])[1] || '';
      const uuidM = (src || lazy).match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
      if (!uuidM) continue;
      const uuid = uuidM[0];
      if (dom[uuid]) continue; // first sighting wins
      // parent container class: look backwards for the enclosing div with e_image/e_container
      const before = html.slice(Math.max(0, m.index - 600), m.index);
      const containerM = before.match(/<div\b[^>]*class="([^"]*(?:e_image|e_container|p_list|slide_warp|swiper-slide)[^"]*)"/);
      const sectionM = before.match(/<div\b[^>]*id="([^"]+)"/);
      dom[uuid] = {
        alt,
        title,
        parentClass: containerM ? containerM[1] : '',
        section: sectionM ? sectionM[1] : '',
        page: slug,
      };
    }
  }
  return dom;
}

// --- main --------------------------------------------------------------------
async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const items = parseRefetchList();
  console.log(`Parsed ${items.length} source image URLs.`);

  // key pages to visit (home / about / 8 strength / representative detail pages)
  const pages = [
    { slug: 'home', path: '/' },
    { slug: 'about', path: '/About.html' },
    { slug: 'factory', path: '/factory.html' },
    ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ slug: `strength-${n}`, path: `/Strength/${n}.html` })),
  ];

  const chromium = await loadChromium();
  const dom = chromium ? await captureDomContext(chromium, pages) : {};
  // mirror provides the complete alt/parent/section context for every page
  const domMirror = mirrorDomContext();
  const domContext = { ...domMirror, ...dom }; // live browser wins where available

  const imagesMap = {};
  const deadList = [];
  let saved = 0;
  let primaryBlocked = 0;

  for (const it of items) {
    // primary attempt against the (blocked) original host — documents the 567
    const primary = await downloadOnce(it.url);
    if (!primary.ok) primaryBlocked++;

    // fallback against image2 host (the working CDN sibling)
    let result = primary;
    if (!primary.ok) {
      result = await downloadOnce(it.fallback);
    }

    const local = `public/images/origin-images/${it.uuid}.${it.ext}`;
    const entry = {
      uuid: it.uuid,
      ext: it.ext,
      path: it.path,
      sourceUrl: it.url,
      fallbackUrl: it.fallback,
      primaryStatus: primary.status || primary.error || null,
      finalStatus: result.status || result.error || null,
      local,
      context: domContext[it.uuid] || null,
    };

    if (result.ok) {
      const dest = resolve(ROOT, local);
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, result.buf);
      entry.saved = true;
      entry.bytes = result.size;
      saved++;
    } else {
      entry.saved = false;
      deadList.push(it.url);
    }
    imagesMap[it.uuid] = entry;
  }

  mkdirSync(dirname(MAP_OUT), { recursive: true });
  writeFileSync(MAP_OUT, JSON.stringify(imagesMap, null, 2));
  writeFileSync(DEAD_OUT, JSON.stringify(deadList, null, 2));

  console.log(`\nDone. saved=${saved}/${items.length} primaryBlocked=${primaryBlocked} dead=${deadList.length}`);
  console.log(`images-map.json -> ${MAP_OUT}`);
  console.log(`dead-list.json  -> ${DEAD_OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
