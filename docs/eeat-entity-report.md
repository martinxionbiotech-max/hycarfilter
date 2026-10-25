# E-E-A-T 公司主体信息批 — 交付报告

> 批次：`eeat-entity-*` · 检索日期 **2026-10-25** · 研究员：小筑 ✍️（中文产业信息研究员）

## 1. 中文网研究结论

### 1.1 百度百科词条状态

- **不存在**。检索「清河县汇盈汽车零部件有限公司」在百度百科（baike.baidu.com）未命中任何词条。
- 检索路径：搜狗搜索聚合（索引含百科）、必应 CN 搜索、百度百科 `item/` 与 `search?word=` 直链（返回安全验证/空结果页）。
- **结论（零编造）**：本实体无百度百科词条，故**未添加**百科外链，`sameAs` 字段留空。

### 1.2 工商信息（采用项 + 来源）

| 字段 | 值 | 来源 |
|---|---|---|
| 公司名（中文） | 清河县汇盈汽车零部件有限公司 | 天眼查快照（经搜狗聚合） |
| 公司名（英文） | Qinghe County Huiying Auto Parts Co., Ltd. | 官方名翻译（本批译名） |
| 统一社会信用代码 | 91130534MA0958NT84 | 公众号《2023年第四批拟入库科技型中小企业名单》（2023-06-21，mp.weixin.qq.com） |
| 成立日期 | 2017-10-10 | 天眼查快照 |
| 法定代表人 | 刘风秀 | 天眼查快照 |
| 注册资本 | 100万元人民币 | 天眼查快照 |
| 登记状态 | 存续（在营、开业、在册） | 天眼查快照 |
| 注册地址 | 河北省邢台市清河县闽江街以北、九华山路以西 | 天眼查快照 |
| 经营范围 | 汽车零部件及配件制造；汽车零配件零售；农业机械制造；农业机械销售；货物进出口 | 天眼查快照 |
| 高管 | 刘风秀（执行董事、经理）；王武聚（监事） | 天眼查快照 |

**检索 URL / 来源（检索日期 2026-10-25）：**

- 搜狗搜索 `https://www.sogou.com/web?query=清河县汇盈汽车零部件有限公司`（聚合天眼查企业快照 + 腾讯地图 + 公众号名单）
- 天眼查（tianyancha.com）企业信息快照（经搜狗结果页快照引用，直链需登录/JS，未直连）
- 公众号《2023年第四批拟入库科技型中小企业名单公布！邢台这些企业上榜》mp.weixin.qq.com（含统一社会信用代码，2023-06-21）
- 腾讯地图（经搜狗快照）：九华山路与漓江街交叉口西南方向约 225 米

> 备注：必应 CN 搜索、百度搜索、360 搜索、启信宝（451 地区限制）、Tavily（key 停用）、`web_search`（无 provider）本批次均不可用或被反爬拦截；最终以**搜狗聚合结果**为可检索公开信息源。

### 1.3 未采用 / 未公开项

| 项目 | 处理 | 原因 |
|---|---|---|
| 百度百科外链 | **未添加** | 词条不存在（零编造） |
| `sameAs` 字段 | **留空** | 无可检索权威档案 URL |
| 「since 2013」既有声称 | **保留未改** | 与工商注册 2017-10-10 不一致；属既有品牌历史声称，非本批可核实项，**已标注待用户确认** |
| 联系电话/邮箱 | **未采用工商页电话** | 沿用主站既有联系口径（martin@hycarfilter.com / +86 13323237275） |

## 2. 三语 E-E-A-T 内容放置位置清单

### 2.1 主站（hycarfilter，Astro）

