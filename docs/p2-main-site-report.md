# Hycarfilter Phase 2 交付报告：主站基础建设 + 规范产品数据集

> 产出日期：2026-10-25 ｜ 作者：内容架构师 + 汽车滤清器行业研究员（小筑 ✍️）
> 仓库：`hycarfilter`（Astro 商业主站）｜ 依据：`docs/hycarfilter-p1-inventory-architecture.md`

---

## 1. 骨架页清单（17 页 · build 全绿）

| 路由 | 页面 | 类型 | 状态 |
|---|---|---|---|
| `/` | 首页（Hero 定位 + 七品类入口 + 工厂实力 8 点 + 询盘 CTA） | 聚合门户 | ✅ |
| `/products/` | 产品中心列表（七品类卡片 + SKU 数 + HS） | 列表 | ✅ |
| `/products/air-filter/` | 空气滤清器落地页 | 品类深度 | ✅ |
| `/products/cabin-filter/` | 空调滤清器落地页 | 品类深度 | ✅ |
| `/products/oil-filter/` | 机油滤清器落地页 | 品类深度 | ✅ |
| `/products/fuel-filter/` | 燃油滤清器落地页 | 品类深度 | ✅ |
| `/products/wiper-blade/` | 雨刮器落地页 | 品类深度 | ✅ |
| `/products/transmission-filter-screen/` | 变速箱滤网落地页 | 品类深度 | ✅ |
| `/products/led-lights/` | LED 车灯落地页 | 品类深度 | ✅ |
| `/applications/` | 应用场景（乘用车/商用车/工程机械/农机） | 场景 | ✅ |
| `/about/` | 公司定位（SINCE 2013 · 清河 · 6 项事实卡） | 信任页 | ✅ |
| `/contact/` | 联系 + 询盘表单占位（如实） | 转化 | ✅ |
| `/blog/` | 博客占位（Phase 3 内容集群） | 占位 | ✅ |
| `/privacy/` `/terms/` `/disclaimer/` | 合规链接占位 | 占位 | ✅ |
| `/404.html` | 404 | 兜底 | ✅ |

**导航**：Home / Products / Applications / About / Blog / Contact（Header）+ Footer 含 Sitemap/Contact/Legal 合规占位。
**站点配置**：`brand=hycarfilter` · 域 `hycarfilter.com` 占位 · logo 占位（`HC` 字标 + `favicon.svg`）· `src/data/site.ts` 单一来源管理品牌/联系/导航事实。

## 2. products.json schema 与 SKU seed 数

**文件**：`src/data/products.json`（canonical 单一数值源，主站 + 三子站共用）。

**Schema（`_schema` 段显式文档）**：
- 标识：`model`（`hy-{品类码}-{系列}`）/ `brand` / `category` / `series` / `name_en` / `name_zh` / `status`
- 尺寸：`dimensions{length_mm,width_mm,height_mm,outer_diameter_mm,inner_diameter_mm,thread,gasket}`
- 性能：`filtration_efficiency` / `media`
- 适配：`applicable_vehicles[]` / `oe_numbers[]` / `cross_reference[]`
- 材质：`materials{housing,media_material,endcap,seal}`
- 包装：`packing{inner_box,outer_carton,carton_qty,net_weight_kg}`
- 出口：`moq` / `lead_time_days` / `certifications[]` / `target_markets[]` / `hs_code`

**品类码**：`af`空气滤 / `cf`空调滤 / `of`机滤 / `ff`燃油滤 / `wb`雨刮 / `tf`变速箱滤网 / `led`LED 车灯。

**SKU seed 数**：**7 品类 × 22 个代表 SKU**（每品类 2–4 个）：
- 空气滤 4（nano/panel/round/heavy）· 空调滤 3（particle/carbon/HEPA）· 机滤 4（spinon/cartridge/hd/longlife）· 燃油滤 3（spinon/inline/water-separator）· 雨刮 3（beam/hybrid/rear）· 变速箱滤网 2（pan/kit）· LED 3（h4/h7/bar）。

