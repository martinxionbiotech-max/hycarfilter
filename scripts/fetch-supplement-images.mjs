#!/usr/bin/env node
/**
 * fetch-supplement-images.mjs
 * ------------------------------------------------------------------
 * Supplemental fetch: recovers the 22 content images that the first
 * origin-image batch left uncovered (product gallery gaps, blog covers,
 * home blocks, qualification license).
 *
 * Same technique as fetch-origin-images.mjs: primary host
 * omo-oss-image.thefastimg.com returns HTTP 567 (anti-hotlink); the sibling
 * host omo-oss-image2.thefastimg.com serves the same bytes (HTTP 200).
 *
 * Reads docs/assets/supplement-fetch-list.txt and lands bytes at
 * public/images/origin-images/<uuid>.<ext>. Updates docs/assets/images-map.json
 * with the new entries (source URL + final status + local path).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const LIST = resolve(ROOT, 'docs/assets/supplement-fetch-list.txt');
const OUT_DIR = resolve(ROOT, 'public/images/origin-images');
const MAP_OUT = resolve(ROOT, 'docs/assets/images-map.json');

const PRIMARY_HOST = 'omo-oss-image.thefastimg.com';
const FALLBACK_HOST = 'omo-oss-image2.thefastimg.com';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

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

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const lines = readFileSync(LIST, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);

  const existing = existsSync(MAP_OUT) ? JSON.parse(readFileSync(MAP_OUT, 'utf8')) : {};

  let saved = 0;
  let dead = 0;

  for (const url of lines) {
    const base = url.split('?')[0];
    const name = basename(base);
    const ext = name.split('.').pop().toLowerCase();
    const uuid = name.slice(0, -(ext.length + 1));
    const fallback = base.replace(PRIMARY_HOST, FALLBACK_HOST);
    const local = `public/images/origin-images/${uuid}.${ext}`;

    // primary (documents the 567)
    const primary = await downloadOnce(base);
    let result = primary;
    if (!primary.ok) result = await downloadOnce(fallback);

    const entry = {
      uuid,
      ext,
      path: 'image',
      sourceUrl: base,
      fallbackUrl: fallback,
      primaryStatus: primary.status || primary.error || null,
      finalStatus: result.status || result.error || null,
      local,
      context: existing[uuid]?.context || null,
    };

    if (result.ok) {
      writeFileSync(resolve(ROOT, local), result.buf);
      entry.saved = true;
      entry.bytes = result.size;
      saved++;
    } else {
      entry.saved = false;
      dead++;
    }
    existing[uuid] = entry;
  }

  writeFileSync(MAP_OUT, JSON.stringify(existing, null, 2));
  console.log(`supplement fetch done. saved=${saved}/${lines.length} dead=${dead}`);
  console.log(`images-map.json now has ${Object.keys(existing).length} entries -> ${MAP_OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
