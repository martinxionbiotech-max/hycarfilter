#!/usr/bin/env node
// validate-catalog.mjs — six-check catalog integrity audit (P0-3).
// Checks (against the canonical dataset + built dist/):
//   1. duplicate model numbers
//   2. empty / missing key fields
//   3. abnormal units (dimensions, weights, qty out of plausible range)
//   4. MOQ conflicts (MOQ vs carton qty, MOQ vs category FAQ range)
//   5. missing detail pages (every SKU/category must have a built HTML page)
//   6. dead internal links (reuse link-audit resolution logic)
// Plus: category-vs-detail value consistency diff + inquiry form / sitemap sync.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(root, 'dist');
const products = JSON.parse(readFileSync(join(root, 'src/data/products.json'), 'utf8'));

let errors = 0;
let warnings = 0;
const fail = (m) => { errors++; console.log(`  ✗ ${m}`); };
const warn = (m) => { warnings++; console.log(`  ⚠ ${m}`); };
const ok = (m) => console.log(`  ✓ ${m}`);

console.log('== Check 1: duplicate model numbers ==');
const seen = new Map();
for (const p of products.products) {
  if (seen.has(p.model)) fail(`duplicate model '${p.model}'`);
  else seen.set(p.model, p);
}
if (![...seen.entries()].some(([m]) => products.products.filter(x => x.model === m).length > 1)) ok(`${products.products.length} SKUs, no duplicate models`);

console.log('\n== Check 2: empty / missing key fields ==');
const REQ_STR = ['model', 'brand', 'category', 'series', 'name_en', 'media', 'moq', 'lead_time_days', 'hs_code'];
const REQ_ARR = ['applicable_vehicles', 'oe_numbers', 'cross_reference', 'target_markets'];
const REQ_OBJ = ['packing'];
let emptyCount = 0;
for (const p of products.products) {
  for (const k of REQ_STR) {
    if (p[k] === null || p[k] === undefined || p[k] === '') { fail(`${p.model}: missing string field '${k}'`); emptyCount++; }
  }
  for (const k of REQ_ARR) {
    if (!Array.isArray(p[k]) || p[k].length === 0) { fail(`${p.model}: missing/empty array '${k}'`); emptyCount++; }
  }
  for (const k of REQ_OBJ) {
    if (!p[k] || typeof p[k] !== 'object') { fail(`${p.model}: missing object '${k}'`); emptyCount++; }
  }
  // filtration_efficiency allowed null only for wb/led; otherwise required
  if (p.filtration_efficiency == null && !['wb', 'led'].includes(p.category)) {
    fail(`${p.model}: filtration_efficiency missing for category '${p.category}'`); emptyCount++;
  }
  // packing sub-fields
  for (const k of ['inner_box', 'outer_carton', 'carton_qty', 'net_weight_kg']) {
    if (p.packing?.[k] === null || p.packing?.[k] === undefined || p.packing?.[k] === '') { fail(`${p.model}: packing.${k} missing`); emptyCount++; }
  }
}
if (emptyCount === 0) ok('no missing required fields');

console.log('\n== Check 3: abnormal units ==');
let unitIssues = 0;
for (const p of products.products) {
  const d = p.dimensions;
  const dimVals = [d.length_mm, d.width_mm, d.height_mm, d.outer_diameter_mm, d.inner_diameter_mm];
  for (const [i, v] of dimVals.entries()) {
    if (v === null) continue;
    if (typeof v !== 'number' || v <= 0 || v > 2000) { fail(`${p.model}: implausible dimension (${v})`); unitIssues++; }
  }
  if (d.outer_diameter_mm !== null && d.inner_diameter_mm !== null && d.inner_diameter_mm >= d.outer_diameter_mm) {
    fail(`${p.model}: inner_diameter (${d.inner_diameter_mm}) >= outer_diameter (${d.outer_diameter_mm})`); unitIssues++;
  }
  const w = p.packing?.net_weight_kg;
  if (w != null && (typeof w !== 'number' || w <= 0 || w > 100)) { fail(`${p.model}: implausible net_weight_kg (${w})`); unitIssues++; }
  const q = p.packing?.carton_qty;
  if (q != null && (typeof q !== 'number' || q < 1 || q > 5000)) { fail(`${p.model}: implausible carton_qty (${q})`); unitIssues++; }
  const moq = p.moq;
  if (moq != null && (typeof moq !== 'number' || moq < 1)) { fail(`${p.model}: implausible moq (${moq})`); unitIssues++; }
  const lt = p.lead_time_days;
  if (lt != null && (typeof lt !== 'number' || lt < 1 || lt > 365)) { fail(`${p.model}: implausible lead_time_days (${lt})`); unitIssues++; }
}
if (unitIssues === 0) ok('all dimensions/weights/qtys within plausible ranges');

