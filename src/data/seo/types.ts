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
  en: ["Get your application ready to file", "Start with a free 7-day trial: explore your invention with the Discovery Agent and run your first prior-art search. No credit card."],
  es: ["Deja tu solicitud lista para presentar", "Empieza con la prueba gratis de 7 días: explora tu invención con el Agente de descubrimiento y haz tu primera búsqueda de antecedentes. Sin tarjeta."],
  pt: ["Deixe seu pedido pronto para depósito", "Comece com o teste grátis de 7 dias: explore sua invenção com o Agente de descoberta e faça sua primeira busca de anterioridade. Sem cartão."],
} as const;
