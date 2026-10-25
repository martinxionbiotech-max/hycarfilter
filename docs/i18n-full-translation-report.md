# Hycarfilter 多语言改造批 B（完全版全量翻译）报告

> 日期：2026-10-25 · 分支：main · 仓库：hycarfilter（Astro 5 静态站）
> 范围：阿拉伯语（/ar/，RTL）+ 西班牙语（/es/）**全部 65 页内容完整翻译**
> 产出：195 页（65 英文 × 3 语言）· hreflang 三语全页互指 · RTL 全模板 · 0 TODO-i18n 残留 · 0 中文残留

---

## 1. 完成概览

| 指标 | 值 |
|---|---|
| 总页数 | **195**（65 EN + 65 AR + 65 ES） |
| 全量翻译页面 | 65 页 × 2 语言（ar/es 各 65 页） |
| hreflang 覆盖 | **195/195 页**（每页 x-default + en + ar + es 四向互指） |
| RTL 覆盖 | **65/65 ar 页** `dir="rtl"` |
| `<html lang>` | ar→`ar` · es→`es` · en→`en`（全站自动） |
| TODO-i18n 残留 | **0**（TodoBanner 组件已删除） |
| 中文残留（文本资产） | **0**（仅二进制图片字节，已排除） |
| build | ✅ `npm run build` 195 页通过 |

---

## 2. 页数 × 语言覆盖表

| # | 路径 | EN | AR | ES |
|---|---|---|---|---|
| 1 | `/` | ✓ | `/ar/` ✓ | `/es/` ✓ |
| 2 | `/about/` | ✓ | `/ar/about/` ✓ | `/es/about/` ✓ |
| 3 | `/factory/` | ✓ | `/ar/factory/` ✓ | `/es/factory/` ✓ |
| 4 | `/contact/` | ✓ | `/ar/contact/` ✓ | `/es/contact/` ✓ |
| 5 | `/products/` | ✓ | `/ar/products/` ✓ | `/es/products/` ✓ |
| 6–12 | `/products/{air-filter,cabin-filter,oil-filter,fuel-filter,wiper-blade,transmission-filter-screen,led-lights}/` | ✓ | ✓ | ✓ |
| 13–34 | `/products/{hy-af-nano … hy-led-bar}/`（22 SKU） | ✓ | ✓ | ✓ |
| 35 | `/applications/` | ✓ | `/ar/applications/` ✓ | `/es/applications/` ✓ |
| 36–39 | `/applications/{passenger-cars,commercial-vehicles,construction-machinery,agricultural-machinery}/` | ✓ | ✓ | ✓ |
| 40 | `/blog/` | ✓ | `/ar/blog/` ✓ | `/es/blog/` ✓ |
| 41–60 | `/blog/{…}/`（20 篇） | ✓ | ✓ | ✓ |
| 61–64 | `/privacy/` `/terms/` `/disclaimer/` `/cookies/` | ✓ | ✓ | ✓ |
| 65 | `/404` | ✓ | `/ar/404/` ✓ | `/es/404/` ✓ |

> 合计：**65 页 × 3 语言 = 195 页**。全量覆盖，无遗漏。

---

## 3. 翻译规范说明（Translation Spec）

### 3.1 语言定位
- **阿拉伯语（ar）**：现代标准阿拉伯语（MSA），面向中东/北非进口商的专业 B2B 贸易语域。
- **西班牙语（es）**：拉丁美洲西班牙语，面向拉美进口商的专业 B2B 贸易语域。
- 二者均为目标市场采购者阅读质量，非机器直译。

### 3.2 术语表（全站一致，见 `src/i18n/ui.ts` 顶部注释）

| EN | AR | ES |
|---|---|---|
| air filter | فلتر الهواء | filtro de aire |
| cabin filter | فلتر المقصورة | filtro de habitáculo |
| oil filter | فلتر الزيت | filtro de aceite |
| fuel filter | فلتر الوقود | filtro de combustible |
| wiper blade | شفرة المسّاحة | escobilla limpiaparabrisas |
| transmission filter screen | مصفاة فلتر ناقل الحركة | malla de filtro de transmisión |
| LED lights | مصابيح LED | luces LED |
| OE number | رقم OE | número OE |
| cross reference | المرجع المتقاطع | referencia cruzada |
| MOQ | الحد الأدنى للطلب | cantidad mínima de pedido |
| lead time | المهلة الزمنية | plazo de entrega |
| filtration efficiency | كفاءة الترشيح | eficiencia de filtración |
| media (filter) | وسيط الترشيح | medio filtrante |
| bypass valve | صمام التجاوز | válvula de derivación |
| anti-drainback | منع ارتداد الزيت | antirretorno |
| water separator | فاصل الماء | separador de agua |
| OEM/ODM | OEM/ODM（保留） | OEM/ODM（保留） |

