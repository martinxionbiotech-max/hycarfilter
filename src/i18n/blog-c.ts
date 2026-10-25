import type { BlogPostLocalized } from './types';

export const blogI18nC: {
  ar: Record<string, BlogPostLocalized>;
  es: Record<string, BlogPostLocalized>;
} = {
  ar: {
    'fuel-filter-failure-symptoms': {
      title: 'أعراض تعطل فلتر الوقود وفترات الاستبدال: الديزل مقابل البنزين',
      excerpt:
        'يتجلى فلتر الوقود المعطوب في صعوبة التشغيل وضعف القدرة والتردد في الاستجابة — لكن الديزل والبنزين يتعطلان بشكل مختلف. إليك كيف تقرأ العلامات.',
      topicLabel: 'صيانة فلتر الوقود',
      sections: [
        {
          heading: 'كيف يتعطل فلتر الوقود',
          paragraphs: [
            'لا يتعطل فلتر الوقود عادة بشكل مفاجئ؛ بل ينسد تدريجيًا مع احتجازه للشوائب، وفي الديزل، للماء والرواسب التي يحملها الوقود الرديء. ومع تراكم المقاومة، ينخفض تدفق الوقود، وتظهر الأعراض عندما يُحرَم المحرك من الوقود: صعوبة في التشغيل، وتردد تحت الحمل، وانخفاض القدرة، وفي الحالات الشديدة توقف المحرك.',
            'الفلتر يؤدي وظيفته حتى وهو يتعطل — فالانسداد هو الشوائب المحتجزة نفسها. الخطأ هو تركه فترة طويلة حتى تُتلف المقاومةُ مضخةَ الوقود، التي هي أغلى بكثير من الفلتر نفسه. هذه هي الحالة الكلاسيكية التي يكون فيها الاستبدال المجدول أرخص من الاستبدال التفاعلي.',
          ],
        },
        {
          heading: 'أعراض الديزل مقابل البنزين',
          paragraphs: [
            'يتعطل نظاما الديزل والبنزين بشكل مختلف. يظهر فلتر الديزل المسدود على محرك السكة المشتركة في صورة صعوبة في التشغيل البارد، وخشونة في الدوران، وفقدان القدرة تحت الحمل، لأن نظام الحقن عالي الضغط يُحرَم من الوقود. ويضيف تلوث الماء تآكلًا للحاقن، وعند ضغوط السكة المشتركة، تكهفًا يُعرِّي الأجزاء الداخلية للحاقن — القاتل الصامت المكلف.',
            'يظهر فلتر البنزين الخطي المسدود عادة في صورة تردد عند التسارع وصعوبة في الحفاظ على السرعة تحت الحمل، لأن الوحدة الخطية الصغيرة تقيّد التدفق إلى المضخة. ويشترك الاثنان في الدرس الأساسي نفسه: بمجرد توقف الفلتر عن تمرير الوقود، يضيف كل كيلومتر تآكلًا لمضخة أو حاقن يكلف أكثر بكثير من القطعة.',
          ],
        },
        {
          heading: 'مسألة فترة الاستبدال',
          paragraphs: [
            'تتباين فترات استبدال فلتر الوقود بشكل كبير حسب المركبة والسوق، من نحو كل 20,000–40,000 كم في كثير من سيارات البنزين إلى جداول أقصر وأكثر تحفظًا على محركات الديزل التي تعمل بوقود رديء. العامل الحقيقي هو جودة الوقود: ففي الأسواق ذات الديزل الملوث أو عالي الكبريت، تقصر الفترة بشدة وغالبًا ما يكون الفلتر أول ما يفحصه الأسطول.',
            'بالنسبة للمُصدِّر، هذه رافعة تسويقية. فالتذكير بالاستبدال المرتبط بجودة وقود السوق يحوّل المرجع (SKU) من شراء لمرة واحدة إلى مادة استهلاكية متكررة، ويضع البائع في موقع شريك الموثوقية بدلًا من مجرد بائع صناديق.',
          ],
        },
        {
          heading: 'بيع الحل، لا القطعة وحدها',
          paragraphs: [
            'قصة بيع فلتر الوقود هي الحماية لا السعر. ففلتر فاصل الماء لأسطول الديزل تأمين رخيص ضد استبدال الحاقن؛ والفلتر الخطي لسيارة البنزين يحمي مضخة الوقود. والتركيز على تكلفة العطل — مضخة، أو طقم حقن — يعيد تصوير الفلتر بوصفه أرخص مكوّن يقف بين المشتري وتلك الفاتورة.',
            'أكِّد نوع الوصلة ونوع الوقود قبل التسعير: فالسنون ووصلات التوصيل السريع غير قابلة للتبادل، وأنظمة الديزل والبنزين تحتاج منتجًا مختلفًا. المطابقة الصحيحة من أول عرض سعر هي ما يجعل العميل يعود مجددًا.',
          ],
        },
      ],
    },
    'water-separator-diesel-guide': {
      title: 'فواصل الماء وترشيح وقود الديزل: تأمين رخيص لأسواق الوقود الرديء',
      excerpt:
        'الماء في الديزل هو القاتل الصامت للحاقنات. وفلتر فاصل الماء المزوّد بصرف هو أرخص حماية يمكن لمالك الأسطول شراؤها — وهو فلتر الديزل الأعلى هامشًا.',
      topicLabel: 'دليل فلتر الوقود',
      sections: [
        {
          heading: 'لماذا الماء عدو الديزل',
          paragraphs: [
            'يتسرب الماء إلى الديزل عبر التكثيف، وسوء التخزين، والإمداد الملوث — وفي الأسواق الرطبة أو ضعيفة الرقابة، يكون حضورًا دائمًا. عند ضغوط الحقن القصوى لنظام السكة المشتركة الحديث، يؤدّي الماء إلى تآكل الأجزاء الداخلية للحاقن ويمكن أن يسبب تكهفًا يُعرّيها. والنتيجة استبدال حاقن يكلف أكثر بكثير مما سيكلفه أي فلتر على الإطلاق.',
            'لهذا السبب لا يُعد فصل الماء ميزة اختيارية في أسواق الديزل الكثيفة في أفريقيا وأمريكا اللاتينية وأجزاء من آسيا. إنه الفارق بين أسطول يعمل وأسطول ينفق هامشه على الحاقنات.',
          ],
        },
        {
          heading: 'كيف يعمل فاصل الماء',
          paragraphs: [
            'يجمع فلتر فاصل الماء بين الترشيح الدقيق وطبقة نافرة للماء وصمام صرف. يفصل وسيط الترشيح الماءَ ويطرده من الوقود قبل وصوله إلى نظام الحقن، ويتجمع الماء في وعاء أو حجرة تُصرَّف وفق جدول صيانة. يلتقط الفلتر الجسيمات بينما يتولى الفاصل معالجة الماء.',
            'التفصيلة التصميمية المهمة هي توفير الصرف ومادة المانع: فالفاصل الذي يُصرَّف وفق الجدول، مع مانع تسرب يصمد في الحرارة الجافة، يحمي نظام الحقن بموثوقية. أما حلقة O المتدهورة التي تسرّب عند أول تركيب فتبدو عيب تصنيع حتى لو كانت مشكلة تخزين.',
          ],
        },
        {
          heading: 'أين يكتسب هذا المنتج هامشه',
          paragraphs: [
            'يُعد فلتر فاصل الماء هو فلتر الديزل الأعلى هامشًا لسبب بسيط: فهو يُباع على أساس الموثوقية لا السعر. فمالك الأسطول الذي دفع ثمن استبدال حاقن مرة واحدة سيدفع علاوة مقابل الفلتر الذي يمنع الاستبدال التالي. قصة البيع هي التأمين — «احمِ نظام حقن مكلفًا للغاية بثمن فلتر» — وهي تثبّت العميل على زمن التشغيل بدلًا من تكلفة الوحدة.',
            'في الأسواق التي تتذبذب فيها جودة الديزل، يصبح الفاصل المنتج الرائد، وتتبعه بقية خط الديزل. وهذه فرصة تموضع يفوّتها معظم المصدرين عندما يُدرجون فقط الفلتر الدوّار والفلتر الخطي.',
          ],
        },
        {
          heading: 'تموضع الخط',
          paragraphs: [
            'البنية الصحيحة للكتالوج هي خط ديزل يتصدره فاصل الماء، مدعومًا بالفلتر الدوّار لديزل سيارات الركاب والمركبات التجارية الخفيفة، والفلتر الخطي للبنزين. أكِّد السن أو وصلة التوصيل السريع وتصنيف الميكرون ونوع الوقود قبل التسعير، لأن أنظمة الديزل والبنزين تحتاج منتجًا مختلفًا.',
            'للتخزين، احمِ الوعاء وحلقات O من الحرارة الجافة وحافظ على مانعات التوصيل السريع باردة ومحكمة الإغلاق؛ فالمانعات المتدهورة تسرّب عند أول تركيب. انضباطات صغيرة، لكنها تحمي المنتج الذي يحمي نظام الحقن.',
          ],
        },
      ],
    },
    'wiper-blade-choosing-guide': {
      title: 'كيف تختار شفرات المسّاحات: بدون هيكل، وهجين، والطول، ومركّب المطاط',
      excerpt:
        'المسّاحات فئة ذات حجم مبيعات كبير، يحدد فيها مركّب المطاط وطول الشفرة تكرار الطلب. إليك كيفية تخزينها ومطابقتها لسوق التصدير.',
      topicLabel: 'اختيار المسّاحات',
      sections: [
        {
          heading: 'بدون هيكل، وهجين، وتقليدي',
          paragraphs: [
            'تأتي شفرات المسّاحات بثلاث بنيات رئيسية. تستخدم الشفرة بدون هيكل (Beam) نابضًا فولاذيًا منحنيًا لتضغط المطاط بالتساوي على الزجاج، فتلتصق بالزجاج الأمامي المنحني الحديث وتقاوم تراكم الثلج والجليد. أما الشفرة الهجينة فتضيف جناحًا صلبًا فوق الهيكل لتوليد قوة ضغط عند السرعة العالية ومظهر فاخر. وتبقى الشفرة التقليدية، بإطارها المعدني ونقاط ارتكازها، الخيار الكلاسيكي الأقل تكلفة.',
            'خيار البنية يتعلق بالأداء ونقطة السعر، لا بالمظهر فقط. فالشفرة بدون هيكل هي الخيار الافتراضي الحديث لسيارات الركاب؛ والهجينة تقف في المنتصف بين الاثنين؛ ولا تزال الشفرات التقليدية تُباع على أساس السعر في الأسواق التي يقودها التكلفة. والخط الكامل يحمل المستويات الثلاثة.',
          ],
        },
        {
          heading: 'الطول وملاءمة المحول',
          paragraphs: [
            'تُباع المسّاحات بالطول، من نحو 14 إلى 26 بوصة، وتتعلق الملاءمة بالطول ومحول الذراع معًا. فالمحول — خطاف أو دبوس أو حربة أو قفل جانبي — يجب أن يطابق ذراع مسّاحة المركبة، وتستخدم المركبات المختلفة موصلات مختلفة. ويعمل طقم المحولات المتعددة على توسيع الملاءمة لكل مرجع (SKU) ويقلل المرتجعات.',
            'بالنسبة للمُصدِّر، الخطوة العملية هي حمل الأطوال الشائعة للأسطول المستهدف (22 بوصة و24 بوصة و26 بوصة تغطي معظم أساطيل الركاب، مع 14–18 بوصة للشفرات الخلفية) وتأكيد مجموعة المحولات مع كل طول. فثغرات الملاءمة هي أسرع طريقة لخسارة طلب مسّاحات.',
          ],
        },
        {
          heading: 'مركّب المطاط هو من يحدد التقييم',
          paragraphs: [
            'لا تملك المسّاحات كفاءة ترشيح — فالمواصفة الحقيقية هي مركّب المطاط. يمنح المطاط الطبيعي المطلي بالجرافيت مسحًا سلسًا هادئًا؛ أما المطاط الصناعي الرخيص أو غير المعالَج حراريًا فيترك خطوطًا ويصدر صريرًا. والمركّبات المقاومة للأشعة فوق البنفسجية غير قابلة للتفاوض في الأسواق الحارة المشمسة، حيث يفشل المطاط الهش خلال أشهر.',
            'المسّاحة هي قطعة السيارات النادرة التي يلمسها المستخدم النهائي ويسمعها في كل قيادة ماطرة. فالشفرة الصاخبة التي تترك خطوطًا شكوى فورية تضر بالعلامة التجارية، لذا فإن المركّب — لا السعر الملصق — هو ما يحدد عودة المشتري أم لا.',
          ],
        },
        {
          heading: 'إطار عمل للتخزين',
          paragraphs: [
            'يملك كتالوج المسّاحات السليم ثلاثة محاور: البنية (بدون هيكل/هجين/تقليدي)، والطول (المجموعة الشائعة في السوق)، والمركّب (قياسي مقابل مقاوم للأشعة فوق البنفسجية للمناخات الحارة). اربط هذه الثلاثة بالسوق المستهدف لتحصل على خط مقتضب قابل للبيع بدلًا من قائمة قطع مترامية.',
            'المُصدِّر الذي ينافس على مركّب المطاط، ويشحن الشفرات في أكمام صلبة تحمي الانحناءة، يكسب الطلب المتكرر الذي يجعل المسّاحات مربحة. الشفرات الرخيصة شراء لمرة واحدة؛ والشفرات الهادئة المتينة طلب متكرر.',
          ],
        },
      ],
    },
    'wiper-blade-replacement': {
      title: 'استبدال شفرات المسّاحات: العلامات والفترات وأخطاء التخزين التي تُتلف المطاط',
      excerpt:
        'الخطوط والقفز والارتجاج هي العلامات على أن الشفرة انتهت. إليك كيف تقرأها، ومتى تستبدلها، وكيف تخزّن الشفرات لتصل سليمة إلى العميل.',
      topicLabel: 'صيانة المسّاحات',
      sections: [
        {
          heading: 'علامات انتهاء عمر الشفرة',
          paragraphs: [
            'تُعلن المسّاحة البالية عن نفسها: خطوط تلوّث الماء على الزجاج، أو قفز أو ارتجاج عبر الزجاج الأمامي، أو حافة ممزقة أو متصلبة، أو شفرة تترك أقواسًا غير ممسوحة. كل واحدة منها علامة على أن المطاط فقد حدّه أو مرونته، ولا شيء منها يتحسن مع الوقت.',
            'بالنسبة للورشة أو تاجر التجزئة، هذه الأعراض بيع سهل — فالعميل يعاني المشكلة بالفعل. الشفرة رخيصة، والفائدة فورية، والبديل (القيادة تحت المطر بشفرة متدهورة) مشكلة سلامة حقيقية. إنها عملية بيع سريعة وصادقة.',
          ],
        },
        {
          heading: 'فترة الاستبدال موسم، لا مسافة',
          paragraphs: [
            'تبلى المسّاحات بفعل الشمس والطقس، لا بالمسافة، لذا من الأفضل التفكير في فترة الاستبدال كموسم. في المناخات المعتدلة قد تدوم الشفرة 6–12 شهرًا؛ أما في الأسواق الحارة أو المشمسة أو الساحلية، فتقلصها الأشعة فوق البنفسجية والحرارة بشدة، ويمكن أن تتصلب الشفرة وتترك خطوطًا خلال أشهر.',
            'هذه هي فرصة المُصدِّر: تذكير موسمي بالاستبدال، مرتبط بمناخ السوق، يحوّل المسّاحات إلى طلب متكرر قابل للتنبؤ. والمركّب المقاوم للأشعة فوق البنفسجية هو الفارق بين شفرة تدوم الموسم وشفرة تفشل قبل المطر التالي.',
          ],
        },
        {
          heading: 'أخطاء التخزين التي تقتل المطاط',
          paragraphs: [
            'يأخذ المطاط شكلًا دائمًا عند ثنيه أو تخزينه تحت وزن لفترات طويلة، ويشيخ حراريًا داخل الحاويات. فالشفرة المخزنة مثنية أو مرصوصة تحت كراتين ثقيلة ستقفز وتترك خطوطًا من أول مسحة. خزّن الشفرات مسطحة، بعيدًا عن الشمس المباشرة، وتجنّب رصّ الكراتين الثقيلة فوقها.',
            'أثناء الشحن، تنثني الشفرات الطويلة الرفيعة إذا كان الكرتون دون المواصفات المطلوبة. فالأكمام الصلبة والكراتين الممتلئة الموجهة صحيحًا تحمي انحناءة الشفرة؛ أما الشفرة بدون هيكل المثنية فلن تطابق الزجاج الأمامي وهي مرتجع يمكن تفاديه. هذه انضباطات صغيرة تحمي منتجًا تكمن قيمته بالكامل في مسح نظيف خالٍ من الخطوط.',
          ],
        },
        {
          heading: 'مادة استهلاكية بطابع طلب متكرر مدمج',
          paragraphs: [
            'المسّاحات واحدة من أكثر فئات الشراء المتكرر موثوقية في الكتالوج: فهي تبلى بشكل قابل للتنبؤ، ويلاحظ العميل العطل فورًا، والاستبدال رخيص. المُصدِّر الذي يشحن شفرة متينة هادئة مع تذكير موسمي وتغليف سليم يبني دورة طلب متكرر لا ينالها مجرد بائع الصناديق.',
            'موضّع الشفرة على المركّب والمتانة، لا على السعر. فالشفرة الأغلى قليلًا التي تمسح بهدوء لموسم كامل تكسب الطلب المتكرر الذي يجعل الفئة مربحة.',
          ],
        },
      ],
    },
    'transmission-filter-service': {
      title: 'صيانة فلتر ناقل الحركة: لماذا تحمي المصفاة والحشية جودة تبديل السرعات',
      excerpt:
        'مصفاة فلتر ناقل الحركة قطعة متخصصة حرجة الملاءمة، تشكل فيها الحشية نصف المنتج. إليك كيفية بيعها وتوصيفها بشكل صحيح.',
      topicLabel: 'صيانة فلتر ناقل الحركة',
      sections: [
        {
          heading: 'ماذا تفعل المصفاة فعليًا',
          paragraphs: [
            'ترشّح مصفاة فلتر ناقل الحركة سائل ناقل الحركة لحماية الأجزاء الداخلية للجير والحفاظ على جودة تبديل السرعات. إنها مصفاة — تُوصَّف بتصنيف مسام شبكة النايلون وتدفق السائل، لا بنسبة كفاءة — ووظيفتها منع الحطام من الدوران عبر جسم الصمامات وحزم القابض حيث يسبب التآكل وخشونة التبديل.',
            'تُستبدل كجزء من صيانة ناقل الحركة، عادة مع حشية الحوض. ولأن فك حوض ناقل الحركة يتطلب جهدًا كبيرًا، يُباع الفلتر والحشية عادة كطقم صيانة، وتُنفَّذ المهمة مرة واحدة لكل فترة صيانة — وليست مادة استهلاكية متكررة.',
          ],
        },
        {
          heading: 'لماذا تشكل الحشية نصف المنتج',
          paragraphs: [
            'في هذه الفئة تكون الحشية بأهمية المصفاة. فحشية الحوض الفلينية أو المطاطية يجب أن تطابق مادة OE لإعادة إغلاق خالٍ من التسرب: فالمطاط يتحمل الحرارة ويقاوم التصلب، بينما يناسب الفلين التطبيقات الأقل حرارة. الحشية غير المتطابقة تتصلب وتسرّب، ولأن إعادة فك الحوض تتطلب عمالة مكلفة، يكون عطل الحشية مكلفًا حتى عندما تكون المصفاة سليمة.',
            'بيع الفلتر مع حشية الحوض كطقم يرفع قيمة الطلب ويزيل خطر الحشية المفقودة أو غير المتطابقة — وهي الشكوى الأكثر شيوعًا في أعمال ناقل الحركة. تفضّل معظم الورش الطقم لهذا السبب بالذات.',
          ],
        },
        {
          heading: 'خطر الملاءمة الأكثر تكلفة على المشترين',
          paragraphs: [
            'فلاتر ناقل الحركة مخصصة لناقل الحركة، لا عامة للمركبة. يجب أن يطابق الفلتر طراز ناقل الحركة بدقة — Aisin وZF وGM وغيرها — وملاءمة أنبوب السحب، لا المركبة وحدها. فالتسعير بطراز المركبة وحده هو سبب حدوث الملاءمات الخاطئة، والفلتر الذي لا يستقر يعني إعادة عمل مكلفة في مهمة تهيمن عليها العمالة.',
            'هذه هي الفئة التي يتفوق فيها الدقة على الاتساع. فجدول الملاءمة النظيف الخاص بناقل الحركة — أربعون فلترًا مُفهرسًا بدقة، لا مئتان متطابقان بشكل فضفاض — هو ما يكسب الثقة. أكِّد رمز طراز ناقل الحركة أو رقم فلتر OE قبل التسعير، في كل مرة.',
          ],
        },
        {
          heading: 'بيع الطقم، لا القطعة',
          paragraphs: [
            'الطريقة الصحيحة لبيع هذه الفئة هي كطقم صيانة: المصفاة مع الحشية الصحيحة، مطابقين لناقل الحركة، مع التحقق من تصنيف المسام وملاءمة السحب. تلك الحزمة هي ما تحتاجه الورشة فعلًا، وتزيل عطل الحشية المفقودة الذي يولّد المرتجعات.',
            'للتخزين، احفظ الحشيات الفلينية محكمة الإغلاق ومسطحة حتى لا تجف أو تتشوه، وشحن الأطقم في عبوات مسطحة صلبة مع فواصل. فالحشية المتشوهة أو الجافة عطل ملاءمة في مهمة تكون فيها العمالة الجزء المكلف — انضباط تغليف صغير يحمي الصيانة بأكملها.',
          ],
        },
      ],
    },
    'led-headlight-upgrade-guide': {
      title: 'ترقيات المصابيح الأمامية LED: ملاءمة المقبس والتصميم الحراري والامتثال',
      excerpt:
        'المصابيح الأمامية LED فئة يقودها الامتثال، لا السعر. إليك كيفية توصيف ملاءمة المقبس والتصميم الحراري والشهادات لكتالوج تصدير.',
      topicLabel: 'اختيار LED',
      sections: [
        {
          heading: 'ملاءمة المقبس هي الفلتر الأول',
          paragraphs: [
            'لمبات المصابيح الأمامية LED مخصصة للمقبس: فـH4/9003 وH7 وH11 وغيرها غير قابلة للتبادل، والمقبس الخاطئ مرتجع ملاءمة فوري. أكِّد مقبس المركبة قبل التسعير، وعامل المقبس بوصفه المفتاح الأساسي في الكتالوج، لا الاسم التسويقي للمبة.',
            'تُطلق كثير من المركبات الحديثة أيضًا تحذير خطأ اللمبة دون وحدة فك ترميز CANbus، مسببةً وميضًا وخطأ في لوحة العدادات حتى عندما تركَّب اللمبة فعليًا. أكِّد ما إذا كانت المركبة المستهدفة تحتاج وحدة فك ترميز قبل الطلب، ووثّق ذلك في ورقة المواصفات. هذا هو الفارق بين تركيب نظيف ومرتجع.',
          ],
        },
        {
          heading: 'التصميم الحراري يحدد العمر الافتراضي',
          paragraphs: [
            'تموت مصابيح LED بسبب الحرارة، لا العمر. فالتصميم الحراري الفعال — جسم ألومنيوم، ومروحة أو تبريد سلبي، ومشغّل (Driver) عالي الجودة — يحدد العمر الافتراضي أكثر بكثير من الشريحة نفسها. فالوحدة الرخيصة التي تسخن أكثر من اللازم تفشل بسرعة وبشكل مرئي، واللمبة الميتة أو الوامضة هي الشكوى الأكثر إلحاحًا وإضرارًا بالعلامة التجارية في الكتالوج.',
            'المواصفة الصادقة هي اللومنات المسلَّمة لكل واط وCCT (درجة حرارة اللون) معلنة، مدعومة بشكل مثالي بتقرير اختبار كرة التكامل (integrating sphere) — لا ملصق «10,000 لومن». قدّم التصميم الحراري والخَرْج المستدام، لأن المشترين الذين احترقوا مرة سيدفعون مقابل منتج يدوم.',
          ],
        },
        {
          heading: 'الامتثال هو الخندق الحامي',
          paragraphs: [
            'تُنظَّم ترقيات LED بشكل مختلف حسب البلد: فبعض الأسواق تقيّد لمبات LED للاستخدام على الطرق، بينما يفرض البعض الآخر موافقات محددة. وتشكل CE وRoHS خط الأساس للتصدير، مع تأكيد وثائق EMC وموافقات سوق الوجهة قبل الشحن حيثما يُشترط ذلك. فالشهادات الناقصة — لا اللومنات الناقصة — هي ما يعرقل طلب LED في الجمارك.',
            'هذا ما يجعل LED فئة يقودها الامتثال. فالمُصدِّر الذي يستثمر في الشهادات قبل توسيع الحجم يبني خندقًا لا يستطيع منافس رخيص غير معتمد عبوره، ومن يستطيع إرشاد المشتري بين المنتج القانوني على الطرق والمنتج للطرق الوعرة يكسب ثقةً لن تنالها أبدًا دعوى اللومنات.',
          ],
        },
        {
          heading: 'ماذا تضع في الكتالوج',
          paragraphs: [
            'يتصدر كتالوج LED النظيف المقبسَ والتصميم الحراري والشهادات: نوع المقبس، وطريقة التبريد، واللومن المسلَّم وCCT، ووثائق CE/RoHS/EMC. تلك هي المعلومات التي يحتاجها المشتري الجاد فعلًا لتقديم طلب متوافق.',
            'خزّن اللمبات محكمة الإغلاق وجافة — فالمشغّلات ونقاط اللحام حساسة للرطوبة والتفريغ الكهروستاتيكي (ESD)، وتآكل المشغّل الناجم عن الرطوبة سبب صامت للعطل المبكر يبدو كدفعة معيبة. فالصناديق الفردية تحمي التجميعة والمشغّل. أتقن التغليف والأوراق، وسيعود المشتري الذي يقوده الامتثال.',
          ],
        },
      ],
    },
  },
  es: {
    'fuel-filter-failure-symptoms': {
      title: 'Síntomas de falla del filtro de combustible e intervalos de reemplazo: diésel vs gasolina',
      excerpt:
        'Un filtro de combustible que falla se manifiesta con arranque deficiente, baja potencia y titubeo — pero el diésel y la gasolina fallan de forma distinta. Así se leen las señales.',
      topicLabel: 'Mantenimiento del filtro de combustible',
      sections: [
        {
          heading: 'Cómo falla un filtro de combustible',
          paragraphs: [
            'Un filtro de combustible no suele fallar de repente; se obstruye gradualmente a medida que retiene los contaminantes y, en el diésel, el agua y los sedimentos que arrastra un combustible de mala calidad. A medida que aumenta la restricción, el suministro de combustible cae y los síntomas aparecen cuando el motor se queda sin flujo: arranque difícil, titubeo bajo carga, pérdida de potencia y, en casos graves, calado.',
            'El filtro cumple su función incluso cuando falla: la obstrucción es la contaminación capturada. El error es dejarlo tanto tiempo que la restricción dañe la bomba de combustible, mucho más costosa que el propio filtro. Es el caso clásico en que el reemplazo programado resulta más barato que el reemplazo reactivo.',
          ],
        },
        {
          heading: 'Síntomas de diésel vs gasolina',
          paragraphs: [
            'Los sistemas diésel y de gasolina fallan de forma distinta. Un filtro diésel obstruido en un motor common-rail se manifiesta con arranque en frío deficiente, funcionamiento irregular y pérdida de potencia bajo carga, porque el sistema de inyección de alta presión se queda sin combustible. La contaminación por agua añade corrosión de inyectores y, a presiones common-rail, cavitación que erosiona el interior de los inyectores — el asesino silencioso y costoso.',
            'Un filtro de gasolina en línea obstruido suele manifestarse como titubeo al acelerar y dificultad para mantener la velocidad bajo carga, ya que la pequeña unidad en línea restringe el flujo hacia la bomba. Ambos comparten la misma lección de fondo: una vez que el filtro deja de fluir, cada kilómetro añade desgaste a una bomba o inyector que cuesta mucho más que la pieza.',
          ],
        },
        {
          heading: 'La cuestión del intervalo',
          paragraphs: [
            'Los intervalos del filtro de combustible varían mucho según el vehículo y el mercado, desde aproximadamente cada 20,000–40,000 km en muchos autos de gasolina hasta plazos más cortos y conservadores en diésel que operan con combustible de mala calidad. El factor real es la calidad del combustible: en mercados con diésel contaminado o alto en azufre, el intervalo se acorta drásticamente y el filtro suele ser lo primero que revisa una flota.',
            'Para un exportador, esto es una palanca de venta. Un recordatorio de reemplazo ligado a la calidad del combustible del mercado convierte una referencia (SKU) de una sola compra en un consumible recurrente, y posiciona al vendedor como un socio de confiabilidad en lugar de un simple vendedor de cajas.',
          ],
        },
        {
          heading: 'Vender la solución, no solo la pieza',
          paragraphs: [
            'La historia de venta de un filtro de combustible es protección, no precio. Un filtro separador de agua para una flota diésel es un seguro barato contra el reemplazo de inyectores; un filtro en línea para un auto de gasolina protege la bomba de combustible. Anclar en el costo de la falla — una bomba, un juego de inyectores — replantea el filtro como el componente más barato que separa al comprador de esa factura.',
            'Confirma el tipo de conexión y el tipo de combustible antes de cotizar: las roscas y las conexiones de acople rápido no son intercambiables, y los sistemas diésel y de gasolina requieren productos distintos. Una coincidencia correcta en la primera cotización es lo que hace que el cliente regrese.',
          ],
        },
      ],
    },
    'water-separator-diesel-guide': {
      title: 'Separadores de agua y filtración de combustible diésel: seguro barato para mercados de combustible de mala calidad',
      excerpt:
        'El agua en el diésel es el asesino silencioso de los inyectores. Un filtro separador de agua con purga es la protección más barata que puede comprar un dueño de flota — y el filtro diésel de mayor margen.',
      topicLabel: 'Guía del filtro de combustible',
      sections: [
        {
          heading: 'Por qué el agua es enemiga del diésel',
          paragraphs: [
            'El agua se cuela en el diésel por condensación, mal almacenamiento y suministro contaminado — y en mercados húmedos o con poca regulación, es una constante. A las presiones extremas de inyección de un sistema common-rail moderno, el agua corroe el interior de los inyectores y puede generar cavitación que los erosiona. El resultado es un reemplazo de inyectores que cuesta mucho más de lo que jamás costará un filtro.',
            'Por eso la separación de agua no es una característica opcional en los mercados de fuerte presencia diésel de África, América Latina y partes de Asia. Es la diferencia entre una flota que opera y una flota que gasta su margen en inyectores.',
          ],
        },
        {
          heading: 'Cómo funciona un separador',
          paragraphs: [
            'Un filtro separador de agua combina una filtración fina con una capa repelente al agua y una purga. El medio filtrante separa y repele el agua del combustible antes de que llegue al sistema de inyección, y el agua se acumula en un tazón o cámara que se purga según un programa de servicio. El filtro atrapa las partículas mientras el separador se ocupa del agua.',
            'El detalle de diseño que importa es la provisión de purga y el sello: un separador que se purga según el programa, con un sello que aguanta el calor seco, protege el sistema de inyección de forma fiable. Una junta tórica degradada que gotea en el primer montaje parece un defecto de fabricación aunque sea un problema de almacenamiento.',
          ],
        },
        {
          heading: 'Dónde gana su margen este producto',
          paragraphs: [
            'El filtro separador de agua es el filtro diésel de mayor margen por una razón simple: se vende por confiabilidad, no por precio. Un dueño de flota que ya pagó una vez un reemplazo de inyectores pagará una prima por el filtro que evita el siguiente. La historia de venta es el seguro — "protege un sistema de inyección muy costoso por el precio de un filtro" — y ancla al cliente en el tiempo operativo en lugar del costo unitario.',
            'En mercados donde la calidad del diésel es irregular, el separador se convierte en el producto principal y el resto de la línea diésel va detrás. Es una oportunidad de posicionamiento que la mayoría de los exportadores pierde al listar solo un roscado y uno en línea.',
          ],
        },
        {
          heading: 'Posicionar la línea',
          paragraphs: [
            'La estructura correcta del catálogo es una línea diésel encabezada por el separador de agua, respaldada por el roscado para diésel de pasajeros y comerciales ligeros, y el en línea para gasolina. Confirma la rosca o la conexión de acople rápido, la clasificación en micras y el tipo de combustible antes de cotizar, porque los sistemas diésel y de gasolina requieren productos distintos.',
            'Para el almacenamiento, protege el tazón y las juntas tóricas del calor seco y mantén los sellos de acople rápido frescos y sellados; los sellos degradados gotean en el primer montaje. Disciplinas pequeñas, pero protegen el producto que protege el sistema de inyección.',
          ],
        },
      ],
    },
    'wiper-blade-choosing-guide': {
      title: 'Cómo elegir escobillas limpiaparabrisas: aerodinámica, híbrida, longitud y compuesto de caucho',
      excerpt:
        'Las escobillas son una categoría de volumen donde el compuesto de caucho y la longitud de la escobilla deciden la recompra. Así se surte y se ajusta para un mercado de exportación.',
      topicLabel: 'Selección de escobillas',
      sections: [
        {
          heading: 'Aerodinámica, híbrida y convencional',
          paragraphs: [
            'Las escobillas limpiaparabrisas vienen en tres construcciones principales. La escobilla aerodinámica (beam, sin armazón) usa un resorte de acero curvo para presionar el caucho uniformemente contra el vidrio, abrazando los parabrisas curvos modernos y resistiendo la acumulación de nieve y hielo. La escobilla híbrida añade un deflector rígido sobre el resorte para mayor apoyo a alta velocidad y un aspecto premium. La escobilla convencional, con su armazón metálico y puntos de pivote, sigue siendo el clásico de bajo costo.',
            'La elección de construcción tiene que ver con el rendimiento y el punto de precio, no solo con la apariencia. Las escobillas aerodinámicas son la opción moderna por defecto para autos de pasajeros; las híbridas se sitúan entre ambas; las convencionales aún se venden por precio en mercados dominados por el costo. Una línea completa cubre los tres niveles.',
          ],
        },
        {
          heading: 'Longitud y compatibilidad del adaptador',
          paragraphs: [
            'Las escobillas se venden por longitud, de aproximadamente 14 a 26 pulgadas, y la compatibilidad depende tanto de la longitud como del adaptador del brazo. El adaptador — gancho, pasador, bayoneta o cierre lateral — debe coincidir con el brazo del limpiaparabrisas del vehículo, y distintos vehículos usan conectores distintos. Un kit multiadaptador amplía la compatibilidad por referencia (SKU) y reduce las devoluciones.',
            'Para un exportador, el paso práctico es manejar las longitudes comunes del parque objetivo (22″, 24″ y 26″ cubren la mayoría de las flotas de pasajeros, con 14–18″ para escobillas traseras) y confirmar el juego de adaptadores con cada longitud. Los huecos de compatibilidad son la forma más rápida de perder un pedido de escobillas.',
          ],
        },
        {
          heading: 'El compuesto de caucho decide la reseña',
          paragraphs: [
            'Las escobillas no tienen eficiencia de filtración: la especificación real es el compuesto de caucho. El caucho natural con revestimiento de grafito da un barrido suave y silencioso; el caucho sintético barato o mal vulcanizado deja rayas y chirría. Los compuestos resistentes a los rayos UV son innegociables en mercados cálidos y soleados, donde el caucho quebradizo falla en meses.',
            'La escobilla es la rara pieza automotriz que el usuario final toca y oye en cada conducción con lluvia. Una escobilla ruidosa que deja rayas es una queja inmediata que daña la marca, así que el compuesto — no el precio de etiqueta — es lo que determina si el comprador regresa.',
          ],
        },
        {
          heading: 'Un marco para el surtido',
          paragraphs: [
            'Un catálogo de escobillas sólido tiene tres ejes: construcción (aerodinámica/híbrida/convencional), longitud (el conjunto común del mercado) y compuesto (estándar vs resistente a UV para climas cálidos). Cruza esos tres contra el mercado objetivo y obtienes una línea concisa y vendible en lugar de una lista interminable de piezas.',
            'El exportador que compite por el compuesto de caucho, y que envía las escobillas en fundas rígidas que protegen la curvatura, gana la recompra que hace rentables las escobillas. Las escobillas baratas son una compra única; las silenciosas y duraderas son una recompra.',
          ],
        },
      ],
    },
    'wiper-blade-replacement': {
      title: 'Reemplazo de escobillas limpiaparabrisas: señales, intervalos y los errores de almacenamiento que arruinan el caucho',
      excerpt:
        'Rayas, saltos y vibración son las señales de que una escobilla está agotada. Así se leen, cuándo reemplazarla y cómo almacenar las escobillas para que lleguen en buen estado al cliente.',
      topicLabel: 'Mantenimiento de escobillas',
      sections: [
        {
          heading: 'Las señales de que una escobilla está agotada',
          paragraphs: [
            'Una escobilla desgastada se anuncia sola: rayas que embarran el agua sobre el vidrio, saltos o vibración a través del parabrisas, un borde desgarrado o endurecido, o una escobilla que deja arcos sin barrer. Cada una es señal de que el caucho perdió su filo o su forma, y ninguna mejora con el tiempo.',
            'Para un taller o minorista, estos síntomas son una venta fácil: el cliente ya está experimentando el problema. La escobilla es barata, el beneficio es inmediato y la alternativa (conducir bajo la lluvia con una escobilla degradada) es un problema real de seguridad. Es una conversión rápida y honesta.',
          ],
        },
        {
          heading: 'El intervalo de reemplazo es una temporada, no un kilometraje',
          paragraphs: [
            'Las escobillas se desgastan por el sol y el clima, no por el kilometraje, así que el intervalo de reemplazo se piensa mejor por temporada. En climas templados una escobilla puede durar 6–12 meses; en mercados cálidos, soleados o costeros, los rayos UV y el calor lo acortan drásticamente, y una escobilla puede endurecerse y dejar rayas en meses.',
            'Esta es la oportunidad del exportador: un recordatorio de reemplazo estacional, ligado al clima del mercado, convierte las escobillas en una recompra predecible. Un compuesto resistente a UV es la diferencia entre una escobilla que dura la temporada y una que falla antes de la próxima lluvia.',
          ],
        },
        {
          heading: 'Los errores de almacenamiento que matan el caucho',
          paragraphs: [
            'El caucho toma una deformación permanente cuando se dobla o se almacena bajo peso durante mucho tiempo, y envejece por calor dentro de los contenedores. Una escobilla almacenada doblada o apilada bajo cajas pesadas saltará y dejará rayas desde el primer barrido. Almacena las escobillas planas, lejos del sol directo, y evita apilar cajas pesadas encima.',
            'En tránsito, las escobillas largas y delgadas se doblan si la caja está mal especificada. Las fundas rígidas y las cajas llenas y correctamente orientadas protegen la curvatura; una escobilla aerodinámica doblada no se ajustará al parabrisas y es una devolución evitable. Son disciplinas pequeñas que protegen un producto cuyo valor reside por completo en un barrido limpio y sin rayas.',
          ],
        },
        {
          heading: 'Un consumible con recompra incorporada',
          paragraphs: [
            'Las escobillas son una de las categorías de recompra más fiables del catálogo: se desgastan de forma predecible, el cliente nota la falla de inmediato y el reemplazo es barato. El exportador que envía una escobilla duradera y silenciosa con un recordatorio estacional y un empaque adecuado construye un ciclo de recompra que un simple vendedor de cajas nunca consigue.',
            'Posiciona la escobilla por compuesto y durabilidad, no por precio. Una escobilla un poco más cara que barre en silencio durante toda una temporada gana la recompra que hace rentable la categoría.',
          ],
        },
      ],
    },
    'transmission-filter-service': {
      title: 'Servicio del filtro de transmisión: por qué la malla y la junta protegen la calidad del cambio',
      excerpt:
        'La malla de filtro de transmisión es una pieza de nicho y de compatibilidad crítica donde la junta es la mitad del producto. Así se vende y especifica correctamente.',
      topicLabel: 'Mantenimiento del filtro de transmisión',
      sections: [
        {
          heading: 'Qué hace realmente la malla',
          paragraphs: [
            'La malla de filtro de transmisión filtra el fluido de transmisión para proteger el interior de la caja y mantener la calidad del cambio. Es una malla — especificada por el calibre de poro de la malla de nailon y el flujo del fluido, no por un porcentaje de eficiencia — y su trabajo es impedir que los residuos circulen por el cuerpo de válvulas y los paquetes de embrague, donde causan desgaste y cambios bruscos.',
            'Se reemplaza como parte de un servicio de transmisión, normalmente junto con la junta del cárter. Como bajar el cárter de la transmisión exige mucha mano de obra, el filtro y la junta suelen venderse como kit de servicio, y el trabajo se hace una vez por intervalo — no es un consumible frecuente.',
          ],
        },
        {
          heading: 'Por qué la junta es la mitad del producto',
          paragraphs: [
            'En esta categoría la junta es tan importante como la malla. Una junta de cárter de corcho o caucho debe coincidir con el material OE para un sellado sin fugas: el caucho soporta el calor y resiste el endurecimiento, mientras que el corcho se adapta a aplicaciones de menor temperatura. Una junta mal emparejada se endurece y gotea, y como la mano de obra para volver a bajar el cárter es cara, la falla de la junta resulta costosa incluso cuando la malla está bien.',
            'Vender el filtro junto con la junta del cárter como kit eleva el valor del pedido y elimina el riesgo de una junta faltante o mal emparejada — la queja más común en los trabajos de transmisión. La mayoría de los talleres prefieren el kit precisamente por esa razón.',
          ],
        },
        {
          heading: 'El riesgo de compatibilidad que más cuesta a los compradores',
          paragraphs: [
            'Los filtros de transmisión son específicos de la transmisión, no genéricos del vehículo. Un filtro debe coincidir con el modelo exacto de transmisión — Aisin, ZF, GM y otros — y con el ajuste de su tubo de succión, no solo con el vehículo. Cotizar solo por el modelo del vehículo es como se producen los errores de compatibilidad, y un filtro que no asienta significa un retrabajo costoso en un trabajo donde domina la mano de obra.',
            'Esta es la categoría donde la precisión supera a la amplitud. Una tabla de compatibilidad limpia y específica de transmisión — cuarenta filtros catalogados con precisión, no doscientos emparejados a la ligera — es lo que gana confianza. Confirma el código del modelo de transmisión o el número OE del filtro antes de cotizar, siempre.',
          ],
        },
        {
          heading: 'Vender el kit, no la pieza',
          paragraphs: [
            'La forma correcta de vender esta categoría es como kit de servicio: la malla más la junta correcta, emparejadas con la transmisión, con el calibre de poro y el ajuste de succión verificados. Ese paquete es lo que un taller realmente necesita, y elimina la falla por junta faltante que genera devoluciones.',
            'Para el almacenamiento, mantén las juntas de corcho selladas y planas para que no se sequen ni se deformen, y envía los kits en paquetes planos rígidos con separadores. Una junta deformada o seca es una falla de compatibilidad en un trabajo donde la mano de obra es lo caro: una pequeña disciplina de empaque protege todo el servicio.',
          ],
        },
      ],
    },
    'led-headlight-upgrade-guide': {
      title: 'Mejoras de faros LED: compatibilidad del casquillo, diseño térmico y cumplimiento normativo',
      excerpt:
        'Los faros LED son una categoría impulsada por el cumplimiento, no por el precio. Así se especifican la compatibilidad del casquillo, el diseño térmico y la certificación para un catálogo de exportación.',
      topicLabel: 'Selección LED',
      sections: [
        {
          heading: 'La compatibilidad del casquillo es el primer filtro',
          paragraphs: [
            'Las bombillas de faro LED son específicas del casquillo: H4/9003, H7, H11 y otros no son intercambiables, y un casquillo equivocado es una devolución inmediata por compatibilidad. Confirma el casquillo del vehículo antes de cotizar, y trata el casquillo como la clave principal del catálogo, no el nombre comercial de la bombilla.',
            'Muchos vehículos modernos también disparan una advertencia de error de bombilla sin un decodificador CANbus, causando parpadeo y un error en el tablero incluso cuando la bombilla encaja físicamente. Confirma si el vehículo objetivo necesita un decodificador antes del pedido, y documéntalo en la ficha técnica. Esa es la diferencia entre una instalación limpia y una devolución.',
          ],
        },
        {
          heading: 'El diseño térmico decide la vida útil',
          paragraphs: [
            'Los LED mueren por calor, no por edad. Un diseño térmico eficaz — cuerpo de aluminio, un ventilador o refrigeración pasiva y un driver de calidad — determina la vida útil mucho más que el propio chip. Una unidad barata que se sobrecalienta falla rápido y de forma visible, y una bombilla muerta o parpadeante es la queja más inmediata y dañina para la marca en el catálogo.',
            'La especificación honesta son los lúmenes entregados por vatio y un CCT (temperatura de color) declarado, idealmente respaldado por un informe de prueba de esfera integradora — no una etiqueta de "10,000 lúmenes". Lidera con el diseño térmico y la salida sostenida, porque los compradores que ya se quemaron una vez pagarán por un producto que dure.',
          ],
        },
        {
          heading: 'El cumplimiento es el foso',
          paragraphs: [
            'Las adaptaciones LED se regulan de forma distinta según el país: algunos mercados restringen las bombillas LED para uso en carretera, mientras que otros exigen aprobaciones específicas. CE y RoHS son la base para la exportación, con la documentación EMC y las aprobaciones del mercado de destino confirmadas antes del envío cuando se requieran. Las certificaciones faltantes — no los lúmenes faltantes — son lo que bloquea un pedido LED en aduana.',
            'Esto es lo que hace de LED una categoría impulsada por el cumplimiento. El exportador que invierte en certificación antes de escalar el volumen construye un foso que un competidor barato y no certificado no puede cruzar, y quien puede asesorar al comprador entre producto legal para carretera y producto todoterreno gana una confianza que una afirmación de lúmenes nunca logrará.',
          ],
        },
        {
          heading: 'Qué incluir en el catálogo',
          paragraphs: [
            'Un catálogo LED limpio encabeza con el casquillo, el diseño térmico y la certificación: el tipo de casquillo, el método de refrigeración, los lúmenes entregados y el CCT, y la documentación CE/RoHS/EMC. Esa es la información que un comprador serio realmente necesita para hacer un pedido conforme.',
            'Almacena las bombillas selladas y secas: los drivers y las uniones de soldadura son sensibles a la humedad y a las ESD, y la corrosión del driver inducida por la humedad es una causa silenciosa de falla temprana que parece un lote defectuoso. Las cajas individuales protegen el conjunto y el driver. Haz bien el empaque y el papeleo, y el comprador guiado por el cumplimiento volverá.',
          ],
        },
      ],
    },
  },
};
