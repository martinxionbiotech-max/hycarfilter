// Phase 3 — blog content cluster (original rewriting of the 31 source soft-articles into
// 8 deep, export/procurement-angled posts). Keyed by slug. Related products are linked via
// relatedCategory (category slug in products.json) for internal linking.

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  topic: 'air' | 'oil' | 'cabin' | 'fuel' | 'news';
  topicLabel: string;
  date: string; // ISO date
  readMinutes: number;
  relatedCategory: string; // category slug
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'air-filter-how-it-works',
    title: 'How an Air Filter Actually Protects an Engine — and Why It Matters to Your Buyers',
    excerpt:
      'The air filter is the engine\u2019s first line of defense. Here\u2019s what it does, how media grade and pleat density change performance, and how to explain the value to a cost-conscious importer.',
    topic: 'air',
    topicLabel: 'Air Filter Knowledge',
    date: '2026-10-06',
    readMinutes: 6,
    relatedCategory: 'air-filter',
    sections: [
      {
        heading: 'What the air filter is protecting',
        paragraphs: [
          'An engine is an air pump first and a combustion machine second. For every litre of fuel burned, a gasoline engine draws in roughly 9,000\u201310,000 litres of air; a diesel draws even more. Every cubic metre of that air carries dust, sand, pollen and abrasive particles. The air filter\u2019s job is to strip those particles out before they reach the cylinder walls, piston rings and bearings — where they act as a fine grinding paste.',
          'The consequence of letting abrasives through is invisible and cumulative: ring and cylinder wear accelerates, compression drops, oil consumption rises, and the engine consumes more fuel for less power. A cheap air filter that bypasses dust is therefore not a saving — it is deferred engine damage. That is the framing that wins over a cost-driven buyer: the filter is the cheapest component standing between road dust and a very expensive overhaul.',
        ],
      },
      {
        heading: 'How media grade changes the product',
        paragraphs: [
          'Air-filter media comes in three practical grades. Standard resin-impregnated cellulose is the workhorse: adequate filtration at the lowest cost, well suited to temperate markets with moderate dust. Nano-fiber composite adds a fine surface layer that catches the smallest, most damaging particles while holding more dust per unit area — the right call for desert and construction environments. A safety layer, common on heavy-duty round elements, protects the main media and keeps the engine safe if the outer layer is damaged during service.',
          'Pleat density matters as much as media. More pleats mean more media area in the same box, which lowers restriction and extends service life. Two filters of the same outside dimensions can differ sharply in dust-holding capacity depending on pleat count and media grade — which is why the cheapest quote is rarely the best value.',
        ],
      },
      {
        heading: 'The specs a buyer should ask for',
        paragraphs: [
          'A credible air-filter data sheet cites the test standard (ISO 5011 or SAE J726), the test dust, and the efficiency at a stated micron level. "≥99%" without those references is marketing. Buyers selling into dusty markets should also ask for dust-holding capacity in grams, because that — not the sticker efficiency — is what determines the real service interval.',
          'Fitment is equally non-negotiable: a panel filter that is even 2 mm off in any dimension lets unfiltered air bypass the element. The practical check is an OE-number cross-reference plus a physical sample approval before mass production.',
        ],
      },
      {
        heading: 'Selling the value, not the box',
        paragraphs: [
          'Export buyers do not buy an air filter; they buy engine protection, fuel economy and fleet uptime. The strongest sales position is to anchor on total cost of ownership: a nano-fiber element that costs a little more but lasts longer and protects better is cheaper per kilometre than a cellulose element replaced twice as often. That is a story an importer can repeat to their own customers — and it is the difference between a price war and a margin.',
        ],
      },
    ],
  },
  {
    slug: 'air-filter-replacement-symptoms',
    title: 'When to Replace an Air Filter: Interval, Symptoms, and the Cost of Waiting Too Long',
    excerpt:
      'A clogged air filter quietly robs power and fuel economy. Learn the replacement intervals, the tell-tale symptoms, and how to turn maintenance knowledge into repeat orders.',
    topic: 'air',
    topicLabel: 'Air Filter Maintenance',
    date: '2026-10-10',
    readMinutes: 5,
    relatedCategory: 'air-filter',
    sections: [
      {
        heading: 'The replacement interval is a range, not a number',
        paragraphs: [
          'A passenger-car air filter is typically replaced every 15,000\u201330,000 km or every 12\u201324 months, but the real driver is the environment. A car driven on clean highways in a temperate climate sits at the long end of that range; a fleet running in the desert, on unpaved roads or around construction sites can need a replacement in a fraction of the time. Dust load, not distance, is what fills an element.',
          'Heavy-duty applications — trucks, construction and agricultural machinery — often run a two-stage system with an outer and safety element, and the outer element is serviced on a much shorter schedule. For exporters, this is a merchandising opportunity: a replacement reminder tied to the market\u2019s dust load turns a one-time SKU into a recurring consumable.',
        ],
      },
      {
        heading: 'The symptoms of a dirty filter',
        paragraphs: [
          'The classic signs of a clogged air filter are reduced power, sluggish throttle response, a drop in fuel economy, black exhaust smoke from a rich mixture, and a rough idle. A driver may also notice a whistling or wheezing from the intake as the engine struggles to draw air, and in severe cases a check-engine light from a mass-airflow sensor that no longer reads correctly.',
          'The mechanism is simple: a clogged filter starves the engine of air, the air-fuel ratio richens, combustion becomes incomplete, and fuel is wasted. The damage is not catastrophic the way a failed oil filter can be — but the cost is real and continuous, in fuel and lost performance.',
        ],
      },
      {
        heading: 'Why waiting too long costs more',
        paragraphs: [
          'Beyond fuel waste, a severely clogged element can collapse and let dust bypass it, or in extreme cases a damaged element can allow unfiltered air straight into the engine. Once the filter stops filtering, every kilometre adds wear that no later maintenance can undo.',
          'The procurement message is clean: replacing on schedule is cheaper than the fuel waste and wear of replacing late. An importer who educates their distributor network on replacement intervals builds a repeat-purchase cycle that a box-mover never gets.',
        ],
      },
    ],
  },
  {
    slug: 'oil-filter-how-it-works',
    title: 'Inside the Oil Filter: Bypass Valves, Anti-Drainback, and the Details That Separate Good from Cheap',
    excerpt:
      'An oil filter is the highest-consequence part in the catalog. Here\u2019s how it works, and the five construction details that separate a reliable filter from a cheap one.',
    topic: 'oil',
    topicLabel: 'Oil Filter Knowledge',
    date: '2026-09-28',
    readMinutes: 7,
    relatedCategory: 'oil-filter',
    sections: [
      {
        heading: 'What the oil filter removes',
        paragraphs: [
          'Engine oil carries away more than heat: it suspends combustion soot, microscopic metal wear particles, dust that slipped past the intake, and the by-products of oil degradation. Left unfiltered, these particles circulate through bearings, turbochargers, cam lobes and piston rings, accelerating wear at every pass. The oil filter removes these contaminants and delivers clean oil to the parts that need it.',
          'Because the oil pump runs continuously at pressure, the filter is always in the critical path. A failure here is not a comfort issue — it can destroy an engine. That is why the oil filter is the category where construction quality matters most.',
        ],
      },
      {
        heading: 'The bypass valve: the most misunderstood part',
        paragraphs: [
          'A bypass valve opens when the filter media is clogged, or when the oil is cold and thick, to maintain oil pressure and prevent oil starvation. It is not a defect — it is a protection mechanism. But the opening pressure must be calibrated to the engine: too low and oil bypasses filtration under normal conditions; too high and the engine starves when it should be bypassing.',
          'Cheap filters often skip this calibration. The result is a filter that either never really filters, or that starves the engine on a cold start. A credible data sheet states the bypass opening pressure, and every good unit is tested against it.',
        ],
      },
      {
        heading: 'The details that separate good from cheap',
        paragraphs: [
          'Five construction details tell you most of what you need to know. First, the canister: a one-piece drawn steel shell is stronger and leak-resistant than a seam-welded or thin-walled shell. Second, the anti-drainback valve: it keeps oil in the filter so cold starts are lubricated immediately — essential on vertically mounted filters. Third, the seal: a high/low-temperature-resilient seal that keeps its rebound from -40°C to +150°C. Fourth, the end caps: thermoset plastisol bonds media to end caps for a rigid, collapse-resistant core. Fifth, the media: composite or nano-fiber media holds more contaminant and supports extended drain intervals.',
          'None of these are visible on a shelf. That is why buyers should ask for the construction spec and the test report, not just the price.',
        ],
      },
      {
        heading: 'Testing that backs the claim',
        paragraphs: [
          'A serious oil filter is verified with 100% airtightness testing, burst-pressure testing and bypass-opening-pressure calibration, with ISO 4548 multi-pass reports available for OEM projects. Efficiency should be stated as a beta ratio — for example "≥90% @ 20\u00b5m" — with the test reference attached.',
          'For an exporter, these are the proof points that win an order against a cheaper, untested filter. They are also the difference between a repeat customer and a warranty claim.',
        ],
      },
    ],
  },
  {
    slug: 'oil-filter-choosing-guide',
    title: 'How to Choose the Right Oil Filter: A Procurement Checklist for Importers',
    excerpt:
      'Thread, gasket, bypass setting, media, cold-climate needs — a practical checklist for matching the right oil filter to the fleet and the market.',
    topic: 'oil',
    topicLabel: 'Oil Filter Selection',
    date: '2026-10-02',
    readMinutes: 6,
    relatedCategory: 'oil-filter',
    sections: [
      {
        heading: 'Start with fitment, not price',
        paragraphs: [
          'The thread must match the engine — common sizes include 3/4-16 UNF for passenger cars and 1-12 UNF for heavy-duty applications, plus metric variants. The gasket diameter and the bypass opening pressure must also match the OE specification. A wrong thread or a mis-calibrated bypass valve is a return, and worse, can damage the engine it was sold to protect.',
          'Spin-on versus cartridge is the next fork. Spin-on is a complete replaceable canister; cartridge elements (common on EU and Japanese vehicles) replace only the media inside a reusable housing. Match the OE design — the two are not interchangeable.',
        ],
      },
      {
        heading: 'Match media to the drain interval',
        paragraphs: [
          'Standard cellulose serves normal drain intervals. Composite and nano-fiber media hold more contaminant and support extended oil-drain intervals, which is increasingly the direction of modern engines and long-haul fleets. Glass-enhanced media is the heavy-duty choice for high-load commercial applications.',
          'The media choice should follow the customer\u2019s oil-change schedule, not the lowest quote. A filter that collapses or clogs before the drain interval is a false economy.',
        ],
      },
      {
        heading: 'Cold-climate is a different product',
        paragraphs: [
          'For Russia, Central Asia, northern Europe and other cold-start markets, the anti-drainback valve and seal rebound are the product. Cold oil is thick; a filter that lets oil drain back leaves the engine dry on the next start, and a seal that hardens at -40°C leaks. A high-rebound NBR seal and a robust anti-drainback valve are not optional extras in these markets.',
          'Positioning a "cold-climate" oil filter is a sharper, more defensible offer than competing on price — and it is exactly the kind of market-specific line that wins repeat orders.',
        ],
      },
      {
        heading: 'A working checklist',
        paragraphs: [
          'Confirm the thread and gasket; confirm spin-on versus cartridge; confirm the bypass opening pressure; choose media by drain interval; add the anti-drainback and cold-seal requirements for cold markets; and request the ISO 4548 report and 100% airtightness evidence. That checklist turns a generic oil-filter order into a properly matched one — and protects both the importer and the end user.',
        ],
      },
    ],
  },
  {
    slug: 'cabin-filter-importance',
    title: 'Cabin Filters: The Easiest Upsell in the Catalog — If You Understand the Tiers',
    excerpt:
      'Particle, activated carbon, HEPA — the three tiers of cabin filter, what each does, and why the premium tiers are a margin opportunity for importers.',
    topic: 'cabin',
    topicLabel: 'Cabin Filter Knowledge',
    date: '2026-09-22',
    readMinutes: 5,
    relatedCategory: 'cabin-filter',
    sections: [
      {
        heading: 'What a cabin filter actually does',
        paragraphs: [
          'The cabin filter — often called a pollen filter — cleans the air drawn into the passenger cabin from outside. Unlike the engine air filter, its job is comfort and health: it stops dust, pollen, soot and, on higher tiers, odors and fine particulate before they reach the driver and passengers.',
          'Because it protects people rather than the engine, it is a category where the perceived value is immediate and visible. That makes it the easiest place for an importer to move a buyer up a tier — from a commodity particle filter to a premium carbon or HEPA element.',
        ],
      },
      {
        heading: 'The three tiers, explained',
        paragraphs: [
          'A particle cabin filter stops dust, pollen and larger particles — the cost-sensitive entry point. An activated-carbon filter adds a carbon layer that adsorbs odors and some gases: exhaust smell, smog, industrial fumes. A HEPA-class filter removes a much higher share of fine particulate (a true H13 element reaches ≥99.97% for the most penetrating particle size) and is often combined with carbon in a single premium element.',
          'The tier structure is a ladder: distributors can stock an entry, a mid and a top SKU and price them accordingly. A buyer who understands the difference will pay more for the carbon or HEPA tier, because the benefit — cleaner cabin air — is something they can resell to the end user.',
        ],
      },
      {
        heading: 'Why the premium tiers are a margin opportunity',
        paragraphs: [
          'Urban air-quality concerns are spreading to every market we ship to, not just Europe. Smog, traffic exhaust and fine particulate are daily realities in the Middle East, Southeast Asia and Latin America. A carbon or HEPA cabin filter is a visible, sellable benefit — "cleaner air for your family" — and that benefit carries margin that a plain particle filter cannot.',
          'The mistake most exporters make is listing only a particle SKU. Carrying a carbon and a HEPA line turns a commodity into a product family, and it gives the distributor a reason to order a mixed container instead of the cheapest single SKU.',
        ],
      },
    ],
  },
  {
    slug: 'cabin-filter-maintenance',
    title: 'Cabin Filter Maintenance: Change Intervals, Odor Problems, and Storage Mistakes to Avoid',
    excerpt:
      'How often to change a cabin filter, what a musty smell means, and the storage mistakes that ruin carbon filters before they are ever installed.',
    topic: 'cabin',
    topicLabel: 'Cabin Filter Maintenance',
    date: '2026-10-14',
    readMinutes: 5,
    relatedCategory: 'cabin-filter',
    sections: [
      {
        heading: 'The change interval depends on the air',
        paragraphs: [
          'A cabin filter is typically replaced every 12,000\u201320,000 km or every 12 months, but in polluted or heavy-traffic cities the interval can halve. The filter is downstream of everything the vehicle drives through — smog, dust, pollen, exhaust — so its loading is driven by air quality, not distance.',
          'Activated carbon saturates over time: once the carbon layer is full, it stops adsorbing odors and the filter behaves like a plain particle filter. A realistic change interval, published in the catalog, turns a cabin filter into a scheduled reorder — the pattern that makes it a repeat consumable rather than a one-off.',
        ],
      },
      {
        heading: 'What a musty smell means',
        paragraphs: [
          'A musty or sour smell from the vents is the classic sign of a cabin filter overdue for replacement, often compounded by moisture and microbial growth on a dirty element. It can also point to debris in the HVAC housing. The filter is usually the first and cheapest thing to replace — and often the fix.',
          'For a buyer, the odor complaint is a diagnostic lead: it tells them a filter has been left in too long, and it is the moment to sell a carbon filter as the upgrade that removes the smell, not just the particles.',
        ],
      },
      {
        heading: 'Storage mistakes that ruin carbon filters',
        paragraphs: [
          'Activated carbon adsorbs from its surroundings — including moisture and odors in the warehouse. A carbon filter stored unsealed near solvents, fuels or strong-smelling goods will arrive pre-saturated and useless. Keep carbon filters sealed in polybags, away from chemicals, and out of humid storage.',
          'Panels also bend under stacking. Thin, wide cabin filters must be stored flat and shipped in rigid sleeves; a warped panel will not seat in its housing and is an avoidable return. These are small disciplines that protect a product whose entire value is in clean air.',
        ],
      },
    ],
  },
  {
    slug: 'fuel-filter-complete-guide',
    title: 'The Fuel Filter Complete Guide: Spin-On, Inline, and Water Separators Explained',
    excerpt:
      'A practical guide to fuel filter types, micron ratings, and why a water separator is the cheapest insurance a diesel fleet owner can buy.',
    topic: 'fuel',
    topicLabel: 'Fuel Filter Guide',
    date: '2026-10-18',
    readMinutes: 6,
    relatedCategory: 'fuel-filter',
    sections: [
      {
        heading: 'Why fuel filtration tolerance keeps shrinking',
        paragraphs: [
          'Modern common-rail diesel systems run at extreme injection pressures — often 1,600 bar and beyond — with injector clearances measured in microns. At those pressures, a particle that was once tolerable now scores an injector nozzle. Filtration tolerance has tightened accordingly, to roughly 2\u20135 \u00b5m for common-rail systems.',
          'This is the key procurement insight: the micron rating must match the injection technology. A filter marketed for a modern diesel but rated at 10 \u00b5m is a mismatch, regardless of price.',
        ],
      },
      {
        heading: 'The three product types',
        paragraphs: [
          'Spin-on fuel filters are complete replaceable canisters for diesel and light commercial vehicles — the direct counterpart to the spin-on oil filter. Inline filters are smaller, in-line units for gasoline systems, fitting into the fuel hose and often using quick-connect fittings. Water-separator filters combine filtration with a water-shedding layer and a drain, protecting diesel injectors from the water that condenses in poor-quality fuel.',
          'The fitting type is a classic source of returns: threads (M16x1.5 and others) and quick-connect fittings are not interchangeable, and diesel and gasoline systems need different product. Confirm the fitting and fuel type before quoting.',
        ],
      },
      {
        heading: 'Water separation as cheap insurance',
        paragraphs: [
          'In markets with humid climates or inconsistent diesel quality — much of Africa, Latin America and parts of Asia — water in fuel is the silent killer of injectors. Water corrodes and, at common-rail pressures, can cavitate and erode injector internals. A water-separator filter with a drain is the cheapest insurance a fleet owner can buy against a very expensive injector replacement.',
          'The sales story is reliability, not price: a water separator anchors the customer on protecting their injection system, and it is the highest-margin diesel filter for exactly that reason.',
        ],
      },
      {
        heading: 'A short matching guide',
        paragraphs: [
          'For a diesel passenger car or light commercial vehicle, a spin-on diesel filter matched to the OE number and micron rating. For a gasoline car, an inline filter with the correct quick-connect fitting. For diesel trucks and machinery in poor-fuel markets, a water-separator filter with a drain. Confirm thread or fitting, micron rating and fuel type, and the match is almost always straightforward.',
        ],
      },
    ],
  },
  {
    slug: 'news-frankfurt-2025',
    title: 'Hycarfilter at Automechanika Shanghai 2025: Meeting Export Buyers Face to Face',
    excerpt:
      'We exhibited at the Shanghai Frankfurt auto parts show (November 26\u201329, 2025, Hall 1.1, Booth A17). A short recap and what it means for our export partners.',
    topic: 'news',
    topicLabel: 'Company News',
    date: '2025-11-26',
    readMinutes: 3,
    relatedCategory: 'air-filter',
    sections: [
      {
        heading: 'Our booth at Automechanika Shanghai',
        paragraphs: [
          'Hebei Hongying Automotive Parts Co., Ltd. (hycarfilter) exhibited at Automechanika Shanghai 2025, held November 26\u201329 at the National Exhibition and Convention Center. Our booth was located at Hall 1.1, Booth A17, where we showed our air, cabin, oil and fuel filter lines, wipers, transmission filter screens and LED lighting to buyers from across the export markets.',
          'The show is a key meeting point for aftermarket and OEM buyers across Asia, the Middle East, Africa and beyond. For us it is the place to put physical samples in a buyer\u2019s hands — where a one-piece drawn shell, a calibrated bypass valve and a high-rebound seal can be seen and felt, not just read about on a spec sheet.',
        ],
      },
      {
        heading: 'What we heard from buyers',
        paragraphs: [
          'The most consistent questions were about OE-number cross-referencing, cold-climate seal performance for Russia and Central Asia, and water-separator filters for diesel fleets in poor-fuel markets. Buyers are increasingly asking for test reports and certifications up front — a shift we welcome, because it rewards manufacturers who can prove their quality rather than just claim it.',
        ],
      },
      {
        heading: 'What it means for our partners',
        paragraphs: [
          'Trade shows are where long-term export relationships start. The buyers who visit a booth, handle the samples and ask detailed questions are the ones who go on to place repeat, consolidated orders. If you missed us at the show, the same product range and the same technical depth is available through our inquiry channel year-round.',
        ],
      },
    ],
  },
];
