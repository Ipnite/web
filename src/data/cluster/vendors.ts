import { marketPricing, formatPrice } from "../../config/pricing";
import type { Locale } from "../routes";
import type { ClusterSource } from "./types";

/**
 * Public sources for third-party facts used on the comparison pages.
 * Every statement about another vendor must come from one of these pages and be re-verified before release.
 * Last verified: 2026-09-26.
 */
export const LAST_VERIFIED = "2026-09-26";

export const vendorSources = {
  idea2patentai: [
    { label: "Idea2PatentAI — home page", url: "https://idea2patentai.com/" },
    { label: "Idea2PatentAI — for attorneys", url: "https://idea2patentai.com/for-attorneys" },
    { label: "Idea2PatentAI — pricing", url: "https://idea2patentai.com/pricing" },
  ],
  patentassist: [
    { label: "PatentAssist — home page", url: "https://patentassist.ai/" },
    { label: "PatentAssist — features", url: "https://patentassist.ai/features/" },
    { label: "PatentAssist — pricing", url: "https://patentassist.ai/pricing/" },
  ],
  solve: [
    { label: "Solve Intelligence — home page", url: "https://www.solveintelligence.com/" },
    { label: "Solve Intelligence — drafting", url: "https://www.solveintelligence.com/product/drafting" },
  ],
  deepip: [
    { label: "DeepIP — home page", url: "https://www.deepip.ai/" },
    { label: "DeepIP — patent drawings generation", url: "https://www.deepip.ai/products/patent-drawings-generation" },
  ],
  patentpal: [{ label: "PatentPal — home page", url: "https://patentpal.com/" }],
  claimmaster: [{ label: "ClaimMaster — home page", url: "https://www.patentclaimmaster.com/" }],
  patentbots: [{ label: "Patent Bots — home page", url: "https://www.patentbots.com/" }],
  patsnap: [{ label: "Patsnap — home page", url: "https://www.patsnap.com/" }],
  ipauthor: [{ label: "IP Author — home page", url: "https://ipauthor.com/" }],
} satisfies Record<string, ClusterSource[]>;

const ipniteSourceLabels = {
  en: { pricing: "IPnite — plans and pricing", security: "IPnite — security and privacy", drafting: "IPnite — AI patent drafting" },
  es: { pricing: "IPnite — planes y precios", security: "IPnite — seguridad y privacidad", drafting: "IPnite — redacción de patentes con IA" },
  pt: { pricing: "IPnite — planos e preços", security: "IPnite — segurança e privacidade", drafting: "IPnite — redação de patentes com IA" },
} as const;

export function ipniteSources(locale: Locale): ClusterSource[] {
  const labels = ipniteSourceLabels[locale];
  const prefix = locale === "es" ? "/es" : locale === "pt" ? "/pt-br" : "";
  const drafting = locale === "es" ? "/es/redaccion-de-patentes-con-ia/" : locale === "pt" ? "/pt-br/redacao-de-patentes-com-ia/" : "/ai-patent-drafting/";
  const security = locale === "es" ? "/es/seguridad-y-privacidad/" : locale === "pt" ? "/pt-br/seguranca-e-privacidade/" : "/patent-ai-security/";
  return [
    { label: labels.drafting, url: `https://www.ipnite.com${drafting}` },
    { label: labels.pricing, url: `https://www.ipnite.com${prefix}/#plans` },
    { label: labels.security, url: `https://www.ipnite.com${security}` },
  ];
}

/** IPnite's US monthly prices, read from the live pricing config so comparison pages never drift from the pricing section. */
export function ipniteUsPrices(locale: Locale) {
  const us = marketPricing.US;
  return {
    inventor: formatPrice(us.prices.inventor.monthly, us.currency, locale),
    startup: formatPrice(us.prices.startup.monthly, us.currency, locale),
    institutional: formatPrice(us.prices.institutional.monthly, us.currency, locale),
  };
}

/**
 * IPnite's regional prices for the comparison pages (the LATAM strategy), read from the pricing config.
 * Commercial path: Try (free trial) → Draft (one-time Single Draft) → Manage (Inventor) → Grow (Startup / Institutional).
 * Spanish pages lead with Latin America, Mexico, and Argentina; Portuguese pages with Brazil; English pages show Latin America and the US.
 */
