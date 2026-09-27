export type Locale = "en" | "es" | "pt";

/**
 * Localized URL for every generated SEO page, keyed by a language-neutral id.
 * `legacy` lists URLs that were published before and must redirect to the current one.
 */
export interface RouteEntry {
  en: string;
  es: string;
  pt: string;
  legacy?: Partial<Record<Locale, string[]>>;
}

export const routes = {
  "ai-drafting": { en: "/ai-patent-drafting/", es: "/es/redaccion-de-patentes-con-ia/", pt: "/pt-br/redacao-de-patentes-com-ia/", legacy: { es: ["/es/ai-patent-drafting/"], pt: ["/pt-br/ai-patent-drafting/"] } },
  "prior-art": { en: "/prior-art-search/", es: "/es/busqueda-de-antecedentes/", pt: "/pt-br/busca-de-anterioridade/", legacy: { es: ["/es/prior-art-search/"], pt: ["/pt-br/prior-art-search/"] } },
  drawings: { en: "/patent-drawings/", es: "/es/dibujos-de-patentes/", pt: "/pt-br/desenhos-de-patentes/", legacy: { es: ["/es/patent-drawings/"], pt: ["/pt-br/patent-drawings/"] } },
  "invention-disclosure": { en: "/invention-disclosure/", es: "/es/divulgacion-de-la-invencion/", pt: "/pt-br/divulgacao-da-invencao/" },
  "patent-specification": { en: "/patent-specification/", es: "/es/descripcion-de-la-patente/", pt: "/pt-br/relatorio-descritivo/" },
  "patent-quality-review": { en: "/patent-quality-review/", es: "/es/revision-de-calidad-de-patentes/", pt: "/pt-br/revisao-de-qualidade-de-patentes/" },
  "patent-export": { en: "/patent-application-export/", es: "/es/exportar-solicitud-de-patente/", pt: "/pt-br/exportar-pedido-de-patente/" },
  portfolio: { en: "/patent-portfolio-management/", es: "/es/gestion-de-cartera-de-patentes/", pt: "/pt-br/gestao-de-portfolio-de-patentes/", legacy: { es: ["/es/patent-portfolio-management/"], pt: ["/pt-br/patent-portfolio-management/"] } },
  provisional: { en: "/provisional-patent-application/", es: "/es/solicitud-provisional-de-patente/", pt: "/pt-br/pedido-provisorio-de-patente/", legacy: { es: ["/es/provisional-patent-application/"], pt: ["/pt-br/provisional-patent-application/"] } },
  search: { en: "/patent-search/", es: "/es/busqueda-de-patentes/", pt: "/pt-br/busca-de-patentes/", legacy: { es: ["/es/patent-search/"], pt: ["/pt-br/patent-search/"] } },
  security: { en: "/patent-ai-security/", es: "/es/seguridad-y-privacidad/", pt: "/pt-br/seguranca-e-privacidade/", legacy: { es: ["/es/patent-ai-security/"], pt: ["/pt-br/patent-ai-security/"] } },
  startups: { en: "/for-startups/", es: "/es/para-startups/", pt: "/pt-br/para-startups/", legacy: { es: ["/es/for-startups/"], pt: ["/pt-br/for-startups/"] } },
  attorneys: { en: "/for-patent-attorneys/", es: "/es/para-abogados-y-agentes-de-patentes/", pt: "/pt-br/para-advogados-e-agentes-de-patentes/", legacy: { es: ["/es/for-patent-attorneys/"], pt: ["/pt-br/for-patent-attorneys/"] } },
  universities: { en: "/for-universities/", es: "/es/para-universidades/", pt: "/pt-br/para-universidades/", legacy: { es: ["/es/for-universities/"], pt: ["/pt-br/for-universities/"] } },

  "jurisdiction-us": { en: "/patents-united-states/", es: "/es/patentes-estados-unidos/", pt: "/pt-br/patentes-estados-unidos/", legacy: { es: ["/es/patents-united-states/"], pt: ["/pt-br/patents-united-states/"] } },
  "jurisdiction-mx": { en: "/patents-mexico/", es: "/es/patentes-mexico/", pt: "/pt-br/patentes-mexico/", legacy: { en: ["/patentes-mexico/"] } },
  "jurisdiction-ar": { en: "/patents-argentina/", es: "/es/patentes-argentina/", pt: "/pt-br/patentes-argentina/", legacy: { en: ["/patentes-argentina/"] } },
  "jurisdiction-br": { en: "/patents-brazil/", es: "/es/patentes-brasil/", pt: "/pt-br/patentes-brasil/", legacy: { en: ["/patentes-brasil/"] } },
  "jurisdiction-pct": { en: "/pct-patent-process/", es: "/es/proceso-pct/", pt: "/pt-br/processo-pct/", legacy: { es: ["/es/pct-patent-process/"], pt: ["/pt-br/pct-patent-process/"] } },

  learn: { en: "/learn/", es: "/es/aprende/", pt: "/pt-br/aprenda/", legacy: { es: ["/es/learn/"], pt: ["/pt-br/learn/"] } },
  home: { en: "/", es: "/es/", pt: "/pt-br/" },
  faqs: { en: "/faqs/", es: "/es/faqs/", pt: "/pt-br/faqs/" },
  about: { en: "/about-us/", es: "/es/about-us/", pt: "/pt-br/about-us/" },
  privacy: { en: "/privacy/", es: "/es/privacy/", pt: "/pt-br/privacy/" },
  terms: { en: "/termsandconditions/", es: "/es/termsandconditions/", pt: "/pt-br/termsandconditions/" },
} satisfies Record<string, RouteEntry>;

export type RouteKey = keyof typeof routes;

export function routeFor(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

export function alternatesFor(key: RouteKey): Record<"en" | "es" | "pt-BR" | "x-default", string> {
  const entry = routes[key];
  return { en: entry.en, es: entry.es, "pt-BR": entry.pt, "x-default": entry.en };
}
