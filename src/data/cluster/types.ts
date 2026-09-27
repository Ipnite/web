import type { Locale, RouteKey } from "../routes";

/**
 * Types for the SEO content cluster (patent drafting software topics).
 * This module is additive: it lives beside src/data/seo/ and never changes existing pages.
 */

export type ClusterId =
  | "patent-drafting-software"
  | "ai-patent-tool-for-inventors"
  | "patent-claims-generator"
  | "best-ai-patent-drafting-tools"
  | "ipnite-vs-idea2patentai"
  | "ipnite-vs-patentassist"
  | "ai-patent-confidentiality";

/** An internal link target: an existing site route, an existing Learn article (by article id), or another cluster page. */
export type LinkRef = { route: RouteKey } | { article: string } | { cluster: ClusterId };

export interface LinkItem {
  ref: LinkRef;
  label: string;
  body?: string;
}

export type Block =
  | { type: "prose"; heading: string; paragraphs: string[]; bullets?: string[] }
  | { type: "steps"; heading: string; intro?: string; steps: { title: string; body: string }[] }
  | { type: "cards"; heading: string; intro?: string; items: { title: string; body: string }[] }
  | { type: "checklist"; heading: string; intro?: string; items: string[] }
  | { type: "table"; heading: string; intro?: string; columns: string[]; rows: string[][]; note?: string; caption: string }
  | { type: "split"; heading: string; intro?: string; left: { title: string; items: string[] }; right: { title: string; items: string[] } }
  | { type: "callout"; tone: "note" | "limit"; heading: string; paragraphs: string[] }
  | { type: "links"; heading: string; intro?: string; items: LinkItem[] };

export interface ClusterFaq {
  q: string;
  a: string;
}

export interface ClusterSource {
  label: string;
  url: string;
}

export interface ClusterLocaleCopy {
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  /** Short label used in breadcrumbs and related-link cards. */
  shortName: string;
  blocks: Block[];
  faqs: ClusterFaq[];
  sources?: ClusterSource[];
  cta: { heading: string; body: string };
}

export interface ClusterPage {
  id: ClusterId;
  /** "article" pages get Article schema; "page" pages get WebPage schema. */
  schema: "article" | "page";
  /** True when the page describes IPnite itself, so the WebPage is linked to the site-level SoftwareApplication entity. */
  aboutSoftware: boolean;
  /** Existing analytics CTA name/event pair, reused unchanged from the rest of the site. */
  primaryAction: { name: string; event?: string };
  /** Related links shown at the bottom of the page, in order. Unreleased cluster pages are dropped automatically. */
  related: LinkRef[];
  /** ISO date shown as "last verified" on pages with third-party facts. */
  lastVerified?: string;
  locales: Record<Locale, ClusterLocaleCopy>;
}
