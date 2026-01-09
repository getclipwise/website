import { siteConfig } from "@/lib/site-config";

const priceFormatter = new Intl.NumberFormat(siteConfig.locale, {
  style: "currency",
  currency: siteConfig.pricing.currency,
});

/**
 * Formats a price using the site's locale and currency.
 *
 * @example
 * formatPrice(9.99) // "$9.99" (for en-US, USD)
 */
export function formatPrice(price: number): string {
  return priceFormatter.format(price);
}
