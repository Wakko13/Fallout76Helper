import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const source = z.object({
  label: z.string(),
  url: z.string().url(),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/faq' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    verified: z.coerce.date(),
    sources: z.array(source).default([]),
  }),
});

const referenceCategories = z.enum([
  'special',
  'perks',
  'legendary-effects',
  'plans-recipes',
  'locations',
  'events',
  'camp',
  'factions',
  'vendors',
  'bosses',
  'mutations',
]);

const reference = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/reference' }),
  schema: z.object({
    title: z.string(),
    category: referenceCategories,
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    verified: z.coerce.date(),
    sources: z.array(source).default([]),
  }),
});

export const collections = { faq, reference };
