# Trust & Evidence Audit — P0 (Identity · Certifications · Brand History)

Date: 2026-10-26 · Repo: hycarfilter (Astro trilingual main site) · Baseline tag: `audit-baseline-20261026`

Scope: enterprise identity consistency, brand-vs-entity founding disclosure, and full-site certification / performance-claim wording (EN + AR + ES). The "tech sub-site" (`tech.hycarfilter.com`) is a **separate repository not present in this working tree**; its certification wording could not be grepped here → marked NOT_TESTED (out of repo scope).

---

## 1. Enterprise identity — five-way consistency

| Location | Legal name | Credit code | Address | Founded |
|---|---|---|---|---|
| `src/data/site.ts` (single source) | Qinghe County Hongying Auto Parts Co., Ltd. | 91130534MAD6454E17 | 漓江街106号 | 2023-11-28 |
| About page | ✅ via `site.entity` | ✅ | ✅ | ✅ |
| Factory page | ✅ via `site.entity` | ✅ | ✅ | ✅ |
| Contact page | ✅ (name only; no credit code shown) | — | ✅ via `site.address` | — |
| Footer | ✅ via `site.entity` | ✅ | — | ✅ |
| Organization JSON-LD (schema) | ✅ via `site.entity` | — | ✅ (structured) | ✅ `foundingDate` |

**Result: PASS** — All five surfaces reference the single `site.entity` object in `src/data/site.ts`; there is no duplicated/hard-coded divergence. The legal name, credit code, address and founding date are identical wherever rendered.

Evidence: `grep` for `Hongying`, `91130534MAD6454E17`, `漓江街`, `2023-11-28` across `src/` returns only `site.ts` as the value source; every consumer imports `site` / `site.entity`.

---

## 2. Brand history — 2013 lineage vs 2023 entity disclosure

**Result: PASS** — The brand-vs-entity relationship is disclosed side-by-side in every language:

- `site.brandHistory`: `brandFounded: 2013` (brand & manufacturing team lineage), `entityFounded: 2023-11-28` (legal entity registration).
- About (EN): "Two facts are disclosed side by side… When this site says 'since 2013', it refers to the brand and team lineage, not the registration date of the legal entity."
- Factory (EN): "Brand since 2013 · entity 2023-11-28".
- Footer (all langs): "BRAND SINCE 2013" (explicitly scoped to *brand*).
- Home hero chip: "SINCE 2013 · Qinghe, China" — matches `site.since = 2013` (brand lineage).
- AR/ES mirrors present in `ar/about.astro`, `es/about.astro` (Arabic "النسب التجاري منذ 2013" / "الكيان القانوني مسجّل 2023-11-28"; Spanish "Linaje de marca Desde 2013" / "Entidad jurídica Registrada 2023-11-28").

No page claims the *entity* has existed since 2013.

---

## 3. Certification framework wording — full-site sweep

Standards searched: ISO 9001, IATF 16949, ISO 5011, SAE J726, ISO 4548, CE, RoHS (EN + AR + ES, incl. `i18n/` content files).

**Result: PASS** — No "holds a certificate" or "passed testing" claims found. Every occurrence uses honest framework/reference wording:

- Home / About / Factory: "ISO 9001 · IATF 16949 (**framework**)" / "**(marco)**" / "**(إطار)**".
- `products.json` `certifications`: `"ISO 9001 framework"`, `"IATF 16949 framework"`, `"CE (self-declared)"`, `"RoHS (self-declared)"`.
- `spec-evidence.json`: every `certifications` field is annotated `value_type: reference`, `status: unverified`, with note "Framework reference, not a certificate claim."
- Factory `certFramework`: "We operate to an ISO 9001 quality-management **framework**…", "IATF 16949 (**framework**)… specific certification status is confirmed per order and market."
- Test standards are always framed as *reference* standards, never as passed tests: "test documentation is available for OEM projects **on request**", "we can arrange reference-standard test documentation… so you can verify performance."
- `disclaimer.astro` (EN/AR/ES) contains an explicit certification disclaimer (see §4).

### Minor finding (FAIL, low severity)
- `src/pages/index.astro:18` — "Hydraulic-tapped threads — **Precision threads guarantee** a clean, repeatable spin-on fit with zero cross-threading." The word "guarantee" is an absolute performance superlative. It describes thread quality (not a certification), but "guarantee … zero cross-threading" is unverifiable as written.
  - Status: **FAIL** (weak superlative, not fabrication).
  - Risk: low; search engines may discount unverifiable absolute claims; buyer trust risk.
  - Recommendation: reword to "are engineered for a clean, repeatable spin-on fit" or "reduce cross-threading risk".
  - Not fixed this round (wording change would need to be mirrored in AR/ES strength cards; deferred as an editorial decision).

---

## 4. Legal / disclaimer coverage

**Result: PASS** — `disclaimer.astro` (EN/AR/ES), `terms.astro`, `privacy.astro`, `cookies.astro` exist and are trilingual. The Disclaimer explicitly covers: specifications as indicative values, certification frameworks "not a guarantee that any particular certificate is current/in scope", performance "no warranty or guarantee", and buyer responsibility for destination-market approvals.

---

## Summary — Trust & Evidence

| # | Finding | Status |
|---|---|---|
| 1 | Five-way enterprise identity consistency | PASS |
| 2 | Brand-vs-entity founding disclosure (2013/2023) | PASS |
| 3 | Certification wording (ISO/IATF/SAE/CE/RoHS) — framework only | PASS |
| 4 | Legal/disclaimer coverage | PASS |
| 5 | "guarantee … zero cross-threading" superlative (index) | FAIL (low) |
| 6 | tech sub-site certification wording | NOT_TESTED (separate repo) |
