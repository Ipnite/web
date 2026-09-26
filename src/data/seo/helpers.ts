import { routes, type Locale, type RouteKey } from "../routes";
import type { SeoLocaleContent } from "./types";

export type LocaleCopy = Omit<SeoLocaleContent, "path" | "legacy">;

/** Attaches the localized path and legacy redirects defined in routes.ts. */
export function routed(key: RouteKey, copy: Record<Locale, LocaleCopy>): Record<Locale, SeoLocaleContent> {
  const entry = routes[key] as { en: string; es: string; pt: string; legacy?: Partial<Record<Locale, string[]>> };
  return {
    en: { ...copy.en, path: entry.en, legacy: entry.legacy?.en },
    es: { ...copy.es, path: entry.es, legacy: entry.legacy?.es },
    pt: { ...copy.pt, path: entry.pt, legacy: entry.legacy?.pt },
  };
}
