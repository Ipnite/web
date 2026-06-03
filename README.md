# NEXT SESSION: Performance Optimization TODO

Current Lighthouse/PageSpeed context reported by the user on June 2, 2026:

- Performance: 61
- Accessibility: 96
- Best Practices: 100
- SEO: 100
- FCP: 0.8s
- LCP: 1.4s
- TBT: 1820ms
- CLS: 0
- Speed Index: 2.2s

Primary optimization opportunities to address next:

1. Defer Google Analytics / gtag
   - Current issue: `googletagmanager.com/gtag/js?id=G-0Y2V71G958` is loaded during initial page load and Lighthouse reports unused JS.
   - Recommended fix: remove direct early network load and replace it with an inline lazy loader that defines `window.dataLayer` and `window.gtag`, then loads gtag on first user interaction, browser idle, or a timed fallback.
   - Expected result: lower initial JS/network cost and lower main-thread work. Analytics still works, but page view/event timing may be slightly delayed.

2. Improve LCP image priority
   - LCP element reported: `/images/notebook-2.png`, rendered as `img.hero__laptop` in the hero.
   - Recommended fix: add `fetchpriority="high"` and `decoding="async"`; keep `loading="eager"` and keep it discoverable in initial HTML.
   - Expected result: better LCP prioritization.

3. Convert heavy images to modern formats
   - Images flagged by Lighthouse:
     - `/images/how-it-works.png`
     - `/images/the-ipnite-dream.png`
     - `/images/notebook-1.png`
     - `/images/notebook-2.png`
     - `/images/cerebro.png`
     - `/images/captura-1.png`
     - `/images/captura-2.png`
     - `/images/captura-3.png`
   - Recommended fix: generate WebP or AVIF versions, then either replace `src` values or use `<picture>` with PNG fallback.
   - Expected result: lower transfer size and improved image delivery audit.

4. Improve font delivery
   - Current issue: Google Fonts is in the critical request chain via `@import` in `src/styles/global.css`.
   - Quick fix: add preconnect hints for `https://fonts.googleapis.com` and `https://fonts.gstatic.com` with `crossorigin`.
   - Better fix: self-host Roboto and Roboto Slab as WOFF2 and remove the Google Fonts import.
   - Expected result: shorter external critical chain and more reliable FCP/LCP.

5. Defer internal analytics/tracking work
   - Relevant file: `src/layouts/BaseLayout.astro`.
   - Current behavior: inline analytics code initializes click and section engagement tracking globally.
   - Recommended fix: initialize heavier tracking on `requestIdleCallback`, after `load`, or after first interaction.
   - Expected result: lower main-thread work and potentially lower TBT/forced reflow warnings.

6. Cache TTL limitations
   - Lighthouse reports 10 minute cache TTL on public image assets.
   - Site is deployed via GitHub Pages, so cache headers are mostly platform-controlled.
   - Potential fix: move important images through an asset pipeline or use versioned/hashed filenames.
   - Expected result: better repeat-visit caching.

7. Navbar language contrast
   - Accessibility warning for inactive `ES` and `PT` language links.
   - Relevant file: `src/layouts/Navbar.astro`.
   - Recommended fix: darken `.site-nav__langs a` from `#938d8e` to a more contrast-safe color such as `#6b6264` or `#6b2a2f`.
   - Expected result: accessibility score should move closer to 100.

Recommended order next time:

1. Lazy-load Google Analytics and defer internal tracking.
2. Add LCP image `fetchpriority="high"` and `decoding="async"`.
3. Add font preconnect hints or implement local font hosting.
4. Fix navbar language contrast.
5. Convert and validate heavy images as a dedicated pass.
6. Revisit cache TTL after image work.

Always run before committing:

```bash
npm run build
```

After deploy, re-test with Lighthouse/PageSpeed and compare: Performance score, TBT, LCP render delay, unused JavaScript warning, image delivery warning, font critical chain, and accessibility contrast.

---

# IPnite Web

