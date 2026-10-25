// Aggregated localized content for ar & es — single import point for templates.
import { productsI18n, packingI18n } from './products';
import { categoryI18n } from './category';
import { procurementI18n } from './procurement';
import { scenesI18n } from './scenes';
import { blogI18nA } from './blog-a';
import { blogI18nB } from './blog-b';
import { blogI18nC } from './blog-c';

const mergeBlog = (a: any, b: any, c: any) => ({
  ar: { ...a.ar, ...b.ar, ...c.ar },
  es: { ...a.es, ...b.es, ...c.es },
});

export const content = {
  ar: {
    ...productsI18n.ar,
    categoryContent: categoryI18n.ar,
    concerns: procurementI18n.ar.concerns,
    extraFaqs: procurementI18n.ar.extraFaqs,
    scenes: scenesI18n.ar,
    blog: mergeBlog(blogI18nA, blogI18nB, blogI18nC).ar,
  },
  es: {
    ...productsI18n.es,
    categoryContent: categoryI18n.es,
    concerns: procurementI18n.es.concerns,
    extraFaqs: procurementI18n.es.extraFaqs,
    scenes: scenesI18n.es,
    blog: mergeBlog(blogI18nA, blogI18nB, blogI18nC).es,
  },
};

export { packingI18n };
