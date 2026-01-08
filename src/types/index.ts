export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export type TierType = "free" | "premium";

export interface PricingTier {
  tier: TierType;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaIcon: string;
}

export interface TrustBadge {
  icon: string;
  label: string;
}

export interface Headline {
  prefix: string;
  highlight: string;
  suffix: string;
}