Static marketing website for IPnite, built with Astro, Tailwind, and a small amount of React. The site is deployed to GitHub Pages from the `main` branch.

## What This Site Is

IPnite is an AI-assisted patent preparation platform. The public website explains the product, positioning, pricing, trust/legal notes, learning content, FAQs, and localized pages for English, Spanish, and Brazilian Portuguese.

The site is intentionally static. It is meant to be fast, indexable, and easy for search engines and generative engines to understand.

## Tech Stack

- Astro 5
- Tailwind CSS 3
- React 19, currently only needed for existing React support/components
- TypeScript config via Astro
- GitHub Pages deployment through GitHub Actions

Key files:

- `astro.config.mjs`: Astro config, static output, canonical site URL.
- `package.json`: npm scripts and dependencies.
- `tailwind.config.mjs`: Tailwind configuration.
- `tsconfig.json`: TypeScript/Astro config.
- `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow.

## Commands

Install dependencies:

```bash
npm ci
```

Run locally:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

Deployment is handled by GitHub Actions.

Workflow file:

```text
.github/workflows/deploy.yml
```

Trigger:

- Push to `main`
- Manual `workflow_dispatch`

The workflow:

1. Checks out the repo.
2. Uses Node 20.
3. Runs `npm ci`.
4. Runs `npm run build`.
5. Uploads `dist` to GitHub Pages.
6. Deploys with `actions/deploy-pages@v4`.

Production domain:

```text
https://www.ipnite.com
```

Custom domain file:

```text
public/CNAME
```

## Routing And Pages

Astro page files live in `src/pages`.

English routes:

- `/` -> `src/pages/index.astro`
- `/about-us/` -> `src/pages/about-us.astro`
- `/faqs/` -> `src/pages/faqs.astro`
- `/learn/` -> `src/pages/learn.astro`
- `/privacy/` -> `src/pages/privacy.astro`
- `/termsandconditions/` -> `src/pages/termsandconditions.astro`
- `/coming-soon/` -> `src/pages/coming-soon.astro`

Spanish routes:

- `/es/`
- `/es/about-us/`
- `/es/faqs/`
- `/es/learn/`
- `/es/privacy/`
- `/es/termsandconditions/`
- `/es/coming-soon/`

Portuguese routes:

- `/pt-br/`
- `/pt-br/about-us/`
- `/pt-br/faqs/`
- `/pt-br/learn/`
- `/pt-br/privacy/`
- `/pt-br/termsandconditions/`
- `/pt-br/coming-soon/`

`coming-soon` pages are intentionally `noindex, follow` and are excluded from the sitemap.

## Layouts

Main shared layout:

```text
src/layouts/BaseLayout.astro
```

Responsibilities:

- Global CSS import.
- Shared `<head>` metadata.
- Canonical URL.
- `hreflang` alternates for English, Spanish, Portuguese, and `x-default`.
- Robots meta, configurable per page.
- Open Graph and Twitter metadata.
- Organization JSON-LD and page-specific structured data.
- Google Analytics / internal analytics scripts.
- Shared navbar and footer.

Navbar:

```text
src/layouts/Navbar.astro
```

Responsibilities:

- Main nav links.
- Language switcher.
- Mobile menu behavior.
- Stores selected language in `localStorage`.

Footer:

```text
src/layouts/Footer.astro
```

Responsibilities:

- Legal notice.
- Footer nav.
- Legal links.
- Social links.

## Main Landing Components

The home page is composed in `src/pages/index.astro` using these components:

- `src/components/HeroSection.astro`
- `src/components/WhyWeDoItSection.astro`
- `src/components/IpnitePromiseSection.astro`
- `src/components/YourIPTeamSection.astro`
- `src/components/ReduceCostlySection.astro`
- `src/components/HowItWorksSection.astro`
- `src/components/TrustSection.astro`
- `src/components/JurisdictionsImageSection.astro`
- `src/components/PricingSection.astro`
- `src/components/ContactSection.astro`
- `src/components/CTAFinalSection.astro`

Most components accept:

```ts
lang?: "en" | "es" | "pt"
```

Localized home pages reuse the same sections with the `lang` prop.

## Contact Section

Relevant file:

```text
src/components/ContactSection.astro
```

This is a static HTML form using `method="post"` and `action="#contact"`. It does not currently submit to a backend or email provider.

There is also an older/unused React component:

```text
src/components/ContactForm/ContactForm.tsx
```

That React form is not currently used by the landing page.

## CTA Final Section Note

Relevant file:

```text
src/components/CTAFinalSection.astro
```

A previous issue caused a pill-shaped element to appear below the contact form. Cause: a broad selector targeted every direct `div` inside the final CTA section and accidentally styled the decorative glass card like a button.

Current fix:

- Decorative background has class `cta-final__card`.
- Button wrapper has class `cta-final__button`.
- CSS now targets `.cta-final__button` specifically instead of all direct `div` children.

## SEO And GEO Files

Public discovery files:

- `public/sitemap.xml`
- `public/robots.txt`
- `public/llms.txt`

Expected production URLs after deploy:

- `https://www.ipnite.com/sitemap.xml`
- `https://www.ipnite.com/robots.txt`
- `https://www.ipnite.com/llms.txt`

