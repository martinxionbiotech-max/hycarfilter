// ============================================================================
// i18n — locale configuration & URL helpers (foundation batch A).
// Routing: / (en default) · /ar/ · /es/
// Full per-locale content translation lands in batch B; this module supplies
// the shared framework: locale metadata, path mapping and the switcher logic.
// ============================================================================

export const locales = ['en', 'ar', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export interface LocaleMeta {
  /** ISO 639-1 language code used in <html lang>. */
  lang: string;
  /** Text direction. */
  dir: 'ltr' | 'rtl';
  /** English label (for aria / tooling). */
  label: string;
  /** Native label shown in the switcher. */
  nativeLabel: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { lang: 'en', dir: 'ltr', label: 'English', nativeLabel: 'English' },
  ar: { lang: 'ar', dir: 'rtl', label: 'Arabic', nativeLabel: 'العربية' },
  es: { lang: 'es', dir: 'ltr', label: 'Spanish', nativeLabel: 'Español' },
};

/** Resolve the active locale from a URL pathname. */
export function getLocaleFromPath(path: string): Locale {
  if (path === '/ar' || path.startsWith('/ar/')) return 'ar';
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  return 'en';
}

/** Normalize a path to a trailing-slash form (except root). */
function normalizePath(path: string): string {
  if (path === '' || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

/** Strip any locale prefix, returning the path relative to the site root. */
function stripLocalePrefix(path: string): string {
  const norm = normalizePath(path);
  for (const l of locales) {
    if (l === 'en') continue;
    const prefix = `/${l}`;
    if (norm === prefix || norm.startsWith(`${prefix}/`)) {
      return norm.slice(prefix.length) || '/';
    }
  }
  return norm;
}

/** Map a site-root path to the equivalent path in the target locale. */
export function localizedPath(path: string, locale: Locale): string {
  const rest = stripLocalePrefix(path);
  if (locale === 'en') return rest;
  const base = `/${locale}`;
  return rest === '/' ? `${base}/` : `${base}${rest}`;
}

// ---------------------------------------------------------------------------
// Routes that currently have real ar/es equivalents (framework validation batch).
// Any other path falls back to the localized homepage in the switcher so the
// control never points at a 404 while translation is still pending.
// ---------------------------------------------------------------------------
const localizedRoutes = new Set(['/', '/products/air-filter/', '/products/hy-af-nano/']);

/** Switcher href: deep-link when a localized version exists, else home. */
export function localizedHref(path: string, locale: Locale): string {
  const norm = stripLocalePrefix(path);
  if (localizedRoutes.has(norm)) return localizedPath(norm, locale);
  return locale === 'en' ? '/' : `/${locale}/`;
}

/** Standard hreflang alternates for a given root path (three-way + x-default). */
export function hreflangAlternates(path: string, siteUrl: string) {
  const norm = stripLocalePrefix(path);
  const href = (locale: Locale) =>
    new URL(localizedPath(norm, locale), siteUrl).toString();
  return [
    { lang: 'x-default', href: href('en') },
    { lang: 'en', href: href('en') },
    { lang: 'ar', href: href('ar') },
    { lang: 'es', href: href('es') },
  ];
}
