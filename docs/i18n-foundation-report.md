# Hycarfilter 多语言改造批 A（基础层）报告

> 日期：2026-10-25 · 分支：main · 仓库：hycarfilter（Astro 5.18 静态站）
> 范围：全站去中文 + 联系方式更新 + i18n 框架 + 首页语言切换 + 框架验证页
> 产出：3 个 commit（`contact-update` → `remove-zh` → `i18n-foundation`）

---

## 1. 联系方式更新点清单

| 项目 | 旧值 | 新值 |
|---|---|---|
| 邮箱 | `hy@hongyingfilter.com` | `martin@hycarfilter.com` |
| 电话（`mobile` → `phone`） | `+86-13930925240` | `+86 13323237275` |
| WhatsApp 号码 | `+86-19133499777` | `+86 13323237275` |
| WhatsApp 链接 | `https://api.whatsapp.com/send?phone=8619133499777&text=Hello` | `https://wa.me/8613323237275` |

改动文件：
- `src/data/site.ts` — 单一事实源，字段重命名 `mobile` → `phone`
- `src/components/Footer.astro`、`src/pages/contact.astro`、`src/pages/disclaimer.astro`、`src/pages/privacy.astro` — 同步 `site.phone` / 新联系方式
- `src/components/InquiryCta.astro` — 复用 `site.whatsappLink`（自动同步）
- **新增 `src/components/WhatsAppFloat.astro`** — 全页右下角绿色官方浮动按钮，文案「Chat with us Now」，链接 `https://wa.me/8613323237275`，RTL 下自动翻到左下角
- `src/layouts/BaseLayout.astro` — 挂载浮动按钮（全站生效）

> 注：`docs/` 历史报告与 `scripts/` 中出现的 `hongyingfilter` 是**爬取源站镜像路径与历史记录**，非本站联系方式，按"历史档案不改动"原则保留。

---

## 2. 中文移除点清单

原则：**数据字段保留，模板不再渲染**（`name_zh` / `zh` / `addressZh` 仍留在数据文件中，供后续参考，但渲染层全部移除）。

| 文件 | 移除点 |
|---|---|
| `src/pages/products/[slug].astro` | 品类页标题旁「/ 中文」后缀（`name_zh`）；SKU 页标题旁「/ 中文」后缀；品类页 `<title>` 中的 `(name_zh)` |
| `src/pages/products/index.astro` | 品类卡片的 `name_zh` 副标题行 |
| `src/pages/applications/index.astro` | 应用场景标题旁「/ 中文」后缀（`s.zh`） |
| `src/pages/applications/[scene].astro` | 场景页标题旁「/ 中文」后缀（`data.zh`） |
| `src/pages/contact.astro` | 地址下方中文地址行（`site.addressZh`） |

复扫结果：`dist/` 全部文本资产（HTML/CSS/JS/JSON/XML）**0 个中文字符**（二进制图片文件内的随机字节不算文本，已排除）。

---

## 3. 语言框架结构

```
src/
├── i18n.ts                     # 语言配置 + URL 映射 + hreflang 生成（单一事实源）
├── pages/
│   ├── *.astro                 # /（en 默认，无前缀）
│   ├── ar/
│   │   ├── index.astro         # /ar/
│   │   └── products/[slug].astro  # /ar/products/{air-filter|hy-af-nano}/
│   └── es/
│       ├── index.astro         # /es/
│       └── products/[slug].astro  # /es/products/{air-filter|hy-af-nano}/
├── layouts/BaseLayout.astro    # <html lang dir> + 页面级 hreflang（alternates prop）
└── components/
    ├── Header.astro            # 语言切换器（右上角下拉）
    ├── TodoBanner.astro        # TODO-i18n 占位提示
    └── WhatsAppFloat.astro     # 联系方式浮动按钮
```

**路由结构**：`/`（en 默认，无前缀）+ `/ar/` + `/es/` 前缀路由。

**astro.config.mjs**：
```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ar', 'es'],
  routing: { prefixDefaultLocale: false },
}
```

**每页 `<html lang>` / RTL**：`BaseLayout` 根据 URL 前缀自动推导（`/ar/` → `lang="ar" dir="rtl"`，`/es/` → `lang="es" dir="ltr"`，其余 → `en`/`ltr`），也可通过 prop 显式覆盖。RTL 基础 CSS 适配见 `global.css`（方向翻转、`.opinion`/`.toc` 边框、FAQ 前缀、列表缩进、表格对齐、CTA 对齐）。

