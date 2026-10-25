#!/usr/bin/env node
/**
 * gap-analysis.mjs — compare every <img> reference in the crawl mirror
 * against the already-downloaded origin images, and emit a gap report.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const MIRROR_DIR = resolve(ROOT, '../../crawls/hongyingfilter/www.hongyingfilter.com');
const IMG_DIR = resolve(ROOT, 'public/images/origin-images');
const OUT_DIR = resolve(ROOT, 'docs/assets');

const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

// page type classification by relative path
function classify(rel) {
  const r = rel.toLowerCase();
  if (r.startsWith('products_details/')) return 'product-detail';
  if (r.startsWith('blog_details/')) return 'blog-detail';
  if (r.startsWith('blog/')) return 'blog-list';
  if (r.startsWith('strength/')) return 'strength';
  if (r.startsWith('products/')) return 'products-list';
  if (r.startsWith('tagdetail/')) return 'tagdetail';
  if (r === 'index.html') return 'home';
  if (r === 'about.html') return 'about';
  if (r === 'factory.html') return 'factory';
  if (r === 'video.html') return 'video';
  if (r === 'qualification.html') return 'qualification';
  if (r === 'service.html') return 'service';
  if (r === 'policy.html') return 'policy';
  if (r === 'taglist.html') return 'taglist';
  return 'other';
}

function walk(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    for (const name of readdirSync(d)) {
      const full = resolve(d, name);
      if (statSync(full).isDirectory()) stack.push(full);
      else if (name.endsWith('.html')) out.push(full);
    }
  }
  return out;
}

function parseTag(tag) {
  const src = (tag.match(/\bsrc="([^"]+)"/) || [])[1] || '';
  const lazy = (tag.match(/\blazy="([^"]+)"/) || [])[1] || '';
  const alt = (tag.match(/\balt="([^"]*)"/) || [])[1] || '';
  const title = (tag.match(/\btitle="([^"]*)"/) || [])[1] || '';
  const url = lazy || src;
  return { url, alt, title, isLazy: !!lazy && !src.includes('omo-oss') };
}

function main() {
  const files = walk(MIRROR_DIR);
  // imageUuid -> { url, alt, title, pages:Set, pageTypes:Set }
  const refs = new Map();
  const nonUuidImgs = new Map(); // non-CDN img url -> pages

  for (const file of files) {
    const rel = file.slice(MIRROR_DIR.length + 1).replace(/\\/g, '/');
    const type = classify(rel);
    const html = readFileSync(file, 'utf8');
    const imgRe = /<img\b[^>]*>/g;
    let m;
    while ((m = imgRe.exec(html))) {
      const tag = m[0];
      const { url, alt, title } = parseTag(tag);
      if (!url) continue;
      const uuidM = url.match(UUID_RE);
      if (!uuidM) {
        if (url.includes('omo-oss')) {
          // non-uuid OSS url (rare)
          nonUuidImgs.set(url, (nonUuidImgs.get(url) || new Set()).add(type + ':' + rel));
        }
        continue;
      }
      const uuid = uuidM[0];
      if (!refs.has(uuid)) {
        refs.set(uuid, { url, alt, title, pages: new Set(), types: new Set() });
      }
      const r = refs.get(uuid);
      r.pages.add(rel);
      r.types.add(type);
      if (!r.alt && alt) r.alt = alt;
      if (!r.title && title) r.title = title;
    }
  }

  // downloaded set
  const downloaded = new Set();
  for (const name of readdirSync(IMG_DIR)) {
    const uuid = name.replace(/\.[^.]+$/, '');
    downloaded.add(uuid);
  }

  const missing = []; // referenced but not downloaded
  const unused = [];  // downloaded but not referenced
  const covered = []; // referenced AND downloaded

  for (const [uuid, r] of refs) {
    const rec = {
      uuid,
      alt: r.alt,
      title: r.title,
      types: [...r.types],
      pageCount: r.pages.size,
      pages: [...r.pages].sort(),
    };
    if (downloaded.has(uuid)) covered.push(rec);
    else missing.push(rec);
  }
  for (const uuid of downloaded) {
    if (!refs.has(uuid)) unused.push(uuid);
  }

  // summary by type
  const byType = {};
  for (const [uuid, r] of refs) {
    for (const t of r.types) {
      byType[t] = byType[t] || { total: 0, missing: 0 };
      byType[t].total++;
      if (!downloaded.has(uuid)) byType[t].missing++;
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    mirrorFiles: files.length,
    uniqueCdnRefs: refs.size,
    downloaded: downloaded.size,
    missingCount: missing.length,
    unusedCount: unused.length,
    coveredCount: covered.length,
    byType,
    missing,
    unused,
    nonUuidOss: [...nonUuidImgs.keys()],
  };

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(resolve(OUT_DIR, 'gap-report.json'), JSON.stringify(report, null, 2));

  console.log('mirrorFiles:', files.length);
  console.log('uniqueCdnRefs:', refs.size);
  console.log('downloaded:', downloaded.size);
  console.log('missing:', missing.length);
  console.log('unused:', unused.length);
  console.log('covered:', covered.length);
  console.log('\nBY TYPE (total refs / missing):');
  for (const [t, v] of Object.entries(byType)) {
    console.log(`  ${t}: ${v.total} / ${v.missing}`);
  }
  console.log('\nMISSING (uuid | alt | types):');
  for (const m of missing) {
    console.log(`  ${m.uuid} | ${m.alt} | ${m.types.join(',')} | ${m.pageCount}p`);
  }
  console.log('\nUNUSED downloaded (not referenced in mirror):', unused.length);
  for (const u of unused) console.log('  ' + u);
  console.log('\nnonUuidOss:', report.nonUuidOss.length);
  for (const u of report.nonUuidOss) console.log('  ' + u);
}

main();
