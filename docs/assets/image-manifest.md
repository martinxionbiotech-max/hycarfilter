# Hycarfilter 图片资产清单（Phase 3 图片处理）

> 产出日期：2026-10-25 ｜ 仓库：`hycarfilter`
> 关联：`docs/assets/hongying-oss-refetch-list.txt`（123 条源 URL）· `docs/assets/uuid-category-map.md`（UUID→品类映射）

---

## 1. 补抓重试结果（本批）

| 项 | 值 |
|---|---|
| 源图域 | `omo-oss-image.thefastimg.com` |
| 本批重试 | 抽样 2 条直链 `curl -A "Mozilla/5.0"` 探测 |
| 结果 | **仍 HTTP 567（"http 403"）** —— CDN 反盗链阻断依旧，非本机网络问题（此前已确认 GitHub 返回 200） |
| 成功落盘源图 | **0 / 123** |
| 结论 | 死链不改，按预案改用 SVG 占位（生图留待后续批，用 Seedream 技能） |

## 2. 占位图落盘清单（本批产出）

**目录**：`public/images/`

| 文件 | 用途 | 状态 |
|---|---|---|
| `public/images/categories/air-filter.svg` | 空气滤品类图标 | ✅ SVG 占位 |
| `public/images/categories/cabin-filter.svg` | 空调滤品类图标 | ✅ SVG 占位 |
| `public/images/categories/oil-filter.svg` | 机油滤品类图标 | ✅ SVG 占位 |
| `public/images/categories/fuel-filter.svg` | 燃油滤品类图标 | ✅ SVG 占位 |
| `public/images/categories/wiper-blade.svg` | 雨刮品类图标 | ✅ SVG 占位 |
| `public/images/categories/transmission-filter-screen.svg` | 变速箱滤网品类图标 | ✅ SVG 占位 |
| `public/images/categories/led-lights.svg` | LED 车灯品类图标 | ✅ SVG 占位 |
| `public/images/product-placeholder.svg` | SKU 详情页通用产品占位 | ✅ SVG 占位 |

## 3. 品类图片状态（源图 / 占位 / 待生图）

| 品类 | 源图 | SVG 占位 | 待 Seedream 生图 |
|---|---|---|---|
| Air Filter | 0（死链） | ✅ 已用 | ✅ 待生 |
| Cabin Filter | 0（死链） | ✅ 已用 | ✅ 待生 |
| Oil Filter | 0（死链） | ✅ 已用 | ✅ 待生 |
| Fuel Filter | 0（死链） | ✅ 已用 | ✅ 待生 |
| Wiper Blade | 0（死链） | ✅ 已用 | ✅ 待生 |
| Transmission Filter Screen | 0（死链） | ✅ 已用 | ✅ 待生 |
| LED Lights | 0（死链） | ✅ 已用 | ✅ 待生 |
| SKU 详情页（22 个） | — | ✅ 通用占位 | ✅ 待生 |

## 4. 后续生图计划（下一批）

- 用 `seedream-image-generation` 技能为 7 品类 + 22 SKU 生成**无字**产品/场景图。
- 生成后按 `uuid-category-map.md` 归位，替换 `public/images/categories/*.svg` 与 `product-placeholder.svg`。
- 源站 123 条 OSS 图维持死链状态，不恢复直链（除非 CDN 解除反盗链）。

## 5. 统计

- 补抓成功：**0 / 123**
- SVG 占位落盘：**8**（7 品类 + 1 通用产品占位）
- 待 Seedream 生图：**7 品类 + 22 SKU（下一批）**
