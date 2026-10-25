// Shared TypeScript types for localized (ar/es) content dictionaries.
// Each content module exports `{ ar: {...}, es: {...} }` satisfying these shapes.

export interface LocalizedCategory {
  name: string;
  tagline: string;
}

export interface LocalizedProduct {
  name: string;
  series: string;
  media: string;
  materials: {
    housing: string;
    media_material: string;
    endcap: string;
    seal: string;
  };
  applicable_vehicles: string[];
  target_markets: string[];
}

export interface Sel {
  title: string;
  text: string;
}

export interface Qa {
  q: string;
  a: string;
}

export interface LocalizedCategoryContent {
  intro: string;
  selection: Sel[];
  faqs: Qa[];
  opinion: { title: string; body: string };
}

export interface Concern {
  title: string;
  text: string;
}

export interface LocalizedScene {
  title: string;
  lede: string;
  body: string[];
  filters: string[];
  procurementPoints: Concern[];
  relatedCategories: { slug: string; label: string }[];
}

export interface BlogSectionLocalized {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostLocalized {
  title: string;
  excerpt: string;
  topicLabel: string;
  sections: BlogSectionLocalized[];
}
