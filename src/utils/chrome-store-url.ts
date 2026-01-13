import { siteConfig } from "@/lib/site-config";

export type UtmCampaign = "header" | "hero" | "pricing-free" | "bottom-cta";

/**
 * Builds a Chrome Web Store URL with UTM tracking parameters.
 * See: https://developer.chrome.com/docs/webstore/google-analytics/
 */
export function getChromeStoreUrl(campaign: UtmCampaign): string {
  const url = new URL(siteConfig.links.chromeWebStore);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
