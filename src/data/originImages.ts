// Single source of truth for recovered origin images.
//
// Fetched 2026-10-25 from omo-oss-image2.thefastimg.com — the unblocked CDN sibling
// of the source site (omo-oss-image.thefastimg.com answers HTTP 567 anti-hotlink to
// every direct request). Files land under public/images/origin-images/<uuid>.<ext>
// and are served at /images/origin-images/<uuid>.<ext>.
//
// Mapping is "same-position": each recovered image is seated at the equivalent slot
// in the new site (category icon -> category page icon, product photo -> SKU hero,
// article image -> blog cover, factory/about image -> factory/about page).
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

  /** blog topic -> cover image (topic-matched: source article image + product photos) */
  blogCover: {
    air: 'e732fd43-1c0c-4e1f-baf2-4a105278e8d1.jpg',
    news: '1eaabb71-10ce-4847-9876-fffe10613231.jpg',
    oil: '3984ca85-ac40-4db9-9b0a-c54b7e0a40d6.jpg',
    cabin: '83a2ef0c-a319-41da-8c5d-48427cf81a15.jpeg',
    fuel: 'fc713f63-b89e-42f1-ad35-71a1de675151.png',
    wiper: 'f7c37730-894d-4ef1-9d8f-3cc00cb47a5d.jpg',
    transmission: 'd34a043d-adfa-4b3b-bd54-03a8c3239a8b.jpg',
    led: 'c99ad728-01ac-4557-91b3-c517085b24a4.jpg',
  } as Record<string, string>,

  /** about-page image (source About.html hero) */
  about: '9cb30082-9658-4929-b8e0-c0e17873b2d2.jpg',

  /** factory/about "ABOUTUS" images (source home about block) */
  factory: [
    '7ec71d28-e246-44a5-8e43-ab909117a173.png',
    '97066cc1-a1c5-4aba-96fc-bceef649db16.png',
  ],
};
