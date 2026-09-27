export type MarketCode = "US" | "LATAM" | "MX" | "AR" | "BR";
export type PlanCode = "inventor" | "startup" | "institutional";
export type BillingPeriod = "monthly" | "annual";

export interface MarketPricing {
  code: MarketCode;
  countryLabel: { en: string; es: string; pt: string };
  locale: "en" | "es" | "pt";
  currency: "USD" | "MXN" | "ARS" | "BRL";
  prices: Record<PlanCode, Record<BillingPeriod, number>>;
  additionalUser: Record<BillingPeriod, number>;
  singleDraft: number;
  draftAddon: number;
  ftoAddon: number;
}

export const marketPricing: Record<MarketCode, MarketPricing> = {
  US: {
    draftAddon: 49, ftoAddon: 199,
    singleDraft: 99,
    code: "US", countryLabel: { en: "United States", es: "Estados Unidos", pt: "Estados Unidos" }, locale: "en", currency: "USD",
    prices: { inventor: { monthly: 50, annual: 500 }, startup: { monthly: 199, annual: 1990 }, institutional: { monthly: 499, annual: 4990 } },
    additionalUser: { monthly: 149, annual: 1490 },
  },
  LATAM: {
    draftAddon: 25, ftoAddon: 100,
    singleDraft: 50,
    code: "LATAM", countryLabel: { en: "Rest of Latin America", es: "Resto de Latinoamérica", pt: "Resto da América Latina" }, locale: "es", currency: "USD",
    prices: { inventor: { monthly: 10, annual: 100 }, startup: { monthly: 100, annual: 1000 }, institutional: { monthly: 250, annual: 2500 } },
    additionalUser: { monthly: 75, annual: 750 },
  },
  MX: {
    draftAddon: 500, ftoAddon: 2000,
    singleDraft: 1000,
    code: "MX", countryLabel: { en: "Mexico", es: "México", pt: "México" }, locale: "es", currency: "MXN",
    prices: { inventor: { monthly: 200, annual: 2000 }, startup: { monthly: 2000, annual: 20000 }, institutional: { monthly: 5000, annual: 50000 } },
    additionalUser: { monthly: 1500, annual: 15000 },
  },
  AR: {
    draftAddon: 50000, ftoAddon: 200000,
    singleDraft: 100000,
    code: "AR", countryLabel: { en: "Argentina", es: "Argentina", pt: "Argentina" }, locale: "es", currency: "ARS",
    prices: { inventor: { monthly: 20000, annual: 200000 }, startup: { monthly: 200000, annual: 2000000 }, institutional: { monthly: 500000, annual: 5000000 } },
    additionalUser: { monthly: 150000, annual: 1500000 },
  },
  BR: {
    draftAddon: 150, ftoAddon: 600,
    singleDraft: 300,
    code: "BR", countryLabel: { en: "Brazil", es: "Brasil", pt: "Brasil" }, locale: "pt", currency: "BRL",
    prices: { inventor: { monthly: 60, annual: 600 }, startup: { monthly: 600, annual: 6000 }, institutional: { monthly: 1500, annual: 15000 } },
    additionalUser: { monthly: 450, annual: 4500 },
  },
};

export const defaultMarketForLocale = { en: "US", es: "LATAM", pt: "BR" } as const;

export function formatPrice(amount: number, currency: MarketPricing["currency"], locale: "en" | "es" | "pt") {
  const localeMap = { en: "en-US", es: "es-MX", pt: "pt-BR" } as const;
  return new Intl.NumberFormat(localeMap[locale], {
    // MXN shares the "$" symbol with USD, so show the code to avoid ambiguity.
    style: "currency", currency, currencyDisplay: currency === "MXN" ? "code" : "symbol", maximumFractionDigits: 0,
  }).format(amount);
}
