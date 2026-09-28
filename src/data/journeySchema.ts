import { routeFor, type Locale } from "./routes";
import { SITE_URL, ORGANIZATION_ID } from "./structuredData";

/** WebPage + BreadcrumbList for a journey hub. No FAQPage: the hubs link to answers instead of hosting FAQ content. */
export function journeySchema({ lang, path, title, description, crumb, home }: { lang: Locale; path: string; title: string; description: string; crumb: string; home: string }) {
  const url = `${SITE_URL}${path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: lang === "pt" ? "pt-BR" : lang,
      image: `${SITE_URL}/og-image.png`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": ORGANIZATION_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: home, item: `${SITE_URL}${routeFor("home", lang)}` },
        { "@type": "ListItem", position: 2, name: crumb, item: url },
      ],
    },
  ];
}
