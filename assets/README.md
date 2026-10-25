# assets/ — hongying OSS image re-fetch

**Status: RESOLVED (2026-10-25)**

The original block was on `omo-oss-image.thefastimg.com` (HTTP 567 "http 403" anti-hotlink to
every direct request — scheme / UA / Referer / IPv4 / IPv6 all tried). The sibling CDN mirror
**`omo-oss-image2.thefastimg.com`** serves the same portal instance without the block.

- 123 / 123 origin images recovered and landed at `public/images/origin-images/`.
- Seated same-position into the main site (see `docs/image-placement-map.md`).
- Fetch script: `scripts/fetch-origin-images.mjs`.

**Reference:**
- `docs/assets/hongying-oss-refetch-list.txt` — 123 original OSS URLs + ref counts.
- `docs/assets/uuid-category-map.md` — UUID → category/page mapping.
- `docs/assets/images-map.json` — source URL → local path + DOM context.