**hreflang 标注框架**：`BaseLayout` 新增 `alternates` prop，渲染 `<link rel="alternate" hreflang="...">`。首页（三语）互指 + `x-default` 指向英文首页。

---

## 4. 语言切换器实现

- 位置：Header 右上角（logo 之后，`margin-left: auto` 靠右，移动端随汉堡按钮一起右置）。
- 交互：`<details>` 无 JS 下拉，显示当前语言原生名（`English` / `العربية` / `Español`），展开列出三语。
- 路径映射：`en` → 无前缀，`ar` → `/ar/`，`es` → `/es/`。
- 兜底策略：当前页有对应翻译版本时**深链**（本批 3 条验证路由），否则回落到对应语言的**首页**，保证切换器永不指向 404。
- 无障碍：`hreflang` / `lang` / `dir` 属性齐全，`aria-label` 标注。

---

## 5. 框架验证页（占位，标注 TODO-i18n）

| 路由 | 说明 |
|---|---|
| `/ar/` · `/es/` | 首页占位（hero + 品类栅格 + CTA，结构完整，内容英文待翻译） |
| `/ar/products/air-filter/` · `/es/products/air-filter/` | 品类页占位（SKU 表） |
| `/ar/products/hy-af-nano/` · `/es/products/hy-af-nano/` | SKU 页占位（规格表） |

每页顶部渲染 `TodoBanner`（橙色虚线提示「TODO-i18n · 内容待翻译」），下一批替换为真实译文后移除。

---

## 6. 验证结果

- ✅ `npm run build` 通过：**71 页**（65 英文 + 6 个 ar/es 验证页）。
- ✅ `lang`/`dir`：`/`→`en/ltr`、`/ar/`→`ar/rtl`、`/es/`→`es/ltr`。
- ✅ 首页 hreflang 三语互指 + `x-default` 正确生成。
- ✅ 语言切换器全页渲染，路径映射正确（en 首页→`/ar/`+`/es/`；ar 首页→`/`+`/es/`）。
- ✅ WhatsApp 浮动按钮全页渲染。
- ✅ `dist/` 文本资产复扫 **0 中文字符**。

---

## 7. Commit 记录

```
731a084 feat(contact): update contact info site-wide + floating WhatsApp button
3fe456d refactor(i18n): stop rendering Chinese name_zh/zh/addressZh site-wide
<this>  feat(i18n): foundation framework + language switcher + ar/es validation pages
```

---

## 8. 下一批（批 B）翻译范围清单：65 页 × 2 语言

批 B 目标：把以下 65 个英文页面**全量翻译**为阿拉伯语（`/ar/`）与西班牙语（`/es/`），替换本批 6 个占位页并补齐其余路由。数据层（`products.json` / `applicationScenes.ts` / `categoryContent.ts` / `procurementContent.ts` / `blogPosts.ts` / 页面内联文案）需各加 `name_ar`/`name_es` 等字段或建独立译文字典。

| # | 路径 | 类型 | 优先级 |
|---|---|---|---|
| 1 | `/` | 首页 | P0（已完成占位） |
| 2 | `/about/` | 静态 | P1 |
| 3 | `/factory/` | 静态 | P1 |
| 4 | `/contact/` | 静态 | P1 |
| 5 | `/products/` | 品类索引 | P1 |
| 6 | `/applications/` | 场景索引 | P2 |
| 7 | `/blog/` | 博客索引 | P2 |
| 8 | `/disclaimer/` | 法律 | P2 |
| 9 | `/privacy/` | 法律 | P2 |
| 10 | `/terms/` | 法律 | P2 |
| 11 | `/cookies/` | 法律 | P2 |
| 12 | `/404` | 兜底 | P3（可保持英文） |
| 13–19 | `/products/air-filter/` · `cabin-filter` · `oil-filter` · `fuel-filter` · `wiper-blade` · `transmission-filter-screen` · `led-lights` | 品类页 ×7 | P0（air-filter 已占位） |
| 20–41 | `/products/hy-af-nano/` … `/products/hy-led-bar/` | SKU 页 ×22 | P0（hy-af-nano 已占位） |
| 42–45 | `/applications/passenger-cars/` · `commercial-vehicles` · `construction-machinery` · `agricultural-machinery` | 场景页 ×4 | P2 |
| 46–65 | `/blog/air-filter-how-it-works/` … `/blog/led-headlight-upgrade-guide/` | 博客页 ×20 | P3 |

**翻译映射表（65 页，ar + es 各一份）**：

