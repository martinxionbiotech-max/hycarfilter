// ============================================================================
// i18n — shared UI strings (batch B). Arabic (ar) & Spanish (es).
//
// Glossary — key trade terms (keep consistent across ALL translations):
//   air filter            ar: فلتر الهواء          es: filtro de aire
//   cabin filter          ar: فلتر المقصورة        es: filtro de habitáculo
//   oil filter            ar: فلتر الزيت            es: filtro de aceite
//   fuel filter           ar: فلتر الوقود           es: filtro de combustible
//   wiper blade           ar: شفرة المسّاحة        es: escobilla limpiaparabrisas
//   transmission screen   ar: مصفاة ناقل الحركة    es: malla/filtro de transmisión
//   LED lights            ar: مصابيح LED           es: luces LED
//   OE number             ar: رقم OE               es: número OE
//   cross reference       ar: المرجع المتقاطع      es: referencia cruzada
//   MOQ                   ar: الحد الأدنى للطلب     es: cantidad mínima de pedido
//   lead time             ar: المهلة الزمنية        es: plazo de entrega
//   filtration efficiency ar: كفاءة الترشيح         es: eficiencia de filtración
//   media (filter)        ar: وسيط الترشيح         es: medio filtrante
//   OEM/ODM               keep "OEM/ODM" (industry term)
//
// Untranslated by design: model codes (hy-af-nano), OE numbers, cross-reference
// part numbers, HS codes, certifications (ISO 9001 / IATF 16949 / CE / RoHS),
// thread specs (3/4-16 UNF, M16x1.5), gasket material codes (NBR), numbers & units.
// ============================================================================

export interface UIStrings {
  // header
  logoTagline: string;
  logoHome: string;
  nav: { home: string; products: string; applications: string; factory: string; about: string; blog: string; contact: string };
  getQuote: string;
  changeLanguage: string;
  toggleNav: string;
  // footer
  positioning: string;
  sitemap: string;
  contact: string;
  legal: string;
  allRightsReserved: string;
  since: string;
  // whatsapp
  waLabel: string;
  waAria: string;
  // inquiry cta
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSub: string;
  sendInquiry: string;
  whatsappUs: string;
  // common
  products: string;
  applications: string;
  blog: string;
  home: string;
  backToHome: string;
  pageNotFound: string;
  pageNotFoundText: string;
  // product pages (shared headings)
  selectionGuide: string;
  skuTable: string;
  specification: string;
  procurementConcerns: string;
  procurementConcernsFor: string;
  procurementQa: string;
  procurementNote: string;
  details: string;
  viewDetails: string;
  productGallery: string;
  relatedSkus: string;
  requestQuote: string;
  requestModelQuote: string;
  buyerShouldVerify: string;
  buyerShouldVerifySegment: string;
  canonicalValues: string;
  canonicalValuesSku: string;
  galleryNote: string;
  realWorries: string;
  categoryCtaSub: string;
  skuCtaSub: string;
  // category table headers
  thModel: string;
  thSeries: string;
  thDimensions: string;
  thFiltrationEfficiency: string;
  thMedia: string;
  thApplicableVehicles: string;
  thCartonQty: string;
  thMoq: string;
  thDetails: string;
  // SKU spec labels
  lblModel: string;
  lblBrand: string;
  lblCategory: string;
  lblSeries: string;
  lblDimensions: string;
  lblThreadGasket: string;
  lblHousing: string;
  lblMediaMaterial: string;
  lblEndCap: string;
  lblSeal: string;
  lblApplicableVehicles: string;
  lblOeNumbers: string;
  lblCrossReference: string;
  lblInnerBox: string;
  lblOuterCarton: string;
  lblNetWeight: string;
  lblLeadTime: string;
  lblCertifications: string;
  lblHsCode: string;
  lblTargetMarkets: string;
  // dimension words
  length: string;
  width: string;
  height: string;
  outerDiameter: string;
  innerDiameter: string;
  thread: string;
  gasket: string;
  // units
  unitPcs: string;
  unitKgPerUnit: string;
  unitDays: string;
  unitMm: string;
  // blog
  minRead: string;
  relatedProductLine: string;
  blogTopicTitles: { air: string; oil: string; cabin: string; fuel: string; wiper: string; transmission: string; led: string; news: string };
  // applications
  typicalFilterMix: string;
  procurementPoints: string;
  relatedCategories: string;
  readFullGuide: string;
  sourcingFor: string;
  sceneCtaSub: string;
  // contact form
  getInTouch: string;
  inquiryForm: string;
  inquiryFormNote: string;
  formName: string;
  formNamePlaceholder: string;
  formCompany: string;
  formCompanyPlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formWhatsapp: string;
  formWhatsappPlaceholder: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formDirectNote: string;
  formEmailLabel: string;
  formWhatsappWechatLabel: string;
  formPhoneLabel: string;
  formAddressLabel: string;
  // 404
  notFound: string;
  notFoundText: string;
  // misc shared
  emailLabel: string;
  addressLabel: string;
  phoneLabel: string;
  whatsappLabel: string;
}