**HS Code（写入即唯一）**：空滤/空调滤 `8421310000` · 机滤/燃油滤 `8421230000` · 雨刮 `8512400000` · 变速箱滤网 `8708409990` · LED `8512209000`。

**数据一致性机制落地**：所有型号/规格/HS 值**只在本文件定义一次**，主站页面在构建期 `import` 该 JSON 渲染，零复制；`status:"seed"` 标记占位值，Phase 3/4 深化替换。

## 3. 品类页写作要点（7 页 · 原创 + 采购视角）

每页统一五段结构：**品类介绍 + 选型要点（4 条）+ SKU 表 + 主观观点段 + 采购问答（3 条）**，内容存 `src/data/categoryContent.ts`（与数据分离，中文源碎片整合改写）。代表论点：

- 空滤：中东/北非多沙尘 → 纳米滤材"沙漠级"线，别拼最低价纤维素。
- 机滤：俄区/中亚高寒 → 高回弹密封圈 + 止回阀是"产品本身"，非选配。
- 燃油滤：油水分离是"便宜保险"（防喷油器损坏），锚定可靠性而非单价。
- 空调滤：活性炭/HEPA 是最易 upsell 的提价机会（可视化可售利益）。
- 雨刮：橡胶配方定成败——廉价 UV 脆化橡胶数月即坏，靠配方非贴纸价。
- 变速箱滤网：拼"精确适配"不拼"型号广度"，滤网+垫片套装提高客单。
- LED：合规驱动（CE/RoHS/目的地认证 + 散热设计）才是护城河，非流明虚标。

## 4. 应用页内容

`/applications/`：乘用车（高量比价 · 适配+密封）/ 商用车（长时高负荷 · 重载滤材+油水分离）/ 工程机械（高尘抗振 · 安全层空滤）/ 农机（季节性高尘 · 油水分离+高尘空滤）——每场景配"典型滤清器组合"清单。

## 5. 补图落盘数：0 / 123（CDN 阻断）

- **结果**：123 条外域 OSS 图 **全部补抓失败**。`omo-oss-image.thefastimg.com` 对任意 scheme/UA/Referer/IP 直连返回 **HTTP 567（"http 403"）**——CDN 反盗链阻断，非本机网络问题（GitHub 返回 200）。
- **已交付替代物**：`docs/assets/uuid-category-map.md` —— 123 条 `UUID → 品类/引用页` 映射表（按 P1 品类 ID 精确解析），补图成功后可据此落盘归位。
- **落盘路径**：`assets/`（空，见 `assets/README.md`）。
- **回退计划**：占位图 + Seedream 补图技能（P1 已预案），延后至 Phase 3 前。

## 6. build / 校验 / commit

- **build**：`npm run build` ✅ 17 页，`astro@^5`，静态输出 `dist/`，2.4s。
- **渲染抽检**：首页 Hero+七品类+实力点 ✅ · 产品列表 7 卡 ✅ · 空滤页 4 个 `hy-af-*` SKU 表 + 观点段 + 选型 + FAQ ✅ · 应用页 4 场景 ✅。
- **数据一致性校验**：`node` 校验 7 品类 / 22 SKU / 模型命名 / HS 对齐 / 字段完整 / 每品类 2–4 SKU → **同步 0/0（0 errors / 0 warnings）**。
- **commit**：`p2-*` 分步标记（p2-data / p2-scaffold / p2-pages / p2-docs）＋ push origin/main。

## 7. 遗留 / 下一步

- 图片资产补抓（占位+Seedream 回退）→ Phase 3 前完成。
- 产品详情页 `/products/[model]` + 采购需求挖掘（OE 对照/包装/MOQ/交期/认证）+ 主观观点深化 → Phase 3。
- data 库（models/*.json 单值表 + 型号索引 + 交叉引用）→ Phase 4。
- 联系信息为源站占位值，正式上线前需实体确认（如实保留）。
