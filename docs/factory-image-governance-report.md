# Factory 页图片治理 + AI 补图批报告

日期：2026-10-26
范围：`/factory/`（en/es/ar 三语）+ ToS/Disclaimer 站级声明
标记：`factory-img-govern`

## 1. 去重结果

营业执照 `e5ca537e-3754-4988-af6f-5392bda05685.jpg`（1287×873，实拍营业执照扫描件）此前渲染 **×2**：

| 位置 | 渲染方式 | 处置 |
|---|---|---|
| QC 条 `factorySections.qc[0]`（`i===0` doc） | `factory-strip__img--doc` | 移除 |
| cert 网格 `qualification.docs[0]`（`i===0` doc） | `cert-grid__img--doc` | 移除 |

- `factorySections.qc` 3 → 2（只留检测类图 `593e6c21` + `6436649d`）
- `qualification.docs` 3 → 2（只留认证图 `049b6b15` + `b6f8f6b6`）
- 新增单字段 `businessLicense: 'e5ca537e…jpg'`
- 构建产物复扫 `dist/factory/index.html`：全部 origin-images 出现次数 **Counter 全 1**，`e5ca537e` 仅 1 次 ✅

## 2. 营业执照独立块（三语）

新建独立 `.business-license` 区块（背景浅灰卡片 · 大图 `max-width:560px` · `object-fit:contain`），置于 Certification 区块内、cert-banner 之前，**不与其他图混合**。三语标注：

- EN：`Business license — Qinghe County Hongying Auto Parts Co., Ltd.`
- 中文：`营业执照 — 清河县宏盈汽车零部件有限公司`
- AR：`رخصة تجارية — شركة تشينغخه هونغ ينغ لقطع غيار السيارات المحدودة`

标题本地化：en `Business License` / es `Licencia comercial` / ar `رخصة تجارية`。

## 3. 空白审计清单（前 → 后）

全量 img 引用实存核查：**0 缺失 / 0 空白文件**（146 origin-images 全部落盘且可解析）。

| 区块 | 治理前 | 去重后（真实源图） | 补图后（+AI 示意图） |
|---|---|---|---|
| factory-gallery | 6 | 6 | 6 |
| production | 6 | 6 | 6 + 2 |
| qc | 3（含 1 营业执照） | 2 | 2 + 2 |
| warehouse | 5 | 5 | 5 + 2 |
| cert-grid | 3（含 1 营业执照） | 2 | 2 |
| business-license（新） | — | — | 1 |

空白槽位（治理前）：qc 去重后仅 2 张、cert-grid 去重后仅 2 张、warehouse 5 张（1 缺）、production 6 张（满）。cert-grid 为证书/文件类，**不生成 AI 图**（避免伪造认证）；补图落在 production / qc / warehouse 三区块。治理后空槽清零（各区块图数补齐，AI 示意图独立成组）。

补充发现：factory-gallery 中 `7ec71d28`、`97066cc1` 为 200×200 二值（黑白）PNG，系源站 ABOUTUS 图形占位，非实拍，保留但已在报告标注（不属于本批 Seedream 补图范围）。

## 4. Seedream 生成张数与落盘

- 模型：`doubao-seedream-4-5-251128`（`probe --json` 实测可用，2K/16:9）
- 批次：6 任务（≤9），`--format keep` 保留原始大图，`batch_exit=0` 且 **磁盘核验 6/6 落盘**（不信退出码）
- 主题：生产线宽景 ×2 / 质检台 ×2 / 仓储货架 ×2（纯视觉名词 · 无字 · 宽景规避带字物体）
- OCR 复检：5 张归零；`factory-qc-bench-1600x900` 报 `wh/crrereteegeeeet/se` —— 全分辨率 3 档 PSM 复检均为无意义随机令牌，判**假阳性**（任务灯/台面有机形态），保留最干净版本并列入报告
- 精确缩放：PIL 居中裁切（源 2560×1440 → 目标 16:9）+ LANCZOS → **1600×900 WebP**（quality=82, method=6）
- 落盘：`public/images/ai-illustrations/` 6 张（`factory-production-line-wide-1600x900.webp`、`factory-production-line-2-1600x900.webp`、`factory-qc-bench-1600x900.webp`、`factory-qc-bench-2-1600x900.webp`、`factory-warehouse-shelves-1600x900.webp`、`factory-warehouse-shelves-2-1600x900.webp`）

## 5. AI 标注与站级声明

- **逐区块标注（三语）**：每个 AI 示意图组上方 `.ai-note`：
  `Illustrative rendering — not company photography · 示意图，非公司实拍 · رسم توضيحي — ليس تصويراً للشركة`
  AI 图用虚线边框（`1px dashed var(--line-strong)`）与实拍实线区分，alt 均含 `illustrative rendering / ilustración / رسم توضيحي`
- **数据层分离**：`originImages.ts` 新增 `aiIllustrations` 映射（独立 `prefix: '/images/ai-illustrations/'`），真实源图（origin-images）与 AI 示意图分开管理
- **站级声明**：ToS + Disclaimer 知识产权节各补一段（en/es/ar 六页）：
  「Certain images … illustrative editorial imagery generated with AI image tools … not photographs of our actual products, inventory or factory … labelled accordingly」
  构建产物 `dist/**/index.html` 已确认渲染 ✅

## 6. Build & Commit

- `npm run build`：**195 页 · 4.66s · 0 错误** ✅
- 复扫验证：营业执照独立块渲染 / AI 标注渲染 / 站级声明渲染 / 空槽清零 / 无重复引用 全通过
- commit 标记：`factory-img-govern`
