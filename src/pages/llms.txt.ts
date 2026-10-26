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
  lines.push(`- Additional Institutional users (planned; billing not available): ${addUsers}.`);
  for (const market of Object.values(marketPricing)) {
    lines.push(`- ${market.countryLabel.en} (${market.currency}): Single Draft ${formatPrice(market.singleDraft, market.currency, "en")} one-time; Inventor full-draft add-on ${formatPrice(market.draftAddon, market.currency, "en")}; standalone Prior-Art Search ${formatPrice(market.priorArtSearch, market.currency, "en")} for one execution and its results.`);
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
- Patentability Search and FTO are separate from Prior-Art Search and are not currently available.
- Portfolio management: filings, calendar, deadline alerts, collaborators, and team permissions.

## What IPnite does not do

- IPnite is software, not a law firm. It does not provide legal advice or create an attorney-client relationship.
- IPnite does not file applications automatically today; users file themselves or through a professional.
- IPnite does not guarantee patentability, grant, or the conclusions of any search or analysis. Users are responsible for reviewing outputs or having them reviewed before filing.

## Plans and pricing

Prices depend on the user's country or region and are shown on the home page pricing section (${url("/#plans")}). Annual billing equals ten monthly payments.

${pricingLines()}

- Inventor: 9 managed projects, 1 selected drafting project, 2 Prior-Art Searches per month, 1 collaborator per project, 1 GB storage; Full Draft requires an eligible paid add-on. Independent purchased Drafts do not use the selected drafting slot. Startup: 10 active projects, 10 searches per month, 3 collaborators per project, 15 GB. Institutional: unlimited managed projects subject to fair use, 50 searches per month, 3 organization seats, 10 collaborators per project, 50 GB. Startup and Institutional include one Full Draft entitlement per managed project. Annual plans keep monthly Search quotas.
- IPnite for Research: eligible universities, research centers, and technology transfer offices receive 50% off the Institutional plan and additional users.
- Free trial: 7 days without a card or automatic charges. One initial project, one claims generation and one drawing generation, without free regeneration. Search Strategy/Plan preparation is allowed; paid Search execution and results are not included. Full Draft requires a valid paid entitlement. Trial-only content is read-only for 30 days after expiry.
- Single Draft: standalone claims, specification, abstract, 10 total image generation/edit operations, one final Audit/QA at explicit Finalize and a saved final DOCX. Read-only after successful Finalize; repeat downloads use the same file. Search and Management are not included. Standalone Search does not include Draft or Management. One eligible Draft purchase may be credited toward an eligible annual subscription within 30 days of payment, without stacking; eligibility is confirmed by the server.
- Retention: Cancellation does not delete your account. Subscription capabilities stop when paid access expires. Independent Draft/Search purchases and their required content remain accessible under their product lifecycle and retention rules. Unpurchased content is not promised indefinite retention; uncertain cleanup is not automatic deletion.
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
