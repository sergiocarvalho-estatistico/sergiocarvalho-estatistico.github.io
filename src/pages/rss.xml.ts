import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', e => e.id.startsWith('pt/'));
  return rss({
    title: 'Sérgio Carvalho - Artigos',
    description: 'Artigos sobre estatística, ciência de dados e machine learning',
    site: context.site!,
    items: articles.map(a => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: new Date(a.data.date),
      link: `/artigos/${a.slug.replace('pt/', '')}`,
    })),
  });
}
