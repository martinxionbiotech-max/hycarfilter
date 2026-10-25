# Hycarfilter 四仓内链体系优化 — 链接架构报告

**目标**：以子站 → 主站 dofollow 链接为核心，把 data/tech/market 三个 MkDocs 子站的权重传递给主站（hycarfilter.com）的关键页面（首页 / 产品中心 / 22 SKU 页 / 工厂 / 联系）。

**交付日期**：2026-10-25 · 四仓分批 commit。

---

## 1. 主站 footer「Data Ecosystem」区块（三语）

主站 `src/components/Footer.astro` 新增「Data Ecosystem」列，位于 Contact 列旁，三链接均为 **dofollow**（`rel="noopener"` 无 `nofollow`）+ `target="_blank"`：

| 链接 | 目标 | 文案 EN | AR | ES |
|---|---|---|---|---|
| Data | https://data.hycarfilter.com | Data ↗ | قاعدة البيانات ↗ | Datos ↗ |
| Tech | https://tech.hycarfilter.com | Tech ↗ | التقنية ↗ | Tecnología ↗ |
| Market Insights | https://market.hycarfilter.com | Market Insights ↗ | رؤى السوق ↗ | Perspectivas de mercado ↗ |

区块标题「Data Ecosystem」同步本地化：`منظومة البيانات`（AR）/ `Ecosistema de datos`（ES）。footer 网格由 4 列调整为 5 列（`1.6fr 1fr 1.2fr 1.05fr 1fr`），移动端自适应。文案键新增于 `src/i18n/ui.ts`（`dataEcosystem / dataSubsite / techSubsite / marketSubsite`）。

---

## 2. 子站 → 主站链接图谱（链接数清单）

### 2.1 data.hycarfilter.com → 主站（32 条）

| 位置 | 数量 | 目标 |
|---|---|---|
| announce 条（全站） | 1 | https://hycarfilter.com（Commercial catalog & inquiry） |
| 22 个 SKU 单页 | 22 | https://hycarfilter.com/products/{model}/ |
| 7 个品类页 | 7 | https://hycarfilter.com/products/{slug}/ |
| 首页 index.md | 1 | https://hycarfilter.com/products/ |
| SKU 索引 products/index.md | 1 | https://hycarfilter.com/products/ |

- 链接文案（SKU）：`> **Commercial listing** — View product & request quote on hycarfilter.com →`
- 链接文案（品类）：`> **Commercial listing** — View this category & request a quote on hycarfilter.com →`
- 生成脚本 `scripts/build-db-pages.py` 的 `gen_sku() / gen_category() / gen_index()` 已加入主站链接字段，**未来重新生成仍保留**。
- SKU 页主站链接覆盖：**22 / 22**。

### 2.2 tech.hycarfilter.com → 主站（19 条）

| 位置 | 数量 | 目标 |
|---|---|---|
| announce 条（全站） | 2 | https://hycarfilter.com/factory/ + https://hycarfilter.com/ |
| 生产 6 页 + 检测 6 页底部 | 12 | https://hycarfilter.com/factory/（See factory capability →） |
| 相关品类语境链接 | 5 | air / oil / fuel / cabin 参数页 → 主站对应品类页；production/category-lines → 主站 /products/ |

- 生产页：filter-media / pleating / endcap-bonding / spin-on-assembly / category-lines / equipment。
- 检测页：incoming-inspection / in-process / final-inspection / lab-equipment / defects-prevention / export-inspection。
- 文案：`> **See factory capability** — Production lines, QC & export capability on hycarfilter.com →`

### 2.3 market.hycarfilter.com → 主站（10 条）

| 位置 | 数量 | 目标 |
|---|---|---|
| announce 条（全站） | 1 | https://hycarfilter.com/contact/ |
| 6 个区域报告底部 | 6 | https://hycarfilter.com/products/（Source these products →） |
| 采购指南 3 页 | 3 | https://hycarfilter.com/contact/（Start an inquiry →） |

