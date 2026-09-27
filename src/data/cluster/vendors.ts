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
 * IPnite's regional prices for the Spanish and Portuguese pages (the LATAM strategy), read from the pricing config.
 * English pages keep US prices; Spanish pages show Latin America, Mexico, and Argentina; Portuguese pages show Brazil.
 */
export function ipniteRegionalPricing(locale: Locale) {
  // Currency codes (USD, MXN, ARS) avoid ambiguity where several "$" currencies appear together.
  const f = (code: keyof typeof marketPricing, plan: "inventor" | "startup" | "institutional") => locale === "es"
    ? new Intl.NumberFormat("es-MX", { style: "currency", currency: marketPricing[code].currency, currencyDisplay: "code", maximumFractionDigits: 0 }).format(marketPricing[code].prices[plan].monthly).replace(/\u00a0/g, " ")
    : formatPrice(marketPricing[code].prices[plan].monthly, marketPricing[code].currency, locale);
  const inventor = { latam: f("LATAM", "inventor"), mx: f("MX", "inventor"), ar: f("AR", "inventor"), br: f("BR", "inventor"), us: f("US", "inventor") };
  if (locale === "es") {
    return {
      inventor,
      inventorSummary: `Inventor desde ${inventor.latam}/mes en Latinoamérica (${inventor.mx} en México, ${inventor.ar} en Argentina)`,
      oneProvisional: `Un mes del plan Inventor: ${inventor.latam} en Latinoamérica, ${inventor.mx} en México, ${inventor.ar} en Argentina, ${inventor.us} en EE. UU.`,
      plans: `Inventor ${f("LATAM", "inventor")}, Startup ${f("LATAM", "startup")}, Institucional ${f("LATAM", "institutional")} al mes en Latinoamérica; precios locales en México y Argentina`,
    };
  }
  if (locale === "pt") {
    return {
      inventor,
      inventorSummary: `Inventor ${inventor.br}/mês no Brasil`,
      oneProvisional: `Um mês do plano Inventor: ${inventor.br} no Brasil, ${inventor.latam} no restante da América Latina, ${inventor.us} nos EUA`,
      plans: `Inventor ${f("BR", "inventor")}, Startup ${f("BR", "startup")}, Institucional ${f("BR", "institutional")} por mês no Brasil`,
    };
  }
  return {
    inventor,
    inventorSummary: `Inventor from ${inventor.latam}/month in Latin America (${inventor.us} in the US)`,
    oneProvisional: `One month of the Inventor plan: ${inventor.latam} in Latin America, ${inventor.us} in the US`,
    plans: `Inventor ${f("US", "inventor")}, Startup ${f("US", "startup")}, Institutional ${f("US", "institutional")} per month in the US; lower regional prices in Latin America`,
  };
}
