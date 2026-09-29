# River Apps website

Marketing site for River Apps (River Tech Inc.). Two static pages, `/` and `/journey`, built with [Astro](https://astro.build) so they can be hosted on Vercel or Firebase Hosting.

The layout, color, type, and motion follow the approved HTML mockup. Copy stays limited to what that mockup already says. Numbers, testimonials, and partner names are not invented here.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321 for the homepage and http://localhost:4321/journey for the timeline.

## Build

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. `npm run preview` serves that folder.

## Edit content and placeholders

All customer-facing copy, links, and placeholders live in [`src/content/site.ts`](src/content/site.ts).

Placeholder chips are the yellow dashed labels such as `[Contact email]`, `[Year founded]`, and `[Partner logo]`. They are any value in that file that still starts with `[` and ends with `]`. Replace the whole string with the real value and the chip styling goes away.

Image slots (partner logos, industry photos, the Smart Refill screenshot) keep the dashed box while `src` is `""`. Set `src` to a file you add under `public/` (for example `"/partners/station.png"`). When you do, change `label` to a short description so it can be used as alt text.

Confirm `siteUrl` in the same file before launch. It is used for the canonical URL, Open Graph tags, `sitemap-index.xml`, and `robots.txt`. The default is `https://riverph.com` because `app.riverph.com` is already the workspace. Change it if the marketing domain is different.

Do not add metrics, quotes, customer counts, or logos that have not been approved.

## Partner form

The partner form on the homepage does not submit anywhere. It calls `submitPartnerLead()` in [`src/lib/partner-form.ts`](src/lib/partner-form.ts) and then stops. Replace the body of that function when an intake endpoint exists. Leave the argument shape (`fullName`, `businessType`, `city`, `mobile`) as it is.

## Deploy

This repo does not deploy on its own.

### Vercel

Import the repository. Vercel detects Astro. Build command: `npm run build`. Output directory: `dist`. No extra config is required for `/` and `/journey`.

### Firebase Hosting

```bash
npm run build
npx firebase-tools deploy --only hosting
```

Point Hosting at `dist` (`"public": "dist"`). Directory URLs already resolve: `/journey` is `dist/journey/index.html`.

Set `siteUrl` in `src/content/site.ts` to the live origin before the first production deploy so social previews and the sitemap use the right domain.

## Project map

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | Copy, placeholders, links, SEO text, `siteUrl` |
| `src/lib/partner-form.ts` | TODO hook for the partner form |
| `src/components/Nav.astro`, `Footer.astro` | Shared chrome |
| `src/components/home/` | Homepage sections |
| `src/components/journey/` | Journey page |
| `src/pages/index.astro`, `journey.astro` | Routes `/` and `/journey` |
| `src/styles/` | Approved CSS (`base`, `home`, `journey`) |
| `public/assets/` | River logo |
| `public/web-cover.png` | Default Open Graph image (1920×640) |
| `public/assets/river-icon-white.png` | Favicon and Apple touch icon |

Anchor links from the nav: Businesses `#industries`, AI `#ai`, River Mobile `#river-mobile`, Products `#products`, About `#about`, Journey `/journey`.