`robots.txt` allows general crawlers and common AI crawlers, then points to the sitemap.

`llms.txt` summarizes IPnite for generative AI systems. It includes:

- Business facts.
- Contact email.
- Operational presence.
- Target audiences.
- Main product: The Drafter by IPnite.
- Product and plan descriptions.
- Legal note: IPnite is not a law firm and does not create an attorney-client relationship.
- Canonical URLs.
- Citation guidance.

## Structured Data

Structured data is emitted from `BaseLayout.astro` and page-specific arrays/objects.

Base schema:

- `Organization`
- Contact point
- Area served
- `knowsAbout`
- Social profiles

Home schema in `src/pages/index.astro`:

- `WebSite`
- `SoftwareApplication` for The Drafter by IPnite
- `FAQPage`

FAQ schema in `src/pages/faqs.astro`:

- `FAQPage` generated from the local `faqs` array.

## Indexing Rules

Default pages use:

```html
<meta name="robots" content="index, follow, max-image-preview:large">
```

`coming-soon` pages use:

```html
<meta name="robots" content="noindex, follow">
```

The sitemap includes indexable pages only and excludes `coming-soon`.

## Assets

Primary public assets live in:

```text
public/images
public/icons
public/logo.png
public/logo-white.png
```

Large extracted design/font assets live in:

```text
public/extracted_assets
```

There is an old design archive:

```text
public/Archivos Web_Ipnite.zip
```

## Legacy Code

The `_legacy` folder contains older React/Tailwind sections from prior implementation/design translation. It is not part of the current Astro page routing.

```text
_legacy/
```

Do not assume legacy files are live without checking imports.

## Styling

Global CSS:

```text
src/styles/global.css
```

Includes:

- Google Fonts import.
- Design tokens.
- Global box sizing and media defaults.
- `.sr-only` utility for screen-reader/crawler-readable hidden content.
- Shared button/card helpers.

Many components also include local `<style>` blocks and Tailwind utility classes.

## Current Known Caveats

- The contact form is static and does not send email.
- Google Analytics currently loads in the initial page path and should be deferred in a future performance pass.
- Some image assets are PNG and should be converted to WebP/AVIF.
- Google Fonts should ideally be self-hosted or preconnected.
- GitHub Pages cache headers may keep Lighthouse cache TTL warnings for public assets unless assets are versioned/hashed.

## Safe Workflow For Future Changes

Before editing:

```bash
git status --short
```

After editing:

```bash
npm run build
```

Commit only intended files. Avoid committing generated `dist/` unless the repo policy changes.

Deploy by pushing to `main`:

```bash
git push origin main
```

GitHub Actions will build and deploy to GitHub Pages.
