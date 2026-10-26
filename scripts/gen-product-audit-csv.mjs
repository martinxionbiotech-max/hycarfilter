#!/usr/bin/env node
// gen-product-audit-csv.mjs — emit reports/product-data-audit.csv (22 SKU × field audit).
// Long-format: one row per (SKU, field). Columns: model, category, series, name_en,
// field, value, value_type, confirmation_status, note.
// Reads the canonical dataset + spec-evidence register (no fabricated values).
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const products = JSON.parse(readFileSync(join(root, 'src/data/products.json'), 'utf8'));
const evidence = JSON.parse(readFileSync(join(root, 'src/data/spec-evidence.json'), 'utf8'));

// Flat field list (products.json nested keys -> human label + value extractor).
const FIELD_DEFS = [
  ['filtration_efficiency', 'Filtration Efficiency', (p) => p.filtration_efficiency],
  ['media', 'Media', (p) => p.media],
  ['dimensions.length_mm', 'Length (mm)', (p) => p.dimensions.length_mm],
  ['dimensions.width_mm', 'Width (mm)', (p) => p.dimensions.width_mm],
  ['dimensions.height_mm', 'Height (mm)', (p) => p.dimensions.height_mm],
  ['dimensions.outer_diameter_mm', 'Outer Diameter (mm)', (p) => p.dimensions.outer_diameter_mm],
  ['dimensions.inner_diameter_mm', 'Inner Diameter (mm)', (p) => p.dimensions.inner_diameter_mm],
  ['dimensions.thread', 'Thread', (p) => p.dimensions.thread],
  ['dimensions.gasket', 'Gasket', (p) => p.dimensions.gasket],
  ['materials.housing', 'Housing Material', (p) => p.materials.housing],
  ['materials.media_material', 'Media Material', (p) => p.materials.media_material],
  ['materials.endcap', 'End Cap Material', (p) => p.materials.endcap],
  ['materials.seal', 'Seal Material', (p) => p.materials.seal],
  ['applicable_vehicles', 'Applicable Vehicles', (p) => p.applicable_vehicles],
  ['oe_numbers', 'OE Numbers', (p) => p.oe_numbers],
  ['cross_reference', 'Cross Reference', (p) => p.cross_reference],
  ['packing_inner_box', 'Inner Box', (p) => p.packing.inner_box],
  ['packing_outer_carton', 'Outer Carton', (p) => p.packing.outer_carton],
  ['packing_carton_qty', 'Carton Qty', (p) => p.packing.carton_qty],
  ['packing_net_weight_kg', 'Net Weight (kg)', (p) => p.packing.net_weight_kg],
  ['moq', 'MOQ', (p) => p.moq],
  ['lead_time_days', 'Lead Time (days)', (p) => p.lead_time_days],
  ['certifications', 'Certifications', (p) => p.certifications],
  ['target_markets', 'Target Markets', (p) => p.target_markets],
  ['hs_code', 'HS Code', (p) => p.hs_code],
];

const esc = (v) => {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

const rows = [];
rows.push(['model', 'category', 'series', 'name_en', 'field', 'value', 'value_type', 'confirmation_status', 'note'].map(esc).join(','));

for (const p of products.products) {
  const ev = evidence.skus[p.model]?.fields ?? {};
  for (const [key, label, get] of FIELD_DEFS) {
    const value = get(p);
    // Skip null/empty values (field not applicable for this SKU).
    if (value === null || value === undefined || value === '' ||
        (Array.isArray(value) && value.length === 0)) continue;
    const meta = ev[key] ?? {};
    rows.push([
      p.model,
      p.category,
      p.series,
      p.name_en,
      label,
      Array.isArray(value) ? value.join('; ') : value,
      meta.value_type ?? 'NOT_ANNOTATED',
      meta.status ?? 'NOT_ANNOTATED',
      (meta.note ?? 'MISSING — no evidence annotation in spec-evidence.json'),
    ].map(esc).join(','));
  }
}

mkdirSync(join(root, 'reports'), { recursive: true });
writeFileSync(join(root, 'reports', 'product-data-audit.csv'), rows.join('\n') + '\n', 'utf8');
console.log(`Wrote reports/product-data-audit.csv with ${rows.length - 1} field rows across ${products.products.length} SKUs.`);
