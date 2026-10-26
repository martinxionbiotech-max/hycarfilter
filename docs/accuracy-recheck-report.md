# Hycarfilter 全内容准确性快速回查报告

> 批次：`accuracy-recheck` · 回查日期 **2026-10-26** · 审计师：小筑 ✍️
> 范围：四仓（`hycarfilter` 主站 + `data/tech/market.hycarfilter` 三子站）· 三语（EN/AR/ES）
> 前序：`eeat-entity-correction`（汇盈 → 宏盈，2026-10-25，已提交 `739a94b`）

---

## 0. 结论摘要

**五维核验全部通过，未发现 P0。** 主体纠错（汇盈 → 宏盈）已正确、完整、一致地落地于四仓 + 三语 + 构建产物，无旧主体残留、无联系残留、无数据漂移、无断链、无 schema 偏差。当场修复 **0 处**（无 P0 可修）。

---

## 1. 五维核验矩阵

| 维度 | 结果 | 说明 |
|---|---|---|
| ① 实体一致性 | ✅ 一致 | 新主体（宏盈/Hongying/91130534MAD6454E17/简长宏/漓江街106号/500万/2023-11-28）四仓一致；旧主体残留 **0** |
| ② 联系一致性 | ✅ 一致 | martin@hycarfilter.com · +86 13323237275 · wa.me/8613323237275 · 「Chat on WhatsApp Now」按钮，footer/contact/浮动按钮全位置一致，无旧联系残留 |
| ③ 数据一致性 | ✅ 一致 | products.json 主站↔data 字节 **0 diff**；抽 5 SKU 数值跨页面/跨语言同值；计数 22/7/20/146 不漂移 |
| ④ 三语内容一致性 | ✅ 一致 | 数值/型号/规格/日期跨 EN/AR/ES 同值（单一数据源渲染，数字不译）；价格/成本数字三语一致 |
| ⑤ 链接与引用 | ✅ 一致 | 主站断链 **0** · 孤页 **0**；三子站 mkdocs 链接完整；子站→主站 22 SKU + 7 品类链接全部有效；sameAs 正确 |

### ① 实体一致性

**新主体（正确值）** 在 `src/data/site.ts` 的 `entity` 块统一定义，全站经 `site.entity.*` / `site.companyName` 动态取值：

| 字段 | 值 | 渲染位置 |
|---|---|---|
| legalName | Qinghe County Hongying Auto Parts Co., Ltd. | Organization JSON-LD · About · Footer · 三子站 copyright |
| legalNameZh | 清河县宏盈汽车零部件有限公司 | About · Footer · 三子站 copyright |
| creditCode | 91130534MAD6454E17 | About · Footer · 三子站 copyright |
| legalRepZh | 简长宏 | About（EN/AR/ES） |
| addressCn | 河北省邢台市清河县漓江街106号 | About · BaseLayout schema streetAddress |
| foundedDate | 2023-11-28 | About（EN/AR/ES） |
| registeredCapital | 500万元人民币 | About（EN/AR/ES） |
| sameAs | https://aiqicha.baidu.com/company_detail_49854926859922 | BaseLayout schema · About 来源行 |

**旧主体残留全扫（应为 0）** —— 目标词 `汇盈 / Huiying / 刘风秀 / MA0958NT84 / 闽江街 / 2017-10-10 / 100万`，四仓（src + dist + docs + site 构建产物）全量 grep：

| 目标词 | 命中 | 位置 |
|---|---|---|
| 汇盈 / Huiying / 刘风秀 / MA0958NT84 / 闽江街 / 2017-10-10 / 100万 | **0**（实际内容） | 仅 `docs/eeat-entity-correction.md` 纠错记录（对比表内旧值，属审计留痕） |

> 唯一命中为纠错批自身的交付记录（`eeat-entity-correction.md` 第 3 节「错误值 → 正确值对照表」），以及已作废并清空正文的 `eeat-entity-report.md`（仅剩 SUPERSEDED 标记）。二者均非渲染内容，属审计留痕，保留。

**残留复扫结论：src / dist / 三子站 docs / 三子站 site / mkdocs.yml 全部为 0。** ✅

### ② 联系一致性

联系事实在 `src/data/site.ts` 单一来源（`email` / `phone` / `whatsappLink`），全站动态取值：

- `martin@hycarfilter.com`：contact（EN/AR/ES）· footer · mailto: form action ✅
- `+86 13323237275`：contact · footer（tel: 链接） ✅
- `wa.me/8613323237275`：contact · footer · WhatsAppFloat 浮动按钮 · InquiryCta ✅
- 「Chat on WhatsApp Now」按钮：EN contact 页与 footer 一致；AR/ES 经 `formWhatsappBtn` 本地化（`تواصل عبر واتساب الآن` / `Chatea por WhatsApp ahora`），链接同一 wa.me ✅

**邮箱残留扫描**：主站仅 `martin@hycarfilter.com`（对外）+ `hy@hongyingfilter.com`（site.ts 工商登记 `registryEmail` 独立字段，非对外联系，与纠错记录第 6.2 条口径一致）。子站命中仅 mkdocs-material 第三方 lunr 库内置邮箱（`martin.donath@squidfunk.com` / `taku@chasen.org`），非本站内容。

