// Application-scene editorial content (original writing, export/procurement perspective).
// Four segments, each expanded to a full page via /applications/[scene].astro.

export interface ProcurementPoint {
  title: string;
  text: string;
}

export interface ApplicationScene {
  slug: string;
  title: string;
  zh: string;
  icon: string;
  lede: string;
  body: string[];
  filters: string[];
  procurementPoints: ProcurementPoint[];
  relatedCategories: { slug: string; label: string }[];
}

export const applicationScenes: ApplicationScene[] = [
  {
    slug: 'passenger-cars',
    title: 'Passenger Cars',
    zh: '乘用车',
    icon: '🚗',
    lede:
      'The highest-volume, most price-sensitive segment — but the fitment accuracy and seal quality that protect repeat orders matter more than the last cent of unit price.',
    body: [
      'Passenger cars are where filter volume lives, and where a distributor either builds a repeat-purchase business or fights a race to the bottom. The segment spans panel air filters, particle-to-HEPA cabin filters, spin-on and cartridge oil filters, inline fuel filters, beam and hybrid wipers, and H4/H7 LED bulbs. Every one of those is a consumable with a predictable replacement interval — which is exactly what makes the segment valuable to an importer.',
      'The decisive factors here are fitment accuracy and seal consistency. A panel filter that is 2 mm off, a cartridge that does not seat, or a gasket that does not rebound generates a return on a high-volume SKU, and returns on volume lines destroy the margin that volume was supposed to create. Distributors serving this segment want broad OE-coverage with fast, consolidated shipping, not a cheap part number that comes back.',
    ],
    filters: ['Panel air filter', 'Cabin filter (particle/carbon/HEPA)', 'Spin-on & cartridge oil filter', 'Inline fuel filter', 'Beam/hybrid wipers', 'H4/H7 LED bulbs'],
    procurementPoints: [
      { title: 'OE-coverage breadth', text: 'A passenger catalog lives or dies on how many OE numbers it covers. Ask for the cross-reference list and confirm coverage against the target parc before committing.' },
      { title: 'Fitment tolerance', text: 'Panel and cartridge fitment is millimetre-critical. Confirm dimensions against the OE housing and approve a pre-production sample before mass production.' },
      { title: 'Tiered media for upsell', text: 'Carry particle, carbon and HEPA cabin tiers, and standard vs nano air media, so the distributor can ladder pricing instead of competing on one commodity SKU.' },
      { title: 'Consolidated shipping', text: 'Fast, mixed-SKU consolidation keeps freight cost per unit low on a volume line where cube dominates the landed cost.' },
    ],
    relatedCategories: [
      { slug: 'air-filter', label: 'Air Filter' },
      { slug: 'cabin-filter', label: 'Cabin Filter' },
      { slug: 'oil-filter', label: 'Oil Filter' },
      { slug: 'fuel-filter', label: 'Fuel Filter' },
    ],
  },
  {
    slug: 'commercial-vehicles',
    title: 'Commercial Vehicles',
    zh: '商用车',
    icon: '🚚',
    lede:
      'Trucks and buses run long hours in demanding conditions. Filtration here is about uptime and fuel protection, not unit price.',
    body: [
      'Commercial vehicles — trucks, buses and light commercial fleets — invert the passenger calculus. The filter is cheap; the downtime is expensive. A roadside breakdown or a clogged fuel system costs a fleet more in lost revenue and labor than any filter ever will, which is why commercial buyers prioritize reliability, heavy-duty media and predictable service intervals over the lowest quote.',
      'This segment runs round and heavy-duty air elements with safety layers, heavy-duty oil filters with glass-enhanced media, spin-on and water-separator fuel filters, and LED light bars for auxiliary duty. Water separation for diesel is the defining feature in poor-fuel markets, and durable one-piece canisters are the quality signal buyers look for.',
    ],
    filters: ['Round/heavy-duty air filter', 'Heavy-duty oil filter', 'Fuel water-separator filter', 'Spin-on fuel filter', 'LED light bar'],
    procurementPoints: [
      { title: 'Duty-cycle grade', text: 'Match media and construction to the duty cycle: glass-enhanced oil media and safety-layer air elements for sustained high-load operation.' },
      { title: 'Water separation for diesel', text: 'In humid or poor-diesel markets, a water-separator filter with a drain is cheap insurance against injector corrosion — lead with it.' },
      { title: 'Durable canisters', text: 'One-piece drawn steel shells and correct burst pressure protect the pressure side. Ask for the construction spec and test report, not just the price.' },
      { title: 'Service-interval predictability', text: 'A published, realistic interval turns the filter into a scheduled reorder and positions the supplier as a reliability partner to the fleet.' },
    ],
    relatedCategories: [
      { slug: 'air-filter', label: 'Air Filter' },
      { slug: 'oil-filter', label: 'Oil Filter' },
      { slug: 'fuel-filter', label: 'Fuel Filter' },
      { slug: 'led-lights', label: 'LED Lights' },
    ],
  },
  {
    slug: 'construction-machinery',
    title: 'Construction Machinery',
    zh: '工程机械',
    icon: '🚜',
    lede:
      'Dust, shock and vibration define this segment. Filters must survive high dust loads and protect very expensive engines and hydraulics.',
    body: [
      'Construction machinery works in the worst conditions a filter will ever see: continuous dust, vibration, shock loads and long idle periods. The cost of a failure is extreme — a seized engine or a contaminated hydraulic system on an excavator or a wheel loader is a five- or six-figure repair, dwarfing the cost of every filter on the machine combined.',
      'This segment demands heavy-duty air elements with a safety layer, glass-enhanced heavy-duty oil filters, water-separator fuel filters for the diesel that powers the machines, transmission filter screens, and LED work lights. The buyer here values rugged media, reliable seals and predictable service intervals above all else.',
    ],
    filters: ['Heavy-duty air filter (safety layer)', 'Heavy-duty oil filter', 'Fuel water separator', 'Transmission filter screen', 'LED work lights'],
    procurementPoints: [
      { title: 'High-dust air media', text: 'A safety-layer element is non-negotiable: it protects the main media and the engine if the outer layer is damaged in service.' },
      { title: 'Glass-enhanced oil media', text: 'Sustained high load and heat demand glass-enhanced oil media that holds up where standard cellulose collapses.' },
      { title: 'Water separation', text: 'Construction diesel sits in tanks on site and picks up water — a separator with a drain protects the injection system.' },
      { title: 'Vibration tolerance', text: 'Seals and end caps must hold under constant shock and vibration; ask for construction-duty construction, not a passenger part re-labelled.' },
    ],
    relatedCategories: [
      { slug: 'air-filter', label: 'Air Filter' },
      { slug: 'oil-filter', label: 'Oil Filter' },
      { slug: 'fuel-filter', label: 'Fuel Filter' },
      { slug: 'transmission-filter-screen', label: 'Transmission Filter Screen' },
    ],
  },
  {
    slug: 'agricultural-machinery',
    title: 'Agricultural Machinery',
    zh: '农机',
    icon: '🌾',
    lede:
      'Seasonal, high-dust, long-idle duty cycles. Farmers need filters that tolerate field dust and occasional poor fuel.',
    body: [
      'Agricultural machinery runs in its own rhythm: intense seasonal bursts, long idle periods between them, and relentless field dust while it works. The duty cycle is seasonal rather than continuous, which means a filter that sits through a wet off-season must still perform flawlessly when the season starts. Poor-quality or contaminated diesel is a common reality on the farm.',
      'This segment needs high-dust heavy-duty air elements, water-separator fuel filters for diesel, heavy-duty oil filters, and transmission filter screens. Water separation and high-dust air media are the decisive factors — a clogged air filter in the middle of planting or harvest is a costly, time-critical failure.',
    ],
    filters: ['Heavy-duty air filter', 'Fuel water-separator filter', 'Heavy-duty oil filter', 'Transmission filter screen'],
    procurementPoints: [
      { title: 'High-dust air media', text: 'Field dust is fine and constant — a nano-fiber or safety-layer air element extends the service interval and protects the engine.' },
      { title: 'Water separation for diesel', text: 'Farm diesel is often stored in bulk and picks up water; a separator with a drain is the first line of defense for the injection system.' },
      { title: 'Off-season storage', text: 'Elements must be sealed and protected so a machine that sits through a wet off-season still starts clean when the season begins.' },
      { title: 'Seasonal lead time', text: 'Agriculture buys ahead of the season — plan lead times so the distributor is stocked before planting and harvest, not after.' },
    ],
    relatedCategories: [
      { slug: 'air-filter', label: 'Air Filter' },
      { slug: 'fuel-filter', label: 'Fuel Filter' },
      { slug: 'oil-filter', label: 'Oil Filter' },
      { slug: 'transmission-filter-screen', label: 'Transmission Filter Screen' },
    ],
  },
];
