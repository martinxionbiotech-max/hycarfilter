# Hycarfilter Knowledge 系列发布报告

- 批次：knowledge-series（Pillar + 4 Cluster · 英文）
- 仓库：hycarfilter（Astro 三语主站）
- 发布日期：2026-10-26
- 源稿：`docs/source/knowledge-series-brief.md`

## 1. 交付页面（5 篇 + 概览页）

| 类型 | URL | 字数 | 正文节数(H2) | H3 | FAQ | 表格 |
|---|---|---|---|---|---|---|
| Pillar | `/knowledge/automotive-filter-specifications-oe-cross-reference/` | 1592 | 8 | 5 | 5 | 1 |
| Cluster 01 | `/knowledge/match-automotive-filter-by-oe-number/` | 938 | 8 | 9 | 3 | 1 |
| Cluster 02 | `/knowledge/air-filter-dimensions/` | 1088 | 8 | 4 | 4 | 1 |
| Cluster 03 | `/knowledge/oil-filter-thread-gasket-bypass-compatibility/` | 1122 | 9 | 4 | 4 | 1 |
| Cluster 04 | `/knowledge/verify-automotive-filter-cross-reference/` | 1259 | 9 | 5 | 4 | 2 |
| 概览页 | `/knowledge/` | — | — | — | — | — |

特殊内容元素：
- Pillar：B2B 核查清单 7 项静态复选框（含 "0 of 7" 计数 + Reset）· 核查要点表（Consideration / What to confirm）。
- Cluster 01：常见 OE 匹配错误对照表（Mistake / Better approach）。
- Cluster 02：供应商规格对比表（Field / What to record）。
- Cluster 03：Spin-on vs Cartridge 对照表 + 机油滤清器兼容性清单。
- Cluster 04：验证状态标签（Verified / Pending / Rejected）+ 滤清器类别核查表 + 数据库记录结构表。

## 2. 内链图谱（pillar ↔ cluster）

方向性链接边（共 17 条）：

- Pillar → Cluster 01 / 02 / 03 / 04（4 条）
- Cluster 01 → Pillar · Cluster 02 · Cluster 04（3 条）
- Cluster 02 → Pillar · Cluster 01 · Cluster 04（3 条）
- Cluster 03 → Pillar · Cluster 01 · Cluster 04（3 条）
- Cluster 04 → Pillar · Cluster 01 · Cluster 02 · Cluster 03（4 条）

全部链接在构建产物中解析通过（无死链）。

## 3. 品类回链

- Pillar → `/products/`
- Cluster 01 → `/products/`
- Cluster 02 → `/products/air-filter/`
- Cluster 03 → `/products/oil-filter/`
- Cluster 04 → `/products/`

## 4. 数据子站链接

全部 5 篇 + 概览页均链接 `https://data.hycarfilter.com/cross-reference/`（交叉参考主题 → 链接数据库，不复制数据）。

## 5. SEO / 技术实现

- 每页单一 H1（`<h1>` 计数 = 1），H2/H3 层级清晰。
- 唯一 `<title>` 与 `<meta description>`（5 页各不同）。
- canonical：指向对应 `/knowledge/.../` URL。
- 面包屑：Home › Knowledge › 文章标题。
- hreflang：仅 `x-default` + `en`（英文-only 内容，无 ar/es 等价页）。
- Article JSON-LD：headline（H1）/ description / datePublished / dateModified / author（Organization）/ publisher（Organization + logo）。
- footer 新增「Knowledge」入口链接。
- 只发布文章正文，未将 SEO 配置/说明文字写入页面。

## 6. 诚实性守则

- 未编造 OE 对应关系、尺寸或测试结果；螺纹尺寸（M20 × 1.5、3/4-16 UNF）仅作标注示例。
- 交叉参考数据通过链接指向数据子站，未在页面内复制大批记录。

## 7. 构建与提交

- `npm run build`：201 页构建成功（含 6 个 knowledge 页面）。
- `npx astro check`：0 errors。
- git commit：`knowledge-series` 标记。
- 同步状态：main 与 origin/main 0/0。

---

# Hycarfilter Knowledge 系列第二批发布报告（Pillar B + Pillar C）

- 批次：knowledge-series-bc（2 Pillar + 8 Cluster · 英文）
- 仓库：hycarfilter（Astro 三语主站）
- 发布日期：2026-10-26
- 源稿：`docs/source/knowledge-series-brief-2.md`

## 1. 交付页面（10 篇新增）

