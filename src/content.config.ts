import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const features = defineCollection({
  loader: file("src/content/features.json"),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const steps = defineCollection({
  loader: file("src/content/steps.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const useCases = defineCollection({
  loader: file("src/content/use-cases.json"),
  schema: z.object({
    id: z.string(),
    label: z.string(),
  }),
});

const privacyHighlights = defineCollection({
  loader: file("src/content/privacy-highlights.json"),
  schema: z.object({
    id: z.string(),
    label: z.string(),
  }),
});

const pricingTiers = defineCollection({
  loader: file("src/content/pricing-tiers.json"),
  schema: z.object({
    id: z.string(),
    tier: z.enum(["free", "premium"]),
    name: z.string(),
    tagline: z.string(),
    price: z.number(),
    priceSuffix: z.string(),
    features: z.array(z.string()),
    ctaLabel: z.string(),
    ctaIcon: z.string(),
  }),
});

const trustBadges = defineCollection({
  loader: file("src/content/trust-badges.json"),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    label: z.string(),
  }),
});

export const collections = {
  features,
  steps,
  useCases,
  privacyHighlights,
  pricingTiers,
  trustBadges,
};
