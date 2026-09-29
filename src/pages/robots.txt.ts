import type { APIRoute } from "astro";
import { siteUrl } from "../content/site";

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", siteUrl).href}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
