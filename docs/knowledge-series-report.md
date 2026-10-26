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
