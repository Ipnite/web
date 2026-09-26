import { routes, type Locale } from "./routes";
import type { SeoPage } from "./seo/types";
import { productPages } from "./seo/product";
import { audiencePages } from "./seo/audience";
import { jurisdictionPages } from "./seo/jurisdictions";
import { articlePages, articleIndex, articlePath } from "./seo/articles";

export type { Locale } from "./routes";
export type { SeoPage } from "./seo/types";
export { articleIndex, articlePath };

export const seoPages: SeoPage[] = [...productPages, ...audiencePages, ...jurisdictionPages, ...articlePages];

const prefixes: Record<Locale, string> = { en: "/", es: "/es/", pt: "/pt-br/" };

function slugFor(locale: Locale, path: string) {
  const prefix = prefixes[locale];
  if (!path.startsWith(prefix)) throw new Error(`Path ${path} does not belong to locale ${locale}`);
  return path.slice(prefix.length).replace(/\/$/, "");
}

/** Static paths for the catch-all route of a locale: generated SEO pages plus redirects for moved URLs. */
export function staticPathsForLocale(locale: Locale) {
  const pages = seoPages
    .filter((page) => !page.handBuilt?.[locale])
    .map((page) => ({ params: { slug: slugFor(locale, page.locales[locale].path) }, props: { page, redirectTo: undefined as string | undefined } }));

  const redirects = [
    ...seoPages.flatMap((page) => (page.locales[locale].legacy ?? []).map((from) => ({ from, to: page.locales[locale].path }))),
    ...(routes.learn.legacy[locale as "es" | "pt"] ?? []).map((from) => ({ from, to: routes.learn[locale] })),
  ];

  const redirectPaths = redirects.map(({ from, to }) => ({ params: { slug: slugFor(locale, from) }, props: { page: undefined as unknown as SeoPage, redirectTo: to } }));
  return [...pages, ...redirectPaths];
}

export function pagesForLocale(locale: Locale) {
  return seoPages.map((page) => ({ page, copy: page.locales[locale] }));
}