/** Substitute the {x} placeholder in a localized template string. */
export function t(template: string, x: string): string {
  return template.split('{x}').join(x);
}

const ar: UIStrings = {
  logoTagline: 'مُصنّع ومُصدّر الفلاتر',
  logoHome: 'hycarfilter — الرئيسية',
  nav: {
    home: 'الرئيسية',
    products: 'المنتجات',
    applications: 'التطبيقات',
    factory: 'المصنع',
    about: 'من نحن',
    blog: 'المدونة',
    contact: 'اتصل بنا',
  },
  getQuote: 'اطلب عرض سعر',
  changeLanguage: 'تغيير اللغة',
  toggleNav: 'تبديل التنقل',
  positioning: 'مُصنّع ومُصدّر لفلاتر السيارات من تجمّع صناعة الفلاتر في تشينغخه.',
  sitemap: 'خريطة الموقع',
  contact: 'التواصل',
  legal: 'قانوني',
  allRightsReserved: 'جميع الحقوق محفوظة.',
  since: 'منذ',
  waLabel: 'تواصل معنا الآن',
  waAria: 'تواصل معنا عبر واتساب',
  ctaEyebrow: 'اطلب عرض سعر',
  ctaTitle: 'جاهز لتوريد الفلاتر؟',
  ctaSub: 'أخبرنا بالموديل أو رقم OE أو السوق المستهدف — نردّ خلال 24 ساعة.',
  sendInquiry: 'أرسل استفسارًا',
  whatsappUs: 'راسلنا عبر واتساب',
  products: 'المنتجات',
  applications: 'التطبيقات',
  blog: 'المدونة',
  home: 'الرئيسية',
  backToHome: 'العودة إلى الرئيسية',
  pageNotFound: 'الصفحة غير موجودة',
  pageNotFoundText: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
  selectionGuide: 'دليل الاختيار',
  skuTable: 'جدول الموديلات (SKU)',
  specification: 'المواصفات',
  procurementConcerns: 'مخاوف المشتري في التوريد',
  procurementConcernsFor: 'مخاوف التوريد لهذه الفئة',
  procurementQa: 'أسئلة التوريد الشائعة',
  procurementNote: '— هيئة تحرير hycarfilter · ملاحظة توريد',
  details: 'التفاصيل',
  viewDetails: 'عرض ←',
  productGallery: 'معرض المنتج',
  relatedSkus: 'موديلات {x} ذات الصلة',
  requestQuote: 'اطلب عرض سعر لـ {x}',
  requestModelQuote: 'اطلب عرض سعر للموديل {x}',
  buyerShouldVerify: 'ما ينبغي على المشتري التحقق منه قبل تثبيت الطلب في هذه الفئة.',
  buyerShouldVerifySegment: 'ما ينبغي على المشتري التحقق منه قبل تثبيت الطلب في هذا القطاع.',
  canonicalValues: 'قيم مرجعية (تُعرَّف مرة واحدة في src/data/products.json). رمز النظام المنسق HS: {x}.',
  canonicalValuesSku: 'قيم مرجعية من src/data/products.json — المصدر الوحيد للحقيقة.',
  galleryNote: 'صور مرجعية لفلتر {x} — {n} صور منتج من خط {x}. الصورة أعلاه هي الصورة التمثيلية؛ اطلب صور عيّنات محددة للموديل المطابق.',
  realWorries: 'المخاوف الحقيقية التي يطرحها مشتري {x} — وكيف نعالجها.',
  categoryCtaSub: 'أرسل رقم OE أو المركبة المستهدفة أو السوق — نطابق الموديل المناسب ونزوّدك بورقة مواصفات كاملة.',
  skuCtaSub: 'أرسل رقم OE أو المركبة المستهدفة — نؤكد ملاءمة {x} ونزوّدك بورقة المواصفات الكاملة.',
  thModel: 'الموديل',
  thSeries: 'السلسلة',
  thDimensions: 'الأبعاد',
  thFiltrationEfficiency: 'كفاءة الترشيح',
  thMedia: 'وسيط الترشيح',
  thApplicableVehicles: 'المركبات المناسبة',
  thCartonQty: 'عدد القطع بالكرتون',
  thMoq: 'الحد الأدنى للطلب',
  thDetails: 'التفاصيل',
  lblModel: 'الموديل',
  lblBrand: 'العلامة التجارية',
  lblCategory: 'الفئة',
  lblSeries: 'السلسلة',
  lblDimensions: 'الأبعاد',
  lblThreadGasket: 'السن / الحشية',
  lblHousing: 'الهيكل',
  lblMediaMaterial: 'مادة وسيط الترشيح',
  lblEndCap: 'الغطاء الطرفي',
  lblSeal: 'مانع التسرب',
  lblApplicableVehicles: 'المركبات المناسبة',
  lblOeNumbers: 'أرقام OE',
  lblCrossReference: 'المراجع المتقاطعة',
  lblInnerBox: 'التغليف الداخلي',
  lblOuterCarton: 'الكرتون الخارجي',
  lblNetWeight: 'الوزن الصافي',
  lblLeadTime: 'المهلة الزمنية',
  lblCertifications: 'الشهادات',
  lblHsCode: 'رمز النظام المنسق (HS)',
  lblTargetMarkets: 'الأسواق المستهدفة',
  length: 'الطول',
  width: 'العرض',
  height: 'الارتفاع',
  outerDiameter: 'القطر الخارجي',
  innerDiameter: 'القطر الداخلي',
  thread: 'السن',
  gasket: 'الحشية',
  unitPcs: 'قطعة',
  unitKgPerUnit: 'كجم/وحدة',
  unitDays: 'يوم',
  unitMm: 'مم',
  minRead: 'دقيقة قراءة',
  relatedProductLine: 'خط المنتج ذو الصلة:',
  blogTopicTitles: {
    air: 'فلتر الهواء',
    oil: 'فلتر الزيت',
    cabin: 'فلتر المقصورة',
    fuel: 'فلتر الوقود',
    wiper: 'شفرات المسّاحات',
    transmission: 'فلاتر ناقل الحركة',
    led: 'إضاءة LED',
    news: 'أخبار الشركة',
  },
  typicalFilterMix: 'مزيج الفلاتر المعتاد',
  procurementPoints: 'نقاط التوريد لهذا القطاع',
  relatedCategories: 'الفئات ذات الصلة',
  readFullGuide: 'اقرأ دليل التوريد الكامل ←',
  sourcingFor: 'توريد لقطاع {x}؟',
  sceneCtaSub: 'أخبرنا بالمركبات المستهدفة ودورة التشغيل — نوصي بالدرجات والتغليف المناسبين.',
  getInTouch: 'تواصل معنا',
  inquiryForm: 'نموذج الاستفسار',
  inquiryFormNote: 'أكمل ما تستطيع — كلما زادت التفاصيل، كان عرض السعر أسرع وأدق. يمكنك أيضًا مراسلتنا عبر البريد أو واتساب مباشرة.',
  formName: 'الاسم',
  formNamePlaceholder: 'اسمك',
  formCompany: 'الشركة',
  formCompanyPlaceholder: 'شركتك (اختياري)',
  formEmail: 'البريد الإلكتروني *',
  formEmailPlaceholder: 'you@company.com',
  formWhatsapp: 'واتساب',
  formWhatsappPlaceholder: '+xx ...',
  formMessage: 'الرسالة *',
  formMessagePlaceholder: 'الموديل / رقم OE / السوق المستهدف / الكمية...',
  formSubmit: 'أرسل الاستفسار',
  formDirectNote: 'سيؤدي الإرسال إلى فتح عميل البريد الإلكتروني لديك. للمراسلة المباشرة، استخدم واتساب.',
  formEmailLabel: 'البريد الإلكتروني',
  formWhatsappWechatLabel: 'واتساب / ويتشات',
  formPhoneLabel: 'الهاتف',
  formAddressLabel: 'العنوان',
  notFound: '404 — الصفحة غير موجودة',
  notFoundText: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
  emailLabel: 'البريد الإلكتروني',
  addressLabel: 'العنوان',
  phoneLabel: 'الهاتف',
  whatsappLabel: 'واتساب',
};