| 位置 | 内容 | 状态 |
|---|---|---|
| `src/data/site.ts` | 新增 `entity` 字段（legalName/legalNameZh/creditCode/addressCn/sameAs/foundedDate/legalRepZh/registeredCapital/businessScopeZh）；`companyName` 更正为 Qinghe County Huiying Auto Parts Co., Ltd.；`companyNameShort` → Huiying Auto Parts | ✅ |
| `src/pages/about.astro`（EN） | 公司主体介绍（Company entity 区块：公司名中英/成立/法人/资本/状态/经营范围/清河集群语境）+ 主体披露规范块（Legal entity disclosure） | ✅ |
| `src/pages/ar/about.astro` | 同上（阿拉伯语） | ✅ |
| `src/pages/es/about.astro` | 同上（西班牙语） | ✅ |
| `src/pages/factory.astro`（EN） | 主体披露规范块（Legal entity disclosure） | ✅ |
| `src/pages/ar/factory.astro` | 同上（阿拉伯语） | ✅ |
| `src/pages/es/factory.astro` | 同上（西班牙语） | ✅ |
| `src/components/Footer.astro` | footer 底部「Legal entity」一行（legalName 中英 + 信用代码），三语标签 | ✅ |
| `src/layouts/BaseLayout.astro` | Organization JSON-LD（legalName/alternateName=hycarfilter/address/sameAs 条件输出），全站 195 页生效 | ✅ |
| `src/i18n/ui.ts` | 新增 UI 键 legalEntity / registeredAddress / creditCode（ar/es） | ✅ |
| `src/data/blogPosts.ts` + `src/i18n/blog-b.ts` | 公司名更正（Hebei Hongying → Qinghe County Huiying） | ✅ |

### 2.2 三子站（MkDocs）

| 位置 | 内容 | 状态 |
|---|---|---|
| `data.hycarfilter/mkdocs.yml` | `copyright` footer 实体行 | ✅ |
| `data.hycarfilter/docs/index.md` | 首页实体口径更正 | ✅ |
| `tech.hycarfilter/mkdocs.yml` | `copyright` footer 实体行 | ✅ |
| `market.hycarfilter/mkdocs.yml` | `copyright` footer 实体行 | ✅ |
| `market.hycarfilter/docs/industry-overview/china-cluster.md` | 实体口径更正 | ✅ |
| `market.hycarfilter/docs/p6-market-site-report.md` | 实体口径更正 | ✅ |

## 3. Organization JSON-LD（字段）

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hycarfilter.com/#organization",
  "name": "Qinghe County Huiying Auto Parts Co., Ltd.",
  "legalName": "Qinghe County Huiying Auto Parts Co., Ltd.",
  "alternateName": ["hycarfilter", "Huiying Auto Parts"],
  "url": "https://hycarfilter.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CN",
    "addressRegion": "河北省",
    "addressLocality": "邢台市清河县",
    "streetAddress": "闽江街以北、九华山路以西"
  }
}
```

- `sameAs`：因百度百科无词条，条件省略（零编造）。
- `address`：采用工商公开注册地址（中文原文，不另编英文译名）。

## 4. 验证结果

- 主站 build ✅（`npm run build`，195 页，0 错误）。
- 三子站 build ✅（`mkdocs build`，各 0 错误）。
- 三语渲染核验 ✅：About EN/AR/ES 均含公司名（中文）、信用代码、注册地址、本地化标题；footer 三语 Legal entity 行落地。
- 四仓 entity 一致性 ✅：legalName / legalNameZh / creditCode / addressCn 四仓同值。

## 5. 待确认项（供用户决策）

1. **「since 2013」vs 工商注册 2017-10-10**：主站既有 `since: 2013`（About/Factory/footer「SINCE 2013」）与本次检索到的工商注册日期 2017-10-10 不一致。本批在实体区块如实标注「成立（注册）2017-10-10」，未改动「since 2013」。若「2013」代表品牌/经营历史、非法人注册，可保留；否则建议统一为 2017。**需用户确认口径。**
2. **联系地址**：主站联系地址为「漓江街 106 号」，工商注册地址为「闽江街以北、九华山路以西」（两块表述，腾讯地图显示位于九华山路与漓江街交叉口一带）。本批实体披露采用工商注册地址，联系地址沿用主站既有值，两者已分别标注。
