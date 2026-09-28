import { defineMiddleware } from "astro:middleware";
import { BRAND_MARK } from "./config/brand";

const BRAND = /\b(?:IPnite|IPNITE)\b(?![™®])/g;
const HAS_BRAND = /\b(?:IPnite|IPNITE)\b(?![™®])/;
const mark = `<span class="brand-name">IPnite<sup class="brand-mark">${BRAND_MARK}</sup></span>`;
// The whole text run is wrapped once so that, inside flex buttons, the spaces around the brand survive.
const markText = (text: string) => (HAS_BRAND.test(text) ? `<span class="brand-text">${text.replace(BRAND, mark)}</span>` : text);
// Raw-text and non-HTML blocks are copied untouched; so are tags and their attributes.
const TOKENS = /<(script|style|title|textarea|svg|option)\b[\s\S]*?<\/\1>|<!--[\s\S]*?-->|<[^>]+>|[^<]+/gi;

/** Adds the trademark mark to every visible "IPnite" in rendered HTML (not in titles, meta, attributes, JSON-LD or URLs). */
export function markBrand(html: string): string {
  return html.replace(TOKENS, (token) => (token.startsWith("<") ? token : markText(token)));
}

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get("content-type")?.includes("text/html")) return response;
  const html = markBrand(await response.text());
  return new Response(html, { status: response.status, statusText: response.statusText, headers: response.headers });
});
