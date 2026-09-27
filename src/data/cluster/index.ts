import { routes, type Locale, type RouteKey } from "../routes";
import { seoPages } from "../seoContent";
import { articleIndex, articlePath } from "../seo/articles";
import { clusterTopics } from "./manifest";
import type { ClusterId, ClusterPage, LinkRef } from "./types";
import { patentDraftingSoftware } from "./pages/patent-drafting-software";
import { aiPatentToolForInventors } from "./pages/ai-patent-tool-for-inventors";
import { patentClaimsGenerator } from "./pages/patent-claims-generator";
import { aiPatentConfidentiality } from "./pages/ai-patent-confidentiality";
import { bestAiPatentDraftingTools } from "./pages/best-ai-patent-drafting-tools";
import { ipniteVsIdea2PatentAi } from "./pages/ipnite-vs-idea2patentai";
import { ipniteVsPatentAssist } from "./pages/ipnite-vs-patentassist";

export type { ClusterPage } from "./types";

const allPages: Record<ClusterId, ClusterPage> = {
  "patent-drafting-software": patentDraftingSoftware,
  "ai-patent-tool-for-inventors": aiPatentToolForInventors,
  "patent-claims-generator": patentClaimsGenerator,
  "ai-patent-confidentiality": aiPatentConfidentiality,
  "best-ai-patent-drafting-tools": bestAiPatentDraftingTools,
  "ipnite-vs-idea2patentai": ipniteVsIdea2PatentAi,
  "ipnite-vs-patentassist": ipniteVsPatentAssist,
};

/** Local QA only: `IPNITE_CLUSTER_PREVIEW=1 npm run build` also builds unreleased topics. Never set in CI. */
const preview = typeof process !== "undefined" && process.env?.IPNITE_CLUSTER_PREVIEW === "1";

const topicById = new Map(clusterTopics.map((topic) => [topic.id, topic]));

export function isLive(id: ClusterId) {
  return preview || topicById.get(id)?.released === true;
}

export function clusterPath(id: ClusterId, locale: Locale) {
  const topic = topicById.get(id);
  if (!topic) throw new Error(`Cluster topic ${id} is missing from manifest.ts`);
  return topic.paths[locale];
}

/** Resolves an internal link, or returns undefined when the target is an unreleased cluster page. */
export function resolveLink(ref: LinkRef, locale: Locale): string | undefined {
  if ("route" in ref) return routes[ref.route][locale];
  if ("article" in ref) {
    const article = articleIndex.find((entry) => entry.id === ref.article);
    if (!article) throw new Error(`Unknown article id ${ref.article}`);
    return articlePath(locale, article.slugs[locale]);
  }
  return isLive(ref.cluster) ? clusterPath(ref.cluster, locale) : undefined;
}

const routeLabels: Partial<Record<RouteKey, Record<Locale, string>>> = {
  "ai-drafting": { en: "AI patent drafting software", es: "Software de redacción de patentes con IA", pt: "Software de redação de patentes com IA" },
  "prior-art": { en: "AI prior-art search", es: "Búsqueda de antecedentes con IA", pt: "Busca de anterioridade com IA" },
  drawings: { en: "Patent drawing generator", es: "Generador de dibujos de patentes", pt: "Gerador de desenhos de patentes" },
  provisional: { en: "Provisional patent applications with AI", es: "Solicitudes provisionales con IA", pt: "Pedidos provisórios com IA" },
  security: { en: "IPnite security and privacy", es: "Seguridad y privacidad en IPnite", pt: "Segurança e privacidade na IPnite" },
  startups: { en: "Patent software for startups", es: "Software de patentes para startups", pt: "Software de patentes para startups" },
  attorneys: { en: "For patent attorneys and agents", es: "Para abogados y agentes de patentes", pt: "Para advogados e agentes de patentes" },
  portfolio: { en: "Patent portfolio management", es: "Gestión de portafolio de patentes", pt: "Gestão de portfólio de patentes" },
  "jurisdiction-pct": { en: "The PCT process", es: "El proceso PCT", pt: "O processo PCT" },
  learn: { en: "Learning center", es: "Centro de aprendizaje", pt: "Central de aprendizado" },
};

/** Short label for a link card: the cluster page's short name, a fixed label for site routes, or the Learn article's H1. */
export function linkLabel(ref: LinkRef, locale: Locale): string {
  if ("cluster" in ref) return allPages[ref.cluster].locales[locale].shortName;
  if ("route" in ref) {
    const label = routeLabels[ref.route]?.[locale];
    if (!label) throw new Error(`No label for route ${ref.route}`);
    return label;
  }
  const path = resolveLink(ref, locale);
  const article = seoPages.find((page) => page.locales[locale].path === path);
  if (!article) throw new Error(`No label for article ${ref.article}`);
  return article.locales[locale].h1;
}

const prefixes: Record<Locale, string> = { en: "/", es: "/es/", pt: "/pt-br/" };

/** Every URL that already exists on the site, used to refuse any cluster URL that would replace or hide one. */
function existingPaths(): Set<string> {
  const paths = new Set<string>();
  for (const page of seoPages) {
    for (const locale of ["en", "es", "pt"] as const) {
      paths.add(page.locales[locale].path);
      for (const legacy of page.locales[locale].legacy ?? []) paths.add(legacy);
    }
  }
  for (const entry of Object.values(routes)) {
    paths.add(entry.en); paths.add(entry.es); paths.add(entry.pt);
    const legacy = (entry as { legacy?: Partial<Record<Locale, string[]>> }).legacy;
    for (const list of Object.values(legacy ?? {})) for (const path of list ?? []) paths.add(path);
  }
  const files = Object.keys(import.meta.glob("/src/pages/**/*.astro"));
  for (const file of files) {
    if (file.includes("[")) continue;
    const route = file.replace(/^\/src\/pages/, "").replace(/\.astro$/, "").replace(/\/index$/, "");
    paths.add(`${route}/`.replace(/^\/?/, "/"));
  }
  return paths;
}

function assertNoCollisions() {
  const taken = existingPaths();
  const seen = new Set<string>();
  for (const topic of clusterTopics) {
    for (const locale of ["en", "es", "pt"] as const) {
      const path = topic.paths[locale];
      if (!path.startsWith(prefixes[locale]) || !path.endsWith("/")) throw new Error(`Cluster path ${path} is not a valid ${locale} path`);
      if (path.slice(prefixes[locale].length, -1).includes("/")) throw new Error(`Cluster path ${path} must be a single segment`);
      if (taken.has(path)) throw new Error(`Cluster path ${path} collides with an existing page`);
      if (seen.has(path)) throw new Error(`Cluster path ${path} is used twice`);
      seen.add(path);
    }
  }
}

/** Static paths for the cluster route of a locale. Only released topics are generated. */
export function clusterStaticPaths(locale: Locale) {
  assertNoCollisions();
  return clusterTopics
    .filter((topic) => isLive(topic.id))
    .map((topic) => ({
      params: { topic: topic.paths[locale].slice(prefixes[locale].length, -1) },
      props: { page: allPages[topic.id] },
    }));
}
