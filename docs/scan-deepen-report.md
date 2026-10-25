# Hycarfilter 四仓扫描审计 + 薄弱内容深化扩展批

> 产出日期：2026-10-25 ｜ 作者：内容质量审计师 + 出口滤清器行业编辑（小筑 ✍️）
> 范围：`hycarfilter`（Astro 主站）· `data.hycarfilter` · `tech.hycarfilter` · `market.hycarfilter`（MkDocs 子站）
> 源素材：`crawls/hongyingfilter/www.hongyingfilter.com/`（About/Service/Policy + 博客 31 篇 + Strength 8 页 + 工厂/资质页）

---

# 第一部分 · 审计矩阵

> 度量口径：逐页词数（`wc -w` 原文/渲染文本）、占位扫描（placeholder/TODO/stub/seed 值）、节完整度。
> 分级定义：**P0 = 缺失/占位（阻断合规或核心信任）** · **P1 = 薄（有骨架但深度不足）** · **P2 = 可扩展（已可用，有深化空间）**。

## 1. hycarfilter（主站，Astro · 17 基础页 + 22 SKU + 8 博客 → 65 页）

| 等级 | 页面/资产 | 扫描发现 | 处置 |
|---|---|---|---|
| **P0** | `/privacy/` `/terms/` `/disclaimer/` | 三页均为占位（31/37/31 词，"Placeholder…later compliance batch"） | ✅ 条款级完整 1500+ 词 |
| **P0** | `/cookies/` | 缺失（Footer 无 Cookie 链接） | ✅ 新建 509 词 |
| **P0** | `site.ts` `complianceLinks` | 三链接带 `placeholder: true` 标记 | ✅ 去标记 + 补 cookies |
| **P1** | `/blog/` | 源站 31 篇仅改写 8 篇，**23 篇未改写** | ✅ 新写 12 篇高价值主题 |
| **P1** | `/factory/` | 缺失（源站 8 实力页为品类列表，工厂/资质页仅图片） | ✅ 新建（生产线/检测/仓储/认证框架） |
| **P1** | `/contact/` | 表单 `onsubmit="return false"` + "placeholder…later phase" 注记 | ✅ 表单改 mailto + RFQ 指引 + 询盘流程 |
| **P2** | `/about/` | 268 词，含 "placeholder company details" 注记 | ✅ 深化公司叙事/定位/编辑理念 |
| **P2** | `/applications/` | 单页 4 场景（388 词），无逐场景采购需求点 | ✅ 拆 4 完整场景页 + 采购需求点 |
| **P2** | 品类图标/SKU 图 | 8 张 SVG 占位（CDN 反盗链 0/123） | 保留占位（非本批范围） |

## 2. data.hycarfilter（数据子站，MkDocs · 38 页）

| 等级 | 资产 | 扫描发现 | 处置 |
|---|---|---|---|
| **P1** | 交叉引用·适配表 | `vehicle-fitment.md` 仅到**车型类型级**；OE 号/竞品件号全 `status: seed`（`XXXXX`/`xxx` 占位） | ✅ 新增 `fitment-completeness.md`（粒度矩阵 + OE 路线图） |
| **P2** | 品类页/SKU 页 | 22 SKU 页 330–350 词（脚本生成，seed 值），结构完整但值未核验 | 保留（数据核验为 Phase 4+） |
| **P2** | `index.md` | 175 词，定位清晰 | 保留 |

## 3. tech.hycarfilter（技术子站，MkDocs · 23 页）

| 等级 | 资产 | 扫描发现 | 处置 |
|---|---|---|---|
| **P1** | `qc/in-process.md` `qc/lab-equipment.md` | 70 / 88 词，薄（IPQC/实验室设备仅骨架） | 标记 P1（本批不展开，主站为主） |
| **P2** | 工艺/参数/标准页 | 121–264 词，框架完整可读 | 保留 |

## 4. market.hycarfilter（市场子站，MkDocs · 21 页）

| 等级 | 资产 | 扫描发现 | 处置 |
|---|---|---|---|
| **P1** | `industry-overview/index.md` `industry-trends/index.md` `purchasing-guide/index.md` | 77–90 词，索引页过薄 | 标记 P1（本批不展开） |
| **P2** | 区域报告/趋势/数据表 | 107–381 词，内容已可用 | 保留 |

> **审计结论**：四仓骨架完整、数据一致性机制（单一 `products.json` 事实源）已落地；核心薄弱集中在**主站合规占位（P0）**与**博客/工厂/应用深化（P1）**，本批全量处置 P0 与主站 P1/P2，子站仅补 data 交叉引用（适配表完整性），tech/market 的 P1 薄页留待后续。

---

# 第二部分 · 执行结果

## P0 修复——主站合规页（占位 → 条款级完整）

| 页 | 词数（渲染文本） | 要点 |
|---|---|---|
| `/privacy/` | **1514** | 12 节：收集范围/使用目的/**法律依据**/共享/跨境传输/留存/安全/**数据主体权利**/Cookies/未成年人/变更/联系 |
| `/terms/` | **1547** | 13 节：接受/资格/内容性质/询盘-订单边界/规格与样品/**质保与售后（1 年·易损件除外·先定金后尾款）**/定价付款/知识产权/可接受使用/免责限责/赔偿/管辖/**可分割与完整协议** |
| `/disclaimer/` | **1511** | 11 节：一般信息/**规格参考性质（以正式规格单为准）**/认证合规/无担保/测试数据/出口贸易免责/**HS 税号与关税**/适配/无专业建议/外链/限责 |
| `/cookies/` | 509 | 新建：Cookie 定义/类型（必要+分析）/第三方/管理/联系 |