- 区域报告：regional-reports/index + europe / middle-east / southeast-asia / latin-america / africa。
- 采购指南：index / export-procurement-flow / common-pitfalls。

### 汇总

| 子站 | 子站 → 主站链接数 |
|---|---|
| data | 32 |
| tech | 19 |
| market | 10 |
| **合计** | **61** |

---

## 3. 主站内链审计与强化

### 3.1 断链扫描

`scripts/link-audit.mjs`（新增验证脚本）扫描 `dist/` 全部 195 个 HTML：

- **断链数：0**（修复前 1 处 —— 404 页自引用 `/404/`，因 Astro 输出 `404.html` 而非 `404/index.html` 导致；已通过 `BaseLayout` 新增 `noindex` 属性抑制 404 页的 canonical/hreflang，并让 Header 语言切换器在 404 页回落到本地化首页）。
- **孤儿页：0**（ar/es 404 页按正确语义不计入孤儿页）。

### 3.2 内链链轮（首页 → 品类 → SKU → 博客 → 联系）

| 链路 | 状态 | 说明 |
|---|---|---|
| 首页 → 品类 | ✅ | 7 品类卡片 + 导航 |
| 品类 → SKU | ✅ | SKU 表「View →」 |
| SKU → 品类 | ✅ | 面包屑 + 规格表 Category 链接 |
| SKU → 相关 SKU | ✅ | siblings 相关产品卡片 |
| 品类/SKU → 博客 | ✅ **新增** | 「Related Reading」区块（按 `relatedCategory` 匹配，最多 3 篇） |
| 博客 → 品类 | ✅ | relatedCategory 卡片 |
| 博客 → 联系 | ✅ | InquiryCta + 导航 |
| 全站 → 联系 | ✅ | 导航 CTA + InquiryCta + WhatsApp 浮窗 |

### 3.3 面包屑 / 相关产品 / 相关博客互链

- 面包屑：SKU 页 `Products > Category > SKU`、品类页 `Products > Category` 已完整。
- 相关产品：SKU 页 siblings 卡片已完整。
- 相关博客（补强）：`src/pages/products/[slug].astro` 新增「Related Reading」区块，品类页与 SKU 页均渲染，打通「产品 → 博客」反向链接。

---

## 4. 构建验证

| 仓库 | 构建 | 结果 |
|---|---|---|
| hycarfilter（Astro） | `npm run build` | ✅ 195 pages |
| data.hycarfilter（MkDocs） | `mkdocs build` | ✅ |
| tech.hycarfilter（MkDocs） | `mkdocs build` | ✅ |
| market.hycarfilter（MkDocs） | `mkdocs build` | ✅ |

- 主站 footer 三链接三语渲染 ✅（EN/AR/ES 均输出 data/tech/market.hycarfilter.com）
- 子站 announce / SKU 页主站链接渲染 ✅（Material `custom_dir: overrides` 覆写 `announce` block）
- 断链复扫：主站 0 断链 · 0 孤儿；三子站 MkDocs 构建无断链告警。

---

## 5. 变更文件摘要

- **hycarfilter**：`Footer.astro` · `Header.astro` · `BaseLayout.astro` · `ui.ts` · `404.astro`×3 · `products/[slug].astro` · 新增 `scripts/link-audit.mjs`。
- **data.hycarfilter**：`mkdocs.yml` · `scripts/build-db-pages.py` · `docs/index.md` · 22 SKU 页 · 7 品类页 · `products/index.md` · 新增 `overrides/main.html`。
- **tech.hycarfilter**：`mkdocs.yml` · 6 生产页 · 6 检测页 · 4 参数页 · `category-lines.md` · 新增 `overrides/main.html`。
- **market.hycarfilter**：`mkdocs.yml` · 6 区域报告页 · 3 采购指南页 · 新增 `overrides/main.html`。
