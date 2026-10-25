// Localized application-scene editorial content (Arabic + Spanish).
// Values that stay untranslated: "OE", "OEM/ODM", "H4/H7", "LED", numbers,
// units, brand "hycarfilter". Glossary terms follow src/i18n/ui.ts exactly.

import type { LocalizedScene } from './types';

export const scenesI18n: {
  ar: Record<string, LocalizedScene>;
  es: Record<string, LocalizedScene>;
} = {
  ar: {
    'passenger-cars': {
      title: 'سيارات الركاب',
      lede: 'القطاع الأعلى حجمًا والأكثر حساسية للسعر — لكن دقة الملاءمة وجودة مانع التسرب اللذين يحميان الطلبات المتكررة يهمّان أكثر من آخر سنت في سعر الوحدة.',
      body: [
        'سيارات الركاب هي موطن حجم مبيعات الفلاتر، وهي حيث يبني الموزّع إما نشاطًا للشراء المتكرر أو يخوض سباقًا نحو القاع. يغطي هذا القطاع فلاتر الهواء اللوحية، وفلاتر المقصورة من الجزيئات حتى HEPA، وفلاتر الزيت الدوّارة والخرطوشة، وفلاتر الوقود الخطية، والمسّاحات بدون هيكل والهجينة، ولمبات H4/H7 LED. كلٌّ منها مادة استهلاكية بفترة استبدال متوقعة — وهذا بالضبط ما يجعل القطاع قيّمًا للمستورد.',
        'العاملان الحاسمان هنا هما دقة الملاءمة وثبات جودة مانع التسرب. فلتر لوحي ينحرف بمقدار 2 مم، أو خرطوشة لا تستقر في مكانها، أو حشية لا ترتدّ كما ينبغي — كل ذلك يولّد إرجاعًا على موديل عالي الحجم، والإرجاعات على خطوط الحجم تُهدر الهامش الذي كان يفترض أن يحققه الحجم. الموزّعون الذين يخدمون هذا القطاع يريدون تغطية واسعة لأرقام OE مع شحن سريع ومجمّع، لا رقم قطعة رخيص يعود إليهم.',
      ],
      filters: [
        'فلتر هواء لوحي',
        'فلتر المقصورة (جزيئات/كربون/HEPA)',
        'فلتر زيت دوّار وخرطوشة',
        'فلتر وقود خطي',
        'مسّاحات بدون هيكل/هجينة',
        'لمبات H4/H7 LED',
      ],
      procurementPoints: [
        {
          title: 'اتساع تغطية أرقام OE',
          text: 'كتالوج سيارات الركاب ينجح أو يفشل بناءً على عدد أرقام OE التي يغطيها. اطلب قائمة المراجع المتقاطعة وتأكد من التغطية مقابل أسطول المركبات المستهدف قبل الالتزام.',
        },
        {
          title: 'تفاوت الملاءمة',
          text: 'ملاءمة الفلاتر اللوحية والخرطوشة حرجة على مستوى المليمتر. أكّد الأبعاد مقابل هيكل OE واعتمد عيّنة ما قبل الإنتاج قبل الإنتاج الضخم.',
        },
        {
          title: 'وسيط ترشيح متدرج للبيع الإضافي',
          text: 'اعرض فئات المقصورة بالجزيئات والكربون وHEPA، ووسيط الهواء القياسي مقابل النانوي، حتى يتمكن الموزّع من تسعير متدرج بدلًا من المنافسة على موديل سلعي واحد.',
        },
        {
          title: 'الشحن المجمّع',
          text: 'التجميع السريع لموديلات متعددة يُبقي تكلفة الشحن لكل وحدة منخفضة على خط حجم تهيمن فيه الحِزم المكعّبة على التكلفة النهائية.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'فلتر الهواء' },
        { slug: 'cabin-filter', label: 'فلتر المقصورة' },
        { slug: 'oil-filter', label: 'فلتر الزيت' },
        { slug: 'fuel-filter', label: 'فلتر الوقود' },
      ],
    },
    'commercial-vehicles': {
      title: 'المركبات التجارية',
      lede: 'تعمل الشاحنات والحافلات لساعات طويلة في ظروف قاسية. الترشيح هنا يتعلّق بوقت التشغيل وحماية الوقود، لا بسعر الوحدة.',
      body: [
        'المركبات التجارية — الشاحنات والحافلات وأساطيل المركبات التجارية الخفيفة — تقلب معادلة سيارات الركاب. الفلتر رخيص؛ أما التوقف عن العمل فمكلف. عطل على جانب الطريق أو انسداد في نظام الوقود يكلّف الأسطول خسارة إيرادات وعمالة أكثر مما قد يكلّفه أي فلتر على الإطلاق، ولهذا يمنح المشترون التجاريون الأولوية للموثوقية ووسيط الترشيح للخدمة الشاقة وفترات الصيانة المتوقعة على حساب أقل عرض سعر.',
        'يعتمد هذا القطاع على عناصر الهواء الأسطوانية وعناصر الخدمة الشاقة مع طبقة أمان، وفلاتر الزيت للخدمة الشاقة بوسيط مقوّى بالزجاج، وفلاتر الوقود الدوّارة وفواصل الماء، وأشرطة إضاءة LED للأغراض المساعدة. فصل الماء عن الديزل هو الميزة المحدِّدة في أسواق الوقود الرديء، والعبوات المعدنية المتينة من قطعة واحدة هي إشارة الجودة التي يبحث عنها المشترون.',
      ],
      filters: [
        'فلتر هواء أسطواني/للخدمة الشاقة',
        'فلتر زيت للخدمة الشاقة',
        'فلتر فاصل الماء عن الوقود',
        'فلتر وقود دوّار',
        'شريط إضاءة LED',
      ],
      procurementPoints: [
        {
          title: 'درجة دورة التشغيل',
          text: 'طابق وسيط الترشيح والبنية مع دورة التشغيل: وسيط زيت مقوّى بالزجاج وعناصر هواء بطبقة أمان للتشغيل المستمر تحت حمولة عالية.',
        },
        {
          title: 'فصل الماء عن الديزل',
          text: 'في الأسواق الرطبة أو ذات الديزل الرديء، يُعدّ فلتر فاصل الماء المزوّد بمصرف تأمينًا رخيصًا ضد تآكل الحاقنات — قدّمه في المقدمة.',
        },
        {
          title: 'عبوات متينة',
          text: 'الهياكل الفولاذية المسحوبة من قطعة واحدة وضغط الانفجار الصحيح يحميان جانب الضغط. اطلب مواصفات البنية وتقرير الاختبار، لا السعر فقط.',
        },
        {
          title: 'قابلية التنبؤ بفترات الصيانة',
          text: 'فترة صيانة منشورة وواقعية تحوّل الفلتر إلى طلب إعادة مجدول وتضع المورّد في موقع شريك الموثوقية للأسطول.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'فلتر الهواء' },
        { slug: 'oil-filter', label: 'فلتر الزيت' },
        { slug: 'fuel-filter', label: 'فلتر الوقود' },
        { slug: 'led-lights', label: 'مصابيح LED' },
      ],
    },
    'construction-machinery': {
      title: 'آلات البناء',
      lede: 'الغبار والصدمات والاهتزاز هي ما يحدّد هذا القطاع. يجب أن تصمد الفلاتر أمام أحمال غبار عالية وتحمي محركات وأنظمة هيدروليكية باهظة الثمن.',
      body: [
        'تعمل آلات البناء في أسوأ الظروف التي قد يراها أي فلتر على الإطلاق: غبار مستمر، واهتزاز، وأحمال صدمات، وفترات توقف طويلة. تكلفة العطل باهظة — محرك متوقف أو نظام هيدروليكي ملوّث على حفّارة أو لودر بعجل إصلاحه يصل إلى خمسة أو ستة أرقام، متجاوزًا بكثير تكلفة جميع الفلاتر على الآلة مجتمعة.',
        'يتطلّب هذا القطاع عناصر هواء للخدمة الشاقة بطبقة أمان، وفلاتر زيت للخدمة الشاقة مقوّاة بالزجاج، وفلاتر وقود فاصلة للماء للديزل الذي يشغّل الآلات، ومصافي فلاتر ناقل الحركة، ومصابيح عمل LED. هنا يقدّر المشتري وسيط الترشيح المتين ومانعات التسرب الموثوقة وفترات الصيانة المتوقعة قبل كل شيء آخر.',
      ],
      filters: [
        'فلتر هواء للخدمة الشاقة (طبقة أمان)',
        'فلتر زيت للخدمة الشاقة',
        'فاصل الماء عن الوقود',
        'مصفاة فلتر ناقل الحركة',
        'مصابيح عمل LED',
      ],
      procurementPoints: [
        {
          title: 'وسيط هواء عالي التحمل للغبار',
          text: 'عنصر بطبقة أمان غير قابل للتفاوض: فهو يحمي وسيط الترشيح الرئيسي والمحرك إذا تعرّضت الطبقة الخارجية للتلف أثناء التشغيل.',
        },
        {
          title: 'وسيط زيت مقوّى بالزجاج',
          text: 'الحمل والحرارة المرتفعان المستمران يتطلبان وسيط زيت مقوّى بالزجاج يصمد حيث ينهار السليلوز القياسي.',
        },
        {
          title: 'فصل الماء',
          text: 'يبقى ديزل البناء في خزانات في موقع العمل فيلتقط الماء — فاصل مزوّد بمصرف يحمي نظام الحقن.',
        },
        {
          title: 'تحمّل الاهتزاز',
          text: 'يجب أن تثبت مانعات التسرب والأغطية الطرفية تحت الصدمات والاهتزاز المستمر؛ اطلب بنية مخصصة لأعمال البناء، لا قطعة سيارات ركاب أُعيدت تسميتها.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'فلتر الهواء' },
        { slug: 'oil-filter', label: 'فلتر الزيت' },
        { slug: 'fuel-filter', label: 'فلتر الوقود' },
        { slug: 'transmission-filter-screen', label: 'مصفاة فلتر ناقل الحركة' },
      ],
    },
    'agricultural-machinery': {
      title: 'الآلات الزراعية',
      lede: 'دورات تشغيل موسمية عالية الغبار وطويلة التوقف. يحتاج المزارعون فلاتر تتحمّل غبار الحقول ووقودًا رديئًا في بعض الأحيان.',
      body: [
        'تعمل الآلات الزراعية على إيقاعها الخاص: دفعات موسمية مكثّفة، وفترات توقف طويلة بينها، وغبار حقول لا يلين أثناء العمل. دورة التشغيل موسمية لا مستمرة، ما يعني أن الفلتر الذي يظل خاملًا خلال موسم راحة رطب يجب أن يعمل بإتقان عندما يبدأ الموسم. الديزل الرديء أو الملوّث واقع شائع في المزرعة.',
        'يحتاج هذا القطاع عناصر هواء للخدمة الشاقة عالية التحمل للغبار، وفلاتر وقود فاصلة للماء للديزل، وفلاتر زيت للخدمة الشاقة، ومصافي فلاتر ناقل الحركة. فصل الماء ووسيط الهواء عالي التحمل للغبار هما العاملان الحاسمان — ففلتر هواء مسدود في منتصف الزراعة أو الحصاد عطل مكلف وحسّاس للوقت.',
      ],
      filters: [
        'فلتر هواء للخدمة الشاقة',
        'فلتر فاصل الماء عن الوقود',
        'فلتر زيت للخدمة الشاقة',
        'مصفاة فلتر ناقل الحركة',
      ],
      procurementPoints: [
        {
          title: 'وسيط هواء عالي التحمل للغبار',
          text: 'غبار الحقل ناعم ومستمر — عنصر هواء بألياف نانوية أو بطبقة أمان يطيل فترة الصيانة ويحمي المحرك.',
        },
        {
          title: 'فصل الماء عن الديزل',
          text: 'غالبًا ما يُخزَّن ديزل المزرعة بكميات كبيرة فيلتقط الماء؛ الفاصل المزوّد بمصرف هو خط الدفاع الأول لنظام الحقن.',
        },
        {
          title: 'تخزين موسم الراحة',
          text: 'يجب إحكام غلق العناصر وحمايتها حتى تعمل الآلة التي تظل خاملة خلال موسم راحة رطب بنظافة عندما يبدأ الموسم.',
        },
        {
          title: 'المهلة الزمنية الموسمية',
          text: 'يشتري قطاع الزراعة قبل الموسم — خطّط للمهل الزمنية بحيث يكون الموزّع مزوّدًا بالمخزون قبل الزراعة والحصاد، لا بعدهما.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'فلتر الهواء' },
        { slug: 'fuel-filter', label: 'فلتر الوقود' },
        { slug: 'oil-filter', label: 'فلتر الزيت' },
        { slug: 'transmission-filter-screen', label: 'مصفاة فلتر ناقل الحركة' },
      ],
    },
  },
  es: {
    'passenger-cars': {
      title: 'Automóviles de pasajeros',
      lede: 'El segmento de mayor volumen y más sensible al precio, pero la precisión de ajuste y la calidad del sellado que protegen los pedidos repetidos importan más que el último centavo del precio unitario.',
      body: [
        'Los automóviles de pasajeros son donde vive el volumen de filtros y donde un distribuidor o bien construye un negocio de compra recurrente o pelea una carrera hacia el fondo. El segmento abarca filtros de aire de panel, filtros de habitáculo de partículas hasta HEPA, filtros de aceite roscados y de cartucho, filtros de combustible en línea, escobillas aerodinámicas e híbridas y bombillas LED H4/H7. Cada uno es un consumible con un intervalo de reemplazo predecible, que es exactamente lo que hace valioso el segmento para un importador.',
        'Los factores decisivos aquí son la precisión de ajuste y la consistencia del sellado. Un filtro de panel desviado 2 mm, un cartucho que no asienta o una junta que no recupera su forma generan una devolución en una referencia de alto volumen, y las devoluciones en líneas de volumen destruyen el margen que ese volumen debía generar. Los distribuidores que atienden este segmento quieren una amplia cobertura OE con envíos rápidos y consolidados, no un número de pieza barato que regresa.',
      ],
      filters: [
        'Filtro de aire de panel',
        'Filtro de habitáculo (partículas/carbón/HEPA)',
        'Filtro de aceite roscado y de cartucho',
        'Filtro de combustible en línea',
        'Escobillas aerodinámicas/híbridas',
        'Bombillas LED H4/H7',
      ],
      procurementPoints: [
        {
          title: 'Amplitud de cobertura OE',
          text: 'Un catálogo de pasajeros vive o muere según cuántos números OE cubre. Pide la lista de referencias cruzadas y confirma la cobertura frente al parque objetivo antes de comprometerte.',
        },
        {
          title: 'Tolerancia de ajuste',
          text: 'El ajuste de paneles y cartuchos es crítico al milímetro. Confirma las dimensiones contra la carcasa OE y aprueba una muestra de preproducción antes de la producción en serie.',
        },
        {
          title: 'Medios escalonados para venta adicional',
          text: 'Ofrece niveles de habitáculo de partículas, carbón y HEPA, y medios de aire estándar frente a nano, para que el distribuidor pueda escalonar precios en lugar de competir en una única referencia de producto básico.',
        },
        {
          title: 'Envío consolidado',
          text: 'La consolidación rápida de referencias mixtas mantiene bajo el costo de flete por unidad en una línea de volumen donde el cubaje domina el costo final.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'Filtro de aire' },
        { slug: 'cabin-filter', label: 'Filtro de habitáculo' },
        { slug: 'oil-filter', label: 'Filtro de aceite' },
        { slug: 'fuel-filter', label: 'Filtro de combustible' },
      ],
    },
    'commercial-vehicles': {
      title: 'Vehículos comerciales',
      lede: 'Los camiones y autobuses operan largas horas en condiciones exigentes. Aquí la filtración se trata de tiempo de actividad y protección del combustible, no del precio unitario.',
      body: [
        'Los vehículos comerciales —camiones, autobuses y flotas comerciales ligeras— invierten el cálculo del pasajero. El filtro es barato; el tiempo de inactividad es caro. Una avería en carretera o un sistema de combustible obstruido le cuesta a una flota más en ingresos perdidos y mano de obra que cualquier filtro jamás, por lo que los compradores comerciales priorizan la fiabilidad, los medios de servicio pesado y los intervalos de servicio predecibles por encima de la cotización más baja.',
        'Este segmento utiliza elementos de aire redondos y de servicio pesado con capa de seguridad, filtros de aceite de servicio pesado con medios reforzados con vidrio, filtros de combustible roscados y separadores de agua, y barras de luces LED para trabajo auxiliar. La separación de agua del diésel es la característica definitoria en mercados de combustible de baja calidad, y los cartuchos metálicos de una pieza son la señal de calidad que buscan los compradores.',
      ],
      filters: [
        'Filtro de aire redondo/de servicio pesado',
        'Filtro de aceite de servicio pesado',
        'Filtro separador de agua del combustible',
        'Filtro de combustible roscado',
        'Barra de luces LED',
      ],
      procurementPoints: [
        {
          title: 'Grado según ciclo de trabajo',
          text: 'Ajusta el medio y la construcción al ciclo de trabajo: medios de aceite reforzados con vidrio y elementos de aire con capa de seguridad para operación sostenida a alta carga.',
        },
        {
          title: 'Separación de agua para diésel',
          text: 'En mercados húmedos o con diésel de baja calidad, un filtro separador de agua con purga es un seguro barato contra la corrosión de inyectores: preséntalo primero.',
        },
        {
          title: 'Cartuchos duraderos',
          text: 'Las carcasas de acero estampado de una pieza y la presión de rotura correcta protegen el lado de presión. Pide la especificación de construcción y el informe de prueba, no solo el precio.',
        },
        {
          title: 'Predictibilidad del intervalo de servicio',
          text: 'Un intervalo publicado y realista convierte el filtro en un pedido programado y posiciona al proveedor como socio de fiabilidad para la flota.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'Filtro de aire' },
        { slug: 'oil-filter', label: 'Filtro de aceite' },
        { slug: 'fuel-filter', label: 'Filtro de combustible' },
        { slug: 'led-lights', label: 'Luces LED' },
      ],
    },
    'construction-machinery': {
      title: 'Maquinaria de construcción',
      lede: 'El polvo, los golpes y la vibración definen este segmento. Los filtros deben sobrevivir a altas cargas de polvo y proteger motores e hidráulica muy costosos.',
      body: [
        'La maquinaria de construcción trabaja en las peores condiciones que un filtro verá jamás: polvo continuo, vibración, cargas de impacto y largos periodos de inactividad. El costo de una falla es extremo: un motor agarrotado o un sistema hidráulico contaminado en una excavadora o un cargador de ruedas es una reparación de cinco o seis cifras, que empequeñece el costo de todos los filtros de la máquina juntos.',
        'Este segmento exige elementos de aire de servicio pesado con capa de seguridad, filtros de aceite de servicio pesado reforzados con vidrio, filtros de combustible separadores de agua para el diésel que impulsa las máquinas, mallas de filtro de transmisión y luces de trabajo LED. Aquí el comprador valora los medios resistentes, los sellos fiables y los intervalos de servicio predecibles por encima de todo.',
      ],
      filters: [
        'Filtro de aire de servicio pesado (capa de seguridad)',
        'Filtro de aceite de servicio pesado',
        'Separador de agua del combustible',
        'Malla de filtro de transmisión',
        'Luces de trabajo LED',
      ],
      procurementPoints: [
        {
          title: 'Medio de aire para alto polvo',
          text: 'Un elemento con capa de seguridad es innegociable: protege el medio principal y el motor si la capa exterior se daña en servicio.',
        },
        {
          title: 'Medio de aceite reforzado con vidrio',
          text: 'La carga y el calor elevados sostenidos exigen un medio de aceite reforzado con vidrio que resiste donde la celulosa estándar colapsa.',
        },
        {
          title: 'Separación de agua',
          text: 'El diésel de construcción permanece en tanques en la obra y absorbe agua: un separador con purga protege el sistema de inyección.',
        },
        {
          title: 'Tolerancia a la vibración',
          text: 'Los sellos y las tapas extremas deben resistir bajo golpes y vibración constantes; pide una construcción para servicio pesado, no una pieza de pasajero reetiquetada.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'Filtro de aire' },
        { slug: 'oil-filter', label: 'Filtro de aceite' },
        { slug: 'fuel-filter', label: 'Filtro de combustible' },
        { slug: 'transmission-filter-screen', label: 'Malla de filtro de transmisión' },
      ],
    },
    'agricultural-machinery': {
      title: 'Maquinaria agrícola',
      lede: 'Ciclos de trabajo estacionales, con mucho polvo y largos periodos de inactividad. Los agricultores necesitan filtros que toleren el polvo del campo y el combustible ocasionalmente deficiente.',
      body: [
        'La maquinaria agrícola opera a su propio ritmo: ráfagas estacionales intensas, largos periodos de inactividad entre ellas y un polvo de campo implacable mientras trabaja. El ciclo de trabajo es estacional en lugar de continuo, lo que significa que un filtro que permanece durante una temporada baja húmeda debe funcionar a la perfección cuando comienza la temporada. El diésel de baja calidad o contaminado es una realidad común en la granja.',
        'Este segmento necesita elementos de aire de servicio pesado para alto polvo, filtros de combustible separadores de agua para diésel, filtros de aceite de servicio pesado y mallas de filtro de transmisión. La separación de agua y el medio de aire para alto polvo son los factores decisivos: un filtro de aire obstruido en plena siembra o cosecha es una falla costosa y crítica en tiempo.',
      ],
      filters: [
        'Filtro de aire de servicio pesado',
        'Filtro separador de agua del combustible',
        'Filtro de aceite de servicio pesado',
        'Malla de filtro de transmisión',
      ],
      procurementPoints: [
        {
          title: 'Medio de aire para alto polvo',
          text: 'El polvo del campo es fino y constante: un elemento de aire de nanofibras o con capa de seguridad alarga el intervalo de servicio y protege el motor.',
        },
        {
          title: 'Separación de agua para diésel',
          text: 'El diésel de granja suele almacenarse a granel y absorbe agua; un separador con purga es la primera línea de defensa del sistema de inyección.',
        },
        {
          title: 'Almacenamiento fuera de temporada',
          text: 'Los elementos deben estar sellados y protegidos para que una máquina que permanece durante una temporada baja húmeda arranque limpia cuando comienza la temporada.',
        },
        {
          title: 'Plazo de entrega estacional',
          text: 'La agricultura compra con antelación a la temporada: planifica los plazos de entrega para que el distribuidor esté abastecido antes de la siembra y la cosecha, no después.',
        },
      ],
      relatedCategories: [
        { slug: 'air-filter', label: 'Filtro de aire' },
        { slug: 'fuel-filter', label: 'Filtro de combustible' },
        { slug: 'oil-filter', label: 'Filtro de aceite' },
        { slug: 'transmission-filter-screen', label: 'Malla de filtro de transmisión' },
      ],
    },
  },
};