export function ipniteRegionalPricing(locale: Locale) {
  // Currency codes (USD, MXN, ARS) avoid ambiguity where several "$" currencies appear together.
  const money = (code: keyof typeof marketPricing, amount: number) => locale === "pt" && code === "BR"
    ? formatPrice(amount, marketPricing[code].currency, locale)
    : new Intl.NumberFormat(locale === "pt" ? "pt-BR" : locale === "es" ? "es-MX" : "en-US", { style: "currency", currency: marketPricing[code].currency, currencyDisplay: "code", maximumFractionDigits: 0 }).format(amount).replace(/\u00a0/g, " ");
  const plan = (code: keyof typeof marketPricing, p: "inventor" | "startup" | "institutional") => money(code, marketPricing[code].prices[p].monthly);
  const draft = (code: keyof typeof marketPricing) => money(code, marketPricing[code].singleDraft);
  const addon = (code: keyof typeof marketPricing) => money(code, marketPricing[code].draftAddon);
  const inventor = { latam: plan("LATAM", "inventor"), mx: plan("MX", "inventor"), ar: plan("AR", "inventor"), br: plan("BR", "inventor"), us: plan("US", "inventor") };
  if (locale === "es") {
    return {
      inventor,
      singleDraft: `${draft("MX")} en México, ${draft("AR")} en Argentina y ${draft("LATAM")} en el resto de Latinoamérica`,
      singleDraftLatam: `${draft("MX")} en México, ${draft("AR")} en Argentina y ${draft("LATAM")} en el resto de Latinoamérica`,
      singleDraftSummary: `Borrador con el Redactor, pago único: ${draft("MX")} en México, ${draft("AR")} en Argentina o ${draft("LATAM")} en el resto de Latinoamérica`,
      draftAddon: `${addon("MX")} en México, ${addon("AR")} en Argentina y ${addon("LATAM")} en el resto de Latinoamérica`,
      inventorSummary: `Inventor: ${inventor.mx}/mes en México, ${inventor.ar}/mes en Argentina o ${inventor.latam}/mes en el resto de Latinoamérica`,
      plans: `México: borrador ${draft("MX")}; Inventor ${plan("MX", "inventor")}, Startup ${plan("MX", "startup")}, Institucional ${plan("MX", "institutional")} al mes. Argentina: borrador ${draft("AR")}; Inventor ${plan("AR", "inventor")}, Startup ${plan("AR", "startup")}, Institucional ${plan("AR", "institutional")} al mes. Resto de Latinoamérica: borrador ${draft("LATAM")}; Inventor ${plan("LATAM", "inventor")}, Startup ${plan("LATAM", "startup")}, Institucional ${plan("LATAM", "institutional")} al mes`,
      currency: "En moneda local: pesos mexicanos (MXN) en México, pesos argentinos (ARS) en Argentina y reales (BRL) en Brasil; USD en el resto de Latinoamérica",
      usdOnly: "Solo en dólares estadounidenses (USD)",
      path: "Prueba gratis → borrador de pago único con el Redactor → plan Inventor para gestionar tu PI → Startup o Institucional para crecer",
      upgrade: "Si pasas al plan Inventor anual, se descuenta el 100% del borrador en el primer año; si pasas a Startup, se descuenta del primer mes",
    };
  }
  if (locale === "pt") {
    return {
      inventor,
      singleDraft: `${draft("BR")} no Brasil e ${draft("LATAM")} no restante da América Latina`,
      singleDraftLatam: `${draft("BR")} no Brasil e ${draft("LATAM")} no restante da América Latina`,
      singleDraftSummary: `Minuta avulsa, pagamento único: ${draft("BR")} no Brasil ou ${draft("LATAM")} no restante da América Latina`,
      draftAddon: `${addon("BR")} no Brasil e ${addon("LATAM")} no restante da América Latina`,
      inventorSummary: `Inventor: ${inventor.br}/mês no Brasil`,
      plans: `Brasil: minuta avulsa ${draft("BR")}; Inventor ${plan("BR", "inventor")}, Startup ${plan("BR", "startup")}, Institucional ${plan("BR", "institutional")} por mês`,
      currency: "Em moeda local: reais (BRL) no Brasil, pesos mexicanos (MXN) no México e pesos argentinos (ARS) na Argentina; USD no restante da América Latina",
      usdOnly: "Apenas em dólares americanos (USD)",
      path: "Teste grátis → minuta avulsa com pagamento único → plano Inventor para gerenciar sua PI → Startup ou Institucional para crescer",
      upgrade: "Ao migrar para o plano Inventor anual, 100% da minuta é descontado no primeiro ano; ao migrar para o Startup, é descontado do primeiro mês",
    };
  }
  return {
    inventor,
    singleDraft: `${draft("MX")} in Mexico, ${draft("AR")} in Argentina, ${draft("BR")} in Brazil, ${draft("LATAM")} in the rest of Latin America, and ${draft("US")} in the US`,
    singleDraftLatam: `${draft("MX")} in Mexico, ${draft("AR")} in Argentina, ${draft("BR")} in Brazil, and ${draft("LATAM")} in the rest of Latin America`,
    singleDraftSummary: `Single Draft with The Drafter, one-time: ${draft("MX")} in Mexico, ${draft("AR")} in Argentina, ${draft("BR")} in Brazil, ${draft("LATAM")} in the rest of Latin America, ${draft("US")} in the US`,
    draftAddon: `${addon("MX")} in Mexico, ${addon("AR")} in Argentina, ${addon("BR")} in Brazil, ${addon("LATAM")} in the rest of Latin America, and ${addon("US")} in the US`,
    inventorSummary: `Inventor from ${inventor.mx}/month in Mexico, ${inventor.ar} in Argentina, ${inventor.br} in Brazil, ${inventor.latam} in the rest of Latin America (${inventor.us} in the US)`,
    plans: `Single Draft ${draft("US")} (one-time); Inventor ${plan("US", "inventor")}, Startup ${plan("US", "startup")}, Institutional ${plan("US", "institutional")} per month in the US; lower prices in local currency across Latin America`,
    currency: "Local currency: Mexican pesos (MXN) in Mexico, Argentine pesos (ARS) in Argentina, and reais (BRL) in Brazil; USD in the US and the rest of Latin America",
    usdOnly: "US dollars (USD) only",
    path: "Free trial → one-time Single Draft with The Drafter → Inventor plan to manage your IP → Startup or Institutional to grow",
    upgrade: "Upgrade to an annual Inventor plan and 100% of the Single Draft is credited to the first year; upgrade to Startup and it is credited to the first month",
  };
}
