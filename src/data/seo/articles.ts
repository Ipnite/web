import type { RouteKey, Locale } from "../routes";
import type { SeoPage } from "./types";
import { commonCta } from "./types";
import type { LocaleCopy } from "./helpers";
import { articlesEn } from "./articles-en";
import { articlesEs } from "./articles-es";
import { articlesPt } from "./articles-pt";

export type ArticleCopy = Omit<LocaleCopy, "cta" | "ctaBody" | "eyebrow">;

interface ArticleMeta {
  id: string;
  slugs: Record<Locale, string>;
  related: RouteKey[];
  action: "draft" | "search" | "drawing";
  journey: "journey-idea" | "journey-filed";
}

/** English slugs are also the legacy slugs that were published under /es/learn/ and /pt-br/learn/. */
export const articleIndex: ArticleMeta[] = [
  { id: "how-to-patent-an-idea", slugs: { en: "how-to-patent-an-idea", es: "como-patentar-una-idea", pt: "como-patentear-uma-ideia" }, related: ["ai-drafting", "prior-art", "provisional", "learn", "journey-idea"], action: "draft", journey: "journey-idea" },
  { id: "how-to-write-a-patent-application", slugs: { en: "how-to-write-a-patent-application", es: "como-redactar-una-solicitud-de-patente", pt: "como-redigir-um-pedido-de-patente" }, related: ["ai-drafting", "invention-disclosure", "patent-specification", "drawings", "journey-idea"], action: "draft", journey: "journey-idea" },
  { id: "what-is-a-provisional-patent-application", slugs: { en: "what-is-a-provisional-patent-application", es: "que-es-una-solicitud-provisional-de-patente", pt: "o-que-e-um-pedido-provisorio-de-patente" }, related: ["provisional", "jurisdiction-us", "jurisdiction-mx", "learn"], action: "draft", journey: "journey-idea" },
  { id: "provisional-patent-application-cost", slugs: { en: "provisional-patent-application-cost", es: "cuanto-cuesta-una-solicitud-provisional", pt: "quanto-custa-um-pedido-provisorio" }, related: ["provisional", "ai-drafting", "jurisdiction-us", "learn", "journey-idea"], action: "draft", journey: "journey-idea" },
  { id: "can-ai-write-a-patent-application", slugs: { en: "can-ai-write-a-patent-application", es: "puede-la-ia-redactar-una-solicitud-de-patente", pt: "a-ia-pode-redigir-um-pedido-de-patente" }, related: ["ai-drafting", "security", "attorneys", "learn", "journey-idea"], action: "draft", journey: "journey-idea" },
  { id: "how-to-search-existing-patents", slugs: { en: "how-to-search-existing-patents", es: "como-buscar-patentes-existentes", pt: "como-buscar-patentes-existentes" }, related: ["search", "prior-art", "ai-drafting", "learn", "journey-idea"], action: "search", journey: "journey-idea" },
  { id: "what-is-prior-art", slugs: { en: "what-is-prior-art", es: "que-son-los-antecedentes-de-una-patente", pt: "o-que-e-anterioridade" }, related: ["prior-art", "search", "ai-drafting", "learn"], action: "search", journey: "journey-idea" },
  { id: "how-to-perform-a-prior-art-search", slugs: { en: "how-to-perform-a-prior-art-search", es: "como-hacer-una-busqueda-de-antecedentes", pt: "como-fazer-uma-busca-de-anterioridade" }, related: ["prior-art", "search", "ai-drafting", "learn"], action: "search", journey: "journey-idea" },
  { id: "patent-drawing-requirements", slugs: { en: "patent-drawing-requirements", es: "requisitos-de-los-dibujos-de-patente", pt: "requisitos-dos-desenhos-de-patente" }, related: ["drawings", "ai-drafting", "jurisdiction-us", "learn"], action: "drawing", journey: "journey-idea" },
  { id: "how-patent-claims-work", slugs: { en: "how-patent-claims-work", es: "como-funcionan-las-reivindicaciones", pt: "como-funcionam-as-reivindicacoes" }, related: ["ai-drafting", "prior-art", "attorneys", "learn"], action: "draft", journey: "journey-idea" },
  { id: "what-does-patent-pending-mean", slugs: { en: "what-does-patent-pending-mean", es: "que-significa-patente-en-tramite", pt: "o-que-significa-patente-pendente" }, related: ["provisional", "portfolio", "startups", "learn", "journey-filed"], action: "draft", journey: "journey-filed" },
  { id: "when-should-a-startup-file-a-patent", slugs: { en: "when-should-a-startup-file-a-patent", es: "cuando-debe-una-startup-presentar-una-patente", pt: "quando-uma-startup-deve-depositar-uma-patente" }, related: ["startups", "provisional", "prior-art", "learn"], action: "draft", journey: "journey-idea" },
  { id: "pitch-investors-before-filing-a-patent", slugs: { en: "pitch-investors-before-filing-a-patent", es: "presentar-a-inversionistas-antes-de-patentar", pt: "apresentar-a-investidores-antes-de-patentear" }, related: ["startups", "provisional", "security", "learn"], action: "draft", journey: "journey-idea" },
  { id: "what-is-patentability", slugs: { en: "what-is-patentability", es: "que-es-la-patentabilidad", pt: "o-que-e-patenteabilidade" }, related: ["prior-art", "ai-drafting", "search", "learn"], action: "search", journey: "journey-idea" },
  { id: "novelty-vs-inventive-step", slugs: { en: "novelty-vs-inventive-step", es: "novedad-vs-actividad-inventiva", pt: "novidade-vs-atividade-inventiva" }, related: ["prior-art", "ai-drafting", "search", "learn"], action: "search", journey: "journey-idea" },
  { id: "patent-search-vs-prior-art-search", slugs: { en: "patent-search-vs-prior-art-search", es: "busqueda-de-patentes-vs-busqueda-de-antecedentes", pt: "busca-de-patentes-vs-busca-de-anterioridade" }, related: ["search", "prior-art", "ai-drafting", "learn"], action: "search", journey: "journey-idea" },
];