| 类型 | URL | 字数 | 正文节数(H2) | H3 | FAQ | 表格 | 清单/公式 |
|---|---|---|---|---|---|---|---|
| Pillar B | `/knowledge/automotive-filter-quality-testing/` | 675 | 8 | 0 | 3 | 0 | — |
| B1 | `/knowledge/automotive-air-filter-efficiency-test/` | 772 | 7 | 3 | 3 | 0 | — |
| B2 | `/knowledge/oil-filter-multi-pass-test-results/` | 806 | 8 | 0 | 3 | 1 | 公式×2 |
| B3 | `/knowledge/filter-media-pressure-drop-dust-capacity/` | 811 | 8 | 0 | 3 | 1 | — |
| B4 | `/knowledge/automotive-filter-quality-inspection-checklist/` | 860 | 8 | 0 | 3 | 0 | 清单×1(12项) |
| Pillar C | `/knowledge/automotive-filter-sourcing-oem/` | 609 | 8 | 0 | 3 | 0 | — |
| C1 | `/knowledge/oem-automotive-filter-sourcing/` | 756 | 9 | 0 | 3 | 0 | — |
| C2 | `/knowledge/evaluate-automotive-filter-manufacturer/` | 866 | 9 | 0 | 3 | 1 | — |
| C3 | `/knowledge/automotive-filter-packaging-container-loading/` | 843 | 9 | 0 | 3 | 0 | — |
| C4 | `/knowledge/automotive-filter-rfq-requirements/` | 891 | 10 | 0 | 3 | 1 | RFQ模板×1 |

字数口径：正文所有 block（p/ul/ol/table/checklist/status）+ intro + FAQ 词数（与第一批报告口径不同，本批为同一脚本统一统计）。

特殊内容元素：
- B2：Beta ratio 公式 LaTeX→HTML（`βx = N↑/N↓`、`ηx = (1−1/βx)×100%`，用 `<code>` + `<sub>` 上标排版，居中 `.k-formula` 块）；Beta 200→99.5% 计算示例，明确标注「计算示例非产品性能声明」。
- B4：12 项静态核查清单（交互复选框 + “0 of 12” 计数 + Reset）。
- C4：可复制 RFQ 模板（`.k-template` 预排版块）+ 供应商对比表。
- C2：结构化供应商评估表（9 行）。
- B3：应向制造商索取的文件对照表（7 行）。
- B2：多-pass 报告对比表（8 行）。

## 2. 内链图谱

- Pillar B → B1/B2/B3/B4 + Pillar A + Pillar C（6 条）
- Pillar C → C1/C2/C3/C4 + Pillar A + Pillar B（6 条）
- B1 ↔ Pillar B / B2 / B3 / B4；B2 ↔ Pillar B / B1 / B3 / B4；B3 ↔ Pillar B / B1 / B2 / B4（B1–B3 互链三角）
- B4 → Pillar B / B1 / B2 / B3 + C1 / C2（与 C2 双向、与 C1 双向）
- C1 ↔ Pillar C / C2 / C4 / B4；C2 ↔ Pillar C / C1 / C4 / B4；C3 → Pillar C / C1 / C4；C4 → Pillar C / C1 / C2 / C3 / B4
- Pillar A（第一批）已增补 → Pillar B + Pillar C（三 Pillar 双向互链）

新增方向性内链边合计 46 条；全部在 `dist/` 产物中解析通过（0 死链）。

## 3. 品类 / 工厂 / 联系回链

- 品类：B1→`/products/air-filter/` · B2→`/products/oil-filter/` · B3→`/products/air-filter/` · 其余（B4/C1–C4/两 Pillar）→`/products/`
- 工厂：C2 结论 → `/factory/`（「HycarFilter factory page 可作起点，买家应独立确认」）
- 联系：C1 结论 → `/contact/` · C4 结论 → `/contact/`（另全站 InquiryCta 均带“Send an Inquiry”→ /contact/）

## 4. 子站链接

- 测试主题（Pillar B、B1、B2、B3、B4）→ `https://tech.hycarfilter.com/testing/`（框架内容，不复制）
- 其余（Pillar C、C1–C4、以及第一批 A 系列）→ `https://data.hycarfilter.com/cross-reference/`（默认交叉参考 aside）
- 概览页同时链接两个子站。

## 5. SEO / 技术实现

- 每页单一 H1（`<h1>` 计数 = 1）；唯一 `<title>` 与 `<meta description>`；canonical 指向对应 `/knowledge/.../` URL。
- 面包屑：Home › Knowledge › 文章标题；hreflang 仅 `x-default` + `en`。
- Article JSON-LD：headline（H1）/ description / datePublished / dateModified / author（Organization）/ publisher（Organization + logo）。
- 新增 block 类型 `html`（静态受信 HTML：公式、内链、可复制模板）+ `subsite` 字段（替换默认交叉参考 aside）。
- 概览页 `/knowledge/` 重构为三个 Pillar 系列分组卡片（Pillar A/B/C，各带 4 个 Cluster）。
- 只发布文章正文，未将 SEO 配置/说明文字写入页面。

## 6. 诚实性守则

- 未编造测试结果、认证或生产能力声明；ISO 5011:2025 / ISO 4548-12:2017 / ISPM 15 / ISO 9001 / IATF 16949 均作框架性表述。
- Beta 200→99.5% 仅作计算示例，明确非 HycarFilter 产品性能声明。
- 工厂页 / 认证声明均提示买家独立确认。

## 7. 构建与提交

- `npm run build`：211 页构建成功（+10 个 knowledge 页面）。
- `npx astro check`：0 errors。
- knowledge 目录断链复扫：0。
- git commit：`knowledge-series-bc-*` 标记。
- 同步状态：main 与 origin/main 0/0。