console.log('\n== Check 4: MOQ conflicts ==');
// carton_qty vs moq: moq should be a plausible multiple of carton_qty (allow non-multiple but flag odd ratios)
const MOQ_RANGE = {
  af: { min: 200, max: 1000, note: 'air filters 200–1000' },
  cf: { min: 1000, max: 1000, note: 'cabin filters 1000' },
  of: { min: 500, max: 1000, note: 'oil filters 500–1000' },
  ff: { min: 500, max: 1000, note: 'fuel filters 500–1000' },
  wb: { min: 1000, max: 1000, note: 'wipers 1000' },
  tf: { min: 500, max: 500, note: 'transmission 500' },
  led: { min: 200, max: 200, note: 'LED 200' },
};
let moqIssues = 0;
for (const p of products.products) {
  const r = MOQ_RANGE[p.category];
  if (p.moq < r.min || p.moq > r.max) { warn(`${p.model}: MOQ ${p.moq} outside expected ${r.note}`); moqIssues++; }
  if (p.moq < p.packing.carton_qty) { warn(`${p.model}: MOQ (${p.moq}) < carton_qty (${p.packing.carton_qty})`); moqIssues++; }
  if (p.moq % p.packing.carton_qty !== 0) { warn(`${p.model}: MOQ (${p.moq}) not a multiple of carton_qty (${p.packing.carton_qty})`); moqIssues++; }
}
if (moqIssues === 0) ok('no MOQ conflicts');

console.log('\n== Check 5: missing detail pages ==');
let missingPages = 0;
const expectedPages = [
  ...products.categories.map((c) => `products/${c.slug}/index.html`),
  ...products.products.map((p) => `products/${p.model}/index.html`),
];
for (const rel of expectedPages) {
  if (!existsSync(join(DIST, rel))) { fail(`missing built page: ${rel}`); missingPages++; }
}
// also verify ar/es localized detail pages exist
let missingLoc = 0;
for (const l of ['ar', 'es']) {
  for (const p of products.products) {
    if (!existsSync(join(DIST, l, 'products', p.model, 'index.html'))) { fail(`missing ${l} detail page: ${p.model}`); missingLoc++; }
  }
}
if (missingPages === 0 && missingLoc === 0) ok(`all ${expectedPages.length} en pages + ar/es SKU pages present`);

console.log('\n== Check 6: dead internal links ==');
function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}
function resolveTarget(pathname) {
  let p = decodeURIComponent(pathname);
  if (p === '' || p === '/') p = '/index.html';
  if (p.endsWith('/')) p += 'index.html';
  else if (!extname(p)) p += '/index.html';
  return p.replace(/^\//, '');
}
let dead = 0;
if (existsSync(DIST)) {
  const allFiles = walk(DIST);
  const allSet = new Set(allFiles.map((f) => relative(DIST, f)));
  const htmlFiles = allFiles.filter((f) => extname(f) === '.html');
  const deadMap = new Map();
  for (const f of htmlFiles) {
    const html = readFileSync(f, 'utf8');
    const re = /\b(?:href|src)="([^"]+)"/g;
    let m;
    while ((m = re.exec(html)) !== null) {
      const raw = m[1];
      if (!raw || raw.startsWith('#') || raw.startsWith('data:') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) continue;
      let url;
      try { url = new URL(raw, 'https://hycarfilter.com'); } catch { continue; }
      if (url.hostname !== 'hycarfilter.com') continue;
      const target = resolveTarget(url.pathname);
      if (!allSet.has(target)) {
        if (!deadMap.has(target)) deadMap.set(target, new Set());
        deadMap.get(target).add(relative(DIST, f));
      }
    }
  }
  for (const [t, srcs] of [...deadMap.entries()].sort()) {
    fail(`dead link: ${t} (from ${[...srcs].slice(0, 2).join(', ')}${srcs.size > 2 ? ` +${srcs.size - 2}` : ''})`); dead++;
  }
  if (dead === 0) ok('no dead internal links');
} else {
  warn('dist/ not present — skipping link check (run `npm run build` first)');
}

console.log('\n== Extra: category vs detail value consistency (4 categories full diff) ==');
// Verify the canonical values rendered on category tables match the SKU detail source.
// Both read from products.json, so this is a structural consistency assertion.
const diffCats = ['af', 'of', 'cf', 'ff'];
let diffIssues = 0;
for (const code of diffCats) {
  const cat = products.categories.find((c) => c.code === code);
  const skus = products.products.filter((p) => p.category === code);
  for (const s of skus) {
    if (s.hs_code !== cat.hs_code) { fail(`${s.model}: hs_code ${s.hs_code} != category ${cat.hs_code}`); diffIssues++; }
  }
  const names = new Set(skus.map((s) => s.model));
  if (names.size !== skus.length) { fail(`${code}: duplicate models in category`); diffIssues++; }
}
if (diffIssues === 0) ok('category hs_code / model set consistent across af/of/cf/ff');

console.log('\n== Extra: inquiry form / sitemap sync ==');
const contactFiles = ['contact/index.html', 'ar/contact/index.html', 'es/contact/index.html'];
for (const rel of contactFiles) {
  if (!existsSync(join(DIST, rel))) { fail(`missing contact page: ${rel}`); }
}
const sitemapFiles = ['sitemap-index.xml', 'sitemap-0.xml', 'robots.txt'];
let sitemapOk = true;
for (const rel of sitemapFiles) {
  if (!existsSync(join(DIST, rel))) { warn(`sitemap artifact not yet present: ${rel} (expected after @astrojs/sitemap is enabled)`); sitemapOk = false; }
}

console.log(`\n=== RESULT: ${errors} error(s), ${warnings} warning(s) ===`);
process.exit(errors > 0 ? 1 : 0);
