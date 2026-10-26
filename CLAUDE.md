# CLAUDE.md

## Tracking

- Stack: Astro 5 (+ React islands). Sin GTM: gtag.js directo (GA4 `G-KHW3X20ZSJ`) desde `public/ipnite-analytics.js`, cargado en `src/layouts/BaseLayout.astro:149`.
- gtag.js solo se inyecta con consentimiento `granted` (localStorage `ipnite_web_analytics_consent_v1`) y en `ipnite.com`/`www.ipnite.com`, o con `?analytics_debug=1`.
- Todos los eventos pasan por `emit()` → `safeParams()`: lista blanca `ALLOWED_EVENT_PARAMS`; cualquier parámetro nuevo debe agregarse ahí o se descarta.
- Parámetros comunes en cada evento y en `gtag('set')`: `site_language`, `page_type`, `content_topic`, `page_name`, `page_path`, `surface_name` (derivados de `<html lang>` y `meta[name="ipnite:page-key"]`).
- `cta_click` (+ `signup_started` si va a app.ipnite.com, + evento de `data-analytics-event`): click en `[data-analytics-cta]` o `a[href*="app.ipnite.com"]`; envía `cta_name`, `cta_location`, `destination_name`, `link_domain`, y `plan_name`/`market` si hay `data-analytics-plan`.
- `cta_location` sale de `data-analytics-location` del elemento o del ancestro más cercano (section/header/footer/nav); sin él cae a `id`, `navigation`, `footer`, `content` o `unknown`.
- `page_type`/`content_topic` salen de reglas por URL en `pageType()`/`contentTopic()` sobre la `page-key` en inglés; toda página nueva debe declarar `pageKey` en inglés y, si no encaja, agregarse a las reglas (solo `/coming-soon/` debe quedar en `other`).
- `pricing_viewed`: IntersectionObserver al 25 % sobre `#plans`; envía `market`.
- Formularios: no hay `form_start`/`form_submit` propios; al enviar uno válido se emite `newsletter_signup_started` o `contact_form_submit_attempt` según `data-analytics-form`.
- Contacto (`ContactSection.astro`): POST JSON con `fetch` a Web3Forms con `PUBLIC_WEB3FORMS_KEY` (`.env`, ver `.env.example`) y honeypot `botcheck`; solo con `success` emite `generate_lead` (key event). El newsletter sigue en Mailchimp sin confirmación.
- `cta_*` vacíos en GA4 suelen ser dimensiones personalizadas sin registrar (no son retroactivas) o eventos que no las envían; el código siempre les pone un valor de respaldo.
- Docs: `docs/analytics.md`. Auditoría: `npm run analytics:audit`.
