# 视觉设计批交付报告 — Hycarfilter 主站

日期：2026-10-25 · 分支：main · 站点：Astro 静态站（65 页） · 工业 B2B 出口风

## 一、设计令牌（src/styles/global.css 全新重写）

### 色板
| 令牌 | 值 | 用途 |
|---|---|---|
| `--navy-950/900/800/700/600/500` | `#07131F → #2A5F8C` | 深海军蓝主色系（800 = `#0F2A43` 主色） |
| `--navy-100/050` | `#D7E2EE / #EBF1F7` | 浅海军蓝（表头/底色） |
| `--orange-500/600/700` | `#E8622C / #C95520 / #B34A1D` | 安全橙强调（CTA / 高亮） |
| `--orange-400/100/050` | `#F27C46 / #FBE3D6 / #FEF4EE` | 橙点缀（hero 强调字 / 悬停 / 浅底） |
| `--ink / --ink-soft / --ink-faint` | `#0E1C29 / #52616F / #7B8A99` | 文本三级 |
| `--bg / --bg-soft / --bg-tint` | `#FFFFFF / #F4F6F9 / #F9FAFC` | 米白/中性灰背景 |
| `--line / --line-strong` | `#E4E9EF / #D3DAE3` | 白卡片细边框 |
| `--shadow-sm/md/lg` | 分层浅影 | 卡片浅阴影（navy 基调 rgba） |

旧变量 `--brand/--brand-dark/--brand-ink/--accent/--accent-dark` 保留为别名，映射到新令牌，保证既有组件样式零改动解析。

### 字体
系统字体栈（无网络依赖，Inter 不加载）：`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`。

标题层级：h1 `clamp(2rem,4.2vw,3rem)` / h2 `clamp(1.5rem,2.8vw,2rem)` / h3 `1.2rem`，字重 700，行高 1.22。

### 间距（8px 节奏）
`--sp-1..16` = 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 px；`.section` 用 `--sp-16`，卡片内边距 `--sp-6`，栅格 gap `--sp-6`。

### 圆角 / 动效
`--radius 10px`（卡）/ `--radius-sm 7px`（按钮）/ `--radius-lg 14px`（hero、CTA 面板）；`--t-fast 0.16s` / `--t-med 0.24s` + `--ease` 缓动。

## 二、组件改动清单

| 组件 | 改动 |
|---|---|
| `Header.astro` | 深海军蓝 sticky 头；橙色渐变 logo 标（HC）；白字导航、橙色激活态、橙色 CTA；新增移动端汉堡菜单（纯 CSS checkbox hack，无 JS），<900px 折叠 |
| `Footer.astro` | 深海军蓝多列（品牌/站点图/联系/法律 4 列）；橙色品牌标；h4 橙色下划线；响应式 820px→2 列、520px→1 列 |
| `InquiryCta.astro` | 全站 CTA 改为深海军蓝渐变面板 + 橙色高亮 eyebrow + 橙 CTA / 白描边双按钮 |
| `favicon.svg` | 品牌色对齐：橙渐变圆角 + 白「HC」 |

## 三、模板覆盖

- 布局 1：`BaseLayout`（引入新 global.css，自动继承）——未改 markup。
- 组件 3：Header / Footer / InquiryCta。
- 页面全部 65 页经 global.css + 共享组件统一：首页、品类 7、SKU 22、博客 20、应用 4、工厂、关于、联系、法律 4、404。
- 页面级定制：首页 hero 改为 navy 渐变 + 橙色强调 + 真实工厂图（复用 `originImages.about`）；博客封面图、首页品类图标 hover 缩放微动效；联系表单聚焦橙。

内容 / 数据 / URL / 逻辑零改动：`src/data/products.json` 与全部内容文件未触碰；图片路径沿用既有 `origin-images` 引用。

## 四、响应式断点

- Header 汉堡折叠：`≤900px`
- Footer：`≤820px`（2 列）→ `≤520px`（1 列）
- Hero / 品类头 / 页面网格：沿用 `≤820px` 折叠为单列
- 卡片网格：`auto-fit minmax()` 自适应（`grid--2/3/4`）
- 移动优先 + `prefers-reduced-motion` 降级

## 五、验证

- `npm run build` 通过，65 页 / 3.06s。
- 抽验 6 页：首页（hero/hero__img/btn--ghost/nav-toggle/cat-card__img）、品类 `/products/air-filter/`（table.spec、cat-head）、SKU `/products/hy-af-nano/`（table.spec、sku-hero）、博客 `/blog/`（post-card ×21）、工厂 `/factory/`（factory-photo ×2）、法律 `/privacy/`（legal、toc）——类名与样式引用均正常。
- 已同步 `origin/main`（0/0 ahead/behind）。

## 六、commit

`design: professional industry template — navy/orange B2B export look`（单提交）。
