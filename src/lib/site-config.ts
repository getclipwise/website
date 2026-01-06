export const siteConfig = {
  name: "Clipwise AI",
  titleTemplate: "%s | Clipwise AI",
  description:
    "Convert any webpage to clean Markdown for ChatGPT, Claude & other AI assistants. Fast, private, works offline.",
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
      "https://shop.getclipwise.app/checkout/buy/8c84d46a-87a7-4e62-8ca6-c4d54160d714",
  },
  pricing: {
    premium: {
      price: 9.99,
      currency: "USD",
    },
  },
} as const;
