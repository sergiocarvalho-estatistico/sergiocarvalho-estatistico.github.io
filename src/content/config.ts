import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    lang: z.string(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    lang: z.string(),
  }),
});

const recommendations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    type: z.enum(['book', 'film']),
    lang: z.string(),
    image: z.string().optional(),
  }),
});

const materials = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['course', 'ebook', 'spreadsheet', 'other']),
    url: z.string().optional(),
    lang: z.string(),
  }),
});

export const collections = { projects, articles, recommendations, materials };
