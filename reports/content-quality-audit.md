# Content Quality Audit — P1 (page-by-page · duplicate/template · factory imagery · inquiry flow)

Date: 2026-10-26 · Repo: hycarfilter · Baseline tag: `audit-baseline-20261026`

Scope: home / 7 category / 22 SKU / 20 blog / About / Factory / Contact / Disclaimer, plus factory real-vs-AI imagery honesty and the inquiry (mailto/WhatsApp) flow across EN/AR/ES.

---

## 1. Home page

| Finding | Status | Detail |
|---|---|---|
| "seed SKUs" internal jargon | **FAIL → FIXED** | Hero stat read "22 **seed SKUs**" (dataset status leaked to a public B2B page). Spanish correctly used "referencias", Arabic "موديلًا أساسيًا". Changed EN to "SKUs". |
| "guarantee … zero cross-threading" | FAIL (low) | Absolute superlative on thread-quality card (see trust audit §3). Deferred. |
| MOQ/lead-time FAQ | PASS | "typically 500–1,000 pcs… 15–25 days" — ranges, no fabricated precision. |

---

## 2. Category pages (7) — `products/[slug].astro` category branch

**Result: PASS (no template duplication).** Each category pulls distinct content from `categoryContent[code]` (intro, selection, opinion, faqs) + `procurementConcerns[code]`. No two categories share identical body copy. Category-specific SKU tables are generated from the canonical dataset.

---

## 3. SKU detail pages (22) — `products/[slug].astro` SKU branch

**Result: PASS** with one finding:

- Spec table renders per-SKU values with a **"Data basis"** tag (measured / design-target / typical / reference) from `spec-evidence.json`, plus an explicit "design reference values" disclaimer. Honest and non-fabricating.
- **Finding (FAIL, low): "src/data/products.json" internal jargon** — two labels on the category + SKU pages exposed the literal source-file path ("Canonical values (defined once in `src/data/products.json`)…"). Developer-facing detail on a public page.
  - **Fix applied**: reworded EN to "our product dataset"; AR/ES strings updated in `ui.ts`.
  - Rollback: revert the 4 string edits (2 in `[slug].astro`, 2 in `ui.ts`).

---

## 4. Blog (20 posts)

| Finding | Status | Detail |
|---|---|---|
| Duplicate / templated body copy | PASS | Posts are substantive, unique, exporter-perspective long-form (air/oil/cabin/fuel/wiper/transmission/LED + 1 news post). No repeated template paragraphs across posts. |
| Slug ↔ title mismatch | **FAIL / NEEDS_VERIFICATION** | Post `slug: 'news-frankfurt-2025'` but `title: 'Hycarfilter at Automechanika Shanghai 2025'`. "Frankfurt" (Automechanika Frankfurt) ≠ "Shanghai". Body clarifies "Shanghai Frankfurt auto parts show" (Messe Frankfurt–organized), so the *content* is self-consistent, but the **slug is misleading**. **Route preserved** (铁律 — no slug change); flagged for owner decision. |
| Customer/event claims | PASS | The event is disclosed as a factual news post with booth/date (Hall 1.1, Booth A17, Nov 26–29 2025); no fabricated customer cases or testimonials anywhere. |

---

## 5. About / Factory / Contact / Disclaimer

| Page | Finding | Status |
|---|---|---|
| About | Entity disclosure + brand lineage + "single source of truth" note + source citation (Baidu Aiqicha, retrieved 2026-10-25) | PASS |
| Factory | Production/QC/logistics/cert sections; honest "framework" wording; business-license + qualification imagery with provenance separation | PASS (see §7) |
| Contact | Inquiry form + email/WhatsApp/phone/address + RFQ guidance + process steps | PASS (see §6) |
| Disclaimer | Covers specs/certifications/performance/HS codes/destination compliance | PASS |

---

## 6. Inquiry / email / WhatsApp flow (trilingual)

**Result: PASS — consistent across EN/AR/ES.**

- Contact form `action={mailto:${site.email}}` (all three langs) — opens the buyer's mail client; a note explains this ("Submitting opens your email client").
- `mailto:${site.email}` links → `martin@hycarfilter.com`.
- `tel:${site.phone}` → `+86 13323237275`.
- WhatsApp → `https://wa.me/8613323237275` (from `site.whatsappLink`), used identically in Footer, Contact, InquiryCta, WhatsAppFloat (all langs).
- No backend form endpoint (static site); mailto is the deliberate, disclosed mechanism.

Note (observation, not a bug): `site.email` (contact) = `martin@hycarfilter.com` while `site.entity.registryEmail` = `hy@hongyingfilter.com`; `site.phone` = `+86 13323237275` while `site.entity.registryPhone` = `13930925240`. These are distinct contact vs registry facts — not a conflict, but worth a note for the owner.

---

## 7. Factory page — real photos vs AI illustrations (honesty)

**Result: FAIL → FIXED (alt-text honesty).**

- Structure is honest: real recovered photos (`originImages.factory`, `factorySections.production/qc/warehouse`) sit in `.factory-strip`; AI renderings (`originImages.aiIllustrations.*`, served from `/images/ai-illustrations/`) sit in a separate `.ai-illustrations` container with a dashed border. Provenance is documented in `originImages.ts` ("AI-generated illustrative renderings — NOT company photography").
- **Issue**: the AI illustration `<img alt>` text said **"photo"** (EN) / **"صورة"** (AR), mislabeling AI renderings as photography. Spanish already correctly said **"ilustración"**.
  - **Fix applied**: EN `photo → illustration`; AR `صورة → رسم توضيحي` (3 blocks each). ES unchanged (already correct).
  - Rollback: revert the 6 alt-text edits in `factory.astro` + `ar/factory.astro`.

---

## Summary — Content Quality

| # | Finding | Status |
|---|---|---|
| 1 | "seed SKUs" jargon (home) | FAIL → FIXED |
| 2 | "src/data/products.json" jargon (product pages) | FAIL → FIXED |
| 3 | AI illustration alt "photo" (EN/AR) | FAIL → FIXED |
| 4 | blog slug "frankfurt" vs "Shanghai" | FAIL (route preserved) |
| 5 | "guarantee … zero cross-threading" | FAIL (low, deferred) |
| 6 | Category/SKU/blog duplicate/template content | PASS |
| 7 | Inquiry flow (mailto/wa.me) trilingual | PASS |
| 8 | Factory photo/AI provenance separation | PASS (after alt fix) |
| 9 | About/Factory/Contact/Disclaimer | PASS |
