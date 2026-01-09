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
      "https://shop.getclipwise.app/checkout/buy/30ad71d7-8b6f-476c-8925-5f8259d44cc8",
  },
  pricing: {
    currency: "USD",
    free: {
      price: 0,
      dailyLimit: 10,
    },
    premium: {
      price: 9.99,
    },
  },
} as const;