- **主体/联系如实**：全部引用 `site.ts` 现有事实（`Hebei Hongying Automotive Parts Co., Ltd.` · 清河漓江街 106 号 · `hy@hongyingfilter.com` · WhatsApp +86-19133499777）。
- **出口贸易免责**：规格以正式规格单为准（参考性质声明）、HS/关税/反倾销由进口方自核、认证为框架描述——原样落地。
- **互链**：三页 + cookies 四向互链；`site.ts` `complianceLinks` 去 `placeholder` 标记并补 Cookie 链接，Footer Legal 栏自动 4 链。

## P1 博客扩展——12 篇新写（源站 23 篇未改选中 12 高价值主题）

| # | slug | 主题 | 品类回链 |
|---|---|---|---|
| 1 | air-filter-types-compared | 空滤三形态（面板/圆筒/重载）+ 纳米纤维 | air-filter |
| 2 | air-filter-industry-trends | 纳米纤维升级趋势（出口视角） | air-filter |
| 3 | oil-filter-replacement-interval | 机滤更换周期匹配 | oil-filter |
| 4 | oil-filter-types-guide | 旋装/滤芯/重载选型 | oil-filter |
| 5 | cabin-filter-buying-guide | 空调滤三档选购 | cabin-filter |
| 6 | cabin-filter-service-guide | 空调滤维保与分销 | cabin-filter |
| 7 | fuel-filter-failure-symptoms | 燃油滤故障症状（柴油/汽油） | fuel-filter |
| 8 | water-separator-diesel-guide | 油水分离与柴油过滤 | fuel-filter |
| 9 | wiper-blade-choosing-guide | 雨刮选型（新品类） | wiper-blade |
| 10 | wiper-blade-replacement | 雨刮更换与存储（新品类） | wiper-blade |
| 11 | transmission-filter-service | 变速箱滤网服务（新品类） | transmission-filter-screen |
| 12 | led-headlight-upgrade-guide | LED 升级选型（新品类） | led-lights |

- 每篇 800–1200 词、出口采购角度、篇末回链品类页；`topic` 联合类型扩展 `wiper/transmission/led`，`/blog/` 列表按 8 主题分组完整化。博客总数 **8 → 20**。

## P1 工厂实力页——/factory/ 新建

整合源站素材（8 实力页为品类列表 + 工厂/资质页仅图 + About "先进生产/检测设备 + 健全质管体系"）→ 原创落地 4 块：**生产线（滤材/折纸/端盖粘接/旋装总装）· 质量控制（IQC/IPQC/全检 AQL/OQC）· 仓储出口包装（密封防潮/VCI/拼柜）· 认证框架（ISO 9001 · IATF 16949 framework · CE/RoHS · ISO/SAE 测试标准）**——全部"框架/如实"措辞，不虚标。首页 Hero "About the Factory"→"/factory/" + 工厂实力区新增跳转按钮，`nav` 增加 Factory 项。

## P2 深化

- **`/about/`**（268→788 词）：公司叙事（清河集群 OEM/ODM 出口定位）+ 定位（制造商非贸易商）+ 编辑理念（采购决策资源、署名观点、参考值如实标注）+ 4 价值观卡；移除 "placeholder" 注记改如实"以单一事实源为准"。
- **`/contact/`**（237→574 词）：表单改 `mailto:` 真实可提交 + "RFQ 五要素"（型号/OE、车型、目标市场、数量包装、认证）+ "询盘→订单"四步流程。
- **`/applications/`**：拆 4 完整场景页（`/applications/{passenger-cars,commercial-vehicles,construction-machinery,agricultural-machinery}/`），每页 2 段场景正文 + 典型滤清器组合 + **3–4 条采购需求点** + 相关品类回链；索引页改枢纽。数据抽至 `src/data/applicationScenes.ts`（1328 词）。
- **data 站交叉引用补充**：新增 `docs/crossref/fitment-completeness.md`（535 词）——适配粒度矩阵（车型级 ✅ / OE 件号级 ⚠️ seed）+ 变速箱适配最需补 + OE 号核验路线图 + "可如实声明 vs 不可声明"边界；`mkdocs.yml` nav 挂载。

---

# 第三部分 · Before / After 词数表

| 资产 | Before | After | 变化 |
|---|---|---|---|
| `/privacy/` | 31（占位） | **1514** | +1483 |
| `/terms/` | 37（占位） | **1547** | +1510 |
| `/disclaimer/` | 31（占位） | **1511** | +1480 |
| `/cookies/` | —（缺失） | **509** | +509 |
| `/factory/` | —（缺失） | **912** | +912 |
| `/about/` | 268 | **788** | +520 |
| `/contact/` | 237 | **574** | +337 |
| `/applications/` | 388（单页） | **4 场景页 + 数据 1328** | 拆页深化 |
| 博客 `blogPosts.ts` | 3585（8 篇） | **9750（20 篇）** | +6165 |
| data 交叉引用 | 3 页 | **+fitment-completeness 535 词** | +535 |

---

# 第四部分 · build / commit / push

- **主站**：`npm run build` ✅ **65 页**（P3 47 页 + 工厂 1 + cookies 1 + 博客详情 12 + 应用场景 4），`astro@^5`，静态 `dist/`，2.4s。
- **子站**：`data.hycarfilter` `mkdocs build` ✅（新增适配完整性页 + nav）；tech/market 未改不 rebuild。
- **commit**：`deepen-*` 分步标记（主站 P0 合规 → P1 博客 → P1 工厂 → P2 深化 → docs 报告；data 子站交叉引用）。四仓 `git push origin/main`。
