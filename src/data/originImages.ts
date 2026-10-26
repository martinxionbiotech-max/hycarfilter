// Single source of truth for recovered origin images.
//
// Fetched 2026-10-25 from omo-oss-image2.thefastimg.com — the unblocked CDN sibling
// of the source site (omo-oss-image.thefastimg.com answers HTTP 567 anti-hotlink to
// every direct request). Files land under public/images/origin-images/<uuid>.<ext>
// and are served at /images/origin-images/<uuid>.<ext>.
//
// Mapping is "same-position": each recovered image is seated at the equivalent slot
// in the new site (category icon -> category page icon, product photo -> SKU hero +
// gallery, article image -> blog cover + interior, factory/about image -> factory/about page).
// See docs/image-placement-map.md for the full source -> target table.

export const originImages = {
  /** absolute URL prefix (served from public/) */
  prefix: '/images/origin-images/',

  /** category code -> category icon (source home "Products" grid) */
  categoryIcon: {
    af: '21cfec27-dda6-4f23-be6d-67d99266f83a.png',
    cf: 'cffda6d2-7ed7-4308-ad7f-d9400278b5d1.png',
    of: '5cfe98b1-6e82-44ee-9c59-df4ccdd4e820.png',
    ff: 'd25027fb-70c9-4e77-b368-4bacda76c888.png',
    wb: 'd01b9540-ed61-4724-a509-4f9741ddcbca.png',
    tf: 'ea938a91-b99d-4b61-8320-4231d1d08de4.png',
    led: '9b80a3eb-3e27-4000-9f78-099c75a6280f.png',
  } as Record<string, string>,

  /** category code -> representative product photo (source home product carousel) */
  categoryProduct: {
    af: '31b16d90-dc76-4124-ae0b-83660fbef46a.jpg',
    cf: '83a2ef0c-a319-41da-8c5d-48427cf81a15.jpeg',
    of: '3984ca85-ac40-4db9-9b0a-c54b7e0a40d6.jpg',
    ff: 'fc713f63-b89e-42f1-ad35-71a1de675151.png',
    wb: 'f7c37730-894d-4ef1-9d8f-3cc00cb47a5d.jpg',
    tf: 'd34a043d-adfa-4b3b-bd54-03a8c3239a8b.jpg',
    led: 'c99ad728-01ac-4557-91b3-c517085b24a4.jpg',
  } as Record<string, string>,

  /**
   * category code -> full product gallery (union of every SKU-detail photo in the
   * source's product pages for that category). Used for the SKU detail gallery block.
   * Fetched in the supplement batch (13 new gallery images recovered).
   */
  categoryGallery: {
    af: [
      '9e42fd28-30f6-40fd-8cff-8c959f1acdb9.jpg',
      'b3c1e5fe-f1c9-47b9-b735-2fefd22ea187.jpg',
      'bc66f57c-1ac0-4a52-bbb4-24673989a0ab.jpg',
      '749fd92f-8ea2-42ce-93aa-54a313543fe1.jpeg',
      '8e15aad0-5ba0-473e-bda1-3b7eaeb333e5.jpeg',
      '4e486d07-84bd-4c12-9852-76ec56b73a80.jpeg',
      '3a26494c-8bbe-4fa1-8c98-dc8aca09c43b.jpeg',
      '8f1308f7-3244-4107-9f91-2dde0481b616.jpeg',
      '9d15934d-0461-4af6-84e9-b1553cf0e8b4.jpg',
      'cb9e76be-4540-477f-b76e-a1d98e070e94.jpg',
      '0c400eab-0f5d-42a7-ab15-5d79cf8fe2fe.jpg',
      'f72dd204-1f6f-4ef7-bbe7-56d251425f99.jpg',
      '68722093-fa51-4f51-81c9-93252b5e9fe2.jpg',
      '56309461-ea78-43bf-a8a9-4a5db970803b.jpg',
      '862d87c7-e7de-4aac-8648-a1a4d3d65d19.jpg',
      '20fc8de9-3359-4558-a149-e908b65528f1.jpg',
      '522921a9-f091-4b8a-b0dd-510489e999b4.jpg',
      '02d5c149-5c78-4de8-a72a-b5a58fa27960.jpg',
      '2946d5b7-d091-4ff5-946b-d1419b3ff13f.jpeg',
      'b9328151-6990-4f9f-afbc-a4a5033b78c8.jpeg',
      '9dcfc246-721a-4bb4-a9bf-7b298794456c.jpeg',
      'a0c303c3-2b55-45c2-81b3-05b795fd2528.jpeg',
      '77688bd9-a612-4be9-9c8b-454a01ddde88.jpg',
      '74de55c8-4c55-4ac9-a471-855323ab8556.jpeg',
      '5a657896-ffc8-4fa9-9a89-d0a9d23167e1.jpg',
      '7959bbd3-e374-4f00-8218-5666d21e10b4.jpg',
      'b0a8dbf6-5747-42cd-aeb5-402ff8d139c5.jpg',
      '217ad568-7f8f-4449-89cf-00d97be5fe1e.jpg',
      '233f794d-687a-4e44-b880-f57aec29c52f.jpg',
      '30bfa9f3-fc71-4929-9734-19510c11ab0c.jpg',
      '332bd3e9-ec66-45f9-8e29-93fd95b37c41.png',
    ],
    cf: [
      'bdc84421-4418-4eeb-836c-18186dcaf8aa.jpg',
      '53efa0c0-e09f-415b-9bf2-6bd0e78d1626.png',
      'e2abb9b5-c8df-49e1-b839-3edbd4778d0a.png',
      'dad366aa-1de7-4245-b536-f8811f54ccf4.png',
      '0a638d80-e970-4a43-869c-40ff8cc2c20d.png',
      '95d2ab31-2ad9-4d4b-91db-8a7f4bd79c19.png',
      '236163d9-5cbe-49f8-b961-12c6f87d8677.jpg',
      'c59a7498-2d37-4f2b-9a05-c96384a54889.jpg',
      '089065dd-125d-49f9-bffc-919a2ebeef58.jpg',
      'afc99261-ec19-41af-b046-ed3694b826f8.jpg',
      'cadb061a-e5b4-4cdc-8a9a-d5748410d815.jpg',
      '91426ba1-7b81-4663-9527-3296e6150fe3.jpeg',
      '012a9fa2-7dd8-4703-8d36-3c408dae88a5.jpeg',
      'f2bfc75f-45ae-4fe4-bb6f-80d1890dac74.jpeg',
      '2a72a635-c124-40d1-be1e-242c1d6f1f54.jpeg',
      '92195c3d-acc6-4b72-840d-f0a79c5b2a6e.jpg',
      '6dc5ad83-c232-40ed-b13a-868f4b78cb95.jpg',
      '73542919-b20c-47d9-8bdc-2b662fe0c62d.jpg',
      'd234ce69-f8e4-4228-b98d-d4afeb2a924a.jpg',
      '57ec439e-a47b-4788-948e-4cd738d32c82.jpg',
      '189ebc03-19d9-4b3c-a76d-e62031551bac.jpg',
      'e8231581-72c0-4431-8ad9-b8b4539fac77.jpg',
      '0944271f-d6ed-422d-8c64-1229759cd0db.jpg',
      'ba60474c-d0fc-4a0e-be74-abf58293427b.jpg',
      '64764ba2-6229-4e4b-a395-2cf03f7a52ee.jpeg',
      '31adf0b0-534a-490f-aee8-79051f981b7a.jpg',
      '2f485889-f7bb-4a1d-855d-00fea7f5ddf5.jpg',
      '7c4ca799-9922-4f1c-acc9-67fda84c318a.jpg',
      '62520a63-4334-4433-ac3c-8268c33f6923.jpg',
      '169890e7-0765-4c51-a265-3409a48f553a.jpg',
      '0858685d-bf20-4f1e-9923-5d9426b6d01d.jpg',
      '575aabf7-0b1a-423d-8311-5d4e896e1e07.jpg',
    ],
    of: [
      'd84f52c2-1235-46e4-b399-884c7938c1ad.jpeg',
      '56132e6d-0f35-4920-9d69-7cf36aa6848e.png',
      'f77306e1-00a2-4dc9-baa8-97e65d20d012.png',
      '1e092ba4-97e1-4956-a79e-181470e79faf.png',
      '57a78c3d-254e-4cff-b99f-530ca41be0b6.jpeg',
      '38f9d94b-83c7-405b-afb6-e6597e722c00.jpeg',
      '4c062198-383a-49f4-a8b1-a021076c3aaf.png',
      'f586c7fb-3eda-4bb1-8f1b-0886b4fa06ce.png',
      'c5067026-9f52-4892-b8be-471b32a72b86.jpg',
      '2a3db409-fc3b-428b-b514-584f8410f2f8.jpg',
    ],
    ff: [
      '5183dc2f-d3b7-41e1-9f4d-cea7e821bf4b.jpeg',
      '499befda-1218-40cd-af5a-068fb4087fef.jpeg',
      '5cb2762b-0178-41f2-9760-f986fd5996cb.jpg',
      '24a2017a-0be9-49b4-bb8c-fccb1f7e87e2.jpeg',
      'e1fe8897-af83-4d75-8a2c-31c00e9c19b0.jpg',
      '46709989-038a-466d-909b-9102d0f468f9.jpg',
      '789a1fb9-b97c-40e3-a598-01a4f7799201.jpg',
      '7cc46fd7-ebee-4008-a9c8-8c8462a37de3.jpg',
      '2159cca3-d53a-4a14-847a-30617d25466c.jpeg',
      'c773b44f-fc6d-4e3b-bf30-4c48badf7829.jpeg',
      '754502ad-d0b7-4505-bb73-42119b31f812.jpg',
      'd7f80b66-74d6-4593-8d3e-e58691c352f1.jpg',
    ],
    wb: [
      'a3c3f7cc-959d-4047-8d35-2d8586b48bf2.jpg',
      'cf67c48f-3cd0-41da-8e54-1d47a7424bba.jpg',
      '922fa2ff-32a7-469d-bfb1-1616803d5298.jpg',
      '312ff2b0-e6d4-4c69-8b22-4e907ba1ddaa.jpg',
      'd2f6b791-cb32-4065-a77d-7358b0ac5953.jpg',
    ],
    tf: [
      '6d8d8336-aba4-43aa-a12f-40688b804600.jpg',
      'ddf2deba-f5f7-4f4a-ae43-cd9cbe5c7d42.jpg',
      '4cc769c1-52c2-40ee-8734-476b745239d6.jpg',
      '9a42223b-06ec-4bad-ba16-19e723b52e94.jpg',
      '6aa060cd-6fd6-46ea-bf68-0d5ef18eb2b8.jpg',
    ],
    led: [
      'b3e910c7-f47b-47e9-8777-2356cb340a4d.jpg',
      'c8ffe624-8bf7-432c-a11a-4096868e9914.jpg',
      'e6461061-0cb5-4e1b-b054-81d1a1b7ec68.jpg',
      '3c7d6d2b-87e5-41a7-be6a-65b92afce3b3.jpg',
      '6340f52e-0e5b-47a5-a15d-42a61217e6d8.jpg',
      '59659eea-c64b-4533-acfb-2efcb151c0aa.jpg',
    ],
  } as Record<string, string[]>,

  /**
   * blog slug -> { cover, interior[] }. Cover is topic-matched (source article cover
   * where available, else a representative product photo); interior images are
   * theme-matched product/category shots rendered inside the article body.
   */
  blogImages: {
    'air-filter-how-it-works': {
      cover: 'e732fd43-1c0c-4e1f-baf2-4a105278e8d1.jpg',
      interior: ['31b16d90-dc76-4124-ae0b-83660fbef46a.jpg', '9e42fd28-30f6-40fd-8cff-8c959f1acdb9.jpg'],
    },
    'air-filter-replacement-symptoms': {
      cover: '364aae57-01b9-48fe-b38c-985916569234.jpg',
      interior: ['bc66f57c-1ac0-4a52-bbb4-24673989a0ab.jpg', '8e15aad0-5ba0-473e-bda1-3b7eaeb333e5.jpeg'],
    },
    'oil-filter-how-it-works': {
      cover: '3984ca85-ac40-4db9-9b0a-c54b7e0a40d6.jpg',
      interior: ['56132e6d-0f35-4920-9d69-7cf36aa6848e.png', 'f77306e1-00a2-4dc9-baa8-97e65d20d012.png'],
    },
    'oil-filter-choosing-guide': {
      cover: 'a8b8ca77-b5e8-4389-93bb-f3132306bcac.jpeg',
      interior: ['1e092ba4-97e1-4956-a79e-181470e79faf.png', '57a78c3d-254e-4cff-b99f-530ca41be0b6.jpeg'],
    },
    'cabin-filter-importance': {
      cover: 'ea3923ad-93a0-4718-a394-895d38634236.jpg',
      interior: ['53efa0c0-e09f-415b-9bf2-6bd0e78d1626.png', 'bdc84421-4418-4eeb-836c-18186dcaf8aa.jpg'],
    },
    'cabin-filter-maintenance': {
      cover: '7196ac0d-221a-49d4-88d3-37f97f26dc18.jpg',
      interior: ['dad366aa-1de7-4245-b536-f8811f54ccf4.png', '0a638d80-e970-4a43-869c-40ff8cc2c20d.png'],
    },
    'fuel-filter-complete-guide': {
      cover: 'fc713f63-b89e-42f1-ad35-71a1de675151.png',
      interior: ['5cb2762b-0178-41f2-9760-f986fd5996cb.jpg', '499befda-1218-40cd-af5a-068fb4087fef.jpeg'],
    },
    'news-frankfurt-2025': {
      cover: '1eaabb71-10ce-4847-9876-fffe10613231.jpg',
      interior: ['7ec71d28-e246-44a5-8e43-ab909117a173.png'],
    },
    'air-filter-types-compared': {
      cover: 'fce8bf7b-4d51-4ee9-a2ce-4697f7baadcf.jpg',
      interior: ['8f1308f7-3244-4107-9f91-2dde0481b616.jpeg', 'b3c1e5fe-f1c9-47b9-b735-2fefd22ea187.jpg'],
    },
    'air-filter-industry-trends': {
      cover: '31b16d90-dc76-4124-ae0b-83660fbef46a.jpg',
      interior: ['749fd92f-8ea2-42ce-93aa-54a313543fe1.jpeg', '3a26494c-8bbe-4fa1-8c98-dc8aca09c43b.jpeg'],
    },
    'oil-filter-replacement-interval': {
      cover: 'd84f52c2-1235-46e4-b399-884c7938c1ad.jpeg',
      interior: ['38f9d94b-83c7-405b-afb6-e6597e722c00.jpeg', '4c062198-383a-49f4-a8b1-a021076c3aaf.png'],
    },
    'oil-filter-types-guide': {
      cover: 'f586c7fb-3eda-4bb1-8f1b-0886b4fa06ce.png',
      interior: ['2a3db409-fc3b-428b-b514-584f8410f2f8.jpg', 'c5067026-9f52-4892-b8be-471b32a72b86.jpg'],
    },
    'cabin-filter-buying-guide': {
      cover: '047574a3-46ac-4a06-8b2b-c736b7f2b309.jpg',
      interior: ['e2abb9b5-c8df-49e1-b839-3edbd4778d0a.png', '236163d9-5cbe-49f8-b961-12c6f87d8677.jpg'],
    },
    'cabin-filter-service-guide': {
      cover: '83a2ef0c-a319-41da-8c5d-48427cf81a15.jpeg',
      interior: ['c59a7498-2d37-4f2b-9a05-c96384a54889.jpg', '95d2ab31-2ad9-4d4b-91db-8a7f4bd79c19.png'],
    },
    'fuel-filter-failure-symptoms': {
      cover: '069e18cf-11e1-4ae2-96f1-6e4a0cb079bd.jpg',
      interior: ['24a2017a-0be9-49b4-bb8c-fccb1f7e87e2.jpeg', 'e1fe8897-af83-4d75-8a2c-31c00e9c19b0.jpg'],
    },
    'water-separator-diesel-guide': {
      cover: '5183dc2f-d3b7-41e1-9f4d-cea7e821bf4b.jpeg',
      interior: ['46709989-038a-466d-909b-9102d0f468f9.jpg', '7cc46fd7-ebee-4008-a9c8-8c8462a37de3.jpg'],
    },
    'wiper-blade-choosing-guide': {
      cover: 'f7c37730-894d-4ef1-9d8f-3cc00cb47a5d.jpg',
      interior: ['cf67c48f-3cd0-41da-8e54-1d47a7424bba.jpg', '922fa2ff-32a7-469d-bfb1-1616803d5298.jpg'],
    },
    'wiper-blade-replacement': {
      cover: 'a3c3f7cc-959d-4047-8d35-2d8586b48bf2.jpg',
      interior: ['312ff2b0-e6d4-4c69-8b22-4e907ba1ddaa.jpg', 'd2f6b791-cb32-4065-a77d-7358b0ac5953.jpg'],
    },
    'transmission-filter-service': {
      cover: 'd34a043d-adfa-4b3b-bd54-03a8c3239a8b.jpg',
      interior: ['6d8d8336-aba4-43aa-a12f-40688b804600.jpg', 'ddf2deba-f5f7-4f4a-ae43-cd9cbe5c7d42.jpg'],
    },
    'led-headlight-upgrade-guide': {
      cover: 'c99ad728-01ac-4557-91b3-c517085b24a4.jpg',
      interior: ['b3e910c7-f47b-47e9-8777-2356cb340a4d.jpg', 'c8ffe624-8bf7-432c-a11a-4096868e9914.jpg'],
    },
  } as Record<string, { cover: string; interior: string[] }>,

  /** about-page image (source About.html hero) */
  about: '9cb30082-9658-4929-b8e0-c0e17873b2d2.jpg',

  /** about-page secondary image (source company/exhibition news photo) */
  aboutSecondary: '1eaabb71-10ce-4847-9876-fffe10613231.jpg',

  /** factory/about "ABOUTUS" images (source home about block + factory tour stills) */
  factory: [
    '1eaabb71-10ce-4847-9876-fffe10613231.jpg',
    '02d5c149-5c78-4de8-a72a-b5a58fa27960.jpg',
    '4f312703-985c-49a7-8b80-f644e664af0b.jpg',
    'f8f1f0ca-d2b4-4be4-a3eb-ddaa6099da4d.jpg',
    '0dc4d6ba-549e-4d82-9ab8-a97a76581256.jpg',
    '24eadad0-c41b-420c-a4fb-cfc3c6aff058.jpg',
  ],

  /**
   * factory tour video stills (source video.html "Corporate Video", 12 frames).
   * These are the source site's real factory/workshop/warehouse footage and are
   * reused across the /factory/ page sections below.
   */
  factoryTour: [
    '4f312703-985c-49a7-8b80-f644e664af0b.jpg',
    'f8f1f0ca-d2b4-4be4-a3eb-ddaa6099da4d.jpg',
    '0dc4d6ba-549e-4d82-9ab8-a97a76581256.jpg',
    '24eadad0-c41b-420c-a4fb-cfc3c6aff058.jpg',
    '049b6b15-cc77-4b97-8e66-0493e9239e77.jpg',
    '6436649d-9ada-428e-926a-0225ed359c29.jpg',
    'f490ba1b-d974-441a-90f0-4c71e54a2177.jpg',
    '593e6c21-73d3-4665-ba34-70b2c211ef99.jpg',
    'fde4f07d-f104-42ed-bde4-5e819ebbd8dc.jpg',
    '1a5d87d4-73eb-4b9f-a899-34313531ce20.jpg',
    '3b68e5a1-93f7-4650-ac34-d13ac70ca7ed.jpg',
    'b6f8f6b6-33e3-4faf-b65d-3fee27614d70.jpg',
  ],

  /** factory page — production / quality-control / warehousing image groups */
  factorySections: {
    production: [
      '9e42fd28-30f6-40fd-8cff-8c959f1acdb9.jpg',
      'd84f52c2-1235-46e4-b399-884c7938c1ad.jpeg',
      'bdc84421-4418-4eeb-836c-18186dcaf8aa.jpg',
      '5183dc2f-d3b7-41e1-9f4d-cea7e821bf4b.jpeg',
      'f490ba1b-d974-441a-90f0-4c71e54a2177.jpg',
      '3b68e5a1-93f7-4650-ac34-d13ac70ca7ed.jpg',
    ],
    qc: [
      '593e6c21-73d3-4665-ba34-70b2c211ef99.jpg',
      '6436649d-9ada-428e-926a-0225ed359c29.jpg',
    ],
    warehouse: [
      '499befda-1218-40cd-af5a-068fb4087fef.jpeg',
      '2a3db409-fc3b-428b-b514-584f8410f2f8.jpg',
      'c8ffe624-8bf7-432c-a11a-4096868e9914.jpg',
      '1a5d87d4-73eb-4b9f-a899-34313531ce20.jpg',
      'fde4f07d-f104-42ed-bde4-5e819ebbd8dc.jpg',
    ],
  } as Record<string, string[]>,

  /**
   * certification group (source Qualification.html) — business license + page
   * banner + supporting factory frames, rendered as the /factory/ cert grid.
   */
  qualification: {
    banner: '8f490fe4-35cd-4f5e-bac9-d61c3e92bc8a.jpg',
    docs: [
      '049b6b15-cc77-4b97-8e66-0493e9239e77.jpg',
      'b6f8f6b6-33e3-4faf-b65d-3fee27614d70.jpg',
    ],
  },

  /**
   * Business license (营业执照) — single legal document, rendered standalone in its
   * own block on /factory/ so it is never mixed with inspection/certification images.
   * Qinghe County Hongying Auto Parts Co., Ltd. (清河县宏盈汽车零部件有限公司).
   */
  businessLicense: 'e5ca537e-3754-4988-af6f-5392bda05685.jpg',

  /**
   * AI-generated illustrative renderings (Seedream / Ark). These are editorial
   * process visualizations — NOT company photography. Kept separate from recovered
   * origin images and served from /images/ai-illustrations/ so provenance stays clear.
   */
  aiIllustrations: {
    prefix: '/images/ai-illustrations/',
    production: [
      'factory-production-line-wide-1600x900.webp',
      'factory-production-line-2-1600x900.webp',
    ],
    qc: [
      'factory-qc-bench-1600x900.webp',
      'factory-qc-bench-2-1600x900.webp',
    ],
    warehouse: [
      'factory-warehouse-shelves-1600x900.webp',
      'factory-warehouse-shelves-2-1600x900.webp',
    ],
  } as Record<string, string[]>,

  /** home hero — source home slide2 background (alt "OEM&ODM") */
  homeOem: 'c9b13651-5a3f-47ac-9cf6-bb0c26ee8b3b.jpg',

  /** home "PRODUCT FAQ" images (source home FAQ block) */
  homeFaq: [
    '10b8a92d-cd43-473b-b503-692560280a03.png',
    'a2f9a70b-5c0b-463d-8f0d-a3b94685d03a.jpg',
  ],
};
