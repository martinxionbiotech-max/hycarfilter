# assets/ — hongying OSS image re-fetch

**Status: BLOCKED (2026-10-25)**

`omo-oss-image.thefastimg.com` returns HTTP 567 ("http 403") on every direct request —
scheme (http/https), User-Agent, Referer and IPv4/IPv6 were all tried; the CDN enforces an
anti-hotlink block that rejects non-browser origin fetches. GitHub reachability (HTTP 200)
confirms this is a CDN-side block, not a network outage.

**Fallback plan (per P1 doc):** placeholder images + Seedream regeneration in a later phase.

**Reference:**
- `docs/assets/hongying-oss-refetch-list.txt` — 123 original OSS URLs + ref counts.
- `docs/assets/uuid-category-map.md` — UUID → category/page mapping for re-seating once images are available.
