import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';

const DIST = resolve('dist');
const MIME = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml' };

const server = createServer((req, res) => {
  let p = resolve(DIST, '.' + decodeURIComponent(req.url.split('?')[0]));
  if (req.url.endsWith('/')) p = resolve(p, 'index.html');
  try {
    const data = readFileSync(p);
    res.writeHead(200, { 'Content-Type': MIME[extname(p).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  } catch { res.writeHead(404); res.end('nf'); }
});
await new Promise(r => server.listen(4173, r));

const { chromium } = await import('playwright');
const CHROMIUM_EXE = '/root/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';

const pages = ['/products/hy-af-nano/', '/products/hy-led-h4/', '/blog/air-filter-how-it-works/', '/blog/oil-filter-how-it-works/', '/factory/'];

const ctx = await chromium.launchPersistentContext('/tmp/hy-render-verify', {
  executablePath: CHROMIUM_EXE, headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = ctx.pages()[0] || await ctx.newPage();
let fail = 0;
for (const p of pages) {
  await page.goto('http://localhost:4173' + p, { waitUntil: 'domcontentloaded', timeout: 20000 }).catch(()=>{});
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 80));
    }
    window.scrollTo(0, document.body.scrollHeight);
    // wait for all images to finish (complete or error), bounded by 8s
    await new Promise(r => setTimeout(r, 1500));
  });
  const imgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img')).map(i => ({ src: i.getAttribute('src'), ok: i.naturalWidth > 0 }))
  );
  const total = imgs.length, broken = imgs.filter(i => !i.ok).length;
  if (broken > 0) fail++;
  console.log(`${p} -> ${total} imgs, broken=${broken}`);
  if (broken > 0) imgs.filter(i=>!i.ok).forEach(i => console.log('   BROKEN: ' + i.src));
}
await ctx.close();
server.close();
console.log(fail === 0 ? 'RENDER_VERIFY_OK' : 'RENDER_VERIFY_FAIL');
