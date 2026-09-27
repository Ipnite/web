import type { Locale, RouteKey } from "../routes";

export type SeoKind = "product" | "audience" | "trust" | "article" | "jurisdiction";

export interface SeoSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SeoFaq {
  q: string;
  a: string;
}

export interface SeoSource {
  label: string;
  url: string;
}

export interface SeoLocaleContent {
  /** Path of this page in this language, with leading and trailing slash. */
  path: string;
  /** Previously published paths that must redirect here. */
  legacy?: string[];
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  sections: SeoSection[];
  faqs?: SeoFaq[];
  sources?: SeoSource[];
  cta: string;
  ctaBody: string;
}

export interface SeoPage {
  id: string;
  kind: SeoKind;
  /** Pages built by hand in src/pages; the generator skips them but keeps their legacy redirects. */
  handBuilt?: Partial<Record<Locale, true>>;
  related: RouteKey[];
  primaryAction: { name: string; event?: string };
  locales: Record<Locale, SeoLocaleContent>;
}

export const commonCta = {
  en: ["Get your application ready to file", "Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges."],
  es: ["Deja tu solicitud lista para presentar", "Explora una vista previa de estrategia de búsqueda o del flujo de redacción con tu propia invención. La prueba gratis de 7 días no incluye una búsqueda completa ni una solicitud final refinada o exportable. Sin tarjeta y sin cobros automáticos."],
  pt: ["Deixe seu pedido pronto para depósito", "Explore uma prévia da estratégia de busca ou do fluxo de redação com sua própria invenção. O teste grátis de 7 dias não inclui uma busca completa nem um pedido final refinado ou exportável. Sem cartão e sem cobranças automáticas."],
} as const;
