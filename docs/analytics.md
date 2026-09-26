# IPnite website analytics

Last audited: September 26, 2026.

## Current architecture

The marketing website uses one direct GA4 `gtag.js` implementation. It does not use Google Tag Manager, an Astro analytics plugin, or Universal Analytics.

- Initialization: `public/ipnite-analytics.js`
- Global inclusion: `src/layouts/BaseLayout.astro`
- GA4 Measurement ID: `G-KHW3X20ZSJ`
- Exact configuration constant: `ID`
- Consent storage key: `KEY`, with value `ipnite_web_analytics_consent_v1`
- GA environment variable: none; do not introduce or rename one without an approved deployment migration
- GTM container/configuration: none

`ID` and `KEY` are established configuration names. Do not rename, replace, rotate, or move them without explicit authorization and a verified deployment plan.

The deployed application at `app.ipnite.com` was observed using the separate GA4 Measurement ID `G-0Y2V71G958`. Its production bundle exposes only the minified local constant `Z7`; the original source configuration/environment-variable name cannot be established from this repository. Do not rename or change that application configuration based on the minified name. Do not change either property to force cross-domain reporting without coordinating the application, website, GA4 Admin, consent behavior, and historical reporting.

## Loading and page views

Analytics uses basic Consent Mode: Google `gtag.js` is not requested until the visitor grants Analytics consent. Advertising storage, advertising user data, and advertising personalization remain denied.

The script loads only on `ipnite.com` and `www.ipnite.com`. Localhost and preview domains are disabled by default. `gtag` automatic page views are disabled with `send_page_view: false`; the website sends exactly one explicit `page_view` per static document load.

Astro currently performs full-page navigation, not SPA navigation. Therefore every route receives one normal document page view and no history listener is required. If client-side routing is introduced later, add one route-completion page view and keep the initial guard.

The page view includes sanitized values for:

- `page_location`
- `page_path`
- `page_title`
- `page_referrer`, without query parameters
- `site_language`: `en`, `es`, or `pt-BR`
- `page_type`
- `content_topic`

Only recognized campaign parameters are retained in `page_location`: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `utm_id`, `gclid`, `dclid`, `gbraid`, and `wbraid`. Hashes and unrelated query parameters are not sent.

## Events

| Event | Trigger | Key event recommendation |
|---|---|---|
| `page_view` | Once after consent on each document | No |
| `cta_click` | High-value annotated CTA or link to the IPnite application | No |
| `signup_started` | Visitor follows a website CTA to `app.ipnite.com` | No; use as funnel intent |
| `pricing_viewed` | At least 25% of the pricing section enters the viewport | No |
| `pricing_cta_clicked` | Free, Inventor, Startup, or Institutional pricing CTA | No |
| `start_drafting_clicked` | Drafting CTA or product card | No |
| `prior_art_search_clicked` | Prior-art product CTA | No |
| `patent_drawing_clicked` | Patent-drawing product CTA | No |
| `portfolio_management_clicked` | Portfolio product CTA | No |
| `newsletter_signup_started` | Valid Mailchimp form is submitted | No; remote success is not observable here |
| `contact_form_submit_attempt` | Valid contact form submission is attempted | No; the current form has no delivery backend |
| `faq_open` | FAQ item is opened | No |
| `section_view` | A measured section becomes visible for the first time | No |
| `section_engagement` | A visible measured section exits after at least 1.5 seconds | No |
| `analytics_consent_update` | Analytics consent is accepted | No |

Common parameters are `site_language`, `page_type`, `content_topic`, `page_name`, `page_path`, and `surface_name`. CTA events add `cta_name`, `cta_location`, `destination_name`, and `link_domain`. Pricing CTA events also add `plan_name` and `market`.

`signup_completed`, `demo_request_submitted`, `subscription_started`, and `purchase` are not emitted by this website because their successful completion cannot be verified here. They must be emitted by the application or server only after the corresponding result is confirmed.

## Privacy requirements

Never send Analytics any form value, name, email, phone number, invention title, invention description, claim, prior-art query, prompt, document/file name, project identifier, patent content, authentication token, payment information, or raw application URL.

The analytics module uses an event-parameter allowlist. New parameters must be reviewed before adding them. Do not add arbitrary URLs, DOM input values, or user-generated text to an event.

## Debugging

Analytics is disabled on localhost by default. To test intentionally:

1. Open a local page with `?analytics_debug=1` or set `localStorage.ipnite_analytics_debug = "1"`.
2. Accept Analytics in the privacy control.
3. Run `window.ipniteAnalytics.status()` in the console.
4. Watch console messages prefixed `[IPnite Analytics]`.
5. In Network, confirm one request for `gtag/js`, one `page_view`, and one event per tested CTA.
6. Use GA4 DebugView to inspect events with `debug_mode: true`.
7. Remove `ipnite_analytics_debug` after testing.

Debug mode sends events to the existing property, marked for DebugView. Use it only for controlled tests. Normal localhost, preview, and staging visits do not load GA4.

Run local checks with:

```bash
npm run build
npm run analytics:audit
```

## GA4 Admin tasks

Register these event-scoped custom dimensions, using the parameter names exactly:

- Site language → `site_language`
- Page type → `page_type`
- Content topic → `content_topic`
- CTA name → `cta_name`
- CTA location → `cta_location`

Do not recreate dimensions already registered. Standard page, country, source, medium, campaign, landing-page, and referrer dimensions do not need custom definitions.

Keep `cta_click`, `pricing_viewed`, and intent events as analysis events. Mark only confirmed outcomes generated by the application/server as key events, normally `signup_completed`, `demo_request_submitted`, `subscription_started`, and `purchase`.

Review Enhanced Measurement in GA4 Admin. Keep scrolls, outbound clicks, and file downloads when useful. Avoid creating custom duplicates. Because the public contact form has no success integration and the newsletter submits to Mailchimp, do not treat automatic `form_submit` as a confirmed lead conversion.

For attribution between the website, application, authentication, and Stripe:

1. Compare the website and application GA4 property/stream design before changing either Measurement ID.
2. Inspect Referral reports for `app.ipnite.com`, authentication callback domains, `checkout.stripe.com`, and the Stripe billing portal domain actually used.
3. Add only confirmed payment/authentication intermediaries to unwanted referrals.
4. Configure cross-domain measurement only if both properties are intentionally consolidated under the same measurement architecture.

## Search Console

No Search Console verification meta tag or environment variable is present in this repository. Property verification and the GA4 link must be managed in Google Search Console and GA4 Admin. Do not add a second verification method unless needed.
