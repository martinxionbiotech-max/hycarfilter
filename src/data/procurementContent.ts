// Phase 3 — procurement deepening content (original writing, exporter/procurement angle).
// Keyed by category code. Complements src/data/categoryContent.ts (which holds intro/selection/opinion/base FAQs).
// - procurementConcerns: the five real worries a filter buyer voices — efficiency inflation,
//   fitment compatibility, service life, storage humidity, and export packaging.
// - extraFaqs: additional procurement Q&A appended on category landing pages (beyond the base 3).

export interface ProcurementConcern {
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const procurementConcerns: Record<string, ProcurementConcern[]> = {
  af: [
    {
      title: 'Filtration-efficiency inflation',
      text: '"≥99%" on a data sheet is meaningless without the test standard and particle size. A credible air-filter spec cites ISO 5011 or SAE J726, the test dust, and the efficiency at a stated micron level. Before you commit a container, ask for the test report — not the sticker.',
    },
    {
      title: 'Fitment & compatibility',
      text: 'Panel air filters are vehicle-specific. A 2 mm deviation in length, width or seal height lets unfiltered air bypass the element and shortens engine life. Always cross-check the OE number and approve a physical pre-production sample before mass production.',
    },
    {
      title: 'Service life & dust holding',
      text: 'Higher pleat count and a nano-fiber layer extend the service interval by holding more dust for the same box size. In desert or construction markets, cheap cellulose clogs fast and drives warranty claims — specify a dust-holding capacity (grams) if the fleet runs in high dust.',
    },
    {
      title: 'Storage humidity',
      text: 'Resin-impregnated cellulose absorbs moisture in humid warehouses and can swell before installation. Elements must be sealed in polybags with a desiccant and kept off the floor; a swollen, warped panel will not seat and is a silent customer complaint.',
    },
    {
      title: 'Export packaging',
      text: 'Air filters are light but bulky, so freight cost per unit is dominated by cube, not weight. Verify carton compression strength and pallet cube, and use corner reinforcement — crushed corners are the single most common air-freight complaint on this category.',
    },
  ],
  cf: [
    {
      title: 'Filtration-efficiency inflation',
      text: '"HEPA" and "99%" are thrown around loosely. A true HEPA claim means H13-class media at ≥99.97% for MPPS (most penetrating particle size), tested to a real standard. Distinguish particle, activated-carbon and HEPA lines on the spec sheet so your customer knows exactly what they are paying for.',
    },
    {
      title: 'Fitment & compatibility',
      text: 'Cabin filters are rigid panels that must slide precisely into a plastic housing. A 2–3 mm deviation means a complaint, not a discount. Confirm L×W×H against the OE housing and approve a sample before committing to a full production run.',
    },
    {
      title: 'Service life & carbon saturation',
      text: 'Activated carbon saturates: in polluted or heavy-traffic cities the change interval can halve. A carbon filter that has lost its adsorption is functionally a particle filter. Position a realistic change interval in your catalog so the customer reorders on a schedule, not on a failure.',
    },
    {
      title: 'Storage humidity',
      text: 'Activated carbon adsorbs moisture and odors from the surrounding air in storage. Keep carbon filters sealed in polybags, and never store them near solvents or fuels, or they will arrive pre-saturated and unusable.',
    },
    {
      title: 'Export packaging',
      text: 'Thin, wide panels bend and deform under stacking. Use rigid inner sleeves and crush-resistant cartons with stack orientation marked; a bent cabin filter will not seat and is an avoidable return.',
    },
  ],
  of: [
    {
      title: 'Filtration-efficiency inflation',
      text: 'Oil-filter efficiency is only meaningful as a beta ratio under ISO 4548 multi-pass testing. "≥90% @ 20µm" must state the test reference — single-pass and multi-pass numbers are not the same. For OEM-level projects, request the ISO 4548 report.',
    },
    {
      title: 'Fitment & compatibility',
      text: 'The thread (3/4-16 UNF vs metric), gasket diameter and bypass opening pressure must all match the OE engine. A wrong thread or a mis-calibrated bypass valve is a return, and worse, can starve or bypass the engine. Confirm the OE number before quoting.',
    },
    {
      title: 'Service life & cold-start behavior',
      text: 'A nano or composite media supports extended oil-drain intervals, while an anti-drainback valve and a high-rebound seal protect cold starts. In cold-climate markets these are not optional — they are the difference between a repeat order and a warranty claim.',
    },
    {
      title: 'Storage humidity',
      text: 'Steel canisters rust in humid sea freight if not protected. Use an oil film inside, sealed polybags, and VCI (vapor-corrosion-inhibitor) paper in the carton; rust inside the can is invisible to the buyer until it contaminates the oil.',
    },
    {
      title: 'Export packaging',
      text: 'Steel canisters are heavy and dent-able. Double-wall export cartons, dividers, and correct carton weight limits protect the shell; a dented can is a quality-perception failure even when the filter works.',
    },
  ],
  ff: [
    {
      title: 'Filtration-efficiency inflation',
      text: 'Fuel-filter ratings must cite micron level and beta ratio. Modern common-rail diesel needs 2–5 µm filtration; a filter marketed at "10 µm" may be inadequate for the injection system it is claimed to fit. Match the micron rating to the injection technology, not the lowest price.',
    },
    {
      title: 'Fitment & compatibility',
      text: 'Fuel filters vary by thread, quick-connect fitting and diesel/gasoline type. A wrong fitting is a fitment failure, not a quality issue. Confirm thread and connection style, and whether the vehicle is diesel or gasoline, before quoting.',
    },
    {
      title: 'Service life & water separation',
      text: 'In markets with poor or humid diesel, a water-separator filter with a drain is cheap insurance against injector corrosion. Position it on reliability and service interval — a separator that is drained on schedule protects a very expensive injection system.',
    },
    {
      title: 'Storage humidity',
      text: 'Water-separator bowls and O-rings age in dry heat, and quick-connect seals harden. Keep filters sealed and cool; degraded seals leak on first install and look like a manufacturing defect.',
    },
    {
      title: 'Export packaging',
      text: 'Aluminum and steel bodies dent easily. Individual sleeves and full-carton dividers protect the body and the drain valve; a dented water-separator is a visible complaint even when functional.',
    },
  ],
  wb: [
    {
      title: 'Rubber compound, not "spec" claims',
      text: 'Wipers have no filtration efficiency — the real spec is the rubber compound. Natural rubber with a graphite coating gives smooth, quiet wiping; cheap synthetic or unbaked rubber streaks and squeaks. UV-resistant compounds are non-negotiable for hot climates.',
    },
    {
      title: 'Fitment & adapter type',
      text: 'Blade length (14–26 inches) and arm adapter (hook, pin, bayonet, side-lock) are both fitment-critical. A multi-adapter kit broadens fitment per SKU and cuts returns — confirm the adapter set with each blade length.',
    },
    {
      title: 'Service life & UV aging',
      text: 'Sunlight and heat are what kill a wiper, not mileage. In the Middle East, North Africa and hot coastal markets, UV-brittle rubber fails within months. A UV-resistant compound is the difference between a one-off and a repeat order.',
    },
    {
      title: 'Storage humidity & heat',
      text: 'Rubber takes a permanent set when bent or stored under weight for long periods, and heat-ages in containers. Store blades flat, out of direct sun, and avoid stacking heavy cartons on top — a warped blade skips and streaks.',
    },
    {
      title: 'Export packaging',
      text: 'Long, thin blades bend if the carton is under-specified. Rigid sleeves and full, correctly-oriented cartons protect the blade curve; a bent beam blade will not conform to the windshield.',
    },
  ],
  tf: [
    {
      title: 'Mesh rating, not "efficiency"',
      text: 'Transmission screens are specified by nylon-mesh pore rating and fluid flow, not a percentage efficiency. Confirm the micron rating and that the pick-up tube fitment matches the transmission — flow restriction is as important as filtration here.',
    },
    {
      title: 'Fitment & compatibility',
      text: 'Transmission filters are transmission-specific (Aisin, ZF, GM, etc.), not vehicle-generic. Dropping a pan is labor-intensive, and a filter that does not seat means costly rework. Confirm the exact transmission model or OE filter number before quoting.',
    },
    {
      title: 'Service life & gasket material',
      text: 'Cork and rubber pan gaskets behave differently under heat. Match the OE gasket material for a leak-free reseal; a cork gasket in a high-heat application hardens and leaks. The gasket is half the product in this category.',
    },
    {
      title: 'Storage humidity',
      text: 'Cork gaskets dry out and shrink, and nylon is stable but must stay flat. Keep kits sealed and flat; a warped or dried gasket is a fitment failure on a job where labor cost dominates.',
    },
    {
      title: 'Export packaging',
      text: 'Filter-plus-gasket kits must protect the flat gasket from bending and crushing. Rigid flat packs with dividers keep the gasket true; a bent gasket is the most common complaint on transmission kits.',
    },
  ],
  led: [
    {
      title: 'Lumen & CCT inflation',
      text: 'LED marketing is full of inflated lumen claims. The honest spec is delivered lumens per watt and a stated CCT (color temperature), ideally with an integrating-sphere test report. Ask for the actual lm and CCT, not a "10,000 lumen" sticker.',
    },
    {
      title: 'Fitment & CANbus',
      text: 'Sockets (H4/H7/H11) are not interchangeable, and many modern vehicles trigger a bulb-error warning without a CANbus decoder. Confirm the socket and whether the vehicle needs a decoder to avoid flicker and dashboard errors.',
    },
    {
      title: 'Service life & thermal design',
      text: 'LEDs die from heat, not age. An effective thermal design (aluminum body, fan or passive cooling) and a quality driver determine lifespan far more than the chip itself. A unit that overheats fails fast and visibly.',
    },
    {
      title: 'Storage humidity',
      text: 'Drivers and solder joints are sensitive to moisture and ESD. Keep bulbs sealed and dry; humidity-induced corrosion in the driver is a silent early-failure cause that looks like a bad batch.',
    },
    {
      title: 'Export packaging & certification',
      text: 'LED bulbs are fragile and compliance-led. Individual boxes protect the assembly, and CE / RoHS / EMC documentation is baseline for most markets. Missing certifications, not missing lumens, is what blocks an LED order at customs.',
    },
  ],
};

export const extraFaqs: Record<string, FaqItem[]> = {
  af: [
    {
      q: 'How do you prove your filtration efficiency is real?',
      a: 'We specify efficiency against a test standard (ISO 5011 / SAE J726) with the test dust and micron level stated. On request we provide a third-party or in-house test report for the exact SKU, not a marketing percentage.',
    },
    {
      q: 'What dust-holding capacity should I specify for desert markets?',
      a: 'For the Middle East and North Africa we recommend a nano-fiber or high-dust media with a stated dust-holding capacity in grams, and a more frequent replacement reminder in your catalog. We help you pick the right media grade for the target dust load.',
    },
    {
      q: 'How do you pack air filters for sea freight?',
      a: 'Our export packaging standard uses crush-resistant export cartons with corner protection, sealed polybags with desiccant for moisture-sensitive elements, and pallet cube optimized to keep freight cost per unit low. Carton compression strength is specified to survive container stacking.',
    },
    {
      q: 'Can I get a sample before mass production?',
      a: 'Yes. We provide a pre-production sample against your OE number or drawing, and you approve dimensions, media, seal and packing before we run the full order.',
    },
  ],
  cf: [
    {
      q: 'What is the difference between "99%" and a true HEPA claim?',
      a: 'A real HEPA claim means H13-class media at ≥99.97% for the most penetrating particle size, tested to a standard. A generic "99%" without a standard and particle reference is a marketing number. We keep the three lines — particle, carbon, HEPA — clearly separated on the spec sheet.',
    },
    {
      q: 'How often should cabin filters be replaced in polluted cities?',
      a: 'In heavy-traffic or high-smog cities the interval can halve versus clean-air markets. We publish a realistic change interval so your customers reorder on a schedule, and carbon filters are replaced when adsorption saturates, not when they clog.',
    },
    {
      q: 'Do you combine activated carbon and HEPA in one element?',
      a: 'Yes — our top-tier cabin filter combines a HEPA-composite layer with activated carbon, giving fine-particle removal and odor/gas adsorption in a single premium SKU that is the easiest upsell for distributors.',
    },
  ],
  of: [
    {
      q: 'How do you protect steel canisters from rust in sea freight?',
      a: 'We use an internal oil film, sealed polybags and VCI (vapor-corrosion-inhibitor) paper inside double-wall cartons, so the can arrives clean even after weeks in a humid container.',
    },
    {
      q: 'Can you match a specific OE oil filter number?',
      a: 'Yes. Send the OE number and, ideally, a sample; we match thread, gasket, bypass setting, media and canister dimensions and provide a pre-production sample for approval.',
    },
  ],
  ff: [
    {
      q: 'What micron rating do common-rail diesel filters need?',
      a: 'Modern common-rail diesel typically needs 2–5 µm filtration to protect the high-pressure injection system. We match the micron rating and beta ratio to the injection technology — a 10 µm filter is not a substitute for a common-rail application.',
    },
    {
      q: 'Do your water-separator filters include a drain?',
      a: 'Our water-separator filters are designed with a drain provision so water can be removed on a service schedule. This is what protects diesel injectors from corrosion in poor-fuel markets.',
    },
    {
      q: 'How do I choose between spin-on and inline fuel filters?',
      a: 'Spin-on is a complete replaceable canister for diesel and light commercial vehicles; inline filters suit gasoline systems and fit in-line in the fuel hose. We confirm the fitting type and diesel/gasoline application before recommending a SKU.',
    },
  ],
  wb: [
    {
      q: 'What rubber compound do you use for hot climates?',
      a: 'Natural rubber with a graphite coating and a UV-resistant compound for hot, sunny markets. The compound — not the sticker price — is what determines whether a blade wipes quietly for months or streaks within weeks.',
    },
    {
      q: 'How do you prevent wiper blades bending in transit?',
      a: 'Rigid sleeves and full, correctly-oriented cartons protect the blade curve, and blades are stored flat so the rubber keeps its set. We specify carton strength to avoid warping under container stacking.',
    },
    {
      q: 'What adapters do your blades include?',
      a: 'Our beam and hybrid blades ship with a multi-adapter kit covering the common arm types (hook, pin, bayonet, side-lock), which broadens fitment per SKU and cuts returns.',
    },
  ],
  tf: [
    {
      q: 'How do I confirm the exact transmission filter I need?',
      a: 'Send the transmission model code (Aisin, ZF, GM, etc.) or the OE filter number. Transmission filters are transmission-specific, so we cross-check our fitment table before quoting — never quote by vehicle model alone.',
    },
    {
      q: 'Cork or rubber gasket — which should I order?',
      a: 'Match the OE gasket material. Rubber handles heat better and resists hardening; cork is fine for lower-heat applications. We supply the gasket material that matches the original transmission service.',
    },
    {
      q: 'Do you sell the filter with the pan gasket as a kit?',
      a: 'Yes — the filter-plus-gasket service kit is what most workshops prefer, and it removes the risk of a missing or mismatched gasket. We also sell the screen alone for distributors who want that option.',
    },
  ],
  led: [
    {
      q: 'How do you verify lumen and CCT claims?',
      a: 'We specify delivered lumens per watt and a stated CCT, supported by an integrating-sphere test report on request. We avoid inflated "peak lumen" stickers and quote the honest, sustained output.',
    },
    {
      q: 'Do your LED bulbs need CANbus decoders?',
      a: 'Some modern vehicles trigger a bulb-error warning without a decoder. We confirm the vehicle and advise whether a decoder is required to avoid flicker and dashboard errors before you order.',
    },
    {
      q: 'What certifications do you provide?',
      a: 'CE and RoHS are baseline on every LED product, with EMC documentation available. We advise on destination-market approvals before you commit, because compliance — not lumens — is what clears customs.',
    },
    {
      q: 'What is the warranty on LED bulbs?',
      a: 'We stand behind thermal design and driver quality with a warranty on our LED products. The failure mode we design against is heat, so a well-cooled unit lasts far longer than a cheap high-lumen bulb.',
    },
  ],
};
