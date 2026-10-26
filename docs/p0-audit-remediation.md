# P0 审计整改记录 + P1 产品内容修正清单

- 审计对象：`hycarfilter`（Astro 三语主站，en / ar / es）
- 审计批次：外部审计四项 P0 + P1 产品内容
- 整改日期：2026-10-26
- 整改原则：数据治理 + 内容合规 —— 凡无持证/实测证据的声明一律降格为框架措辞或参考值，不虚构、不虚增。

---

## P0-1 企业身份 / 成立时间 / 制造商声明一致性

**问题**：About 页称「manufacturer since 2013」，而法律实体 2023-11-28 注册，二者未说明关系。

**整改**（commit `0eb1d89`）：

- `src/data/site.ts` 新增 `brandHistory` 字段：
  - `brandFounded: 2013`（品牌/团队渊源）
  - `entityFounded: '2023-11-28'`（法律实体注册日）
  - `statement`（口径说明文案，内部可核对）
  - 另增 `manufacturingModel`（生产模式口径：自有生产为核心 + 部分品类或与协作工厂合作）
- `src/layouts/BaseLayout.astro`：Organization JSON-LD 增加 `foundingDate: 2023-11-28`（schema 层面以法律实体为准）。
- About 三语（en/ar/es）：
  - 事实卡「Founded / SINCE 2013」拆分为「Brand lineage · Since 2013」与「Legal entity · Registered 2023-11-28」两卡。
  - 新增「Brand lineage & legal entity」段落，明确关系（品牌及制造团队业务可追溯至 2013；现法律实体 清河县宏盈汽车零部件有限公司 于 2023-11-28 注册成立；「since 2013」指品牌/团队渊源，非法律实体注册日）。
  - 「Our positioning」段新增生产模式说明（自有生产为核心 + 部分品类或与协作工厂合作，具体来源按订单确认，不虚构具体合作方）。
- Factory 三语（en/ar/es）：「Founded」卡改为「Brand since 2013 · entity 2023-11-28」；实体披露块补充「Founded (registered): 2023-11-28」。
- Footer：「SINCE」改为「BRAND SINCE」；法律实体行补充「Founded: 2023-11-28」。
- 四处口径一致核查（通过，单源 `site.entity`）：
  - 中文名 清河县宏盈汽车零部件有限公司 · 英文名 Qinghe County Hongying Auto Parts Co., Ltd.
  - 地址 河北省邢台市清河县漓江街106号 · 信用代码 91130534MAD6454E17
  - 经营范围（businessScopeZh）与页面 Business scope 译文一致。

---

## P0-2 规格 / 测试 / 认证证据体系

**问题**：22 SKU 关键字段无值类型标注；认证/强声明无证据支撑。

**整改**（commit `9a10fd2`）：

- 新增 `src/data/spec-evidence.json`（22 SKU 全覆盖）+ 生成器 `scripts/build-spec-evidence.mjs`。
  - 每 SKU 关键字段（效率/尺寸/螺纹/介质/材料/适配/MOQ/交期/认证/HS code）逐字段标注：
    - `value_type`：`measured` 实测 / `design-target` 设计目标 / `typical` 典型 / `reference` 参考 / `promotional` 宣传
    - `source`：来源（products.json seed）
    - `status`：确认状态（confirmed / pending-sample / pending-order / unverified）
    - `note`：字段级诚实说明（如「无测试标准/粉尘/粒径」「框架参考，非持证声明」）
  - 值类型分布（按字段计数）：`reference` 为主（效率、螺纹/垫片、适配、OE/交叉引用、认证、HS code、目标市场）；`design-target`（尺寸、介质、材料）；`typical`（MOQ、交期、包装）；当前无 `measured`（诚实：seed 数据均未附实测报告）。
- SKU 详情页（en/ar/es）：参数表关键字段渲染「Data basis: <type>」小标签；表下方统一声明「规格为设计参考值，以正式规格单/样品确认单为准」。
- 认证声明核查（全站 grep ISO 9001 / IATF 16949 / ISO 5011 / SAE J726 / ISO 4548）：
  - `products.json` 的 `certifications` 由「ISO 9001 / IATF 16949 / CE / RoHS」改为框架措辞「ISO 9001 framework / IATF 16949 framework / CE (self-declared) / RoHS (self-declared)」；SKU 页标签由「Certifications」改为「Quality Framework」。
  - 首页/工厂页「100% 气密性检测 / 阀门校准 / 耐温范围 -40°C~+150°C / verified against ISO」等强声明改为「as part of our QC program」「OE/design reference」「reference standard」「selected for … depends on compound」等框架性/流程描述。
  - 复查 grep `certified to | is certified | passed ISO | verified against ISO` 无残留不当持证声明。

---

## P0-3 SKU 数据一致性自动化

**整改**（commit `44ee03d`）：新增 `scripts/validate-catalog.mjs`，六查 + 两项附加核查：

