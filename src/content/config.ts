import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('EverCheck Team'),
    category: z.string().default('CGM Technology'),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
