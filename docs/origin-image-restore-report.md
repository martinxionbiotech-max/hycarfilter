# Origin Image Restore Report（原站图片恢复报告）

> 产出日期：2026-10-25 ｜ 仓库：`hycarfilter`（主站 Astro）
> 任务：源站 thefastimg OSS 图片恢复 + 新站同位放置 + 模板集成 + 收尾

## 一句话结论

源站 123 张图**全量抓回（123/123，死链 0）**：破解点在防盗链镜像域 `omo-oss-image2.thefastimg.com`（主域 `omo-oss-image` 对一切直链返回 567，浏览器带 Referer 也无法破解）。已按**同位原则**落到新站品类图标 / SKU hero / 博客封面 / 工厂 / About，SVG 占位全替换，build 通过，5 页渲染验证全 OK。

## 1. 抓取结果

| 项 | 值 |
|---|---|
| 源图清单 | 123 条（`docs/assets/hongying-oss-refetch-list.txt`） |
| 主域（omo-oss-image） | 123 条全部 HTTP 567（防盗链，浏览器带 Referer 同样 567） |
| 破解镜像域（omo-oss-image2） | 123 条全部 HTTP 200 |
| **成功落盘** | **123 / 123** |
| **死链** | **0**（`docs/assets/dead-list.json` = `[]`） |
| 落盘目录 | `public/images/origin-images/{uuid}.{ext}` |
| 文件校验 | 全部 JPEG/PNG magic bytes 有效（无 567 文本页混入） |
| DOM 上下文 | `docs/assets/images-map.json`：123 条全部含 alt/父容器 class/所在区块 |

## 2. 同位映射表规模

| 映射组 | 数量 | 新站落位 |
|---|---|---|
| 品类图标（源首页 Products 网格 → 品类落地页） | 7 | `cat-icon` + `cat-card__img` |
| 品类代表产品图（源首页轮播 → SKU hero） | 7 | `sku-hero`（22 SKU 按品类就近） |
| 博客封面（源文章图 + 主题就近） | 8 topic | 博客首图 + 博客列表卡 |
| 工厂图 | 2 | `/factory/` 图组 |
| About 图 | 1 | `/about/` 首图 |
| **合计落位** | **25 个引用点** | 详见 `docs/image-placement-map.md` |

## 3. 模板集成点

| 文件 | 改动 |
|---|---|
| `src/data/originImages.ts` | **新增** 单源映射（同值跨站唯一原则） |
| `src/pages/index.astro` | 首页品类卡加真实图标 |
| `src/pages/products/index.astro` | `cat-card__img` SVG→真实品类图标 |
| `src/pages/products/[slug].astro` | `cat-icon` + `sku-hero` SVG→真实图 |
| `src/pages/blog/index.astro` | 博客列表卡加封面图 |
| `src/pages/blog/[slug].astro` | 文章首图加真实封面 |
| `src/pages/factory.astro` | 工厂图组（2 张） |
| `src/pages/about.astro` | About 首图 |
| `scripts/fetch-origin-images.mjs` | **新增** Playwright 抓图脚本（主域 567 记录 + image2 回退 + DOM 上下文） |

## 4. 剩余占位清单

| 项 | 状态 |
|---|---|
| `public/images/categories/*.svg`（7 品类） | 已无引用（文件保留供回滚） |
| `public/images/product-placeholder.svg` | 已无引用（文件保留供回滚） |
| 源站站点 chrome 图（logo/水印/UI 小图标） | 已抓取但不落位（新站用自有 favicon+CSS） |
| 首页 hero | 源站为视频非图片；新站保留 CSS 渐变 |
| 视频页 12 缩略图 | 已抓取，新站暂无 video 落地页 |

## 5. 收尾

- **build**：`npm run build` 通过（65 页，2.89s）
- **渲染验证**：5 页（home / products / 品类 / SKU / blog）`naturalWidth > 0` 全 OK
- **commit**：`origin-images-restore: 123 origin images recovered via omo-oss-image2 + same-position placement`
- **同步**：`git push` → GitHub `martinxionbiotech-max/hycarfilter`（main）
