// Per-category editorial content (original writing, export/procurement perspective).
// Keyed by category code. Chinese-source fragments are integrated and rewritten.

export interface CategoryContent {
  intro: string;
  selection: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  opinion: { title: string; body: string };
}

export const categoryContent: Record<string, CategoryContent> = {
  af: {
    intro:
      'The air filter is the engine\u2019s first line of defense: it stops dust, sand and abrasive particles from reaching the combustion chamber. A good air filter is invisible in normal driving and only shows its worth in harsh conditions — high dust, desert roads, construction sites. For an export buyer, the decision is rarely about the filter alone; it is about matching media grade and pleat density to the target market\u2019s roads and air quality.',
    selection: [
      { title: 'Match media to dust load', text: 'Dry, dusty markets (Middle East, North Africa) justify nano-fiber or high-dust media; temperate markets are well served by standard cellulose.' },
      { title: 'Check the seal', text: 'A PU-foam gasket must rebound and sit flush in the housing, otherwise unfiltered air bypasses the element.' },
      { title: 'Panel vs round', text: 'Passenger cars are mostly panel-type; light trucks, buses and machinery often use round or heavy-duty elements with a safety layer.' },
      { title: 'Pleat count matters', text: 'Higher pleat density means more media area and longer service life for the same box size.' },
    ],
    faqs: [
      { q: 'What is your MOQ for air filters?', a: 'Standard panel air filters start at 500 units per model; heavy-duty and round elements start at 200\u2013300 units. Custom tooling for new OE patterns is quoted separately.' },
      { q: 'Can you produce to my OE number?', a: 'Yes. Send us the OE number and a sample or drawing; we match dimensions, media and seal, and provide a pre-production sample for approval.' },
      { q: 'How do you prevent air bypass around the media?', a: 'We use PU-foam or rubber gaskets that are compression-set tested, plus 100% airtightness checks, so the seal is verified on every unit.' },
    ],
    opinion: {
      title: 'The desert market is a nano-fiber market',
      body:
        'After comparing dust loads across regions, my strong view is this: if you are selling into the Middle East or North Africa, skip the cheapest cellulose SKU. Fine desert dust is exactly what a nano-fiber layer catches best, and buyers there already understand that a clogged, high-dust air filter shortens engine life. Positioning a nano-fiber air filter as a \u201cdesert grade\u201d line is both technically honest and commercially sharper than competing on price alone.',
    },
  },

  cf: {
    intro:
      'The cabin filter \u2014 commonly called a pollen filter \u2014 cleans the air entering the passenger cabin from outside. Its job is comfort and health, not engine protection, which is why buyers split into two tiers: a basic particle filter for cost-sensitive markets, and an activated-carbon or HEPA filter for markets where air quality is a selling point.',
    selection: [
      { title: 'Particle vs carbon vs HEPA', text: 'Particle filters stop dust and pollen; activated carbon also absorbs odors and some gases; HEPA-class media removes fine particulate for premium or allergy-conscious buyers.' },
      { title: 'Size consistency is non-negotiable', text: 'Cabin filters are rigid panels that must slide precisely into a housing — a 2\u20133 mm deviation means a customer complaint, so verify L\u00d7W\u00d7H against the OE housing.' },
      { title: 'Frame rigidity', text: 'A stiff plastic frame prevents the media from collapsing under blower pressure over its service life.' },
      { title: 'Market-tier the product line', text: 'Offer a particle entry SKU, a carbon mid SKU, and a HEPA top SKU so distributors can ladder pricing.' },
    ],
    faqs: [
      { q: 'What is the difference between carbon and HEPA cabin filters?', a: 'Activated carbon adsorbs odors and gases; HEPA media removes a much higher share of fine particles. They are often combined in a single premium element.' },
      { q: 'What is your typical MOQ for cabin filters?', a: 'Around 1,000 units per model, with 25 units per carton. Mixed-container orders across models are supported.' },
      { q: 'Do you provide private-label packaging?', a: 'Yes, we support customer branding on inner color boxes and outer cartons, with neutral packing as the default.' },
    ],
    opinion: {
      title: 'Cabin filters are the easiest upsell \u2014 if you explain them',
      body:
        'Cabin filters are the category where an importer can most easily move a buyer from a $0.50 item to a $1.50 item, because the upgrade is a visible, sellable benefit (\u201ccleaner cabin air\u201d). The mistake most exporters make is listing only a particle SKU. My recommendation: always carry a carbon and a HEPA line, because urban air-quality concerns are spreading to every market we ship to \u2014 and that is a margin opportunity, not a cost.',
    },
  },

  of: {
    intro:
      'The oil filter removes dust, metal debris, carbon and soot from engine oil and delivers clean oil to the crank, rods, cams, turbocharger and piston rings. It is the highest-consequence filter in the catalog: a failed oil filter can destroy an engine. That is why the \u201cgood vs cheap\u201d differences \u2014 canister draw, bypass calibration, seal rebound \u2014 matter more here than anywhere else.',
    selection: [
      { title: 'Check the canister draw', text: 'A one-piece drawn steel shell is stronger and leak-resistant than a seam-welded or thin-walled shell; it is a reliable quality signal.' },
      { title: 'Confirm bypass calibration', text: 'The bypass valve must open at the specified pressure so oil flow continues if the media clogs \u2014 a wrong opening pressure starves or bypasses the engine.' },
      { title: 'Verify anti-drainback', text: 'An anti-drainback valve keeps oil in the filter for cold-start lubrication; it is essential for vertical-mount applications.' },
      { title: 'Spin-on vs cartridge', text: 'Spin-on is a complete canister; cartridge elements (EU/JP vehicles) replace only the media. Match the OE design for the target fleet.' },
    ],
    faqs: [
      { q: 'What happens if the oil filter bypass opens?', a: 'When the media is clogged or oil is cold and thick, the bypass valve opens to maintain oil pressure, protecting the engine from oil starvation at the cost of temporary filtration.' },
      { q: 'What is your MOQ for oil filters?', a: 'Passenger-car spin-on and cartridge filters start at 1,000 units per model; heavy-duty filters at 500 units.' },
      { q: 'How do you test oil filters?', a: '100% airtightness test, burst-pressure testing, and bypass opening-pressure calibration, with the option of ISO 4548 test reports for OEM projects.' },
    ],
    opinion: {
      title: 'Russia and cold-start markets want a better anti-drainback valve',
      body:
        'If you export to Russia, Central Asia or northern Europe, the anti-drainback valve and seal rebound are not optional extras \u2014 they are the product. Cold starts are brutal, and a filter that lets oil drain back or a seal that hardens at -40\u00b0C generates warranty claims fast. I would position a \u201ccold-climate\u201d oil filter with a high-rebound NBR seal and a robust anti-drainback valve, and let that specific value proposition win the order instead of a generic price war.',
    },
  },

  ff: {
    intro:
      'The fuel filter removes impurities from fuel to keep it clean and the engine running reliably. Modern common-rail diesels run at extreme injection pressures, so filtration tolerance has dropped to a few microns. This category splits into three practical products: spin-on fuel filters, inline filters for gasoline systems, and water-separator filters for diesel fleets and machinery.',
    selection: [
      { title: 'Mind the micron rating', text: 'Diesel common-rail systems need fine filtration (10\u00b5m or tighter); gasoline inline filters are less demanding. Match the rating to the injection system.' },
      { title: 'Water separation for diesel', text: 'Diesel markets with humid climates or poor fuel quality benefit from water-separator filters to protect injectors from corrosion.' },
      { title: 'Confirm fitting type', text: 'Fuel filters vary by thread (M16x1.5 etc.) and quick-connect fittings \u2014 a wrong fitting is a fitment failure, not a quality issue.' },
      { title: 'Consider the fuel quality of the market', text: 'High-sulfur or contaminated regional fuels justify coarser-but-larger-capacity media or a pre-filter stage.' },
    ],
    faqs: [
      { q: 'What is a water-separator fuel filter?', a: 'It combines filtration with a water-separation layer that sheds water from diesel before it reaches the injection system, protecting injectors from corrosion and wear.' },
      { q: 'What is your MOQ for fuel filters?', a: 'Spin-on and inline fuel filters start at 500\u20131,000 units per model; water-separator filters at 500 units.' },
      { q: 'Do you support diesel and gasoline lines?', a: 'Yes, we carry spin-on diesel, water-separator, and inline gasoline filters under one brand, simplifying a distributor\u2019s consolidated order.' },
    ],
    opinion: {
      title: 'Sell water separation as insurance, not a filter',
      body:
        'The highest-margin diesel filter is not the cheapest one \u2014 it is the water separator. In markets where diesel quality is inconsistent (much of Africa, Latin America and parts of Asia), injector failure is an expensive, recurring problem for fleet owners. Framing a water-separator filter as cheap insurance against injector replacement is a far more compelling sales story than quoting a unit price, and it anchors the customer on reliability instead of cost.',
    },
  },

  wb: {
    intro:
      'Wipers clear rain from the windshield to keep vision clear and driving safe. It is a high-turnover consumable with three main construction types \u2014 beam (frameless), hybrid, and conventional \u2014 plus rear blades. For exporters, wipers are a volume category where consistent rubber compound and correct blade length drive repeat orders.',
    selection: [
      { title: 'Choose the construction type', text: 'Beam blades hug curved glass and perform in snow; hybrid adds a spoiler for highway downforce; conventional is the low-cost classic.' },
      { title: 'Get blade lengths right', text: 'Wipers are sold by length (14\u201326 inches). Carry the common lengths for the target market to avoid fitment gaps.' },
      { title: 'Watch the rubber compound', text: 'Natural rubber with graphite coating gives smooth, quiet wiping; UV-resistant compounds last longer in hot climates.' },
      { title: 'Confirm the adapter', text: 'Different vehicles use different arm connectors \u2014 a multi-adapter kit broadens fitment per SKU.' },
    ],
    faqs: [
      { q: 'What wiper lengths should I stock?', a: 'For most passenger fleets, 22\u2033, 24\u2033 and 26\u2033 cover the majority; add 14\u201318\u2033 for rear blades. We help you build a market-specific length mix.' },
      { q: 'What is your MOQ for wipers?', a: 'Around 1,000 units per model, 50 per carton, with mixed-length orders supported.' },
      { q: 'Can you brand the wipers?', a: 'Yes, we offer private-label sleeves and cartons, and neutral packing by default.' },
    ],
    opinion: {
      title: 'Wipers are a quality-perception product \u2014 cheap squeaks',
      body:
        'A wiper is the rare automotive part the end user touches and hears on every rainy drive. A noisy, streaking blade is an instant brand-damaging complaint, and buyers in hot climates quickly learn that cheap UV-brittle rubber fails within months. My advice: compete on the rubber compound, not the sticker price. A slightly more expensive, quiet, durable blade earns the repeat order that actually makes wipers profitable.',
    },
  },

  tf: {
    intro:
      'The transmission filter screen filters transmission fluid to protect gearbox internals and shift quality. It is typically replaced as part of a transmission service, often together with the pan gasket. This is a niche, fitment-critical category where the filter must match the exact transmission model and service kit.',
    selection: [
      { title: 'Match the transmission exactly', text: 'Transmission filters are transmission-specific, not vehicle-generic \u2014 always confirm the transmission model (e.g., Aisin, ZF, GM) before quoting.' },
      { title: 'Offer the kit', text: 'Selling the filter together with the pan gasket (a service kit) raises order value and reduces the chance of a missing-gasket complaint.' },
      { title: 'Verify mesh spec', text: 'Nylon mesh with the correct pore rating and pick-up tube fitment is essential for reliable fluid flow.' },
      { title: 'Mind the gasket material', text: 'Cork and rubber gaskets behave differently under heat; match the OE material for a leak-free reseal.' },
    ],
    faqs: [
      { q: 'Do you sell the filter alone or as a kit?', a: 'Both. We offer the screen alone and a filter-plus-gasket service kit, which is what most workshops prefer.' },
      { q: 'How do I confirm the right transmission filter?', a: 'Send the transmission model code or the OE filter number; we cross-check against our fitment table before quoting.' },
      { q: 'What is your MOQ for transmission filters?', a: 'Around 500 units per model, 20 per carton. Lower trial quantities are available for new distributors.' },
    ],
    opinion: {
      title: 'Transmission filters reward accuracy, not breadth',
      body:
        'This is the category where a wrong fitment is most expensive for the buyer \u2014 dropping a transmission pan is labor-intensive, and a filter that does not seat means a costly rework. Exporters who publish a clean, transmission-specific fitment table and offer the gasket kit will win on trust. I would rather carry 40 precisely-cataloged transmission filters than 200 loosely-matched ones.',
    },
  },

  led: {
    intro:
      'LED lights are the catalog\u2019s upgrade category: high-brightness headlight bulbs with direct-fit sockets (H4, H7, etc.) and auxiliary light bars. They replace halogen bulbs for better output and longer life. For exporters, the key is socket fitment, thermal design, and compliance with the target market\u2019s lighting regulations.',
    selection: [
      { title: 'Confirm the socket type', text: 'H4/9003, H7, H11 and others are not interchangeable \u2014 confirm the vehicle\u2019s socket before quoting to avoid fitment returns.' },
      { title: 'Check thermal design', text: 'LEDs need effective heat dissipation (aluminum body, fan or passive cooling) to hold output and avoid early failure.' },
      { title: 'Mind regulation', text: 'Some markets restrict LED retrofits for road use; clarify whether the buyer needs off-road or road-legal product.' },
      { title: 'Certification matters', text: 'CE and RoHS are baseline for export; additional regional approvals depend on the destination.' },
    ],
    faqs: [
      { q: 'Are your LED bulbs road-legal everywhere?', a: 'LED retrofits are regulated differently by country. We supply off-road and upgrade LED products and can advise on the destination market\u2019s requirements.' },
      { q: 'What sockets do you carry?', a: 'H4/9003, H7 and other common sockets, plus auxiliary light bars. We add sockets based on demand.' },
      { q: 'What is your MOQ for LED products?', a: 'Around 200 units per model, 20 per carton, with CE and RoHS documentation provided.' },
    ],
    opinion: {
      title: 'LED is a compliance-led, not price-led, category',
      body:
        'LED headlights are the category where a cheap unit fails fastest \u2014 overheating kills the chip, and a flickering or dead bulb is a visible, immediate complaint. I would lead with thermal design and certification rather than lumen claims, because buyers who have been burned once will pay for a product that lasts. Compliance (CE, RoHS, and destination approvals) is the real moat here, and it is worth investing in before scaling volume.',
    },
  },
};
