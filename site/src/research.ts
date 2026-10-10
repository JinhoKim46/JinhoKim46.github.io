import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

/** Case studies for one language, in display order. The slug is the file name. */
export async function research(lang: Lang) {
  const all = await getCollection('research', (e) => e.id.startsWith(`${lang}/`));
  return all
    .map((e) => ({ ...e, slug: e.id.split('/')[1] }))
    .sort((a, b) => a.data.order - b.data.order);
}
