// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hycarfilter.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Exclude localized 404 pages (ar/es 404 render as real routes and would
      // otherwise be emitted into the sitemap).
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
