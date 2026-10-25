// Localized per-category editorial content (intro, selection, FAQs, opinion)
// — Arabic (ar) & Spanish (es). Glossary & terminology follow src/i18n/ui.ts.
// Untranslated by design: model codes, OE numbers, cross-reference part numbers,
// certifications (ISO 9001 / IATF 16949 / CE / RoHS), thread specs, gasket codes,
// test standards, numbers & units.

import type { LocalizedCategoryContent } from './types';

export const categoryI18n: {
  ar: Record<string, LocalizedCategoryContent>;
  es: Record<string, LocalizedCategoryContent>;
} = {
  ar: {
    af: {
      intro:
        'فلتر الهواء هو خط الدفاع الأول للمحرك: فهو يمنع الغبار والرمال والجسيمات الكاشطة من الوصول إلى غرفة الاحتراق. فلتر الهواء الجيد غير ملحوظ في القيادة العادية ولا يُظهر قيمته إلا في الظروف القاسية — كثافة الغبار، الطرق الصحراوية، مواقع الإنشاء. بالنسبة للمشتري المصدِّر، نادرًا ما يتعلق القرار بالفلتر وحده؛ بل يتعلق بمطابقة درجة وسيط الترشيح وكثافة الطيّات مع طرق السوق المستهدف وجودة هوائه.',
      selection: [
        { title: 'طابق وسيط الترشيح مع حمل الغبار', text: 'الأسواق الجافة المغبرة (الشرق الأوسط، شمال أفريقيا) تبرر وسيط ألياف نانوية أو وسيطًا عالي التحمل للغبار؛ أما الأسواق المعتدلة فيخدمها السليلوز القياسي جيدًا.' },
        { title: 'افحص مانع التسرب', text: 'يجب أن ترتدّ حشية رغوة PU وتستقر بإحكام في الهيكل، وإلا يتجاوز الهواء غير المرشَّح عنصر الترشيح.' },
        { title: 'لوحي أم أسطواني', text: 'سيارات الركاب لوحية في الغالب؛ أما الشاحنات الخفيفة والحافلات والآلات فتستخدم غالبًا عناصر أسطوانية أو عناصر للخدمة الشاقة مع طبقة أمان.' },
        { title: 'عدد الطيّات مهم', text: 'كثافة الطيّات الأعلى تعني مساحة وسيط أكبر وعمر خدمة أطول لحجم الصندوق نفسه.' },
      ],
      faqs: [
        { q: 'ما هو الحد الأدنى للطلب لديكم لفلاتر الهواء؟', a: 'تبدأ فلاتر الهواء اللوحية القياسية من 500 وحدة لكل موديل؛ أما العناصر الأسطوانية وعناصر الخدمة الشاقة فتبدأ من 200–300 وحدة. تُسعَّر القوالب المخصصة لأنماط OE الجديدة بشكل منفصل.' },
        { q: 'هل يمكنكم الإنتاج وفق رقم OE الخاص بي؟', a: 'نعم. أرسل لنا رقم OE وعيّنة أو رسمًا؛ نطابق الأبعاد ووسيط الترشيح ومانع التسرب، ونوفر عيّنة ما قبل الإنتاج للموافقة.' },
        { q: 'كيف تمنعون تجاوز الهواء حول وسيط الترشيح؟', a: 'نستخدم حشيات رغوة PU أو حشيات مطاطية مختبرة من حيث الانضغاط الدائم، بالإضافة إلى فحوصات إحكام تامة بنسبة 100%، بحيث يتم التحقق من مانع التسرب في كل وحدة.' },
      ],
      opinion: {
        title: 'السوق الصحراوي هو سوق ألياف نانوية',
        body: 'بعد مقارنة أحمال الغبار عبر المناطق، رأيي الراسخ هو هذا: إذا كنت تبيع إلى الشرق الأوسط أو شمال أفريقيا، فتجاوز أرخص موديل سليلوز. فالغبار الصحراوي الناعم هو بالضبط ما تلتقطه طبقة الألياف النانوية بشكل أفضل، والمشترون هناك يفهمون مسبقًا أن فلتر الهواء المسدود عالي الغبار يقصّر عمر المحرك. إن تقديم فلتر هواء بألياف نانوية كخط «درجة صحراوية» هو أمر سليم تقنيًا وأكثر حدة تجاريًا من المنافسة على السعر وحده.',
      },
    },
    cf: {
      intro:
        'فلتر المقصورة — ويُسمى عادةً فلتر حبوب اللقاح — ينظّف الهواء الداخل إلى مقصورة الركاب من الخارج. وظيفته الراحة والصحة، لا حماية المحرك، ولهذا ينقسم المشترون إلى مستويين: فلتر جزيئات أساسي للأسواق الحساسة للسعر، وفلتر كربون نشط أو HEPA للأسواق التي تكون فيها جودة الهواء نقطة بيع.',
      selection: [
        { title: 'جزيئات أم كربون أم HEPA', text: 'فلاتر الجزيئات تمنع الغبار وحبوب اللقاح؛ والكربون النشط يمتص أيضًا الروائح وبعض الغازات؛ ووسيط فئة HEPA يزيل الجسيمات الدقيقة للمشترين المميزين أو المهتمين بالحساسية.' },
        { title: 'اتساق الأبعاد غير قابل للتفاوض', text: 'فلاتر المقصورة ألواح صلبة يجب أن تنزلق بدقة داخل الهيكل — انحراف 2–3 مم يعني شكوى من العميل، لذا تحقق من الطول×العرض×الارتفاع مقابل هيكل OE.' },
        { title: 'صلابة الإطار', text: 'الإطار البلاستيكي الصلب يمنع وسيط الترشيح من الانهيار تحت ضغط المنفاخ طوال عمره الافتراضي.' },
        { title: 'قسّم خط الإنتاج حسب السوق', text: 'قدّم موديل جزيئات للمدخل، وموديل كربون للوسط، وموديل HEPA للقمة حتى يتمكن الموزعون من بناء سلّم تسعيري.' },
      ],
      faqs: [
        { q: 'ما الفرق بين فلاتر المقصورة الكربونية وفلاتر HEPA؟', a: 'الكربون النشط يمتص الروائح والغازات؛ أما وسيط HEPA فيزيل نسبة أعلى بكثير من الجسيمات الدقيقة. وكثيرًا ما يُجمع الاثنان في عنصر واحد مميز.' },
        { q: 'ما هو الحد الأدنى النموذجي للطلب لديكم لفلاتر المقصورة؟', a: 'حوالي 1,000 وحدة لكل موديل، بواقع 25 وحدة لكل كرتون. وندعم طلبات الحاويات المختلطة عبر الموديلات.' },
        { q: 'هل توفرون تغليفًا بعلامة خاصة؟', a: 'نعم، ندعم علامة العميل التجارية على الصناديق الملونة الداخلية والكراتين الخارجية، مع تغليف محايد كخيار افتراضي.' },
      ],
      opinion: {
        title: 'فلاتر المقصورة أسهل عملية بيع إضافية — إذا شرحتها',
        body: 'فلاتر المقصورة هي الفئة التي يستطيع فيها المستورد نقل المشتري بسهولة من سلعة بـ 0.50 دولار إلى سلعة بـ 1.50 دولار، لأن الترقية فائدة مرئية قابلة للبيع («هواء مقصورة أنظف»). الخطأ الذي يرتكبه معظم المصدِّرين هو إدراج موديل جزيئات فقط. توصيتي: احمل دائمًا خط كربون وخط HEPA، لأن مخاوف جودة الهواء الحضرية تنتشر إلى كل سوق نشحن إليه — وهذه فرصة هامش ربح، لا تكلفة.',
      },
    },
    of: {
      intro:
        'يزيل فلتر الزيت الغبار وبُرادة المعادن والكربون والسخام من زيت المحرك ويوصل زيتًا نظيفًا إلى العمود المرفقي والبيلات والأعمدة والكامات والشاحن التوربيني وحلقات المكبس. وهو الفلتر الأعلى تبعات في الكتالوج: ففلتر الزيت الفاشل يمكن أن يدمّر المحرك. لهذا السبب فإن فروق «الجيد مقابل الرخيص» — سحب العلبة، معايرة صمام التجاوز، ارتداد مانع التسرب — تهم هنا أكثر من أي مكان آخر.',
      selection: [
        { title: 'افحص سحب العلبة', text: 'الهيكل الفولاذي المسحوب من قطعة واحدة أقوى وأكثر مقاومة للتسرب من الهيكل الملحوم بالدرز أو الرقيق الجدران؛ وهو مؤشر موثوق على الجودة.' },
        { title: 'تأكد من معايرة صمام التجاوز', text: 'يجب أن يفتح صمام التجاوز عند الضغط المحدد حتى يستمر تدفق الزيت إذا انسدّ الوسيط — ضغط الفتح الخاطئ يسبب تجويع المحرك أو تجاوزه.' },
        { title: 'تحقق من صمام منع التصريف', text: 'صمام منع التصريف يُبقي الزيت في الفلتر لتزييت بدء التشغيل البارد؛ وهو ضروري لتطبيقات التركيب الرأسي.' },
        { title: 'دوّار أم خرطوشة', text: 'الدوّار (Spin-On) علبة كاملة؛ أما عناصر الخرطوشة (مركبات الاتحاد الأوروبي/اليابان) فتستبدل الوسيط فقط. طابق تصميم OE لأسطول السوق المستهدف.' },
      ],
      faqs: [
        { q: 'ماذا يحدث إذا فتح صمام تجاوز فلتر الزيت؟', a: 'عندما ينسدّ الوسيط أو يكون الزيت باردًا وسميكًا، يفتح صمام التجاوز للحفاظ على ضغط الزيت، ما يحمي المحرك من تجويع الزيت على حساب الترشيح المؤقت.' },
        { q: 'ما هو الحد الأدنى للطلب لديكم لفلاتر الزيت؟', a: 'تبدأ فلاتر سيارات الركاب الدوّارة وفلاتر الخرطوشة من 1,000 وحدة لكل موديل؛ أما فلاتر الخدمة الشاقة فمن 500 وحدة.' },
        { q: 'كيف تختبرون فلاتر الزيت؟', a: 'اختبار إحكام بنسبة 100%، واختبار ضغط الانفجار، ومعايرة ضغط فتح التجاوز، مع خيار تقارير اختبار ISO 4548 لمشاريع OEM.' },
      ],
      opinion: {
        title: 'روسيا وأسواق بدء التشغيل البارد تريد صمام منع تصريف أفضل',
        body: 'إذا كنت تصدِّر إلى روسيا أو آسيا الوسطى أو شمال أوروبا، فإن صمام منع التصريف وارتداد مانع التسرب ليسا إضافات اختيارية — بل هما المنتج نفسه. فبدايات التشغيل الباردة قاسية، والفلتر الذي يسمح بتصريف الزيت أو مانع التسرب الذي يتصلب عند -40°C يولّد مطالبات ضمان بسرعة. أنا أفضّل تقديم فلتر زيت «للمناخ البارد» بحشية NBR عالية الارتداد وصمام منع تصريف قوي، وأترك هذه القيمة المحددة تكسب الطلب بدلًا من حرب أسعار عامة.',
      },
    },
    ff: {
      intro:
        'يزيل فلتر الوقود الشوائب من الوقود لإبقائه نظيفًا وتشغيل المحرك بموثوقية. تعمل محركات الديزل الحديثة ذات السكة المشتركة عند ضغوط حقن قصوى، لذا انخفض تسامح الترشيح إلى بضعة ميكرونات. تنقسم هذه الفئة إلى ثلاثة منتجات عملية: فلاتر وقود دوّارة (Spin-On)، وفلاتر خطية لأنظمة البنزين، وفلاتر فاصلة للماء لأساطيل الديزل والآلات.',
      selection: [
        { title: 'انتبه لتصنيف الميكرون', text: 'تحتاج أنظمة السكة المشتركة للديزل إلى ترشيح دقيق (10µm أو أدق)؛ أما الفلاتر الخطية للبنزين فأقل تطلبًا. طابق التصنيف مع نظام الحقن.' },
        { title: 'فصل الماء للديزل', text: 'أسواق الديزل ذات المناخ الرطب أو جودة الوقود الرديئة تستفيد من فلاتر فاصلة للماء لحماية الحاقنات من التآكل.' },
        { title: 'تأكد من نوع التوصيلة', text: 'تختلف فلاتر الوقود حسب السن (M16x1.5 وغيرها) والتوصيلات سريعة الوصل — التوصيلة الخاطئة هي فشل تركيب، لا مشكلة جودة.' },
        { title: 'راعِ جودة وقود السوق', text: 'الوقود الإقليمي عالي الكبريت أو الملوث يبرر وسيطًا أخشن لكن بسعة أكبر، أو مرحلة ترشيح مسبق.' },
      ],
      faqs: [
        { q: 'ما هو فلتر الوقود الفاصل للماء؟', a: 'يجمع بين الترشيح وطبقة فصل الماء التي تطرح الماء من الديزل قبل وصوله إلى نظام الحقن، ما يحمي الحاقنات من التآكل والتلف.' },
        { q: 'ما هو الحد الأدنى للطلب لديكم لفلاتر الوقود؟', a: 'تبدأ فلاتر الوقود الدوّارة والخطية من 500–1,000 وحدة لكل موديل؛ أما الفلاتر الفاصلة للماء فمن 500 وحدة.' },
        { q: 'هل تدعمون خطوط الديزل والبنزين؟', a: 'نعم، نحمل فلاتر ديزل دوّارة وفاصلة للماء وبنزين خطية تحت علامة واحدة، ما يبسّط طلب الموزع المجمّع.' },
      ],
      opinion: {
        title: 'بِع فصل الماء كتأمين، لا كفلتر',
        body: 'فلتر الديزل الأعلى هامشًا ليس الأرخص — بل فاصل الماء. في الأسواق التي تكون فيها جودة الديزل غير منتظمة (كثير من أفريقيا وأمريكا اللاتينية وأجزاء من آسيا)، يكون عطل الحاقن مشكلة مكلفة ومتكررة لأصحاب الأساطيل. إن تقديم الفلتر الفاصل للماء كتأمين رخيص ضد استبدال الحاقنات قصة بيع أكثر إقناعًا بكثير من اقتباس سعر وحدة، ويرسّخ العميل على الموثوقية بدلًا من التكلفة.',
      },
    },
    wb: {
      intro:
        'تزيل المسّاحات المطر عن الزجاج الأمامي لإبقاء الرؤية واضحة والقيادة آمنة. وهي سلعة استهلاكية عالية الدوران بثلاثة أنواع إنشائية رئيسية — بدون هيكل (Beam)، وهجينة، وتقليدية — بالإضافة إلى الشفرات الخلفية. بالنسبة للمصدِّرين، المسّاحات فئة حجمية حيث يقود ثبات مركّب المطاط وطول الشفرة الصحيح الطلبات المتكررة.',
      selection: [
        { title: 'اختر نوع البناء', text: 'الشفرات بدون هيكل (Beam) تلاصق الزجاج المنحني وتؤدي جيدًا في الثلج؛ والهجينة تضيف سبويلرًا لقوة ضغط الطريق السريع؛ والتقليدية هي الكلاسيكية منخفضة التكلفة.' },
        { title: 'اضبط أطوال الشفرات', text: 'تُباع المسّاحات بالطول (14–26 بوصة). احمل الأطوال الشائعة للسوق المستهدف لتجنب فجوات التركيب.' },
        { title: 'راقب مركّب المطاط', text: 'المطاط الطبيعي بطبقة الجرافيت يعطي مسحًا سلسًا هادئًا؛ والمركّبات المقاومة للأشعة فوق البنفسجية تدوم أطول في المناخات الحارة.' },
        { title: 'تأكد من المهايئ', text: 'تستخدم المركبات المختلفة موصلات ذراع مختلفة — طقم المهايئات المتعدد يوسّع نطاق التركيب لكل موديل.' },
      ],
      faqs: [
        { q: 'ما أطوال المسّاحات التي ينبغي أن أخزّنها؟', a: 'بالنسبة لمعظم أساطيل الركاب، تغطي 22″ و24″ و26″ الأغلبية؛ وأضف 14–18″ للشفرات الخلفية. نساعدك في بناء مزيج أطوال خاص بسوقك.' },
        { q: 'ما هو الحد الأدنى للطلب لديكم للمسّاحات؟', a: 'حوالي 1,000 وحدة لكل موديل، 50 لكل كرتون، مع دعم طلبات الأطوال المختلطة.' },
        { q: 'هل يمكنكم وضع علامتكم التجارية على المسّاحات؟', a: 'نعم، نوفر أكمامًا وكراتين بعلامة خاصة، وتغليفًا محايدًا افتراضيًا.' },
      ],
      opinion: {
        title: 'المسّاحات منتج إدراك جودة — الرخيص يصدر صريرًا',
        body: 'المسّاحة هي القطعة النادرة في السيارة التي يلمسها المستخدم النهائي ويسمعها في كل قيادة ممطرة. فالشفرة الصاخبة المخطّطة شكوى فورية تضر بالعلامة، والمشترون في المناخات الحارة يتعلمون سريعًا أن المطاط الرخيص الهش بفعل الأشعة فوق البنفسجية يفشل خلال أشهر. نصيحتي: نافس على مركّب المطاط، لا على سعر الملصق. فالشفرة الهادئة المتينة الأغلى قليلًا تكسب الطلب المتكرر الذي يجعل المسّاحات مربحة فعلًا.',
      },
    },
    tf: {
      intro:
        'مصفاة فلتر ناقل الحركة ترشّح سائل ناقل الحركة لحماية الأجزاء الداخلية للجير وجودة تبديل السرعات. وتُستبدل عادةً كجزء من خدمة ناقل الحركة، وغالبًا مع حشية الحوض. وهي فئة متخصصة حرجة التركيب حيث يجب أن يطابق الفلتر موديل ناقل الحركة وطقم الخدمة بدقة.',
      selection: [
        { title: 'طابق ناقل الحركة بدقة', text: 'فلاتر ناقل الحركة خاصة بناقل الحركة، لا عامة بالمركبة — تأكد دائمًا من موديل ناقل الحركة (مثل Aisin أو ZF أو GM) قبل التسعير.' },
        { title: 'قدّم الطقم', text: 'بيع الفلتر مع حشية الحوض (طقم خدمة) يرفع قيمة الطلب ويقلل احتمال شكوى فقدان الحشية.' },
        { title: 'تحقق من مواصفة الشبكة', text: 'شبكة النايلون ذات تصنيف المسام الصحيح وتركيب أنبوب الالتقاط ضرورية لتدفق سائل موثوق.' },
        { title: 'انتبه لمادة الحشية', text: 'حشيات الفلين والمطاط تتصرف بشكل مختلف تحت الحرارة؛ طابق مادة OE لإعادة إحكام خالية من التسرب.' },
      ],
      faqs: [
        { q: 'هل تبيعون الفلتر منفردًا أم كطقم؟', a: 'كلاهما. نوفر المصفاة منفردة وطقم خدمة فلتر + حشية، وهو ما تفضله معظم الورش.' },
        { q: 'كيف أتأكد من فلتر ناقل الحركة الصحيح؟', a: 'أرسل رمز موديل ناقل الحركة أو رقم فلتر OE؛ نتحقق منه مقابل جدول التركيب لدينا قبل التسعير.' },
        { q: 'ما هو الحد الأدنى للطلب لديكم لفلاتر ناقل الحركة؟', a: 'حوالي 500 وحدة لكل موديل، 20 لكل كرتون. وتتوفر كميات تجريبية أقل للموزعين الجدد.' },
      ],
      opinion: {
        title: 'فلاتر ناقل الحركة تكافئ الدقة، لا الاتساع',
        body: 'هذه هي الفئة التي يكون فيها التركيب الخاطئ الأكثر كلفة على المشتري — إنزال حوض ناقل الحركة شاق، والفلتر الذي لا يستقر يعني إعادة عمل مكلفة. المصدِّرون الذين ينشرون جدول تركيب نظيفًا خاصًا بناقل الحركة ويقدّمون طقم الحشية سيكسبون الثقة. أفضّل حمل 40 فلتر ناقل حركة مُفهرسًا بدقة على 200 فلتر مُطابقًا بشكل فضفاض.',
      },
    },
    led: {
      intro:
        'مصابيح LED هي فئة الترقية في الكتالوج: لمبات مصابيح أمامية عالية السطوع بمقابس تركيب مباشر (H4 وH7 وغيرها) وأشرطة إضاءة مساعدة. تحل محل لمبات الهالوجين للحصول على إخراج أفضل وعمر أطول. بالنسبة للمصدِّرين، يكمن المفتاح في ملاءمة المقبس والتصميم الحراري والامتثال للوائح الإضاءة في السوق المستهدف.',
      selection: [
        { title: 'تأكد من نوع المقبس', text: 'مقابس H4/9003 وH7 وH11 وغيرها غير قابلة للتبادل — تأكد من مقبس المركبة قبل التسعير لتجنب مرتجعات التركيب.' },
        { title: 'افحص التصميم الحراري', text: 'تحتاج مصابيح LED إلى تبديد حراري فعال (جسم ألومنيوم، مروحة أو تبريد سلبي) للحفاظ على الإخراج وتجنب الفشل المبكر.' },
        { title: 'انتبه للوائح', text: 'بعض الأسواق تقيّد تعديلات LED للاستخدام على الطريق؛ وضّح ما إذا كان المشتري يحتاج منتجًا للطرق الوعرة أم منتجًا قانونيًا للطرق.' },
        { title: 'الشهادة مهمة', text: 'شهادتا CE وRoHS هما الحد الأدنى للتصدير؛ أما الموافقات الإقليمية الإضافية فتعتمد على الوجهة.' },
      ],
      faqs: [
        { q: 'هل لمبات LED لديكم قانونية على الطرق في كل مكان؟', a: 'تُنظَّم تعديلات LED بشكل مختلف حسب البلد. نوفر منتجات LED للطرق الوعرة ومنتجات ترقية، ويمكننا تقديم المشورة بشأن متطلبات سوق الوجهة.' },
        { q: 'ما المقابس التي تحملونها؟', a: 'مقابس H4/9003 وH7 وغيرها من المقابس الشائعة، بالإضافة إلى أشرطة الإضاءة المساعدة. ونضيف المقابس بناءً على الطلب.' },
        { q: 'ما هو الحد الأدنى للطلب لديكم لمنتجات LED؟', a: 'حوالي 200 وحدة لكل موديل، 20 لكل كرتون، مع توفير وثائق CE وRoHS.' },
      ],
      opinion: {
        title: 'LED فئة تقودها الامتثال، لا السعر',
        body: 'مصابيح LED الأمامية هي الفئة التي يفشل فيها المنتج الرخيص أسرع — الحرارة الزائدة تقتل الشريحة، والمصباح المتقطع أو الميت شكوى مرئية فورية. أفضل أن أتصدر بالتصميم الحراري والشهادة بدلًا من ادعاءات اللومن، لأن المشترين الذين احترقوا مرة سيدفعون مقابل منتج يدوم. الامتثال (CE وRoHS وموافقات الوجهة) هو الخندق الحقيقي هنا، ويستحق الاستثمار قبل توسيع الحجم.',
      },
    },
  },
  es: {
    af: {
      intro:
        'El filtro de aire es la primera línea de defensa del motor: detiene el polvo, la arena y las partículas abrasivas antes de que lleguen a la cámara de combustión. Un buen filtro de aire pasa desapercibido en la conducción normal y solo demuestra su valor en condiciones severas: mucho polvo, caminos desérticos, obras de construcción. Para un comprador exportador, la decisión rara vez depende solo del filtro; depende de hacer coincidir el grado del medio filtrante y la densidad de pliegues con las carreteras y la calidad del aire del mercado objetivo.',
      selection: [
        { title: 'Adapta el medio a la carga de polvo', text: 'Los mercados secos y polvorientos (Oriente Medio, Norte de África) justifican medios de nanofibras o de alto rendimiento ante polvo; los mercados templados se atienden bien con celulosa estándar.' },
        { title: 'Revisa el sello', text: 'Una junta de espuma de PU debe recuperar su forma y asentar a ras en la carcasa; de lo contrario, el aire sin filtrar se desvía del elemento.' },
        { title: 'Panel vs redondo', text: 'Los automóviles son en su mayoría de tipo panel; los camiones ligeros, buses y maquinaria suelen usar elementos redondos o de servicio pesado con una capa de seguridad.' },
        { title: 'El número de pliegues importa', text: 'Una mayor densidad de pliegues significa más área de medio y una vida útil más larga para el mismo tamaño de caja.' },
      ],
      faqs: [
        { q: '¿Cuál es su pedido mínimo para filtros de aire?', a: 'Los filtros de aire de panel estándar parten de 500 unidades por modelo; los elementos redondos y de servicio pesado parten de 200–300 unidades. El herramental personalizado para nuevos patrones OE se cotiza por separado.' },
        { q: '¿Pueden fabricar según mi número OE?', a: 'Sí. Envíenos el número OE y una muestra o dibujo; igualamos dimensiones, medio y sello, y entregamos una muestra de preproducción para su aprobación.' },
        { q: '¿Cómo evitan que el aire se desvíe alrededor del medio?', a: 'Usamos juntas de espuma de PU o de caucho con prueba de deformación por compresión, más controles de hermeticidad al 100 %, de modo que el sello se verifica en cada unidad.' },
      ],
      opinion: {
        title: 'El mercado desértico es un mercado de nanofibras',
        body: 'Tras comparar las cargas de polvo entre regiones, mi visión firme es esta: si vende hacia Oriente Medio o Norte de África, omita la referencia de celulosa más barata. El polvo desértico fino es exactamente lo que una capa de nanofibras capta mejor, y los compradores de allí ya entienden que un filtro de aire obstruido y cargado de polvo acorta la vida del motor. Posicionar un filtro de aire de nanofibras como una línea de «grado desértico» es técnicamente honesto y comercialmente más agudo que competir solo por precio.',
      },
    },
    cf: {
      intro:
        'El filtro de habitáculo — comúnmente llamado filtro de polen — limpia el aire que entra a la cabina del pasajero desde el exterior. Su función es el confort y la salud, no la protección del motor, por eso los compradores se dividen en dos niveles: un filtro de partículas básico para mercados sensibles al precio, y un filtro de carbón activado o HEPA para mercados donde la calidad del aire es un argumento de venta.',
      selection: [
        { title: 'Partículas vs carbón vs HEPA', text: 'Los filtros de partículas detienen polvo y polen; el carbón activado además absorbe olores y algunos gases; el medio clase HEPA elimina partículas finas para compradores premium o sensibles a alergias.' },
        { title: 'La consistencia de medidas es innegociable', text: 'Los filtros de habitáculo son paneles rígidos que deben deslizar con precisión en la carcasa; una desviación de 2–3 mm significa una queja del cliente, así que verifique largo×ancho×alto contra la carcasa OE.' },
        { title: 'Rigidez del marco', text: 'Un marco de plástico rígido evita que el medio colapse bajo la presión del ventilador durante su vida útil.' },
        { title: 'Escalone la línea por mercado', text: 'Ofrezca una referencia de partículas de entrada, una de carbón intermedia y una HEPA superior para que los distribuidores puedan escalar precios.' },
      ],
      faqs: [
        { q: '¿Cuál es la diferencia entre los filtros de habitáculo de carbón y HEPA?', a: 'El carbón activado adsorbe olores y gases; el medio HEPA elimina una proporción mucho mayor de partículas finas. Con frecuencia se combinan en un solo elemento premium.' },
        { q: '¿Cuál es su pedido mínimo típico para filtros de habitáculo?', a: 'Alrededor de 1.000 unidades por modelo, con 25 unidades por caja. Se admiten pedidos de contenedor mixto entre modelos.' },
        { q: '¿Ofrecen empaque de marca propia?', a: 'Sí, admitimos la marca del cliente en cajas de color interiores y cajas exteriores, con empaque neutro por defecto.' },
      ],
      opinion: {
        title: 'Los filtros de habitáculo son la venta adicional más fácil — si los explicas',
        body: 'Los filtros de habitáculo son la categoría donde un importador puede llevar más fácilmente a un comprador de un artículo de $0,50 a uno de $1,50, porque la mejora es un beneficio visible y vendible («aire de cabina más limpio»). El error que comete la mayoría de los exportadores es listar solo una referencia de partículas. Mi recomendación: lleve siempre una línea de carbón y una HEPA, porque las preocupaciones por la calidad del aire urbano se extienden a todos los mercados a los que enviamos, y eso es una oportunidad de margen, no un costo.',
      },
    },
    of: {
      intro:
        'El filtro de aceite elimina el polvo, las partículas metálicas, el carbón y el hollín del aceite del motor y entrega aceite limpio al cigüeñal, las bielas, los árboles de levas, el turbocompresor y los anillos del pistón. Es el filtro de mayores consecuencias del catálogo: un filtro de aceite fallido puede destruir un motor. Por eso las diferencias entre «bueno y barato» — embutición de la lata, calibración de la derivación, recuperación del sello — importan aquí más que en ningún otro lugar.',
      selection: [
        { title: 'Revise la embutición de la lata', text: 'Una carcasa de acero embutida de una pieza es más resistente y a prueba de fugas que una carcasa soldada por costura o de pared delgada; es una señal fiable de calidad.' },
        { title: 'Confirme la calibración de la derivación', text: 'La válvula de derivación debe abrir a la presión especificada para que el flujo de aceite continúe si el medio se obstruye; una presión de apertura incorrecta priva al motor o lo desvía.' },
        { title: 'Verifique el antirretorno', text: 'Una válvula antirretorno mantiene el aceite en el filtro para lubricar en el arranque en frío; es esencial en aplicaciones de montaje vertical.' },
        { title: 'Spin-on vs cartucho', text: 'El spin-on es una lata completa; los elementos de cartucho (vehículos UE/JP) reemplazan solo el medio. Iguale el diseño OE para la flota objetivo.' },
      ],
      faqs: [
        { q: '¿Qué pasa si se abre la derivación del filtro de aceite?', a: 'Cuando el medio se obstruye o el aceite está frío y espeso, la válvula de derivación se abre para mantener la presión de aceite, protegiendo al motor de la falta de aceite a costa de una filtración temporal.' },
        { q: '¿Cuál es su pedido mínimo para filtros de aceite?', a: 'Los filtros spin-on y de cartucho para automóviles parten de 1.000 unidades por modelo; los filtros de servicio pesado, de 500 unidades.' },
        { q: '¿Cómo prueban los filtros de aceite?', a: 'Prueba de hermeticidad al 100 %, prueba de presión de estallido y calibración de la presión de apertura de la derivación, con opción de informes de prueba ISO 4548 para proyectos OEM.' },
      ],
      opinion: {
        title: 'Rusia y los mercados de arranque en frío quieren una mejor válvula antirretorno',
        body: 'Si exporta a Rusia, Asia Central o el norte de Europa, la válvula antirretorno y la recuperación del sello no son extras opcionales: son el producto. Los arranques en frío son brutales, y un filtro que deja drenar el aceite o un sello que se endurece a -40 °C genera reclamos de garantía rápido. Yo posicionaría un filtro de aceite de «clima frío» con un sello NBR de alta recuperación y una válvula antirretorno robusta, y dejaría que esa propuesta de valor específica ganara el pedido en lugar de una guerra de precios genérica.',
      },
    },
    ff: {
      intro:
        'El filtro de combustible elimina las impurezas del combustible para mantenerlo limpio y que el motor funcione de forma fiable. Los diésel modernos de riel común operan a presiones de inyección extremas, por lo que la tolerancia de filtración ha bajado a unos pocos micrones. Esta categoría se divide en tres productos prácticos: filtros de combustible spin-on, filtros en línea para sistemas de gasolina y filtros separadores de agua para flotas diésel y maquinaria.',
      selection: [
        { title: 'Cuidado con la clasificación en micrones', text: 'Los sistemas diésel de riel común necesitan filtración fina (10 µm o más fina); los filtros en línea de gasolina son menos exigentes. Iguale la clasificación al sistema de inyección.' },
        { title: 'Separación de agua para diésel', text: 'Los mercados diésel con climas húmedos o combustible de baja calidad se benefician de filtros separadores de agua para proteger los inyectores de la corrosión.' },
        { title: 'Confirme el tipo de conexión', text: 'Los filtros de combustible varían por rosca (M16x1.5, etc.) y conexiones rápidas: una conexión incorrecta es un fallo de montaje, no un problema de calidad.' },
        { title: 'Considere la calidad del combustible del mercado', text: 'Los combustibles regionales con alto azufre o contaminados justifican un medio más grueso pero de mayor capacidad, o una etapa de prefiltro.' },
      ],
      faqs: [
        { q: '¿Qué es un filtro de combustible separador de agua?', a: 'Combina la filtración con una capa de separación de agua que separa el agua del diésel antes de que llegue al sistema de inyección, protegiendo los inyectores de la corrosión y el desgaste.' },
        { q: '¿Cuál es su pedido mínimo para filtros de combustible?', a: 'Los filtros spin-on y en línea parten de 500–1.000 unidades por modelo; los filtros separadores de agua, de 500 unidades.' },
        { q: '¿Manejan líneas diésel y gasolina?', a: 'Sí, manejamos filtros diésel spin-on, separadores de agua y gasolina en línea bajo una sola marca, lo que simplifica el pedido consolidado de un distribuidor.' },
      ],
      opinion: {
        title: 'Venda la separación de agua como un seguro, no como un filtro',
        body: 'El filtro diésel de mayor margen no es el más barato: es el separador de agua. En mercados donde la calidad del diésel es irregular (buena parte de África, América Latina y partes de Asia), la falla del inyector es un problema costoso y recurrente para los dueños de flotas. Presentar un filtro separador de agua como un seguro barato frente al reemplazo de inyectores es una historia de venta mucho más convincente que cotizar un precio unitario, y ancla al cliente en la fiabilidad en lugar del costo.',
      },
    },
    wb: {
      intro:
        'Las escobillas limpian la lluvia del parabrisas para mantener la visión clara y la conducción segura. Es un consumible de alta rotación con tres tipos de construcción principales — aerodinámica (beam), híbrida y convencional — además de escobillas traseras. Para los exportadores, las escobillas son una categoría de volumen donde un compuesto de caucho consistente y la longitud correcta de la hoja impulsan los pedidos repetidos.',
      selection: [
        { title: 'Elija el tipo de construcción', text: 'Las hojas beam se adaptan al vidrio curvo y rinden en nieve; la híbrida añade un alerón para carga aerodinámica en carretera; la convencional es la clásica de bajo costo.' },
        { title: 'Acierte con las longitudes de hoja', text: 'Las escobillas se venden por longitud (14–26 pulgadas). Maneje las longitudes comunes del mercado objetivo para evitar huecos de montaje.' },
        { title: 'Cuide el compuesto de caucho', text: 'El caucho natural con recubrimiento de grafito da un barrido suave y silencioso; los compuestos resistentes a UV duran más en climas cálidos.' },
        { title: 'Confirme el adaptador', text: 'Distintos vehículos usan distintos conectores de brazo: un kit multiadaptador amplía el montaje por referencia.' },
      ],
      faqs: [
        { q: '¿Qué longitudes de escobillas debo almacenar?', a: 'Para la mayoría de las flotas de pasajeros, 22″, 24″ y 26″ cubren la mayoría; agregue 14–18″ para escobillas traseras. Le ayudamos a armar una mezcla de longitudes específica del mercado.' },
        { q: '¿Cuál es su pedido mínimo para escobillas?', a: 'Alrededor de 1.000 unidades por modelo, 50 por caja, con pedidos de longitudes mixtas admitidos.' },
        { q: '¿Pueden marcar las escobillas?', a: 'Sí, ofrecemos fundas y cajas de marca propia, y empaque neutro por defecto.' },
      ],
      opinion: {
        title: 'Las escobillas son un producto de percepción de calidad: lo barato chirría',
        body: 'Una escobilla es la rara pieza automotriz que el usuario final toca y oye en cada trayecto lluvioso. Una hoja ruidosa que deja franjas es una queja instantánea que daña la marca, y los compradores de climas cálidos aprenden rápido que el caucho barato y frágil por UV falla en meses. Mi consejo: compita por el compuesto de caucho, no por el precio de etiqueta. Una hoja un poco más cara, silenciosa y duradera gana el pedido repetido que de verdad hace rentables las escobillas.',
      },
    },
    tf: {
      intro:
        'La malla de filtro de transmisión filtra el fluido de transmisión para proteger el interior de la caja y la calidad del cambio. Se reemplaza típicamente como parte de un servicio de transmisión, a menudo junto con la junta del cárter. Es una categoría de nicho, crítica en montaje, donde el filtro debe coincidir con el modelo exacto de transmisión y el kit de servicio.',
      selection: [
        { title: 'Coincida exactamente con la transmisión', text: 'Los filtros de transmisión son específicos de la transmisión, no genéricos del vehículo: confirme siempre el modelo de transmisión (p. ej., Aisin, ZF, GM) antes de cotizar.' },
        { title: 'Ofrezca el kit', text: 'Vender el filtro junto con la junta del cárter (un kit de servicio) eleva el valor del pedido y reduce la probabilidad de una queja por junta faltante.' },
        { title: 'Verifique la especificación de la malla', text: 'La malla de nailon con la clasificación de poros correcta y el montaje del tubo de succión es esencial para un flujo de fluido fiable.' },
        { title: 'Cuide el material de la junta', text: 'Las juntas de corcho y de caucho se comportan distinto bajo calor; iguale el material OE para un re-sellado sin fugas.' },
      ],
      faqs: [
        { q: '¿Venden el filtro solo o como kit?', a: 'Ambos. Ofrecemos la malla sola y un kit de servicio filtro + junta, que es lo que prefieren la mayoría de los talleres.' },
        { q: '¿Cómo confirmo el filtro de transmisión correcto?', a: 'Envíe el código del modelo de transmisión o el número OE del filtro; lo verificamos contra nuestra tabla de montaje antes de cotizar.' },
        { q: '¿Cuál es su pedido mínimo para filtros de transmisión?', a: 'Alrededor de 500 unidades por modelo, 20 por caja. Hay cantidades de prueba menores disponibles para nuevos distribuidores.' },
      ],
      opinion: {
        title: 'Los filtros de transmisión premian la precisión, no la amplitud',
        body: 'Esta es la categoría donde un montaje incorrecto es lo más costoso para el comprador: bajar un cárter de transmisión exige mucha mano de obra, y un filtro que no asienta significa un costoso retrabajo. Los exportadores que publican una tabla de montaje limpia y específica de la transmisión y ofrecen el kit de junta ganarán por confianza. Prefiero manejar 40 filtros de transmisión catalogados con precisión que 200 con coincidencia laxa.',
      },
    },
    led: {
      intro:
        'Las luces LED son la categoría de mejora del catálogo: bombillas de faro de alto brillo con casquillos de montaje directo (H4, H7, etc.) y barras de luz auxiliar. Reemplazan las bombillas halógenas para lograr mejor salida y mayor vida útil. Para los exportadores, la clave es el montaje del casquillo, el diseño térmico y el cumplimiento de las normas de iluminación del mercado objetivo.',
      selection: [
        { title: 'Confirme el tipo de casquillo', text: 'Los casquillos H4/9003, H7, H11 y otros no son intercambiables: confirme el casquillo del vehículo antes de cotizar para evitar devoluciones por montaje.' },
        { title: 'Revise el diseño térmico', text: 'Los LED necesitan una disipación de calor eficaz (cuerpo de aluminio, ventilador o enfriamiento pasivo) para mantener la salida y evitar fallas tempranas.' },
        { title: 'Cuidado con la regulación', text: 'Algunos mercados restringen los retrofits LED para uso en carretera; aclare si el comprador necesita producto todoterreno o legal para carretera.' },
        { title: 'La certificación importa', text: 'CE y RoHS son la base para exportar; las aprobaciones regionales adicionales dependen del destino.' },
      ],
      faqs: [
        { q: '¿Sus bombillas LED son legales para carretera en todas partes?', a: 'Los retrofits LED se regulan de forma distinta según el país. Suministramos productos LED todoterreno y de mejora, y podemos asesorar sobre los requisitos del mercado de destino.' },
        { q: '¿Qué casquillos manejan?', a: 'H4/9003, H7 y otros casquillos comunes, además de barras de luz auxiliar. Agregamos casquillos según la demanda.' },
        { q: '¿Cuál es su pedido mínimo para productos LED?', a: 'Alrededor de 200 unidades por modelo, 20 por caja, con documentación CE y RoHS provista.' },
      ],
      opinion: {
        title: 'LED es una categoría guiada por cumplimiento, no por precio',
        body: 'Las luces LED de faro son la categoría donde una unidad barata falla más rápido: el sobrecalentamiento mata el chip, y una bombilla parpadeante o muerta es una queja visible e inmediata. Yo lideraría con el diseño térmico y la certificación antes que con afirmaciones de lúmenes, porque los compradores que ya se quemaron una vez pagarán por un producto que dure. El cumplimiento (CE, RoHS y aprobaciones de destino) es el verdadero foso aquí, y vale la pena invertir en él antes de escalar el volumen.',
      },
    },
  },
};
