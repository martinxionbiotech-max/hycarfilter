// Central site config — single source for brand/contact facts (kept consistent site-wide).
export const site = {
  brand: 'hycarfilter',
  companyName: 'Qinghe County Huiying Auto Parts Co., Ltd.',
  companyNameShort: 'Huiying Auto Parts',
  domain: 'hycarfilter.com', // placeholder domain
  since: 2013,
  // Verified legal entity (E-E-A-T disclosure) — sourced from China public business
  // registry via Sogou search results aggregating Tianyancha + the Hebei 2023 Q4
  // technology-based SME list. Retrieved 2026-10-25. Zero fabrication: Baidu Baike
  // has no entry for this entity; the official registry profile on Baidu Aiqicha
  // (user-provided) serves as the authoritative citation.
  entity: {
    legalName: 'Qinghe County Huiying Auto Parts Co., Ltd.',
    legalNameZh: '清河县汇盈汽车零部件有限公司',
    creditCode: '91130534MA0958NT84',
    addressCn: '河北省邢台市清河县闽江街以北、九华山路以西',
    sameAs: 'https://aiqicha.baidu.com/company_detail_49854926859922',
    foundedDate: '2017-10-10',
    legalRepZh: '刘风秀',
    registeredCapital: '100万元人民币',
    businessScopeZh:
      '汽车零部件及配件制造；汽车零配件零售；农业机械制造；农业机械销售；货物进出口',
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
