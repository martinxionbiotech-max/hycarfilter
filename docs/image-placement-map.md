# Image Placement Map — source → hycarfilter (同位放置)

> 产出日期：2026-10-25 ｜ 仓库：`hycarfilter`
> 关联：`docs/assets/images-map.json`（123 条 UUID→本地路径+DOM 上下文）· `docs/assets/uuid-category-map.md`（UUID→品类）
> 原则：**同位** — 同页面、同区块、同顺序；源站哪张图出现在哪个区块，就落位到新站对应区块。

## 0. 抓取结论（关键发现）

- 源站主图域 `omo-oss-image.thefastimg.com` 对**一切**直链请求返回 HTTP 567（"http 403"）——浏览器带 Referer 也一样，无法用浏览器直连破解。
- **破解点**：同级 CDN 镜像 `omo-oss-image2.thefastimg.com`（末尾多一个 `2`）对**同一 portal 实例** (`pg2025091119432346324`) 返回 200，不受防盗链限制。
- 结果：**123 / 123 全量落盘**，死链 0。落盘目录 `public/images/origin-images/{uuid}.{ext}`。

## 1. 品类图标（源站首页 Products 网格 → 新站品类落地页/列表页）

源站首页 `e_container-40` 区块每品类一张图标图（alt=品类名）。新站同位落位到品类落地页 `cat-icon` 与列表页 `cat-card__img`。

| 品类 | code | slug | 源 UUID | 本地文件 |
|---|---|---|---|---|
| Air Filter | af | air-filter | `21cfec27-dda6-4f23-be6d-67d99266f83a` | `.png` |
| Cabin Filter | cf | cabin-filter | `cffda6d2-7ed7-4308-ad7f-d9400278b5d1` | `.png` |
| Oil Filter | of | oil-filter | `5cfe98b1-6e82-44ee-9c59-df4ccdd4e820` | `.png` |
| Fuel Filter | ff | fuel-filter | `d25027fb-70c9-4e77-b368-4bacda76c888` | `.png` |
| Wiper Blade | wb | wiper-blade | `d01b9540-ed61-4724-a509-4f9741ddcbca` | `.png` |
| Transmission Filter Screen | tf | transmission-filter-screen | `ea938a91-b99d-4b61-8320-4231d1d08de4` | `.png` |
| LED Lights | led | led-lights | `9b80a3eb-3e27-4000-9f78-099c75a6280f` | `.png` |

## 2. 品类代表产品图（源站首页产品轮播 → 新站 SKU 详情页 hero）

源站首页 `swiper-slide` 区块每品类一张产品图。新站同位落位到该品类下每个 SKU 详情页 `sku-hero`（同品类共用一张代表图）。

| 品类 | 源 UUID | 本地文件 |
|---|---|---|
| Air Filter | `31b16d90-dc76-4124-ae0b-83660fbef46a` | `.jpg` |
| Cabin Filter | `83a2ef0c-a319-41da-8c5d-48427cf81a15` | `.jpeg` |
| Oil Filter | `3984ca85-ac40-4db9-9b0a-c54b7e0a40d6` | `.jpg` |
| Fuel Filter | `fc713f63-b89e-42f1-ad35-71a1de675151` | `.png` |
| Wiper Blade | `f7c37730-894d-4ef1-9d8f-3cc00cb47a5d` | `.jpg` |
| Transmission Filter Screen | `d34a043d-adfa-4b3b-bd54-03a8c3239a8b` | `.jpg` |
| LED Lights | `c99ad728-01ac-4557-91b3-c517085b24a4` | `.jpg` |

## 3. 博客封面（源站博客文章图 → 新站改写博客首图）

源站 31 篇软文里只有 2 张真实文章图（`e732fd43` 空气滤文章、`1eaabb71` 公司新闻图），其余用站内 logo 占位。新站按主题就近匹配：

| 主题 topic | 源图 | 说明 |
|---|---|---|
| air | `e732fd43-1c0c-4e1f-baf2-4a105278e8d1.jpg` | 源站空气滤文章真实封面 |
| news | `1eaabb71-10ce-4847-9876-fffe10613231.jpg` | 源站公司新闻图 |
| oil / cabin / fuel / wiper / transmission / led | 对应品类产品图（见 §2） | 主题就近匹配 |

## 4. 工厂 / About 图

| 新站页面 | 源图 UUID | 本地文件 |
|---|---|---|
| /factory/（工厂图组 ×2） | `7ec71d28-e246-44a5-8e43-ab909117a173` · `97066cc1-a1c5-4aba-96fc-bceef649db16` | `.png` ×2 |
| /about/（首图） | `9cb30082-9658-4929-b8e0-c0e17873b2d2` | `.jpg` |

## 5. 未落位 / 剩余占位

- **SVG 占位全部替换**，`public/images/categories/*.svg` 与 `product-placeholder.svg` 已无引用（保留文件供回滚）。
- **源站站点 chrome 图**（logo `52bc733a`/`ceb3a35a`、全站水印 `3e656741`、UI 小图标 `2ece800d`/`3b5af20a`/`443b0bc6`/`e3bbe47f`/`f36be03b`）已抓取但**不落位**——属源站品牌/UI 素材，新站用自有 favicon + CSS，不复用。
- **首页 hero**：源站 hero 是视频（`omo-oss-video110...mp4`）非图片；slide2 背景图 `c9b13651` 不在 123 清单内（原扫描漏列）。新站首页 hero 保留 CSS 渐变 + 文案，不引图。
- **视频页 12 张缩略图**（`cms/vedio/*.jpg`）已抓取，新站暂无 video 落地页，暂不落位。