### 3.3 按设计不翻译（保留拉丁原文）
- 型号代码（`hy-af-nano` 等）、OE 号（`17801-XXXXX`）、交叉参考件号（`MANN C 24 005` 等）
- 认证（`ISO 9001` / `IATF 16949` / `CE` / `RoHS` / `EMC`）
- 螺纹规格（`3/4-16 UNF`、`M16x1.5`）、垫片代码（`NBR`、`VCI`）
- 测试标准（`ISO 5011` / `SAE J726` / `ISO 4548`）、HS 编码
- 数字、单位（mm/kg/°C/µm/bar/km）、品牌 `hycarfilter`、公司名 `Hebei Hongying Automotive Parts Co., Ltd.`

### 3.4 参数表处理
- 参数表**标签**全部翻译（Model/Series/Dimensions/Filtration Efficiency/Media/… 等 9 列表头 + 15 组 SKU 规格标签）。
- 参数表**数值/技术标识**不变（尺寸、效率、MOQ、交期、认证、HS 码、OE 号、交叉参考）。
- 描述性值（系列名、介质、材料、适用车型、目标市场、内盒/外箱包装）已本地化。

---

## 4. 架构实现

```
src/
├── i18n.ts                     # 语言元数据 + URL 映射 + hreflang 生成（框架层）
├── i18n/
│   ├── ui.ts                   # 共享 UI 文案词典（导航/页脚/CTA/WhatsApp/表头/按钮/面包屑）+ 术语表
│   ├── types.ts                # 本地化内容类型定义
│   ├── products.ts             # 品类+22 SKU 元数据（名称/系列/介质/材料/车型/市场/包装）
│   ├── category.ts             # 7 品类编辑内容（intro/选型/FAQ/观点）
│   ├── procurement.ts          # 采购顾虑(5×7)+补充FAQ(×7)
│   ├── scenes.ts               # 4 应用场景内容
│   ├── blog-a/b/c.ts           # 20 篇博客（分 3 块）
│   └── content.ts              # 聚合入口（content.ar / content.es）
├── layouts/BaseLayout.astro    # <html lang dir> + 本地化标题/描述 + 自动 hreflang
├── components/                 # Header/Footer/WhatsAppFloat/InquiryCta 全站多语
└── pages/
    ├── *.astro                 # /（en 默认，无前缀）
    ├── ar/**/*.astro           # /ar/ 全 65 页
    └── es/**/*.astro           # /es/ 全 65 页
```

**关键改动**：
- `BaseLayout` 自动按 URL 推导 `lang`/`dir`，并在未显式传 `alternates` 时**自动生成 hreflang 四向标注**（覆盖全部 195 页，含 EN 页）。
- `localizedHref` 切换器改为**全量深链**（批 A 仅 3 条验证路由 → 批 B 全部路由）。
- `site.ts` 新增 `taglineAr/Es`、`positioningAr/Es`；`WhatsAppFloat` 文案按语言切换（「تواصل معنا الآن」/「Chatea con nosotros ahora」）。

---

## 5. 验证结果

- ✅ `npm run build`：**195 页**（71 → 195）。
- ✅ `<html lang>`：`/`→en、`/ar/**`→ar、`/es/**`→es。
- ✅ RTL：全部 65 个 ar 页 `dir="rtl"`；es 页 `dir="ltr"`。
- ✅ hreflang：全部 195 页四向互指（x-default/en/ar/es），EN 页也已自动补齐。
- ✅ TODO-i18n 残留：**0**（`TodoBanner.astro` 已删除，无任何引用）。
- ✅ 中文残留复扫：文本资产（HTML/CSS/JS/JSON）**0 个中文字符**（dist 下 144 个命中均为二进制图片随机字节）。
- ✅ 抽样渲染核验（ar 5 + es 5）：
  - ar：`/ar/`、`/ar/products/air-filter/`、`/ar/products/hy-of-hd/`、`/ar/blog/oil-filter-how-it-works/`、`/ar/factory/`
  - es：`/es/`、`/es/products/cabin-filter/`、`/es/products/hy-led-h7/`、`/es/blog/fuel-filter-complete-guide/`、`/es/applications/construction-machinery/`
  - 标题/表头/正文均为目标语言，无英文残留（技术标识除外）。

---

## 6. Commit 记录（按内容块）

```
i18n-site          站点层：site.ts/i18n.ts/ui.ts/types.ts + BaseLayout/Header/Footer/WhatsAppFloat/InquiryCta + 删除 TodoBanner
i18n-content       内容词典：products/category/procurement/scenes/blog-a/b/c/content（ar+es）
i18n-home          首页：/ar/ + /es/（hero/品类/工厂实力 8 点/FAQ/CTA 全译）
i18n-products      品类 7 页 + SKU 22 页：/ar/products/* + /es/products/*
i18n-blog          博客 20 篇 + 列表：/ar/blog/* + /es/blog/*
i18n-applications  应用 5 页：/ar/applications/* + /es/applications/*
i18n-static        工厂 + 关于 + 联系 + 404：ar/es 各 4 页
i18n-legal         法律 4 页：privacy/terms/disclaimer/cookies（ar/es）
i18n-report        交付报告 docs/i18n-full-translation-report.md
```
