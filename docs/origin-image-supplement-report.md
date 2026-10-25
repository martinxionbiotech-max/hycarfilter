# Origin Image Supplement Report（原站图片补全批报告）

> 产出日期：2026-10-25 ｜ 仓库：`hycarfilter`（主站 Astro）
> 任务：从源站镜像继续抓取首批未覆盖图片（产品图组 / 博客内图 / 实力页图 / 首页&About 剩余区块），同位补放 + 模板集成 + 收尾

## 一句话结论

首批 123/123 全量落盘后，缺口盘点发现**仍有 22 张内容图未覆盖**（6 张为站点 chrome 图标，不落位）。本次**补抓 22/22（死链 0）**，沿用 `omo-oss-image2.thefastimg.com` 镜像域技巧，全部落盘并同位补放到位：SKU 详情页由「单张品类 hero」升级为「hero + 完整品类图库」，20 篇博客补上「封面 + 1-2 张内文图」，/factory/ 补齐生产线/质检/仓储分区图 + 营业执照，首页补 OEM&ODM hero 与 FAQ 图，About 补第二张图。build 通过（65 页），5 页渲染核验 0 断图，commit 后 push 同步 0/0。

## 1. 缺口盘点（前 → 后）

镜像全量扫描：172 HTML → **151 个唯一 CDN 图引用**（首批已落盘 123）。未覆盖 28 张，其中 **6 张为站点 chrome**（logo `ceb3a35a` + 联系图标 `3b5af20a`/`443b0bc6`/`f36be03b`/`2ece800d`/`e3bbe47f`，新站用自有 favicon+CSS，不落位），**22 张为真实内容图**（本次全部补齐）。

| 页面类型 | 补前覆盖 | 补后覆盖 | 补抓数 |
|---|---|---|---|
| **产品详情页图组**（88 源页 → 22 SKU） | 仅 7 张品类 hero（`categoryProduct`） | 每品类完整图库：af 31 · cf 32 · of 10 · ff 12 · wb 5 · tf 5 · led 6 = **101 张**，落到 22 SKU 详情页 hero+图库区 | **13**（LED 5 · Wiper 4 · Oil 2 · Air 1 · Cabin 1） |
| **博客内图**（31 源软文 → 20 改写博客） | 8 topic 封面（6 topic 用产品图替）+ 无内文图 | 20 篇每篇 **1 封面 + 1–2 张内文图**（新抓 6 张文章封面） | **6**（3 cabin · 2 air · 1 fuel） |
| **实力页 / 工厂** | 2 图（About 区块） | 分区图组：生产线 4 · 质检 1（营业执照）· 仓储 3 = **8 图** | **1**（营业执照 `e5ca537e`） |
| **About** | 1 图 | 2 图（+展会图 `1eaabb71`） | 0（复用已抓） |
| **首页** | hero 无图（CSS 渐变）+ FAQ 无图 | hero=OEM&ODM 图 + FAQ 2 图 | **2**（`c9b13651` · `a2f9a70b`） |

合计：**123 → 145 张**（补抓 22，死链 0）。

## 2. 补抓方式

- 新增 `scripts/gap-analysis.mjs`（镜像 img 引用 vs 已落盘 → 缺口报告 `docs/assets/gap-report.json`）与 `scripts/product-gallery-map.mjs`（88 产品页按品类归组 → 每品类完整图库 `docs/assets/product-gallery-map.json`）。
- 新增 `scripts/fetch-supplement-images.mjs`：读 `docs/assets/supplement-fetch-list.txt`（22 URL），主域 `omo-oss-image` 记 567 后回退 `omo-oss-image2`（200），落盘并更新 `docs/assets/images-map.json`（123 → 145 条）。
- 文件校验：22 张全部 JPEG/PNG magic bytes 有效，无 567 文本页混入。

## 3. 同位补放 + 模板集成点

| 文件 | 改动 |
|---|---|
| `src/data/originImages.ts` | 新增 `categoryGallery`（7 品类完整图库）、`blogImages`（20 篇 slug→{cover, interior[]}）、`factorySections`（production/qc/warehouse）、`qualification`、`homeOem`、`homeFaq`、`aboutSecondary` |
| `src/pages/products/[slug].astro` | SKU 详情新增 **Product Gallery 图库区**（`sku-gallery__grid` 多图展示，hero + 品类图库） |
| `src/pages/blog/[slug].astro` | 文章封面改 per-slug `blogImages`，正文按 section 插入 **内文图**（`post-inline`，1–2 张） |
| `src/pages/blog/index.astro` | 列表卡封面改 per-slug `blogImages[p.slug].cover` |
| `src/pages/factory.astro` | 生产线/质检/仓储三区块加 **`factory-strip` 图组**，质检区展示营业执照 |
| `src/pages/about.astro` | About 加第二张图（展会图 `aboutSecondary`） |
| `src/pages/index.astro` | 首页 hero 换 OEM&ODM 图 + 新增 **Product FAQ 区块**（4 FAQ + 2 图） |
| `scripts/*` | 新增 gap-analysis / product-gallery-map / fetch-supplement-images / render-verify 四个脚本 |

## 4. 占位残留

| 项 | 状态 |
|---|---|
| `public/images/categories/*.svg`（7 品类） | 已无引用（文件保留供回滚） |
| `public/images/product-placeholder.svg` | 已无引用（文件保留供回滚） |
| 源站站点 chrome 图（logo/联系图标/水印） | 已抓取但不落位（新站自有 favicon+CSS） |
| 首页 hero 视频 | 源站为视频非图片；现用 OEM&ODM 图替代 CSS 渐变 |
| 视频页 12 缩略图 | 已抓取，新站暂无 video 落地页，暂不落位 |

## 5. 收尾

- **build**：`npm run build` 通过（65 页，3.54s）
- **渲染核验**：5 页（SKU `hy-af-nano` 32 图 / SKU `hy-led-h4` 7 图 / 博客 `air-filter-how-it-works` 3 图 / 博客 `oil-filter-how-it-works` 3 图 / factory 10 图）`naturalWidth > 0` 全 OK（0 断图）
- **commit**：`origin-images-supplement: 22 more origin images — SKU gallery, blog inline, factory sections`
- **同步**：`git push` → GitHub `martinxionbiotech-max/hycarfilter`（main），ahead/behind 0/0
