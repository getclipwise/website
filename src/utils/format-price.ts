import { siteConfig } from "@/lib/site-config";

const baseFormatOptions: Intl.NumberFormatOptions = {
  style: "currency",
  currency: siteConfig.pricing.currency,
};

/**
 * Formats a price using the site's locale and currency.
 * Whole numbers are formatted without decimals (e.g., $0, $5).
 *
 * @example
 * formatPrice(0)    // "$0" (for en-US, USD)
 * formatPrice(5)    // "$5" (for en-US, USD)
 * formatPrice(9.99) // "$9.99" (for en-US, USD)
 */
export function formatPrice(price: number): string {
  const isWholeNumber = Number.isInteger(price);

  const formatter = new Intl.NumberFormat(siteConfig.locale, {
    ...baseFormatOptions,
    maximumFractionDigits: isWholeNumber ? 0 : 2,
  });

  return formatter.format(price);
}
