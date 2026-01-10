// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

function getSiteUrl() {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://www.getclipwise.app";
}

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svgo: true,
  },
});
