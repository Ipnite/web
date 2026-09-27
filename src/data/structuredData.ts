import { marketPricing } from "../config/pricing";
import type { Locale } from "./routes";

export const SITE_URL = "https://www.ipnite.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;
export const FOUNDER_ID = `${SITE_URL}/#rafael-betanzos-san-juan`;

const planNames = {
  inventor: { en: "Inventor", es: "Inventor", pt: "Inventor" },
  startup: { en: "Startup", es: "Startup", pt: "Startup" },
  institutional: { en: "Institutional", es: "Institucional", pt: "Institucional" },
} as const;

const copy = {
  en: {
    description: "IPnite is an AI-assisted patent preparation platform. Its agents help users search prior art, structure an invention disclosure, draft claims and a full patent application with The Drafter, generate patent drawings, run QA, export to DOCX, and manage a patent portfolio.",
    trial: "Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges.",
    monthly: "Monthly",
    annual: "Annual",
  },
  es: {
    description: "IPnite es una plataforma de preparación de patentes asistida por IA. Sus agentes ayudan a buscar antecedentes, estructurar la divulgación de la invención, redactar reivindicaciones y la solicitud completa con The Drafter, generar dibujos, revisar la calidad, exportar en DOCX y gestionar un portafolio de patentes.",
    trial: "Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges.",
    monthly: "Mensual",
    annual: "Anual",
  },
  pt: {
    description: "A IPnite é uma plataforma de preparação de patentes assistida por IA. Seus agentes ajudam a buscar anterioridades, estruturar a divulgação da invenção, redigir reivindicações e o pedido completo com The Drafter, gerar desenhos, revisar a qualidade, exportar em DOCX e gerenciar um portfólio de patentes.",
    trial: "Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges.",
    monthly: "Mensal",
    annual: "Anual",
  },
} as const;

const featureList = {
  en: ["Prior-art search (Discovery Agent)", "Invention disclosure workflow", "Claim and patent application drafting (The Drafter)", "Patent drawing generation", "Field-specific language review", "QA and formatting checks", "DOCX export for purchased drafts; JSON and ZIP export on Startup and Institutional", "Patentability and freedom-to-operate (FTO) analyses delivered for user review", "Patent portfolio, filing, and deadline management", "Team collaboration and permissions"],
  es: ["Búsqueda de antecedentes (Agente de descubrimiento)", "Flujo de divulgación de la invención", "Redacción de reivindicaciones y de la solicitud completa (El Redactor)", "Generación de dibujos de patente", "Revisión del lenguaje técnico del campo", "Control de calidad y formato", "Exportación en DOCX de drafts adquiridos; JSON y ZIP en Startup e Institucional", "Análisis de patentabilidad y de libertad de operación (FTO) entregados para revisión del usuario", "Gestión de portafolio, presentaciones y plazos", "Colaboración en equipo y permisos"],
  pt: ["Busca de anterioridade (Agente de descoberta)", "Fluxo de divulgação da invenção", "Redação de reivindicações e do pedido completo (The Drafter)", "Geração de desenhos de patente", "Revisão da linguagem técnica do campo", "Controle de qualidade e formatação", "Exportação em DOCX de minutas adquiridas; JSON e ZIP em Startup e Institucional", "Análises de patenteabilidade e de liberdade de operação (FTO) entregues para revisão do usuário", "Gestão de portfólio, depósitos e prazos", "Colaboração em equipe e permissões"],
} as const;

/** SoftwareApplication entity for the IPnite platform, with every regional plan as an Offer. */
export function softwareSchema(locale: Locale) {
  const text = copy[locale];
  const offers = Object.values(marketPricing).flatMap((market) =>
    (Object.keys(market.prices) as Array<keyof typeof planNames>).map((plan) => ({
      "@type": "Offer",
      name: `IPnite ${planNames[plan][locale]} — ${market.countryLabel[locale]}`,
      price: String(market.prices[plan].monthly),
      priceCurrency: market.currency,
      eligibleRegion: { "@type": "Place", name: market.countryLabel.en },
      priceSpecification: [
        { "@type": "UnitPriceSpecification", name: text.monthly, price: String(market.prices[plan].monthly), priceCurrency: market.currency, referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
        { "@type": "UnitPriceSpecification", name: text.annual, price: String(market.prices[plan].annual), priceCurrency: market.currency, referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "ANN" } },
      ],
    })),
  );

  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": SOFTWARE_ID,
    name: "IPnite",
    alternateName: ["IPnite Patent Drafting Software", "The Drafter by IPnite"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Patent drafting and IP management software",
    operatingSystem: "Web",
    url: `${SITE_URL}/`,
    inLanguage: ["en", "es", "pt-BR"],
    creator: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    description: text.description,
    featureList: featureList[locale],
    offers: [
      { "@type": "Offer", name: locale === "en" ? "Free trial" : locale === "es" ? "Prueba gratis" : "Teste grátis", price: "0", priceCurrency: "USD", description: text.trial },
      ...offers,
    ],
  };
}
