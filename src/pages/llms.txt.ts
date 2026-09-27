import type { APIRoute } from "astro";
import { marketPricing, formatPrice, type PlanCode } from "../config/pricing";
import { routes } from "../data/routes";
import { seoPages } from "../data/seoContent";

const SITE = "https://www.ipnite.com";
const url = (path: string) => `${SITE}${path}`;

const planLabels: Record<PlanCode, string> = { inventor: "Inventor", startup: "Startup", institutional: "Institutional" };

function pricingLines() {
  const lines: string[] = [];
  for (const plan of Object.keys(planLabels) as PlanCode[]) {
    const byMarket = Object.values(marketPricing)
      .map((market) => `${market.countryLabel.en} ${formatPrice(market.prices[plan].monthly, market.currency, "en")}/month or ${formatPrice(market.prices[plan].annual, market.currency, "en")}/year (${market.currency})`)
      .join("; ");
    lines.push(`- ${planLabels[plan]}: ${byMarket}.`);
  }
  const addUsers = Object.values(marketPricing)
    .map((market) => `${market.countryLabel.en} ${formatPrice(market.additionalUser.monthly, market.currency, "en")}/month`)
    .join("; ");
  lines.push(`- Additional Institutional users: ${addUsers}.`);
  for (const market of Object.values(marketPricing)) {
    lines.push(`- ${market.countryLabel.en} (${market.currency}): Single Draft ${formatPrice(market.singleDraft, market.currency, "en")} one-time; Inventor full-draft add-on ${formatPrice(market.draftAddon, market.currency, "en")}; Startup FTO add-on ${formatPrice(market.ftoAddon, market.currency, "en")} per jurisdiction.`);
  }
  return lines.join("\n");
}

const product = seoPages.filter((page) => page.kind === "product" || page.kind === "trust");
const audiences = seoPages.filter((page) => page.kind === "audience");
const jurisdictions = seoPages.filter((page) => page.kind === "jurisdiction");
const articles = seoPages.filter((page) => page.kind === "article");

const linkLine = (page: (typeof seoPages)[number]) =>
  `- [${page.locales.en.h1}](${url(page.locales.en.path)}): ${page.locales.en.description} Spanish: ${url(page.locales.es.path)} · Portuguese: ${url(page.locales.pt.path)}`;

export const GET: APIRoute = () => {
  const body = `# IPnite

> IPnite is an AI-assisted patent preparation platform operated by Ik-Holcan LLC (Delaware, United States). It helps independent inventors, startups, law firms, patent agents, universities, and R&D teams search prior art, draft patent applications, create patent drawings, and manage patent portfolios for the United States, Mexico, Argentina, Brazil, and PCT international applications.

## Company facts

- Product: IPnite (drafting module: The Drafter)
- Legal entity: Ik-Holcan LLC, a Delaware limited liability company
- Website: ${SITE}/ · App: https://app.ipnite.com
- Contact: info@ipnite.com
- Languages: English, Spanish, Portuguese
- Founder: Rafael Betanzos San Juan, lawyer, biotechnologist, and patent expert (${url("/rafael-betanzos-san-juan/")})
- Patent offices supported: USPTO (United States), IMPI (Mexico, including provisional applications available since April 6, 2026), INPI Argentina, INPI Brazil, and WIPO PCT applications
- Coming soon: direct filing with INPI Argentina from the platform, followed by trademark filings

## What IPnite does

- Discovery Agent: structures the invention disclosure and runs AI-assisted prior-art searches.
- The Drafter: drafts independent and dependent claims, a detailed description with embodiments, background, summary, and abstract.
- Drawing Agent: generates reference drawings with consistent reference numerals.
- Specialized and QA agents: review field-specific language and formatting.
- Export: DOCX for purchased drafts; JSON and ZIP project export on Startup and Institutional.
- Patentability and freedom-to-operate (FTO) analyses, delivered as AI-assisted deliverables that the user reads or has professionally reviewed.
- Portfolio management: filings, calendar, deadline alerts, collaborators, and team permissions.

## What IPnite does not do

- IPnite is software, not a law firm. It does not provide legal advice or create an attorney-client relationship.
- IPnite does not file applications automatically today; users file themselves or through a professional.
- IPnite does not guarantee patentability, grant, or the conclusions of any search or analysis. Users are responsible for reviewing outputs or having them reviewed before filing.

## Plans and pricing

Prices depend on the user's country or region and are shown on the home page pricing section (${url("/#plans")}). Annual billing equals ten monthly payments.

${pricingLines()}

- Inventor: 1 active project, 2 prior-art searches per month, workspace, portfolio, documents, dates and alerts, 1 external collaborator and 1 GB storage. Full patent drafts are discounted add-ons, not included in the base subscription.
- Startup: up to 10 active projects, 10 prior-art searches per month, patentability search, drafting, drawings and QA within plan limits, DOCX, JSON and ZIP export, portfolio and filing management, up to 3 collaborators per project, 15 GB storage, FTO as an add-on priced per jurisdiction.
- Institutional: 3 users included, unlimited active projects subject to reasonable use, 50 prior-art searches per month, all modules, FTO included, DOCX, JSON and ZIP export, team permissions, invention disclosure management, 50 GB storage.
- IPnite for Research: eligible universities, research centers, and technology transfer offices receive 50% off the Institutional plan and additional users.
- Free trial: Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges.
- Single Draft: 1 complete prior-art search, 1 complete refined draft with claims, specification and abstract, drawings where supported, QA and export. One-time payment, no subscription required. The purchase may be credited toward an eligible subscription upgrade.
- Renewal: paid plans renew automatically each month or year until cancelled; users cancel anytime from their account and keep access until the end of the paid period.
- Payments: Stripe today; local methods such as Mercado Pago (Argentina) and Pix (Brazil) are being added.

## Data and privacy

- IPnite never uses customer inventions, prompts, documents, or outputs to train AI models or for any purpose other than providing the service.
- Users own everything IPnite generates from their information and may file, license, or share it without restriction.
- AI processing runs on the enterprise Google Cloud Vertex AI API in IPnite's own Google Cloud environment.
- Details: ${url(routes.security.en)} and ${url(routes.privacy.en)}

## Product pages

${product.map(linkLine).join("\n")}

## Solutions by audience

${audiences.map(linkLine).join("\n")}

## Patent filing guides by jurisdiction

- [AI patent drafting for the United States](${url(routes["jurisdiction-us"].en)})
- [Redacción de patentes para México con IA (Spanish)](${url(routes["jurisdiction-mx"].es)})
- [Redacción de patentes para Argentina con IA (Spanish)](${url(routes["jurisdiction-ar"].es)})
- [Redação de patentes para o Brasil com IA (Portuguese)](${url(routes["jurisdiction-br"].pt)})
${jurisdictions.filter((page) => !page.handBuilt).map(linkLine).join("\n")}

## Patent guides (Learn)

${articles.map(linkLine).join("\n")}

## Other pages

- [Home](${url("/")}) · [Spanish home](${url("/es/")}) · [Portuguese home](${url("/pt-br/")})
- [FAQs](${url("/faqs/")}) · [About IPnite](${url("/about-us/")}) · [Learning center](${url("/learn/")})
- [Terms and Conditions](${url("/termsandconditions/")}) · [Privacy Policy](${url("/privacy/")})
- Full text of guides and product pages for AI assistants: ${url("/llms-full.txt")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
