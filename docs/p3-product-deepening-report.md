# Hycarfilter Phase 3 交付报告：产品页深化 + 博客改写 + 图片占位

> 产出日期：2026-10-25 ｜ 作者：内容架构师 + 汽车滤清器行业研究员（小筑 ✍️）
> 仓库：`hycarfilter`（Astro 商业主站）｜ 依据：`docs/hycarfilter-p1-inventory-architecture.md` + `docs/p2-main-site-report.md`

---

## 1. SKU 详情页（22 页 · /products/[model]/）

7 品类 × 22 代表 SKU → **22 个 SKU 详情页**，路由 `/products/{model}/`（与品类落地页共用同一 `[slug].astro` 动态路由，按 slug 是否为品类码/型号自动分流）。

每页统一结构（**所有数值引用 `src/data/products.json`，零硬编码**）：

- **SKU 参数表**：尺寸（长/宽/高/外径/内径/螺纹/垫片，按字段存在与否条件渲染）· 过滤效率 · 滤材 · 材质（壳体/滤材/端盖/密封）· 适用车型 · OE 号 · 交叉对照号 · 包装（内盒/外箱/装箱量/单件净重）· MOQ · 交期 · 认证 · 目标市场 · HS Code —— **数据集唯一值渲染**。
- **采购需求点挖掘**：品类级 5 条采购者真实顾虑（过滤效率虚标 / 适配兼容 / 寿命 / 存储湿度 / 出口包装），主观观点段。
- **选型指南段**：复用品类选型 4 条。
- **主观观点段**：复用品类观点段（hycarfilter editorial 署名）。
- **互链**：面包屑回链品类落地页 + 同品类其余 SKU 相关卡片。

## 2. 品类落地页升级（7 页）

7 个品类页在 P2 基础上新增：

- **SKU 表**：保留，新增 **Details「View →」详情入口列**，直达每个 SKU 详情页。
- **品类图标**：头部新增 SVG 品类图标（占位）。
- **采购顾虑段**：新增「Procurement Concerns」5 条（来自 `procurementContent.ts`）。
- **更多采购问答**：每页在原有 3 条基础上**新增 3–4 条**原创问答（合计 6–7 条），覆盖效率验证/海运包装/样品/OE 匹配/冷启动/水分分离等采购深问。

## 3. 博客深化（8 篇原创改写）

源站 31 篇英文软文 → 精选 **8 篇高价值主题**原创改写扩展，`/blog/` 列表页按 5 主题分组 + `/blog/[slug]/` 详情页：

| # | slug | 主题 | 类别 |
|---|---|---|---|
| 1 | air-filter-how-it-works | 空气滤工作原理与价值 | 空滤知识 |
| 2 | air-filter-replacement-symptoms | 更换周期 + 脏污症状 | 空滤维护 |
| 3 | oil-filter-how-it-works | 机滤旁通阀/止回阀/结构 | 机滤知识 |
| 4 | oil-filter-choosing-guide | 如何选机滤（采购清单） | 机滤选型 |
| 5 | cabin-filter-importance | 空调滤三档（颗粒/活性炭/HEPA） | 空调滤知识 |
| 6 | cabin-filter-maintenance | 更换周期 + 异味 + 存储 | 空调滤维护 |
| 7 | fuel-filter-complete-guide | 燃油滤全攻略（旋装/管路/油水分离） | 燃油滤 |
| 8 | news-frankfurt-2025 | 参展 2025 上海法兰克福汽配展 | 公司新闻 |

每篇末尾挂「Related product line」回链对应品类页，形成内容→产品闭环。内容出口客户角度重写，事实信息（ISO 5011/4548、更换周期、症状、β 比）整合行业常识原创撰写。

## 4. 图片处理统计

| 项 | 数量 |
|---|---|
| 补抓重试成功 | **0 / 123**（CDN 仍 HTTP 567 反盗链阻断，抽样 2 条确认） |
| SVG 占位落盘 | **8**（7 品类图标 + 1 通用产品占位） |
| 待 Seedream 生图 | **29**（7 品类 + 22 SKU，下一批） |

清单：`docs/assets/image-manifest.md`（品类源图/占位/待生图状态表）。

## 5. 数据一致性验证

- **唯一事实源**：`src/data/products.json`（7 品类 / 22 SKU / HS Code / 材质 / 包装 / 出口字段），页面构建期 import 渲染，零复制零硬编码。
- **渲染值 diff 抽检**：抽 3 页（`hy-af-nano` / `hy-of-hd` / `hy-led-bar`，跨品类跨字段形态）→ **54 项值检查全部命中 0 错误**（含 HTML 实体转义归一化，如 `>=` → `&gt;=`）。

## 6. build / commit / push

- **build**：`npm run build` ✅ **47 页**（P2 17 页 + 22 SKU + 8 博客详情 + 博客列表净增），`astro@^5` 静态输出 `dist/`，2.0s。
- **commit**：`p3-*` 分步标记（见 git log）。
- **push**：origin/main。

## 7. 遗留 / 下一步

- Seedream 生图替换 8 个 SVG 占位（下一批）。
- data 库（models/*.json 单值表 + 型号索引 + 交叉引用）→ Phase 4（canonical 数据迁入，主站改接 data 子站同源）。
- tech / market 子站（Phase 5/6）。
- 联系信息仍为源站占位值，上线前需实体确认。

## 8. 中文紧凑报告

**SKU 详情页**：22 页（7 品类 × 2–4 SKU），每页 SKU 参数表 + 采购需求点挖掘（效率虚标/适配/寿命/存储湿度/出口包装）+ 选型指南 + 品类页互链，数值全部引用 products.json。

**品类页升级**：7 页，补 SKU 表详情入口（View →）+ 品类图标 + 采购顾虑段 5 条 + 每页 3–4 条新采购问答（合计 6–7 条）。

**博客改写**：8 篇原创深化（空滤 2 / 机滤 2 / 空调滤 2 / 燃油滤 1 / 公司新闻 1），出口采购角度重写，篇末回链品类页。

**图片处理**：补抓成功 0/123（CDN 反盗链仍 567）；SVG 占位落盘 8；待 Seedream 生图 29（下一批）。

**数据一致性**：抽 3 页渲染值 vs 数据集 diff，54 项值检查 0 错误。

**build**：47 页全绿。**commit**：`p3-*` 分步 + push origin/main。

**报告路径**：`docs/p3-product-deepening-report.md`（本文档）+ `docs/assets/image-manifest.md`（图片清单）。
