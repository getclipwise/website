import type { CollectionEntry } from "astro:content";

export type Feature = CollectionEntry<"features">["data"];
export type Step = CollectionEntry<"steps">["data"];
export type UseCase = CollectionEntry<"useCases">["data"];
export type PrivacyHighlight = CollectionEntry<"privacyHighlights">["data"];
export type PricingTier = CollectionEntry<"pricingTiers">["data"];

export interface Headline {
  prefix: string;
  highlight: string;
  suffix: string;
}