| 路径 | en 源 | ar 目标 | es 目标 |
|---|---|---|---|
| `/` | ✓ | `/ar/`（占位✓） | `/es/`（占位✓） |
| `/about/` | ✓ | `/ar/about/` | `/es/about/` |
| `/factory/` | ✓ | `/ar/factory/` | `/es/factory/` |
| `/contact/` | ✓ | `/ar/contact/` | `/es/contact/` |
| `/products/` | ✓ | `/ar/products/` | `/es/products/` |
| `/products/air-filter/` | ✓ | `/ar/products/air-filter/`（占位✓） | `/es/products/air-filter/`（占位✓） |
| `/products/cabin-filter/` | ✓ | `/ar/products/cabin-filter/` | `/es/products/cabin-filter/` |
| `/products/oil-filter/` | ✓ | `/ar/products/oil-filter/` | `/es/products/oil-filter/` |
| `/products/fuel-filter/` | ✓ | `/ar/products/fuel-filter/` | `/es/products/fuel-filter/` |
| `/products/wiper-blade/` | ✓ | `/ar/products/wiper-blade/` | `/es/products/wiper-blade/` |
| `/products/transmission-filter-screen/` | ✓ | `/ar/products/transmission-filter-screen/` | `/es/products/transmission-filter-screen/` |
| `/products/led-lights/` | ✓ | `/ar/products/led-lights/` | `/es/products/led-lights/` |
| `/products/hy-af-nano/` | ✓ | `/ar/products/hy-af-nano/`（占位✓） | `/es/products/hy-af-nano/`（占位✓） |
| `/products/hy-af-panel/` | ✓ | `/ar/products/hy-af-panel/` | `/es/products/hy-af-panel/` |
| `/products/hy-af-round/` | ✓ | `/ar/products/hy-af-round/` | `/es/products/hy-af-round/` |
| `/products/hy-af-heavy/` | ✓ | `/ar/products/hy-af-heavy/` | `/es/products/hy-af-heavy/` |
| `/products/hy-cf-particle/` | ✓ | `/ar/products/hy-cf-particle/` | `/es/products/hy-cf-particle/` |
| `/products/hy-cf-carbon/` | ✓ | `/ar/products/hy-cf-carbon/` | `/es/products/hy-cf-carbon/` |
| `/products/hy-cf-hepa/` | ✓ | `/ar/products/hy-cf-hepa/` | `/es/products/hy-cf-hepa/` |
| `/products/hy-of-spinon/` | ✓ | `/ar/products/hy-of-spinon/` | `/es/products/hy-of-spinon/` |
| `/products/hy-of-cartridge/` | ✓ | `/ar/products/hy-of-cartridge/` | `/es/products/hy-of-cartridge/` |
| `/products/hy-of-hd/` | ✓ | `/ar/products/hy-of-hd/` | `/es/products/hy-of-hd/` |
| `/products/hy-of-longlife/` | ✓ | `/ar/products/hy-of-longlife/` | `/es/products/hy-of-longlife/` |
| `/products/hy-ff-spinon/` | ✓ | `/ar/products/hy-ff-spinon/` | `/es/products/hy-ff-spinon/` |
| `/products/hy-ff-inline/` | ✓ | `/ar/products/hy-ff-inline/` | `/es/products/hy-ff-inline/` |
| `/products/hy-ff-water/` | ✓ | `/ar/products/hy-ff-water/` | `/es/products/hy-ff-water/` |
| `/products/hy-wb-beam/` | ✓ | `/ar/products/hy-wb-beam/` | `/es/products/hy-wb-beam/` |
| `/products/hy-wb-hybrid/` | ✓ | `/ar/products/hy-wb-hybrid/` | `/es/products/hy-wb-hybrid/` |
| `/products/hy-wb-rear/` | ✓ | `/ar/products/hy-wb-rear/` | `/es/products/hy-wb-rear/` |
| `/products/hy-tf-pan/` | ✓ | `/ar/products/hy-tf-pan/` | `/es/products/hy-tf-pan/` |
| `/products/hy-tf-kit/` | ✓ | `/ar/products/hy-tf-kit/` | `/es/products/hy-tf-kit/` |
| `/products/hy-led-h4/` | ✓ | `/ar/products/hy-led-h4/` | `/es/products/hy-led-h4/` |
| `/products/hy-led-h7/` | ✓ | `/ar/products/hy-led-h7/` | `/es/products/hy-led-h7/` |
| `/products/hy-led-bar/` | ✓ | `/ar/products/hy-led-bar/` | `/es/products/hy-led-bar/` |
| `/applications/` | ✓ | `/ar/applications/` | `/es/applications/` |
| `/applications/passenger-cars/` | ✓ | `/ar/applications/passenger-cars/` | `/es/applications/passenger-cars/` |
| `/applications/commercial-vehicles/` | ✓ | `/ar/applications/commercial-vehicles/` | `/es/applications/commercial-vehicles/` |
| `/applications/construction-machinery/` | ✓ | `/ar/applications/construction-machinery/` | `/es/applications/construction-machinery/` |
| `/applications/agricultural-machinery/` | ✓ | `/ar/applications/agricultural-machinery/` | `/es/applications/agricultural-machinery/` |
| `/blog/` | ✓ | `/ar/blog/` | `/es/blog/` |
| `/blog/air-filter-how-it-works/` | ✓ | `/ar/blog/air-filter-how-it-works/` | `/es/blog/air-filter-how-it-works/` |
| `/blog/air-filter-replacement-symptoms/` | ✓ | `/ar/blog/air-filter-replacement-symptoms/` | `/es/blog/air-filter-replacement-symptoms/` |
| `/blog/oil-filter-how-it-works/` | ✓ | `/ar/blog/oil-filter-how-it-works/` | `/es/blog/oil-filter-how-it-works/` |
| `/blog/oil-filter-choosing-guide/` | ✓ | `/ar/blog/oil-filter-choosing-guide/` | `/es/blog/oil-filter-choosing-guide/` |
| `/blog/cabin-filter-importance/` | ✓ | `/ar/blog/cabin-filter-importance/` | `/es/blog/cabin-filter-importance/` |
| `/blog/cabin-filter-maintenance/` | ✓ | `/ar/blog/cabin-filter-maintenance/` | `/es/blog/cabin-filter-maintenance/` |
| `/blog/fuel-filter-complete-guide/` | ✓ | `/ar/blog/fuel-filter-complete-guide/` | `/es/blog/fuel-filter-complete-guide/` |
| `/blog/news-frankfurt-2025/` | ✓ | `/ar/blog/news-frankfurt-2025/` | `/es/blog/news-frankfurt-2025/` |
| `/blog/air-filter-types-compared/` | ✓ | `/ar/blog/air-filter-types-compared/` | `/es/blog/air-filter-types-compared/` |
| `/blog/air-filter-industry-trends/` | ✓ | `/ar/blog/air-filter-industry-trends/` | `/es/blog/air-filter-industry-trends/` |
| `/blog/oil-filter-replacement-interval/` | ✓ | `/ar/blog/oil-filter-replacement-interval/` | `/es/blog/oil-filter-replacement-interval/` |
| `/blog/oil-filter-types-guide/` | ✓ | `/ar/blog/oil-filter-types-guide/` | `/es/blog/oil-filter-types-guide/` |
| `/blog/cabin-filter-buying-guide/` | ✓ | `/ar/blog/cabin-filter-buying-guide/` | `/es/blog/cabin-filter-buying-guide/` |
| `/blog/cabin-filter-service-guide/` | ✓ | `/ar/blog/cabin-filter-service-guide/` | `/es/blog/cabin-filter-service-guide/` |
| `/blog/fuel-filter-failure-symptoms/` | ✓ | `/ar/blog/fuel-filter-failure-symptoms/` | `/es/blog/fuel-filter-failure-symptoms/` |
| `/blog/water-separator-diesel-guide/` | ✓ | `/ar/blog/water-separator-diesel-guide/` | `/es/blog/water-separator-diesel-guide/` |
| `/blog/wiper-blade-choosing-guide/` | ✓ | `/ar/blog/wiper-blade-choosing-guide/` | `/es/blog/wiper-blade-choosing-guide/` |
| `/blog/wiper-blade-replacement/` | ✓ | `/ar/blog/wiper-blade-replacement/` | `/es/blog/wiper-blade-replacement/` |
| `/blog/transmission-filter-service/` | ✓ | `/ar/blog/transmission-filter-service/` | `/es/blog/transmission-filter-service/` |
| `/blog/led-headlight-upgrade-guide/` | ✓ | `/ar/blog/led-headlight-upgrade-guide/` | `/es/blog/led-headlight-upgrade-guide/` |
| `/disclaimer/` | ✓ | `/ar/disclaimer/` | `/es/disclaimer/` |
| `/privacy/` | ✓ | `/ar/privacy/` | `/es/privacy/` |
| `/terms/` | ✓ | `/ar/terms/` | `/es/terms/` |
| `/cookies/` | ✓ | `/ar/cookies/` | `/es/cookies/` |
