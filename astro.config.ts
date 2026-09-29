import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { siteUrl } from "./src/content/site";

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  trailingSlash: "never",
  server: {
    host: true,
    port: 4321,
  },
});