1. 重复型号 —— 通过（22 SKU 无重复）
2. 空字段 / 缺关键字段 —— 通过
3. 异常单位（尺寸/重量/装箱量超出合理范围、内径≥外径）—— 通过
4. MOQ 冲突（MOQ 越出品类预期区间 / MOQ < 装箱量 / MOQ 非装箱量整数倍）—— 0 error，6 warning（MOQ 非装箱量整数倍：hy-af-heavy 200/6、hy-of-spinon 1000/30、hy-of-cartridge 1000/30、hy-of-hd 500/12、hy-of-longlife 1000/30、hy-ff-water 500/12 —— 属信息性提示，非缺陷，未改数据）
5. 详情页缺失 —— 通过（29 个 en 页面 + ar/es SKU 页全部存在）
6. 失效内链 —— 通过（复用 link-audit 解析逻辑）
- 品类页 vs 详情页数值一致性（af/of/cf/ff 四品类全量 diff）—— 通过（HS code 与型号集合一致）
- 询盘表单 + sitemap 同步 —— contact 三语页存在；sitemap 产物在 P0-4 启用后生成。

**基线输出**：`0 error(s), 6 warning(s)`。

---

## P0-4 索引入口核查

**问题**：审计方访问 `/sitemap-index.xml` 得 404 —— sitemap 未启用。

**整改**（commit `68fae83`）：

- `astro.config.mjs` 启用 `@astrojs/sitemap`（`site: https://hycarfilter.com`，三语 en/ar/es）。
- 构建产物确认存在：`dist/sitemap-index.xml` + `dist/sitemap-0.xml`，URL 规范（含 `/ar/`、`/es/` 子路径）。
- 新增 `public/robots.txt`：`Allow: /` + `Sitemap: https://hycarfilter.com/sitemap-index.xml`。
- canonical 全站核查：en `https://hycarfilter.com/…`、ar `/ar/…`、es `/es/…` 各自规范，hreflang x-default/en/ar/es 正确。
- 404 页：静态 `404.html` 正常生成，`noindex` + 无 canonical。
- 重要产品页内链可达性：`validate-catalog` 检查 6 通过，无死链。

---

## P1 产品页内容修正

**空气滤清器页**（`categoryContent.ts` + `i18n/category.ts` en/ar/es，commit `8fbd2ba`）：

- 过滤效率数字加测试条件说明（框架性）：新增 selection 卡「Read efficiency against a test standard」——百分比须引测试方法（ISO 5011 / SAE J726）、测试粉尘、粒径；否则为参考值而非实测。
- 纳米纤维卖点改为条件式：opinion 标题由「The desert market is a nano-fiber market」改为「Nano-fiber is one answer to dust, not the default」，正文列出取决于 介质/容尘/阻力/效率/发动机要求/总成本 六项条件；selection「Match media to dust load」同步条件化。
- 包装声明核为「出口包装标准」措辞：「5-ply export cartons + corner reinforcement + desiccant」改为「export packaging standard … crush-resistant export cartons with corner protection, sealed polybags with desiccant」，不虚增具体层数。
- MOQ 与 products.json 一致（面板 500、圆筒/重型 200–300）——核查通过，未改动。

**机油滤清器页**（同上）：

- 效率「≥90% @20μm」标注参考性质：新增 selection 卡「Read efficiency as a beta ratio」——无测试标准时为参考值，须以 ISO 4548 多通 beta 比 + 粒径 + 测试引用为准。
- 「Long-Life」加限定：新增 selection 卡「Long-Life is a media match, not a promise」——不单凭介质名推导延长换油周期，须结合发动机/油品/使用条件。
- 旁通阀开启压力标注 OE/设计参考：selection「Confirm bypass calibration」改为「opens at a calibrated OE/design reference pressure」。
- 重复/相近采购问答合并：`of` 的 extraFaqs 中「What tests do you run…」「What bypass valve opening pressure…」与 categoryContent FAQ 合并（测试问题并入「How do you test oil filters?」，旁通阀问题并入「What happens if the oil filter bypass opens…」），en/ar/es 同步。

---

## 验证结果

- `npm run build`：195 页构建成功，无错误。
- 抽 5 SKU 页数据标签渲染：`Data basis: reference/design-target/typical` 标签正确输出；spec disclaimer 存在。
- `validate-catalog.mjs` 基线：0 error / 6 warning（MOQ 非装箱量整数倍，信息性）。
- sitemap 产物：`sitemap-index.xml` + `sitemap-0.xml` 存在，URL 规范（含 ar/es）。
- 认证措辞复扫：无残留不当持证/通过测试声明。
- git：5 步 commit（p0-audit-1..4 + p1-product-content）。

## Commit 清单

| commit | 说明 |
| --- | --- |
| `0eb1d89` | P0-1 身份口径 |
| `9a10fd2` | P0-2 证据体系 + 认证措辞 |
| `44ee03d` | P0-3 数据一致性校验脚本 |
| `68fae83` | P0-4 sitemap + robots.txt |
| `8fbd2ba` | P1 空气/机油滤清器页内容修正 |
