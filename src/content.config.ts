import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const machines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/machines' }),
  schema: z.object({
    title: z.string(),
    manufacturer: z.string(),
    priceMin: z.number().optional(),
    priceMax: z.number().optional(),
    priceLabel: z.string(),           // e.g. "$59,950" or "Custom"
    throughputPerHour: z.number(),
    differentiator: z.string(),
    formats: z.array(z.enum(['cones', 'straight', 'blunts', 'infused'])),
    badge: z.enum([
      'Best Overall',
      'Best for High Volume',
      'Best for Quality/Consistency',
      'Best for Speed at Scale',
      'Best Value',
      'Most Format-Flexible',
      'Best Entry-Level',
      'Best for Craft/Premium Brands',
    ]).optional(),
    // Scores out of 10 — set after research is complete
    scores: z.object({
      throughput: z.number().min(0).max(10),
      consistency: z.number().min(0).max(10),
      formatFlexibility: z.number().min(0).max(10),
      totalCostOfOwnership: z.number().min(0).max(10),
      easeOfOperation: z.number().min(0).max(10),
      uptimeAndMaintenance: z.number().min(0).max(10),
      supportAndWarranty: z.number().min(0).max(10),
    }).optional(),
    overallScore: z.number().min(0).max(10).optional(),
    rank: z.number().optional(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    bestFor: z.string(),
    nearestCompetitor: z.string().optional(),
    image: z.string().optional(),
    tagline: z.string().optional(),
  }),
});

export const collections = { machines };
