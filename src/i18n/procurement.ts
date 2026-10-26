// Localized procurement deepening content (Phase 3) — Arabic + Spanish.
// Keyed by category code (af/cf/of/ff/wb/tf/led), mirroring the order and count
// of src/data/procurementContent.ts exactly.
//
// Untranslated by design: test standards (ISO 5011, SAE J726, ISO 4548),
// thread specs (3/4-16 UNF), gasket/material codes (NBR, VCI), "OEM", "HEPA",
// "H13", "MPPS", "H4/H7/H11", "CANbus", "CCT", "ESD", certifications
// (CE / RoHS / EMC), numbers & units (mm, µm, %, lm, cm, g), part numbers.

import type { Concern, Qa } from './types';

export const procurementI18n: {
  ar: { concerns: Record<string, Concern[]>; extraFaqs: Record<string, Qa[]> };
  es: { concerns: Record<string, Concern[]>; extraFaqs: Record<string, Qa[]> };
} = {
  ar: {
    concerns: {
      af: [
        {
          title: 'تضخيم كفاءة الترشيح',
          text: '"≥99%" على ورقة البيانات لا تعني شيئًا دون معيار الاختبار وحجم الجسيمات. مواصفة فلتر الهواء الموثوقة تذكر معيار ISO 5011 أو SAE J726، وغبار الاختبار، والكفاءة عند مستوى ميكروني محدد. قبل أن تلتزم بحاوية شحن، اطلب تقرير الاختبار — وليس الملصق.',
        },
        {
          title: 'المطابقة والتوافق',
          text: 'فلاتر الهواء اللوحية خاصة بكل مركبة. انحراف 2 مم في الطول أو العرض أو ارتفاع مانع التسرب يسمح بمرور الهواء غير المرشَّح ويتجاوز عنصر الفلتر ويقصّر عمر المحرك. تحقّق دائمًا من رقم OE واعتمد عينة مادية قبل الإنتاج قبل بدء الإنتاج الكمي.',
        },
        {
          title: 'العمر التشغيلي واحتجاز الغبار',
          text: 'ارتفاع عدد الطيّات وطبقة الألياف النانوية يطيلان فاصل الصيانة باحتجاز مزيد من الغبار لنفس حجم الصندوق. في أسواق الصحراء والإنشاءات، يسدّ السليلوز الرخيص بسرعة ويدفع مطالبات الضمان — حدّد سعة احتجاز الغبار (بالجرامات) إذا كان الأسطول يعمل في ظروف غبار عالية.',
        },
        {
          title: 'رطوبة التخزين',
          text: 'السليلوز المشبع بالراتنج يمتص الرطوبة في المستودعات الرطبة وقد ينتفخ قبل التركيب. يجب إغلاق العناصر في أكياس بلاستيكية مع مادة مجففة وإبعادها عن الأرض؛ فاللوح المنتفخ أو المعوّج لن يستقر في مكانه ويصبح شكوى صامتة من العميل.',
        },
        {
          title: 'تغليف التصدير',
          text: 'فلاتر الهواء خفيفة لكنها ضخمة، لذا تهيمن مساحة الشحن على تكلفة النقل للوحدة وليس الوزن. تحقّق من قوة انضغاط الكرتون ومساحة البالتة، واستخدم تقوية الزوايا — فالزوايا المكسورة هي الشكوى الأكثر شيوعًا في الشحن الجوي لهذه الفئة.',
        },
      ],
      cf: [
        {
          title: 'تضخيم كفاءة الترشيح',
          text: '"HEPA" و"99%" يُستخدمان بتساهل. ادعاء HEPA الحقيقي يعني وسيط ترشيح من فئة H13 بكفاءة ≥99.97% لجسيم MPPS (أكثر حجم جسيم نفاذية)، مُختبَر وفق معيار حقيقي. ميّز بين خطوط الجزيئات والكربون النشط وHEPA في ورقة المواصفات ليعرف عميلك بالضبط ما يدفع مقابله.',
        },
        {
          title: 'المطابقة والتوافق',
          text: 'فلاتر المقصورة ألواح صلبة يجب أن تنزلق بدقة داخل هيكل بلاستيكي. انحراف 2–3 مم يعني شكوى لا خصمًا. تأكد من الطول×العرض×الارتفاع مقابل هيكل OE واعتمد عينة قبل الالتزام بدورة إنتاج كاملة.',
        },
        {
          title: 'العمر التشغيلي وتشبّع الكربون',
          text: 'الكربون النشط يتشبّع: في المدن الملوثة أو المكتظة بالمرور قد ينخفض فاصل الاستبدال إلى النصف. فلتر الكربون الذي فقد قدرته على الامتزاز يعمل فعليًا كفلتر جزيئات فقط. حدّد فاصل استبدال واقعيًا في كتالوجك ليعيد العميل الطلب وفق جدول زمني وليس عند العطل.',
        },
        {
          title: 'رطوبة التخزين',
          text: 'الكربون النشط يمتص الرطوبة والروائح من الهواء المحيط أثناء التخزين. احفظ فلاتر الكربون مغلقة في أكياس بلاستيكية، ولا تخزّنها أبدًا قرب المذيبات أو الوقود، وإلا وصلت مشبّعة مسبقًا وغير قابلة للاستخدام.',
        },
        {
          title: 'تغليف التصدير',
          text: 'الألواح الرفيعة العريضة تنحني وتتشوه تحت التراص. استخدم أغطية داخلية صلبة وكراتين مقاومة للسحق مع تحديد اتجاه التراص؛ ففلتر المقصورة المثني لن يستقر في مكانه ويصبح مرتجعًا يمكن تفاديه.',
        },
      ],
      of: [
        {
          title: 'تضخيم كفاءة الترشيح',
          text: 'كفاءة فلتر الزيت لا تكون ذات معنى إلا كنسبة بيتا (beta ratio) وفق اختبار التمرير المتعدد ISO 4548. "≥90% @ 20µm" يجب أن تذكر مرجع الاختبار — فأرقام التمرير الأحادي والمتعدد ليست واحدة. للمشاريع بمستوى OEM، اطلب تقرير ISO 4548.',
        },
        {
          title: 'المطابقة والتوافق',
          text: 'السن (3/4-16 UNF مقابل المتري)، وقطر الحشية، وضغط فتح صمام التجاوز يجب أن تطابق جميعها محرك OE. السن الخاطئ أو صمام التجاوز غير المعاير يعني مرتجعًا، والأسوأ أنه قد يجوّع المحرك أو يتجاوز الترشيح. أكّد رقم OE قبل تقديم السعر.',
        },
        {
          title: 'العمر التشغيلي وسلوك التشغيل البارد',
          text: 'وسيط الترشيح النانوي أو المركّب يدعم فترات تصريف زيت أطول، بينما يحمي صمام منع التصريف العكسي وختم الارتداد العالي التشغيل البارد. في أسواق المناخ البارد هذه ليست اختيارية — إنها الفرق بين طلب متكرر ومطالبة ضمان.',
        },
        {
          title: 'رطوبة التخزين',
          text: 'العلب الفولاذية تصدأ في الشحن البحري الرطب إذا لم تكن محمية. استخدم طبقة زيت داخلية، وأكياسًا بلاستيكية محكمة، وورق VCI (مثبط التآكل بالبخار) في الكرتون؛ فالصدأ داخل العلبة غير مرئي للمشتري حتى يلوّث الزيت.',
        },
        {
          title: 'تغليف التصدير',
          text: 'العلب الفولاذية ثقيلة وقابلة للانبعاج. كراتين التصدير مزدوجة الجدار والفواصل وحدود وزن الكرتون الصحيحة تحمي الهيكل؛ فالعلبة المنبعجة فشل في إدراك الجودة حتى لو كان الفلتر يعمل.',
        },
      ],
      ff: [
        {
          title: 'تضخيم كفاءة الترشيح',
          text: 'مواصفات فلتر الوقود يجب أن تذكر المستوى الميكروني ونسبة بيتا. الديزل الحديث ذو السكة المشتركة يحتاج ترشيح 2–5 µm؛ ففلتر يُسوَّق عند "10 µm" قد يكون غير كافٍ لنظام الحقن الذي يُزعم أنه يناسبه. طابق التصنيف الميكروني مع تقنية الحقن، لا مع السعر الأدنى.',
        },
        {
          title: 'المطابقة والتوافق',
          text: 'تتفاوت فلاتر الوقود حسب السن ووصلة التوصيل السريع ونوع الديزل/البنزين. الوصلة الخاطئة هي فشل مطابقة لا مشكلة جودة. أكّد السن ونمط التوصيل وما إذا كانت المركبة تعمل بالديزل أو البنزين قبل تقديم السعر.',
        },
        {
          title: 'العمر التشغيلي وفصل الماء',
          text: 'في الأسواق ذات الديزل الرديء أو الرطب، فلتر فاصل الماء المزوَّد بصمام تصريف تأمين رخيص ضد تآكل البخاخات. قدّمه على أساس الموثوقية وفاصل الصيانة — الفاصل الذي يُصرَّف وفق الجدول يحمي نظام حقن باهظ الثمن.',
        },
        {
          title: 'رطوبة التخزين',
          text: 'أوعية فاصل الماء وحلقات O-ring تتقادم في الحرارة الجافة، وأختام التوصيل السريع تتصلّب. احفظ الفلاتر مغلقة وباردة؛ فالأختام المتدهورة تتسرب عند أول تركيب وتبدو كعيب تصنيع.',
        },
        {
          title: 'تغليف التصدير',
          text: 'الأجسام المصنوعة من الألومنيوم والفولاذ تنبعج بسهولة. الأغطية الفردية وفواصل الكرتون الكاملة تحمي الجسم وصمام التصريف؛ ففاصل الماء المنبعج شكوى مرئية حتى لو كان يعمل.',
        },
      ],
      wb: [
        {
          title: 'مركّب المطاط، لا ادعاءات "المواصفات"',
          text: 'المسّاحات ليس لها كفاءة ترشيح — المواصفة الحقيقية هي مركّب المطاط. المطاط الطبيعي مع طلاء جرافيت يعطي مسحًا ناعمًا هادئًا؛ بينما المطاط الصناعي الرخيص أو غير المخبوز يترك خطوطًا ويصرّ. المركّبات المقاومة للأشعة فوق البنفسجية غير قابلة للتفاوض في المناخات الحارة.',
        },
        {
          title: 'المطابقة ونوع المهايئ',
          text: 'طول الشفرة (14–26 بوصة) ومهايئ الذراع (خطاف، دبوس، حربة، قفل جانبي) كلاهما حاسم للمطابقة. طقم المهايئات المتعددة يوسّع المطابقة لكل SKU ويقلل المرتجعات — أكّد طقم المهايئات مع كل طول شفرة.',
        },
        {
          title: 'العمر التشغيلي وتقادم الأشعة فوق البنفسجية',
          text: 'ضوء الشمس والحرارة هما ما يقتل المسّاحة، لا عدد الكيلومترات. في الشرق الأوسط وشمال أفريقيا وأسواق السواحل الحارة، يفشل المطاط الهش للأشعة فوق البنفسجية خلال أشهر. المركّب المقاوم للأشعة فوق البنفسجية هو الفرق بين طلب لمرة واحدة وطلب متكرر.',
        },
        {
          title: 'رطوبة التخزين والحرارة',
          text: 'المطاط يتخذ انحناءً دائمًا عند ثنيه أو تخزينه تحت وزن لفترات طويلة، ويتقادم حراريًا في الحاويات. خزّن الشفرات مسطحة بعيدًا عن الشمس المباشرة، وتجنّب تراص الكراتين الثقيلة فوقها — فالشفرة المعوّجة تقفز وتترك خطوطًا.',
        },
        {
          title: 'تغليف التصدير',
          text: 'الشفرات الطويلة الرفيعة تنحني إذا كان الكرتون دون المواصفة المطلوبة. الأغطية الصلبة والكراتين الكاملة ذات الاتجاه الصحيح تحمي منحنى الشفرة؛ فالشفرة بدون هيكل (beam) المثنية لن تتطابق مع الزجاج الأمامي.',
        },
      ],
      tf: [
        {
          title: 'تصنيف الشبكة، لا "الكفاءة"',
          text: 'تُحدَّد مصافي ناقل الحركة بتصنيف مسام شبكة النايلون وتدفق السائل، لا بنسبة كفاءة مئوية. أكّد التصنيف الميكروني وأن وصلة أنبوب السحب تطابق ناقل الحركة — فتقييد التدفق لا يقل أهمية عن الترشيح هنا.',
        },
        {
          title: 'المطابقة والتوافق',
          text: 'فلاتر ناقل الحركة خاصة بناقل الحركة (Aisin، ZF، GM، إلخ)، لا عامة للمركبة. إنزال الحوض عمل مكلف، والفلتر الذي لا يستقر يعني إعادة عمل باهظة. أكّد موديل ناقل الحركة أو رقم فلتر OE بالضبط قبل تقديم السعر.',
        },
        {
          title: 'العمر التشغيلي ومادة الحشية',
          text: 'حشيات الحوض الفلينية والمطاطية تتصرف بشكل مختلف تحت الحرارة. طابق مادة حشية OE لإغلاق محكم بلا تسرب؛ فالحشية الفلينية في تطبيق عالي الحرارة تتصلّب وتتسرب. الحشية نصف المنتج في هذه الفئة.',
        },
        {
          title: 'رطوبة التخزين',
          text: 'الحشيات الفلينية تجف وتنكمش، والنايلون مستقر لكن يجب أن يبقى مسطحًا. احفظ الأطقم مغلقة ومسطحة؛ فالحشية المعوّجة أو الجافة فشل مطابقة في مهمة تهيمن فيها تكلفة العمالة.',
        },
        {
          title: 'تغليف التصدير',
          text: 'أطقم الفلتر مع الحشية يجب أن تحمي الحشية المسطحة من الانحناء والسحق. العبوات المسطحة الصلبة ذات الفواصل تُبقي الحشية سليمة؛ فالحشية المثنية هي الشكوى الأكثر شيوعًا في أطقم ناقل الحركة.',
        },
      ],
      led: [
        {
          title: 'تضخيم اللومن ودرجة حرارة اللون (CCT)',
          text: 'تسويق LED مليء بادعاءات لومن مبالغ فيها. المواصفة الصادقة هي اللومن المُسلَّم لكل واط ودرجة حرارة لون CCT محددة، ويفضل مع تقرير اختبار كرة التكامل. اطلب قيم lm وCCT الفعلية، لا ملصق "10,000 لومن".',
        },
        {
          title: 'المطابقة وCANbus',
          text: 'المقابس (H4/H7/H11) غير قابلة للتبادل، وكثير من المركبات الحديثة تُطلق تحذير خطأ المصباح دون مفكك شفرة CANbus. أكّد المقبس وما إذا كانت المركبة تحتاج مفكك شفرة لتفادي الوميض وأخطاء لوحة القيادة.',
        },
        {
          title: 'العمر التشغيلي والتصميم الحراري',
          text: 'مصابيح LED تموت من الحرارة لا من العمر. التصميم الحراري الفعال (جسم ألومنيوم، مروحة أو تبريد سلبي) ومشغّل عالي الجودة يحددان العمر الافتراضي أكثر بكثير من الشريحة نفسها. الوحدة التي تسخن أكثر من اللازم تفشل بسرعة وبشكل مرئي.',
        },
        {
          title: 'رطوبة التخزين',
          text: 'المشغّلات ونقاط اللحام حساسة للرطوبة والتفريغ الكهروستاتيكي (ESD). احفظ المصابيح مغلقة وجافة؛ فالتآكل الناتج عن الرطوبة في المشغّل سبب فشل مبكر صامت يبدو كدفعة سيئة.',
        },
        {
          title: 'تغليف التصدير والشهادات',
          text: 'مصابيح LED هشة وتخضع للامتثال. الصناديق الفردية تحمي التركيب، ووثائق CE / RoHS / EMC أساسية لمعظم الأسواق. الشهادات المفقودة، لا اللومن المفقود، هي ما يعيق طلب LED عند الجمارك.',
        },
      ],
    },
    extraFaqs: {
      af: [
        {
          q: 'كيف تثبتون أن كفاءة الترشيح لديكم حقيقية؟',
          a: 'نحدد الكفاءة مقابل معيار اختبار (ISO 5011 / SAE J726) مع ذكر غبار الاختبار والمستوى الميكروني. عند الطلب نوفر تقرير اختبار من جهة خارجية أو داخليًا لـSKU المحدد، لا نسبة تسويقية.',
        },
        {
          q: 'ما سعة احتجاز الغبار التي يجب أن أحددها لأسواق الصحراء؟',
          a: 'للشرق الأوسط وشمال أفريقيا نوصي بوسيط ترشيح من ألياف نانوية أو عالي الاحتجاز للغبار مع سعة احتجاز غبار محددة بالجرامات، وتذكير استبدال أكثر تكرارًا في كتالوجك. نساعدك في اختيار درجة الوسيط المناسبة لحمل الغبار المستهدف.',
        },
        {
          q: 'كيف تغلّفون فلاتر الهواء للشحن البحري؟',
          a: 'معيار التغليف التصديري لدينا يستخدم كراتين تصدير مقاومة للسحق مع حماية الزوايا، وأكياسًا بلاستيكية محكمة مع مادة مجففة للعناصر الحساسة للرطوبة، وبالتة مُحسّنة المساحة لإبقاء تكلفة النقل للوحدة منخفضة. قوة انضغاط الكرتون محددة لتتحمل تراص الحاويات.',
        },
        {
          q: 'هل يمكنني الحصول على عينة قبل الإنتاج الكمي؟',
          a: 'نعم. نوفر عينة ما قبل الإنتاج مقابل رقم OE أو الرسم الخاص بك، وتعتمد الأبعاد ووسيط الترشيح ومانع التسرب والتغليف قبل تنفيذ الطلب الكامل.',
        },
      ],
      cf: [
        {
          q: 'ما الفرق بين "99%" وادعاء HEPA الحقيقي؟',
          a: 'ادعاء HEPA الحقيقي يعني وسيط ترشيح من فئة H13 بكفاءة ≥99.97% لأكثر حجم جسيم نفاذية، مُختبَر وفق معيار. "99%" العامة دون معيار ومرجع جسيمات هي رقم تسويقي. نبقي الخطوط الثلاثة — الجزيئات والكربون وHEPA — مفصولة بوضوح في ورقة المواصفات.',
        },
        {
          q: 'كم مرة يجب استبدال فلاتر المقصورة في المدن الملوثة؟',
          a: 'في المدن المكتظة بالمرور أو عالية الضباب الدخاني قد ينخفض الفاصل إلى النصف مقارنة بأسواق الهواء النظيف. ننشر فاصل استبدال واقعيًا ليعيد عملاؤك الطلب وفق جدول زمني، وتُستبدل فلاتر الكربون عند تشبّع الامتزاز لا عند الانسداد.',
        },
        {
          q: 'هل تجمعون الكربون النشط وHEPA في عنصر واحد؟',
          a: 'نعم — فلتر المقصورة الفاخر لدينا يجمع طبقة مركّبة HEPA مع الكربون النشط، مانحًا إزالة الجسيمات الدقيقة وامتزاز الروائح والغازات في SKU فاخر واحد يسهل البيع الإضافي للموزعين.',
        },
      ],
      of: [
        {
          q: 'كيف تحمون العلب الفولاذية من الصدأ في الشحن البحري؟',
          a: 'نستخدم طبقة زيت داخلية، وأكياسًا بلاستيكية محكمة، وورق VCI (مثبط التآكل بالبخار) داخل كراتين مزدوجة الجدار، لتصل العلبة نظيفة حتى بعد أسابيع في حاوية رطبة.',
        },
        {
          q: 'هل يمكنكم مطابقة رقم فلتر زيت OE محدد؟',
          a: 'نعم. أرسل رقم OE ويفضل عينة؛ نطابق السن والحشية وإعداد التجاوز ووسيط الترشيح وأبعاد العلبة ونوفر عينة ما قبل الإنتاج للاعتماد.',
        },
      ],
      ff: [
        {
          q: 'ما التصنيف الميكروني الذي تحتاجه فلاتر الديزل ذات السكة المشتركة؟',
          a: 'الديزل الحديث ذو السكة المشتركة يحتاج عادة ترشيح 2–5 µm لحماية نظام الحقن عالي الضغط. نطابق التصنيف الميكروني ونسبة بيتا مع تقنية الحقن — فلتر 10 µm ليس بديلًا عن تطبيق السكة المشتركة.',
        },
        {
          q: 'هل تشمل فلاتر فاصل الماء لديكم صمام تصريف؟',
          a: 'صُممت فلاتر فاصل الماء لدينا مع وسيلة تصريف لإزالة الماء وفق جدول صيانة. هذا ما يحمي بخاخات الديزل من التآكل في أسواق الوقود الرديء.',
        },
        {
          q: 'كيف أختار بين فلاتر الوقود الدوّارة (spin-on) والخطية؟',
          a: 'الدوّار (spin-on) علبة كاملة قابلة للاستبدال للديزل والمركبات التجارية الخفيفة؛ بينما تناسب الفلاتر الخطية أنظمة البنزين وتُركَّب داخل خرطوم الوقود. نؤكد نوع الوصلة والتطبيق ديزل/بنزين قبل التوصية بـSKU.',
        },
      ],
      wb: [
        {
          q: 'ما مركّب المطاط الذي تستخدمونه للمناخات الحارة؟',
          a: 'مطاط طبيعي مع طلاء جرافيت ومركّب مقاوم للأشعة فوق البنفسجية للأسواق الحارة المشمسة. المركّب — لا سعر الملصق — هو ما يحدد ما إذا كانت الشفرة تمسح بهدوء لأشهر أم تترك خطوطًا خلال أسابيع.',
        },
        {
          q: 'كيف تمنعون انحناء شفرات المسّاحات أثناء النقل؟',
          a: 'الأغطية الصلبة والكراتين الكاملة ذات الاتجاه الصحيح تحمي منحنى الشفرة، وتُخزَّن الشفرات مسطحة ليحافظ المطاط على حالته. نحدد قوة الكرتون لتفادي الاعوجاج تحت تراص الحاويات.',
        },
        {
          q: 'ما المهايئات التي تشملها شفراتكم؟',
          a: 'تُشحن شفراتنا بدون هيكل (beam) والهجينة مع طقم مهايئات متعددة يغطي أنواع الأذرع الشائعة (خطاف، دبوس، حربة، قفل جانبي)، مما يوسّع المطابقة لكل SKU ويقلل المرتجعات.',
        },
      ],
      tf: [
        {
          q: 'كيف أؤكد فلتر ناقل الحركة المحدد الذي أحتاجه؟',
          a: 'أرسل رمز موديل ناقل الحركة (Aisin، ZF، GM، إلخ) أو رقم فلتر OE. فلاتر ناقل الحركة خاصة بناقل الحركة، لذا نتحقق من جدول المطابقة لدينا قبل تقديم السعر — لا نقدّم السعر بموديل المركبة وحده أبدًا.',
        },
        {
          q: 'حشية فلينية أم مطاطية — أيهما أطلب؟',
          a: 'طابق مادة حشية OE. المطاط يتحمل الحرارة أفضل ويقاوم التصلّب؛ والفلين مناسب للتطبيقات منخفضة الحرارة. نوفر مادة الحشية التي تطابق خدمة ناقل الحركة الأصلية.',
        },
        {
          q: 'هل تبيعون الفلتر مع حشية الحوض كطقم؟',
          a: 'نعم — طقم خدمة الفلتر مع الحشية هو ما يفضله معظم الورش، ويزيل خطر حشية مفقودة أو غير مطابقة. نبيع أيضًا المصفاة وحدها للموزعين الراغبين في هذا الخيار.',
        },
      ],
      led: [
        {
          q: 'كيف تتحققون من ادعاءات اللومن وCCT؟',
          a: 'نحدد اللومن المُسلَّم لكل واط ودرجة حرارة لون CCT محددة، مدعومة بتقرير اختبار كرة التكامل عند الطلب. نتجنب ملصقات "اللومن الأقصى" المبالغ فيها ونذكر الخرج الصادق المستدام.',
        },
        {
          q: 'هل تحتاج مصابيح LED لديكم مفككات شفرة CANbus؟',
          a: 'بعض المركبات الحديثة تُطلق تحذير خطأ المصباح دون مفكك شفرة. نؤكد المركبة وننصح ما إذا كان المفكك مطلوبًا لتفادي الوميض وأخطاء لوحة القيادة قبل أن تطلب.',
        },
        {
          q: 'ما الشهادات التي توفرونها؟',
          a: 'CE وRoHS أساسيان في كل منتج LED، مع توفر وثائق EMC. ننصح بشأن موافقات سوق الوجهة قبل أن تلتزم، لأن الامتثال — لا اللومن — هو ما يمرر الجمارك.',
        },
        {
          q: 'ما الضمان على مصابيح LED؟',
          a: 'نقف خلف التصميم الحراري وجودة المشغّل بضمان على منتجات LED لدينا. نمط الفشل الذي نصمم ضده هو الحرارة، لذا فالوحدة المبرَّدة جيدًا تعيش أطول بكثير من لمبة اللومن العالية الرخيصة.',
        },
      ],
    },
  },
  es: {
    concerns: {
      af: [
        {
          title: 'Inflación de eficiencia de filtración',
          text: '"≥99%" en una ficha técnica no significa nada sin la norma de prueba y el tamaño de partícula. Una especificación creíble de filtro de aire cita ISO 5011 o SAE J726, el polvo de prueba y la eficiencia a un nivel de micras declarado. Antes de comprometer un contenedor, pide el informe de prueba — no la etiqueta.',
        },
        {
          title: 'Compatibilidad y ajuste',
          text: 'Los filtros de aire de panel son específicos de cada vehículo. Una desviación de 2 mm en largo, ancho o altura del sello deja pasar aire sin filtrar y acorta la vida del motor. Verifica siempre el número OE y aprueba una muestra física de preproducción antes de la producción en masa.',
        },
        {
          title: 'Vida útil y retención de polvo',
          text: 'Un mayor número de pliegues y una capa de nanofibras extienden el intervalo de servicio al retener más polvo con el mismo tamaño de caja. En mercados desérticos o de construcción, la celulosa barata se obstruye rápido y genera reclamos de garantía — especifica la capacidad de retención de polvo (en gramos) si la flota opera con mucho polvo.',
        },
        {
          title: 'Humedad de almacenamiento',
          text: 'La celulosa impregnada de resina absorbe humedad en bodegas húmedas y puede hincharse antes de la instalación. Los elementos deben sellarse en bolsas con desecante y mantenerse alejados del suelo; un panel hinchado o deformado no asienta y es una queja silenciosa del cliente.',
        },
        {
          title: 'Embalaje de exportación',
          text: 'Los filtros de aire son livianos pero voluminosos, así que el costo de flete por unidad lo domina el volumen, no el peso. Verifica la resistencia a la compresión de la caja y el volumen del pallet, y usa refuerzo en las esquinas — las esquinas aplastadas son la queja más común de flete aéreo en esta categoría.',
        },
      ],
      cf: [
        {
          title: 'Inflación de eficiencia de filtración',
          text: '"HEPA" y "99%" se usan con demasiada ligereza. Una afirmación HEPA real significa medio de clase H13 con ≥99.97% para MPPS (tamaño de partícula más penetrante), probado contra una norma real. Distingue las líneas de partículas, carbón activado y HEPA en la ficha técnica para que tu cliente sepa exactamente por qué paga.',
        },
        {
          title: 'Compatibilidad y ajuste',
          text: 'Los filtros de habitáculo son paneles rígidos que deben deslizarse con precisión en una carcasa plástica. Una desviación de 2–3 mm es una queja, no un descuento. Confirma largo×ancho×alto contra la carcasa OE y aprueba una muestra antes de comprometer una corrida de producción completa.',
        },
        {
          title: 'Vida útil y saturación de carbón',
          text: 'El carbón activado se satura: en ciudades contaminadas o con tráfico pesado, el intervalo de cambio puede reducirse a la mitad. Un filtro de carbón que perdió su adsorción funciona de hecho como filtro de partículas. Publica un intervalo de cambio realista en tu catálogo para que el cliente reordene por calendario, no por falla.',
        },
        {
          title: 'Humedad de almacenamiento',
          text: 'El carbón activado adsorbe humedad y olores del aire circundante en almacenamiento. Mantén los filtros de carbón sellados en bolsas y nunca los almacenes cerca de solventes o combustibles, o llegarán presaturados e inutilizables.',
        },
        {
          title: 'Embalaje de exportación',
          text: 'Los paneles delgados y anchos se doblan y deforman bajo apilamiento. Usa fundas interiores rígidas y cajas resistentes al aplastamiento con la orientación de apilado marcada; un filtro de habitáculo doblado no asienta y es una devolución evitable.',
        },
      ],
      of: [
        {
          title: 'Inflación de eficiencia de filtración',
          text: 'La eficiencia de un filtro de aceite solo tiene sentido como relación beta bajo la prueba multipaso ISO 4548. "≥90% @ 20µm" debe indicar la referencia de prueba — los números de paso único y multipaso no son iguales. Para proyectos de nivel OEM, solicita el informe ISO 4548.',
        },
        {
          title: 'Compatibilidad y ajuste',
          text: 'La rosca (3/4-16 UNF vs métrica), el diámetro de la junta y la presión de apertura de la válvula de derivación deben coincidir con el motor OE. Una rosca equivocada o una válvula mal calibrada es una devolución y, peor, puede privar o derivar el motor. Confirma el número OE antes de cotizar.',
        },
        {
          title: 'Vida útil y arranque en frío',
          text: 'Un medio nano o compuesto admite intervalos de drenaje de aceite extendidos, mientras que una válvula antidrenaje y un sello de alto rebote protegen el arranque en frío. En mercados de clima frío no son opcionales — son la diferencia entre un pedido recurrente y un reclamo de garantía.',
        },
        {
          title: 'Humedad de almacenamiento',
          text: 'Las carcasas de acero se oxidan en el flete marítimo húmedo si no están protegidas. Usa una película de aceite interior, bolsas selladas y papel VCI (inhibidor de corrosión por vapor) en la caja; el óxido interior es invisible para el comprador hasta que contamina el aceite.',
        },
        {
          title: 'Embalaje de exportación',
          text: 'Las carcasas de acero son pesadas y se abollan. Las cajas de exportación de doble pared, los separadores y los límites de peso correctos protegen el casco; una carcasa abollada es una falla de percepción de calidad incluso si el filtro funciona.',
        },
      ],
      ff: [
        {
          title: 'Inflación de eficiencia de filtración',
          text: 'Las especificaciones de filtros de combustible deben citar el nivel de micras y la relación beta. El diésel common-rail moderno necesita filtración de 2–5 µm; un filtro comercializado como "10 µm" puede ser insuficiente para el sistema de inyección que dice cubrir. Haz coincidir la clasificación en micras con la tecnología de inyección, no con el precio más bajo.',
        },
        {
          title: 'Compatibilidad y ajuste',
          text: 'Los filtros de combustible varían por rosca, conexión de acople rápido y tipo diésel/gasolina. Una conexión equivocada es una falla de ajuste, no un problema de calidad. Confirma la rosca y el estilo de conexión, y si el vehículo es diésel o gasolina, antes de cotizar.',
        },
        {
          title: 'Vida útil y separación de agua',
          text: 'En mercados con diésel deficiente o húmedo, un filtro separador de agua con drenaje es un seguro barato contra la corrosión de inyectores. Posiciónalo por confiabilidad e intervalo de servicio — un separador drenado a tiempo protege un sistema de inyección muy costoso.',
        },
        {
          title: 'Humedad de almacenamiento',
          text: 'Los vasos del separador de agua y las juntas tóricas envejecen con el calor seco, y los sellos de acople rápido se endurecen. Mantén los filtros sellados y frescos; los sellos degradados gotean en la primera instalación y parecen un defecto de fabricación.',
        },
        {
          title: 'Embalaje de exportación',
          text: 'Los cuerpos de aluminio y acero se abollan con facilidad. Las fundas individuales y los separadores completos protegen el cuerpo y la válvula de drenaje; un separador de agua abollado es una queja visible incluso si funciona.',
        },
      ],
      wb: [
        {
          title: 'Compuesto de caucho, no afirmaciones de "spec"',
          text: 'Las escobillas no tienen eficiencia de filtración — la especificación real es el compuesto de caucho. El caucho natural con recubrimiento de grafito da un barrido suave y silencioso; el caucho sintético barato o sin vulcanizar deja rayas y chirría. Los compuestos resistentes a UV son innegociables en climas cálidos.',
        },
        {
          title: 'Ajuste y tipo de adaptador',
          text: 'La longitud de la escobilla (14–26 pulgadas) y el adaptador del brazo (gancho, pasador, bayoneta, cierre lateral) son críticos para el ajuste. Un kit multiadaptador amplía el ajuste por SKU y reduce devoluciones — confirma el conjunto de adaptadores con cada longitud.',
        },
        {
          title: 'Vida útil y envejecimiento UV',
          text: 'La luz solar y el calor son lo que mata una escobilla, no el kilometraje. En Oriente Medio, el norte de África y los mercados costeros cálidos, el caucho quebradizo por UV falla en meses. Un compuesto resistente a UV es la diferencia entre una compra única y un pedido recurrente.',
        },
        {
          title: 'Humedad y calor de almacenamiento',
          text: 'El caucho adopta una deformación permanente cuando se dobla o se almacena bajo peso por períodos largos, y envejece por calor en contenedores. Almacena las escobillas planas, lejos del sol directo, y evita apilar cajas pesadas encima — una escobilla deformada salta y deja rayas.',
        },
        {
          title: 'Embalaje de exportación',
          text: 'Las escobillas largas y delgadas se doblan si la caja está subdimensionada. Las fundas rígidas y las cajas completas bien orientadas protegen la curvatura; una escobilla aerodinámica (beam) doblada no se ajustará al parabrisas.',
        },
      ],
      tf: [
        {
          title: 'Clasificación de malla, no "eficiencia"',
          text: 'Las mallas de transmisión se especifican por la clasificación de poros de la malla de nailon y el flujo de fluido, no por un porcentaje de eficiencia. Confirma la clasificación en micras y que el acople del tubo de succión coincida con la transmisión — la restricción de flujo es tan importante como la filtración aquí.',
        },
        {
          title: 'Compatibilidad y ajuste',
          text: 'Los filtros de transmisión son específicos de la transmisión (Aisin, ZF, GM, etc.), no genéricos del vehículo. Bajar el cárter es trabajo intensivo, y un filtro que no asienta implica un retrabajo costoso. Confirma el modelo exacto de transmisión o el número de filtro OE antes de cotizar.',
        },
        {
          title: 'Vida útil y material de la junta',
          text: 'Las juntas de cárter de corcho y caucho se comportan distinto bajo calor. Haz coincidir el material de junta OE para un resellado sin fugas; una junta de corcho en una aplicación de alto calor se endurece y gotea. La junta es la mitad del producto en esta categoría.',
        },
        {
          title: 'Humedad de almacenamiento',
          text: 'Las juntas de corcho se secan y encogen, y el nailon es estable pero debe permanecer plano. Mantén los kits sellados y planos; una junta deformada o seca es una falla de ajuste en un trabajo donde domina el costo de mano de obra.',
        },
        {
          title: 'Embalaje de exportación',
          text: 'Los kits de filtro con junta deben proteger la junta plana de dobleces y aplastamiento. Los empaques planos rígidos con separadores mantienen la junta recta; una junta doblada es la queja más común en los kits de transmisión.',
        },
      ],
      led: [
        {
          title: 'Inflación de lúmenes y CCT',
          text: 'El marketing de LED está lleno de afirmaciones de lúmenes infladas. La especificación honesta es lúmenes entregados por vatio y una CCT (temperatura de color) declarada, idealmente con un informe de esfera integradora. Pide los lm y CCT reales, no una etiqueta de "10,000 lúmenes".',
        },
        {
          title: 'Ajuste y CANbus',
          text: 'Los casquillos (H4/H7/H11) no son intercambiables, y muchos vehículos modernos activan una advertencia de error de bombilla sin un decodificador CANbus. Confirma el casquillo y si el vehículo necesita decodificador para evitar parpadeo y errores en el tablero.',
        },
        {
          title: 'Vida útil y diseño térmico',
          text: 'Los LED mueren por calor, no por edad. Un diseño térmico efectivo (cuerpo de aluminio, ventilador o enfriamiento pasivo) y un driver de calidad determinan la vida útil mucho más que el chip. Una unidad que se sobrecalienta falla rápido y de forma visible.',
        },
        {
          title: 'Humedad de almacenamiento',
          text: 'Los drivers y las uniones de soldadura son sensibles a la humedad y a la ESD. Mantén las bombillas selladas y secas; la corrosión por humedad en el driver es una causa silenciosa de falla temprana que parece un lote defectuoso.',
        },
        {
          title: 'Embalaje de exportación y certificación',
          text: 'Las bombillas LED son frágiles y están sujetas a cumplimiento. Las cajas individuales protegen el ensamblaje, y la documentación CE / RoHS / EMC es la base para la mayoría de los mercados. Las certificaciones faltantes, no los lúmenes faltantes, son lo que bloquea un pedido de LED en aduanas.',
        },
      ],
    },
    extraFaqs: {
      af: [
        {
          q: '¿Cómo demuestran que su eficiencia de filtración es real?',
          a: 'Especificamos la eficiencia contra una norma de prueba (ISO 5011 / SAE J726) con el polvo de prueba y el nivel de micras declarados. A pedido, entregamos un informe de prueba de terceros o interno para la referencia exacta, no un porcentaje de marketing.',
        },
        {
          q: '¿Qué capacidad de retención de polvo debo especificar para mercados desérticos?',
          a: 'Para Oriente Medio y el norte de África recomendamos un medio de nanofibras o de alta retención con una capacidad de retención de polvo declarada en gramos, y un recordatorio de reemplazo más frecuente en tu catálogo. Te ayudamos a elegir el grado de medio correcto para la carga de polvo objetivo.',
        },
        {
          q: '¿Cómo embalan los filtros de aire para el flete marítimo?',
          a: 'Nuestro estándar de embalaje de exportación usa cajas de exportación resistentes al aplastamiento con protección de esquinas, bolsas selladas con desecante para elementos sensibles a la humedad y pallets con volumen optimizado para mantener bajo el costo de flete por unidad. La resistencia a la compresión se especifica para sobrevivir el apilamiento en contenedor.',
        },
        {
          q: '¿Puedo obtener una muestra antes de la producción en masa?',
          a: 'Sí. Entregamos una muestra de preproducción contra tu número OE o plano, y apruebas dimensiones, medio, sello y embalaje antes de correr el pedido completo.',
        },
      ],
      cf: [
        {
          q: '¿Cuál es la diferencia entre "99%" y una afirmación HEPA real?',
          a: 'Una afirmación HEPA real significa medio de clase H13 con ≥99.97% para el tamaño de partícula más penetrante, probado contra una norma. Un "99%" genérico sin norma ni referencia de partículas es un número de marketing. Mantenemos las tres líneas — partículas, carbón y HEPA — claramente separadas en la ficha técnica.',
        },
        {
          q: '¿Con qué frecuencia deben reemplazarse los filtros de habitáculo en ciudades contaminadas?',
          a: 'En ciudades con tráfico pesado o mucho smog, el intervalo puede reducirse a la mitad frente a mercados de aire limpio. Publicamos un intervalo de cambio realista para que tus clientes reordenen por calendario, y los filtros de carbón se reemplazan cuando la adsorción se satura, no cuando se obstruyen.',
        },
        {
          q: '¿Combinan carbón activado y HEPA en un solo elemento?',
          a: 'Sí — nuestro filtro de habitáculo de gama alta combina una capa compuesta HEPA con carbón activado, brindando remoción de partículas finas y adsorción de olores/gases en una única referencia premium que es la venta adicional más fácil para los distribuidores.',
        },
      ],
      of: [
        {
          q: '¿Cómo protegen las carcasas de acero del óxido en el flete marítimo?',
          a: 'Usamos una película de aceite interior, bolsas selladas y papel VCI (inhibidor de corrosión por vapor) dentro de cajas de doble pared, para que la carcasa llegue limpia incluso después de semanas en un contenedor húmedo.',
        },
        {
          q: '¿Pueden igualar un número OE específico de filtro de aceite?',
          a: 'Sí. Envía el número OE y, idealmente, una muestra; igualamos rosca, junta, ajuste de derivación, medio y dimensiones de la carcasa y entregamos una muestra de preproducción para aprobación.',
        },
      ],
      ff: [
        {
          q: '¿Qué clasificación en micras necesitan los filtros diésel common-rail?',
          a: 'El diésel common-rail moderno normalmente necesita filtración de 2–5 µm para proteger el sistema de inyección de alta presión. Hacemos coincidir la clasificación en micras y la relación beta con la tecnología de inyección — un filtro de 10 µm no sustituye una aplicación common-rail.',
        },
        {
          q: '¿Sus filtros separadores de agua incluyen drenaje?',
          a: 'Nuestros filtros separadores de agua están diseñados con provisión de drenaje para retirar el agua según el calendario de servicio. Esto protege los inyectores diésel de la corrosión en mercados con combustible deficiente.',
        },
        {
          q: '¿Cómo elijo entre filtros de combustible roscados (spin-on) y en línea?',
          a: 'El roscado (spin-on) es una carcasa reemplazable completa para diésel y vehículos comerciales livianos; los filtros en línea se adaptan a sistemas de gasolina y se instalan en línea en la manguera de combustible. Confirmamos el tipo de conexión y la aplicación diésel/gasolina antes de recomendar una referencia.',
        },
      ],
      wb: [
        {
          q: '¿Qué compuesto de caucho usan para climas cálidos?',
          a: 'Caucho natural con recubrimiento de grafito y un compuesto resistente a UV para mercados cálidos y soleados. El compuesto — no el precio de etiqueta — determina si una escobilla barre silenciosamente por meses o deja rayas en semanas.',
        },
        {
          q: '¿Cómo evitan que las escobillas se doblen en tránsito?',
          a: 'Las fundas rígidas y las cajas completas bien orientadas protegen la curvatura, y las escobillas se almacenan planas para que el caucho mantenga su forma. Especificamos la resistencia de la caja para evitar deformaciones bajo el apilamiento en contenedor.',
        },
        {
          q: '¿Qué adaptadores incluyen sus escobillas?',
          a: 'Nuestras escobillas aerodinámicas (beam) e híbridas se envían con un kit multiadaptador que cubre los tipos de brazo comunes (gancho, pasador, bayoneta, cierre lateral), lo que amplía el ajuste por SKU y reduce devoluciones.',
        },
      ],
      tf: [
        {
          q: '¿Cómo confirmo el filtro de transmisión exacto que necesito?',
          a: 'Envía el código de modelo de transmisión (Aisin, ZF, GM, etc.) o el número de filtro OE. Los filtros de transmisión son específicos de la transmisión, así que verificamos nuestra tabla de ajuste antes de cotizar — nunca cotizamos solo por el modelo del vehículo.',
        },
        {
          q: '¿Junta de corcho o de caucho — cuál debo pedir?',
          a: 'Haz coincidir el material de junta OE. El caucho maneja mejor el calor y resiste el endurecimiento; el corcho sirve para aplicaciones de menor calor. Suministramos el material de junta que coincide con el servicio de transmisión original.',
        },
        {
          q: '¿Venden el filtro con la junta del cárter como kit?',
          a: 'Sí — el kit de servicio de filtro con junta es lo que prefieren la mayoría de los talleres, y elimina el riesgo de una junta faltante o no coincidente. También vendemos la malla sola para distribuidores que prefieren esa opción.',
        },
      ],
      led: [
        {
          q: '¿Cómo verifican las afirmaciones de lúmenes y CCT?',
          a: 'Especificamos lúmenes entregados por vatio y una CCT declarada, respaldados por un informe de esfera integradora a pedido. Evitamos las etiquetas infladas de "lúmenes pico" y citamos la salida honesta y sostenida.',
        },
        {
          q: '¿Sus bombillas LED necesitan decodificadores CANbus?',
          a: 'Algunos vehículos modernos activan una advertencia de error de bombilla sin decodificador. Confirmamos el vehículo y asesoramos si se requiere decodificador para evitar parpadeo y errores de tablero antes de que pidas.',
        },
        {
          q: '¿Qué certificaciones proporcionan?',
          a: 'CE y RoHS son la base en cada producto LED, con documentación EMC disponible. Asesoramos sobre las aprobaciones del mercado de destino antes de que te comprometas, porque el cumplimiento — no los lúmenes — es lo que despeja aduanas.',
        },
        {
          q: '¿Cuál es la garantía de las bombillas LED?',
          a: 'Respaldamos el diseño térmico y la calidad del driver con una garantía en nuestros productos LED. El modo de falla contra el que diseñamos es el calor, así que una unidad bien enfriada dura mucho más que una bombilla barata de muchos lúmenes.',
        },
      ],
    },
  },
};
