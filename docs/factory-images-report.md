# Factory 页图片补全报告（factory-images-20261025）

> 产出日期：2026-10-25 ｜ 仓库：`hycarfilter` ｜ 分支：`main`
> 范围：`/factory/` 页（en / es / ar 三语）生产 / 质检 / 仓储 / 资质区块图片补全
> 关联：`scripts/fetch-factory-images.mjs` · `src/data/originImages.ts` · `docs/assets/factory-images-map.json`

## 0. 结论（TL;DR）

源站 `hongyingfilter.com` 的工厂/资质**内容图本就稀少**（工厂页仅 1 张 hero 横幅、资质页仅 1 张营业执照），此前抓取时已基本拿全。本批的关键补全是：把源站「Corporate Video」页 12 张**工厂实拍视频帧**（此前已落盘但未落位）复用进 `/factory/` 各区块，并补抓资质页 hero 横幅 `8f490fe4`（CSS 背景图，静态 HTML 扫不到）。工厂页区块图数：生产 4→6、质检 1→3、仓储 3→5、资质 0→4（1 横幅 + 3 网格）、顶部图组 2→6。

## 1. 现状审计（补全前）

| 区块 | 现有图 | 数据字段 | 问题 |
|---|---|---|---|
| 顶部工厂图组（factory-gallery） | 2 | `factory` | 偏少 |
| 生产线（Production Lines） | 4 | `factorySections.production` | 偏少 |
| 质检（Quality Control） | 1（营业执照） | `factorySections.qc` | 单图，缺检验场景 |
| 仓储（Warehousing） | 3 | `factorySections.warehouse` | 偏少 |
| 资质（Certification Framework） | **0** | `qualification`（定义但模板未引用） | **整区块无图** |

## 2. 源站全量盘点

镜像 `crawls/hongyingfilter/www.hongyingfilter.com` 全站唯一 OSS 图片 UUID = **176**（`<img>` 标签 151 + CSS `background-image` 25）。

- 已落盘：**146**（原 145 + 本批 1）
- 缺失 30 张分类：
  - **6 张站点 chrome 图标**（logo `ceb3a35a`/`52bc733a`、社交图标 WHATSAPP/EMAIL/WeChat/WhatsApp ×4）——属源站品牌/UI 素材，新站用自有 favicon + CSS，**不落位**（与 `image-placement-map.md` §5 一致）。
  - **24 张 CSS 背景图**——多为页面装饰（26×26 小图标、0.2 透明度纹理、demo 模板图、taglist/Contact/Blog/policy/tagdetail 各页 hero 横幅）。其中**唯一与工厂/资质相关**的是资质页 hero 横幅 `8f490fe4`（1920×300，本批补抓）。另有 2 张 Home 背景（`ecb70bf4`/`f4679477`）返回 404 已死链。

**结论：源站无更多工厂/资质内容图可抓**——资质页只有「1 营业执照 + 1 hero 横幅」两张内容图；工厂的车间/设备/仓库实拍主要藏在「Corporate Video」页 12 张视频缩略图里（此前已全部落盘，本批复用）。

## 3. Playwright 补抓

`scripts/fetch-factory-images.mjs`（新增）访问源站线上 `factory.html` / `qualification.html` / `video.html` / `About.html`，滚动触发 lazy-load + 拦截图片网络响应。

- 实测：源站 CDN `omo-oss-image.thefastimg.com` 对浏览器同样返回 HTTP 567 错误（`text/html`），图片响应被 content-type 过滤，Playwright 拦截不到（与 curl 直连一致）。故线上=镜像的结论通过 **curl 对比 HTML** 确认（`factory/qualification/about` 三页线上 UUID 与镜像完全一致）。
- 新抓图：**1 张**——资质页 hero 横幅 `8f490fe4-35cd-4f5e-bac9-d61c3e92bc8a.jpg`（1920×300，313KB），经 image2 域下载。

## 4. 同位补放

数据层 `originImages.ts` 变更：

- `factory`（顶部图组）2 → 6：追加 4 张工厂视频帧 `4f312703` / `f8f1f0ca` / `0dc4d6ba` / `24eadad0`。
- `factorySections.production` 4 → 6：追加 `f490ba1b` / `3b68e5a1`（车间/产线）。
- `factorySections.qc` 1 → 3：营业执照 `e5ca537e` + 2 张检验帧 `593e6c21` / `6436649d`。
- `factorySections.warehouse` 3 → 5：追加 `1a5d87d4` / `fde4f07d`（仓库/装箱）。
- `qualification`（string → object）资质组：
  - `banner`：`8f490fe4`（资质页 hero 横幅，新增抓）
  - `docs`：营业执照 `e5ca537e` + 2 张资质/展会帧 `049b6b15` / `b6f8f6b6`
- 新增 `factoryTour`（12 张源站视频帧全集，供文档与后续复用）。

模板层（en / es / ar 三语 `factory.astro`）：

- 质检区图带：首张（营业执照）用 `factory-strip__img--doc`（contain 文档式），其余 `cover` 图带。
- 资质区新增**资质图组网格**：顶部全宽 `cert-banner` + `cert-grid` 三张（首张营业执照 contain 文档式，其余 cover）。
- CSS 新增 `.cert-banner` / `.cert-grid` / `.cert-grid__img` / `.cert-grid__img--doc`。

### 资质图组清单

| 角色 | UUID | 来源 |
|---|---|---|
| 资质页 hero 横幅 | `8f490fe4-35cd-4f5e-bac9-d61c3e92bc8a.jpg` | qualification.html CSS 背景（本批新抓） |
| 营业执照 | `e5ca537e-3754-4988-af6f-5392bda05685.jpg` | qualification.html |
| 资质/展会帧 1 | `049b6b15-cc77-4b97-8e66-0493e9239e77.jpg` | video.html |
| 资质/展会帧 2 | `b6f8f6b6-33e3-4faf-b65d-3fee27614d70.jpg` | video.html |

## 5. 验证

- `npm run build`：195 页，成功。
- `/factory/` 渲染核验（en / es / ar 一致）：
  - 顶部图组 2→**6** · 生产 4→**6** · 质检 1→**3** · 仓储 3→**5** · 资质 0→**4**（1 横幅 + 3 网格）· 页面图片总数 **24**。
  - `render-verify.mjs`：`/factory/` 24 imgs，broken=0，`RENDER_VERIFY_OK`。
- 全站缺图复扫：dist 内 `/images/origin-images/` 引用 **137** 个唯一文件，**0 缺失**。
- 落盘图：`public/images/origin-images/` 145 → **146**。

## 6. 区块图数前后对照

| 区块 | 前 | 后 |
|---|---|---|
| 顶部工厂图组 | 2 | 6 |
| 生产线 | 4 | 6 |
| 质检 | 1 | 3 |
| 仓储 | 3 | 5 |
| 资质（横幅+网格） | 0 | 4 |
| **合计** | **10** | **24** |
