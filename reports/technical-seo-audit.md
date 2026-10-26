# Technical SEO Audit — P0 (sitemap/robots/canonical) + P2 (static checks)

Date: 2026-10-26 · Repo: hycarfilter · Baseline tag: `audit-baseline-20261026`

---

## 1. Sitemap & robots.txt

| Item | Status | Detail |
|---|---|---|
| `sitemap-index.xml` | PASS | References `sitemap-0.xml` only (single file, < 50k URLs). |
| `sitemap-0.xml` URL count | PASS | 192 URLs (all non-404 pages). |
| 404 pages in sitemap | **FAIL → FIXED** | `/ar/404/` and `/es/404/` were emitted (they render as real routes). Excluded via sitemap `filter`. |
| `robots.txt` | PASS | `User-agent: * / Allow: /` + `Sitemap: https://hycarfilter.com/sitemap-index.xml`. |

**Fix applied** — `astro.config.mjs`:
```js
sitemap({
  filter: (page) => !page.endsWith('/404/'),
}),
```
- Evidence: rebuilt `dist/sitemap-0.xml` now contains **0** occurrences of `/404/` (was 2). URL count 194 → 192.
- Rollback: remove the `filter` line → 404 pages re-enter sitemap.

---

## 2. Canonical & hreflang (trilingual)

**Result: PASS** — `BaseLayout.astro` auto-generates, on every indexable page:
- `<link rel="canonical">` = self URL in the active locale.
- `x-default` + `en` + `ar` + `es` `<link rel="alternate" hreflang=…>` (from `hreflangAlternates()`).

Verified sample `dist/products/hy-af-nano/index.html`:
```
canonical → https://hycarfilter.com/products/hy-af-nano/
x-default → /products/hy-af-nano/
en → /products/hy-af-nano/
ar → /ar/products/hy-af-nano/
es → /es/products/hy-af-nano/
```
`ar` and `es` pages self-canonicalize correctly (`/ar/products/hy-af-nano/`).

Routing: `/` (en, no prefix) · `/ar/…` · `/es/…` — `prefixDefaultLocale: false`. `trailingSlash: 'ignore'`.

---

## 3. 404 / noindex

**Result: PASS** — EN `404.astro` (→ `404.html`) and AR/ES `404.astro` all pass `noindex` to `BaseLayout`, emitting `<meta name="robots" content="noindex, follow">`. Canonical + hreflang suppressed on 404 (guarded by `!noindex`).

---

## 4. Structured data (Schema.org)

| Type | Status | Detail |
|---|---|---|
| `Organization` + `PostalAddress` | PASS | Present on all **195** pages via `BaseLayout.astro`. Uses `site.entity` (legal name, `foundingDate: 2023-11-28`, CN address, `sameAs` → Baidu Aiqicha profile). `@id` = `/#organization`. |
| `Product` | **FAIL (gap)** | Not present on SKU/detail pages. Recommend adding `Product` (name, brand, category, `sku`) using only identity fields — **exclude** unverified spec values (dimensions/efficiency are `reference`/`unverified` and must not be published as schema measurements). |
| `BreadcrumbList` | **FAIL (gap)** | Breadcrumbs render as plain text (`Products › Air Filter › hy-af-nano`); no `BreadcrumbList` JSON-LD and no `<nav aria-label="breadcrumb">` semantics. |
| `WebSite` | FAIL (gap, optional) | No `WebSite` schema with SearchAction. Low priority. |

**Result: Organization PASS; Product/BreadcrumbList NOT PRESENT.** Not added this round — Product schema with unverified specs would risk fabrication; recommended as a follow-up using only verified/identity fields.

---

## 5. Social sharing (Open Graph / Twitter)

**Result: FAIL → FIXED.** `BaseLayout.astro` previously emitted `og:title/description/type/site_name` but **no `og:image` and no Twitter card**.

**Fix applied** — added:
```html
<meta property="og:image" content="…/images/company/company-main.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" … /> <meta name="twitter:description" … /> <meta name="twitter:image" … />
```
`ogImage` resolved as absolute URL against `Astro.site`.
- Evidence: `dist/index.html` now contains `og:image` + `twitter:card`.
- Rollback: remove the 5 added meta tags.

---

## 6. Title / Description / H1 / alt (static, 15-page trilingual sample)

Sampled EN/AR/ES across: home, about, factory, contact, products index, 1 category (air-filter), 2 SKUs (hy-af-nano, hy-of-spinon), blog index, 1 blog post, disclaimer, applications index.

| Check | Status | Detail |
|---|---|---|
| Unique `<title>` per page | PASS | `{pageTitle} \| hycarfilter — {tagline}`; page titles are distinct. |
| `<meta name="description">` | PASS | Page-provided or locale fallback in `BaseLayout`. |
| Single `<h1>` per page | PASS | All sampled pages render one `<h1>`. |
| Image `alt` attributes | PASS | All sampled images carry descriptive `alt` (category/product/photo/illustration). |
| `<html lang>` + `dir` | PASS | `en`(ltr)/`ar`(rtl)/`es`(ltr) set from `localeMeta`. |
| Viewport meta | PASS | `<meta name="viewport" content="width=device-width, initial-scale=1">`. |

**Result: PASS** on the statically checkable items.

---

## 7. Mobile / CLS

**Result: NOT_TESTED.** Static analysis confirms responsive CSS (`@media` breakpoints in Header/Footer/pages, `<meta viewport>`), but CLS / layout-shift and real mobile rendering require a browser (Lighthouse/Playwright) — not runnable in this static pass. Recommended as a follow-up.

---

## 8. HTTP status & redirects

**Result: PARTIAL / NOT_TESTED (live).** Static `dist` confirms:
- `Astro.redirect('/products/')` for unknown product slugs.
- 404 routes exist and are `noindex`.

Live HTTP status and any redirect logic for the production origin (`hycarfilter.com`, CF Pages) were **not** tested this round (production deploy requires user authorization; no egress was attempted).

---

## Summary — Technical SEO

| # | Finding | Status |
|---|---|---|
| 1 | 404 pages in sitemap | FAIL → FIXED |
| 2 | robots.txt + sitemap index | PASS |
| 3 | canonical + hreflang (trilingual) | PASS |
| 4 | 404 noindex | PASS |
| 5 | Organization schema (site-wide) | PASS |
| 6 | Product / BreadcrumbList schema | FAIL (gap, not added) |
| 7 | og:image + Twitter card | FAIL → FIXED |
| 8 | Title/desc/H1/alt/lang/dir | PASS |
| 9 | Mobile/CLS | NOT_TESTED (needs browser) |
| 10 | Live HTTP/redirects | NOT_TESTED (deploy gated) |