**无旧联系残留。** ✅

### ③ 数据一致性

- **products.json 字节 diff**：`hycarfilter/src/data/products.json` ↔ `data.hycarfilter/data/products.json` → **byte-exact 一致**（sha256 `918e98c7…` 两文件相同）。
- **抽 5 SKU 参数值渲染一致性**（品类页表 / SKU 页表 / data 站页 / ar·es 版，均读取同一 products.json）：

| SKU | 过滤效率 | 尺寸 | 装箱量 | MOQ | 交期 | HS Code | 结论 |
|---|---|---|---|---|---|---|---|
| hy-af-nano | >=99.5% | 280×205×H45 | 20 | 500 | 20d | 8421310000 | ✅ 同值 |
| hy-cf-hepa | >=99.97% (H13) | 240×200×H30 | 25 | 1000 | 18d | 8421310000 | ✅ 同值 |
| hy-of-spinon | >=90% @ 20um | H90 OD76 · 3/4-16 UNF | 30 | 1000 | 15d | 8421230000 | ✅ 同值 |
| hy-ff-spinon | >=95% @ 10um | H140 OD85 · M16x1.5 | 20 | 500 | 18d | 8421230000 | ✅ 同值 |
| hy-led-h4 | — | — | 20 | 200 | 15d | 8512209000 | ✅ 同值 |

- **计数一致性**：22 SKU ✅ · 7 品类 ✅ · 20 博客 ✅ · 146 图 ✅。首页 `{totalSkus}` 由 `productsData.products.length` 动态计算，无硬编码漂移风险。

### ④ 三语内容一致性

- 产品规格数值经 `products.json` 单一数据源渲染，`src/i18n/products.ts` 明确「数字/型号/OE/交叉引用/认证/螺纹/HS Code 不翻译」，仅译名称/系列/介质/材料/适用车型/目标市场。
- **价格/成本数字**：全站仅一处示例价格（cabin filter 观点：$0.50 → $1.50），三语同值 —— EN `$0.50 / $1.50` · AR `0.50 دولار / 1.50 دولار` · ES `$0,50 / $1,50`（西语小数逗号为本地化格式，数值同） ✅
- **跨语言同值抽样**：首页 `7 categories · {22} SKUs`（EN/AR/ES 均 7 + 动态 22）· 实体 `2023-11-28` / 信用代码 / 地址（三语动态同值）· 雨刮长度 `22″/24″/26″ + 14–18″` · 变速箱 MOQ `500/20` · LED MOQ `200/20` ✅

### ⑤ 链接与引用

- **主站断链复扫**（`scripts/link-audit.mjs` 对 dist 全量扫描）：HTML 195 个，broken internal targets **0**，orphan pages **0** ✅
- **三子站 mkdocs 链接**：构建产物 site/ 全页面齐备，nav 与交叉引用完整 ✅
- **子站 → 主站链接**：data 站 22 个 SKU 页 + 7 品类页 + products 索引，全部指向 `hycarfilter.com/products/{model}/`，程序化核验 **22/22 有效、无一失配** ✅
- **sameAs**：Organization JSON-LD + About 来源行均指向爱企查宏盈档案 `https://aiqicha.baidu.com/company_detail_49854926859922` ✅

### ⑥ Schema（附）

Organization JSON-LD（`BaseLayout.astro`）：`legalName` = 宏盈英文名 · `address.streetAddress` = 漓江街106号 · `addressLocality` = 邢台市清河县 · `addressRegion` = 河北省 · `sameAs` = 爱企查档案 —— 与新主体一致，三语页共用同一 schema ✅

---

## 2. 发现清单

| # | 级别 | 发现 | 处置 |
|---|---|---|---|
| 1 | 观察项（非 P0） | 品牌史声称 `site.since: 2013`（首页 chip「SINCE 2013」/ footer / About 描述 / 子站 index·china-cluster·p6 报告）与工商成立日期 `2023-11-28` 不一致 | **未改** —— 前序纠错批第 6.1 条已列为「待用户确认」（品牌史 ≠ 法人注册日期）。需用户决策是否统一，回查不越权改内容 |
| 2 | 观察项（非 P0） | contact 表单 Email 输入框占位符 `you@company.com`（EN）/ `tu@empresa.com`（ES）为通用示例占位符，非真实联系残留 | 未改 —— 非旧联系残留、非准确性错误，属示例占位符 |
| 3 | 观察项（非 P0） | 浮动按钮文案「Chat with us Now」（EN，AR/ES 对应「联系我们/现在」）与内嵌按钮「Chat on WhatsApp Now」措辞略异 | 未改 —— 两元素用途不同（浮动 vs 内嵌 CTA），链接同 wa.me，非准确性错误 |

> 无 P0。

## 3. 当场修复记录

**0 处。** 本次回查未发现需要当场修复的 P0 问题 —— 主体纠错（汇盈 → 宏盈）已在前序批正确、完整落地，四仓 + 三语 + 构建产物全部一致。

- build：无需（无改动）
- commit：仅本报告 `docs/accuracy-recheck-report.md`（文档交付，非 accuracy-fix）
- push：四仓均为 `0/0` 同步（HEAD = origin/main）
