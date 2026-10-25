#!/usr/bin/env node
/**
 * product-gallery-map.mjs — map every product-detail page to its category and
 * full product-gallery image set (deduped), split downloaded vs missing.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const MIRROR = resolve(ROOT, '../../crawls/hongyingfilter/www.hongyingfilter.com');
const PD = resolve(MIRROR, 'Products_details');
const IMG_DIR = resolve(ROOT, 'public/images/origin-images');

const CHROME = new Set([
  'ceb3a35a-6b13-4795-b1c6-534bcfd360b7', // logo
  '52bc733a-d297-46d4-8c02-68d8fa88f4a4', // logo
  '3e656741-e4c7-408e-8120-39b80602cd3c', // watermark
  '2ece800d-0e3d-40ca-99df-4d390a6bd04a', // wechat icon
  '3b5af20a-f7f4-488c-926d-199e7143a57e', // whatsapp icon
  '443b0bc6-d369-4c4b-bdc3-20874a3c7492', // email icon
  'e3bbe47f-b5d9-47d7-b01a-f64ffd62b646', // whatsapp icon
  'f36be03b-175c-415e-8f39-b369f9f427cb', // wechat icon
]);

// shared category hero images (appear on every product detail page as nav/sidebar)
const HERO = new Map([
  ['31b16d90-dc76-4124-ae0b-83660fbef46a', 'af'],
  ['83a2ef0c-a319-41da-8c5d-48427cf81a15', 'cf'],
  ['3984ca85-ac40-4db9-9b0a-c54b7e0a40d6', 'of'],
  ['a8b8ca77-b5e8-4389-93bb-f3132306bcac', 'of'],
  ['fc713f63-b89e-42f1-ad35-71a1de675151', 'ff'],
  ['f7c37730-894d-4ef1-9d8f-3cc00cb47a5d', 'wb'],
  ['d34a043d-adfa-4b3b-bd54-03a8c3239a8b', 'tf'],
  ['c99ad728-01ac-4557-91b3-c517085b24a4', 'led'],
]);

const CATS = ['Air Filter', 'Cabin Filter', 'Oil Filter', 'Fuel Filter', 'Wiper', 'Transmission Filter Screen', 'LED Lights'];
const CAT_CODE = {
  'Air Filter': 'af', 'Cabin Filter': 'cf', 'Oil Filter': 'of', 'Fuel Filter': 'ff',
  'Wiper': 'wb', 'Transmission Filter Screen': 'tf', 'LED Lights': 'led',
};

const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

function downloaded() {
  const s = new Set();
  for (const n of readdirSync(IMG_DIR)) s.add(n.replace(/\.[^.]+$/, ''));
  return s;
}

function extOf(name) {
  const m = name.match(/\.([a-z0-9]+)$/i);
  return m ? m[1].toLowerCase() : '';
}

function main() {
  const dl = downloaded();
  const pages = readdirSync(PD).filter((n) => n.endsWith('.html'));
  const result = {};
  const pageMap = [];

  for (const f of pages) {
    const html = readFileSync(resolve(PD, f), 'utf8');
    const titleM = html.match(/<title>([^<]*)<\/title>/);
    const title = titleM ? titleM[1] : f;
    // category = first CATS word found in title
    let cat = 'other';
    for (const c of CATS) {
      if (title.includes(c)) { cat = c; break; }
    }
    const code = CAT_CODE[cat] || 'other';

    // all uuid images on page
    const uuids = new Set();
    const imgRe = /<img\b[^>]*>/g;
    let m;
    while ((m = imgRe.exec(html))) {
      const tag = m[0];
      const lazy = (tag.match(/\blazy="([^"]+)"/) || [])[1] || '';
      const src = (tag.match(/\bsrc="([^"]+)"/) || [])[1] || '';
      const um = (lazy || src).match(UUID_RE);
      if (um) uuids.add(um[0]);
    }

    // gallery = non-chrome, non-hero images
    const gallery = [...uuids].filter((u) => !CHROME.has(u) && !HERO.has(u));
    pageMap.push({ file: f, title, cat, code, gallery });
    if (!result[code]) result[code] = { cat, pages: [], gallery: new Set() };
    result[code].pages.push(f);
    for (const g of gallery) result[code].gallery.add(g);
  }

  // render summary
  const summary = {};
  for (const [code, v] of Object.entries(result)) {
    const gal = [...v.gallery];
    summary[code] = {
      cat: v.cat,
      pageCount: v.pages.length,
      gallery: gal.map((u) => {
        const name = dl.has(u) ? readdirSync(IMG_DIR).find((n) => n.startsWith(u + '.')) : null;
        return { uuid: u, downloaded: dl.has(u), file: name || null };
      }),
      missing: gal.filter((u) => !dl.has(u)),
    };
  }

  mkdirSync(resolve(ROOT, 'docs/assets'), { recursive: true });
  writeFileSync(resolve(ROOT, 'docs/assets/product-gallery-map.json'), JSON.stringify(summary, null, 2));
  writeFileSync(resolve(ROOT, 'docs/assets/product-page-map.json'), JSON.stringify(pageMap, null, 2));

  console.log('=== PER-CATEGORY PRODUCT GALLERY ===');
  for (const [code, v] of Object.entries(summary)) {
    console.log(`\n[${code}] ${v.cat} — ${v.pageCount} pages, ${v.gallery.length} gallery images (${v.missing.length} missing)`);
    for (const g of v.gallery) {
      console.log(`  ${g.downloaded ? 'HAVE' : 'MISS'} ${g.uuid}${g.file ? '  -> ' + g.file : ''}`);
    }
  }
}

main();