const es: UIStrings = {
  logoTagline: 'fabricante y exportador de filtros',
  logoHome: 'hycarfilter — inicio',
  nav: {
    home: 'Inicio',
    products: 'Productos',
    applications: 'Aplicaciones',
    factory: 'Fábrica',
    about: 'Nosotros',
    blog: 'Blog',
    contact: 'Contacto',
  },
  getQuote: 'Solicitar cotización',
  changeLanguage: 'Cambiar idioma',
  toggleNav: 'Alternar navegación',
  positioning: 'Fabricante y exportador de filtros automotrices del clúster industrial de filtros de Qinghe.',
  sitemap: 'Mapa del sitio',
  contact: 'Contacto',
  legal: 'Legal',
  allRightsReserved: 'Todos los derechos reservados.',
  since: 'DESDE',
  waLabel: 'Chatea con nosotros ahora',
  waAria: 'Chatea con nosotros por WhatsApp',
  ctaEyebrow: 'Solicita una cotización',
  ctaTitle: '¿Listo para adquirir filtros?',
  ctaSub: 'Cuéntanos tu modelo, número OE o mercado objetivo — respondemos en 24 horas.',
  sendInquiry: 'Enviar una consulta',
  whatsappUs: 'Escríbenos por WhatsApp',
  products: 'Productos',
  applications: 'Aplicaciones',
  blog: 'Blog',
  home: 'Inicio',
  backToHome: 'Volver al inicio',
  pageNotFound: 'Página no encontrada',
  pageNotFoundText: 'La página que buscas no existe o se ha movido.',
  selectionGuide: 'Guía de selección',
  skuTable: 'Tabla de referencias (SKU)',
  specification: 'Especificaciones',
  procurementConcerns: 'Preocupaciones de compra',
  procurementConcernsFor: 'Preocupaciones de compra para esta categoría',
  procurementQa: 'Preguntas frecuentes de compra',
  procurementNote: '— editorial de hycarfilter · nota de compra',
  details: 'Detalles',
  viewDetails: 'Ver →',
  productGallery: 'Galería del producto',
  relatedSkus: 'Referencias {x} relacionadas',
  requestQuote: 'Solicita una cotización de {x}',
  requestModelQuote: 'Solicita una cotización de la referencia {x}',
  buyerShouldVerify: 'Qué debe verificar un comprador antes de confirmar un pedido en esta categoría.',
  buyerShouldVerifySegment: 'Qué debe verificar un comprador antes de confirmar un pedido en este segmento.',
  canonicalValues: 'Valores canónicos (definidos una sola vez en src/data/products.json). Código SA: {x}.',
  canonicalValuesSku: 'Valores canónicos de src/data/products.json — la única fuente de verdad.',
  galleryNote: 'Fotos de referencia de {x} — {n} imágenes de producto de la línea {x}. La imagen superior es la toma representativa; solicita fotos de muestra específicas para una referencia coincidente.',
  realWorries: 'Las preocupaciones reales que plantea un comprador de {x} — y cómo las resolvemos.',
  categoryCtaSub: 'Envíanos tu número OE, vehículo objetivo o mercado — encontramos la referencia correcta y te enviamos una ficha técnica completa.',
  skuCtaSub: 'Envíanos tu número OE o vehículo objetivo — confirmamos la compatibilidad de {x} y te enviamos la ficha técnica completa.',
  thModel: 'Modelo',
  thSeries: 'Serie',
  thDimensions: 'Dimensiones',
  thFiltrationEfficiency: 'Eficiencia de filtración',
  thMedia: 'Medio filtrante',
  thApplicableVehicles: 'Vehículos aplicables',
  thCartonQty: 'Unid. por caja',
  thMoq: 'Pedido mínimo',
  thDetails: 'Detalles',
  lblModel: 'Modelo',
  lblBrand: 'Marca',
  lblCategory: 'Categoría',
  lblSeries: 'Serie',
  lblDimensions: 'Dimensiones',
  lblThreadGasket: 'Rosca / junta',
  lblHousing: 'Carcasa',
  lblMediaMaterial: 'Material del medio',
  lblEndCap: 'Tapa extrema',
  lblSeal: 'Sello',
  lblApplicableVehicles: 'Vehículos aplicables',
  lblOeNumbers: 'Números OE',
  lblCrossReference: 'Referencias cruzadas',
  lblInnerBox: 'Caja interior',
  lblOuterCarton: 'Caja exterior',
  lblNetWeight: 'Peso neto',
  lblLeadTime: 'Plazo de entrega',
  lblCertifications: 'Certificaciones',
  lblHsCode: 'Código SA (HS)',
  lblTargetMarkets: 'Mercados objetivo',
  length: 'Largo',
  width: 'Ancho',
  height: 'Alto',
  outerDiameter: 'Diámetro exterior',
  innerDiameter: 'Diámetro interior',
  thread: 'Rosca',
  gasket: 'Junta',
  unitPcs: 'pzas',
  unitKgPerUnit: 'kg/unidad',
  unitDays: 'días',
  unitMm: 'mm',
  minRead: 'min de lectura',
  relatedProductLine: 'Línea de producto relacionada:',
  blogTopicTitles: {
    air: 'Filtro de aire',
    oil: 'Filtro de aceite',
    cabin: 'Filtro de habitáculo',
    fuel: 'Filtro de combustible',
    wiper: 'Escobillas limpiaparabrisas',
    transmission: 'Filtros de transmisión',
    led: 'Iluminación LED',
    news: 'Noticias de la empresa',
  },
  typicalFilterMix: 'Mezcla típica de filtros',
  procurementPoints: 'Puntos de compra para este segmento',
  relatedCategories: 'Categorías relacionadas',
  readFullGuide: 'Lee la guía de compra completa →',
  sourcingFor: '¿Adquiriendo para {x}?',
  sceneCtaSub: 'Cuéntanos tus vehículos objetivo y su ciclo de trabajo — te recomendamos los grados y el embalaje adecuados.',
  getInTouch: 'Ponte en contacto',
  inquiryForm: 'Formulario de consulta',
  inquiryFormNote: 'Completa lo que puedas — cuantos más detalles, más rápida y precisa será la cotización. También puedes escribirnos directamente por correo o WhatsApp.',
  formName: 'Nombre',
  formNamePlaceholder: 'Tu nombre',
  formCompany: 'Empresa',
  formCompanyPlaceholder: 'Tu empresa (opcional)',
  formEmail: 'Correo electrónico *',
  formEmailPlaceholder: 'tu@empresa.com',
  formWhatsapp: 'WhatsApp',
  formWhatsappPlaceholder: '+xx ...',
  formMessage: 'Mensaje *',
  formMessagePlaceholder: 'Modelo / número OE / mercado objetivo / cantidad...',
  formSubmit: 'Enviar consulta',
  formDirectNote: 'Al enviar se abrirá tu cliente de correo. Para mensajes directos, usa WhatsApp.',
  formEmailLabel: 'Correo electrónico',
  formWhatsappWechatLabel: 'WhatsApp / WeChat',
  formPhoneLabel: 'Teléfono',
  formAddressLabel: 'Dirección',
  notFound: '404 — Página no encontrada',
  notFoundText: 'La página que buscas no existe o se ha movido.',
  emailLabel: 'Correo electrónico',
  addressLabel: 'Dirección',
  phoneLabel: 'Teléfono',
  whatsappLabel: 'WhatsApp',
};

export const ui: Record<'ar' | 'es', UIStrings> = { ar, es };
