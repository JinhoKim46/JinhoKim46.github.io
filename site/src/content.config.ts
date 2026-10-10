import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One MDX file per study per language: src/content/research/<lang>/<slug>.mdx
const research = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    sub: z.string(),
    card: z.string(),
    venue: z.string(),
    year: z.number(),
    order: z.number(),
    role: z.string(),
    collaborators: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })),
    compare: z.enum(['zs', 'dl', 'seg']),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      focus: z.string().default('50% 50%'),
      fit: z.enum(['contain', 'cover']).default('contain'),
    }),
  }),
});

export const collections = { research };
