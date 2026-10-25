// Central site config — single source for brand/contact facts (kept consistent site-wide).
export const site = {
  brand: 'hycarfilter',
  companyName: 'Hebei Hongying Automotive Parts Co., Ltd.',
  companyNameShort: 'Hongying Automotive Parts',
  domain: 'hycarfilter.com', // placeholder domain
  since: 2013,
  tagline: 'Filter manufacturer & exporter',
  positioning: 'Automotive filter manufacturer & exporter from the Qinghe filter industry cluster.',
  address: 'No. 106 Lijiang Street, Qinghe County, Xingtai City, Hebei Province, China',
  addressZh: '河北省邢台市清河县漓江街 106 号',
  email: 'hy@hongyingfilter.com', // placeholder contact (keep as-is until owner updates)
  whatsapp: '+86-19133499777',
  mobile: '+86-13930925240',
  whatsappLink: 'https://api.whatsapp.com/send?phone=8619133499777&text=Hello',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/' },
  { label: 'Applications', href: '/applications/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/', placeholder: true },
  { label: 'Contact', href: '/contact/' },
];

export const complianceLinks = [
  { label: 'Privacy Policy', href: '/privacy/', placeholder: true },
  { label: 'Terms of Service', href: '/terms/', placeholder: true },
  { label: 'Disclaimer', href: '/disclaimer/', placeholder: true },
];
