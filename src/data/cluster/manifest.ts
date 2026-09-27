import type { Locale, RouteKey } from "../routes";
import type { ClusterId } from "./types";

/**
 * Publication manifest for the SEO content cluster.
 *
 * The site has no scheduling system and deploys on every push to main, so release is a manual,
 * reviewable switch: a topic is built, routed, and listed in the sitemap only when `released` is true.
 * Unreleased topics are not generated at all (no URL, no sitemap entry, no inbound links).
 *
 * To publish a topic: set `released: true`, run `npm run build && npm run seo:audit`, commit, push.
 * All three languages of a topic are released together.
 *
 * Local QA of unreleased topics: `IPNITE_CLUSTER_PREVIEW=1 npm run build`. Never set that variable in CI.
 */
export interface ClusterTopic {
  id: ClusterId;
  paths: Record<Locale, string>;
  week: number;
  recommendedDate: string;
  released: boolean;
  /** Anything that must happen before release. */
  gate?: string;
}

export const clusterTopics: ClusterTopic[] = [
  {
    id: "patent-drafting-software",
    paths: { en: "/patent-drafting-software/", es: "/es/software-para-redactar-patentes/", pt: "/pt-br/software-para-redigir-patentes/" },
    week: 1,
    recommendedDate: "2026-09-28",
    released: true,
  },
  {
    id: "ai-patent-tool-for-inventors",
    paths: { en: "/ai-patent-tool-for-inventors/", es: "/es/herramienta-de-patentes-con-ia-para-inventores/", pt: "/pt-br/ferramenta-de-patentes-com-ia-para-inventores/" },
    week: 1,
    recommendedDate: "2026-09-28",
    released: true,
  },
  {
    id: "patent-claims-generator",
    paths: { en: "/patent-claims-generator/", es: "/es/generador-de-reivindicaciones-de-patente/", pt: "/pt-br/gerador-de-reivindicacoes-de-patente/" },
    week: 2,
    recommendedDate: "2026-10-05",
    released: true,
  },
  {
    id: "ai-patent-confidentiality",
    paths: { en: "/ai-patent-confidentiality/", es: "/es/confidencialidad-de-patentes-con-ia/", pt: "/pt-br/confidencialidade-de-patentes-com-ia/" },
    week: 2,
    recommendedDate: "2026-10-05",
    released: true,
  },
  {
    id: "best-ai-patent-drafting-tools",
    paths: { en: "/best-ai-patent-drafting-tools/", es: "/es/mejores-herramientas-de-ia-para-redactar-patentes/", pt: "/pt-br/melhores-ferramentas-de-ia-para-redigir-patentes/" },
    week: 3,
    recommendedDate: "2026-10-12",
    released: false,
    gate: "Approve the comparison facts (see docs/comparison-review-2026.md) and re-verify every vendor source on release day; update lastVerified.",
  },
  {
    id: "ipnite-vs-idea2patentai",
    paths: { en: "/ipnite-vs-idea2patentai/", es: "/es/ipnite-vs-idea2patentai/", pt: "/pt-br/ipnite-vs-idea2patentai/" },
    week: 4,
    recommendedDate: "2026-10-19",
    released: false,
    gate: "Approve facts and re-verify Idea2PatentAI's public pages and pricing on release day; update lastVerified.",
  },
  {
    id: "ipnite-vs-patentassist",
    paths: { en: "/ipnite-vs-patentassist/", es: "/es/ipnite-vs-patentassist/", pt: "/pt-br/ipnite-vs-patentassist/" },
    week: 4,
    recommendedDate: "2026-10-19",
    released: false,
    gate: "Approve facts and re-verify PatentAssist's public pages and pricing on release day; update lastVerified.",
  },
];

/**
 * Requested topics that were NOT built because an existing, indexable page already targets the same intent.
 * Creating them would split ranking signals between two IPnite URLs. The keyword maps to the existing page.
 */
export const mappedToExisting: { requested: string; keyword: string; existing: RouteKey }[] = [
  { requested: "/ai-patent-drafting-software/", keyword: "AI patent drafting software", existing: "ai-drafting" },
  { requested: "/patent-software-for-startups/", keyword: "patent software for startups", existing: "startups" },
  { requested: "/patent-prior-art-search/", keyword: "patent prior art search", existing: "prior-art" },
  { requested: "/patent-drawing-generator/", keyword: "patent drawing generator", existing: "drawings" },
  { requested: "/provisional-patent-generator/", keyword: "provisional patent generator", existing: "provisional" },
];

/**
 * Future architecture. Nothing here is built or routed. `mapsTo` marks an existing page that already owns the intent;
 * those entries should become improvements to the existing page, not new URLs.
 */
export const plannedTopics: { path: string; intent: string; mapsTo?: RouteKey; note?: string }[] = [
  { path: "/ai-patent-claims/", intent: "AI patent claims", note: "Same intent as /patent-claims-generator/; target it there instead of a new URL." },
  { path: "/ai-prior-art-search/", intent: "AI prior art search", mapsTo: "prior-art" },
  { path: "/ai-patent-drawings/", intent: "AI patent drawings", mapsTo: "drawings" },
  { path: "/patentability-search-software/", intent: "patentability search software" },
  { path: "/freedom-to-operate-search/", intent: "freedom-to-operate search" },
  { path: "/patent-portfolio-management-software/", intent: "patent portfolio management software", mapsTo: "portfolio" },
  { path: "/invention-disclosure-software/", intent: "invention disclosure software" },
  { path: "/patent-drafting-software-comparison/", intent: "patent drafting software comparison", note: "Same intent as /best-ai-patent-drafting-tools/; target it there instead of a new URL." },
  { path: "/ipnite-vs-solve-intelligence/", intent: "IPnite vs Solve Intelligence" },
  { path: "/ipnite-vs-deepip/", intent: "IPnite vs DeepIP" },
  { path: "/ipnite-vs-patentpal/", intent: "IPnite vs PatentPal" },
  { path: "/ipnite-vs-claimmaster/", intent: "IPnite vs ClaimMaster" },
  { path: "/ipnite-vs-patsnap/", intent: "IPnite vs Patsnap" },
  { path: "/patent-drafting-usa/", intent: "patent drafting USA", mapsTo: "jurisdiction-us" },
  { path: "/epo-patent-drafting/", intent: "EPO patent drafting" },
  { path: "/pct-patent-drafting/", intent: "PCT patent drafting", mapsTo: "jurisdiction-pct" },
  { path: "/es/patentes-mexico/", intent: "patentes México", mapsTo: "jurisdiction-mx" },
  { path: "/es/patentes-argentina/", intent: "patentes Argentina", mapsTo: "jurisdiction-ar" },
  { path: "/pt-br/patentes-brasil/", intent: "patentes Brasil", mapsTo: "jurisdiction-br" },
];
