# 公司主体纠错批（P0）— 交付记录

> 批次：`eeat-entity-correction` · 纠错日期 **2026-10-25** · 研究员：小筑 ✍️

## 1. 纠错背景

此前 E-E-A-T 批（`docs/eeat-entity-report.md`）按「汇盈」检索到的是**错误主体**（清河县汇盈汽车零部件有限公司 / 刘风秀 / 91130534MA0958NT84 / 成立 2017-10-10 / 注册资本 100 万）。该主体与 `hongyingfilter.com` 域名及邮箱 `hy@hongyingfilter.com` 均不吻合。

用户已提供爱企查权威数据，正确主体如下（**以此为准，零编造**）。

## 2. 正确主体（爱企查权威档案）

| 字段 | 正确值 |
|---|---|
| 公司名（中文） | 清河县宏盈汽车零部件有限公司 |
| 公司名（英文） | Qinghe County Hongying Auto Parts Co., Ltd. |
| 统一社会信用代码 | 91130534MAD6454E17 |
| 法定代表人 | 简长宏 |
| 成立日期 | 2023-11-28 |
| 注册资本 | 500万元人民币（实缴 500 万） |
| 公司类型 | 有限责任公司(自然人独资) |
| 股东 | 简长宏 100% |
| 监事 | 石琳 |
| 注册地址 | 河北省邢台市清河县漓江街106号 |
| 登记机关 | 清河县市场监督管理局 |
| 工商注册号 | 130534000342496 |
| 纳税人识别号 | 91130534MAD6454E17 |
| 电话 | 13930925240 |
| 邮箱 | hy@hongyingfilter.com |
| 网址 | hongyingfilter.com |
| 经营范围 | 汽车零部件及配件制造；汽车零配件批发；汽车零配件零售 |
| sameAs | https://aiqicha.baidu.com/company_detail_49854926859922 |
| 参保人数 | 0 |
| 自身风险 | 0 |

## 3. 错误值 → 正确值 对照表

| 字段 | 错误值（旧） | 正确值（新） |
|---|---|---|
| 公司名（中文） | 清河县汇盈汽车零部件有限公司 | 清河县宏盈汽车零部件有限公司 |
| 公司名（英文） | Qinghe County Huiying Auto Parts Co., Ltd. | Qinghe County Hongying Auto Parts Co., Ltd. |
| 公司简称（英文） | Huiying Auto Parts | Hongying Auto Parts |
| 统一社会信用代码 | 91130534MA0958NT84 | 91130534MAD6454E17 |
| 法定代表人 | 刘风秀 | 简长宏 |
| 成立日期 | 2017-10-10 | 2023-11-28 |
| 注册资本 | 100万元人民币 | 500万元人民币 |
| 注册地址 | 河北省邢台市清河县闽江街以北、九华山路以西 | 河北省邢台市清河县漓江街106号 |
| 经营范围 | 汽车零部件及配件制造；汽车零配件零售；农业机械制造；农业机械销售；货物进出口 | 汽车零部件及配件制造；汽车零配件批发；汽车零配件零售 |

## 4. 全站渲染纠点清单

### 4.1 主站（hycarfilter，Astro）

| 位置 | 纠正内容 |
|---|---|
| `src/data/site.ts` | `companyName` / `companyNameShort` → Hongying；`entity` 全字段（legalName / legalNameZh / creditCode / addressCn / foundedDate / legalRepZh / registeredCapital / businessScopeZh）→ 正确值；新增 `companyType` / `registryPhone` / `registryEmail` |
| `src/layouts/BaseLayout.astro` | Organization JSON-LD `streetAddress` 闽江街…→漓江街106号；sameAs 注释改述爱企查权威档案 |
| `src/pages/about.astro`（EN） | 经营范围译文 → 新经营范围；来源行改述爱企查档案、删除「No Baidu Baike entry」旧措辞 |
| `src/pages/ar/about.astro` | 同上（阿拉伯语） |
| `src/pages/es/about.astro` | 同上（西班牙语） |
| `src/pages/factory.astro` / `ar` / `es` | 披露块经 `site.entity.*` 动态取值，随 site.ts 自动纠正 |
| `src/components/Footer.astro` | 法律行经 `site.entity.*` / `site.companyName` 动态取值，自动纠正 |
| `src/data/blogPosts.ts` | 公司名 Huiying → Hongying |
| `src/i18n/blog-b.ts` | 公司名 Huiying → Hongying（ar/es 两处） |

### 4.2 三子站（MkDocs）

| 位置 | 纠正内容 |
|---|---|
| `data.hycarfilter/mkdocs.yml` | `copyright` footer 实体行（名 + 信用代码） |
| `data.hycarfilter/docs/index.md` | 首页实体口径（宏盈/Hongying） |
| `tech.hycarfilter/mkdocs.yml` | `copyright` footer 实体行 |
| `market.hycarfilter/mkdocs.yml` | `copyright` footer 实体行 |
| `market.hycarfilter/docs/industry-overview/china-cluster.md` | 实体口径（宏盈/Hongying） |
| `market.hycarfilter/docs/p6-market-site-report.md` | 实体口径（宏盈/Hongying） |

## 5. 旧值残留复扫

复扫目标：`刘风秀 / MA0958NT84 / 汇盈 / 闽江街 / Huiying`（含 `91130534MA0958NT84`）。

- 主站 `src/`：**0**
- 三子站 `docs/` + `mkdocs.yml`：**0**
- 全仓（四仓，排除本纠错记录 + 已作废的 `eeat-entity-report.md`）：**0**

## 6. 待确认项（供用户决策）

1. **「since 2013」品牌历史声称**：主站 `site.since: 2013`（About/Factory/Footer/首页 chip「SINCE 2013」）与三子站 `data/index.md`、`market/china-cluster.md`、`market/p6-market-site-report.md` 的「since 2013 / founded in 2013」仍未改动。该声称与工商成立日期 **2023-11-28** 不一致。本纠错批按「品牌历史声称、非法人注册日期」保留未动（不在旧值消除清单内）。是否统一为 2023 需用户确认。
2. **联系邮箱/电话口径**：主站联系口径 `martin@hycarfilter.com` / `+86 13323237275` 与工商登记 `hy@hongyingfilter.com` / `13930925240` 分属「对外联系」与「工商登记」，本批已作为独立字段（`registryEmail` / `registryPhone`）并存，未替换对外联系口径。
