import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * The site is deployed to two hosts (Cloudflare Pages and Vercel), so absolute
 * URLs in the document head cannot be hardcoded: a card scraped from the Vercel
 * mirror that advertised the Cloudflare URL would link readers to the wrong
 * host — which is the whole reason the mirror exists.
 *
 * SITE_URL follows the host being built for. CANONICAL_URL always points at the
 * primary, so search engines index one copy rather than treating the mirror as
 * duplicate content.
 */
const PRIMARY_URL = "https://bansideepak.pages.dev";

function resolveSiteUrl(): string {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  // Vercel exposes the stable production domain; VERCEL_URL is per-deployment
  // and would bake a throwaway hostname into the tags.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return PRIMARY_URL;
}

function siteUrls(): Plugin {
  const siteUrl = resolveSiteUrl();
  return {
    name: "site-urls",
    transformIndexHtml(html) {
      return html
        .replaceAll("__SITE_URL__", siteUrl)
        .replaceAll("__CANONICAL_URL__", process.env.CANONICAL_URL ?? PRIMARY_URL);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrls()],
  server: { port: 3000 },
});
