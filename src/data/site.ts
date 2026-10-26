// Central site config — single source for brand/contact facts (kept consistent site-wide).
export const site = {
  brand: 'hycarfilter',
  companyName: 'Qinghe County Hongying Auto Parts Co., Ltd.',
  companyNameShort: 'Hongying Auto Parts',
  domain: 'hycarfilter.com', // placeholder domain
  since: 2013,
  // Brand vs legal-entity founding (P0 audit remediation) — no false "since" claims.
  // The brand/team lineage predates the registered entity; both are disclosed together.
  brandHistory: {
    brandFounded: 2013, // brand & manufacturing team lineage
    entityFounded: '2023-11-28', // legal entity registration date
    statement:
      'The hycarfilter brand and its manufacturing team trace their business back to 2013; the current legal entity, Qinghe County Hongying Auto Parts Co., Ltd., was registered on 2023-11-28.',
  },
  // Manufacturing model — truthful framing (no fabricated co-manufacturers).
  manufacturingModel:
    'In-house production is our core model; for select product categories we may work with collaborating factories.',
  // Verified legal entity (E-E-A-T disclosure) — sourced from the authoritative Baidu
  // Aiqicha official registry profile (user-provided), retrieved 2026-10-25. Zero
  // fabrication: every field below matches the registry record for
  // 清河县宏盈汽车零部件有限公司 (Qinghe County Hongying Auto Parts Co., Ltd.).
  entity: {
    legalName: 'Qinghe County Hongying Auto Parts Co., Ltd.',
    legalNameZh: '清河县宏盈汽车零部件有限公司',
    creditCode: '91130534MAD6454E17',
    addressCn: '河北省邢台市清河县漓江街106号',
    sameAs: 'https://aiqicha.baidu.com/company_detail_49854926859922',
    foundedDate: '2023-11-28',
    legalRepZh: '简长宏',
    registeredCapital: '500万元人民币',
    businessScopeZh:
      '汽车零部件及配件制造；汽车零配件批发；汽车零配件零售',
    companyType: '有限责任公司(自然人独资)',
    registryPhone: '13930925240',
    registryEmail: 'hy@hongyingfilter.com',
  },
  tagline: 'Filter manufacturer & exporter',
  taglineAr: 'مُصنّع ومُصدّر الفلاتر',
  taglineEs: 'Fabricante y exportador de filtros',
  positioning: 'Automotive filter manufacturer & exporter from the Qinghe filter industry cluster.',
  positioningAr: 'مُصنّع ومُصدّر لفلاتر السيارات من تجمّع صناعة الفلاتر في تشينغخه.',
  positioningEs: 'Fabricante y exportador de filtros automotrices del clúster industrial de filtros de Qinghe.',
  address: 'No. 106 Lijiang Street, Qinghe County, Xingtai City, Hebei Province, China',
  addressZh: '河北省邢台市清河县漓江街 106 号',
  email: 'martin@hycarfilter.com',
  phone: '+86 13323237275',
  whatsapp: '+86 13323237275',
  whatsappLink: 'https://wa.me/8613323237275',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/' },
  { label: 'Applications', href: '/applications/' },
  { label: 'Factory', href: '/factory/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const complianceLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Cookie Policy', href: '/cookies/' },
];
