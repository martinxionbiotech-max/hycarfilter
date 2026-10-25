# Images ALT 审计 & /products/ 补图报告

> 产出日期：2026-10-25 ｜ 仓库：`hycarfilter` ｜ 标记：`images-alt-products`
> 范围：全站 `<img>` ALT 生成 + `/products/` 页补图（技术 SEO + 内容编辑）

## 0. 结论摘要

- **`/products/` 页补图完成**：7 品类卡片从 64px 图标（`categoryIcon`）升级为真实产品图（`categoryProduct`，4:3 大图）+ 页首新增生产线 lead 图（`factorySections.production[0]`）。导航/链接未变。
- **全站 ALT 合规**：482 个 `<img>` 实例，0 空 alt、0 缺失 alt、0 重复过度；所有图均有**页面语境相关、描述性、唯一、含关键词**的 ALT。
- 装饰性小图标：全站**无**装饰性 `<img>`（logo「HC」、移动端导航汉堡条均为 CSS 文本/色块，非图片），故无需 `aria-hidden` 或 `alt=""` 处理。

## 1. `/products/` 页补图

| 区块 | 之前 | 之后 |
|---|---|---|
| 页首 | 无图 | 生产线 lead 图 `factorySections.production[0]`（16:9，居中，`products-lead`） |
| 品类卡片 ×7 | `categoryIcon` 64×42 小图标，`alt={name_en}` | `categoryProduct` 4:3 大图，`alt="{Category} product photo — {keyword}"` |

- 复用 `originImages.categoryProduct`（首页同款代表图），保证同品类同图一致。
- 链接 `/products/{slug}/`、chip、SKU 计数、HS code 均保持不变。

## 2. ALT 审计清单（前 → 后）

### 2.1 缺失（Missing）

**0 处**。审计前全站所有 `<img>` 均已有 `alt` 属性，无空 alt、无缺 alt 标签。本次未新增缺失。

### 2.2 通用（Generic → 语境化）

| 页面 | 之前 ALT | 之后 ALT |
|---|---|---|
| `/products/` 品类卡 ×7 | `{name_en}` | `{Category} product photo — {keyword}` |
| 品类落地页 hero ×7 | `{name_en} — product range` | `{Category} product line — {keyword}` |
| 首页品类卡 ×7 | `{name_en} — product range` | `{Category} product range — {keyword}` |
| SKU hero ×22 | `{model} — {name_en}` | `{model} {name_en} — {Category} photo` |
| 博客封面（列表 ×21 + 详情 ×21） | `{title}` | `{title} — automotive filter guide cover` |
| 博客内文图 ×31 | `{title} — {heading}` | `{heading} — {topicLabel}`（按段落主题） |
| 关于页首图 ×1 | `hycarfilter manufacturing` | `hycarfilter filter manufacturing facility — Qinghe, Hebei` |
| 工厂质检图 ×1 | `hycarfilter business license` | `hycarfilter quality control — business license & certification` |
| 应用首页 ×1 | `hycarfilter filter production — applications` | `hycarfilter automotive filter production line — filter applications overview` |
| 应用场景页 ×4 | `{title} filter applications` | `{title} — automotive filter application` |

### 2.3 重复（Duplicate → 唯一化）

| 页面 | 之前（同图组共用一条 ALT） | 之后 |
|---|---|---|
| SKU 图库 ×339 | `{Category} product reference`（整组同一条） | `{Category} product photo {n} — {keyword}`（逐张编号唯一） |
| 首页 FAQ 条 ×2 | `hycarfilter product FAQ` | `hycarfilter automotive filter FAQ — image {n}` |
| 工厂图组 ×2 | `hycarfilter factory & production` | `hycarfilter factory & production — photo {n}` |
| 工厂生产线 ×4 | `hycarfilter production line` | `hycarfilter filter production line — photo {n}` |
| 工厂仓储 ×3 | `hycarfilter packing & warehousing` | `hycarfilter export packing & warehousing — photo {n}` |

## 3. ALT 规范表（SEO 对齐）

| 图类型 | ALT 模板 | 示例 |
|---|---|---|
| 首页品类卡 | `{Category} product range — {keyword}` | `Air Filter product range — engine air filter` |
| `/products/` 品类卡 | `{Category} product photo — {keyword}` | `Oil Filter product photo — engine oil filter` |
| 品类落地页 hero | `{Category} product line — {keyword}` | `Fuel Filter product line — fuel filter` |
| SKU hero | `{model} {name_en} — {Category} photo` | `hy-af-nano Nano-Fiber Panel Air Filter — Air Filter photo` |
| SKU 图库 | `{Category} product photo {n} — {keyword}` | `Air Filter product photo 7 — engine air filter` |
| 博客封面 | `{title} — automotive filter guide cover` | `How an Air Filter Actually Protects… — automotive filter guide cover` |
| 博客内文图 | `{heading} — {topicLabel}` | `What the oil filter removes — Oil Filter Knowledge` |
| 工厂分区 | `hycarfilter … — photo {n}` | `hycarfilter filter production line — photo 3` |
| 应用场景 | `{title} — automotive filter application` | `Construction Machinery — automotive filter application` |

**关键词映射**（`src/data/categoryKeywords.ts`，单源真值）：

| code | 选购关键词 |
|---|---|
| af | engine air filter |
| cf | cabin air filter |
| of | engine oil filter |
| ff | fuel filter |
| wb | wiper blade |
| tf | transmission filter screen |
| led | LED headlight |

## 4. 修正数

| 类别 | 数量 |
|---|---|
| 缺失 ALT | 0（审计前即无） |
| 通用 ALT → 语境化 | 89 个模板实例 |
| 重复 ALT → 唯一化 | 350 个实例（图库 339 + FAQ/工厂 11） |
| 新增 `/products/` lead 图 | +1 |
| 装饰性图标（aria-hidden/alt=""） | 0（无装饰性 `<img>`） |

## 5. 验证结果

- **build**：`astro build` 通过，65 pages，0 error。
- **src 解析**：`dist/` 内 124 个唯一本地图片引用全部落盘（`public/images/origin-images/` 145 张），**missing-file refs = 0**。
- **浏览器渲染**（Playwright 滚动加载）：`/products/`（8 图 0 坏）、`/products/hy-af-nano/`（32 图 0 坏）、`/`（10 图 0 坏），**broken = 0**。
- **ALT 复扫**：482 个 `<img>`，**空 alt = 0、缺 alt = 0、无重复过度**。

## 6. 涉及文件

- `src/pages/products/index.astro`（补图 + 卡片 ALT）
- `src/pages/index.astro`（首页品类卡 + FAQ ALT）
- `src/pages/products/[slug].astro`（品类 hero / SKU hero / 图库 ALT）
- `src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`（博客封面 + 内文 ALT）
- `src/pages/factory.astro`（工厂分区 ALT 唯一化）
- `src/pages/applications/index.astro`、`src/pages/applications/[scene].astro`（应用场景 ALT）
- `src/pages/about.astro`（关于页 ALT）
- `src/data/categoryKeywords.ts`（新增：ALT 关键词单源映射）
