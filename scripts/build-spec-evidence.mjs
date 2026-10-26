#!/usr/bin/env node
// build-spec-evidence.mjs — generate data/spec-evidence.json from products.json.
// Annotates every key SKU field with a value_type, source, confirmation status
// and note, so the site can render "Data basis" tags honestly (P0-2 audit).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const products = JSON.parse(readFileSync(join(root, 'src/data/products.json'), 'utf8'));

// value_type taxonomy (see spec-evidence.json _meta for definitions)
const T = {
  measured: 'measured',
  designTarget: 'design-target',
  typical: 'typical',
  reference: 'reference',
  promotional: 'promotional',
};

// confirmation status taxonomy
const S = {
  confirmed: 'confirmed',
  pendingSample: 'pending-sample',
  pendingOrder: 'pending-order',
  unverified: 'unverified',
};

const efficiencyNote = {
  af: 'No test standard, test dust or particle size stated on the seed value. Confirm against an ISO 5011 / SAE J726 report for the exact SKU before quoting.',
  cf: 'No test standard or particle size stated. HEPA values must state H-class and MPPS per a real standard; confirm per SKU.',
  of: 'Stated without a beta ratio or ISO 4548 multi-pass reference. Confirm the test reference and micron level per SKU.',
  ff: 'Stated without a beta ratio or micron-level reference. Confirm the rating against the injection system.',
  tf: 'Stated as a screen mesh pore rating. Confirm the pore size and flow requirement against the transmission.',
};

function annotate(p) {
  const cat = p.category;
  const fields = {};

  // filtration efficiency
  if (p.filtration_efficiency != null) {
    fields.filtration_efficiency = {
      value_type: T.reference,
      source: 'products.json (seed)',
      status: S.unverified,
      note: efficiencyNote[cat] ?? 'Reference value; confirm against a test report for the exact SKU.',
    };
  }

  // dimensions
  const dimKeys = ['length_mm', 'width_mm', 'height_mm', 'outer_diameter_mm', 'inner_diameter_mm'];
  for (const k of dimKeys) {
    if (p.dimensions[k] != null) {
      fields[`dimensions.${k}`] = {
        value_type: T.designTarget,
        source: 'products.json (seed)',
        status: S.pendingSample,
        note: 'Nominal design dimension; confirm against the OE drawing and a pre-production sample.',
      };
    }
  }
  if (p.dimensions.thread != null) {
    fields['dimensions.thread'] = {
      value_type: T.reference,
      source: 'products.json (seed)',
      status: S.unverified,
      note: 'OE / design reference thread spec; verify against the engine or vehicle fitment.',
    };
  }
  if (p.dimensions.gasket != null) {
    fields['dimensions.gasket'] = {
      value_type: T.reference,
      source: 'products.json (seed)',
      status: S.unverified,
      note: 'OE / design reference gasket spec; verify against the housing.',
    };
  }

  // media & materials
  if (p.media != null) {
    fields.media = {
      value_type: T.designTarget,
      source: 'products.json (seed)',
      status: S.pendingSample,
      note: 'Media grade selected by application; confirm grade and pleat spec on the sample.',
    };
  }
  for (const k of ['housing', 'media_material', 'endcap', 'seal']) {
    if (p.materials[k] != null) {
      fields[`materials.${k}`] = {
        value_type: T.designTarget,
        source: 'products.json (seed)',
        status: S.pendingSample,
        note: 'Material spec; confirm on the pre-production sample.',
      };
    }
  }

  // fitment
  if (p.applicable_vehicles.length) {
    fields.applicable_vehicles = {
      value_type: T.reference,
      source: 'products.json (seed)',
      status: S.unverified,
      note: 'Indicative fitment; confirm by OE number before quoting.',
    };
  }
  if (p.oe_numbers.length) fields.oe_numbers = { value_type: T.reference, source: 'products.json (seed)', status: S.unverified, note: 'Seed placeholder; verify against the OE catalog.' };
  if (p.cross_reference.length) fields.cross_reference = { value_type: T.reference, source: 'products.json (seed)', status: S.unverified, note: 'Seed placeholder; verify cross-reference before quoting.' };

  // packing / MOQ / lead time
  fields.packing_inner_box = { value_type: T.typical, source: 'products.json (seed)', status: S.pendingOrder, note: 'Export packing standard; confirm per order.' };
  fields.packing_outer_carton = { value_type: T.typical, source: 'products.json (seed)', status: S.pendingOrder, note: 'Export packing standard; confirm per order.' };
  fields.packing_carton_qty = { value_type: T.typical, source: 'products.json (seed)', status: S.pendingOrder, note: 'Units per carton; confirm per order.' };
  fields.packing_net_weight_kg = { value_type: T.typical, source: 'products.json (seed)', status: S.pendingOrder, note: 'Net weight per unit; confirm per order.' };
  fields.moq = { value_type: T.typical, source: 'products.json (seed)', status: S.pendingOrder, note: 'Typical MOQ; negotiable by model and order size.' };
  fields.lead_time_days = { value_type: T.typical, source: 'products.json (seed)', status: S.pendingOrder, note: 'Typical lead time; firm date confirmed at order confirmation.' };

  // certifications
  if (p.certifications.length) {
    fields.certifications = {
      value_type: T.reference,
      source: 'products.json (seed)',
      status: S.unverified,
      note: 'Framework reference, not a certificate claim. Specific certification status is confirmed per order and destination.',
    };
  }

  if (p.target_markets.length) fields.target_markets = { value_type: T.reference, source: 'products.json (seed)', status: S.unverified, note: 'Indicative target markets.' };
  fields.hs_code = { value_type: T.reference, source: 'products.json (seed)', status: S.unverified, note: 'China export HS code; confirm per product and destination.' };

  return fields;
}

const skus = {};
for (const p of products.products) {
  skus[p.model] = { category: p.category, name_en: p.name_en, fields: annotate(p) };
}

const out = {
  _meta: {
    title: 'Hycarfilter Specification Evidence Register',
    version: '0.1.0',
    generated: new Date().toISOString().slice(0, 10),
    source: 'src/data/products.json (canonical dataset)',
    purpose:
      'Per-field evidence annotation for every SKU. Each value carries a value_type, source, confirmation status and note so the site renders honest "Data basis" tags and never presents a seed value as a verified measurement or certificate.',
    value_types: {
      measured: 'Measured — verified by test or measurement against a stated standard.',
      'design-target': 'Design target — engineering target value, confirmed against the OE drawing / sample.',
      typical: 'Typical — representative or nominal value; confirm per order.',
      reference: 'Reference — for guidance only; confirm against the spec sheet or sample before ordering.',
      promotional: 'Promotional — marketing claim, not a verified specification.',
    },
    confirmation_statuses: {
      confirmed: 'Verified against a test report or sample.',
      'pending-sample': 'To be confirmed against the pre-production sample.',
      'pending-order': 'To be confirmed at order confirmation.',
      unverified: 'Not yet verified; treat as reference only.',
    },
  },
  skus,
};

writeFileSync(join(root, 'src/data/spec-evidence.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote spec-evidence.json with ${Object.keys(skus).length} SKUs.`);
