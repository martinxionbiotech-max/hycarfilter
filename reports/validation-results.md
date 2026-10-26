# Validation Results — build · typecheck · automated re-scans

Date: 2026-10-26 · Repo: hycarfilter · Baseline tag: `audit-baseline-20261026`

---

## 1. Build & typecheck

| Command | Result | Detail |
|---|---|---|
| `npm run build` | **PASS** | `195 page(s) built` in ~4.8s, 0 errors. `sitemap-index.xml` + `sitemap-0.xml` regenerated. |
| `npx astro check` | **PASS** | **0 errors, 0 warnings**, 17 hints (non-blocking "implicit any" type hints on `.map((s) => …)` callbacks). |

Notes:
- `astro check` required `@astrojs/check` + `typescript`, installed as devDependencies this run (package.json / package-lock.json updated). No test/lint scripts existed in `package.json` prior to this run.
- Fixed a **pre-existing** typecheck error: `src/data/originImages.ts` cast `} as Record<string, string[]>` on the `aiIllustrations` object (which also contains `prefix: string`). Removed the unsound cast (object is self-typing; consumers use explicit `.production/.qc/.warehouse/.prefix`).
- Fixed a **self-introduced** syntax error (double comma `,,`) in `src/i18n/ui.ts` during the content fix; corrected before validation.

---

## 2. Automated re-scans (six categories)

### 2.1 URL integrity (`scripts/link-audit.mjs`)
- HTML files: 195 · Broken internal targets: **0** · Orphan pages: **0** → **PASS**.

### 2.2 SKU/catalog integrity (`scripts/validate-catalog.mjs`)
- Duplicate models: 0 · Missing fields: 0 · Abnormal units: 0 · Missing detail pages: 0 (29 en + ar/es SKU pages) · Dead links: 0.
- **6 warnings** (cosmetic, pre-existing data characteristic): MOQ not a multiple of carton qty — `hy-af-heavy` (200 vs 6), `hy-of-spinon`/`hy-of-cartridge`/`hy-of-longlife` (1000 vs 30), `hy-of-hd` (500 vs 12), `hy-ff-water` (500 vs 12). MOQ need not be an exact multiple (negotiable), but flagged for order-rounding awareness.
- Result: **0 errors, 6 warnings**.

### 2.3 Canonical / hreflang
- Verified sample: self-canonical + x-default/en/ar/es alternates correct on EN, self-canonical on AR/ES. → **PASS**.

### 2.4 Schema
- `Organization` + `PostalAddress` JSON-LD on all **195** pages. `Product` / `BreadcrumbList`: **absent** (documented gap). → **PASS (Org) / FAIL (Product/Breadcrumb)**.

### 2.5 Internal links
- 0 dead internal targets (link-audit). Category↔SKU↔blog "Related Reading" wiring resolves. → **PASS**.

### 2.6 Sitemap
- 192 URLs, **0** `/404/` entries (was 194 with 2 404). → **PASS (after fix)**.

---

## 3. Spec-evidence ↔ products.json consistency

- products.json SKUs: **22** · spec-evidence SKUs: **22** → full coverage (no SKU missing an evidence record).
- Field annotations: **446** total across 22 SKUs. Distribution:
  - `value_type`: reference **161**, design-target **153**, typical **132**.
  - `status`: unverified **161**, pending-sample **153**, pending-order **132**.
  - Mapping is cleanly paired (reference↔unverified, design-target↔pending-sample, typical↔pending-order).
- Lower annotation counts for `wb` (17) and `led` (16) are **correct**, not gaps — those categories have no filtration efficiency, thread or inner-diameter fields.
- Generated `reports/product-data-audit.csv`: 446 field rows, **0** "NOT_ANNOTATED", **0** missing notes → **PASS**.

---

## 4. Modified files (this audit)

| File | Change |
|---|---|
| `astro.config.mjs` | Exclude `/404/` from sitemap |
| `src/layouts/BaseLayout.astro` | Add `og:image` + Twitter card |
| `src/pages/index.astro` | "seed SKUs" → "SKUs" |
| `src/pages/factory.astro` | AI illustration alt "photo" → "illustration" (3×) |
| `src/pages/ar/factory.astro` | AI illustration alt "صورة" → "رسم توضيحي" (3×) |
| `src/pages/products/[slug].astro` | Remove "src/data/products.json" path (2×) |
| `src/i18n/ui.ts` | AR/ES "src/data/products.json" → "our product dataset" |
| `src/data/originImages.ts` | Remove unsound `as Record<string, string[]>` cast |
| `package.json` / `package-lock.json` | Add `@astrojs/check` + `typescript` (dev) |
| `scripts/gen-product-audit-csv.mjs` | New CSV generator (audit tooling) |

---

## 5. Rollback

Everything is committed locally only (see `git log`). Rollback to baseline:
```
git checkout audit-baseline-20261026 -- astro.config.mjs src/
git checkout audit-baseline-20261026 -- package.json package-lock.json
```
or `git reset --hard audit-baseline-20261026` (destroys the audit changes; use only if the fixes are rejected).
