export const siteConfig = {
  name: "Clipwise AI",
  titleTemplate: "%s | Clipwise AI",
  description:
    "Chrome extension that converts any webpage to clean Markdown for AI prompts. Copy and paste into ChatGPT, Claude, Gemini, and more. Private and works offline.",
  locale: "en-US",
  author: {
    name: "Dennis Morello",
    website: "https://morello.dev",
    twitter: "@morellodev",
    github: "morellodev",
  },
  links: {
    chromeWebStore:
      "https://chromewebstore.google.com/detail/amodhodhpfaejkbmmbpmidpnlpadhjph",
    premiumCheckout:
      "https://shop.getclipwise.app/checkout/buy/30ad71d7-8b6f-476c-8925-5f8259d44cc8",
  },
  pricing: {
    currency: "USD",
    freeDailyLimit: 10,
  },
} as const;
