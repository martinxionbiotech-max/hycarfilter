#!/usr/bin/env node
// link-audit.mjs — scan built dist/ for broken internal links + orphan pages.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const allFiles = walk(DIST);
const allSet = new Set(allFiles.map((f) => relative(DIST, f)));
const htmlFiles = allFiles.filter((f) => extname(f) === '.html');

// resolve an absolute URL path to a dist file (index.html for dirs)
function resolveTarget(pathname) {
  let p = decodeURIComponent(pathname);
  if (p === '' || p === '/') p = '/index.html';
  if (p.endsWith('/')) p += 'index.html';
  else if (!extname(p)) p += '/index.html';
  return p.replace(/^\//, '');
}

const broken = new Map(); // target -> Set of sources
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
      if (!broken.has(target)) broken.set(target, new Set());
      broken.get(target).add(relative(DIST, f));
    }
  }
}

// orphan pages (html with no incoming internal html link)
const incoming = new Set();
for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  const re = /\bhref="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const raw = m[1];
    if (!raw || raw.startsWith('#') || raw.startsWith('data:') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) continue;
    let url;
    try { url = new URL(raw, 'https://hycarfilter.com'); } catch { continue; }
    if (url.hostname !== 'hycarfilter.com') continue;
    const target = resolveTarget(url.pathname);
    if (target.endsWith('.html')) incoming.add(target);
  }
}
const orphans = htmlFiles
  .map((f) => relative(DIST, f))
  .filter((h) => h !== 'index.html' && h !== '404.html' && !h.includes('/404/') && !incoming.has(h));

console.log(`HTML files: ${htmlFiles.length}`);
console.log(`All files: ${allFiles.length}`);
console.log(`\nBroken internal targets: ${broken.size}`);
for (const [t, srcs] of [...broken.entries()].sort()) {
  const s = [...srcs].slice(0, 3).join(', ');
  console.log(`  ✗ ${t}  (from: ${s}${srcs.size > 3 ? ` +${srcs.size - 3} more` : ''})`);
}
console.log(`\nOrphan pages (no incoming href): ${orphans.length}`);
for (const o of orphans.sort()) console.log(`  · ${o}`);
