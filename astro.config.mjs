// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

function getSiteUrl() {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://getclipwise.app";
}

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),
  integrations: [sitemap()],
});