const eyebrows = { en: "IPnite PATENT GUIDE", es: "GUÍA DE PATENTES IPnite", pt: "GUIA DE PATENTES IPnite" } as const;
const content: Record<Locale, Record<string, ArticleCopy>> = { en: articlesEn, es: articlesEs, pt: articlesPt };
const actions = {
  draft: { name: "start_drafting", event: "start_drafting_clicked" },
  search: { name: "search_prior_art", event: "prior_art_search_clicked" },
  drawing: { name: "create_patent_drawing", event: "patent_drawing_clicked" },
} as const;

export function articlePath(locale: Locale, slug: string) {
  return locale === "es" ? `/es/aprende/${slug}/` : locale === "pt" ? `/pt-br/aprenda/${slug}/` : `/learn/${slug}/`;
}

export const articlePages: SeoPage[] = articleIndex.map((article) => {
  const build = (locale: Locale) => {
    const copy = content[locale][article.id];
    if (!copy) throw new Error(`Missing ${locale} copy for article ${article.id}`);
    return {
      ...copy,
      eyebrow: eyebrows[locale],
      cta: commonCta[locale][0],
      ctaBody: commonCta[locale][1],
      path: articlePath(locale, article.slugs[locale]),
      legacy: locale === "es" ? [`/es/learn/${article.slugs.en}/`] : locale === "pt" ? [`/pt-br/learn/${article.slugs.en}/`] : undefined,
    };
  };
  return {
    id: `article-${article.id}`,
    kind: "article",
    related: article.related,
    journey: article.journey,
    primaryAction: actions[article.action],
    locales: { en: build("en"), es: build("es"), pt: build("pt") },
  } satisfies SeoPage;
});
