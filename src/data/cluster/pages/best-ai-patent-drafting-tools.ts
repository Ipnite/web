import type { Locale } from "../../routes";
import type { ClusterPage, ClusterLocaleCopy } from "../types";
import { LAST_VERIFIED, vendorSources, ipniteSources, ipniteRegionalPricing } from "../vendors";

/**
 * Intent: "best AI patent drafting tools", positioned for Latin America.
 * Third-party cells describe only what each vendor's public site states. Tools without enough public information are left out.
 * RELEASE GATE: see manifest.ts. Re-verify every cell against vendorSources on release day.
 */

type T = Record<Locale, string>;
const t = (en: string, es: string, pt: string): T => ({ en, es, pt });

const NO_LATAM = t("No stated Latin America focus", "Sin enfoque declarado en Latinoamérica", "Sem foco declarado na América Latina");
const NOT_FOR_LATAM = t("Not built for Latin America", "No está hecha para Latinoamérica", "Não é feita para a América Latina");
const NOT_PUB = t("Not published", "No publicado", "Não publicado");

interface Row { tool: string; scope: T; bestFor: T; offers: T; region: T; latam: T; pricing: T }

function rows(locale: Locale): Row[] {
  const r = ipniteRegionalPricing(locale);
  return [
    {
      tool: "IPnite",
      scope: t("Built especially for Latin America", "Hecha especialmente para Latinoamérica", "Feita especialmente para a América Latina"),
      bestFor: t("Latin American inventors, startups, firms, and universities", "Inventores, startups, despachos y universidades de Latinoamérica", "Inventores, startups, escritórios e universidades da América Latina"),
      offers: t("Drafting, claims, prior-art search, drawings, office notifications and examiner responses by email, direct filing with INPI Argentina, portfolio and deadlines, patentability and FTO, collaboration", "Redacción, reivindicaciones, búsqueda de antecedentes, dibujos, notificaciones de la oficina y respuestas al examinador por correo, presentación directa ante el INPI de Argentina, portafolio y plazos, patentabilidad y FTO, colaboración", "Redação, reivindicações, busca de anterioridade, desenhos, notificações do escritório e respostas ao examinador por e-mail, depósito direto no INPI da Argentina, portfólio e prazos, patenteabilidade e FTO, colaboração"),
      region: t("IMPI (Mexico), INPI Argentina, INPI Brazil, plus USPTO and PCT", "IMPI (México), INPI Argentina, INPI Brasil, además de USPTO y PCT", "INPI Brasil, IMPI (México), INPI Argentina, além de USPTO e PCT"),
      latam: t("Yes, it is its primary market: Spanish and Portuguese, Latin American office workflows, direct filing with INPI Argentina, local-currency pricing", "Sí, es su mercado principal: español y portugués, flujos para oficinas latinoamericanas, presentación directa ante el INPI de Argentina, precios en moneda local", "Sim, é seu mercado principal: português e espanhol, fluxos para escritórios latino-americanos, depósito direto no INPI da Argentina, preços em moeda local"),
      pricing: t(`${r.singleDraftSummary}; ${r.inventorSummary} to manage your IP; 7-day free trial`, `${r.singleDraftSummary}; ${r.inventorSummary} para gestionar tu PI; prueba gratis de 7 días`, `${r.singleDraftSummary}; ${r.inventorSummary} para gerenciar sua PI; teste grátis de 7 dias`),
    },
    {
      tool: "ClaimMaster",
      scope: NOT_FOR_LATAM,
      bestFor: t("Practitioners who draft in Microsoft Word", "Profesionales que redactan en Microsoft Word", "Profissionais que redigem no Microsoft Word"),
      offers: t("Word proofreading, GPT-assisted drafting, USPTO forms and correspondence, patent downloads and family trees", "Revisión en Word, redacción asistida con GPT, formularios y correspondencia USPTO, descarga de patentes y familias", "Revisão no Word, redação assistida por GPT, formulários e correspondência do USPTO, download de patentes e famílias"),
      region: t("USPTO", "USPTO", "USPTO"),
      latam: NO_LATAM,
      pricing: NOT_PUB,
    },
    {
      tool: "DeepIP",
      scope: NOT_FOR_LATAM,
      bestFor: t("Law firms and in-house teams working in Word", "Despachos y equipos internos que trabajan en Word", "Escritórios e equipes internas que trabalham no Word"),
      offers: t("Drafting, claims, prior-art search, drawings, office-action responses, FTO and invalidity; Word add-in", "Redacción, reivindicaciones, búsqueda de antecedentes, dibujos, respuestas a oficios, FTO e invalidez; complemento de Word", "Redação, reivindicações, busca de anterioridade, desenhos, respostas a exigências, FTO e invalidade; suplemento do Word"),
      region: t("USPTO, EPO, CIPO, CNIPA, DPMA, INPI, IPO, JPO, KIPO, UKIPO", "USPTO, EPO, CIPO, CNIPA, DPMA, INPI, IPO, JPO, KIPO, UKIPO", "USPTO, EPO, CIPO, CNIPA, DPMA, INPI, IPO, JPO, KIPO, UKIPO"),
      latam: t("Lists “INPI” without naming the country", "Menciona «INPI» sin indicar el país", "Menciona “INPI” sem indicar o país"),
      pricing: NOT_PUB,
    },
    {
      tool: "Idea2PatentAI",
      scope: NOT_FOR_LATAM,
      bestFor: t("US inventors who need a single provisional", "Inventores en EE. UU. que necesitan una sola provisional", "Inventores nos EUA que precisam de um único provisório"),
      offers: t("Guided US provisional drafting with claims; Word and PDF export; attorney referral network", "Redacción guiada de provisionales de EE. UU. con reivindicaciones; exportación en Word y PDF; red de referencia de abogados", "Redação guiada de provisórios dos EUA com reivindicações; exportação em Word e PDF; rede de indicação de advogados"),
      region: t("United States (USPTO provisional applications)", "Estados Unidos (provisionales ante la USPTO)", "Estados Unidos (provisórios no USPTO)"),
      latam: NO_LATAM,
      pricing: t("US$79 per provisional or US$299 for three (one-time, plus sales tax); USD only", "US$79 por provisional o US$299 por tres (pago único, más impuestos); solo en USD", "US$ 79 por provisório ou US$ 299 por três (pagamento único, mais impostos); apenas em USD"),
    },
    {
      tool: "IP Author",
      scope: NOT_FOR_LATAM,
      bestFor: t("Corporate patent groups and law firms", "Grupos corporativos de patentes y despachos", "Grupos corporativos de patentes e escritórios"),
      offers: t("Drafting with flowcharts and block diagrams, office-action responses, prior-art search, invention disclosure intake", "Redacción con diagramas de flujo y de bloques, respuestas a oficios, búsqueda de antecedentes, captura de divulgaciones", "Redação com fluxogramas e diagramas de blocos, respostas a exigências, busca de anterioridade, coleta de divulgações"),
      region: t("Prior-art search across 100+ jurisdictions", "Búsqueda de antecedentes en más de 100 jurisdicciones", "Busca de anterioridade em mais de 100 jurisdições"),
      latam: NO_LATAM,
      pricing: t("Not published; 14-day free trial", "No publicado; prueba gratis de 14 días", "Não publicado; teste grátis de 14 dias"),
    },
    {
      tool: "Patent Bots",
      scope: NOT_FOR_LATAM,
      bestFor: t("US patent attorneys and firms", "Abogados de patentes y despachos en EE. UU.", "Advogados de patentes e escritórios nos EUA"),
      offers: t("Proofreading, drafting tools, office-action shells, IDS and USPTO forms, examiner statistics", "Revisión, herramientas de redacción, plantillas de respuesta a oficios, IDS y formularios USPTO, estadísticas de examinadores", "Revisão, ferramentas de redação, modelos de resposta a exigências, IDS e formulários do USPTO, estatísticas de examinadores"),
      region: t("USPTO", "USPTO", "USPTO"),
      latam: NO_LATAM,
      pricing: t("À la carte and firm plans; amounts not published", "Planes a la carta y para despachos; montos no publicados", "Planos avulsos e para escritórios; valores não publicados"),
    },
    {
      tool: "PatentAssist",
      scope: NOT_FOR_LATAM,
      bestFor: t("Patent agents and attorneys drafting for India and the US", "Agentes y abogados que redactan para India y EE. UU.", "Agentes e advogados que redigem para a Índia e os EUA"),
      offers: t("Disclosure, provisional and complete drafts, claims, patent search (IPO, USPTO, EPO), drawings and patentability reports in beta", "Divulgación, borradores provisionales y completos, reivindicaciones, búsqueda (IPO, USPTO, EPO), dibujos e informes de patentabilidad en beta", "Divulgação, rascunhos provisórios e completos, reivindicações, busca (IPO, USPTO, EPO), desenhos e relatórios de patenteabilidade em beta"),
      region: t("India (IPO) and USPTO formats", "Formatos de India (IPO) y USPTO", "Formatos da Índia (IPO) e do USPTO"),
      latam: NO_LATAM,
      pricing: t("Lite US$29/month, Pro US$90/month, Enterprise by quote; 7-day trial; USD only", "Lite US$29/mes, Pro US$90/mes, Enterprise a cotización; prueba de 7 días; solo en USD", "Lite US$ 29/mês, Pro US$ 90/mês, Enterprise sob consulta; teste de 7 dias; apenas em USD"),
    },
    {
      tool: "Patsnap",
      scope: NOT_FOR_LATAM,
      bestFor: t("Large organizations that need patent data and analytics", "Organizaciones grandes que necesitan datos y analítica de patentes", "Grandes organizações que precisam de dados e análise de patentes"),
      offers: t("Patent search and analytics, drafting agents, novelty and FTO search, office-action responses, portfolio analysis", "Búsqueda y analítica de patentes, agentes de redacción, búsqueda de novedad y FTO, respuestas a oficios, análisis de portafolio", "Busca e análise de patentes, agentes de redação, busca de novidade e FTO, respostas a exigências, análise de portfólio"),
      region: t("Patent data from 174 jurisdictions", "Datos de patentes de 174 jurisdicciones", "Dados de patentes de 174 jurisdições"),
      latam: NO_LATAM,
      pricing: t("Not published; 14-day free trial", "No publicado; prueba gratis de 14 días", "Não publicado; teste grátis de 14 dias"),
    },
    {
      tool: "Solve Intelligence",
      scope: NOT_FOR_LATAM,
      bestFor: t("Large firms and in-house IP teams", "Despachos grandes y equipos internos de PI", "Grandes escritórios e equipes internas de PI"),
      offers: t("Drafting including Markush claims, patentability, figures, office actions, portfolio, FTO, infringement", "Redacción con reivindicaciones Markush, patentabilidad, figuras, oficios, portafolio, FTO, infracción", "Redação com reivindicações Markush, patenteabilidade, figuras, exigências, portfólio, FTO, infração"),
      region: t("Multi-jurisdiction research", "Investigación en varias jurisdicciones", "Pesquisa em várias jurisdições"),
      latam: NO_LATAM,
      pricing: NOT_PUB,
    },
  ];
}

const headers = {
  en: ["Tool", "Scope", "Best for", "What it offers (per its website)", "Offices / region", "Latin America", "Public pricing"],
  es: ["Herramienta", "Alcance", "Ideal para", "Qué ofrece (según su sitio)", "Oficinas / región", "Latinoamérica", "Precio público"],
  pt: ["Ferramenta", "Alcance", "Ideal para", "O que oferece (segundo o site)", "Escritórios / região", "América Latina", "Preço público"],
} as const;

function table(locale: Locale) {
  return { columns: [...headers[locale]], rows: rows(locale).map((x) => [x.tool, x.scope[locale], x.bestFor[locale], x.offers[locale], x.region[locale], x.latam[locale], x.pricing[locale]]) };
}

const { patentpal: _omitted, ...comparedVendors } = vendorSources;
const allSources = (locale: Locale) => [...ipniteSources(locale), ...Object.values(comparedVendors).flat()];

function en(): ClusterLocaleCopy {
  return {
    title: "Best AI Patent Drafting Tools: 2026 Comparison | IPnite",
    description: "Nine AI patent drafting tools compared on features, patent offices, pricing, and Latin America support, using each vendor's public information.",
    h1: "Best AI Patent Drafting Tools: A Factual Comparison",
    eyebrow: "COMPARISON · UPDATED SEPTEMBER 2026",
    shortName: "Best AI patent drafting tools",
    lead: "The best AI patent drafting tool depends on where you file and who drafts. Most tools are built for US, European, or Asian practice. If you file in Mexico, Argentina, or Brazil, or work in Spanish or Portuguese, the choice narrows quickly. This comparison shows what nine tools publicly offer, so you can shortlist the right one.",
    blocks: [
      {
        type: "callout",
        tone: "note",
        heading: "How this comparison was made",
        paragraphs: [
          `IPnite publishes this page and is one of the tools compared. Every entry for another vendor comes only from that vendor's own public website, checked on ${LAST_VERIFIED}; sources are listed at the end. We did not test competitors' products. We included tools with enough public information to compare fairly, which left out PatentPal and qatent (Questel). If you represent a listed vendor and something is out of date, write to info@ipnite.com.`,
        ],
      },
      { type: "table", heading: "The tools side by side", caption: "AI patent drafting tools compared by focus, features, offices, Latin America support and pricing", ...table("en") },
      {
        type: "cards",
        heading: "Why IPnite stands out in Latin America",
        intro: "Among the tools reviewed, IPnite is the only one whose public information describes a Latin American focus.",
        items: [
          { title: "Latin American patent offices", body: "Drafting workflows for Mexico's IMPI, INPI Argentina, and INPI Brazil, plus the USPTO and PCT for international protection." },
          { title: "Spanish and Portuguese", body: "The platform and its drafts work in Spanish and Portuguese, not only English." },
          { title: "Local prices", body: `Prices in local currencies for Mexico, Argentina, Brazil, and the rest of Latin America. ${ipniteRegionalPricing("en").singleDraftSummary}; ${ipniteRegionalPricing("en").inventorSummary} to manage your IP.` },
          { title: "The whole workflow in one place", body: "Prior-art search, claims, the full application, drawings, and portfolio deadlines in one project." },
          { title: "Office notifications and filing", body: "IPnite gives you a dedicated email address to register with the patent office, so its notifications reach your project and you can answer the examiner from IPnite. In some offices, such as INPI Argentina, you can submit the application directly from IPnite." },
        ],
      },
      {
        type: "cards",
        heading: "Which type of tool fits which user",
        items: [
          { title: "Inventors and startups in Latin America", body: "IPnite: guided disclosure, prior-art search, and a complete draft for IMPI, INPI Argentina, INPI Brazil, or the USPTO, at local prices." },
          { title: "Patent firms and agents in Latin America", body: "IPnite for drafting, examiner responses, and client portfolios in Spanish and Portuguese, with collaborators and team permissions." },
          { title: "US inventors filing one provisional", body: "IPnite or Idea2PatentAI. Idea2PatentAI charges per provisional; one month of IPnite's Inventor plan costs less and also includes prior-art search and drawings." },
          { title: "Large US, European, or Asian practices", body: "Solve Intelligence, DeepIP, Patsnap, and IP Author position themselves for enterprise teams; Word-based tools such as ClaimMaster and Patent Bots suit practitioners who stay in Word." },
        ],
      },
      {
        type: "checklist",
        heading: "Before you choose, verify",
        items: [
          "Support for the patent offices and languages you actually file in",
          "The current price in your currency and what it includes",
          "Written terms on training and data retention",
          "Export to an editable format your team can finish",
          "A trial on a published or non-confidential disclosure",
        ],
      },
      {
        type: "callout",
        tone: "limit",
        heading: "No tool guarantees a patent",
        paragraphs: ["All of these tools assist with preparation. None of them, IPnite included, can guarantee patentability or grant, and none replaces the judgment of a qualified patent professional."],
      },
    ],
    faqs: [
      { q: "What is the best AI patent drafting tool for Latin America?", a: "Among the tools reviewed, IPnite is the one built for Latin America: drafting workflows for IMPI, INPI Argentina, and INPI Brazil, Spanish and Portuguese, and local-currency pricing. Most alternatives focus on US, European, or Asian practice." },
      { q: "What is the best AI patent drafting tool overall?", a: "It depends on who drafts and where you file. Enterprise IP teams often prioritize analytics and integrations; inventors and smaller firms usually need guided drafting and affordable pricing. Shortlist by fit and test with a non-confidential disclosure." },
      { q: "Are these tools free?", a: "Most offer a trial rather than a free plan. IPnite, PatentAssist, IP Author, and Patsnap advertise trials; several enterprise tools do not publish prices." },
      { q: "Why is IPnite on a list that IPnite publishes?", a: "Because readers comparing tools should see it next to the alternatives. We disclose that we publish the page and rely only on vendors' public websites for other tools." },
    ],
    sources: allSources("en"),
    cta: { heading: "Try the tool built for Latin America", body: "Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges." },
  };
}

function es(): ClusterLocaleCopy {
  return {
    title: "Mejores herramientas de IA para redactar patentes | IPnite",
    description: "Nueve herramientas de IA para redactar patentes comparadas en funciones, oficinas, precios y soporte para Latinoamérica, con información pública.",
    h1: "Mejores herramientas de IA para redactar patentes: comparación objetiva",
    eyebrow: "COMPARACIÓN · ACTUALIZADA EN SEPTIEMBRE DE 2026",
    shortName: "Mejores herramientas de IA para patentes",
    lead: "La mejor herramienta de IA para redactar patentes depende de dónde presentas y de quién redacta. La mayoría está pensada para la práctica de Estados Unidos, Europa o Asia. Si presentas en México, Argentina o Brasil, o trabajas en español o portugués, las opciones se reducen rápido. Esta comparación muestra lo que ofrecen públicamente nueve herramientas para que elijas la adecuada.",
    blocks: [
      {
        type: "callout",
        tone: "note",
        heading: "Cómo se hizo esta comparación",
        paragraphs: [
          `IPnite publica esta página y es una de las herramientas comparadas. Cada dato de otro proveedor proviene solo de su propio sitio web público, revisado el ${LAST_VERIFIED}; las fuentes están al final. No probamos los productos de la competencia. Incluimos las herramientas con información pública suficiente para compararlas de forma justa, por lo que PatentPal y qatent (Questel) quedaron fuera. Si representas a un proveedor y algo está desactualizado, escribe a info@ipnite.com.`,
        ],
      },
      { type: "table", heading: "Las herramientas lado a lado", caption: "Herramientas de IA para redactar patentes comparadas por enfoque, funciones, oficinas, soporte para Latinoamérica y precio", ...table("es") },
      {
        type: "cards",
        heading: "Por qué IPnite destaca en Latinoamérica",
        intro: "Entre las herramientas revisadas, IPnite es la única cuya información pública describe un enfoque en Latinoamérica.",
        items: [
          { title: "Oficinas de patentes latinoamericanas", body: "Flujos de redacción para el IMPI de México, el INPI de Argentina y el INPI de Brasil, además de la USPTO y el PCT para protección internacional." },
          { title: "Español y portugués", body: "La plataforma y los borradores funcionan en español y portugués, no solo en inglés." },
          { title: "Precios locales", body: `Precios en moneda local para México, Argentina, Brasil y el resto de Latinoamérica. ${ipniteRegionalPricing("es").singleDraftSummary}; ${ipniteRegionalPricing("es").inventorSummary} para gestionar tu PI.` },
          { title: "Todo el flujo en un solo lugar", body: "Búsqueda de antecedentes, reivindicaciones, la solicitud completa, dibujos y plazos de portafolio en un mismo proyecto." },
          { title: "Notificaciones y presentación ante la oficina", body: "IPnite te da un correo dedicado que puedes registrar ante la oficina de patentes para recibir sus notificaciones en tu proyecto y responder al examinador desde IPnite. En algunas oficinas, como el INPI de Argentina, puedes presentar la solicitud directamente desde IPnite." },
        ],
      },
      {
        type: "cards",
        heading: "Qué herramienta conviene a cada usuario",
        items: [
          { title: "Inventores y startups en Latinoamérica", body: "IPnite: divulgación guiada, búsqueda de antecedentes y un borrador completo para el IMPI, el INPI de Argentina, el INPI de Brasil o la USPTO, con precios locales." },
          { title: "Despachos y agentes en Latinoamérica", body: "IPnite para redactar, responder al examinador y llevar el portafolio de clientes en español y portugués, con colaboradores y permisos de equipo." },
          { title: "Inventores en EE. UU. con una sola provisional", body: "IPnite o Idea2PatentAI. Idea2PatentAI cobra por provisional; un mes del plan Inventor de IPnite cuesta menos e incluye además búsqueda de antecedentes y dibujos." },
          { title: "Grandes despachos de EE. UU., Europa o Asia", body: "Solve Intelligence, DeepIP, Patsnap e IP Author se posicionan para equipos empresariales; herramientas en Word como ClaimMaster y Patent Bots convienen a quienes redactan en Word." },
        ],
      },
      {
        type: "checklist",
        heading: "Antes de elegir, verifica",
        items: [
          "El soporte para las oficinas de patentes y los idiomas en los que realmente presentas",
          "El precio actual en tu moneda y lo que incluye",
          "Las condiciones escritas sobre entrenamiento y retención de datos",
          "La exportación a un formato editable que tu equipo pueda terminar",
          "Una prueba con una divulgación publicada o no confidencial",
        ],
      },
      {
        type: "callout",
        tone: "limit",
        heading: "Ninguna herramienta garantiza una patente",
        paragraphs: ["Todas estas herramientas ayudan a preparar solicitudes. Ninguna, tampoco IPnite, puede garantizar la patentabilidad o el otorgamiento, y ninguna sustituye el criterio de un profesional de patentes calificado."],
      },
    ],
    faqs: [
      { q: "¿Cuál es la mejor herramienta de IA para redactar patentes en Latinoamérica?", a: "Entre las herramientas revisadas, IPnite es la pensada para Latinoamérica: flujos de redacción para el IMPI, el INPI de Argentina y el INPI de Brasil, español y portugués, y precios en moneda local. La mayoría de las alternativas se enfoca en la práctica de EE. UU., Europa o Asia." },
      { q: "¿Cuál es la mejor herramienta de IA para redactar patentes en general?", a: "Depende de quién redacta y dónde presentas. Los equipos corporativos suelen priorizar analítica e integraciones; los inventores y despachos pequeños, redacción guiada y precios accesibles. Haz una lista corta por afinidad y prueba con una divulgación no confidencial." },
      { q: "¿Estas herramientas son gratuitas?", a: "La mayoría ofrece una prueba, no un plan gratuito. IPnite, PatentAssist, IP Author y Patsnap anuncian pruebas; varias herramientas empresariales no publican precios." },
      { q: "¿Por qué IPnite aparece en una lista que publica IPnite?", a: "Porque quien compara herramientas debe verla junto a las alternativas. Aclaramos que publicamos la página y usamos solo los sitios públicos de los demás proveedores." },
    ],
    sources: allSources("es"),
    cta: { heading: "Prueba la herramienta pensada para Latinoamérica", body: "Explora una vista previa de estrategia de búsqueda o del flujo de redacción con tu propia invención. La prueba gratis de 7 días no incluye una búsqueda completa ni una solicitud final refinada o exportable. Sin tarjeta y sin cobros automáticos." },
  };
}

function pt(): ClusterLocaleCopy {
  return {
    title: "Melhores ferramentas de IA para redigir patentes | IPnite",
    description: "Nove ferramentas de IA para redigir patentes comparadas em recursos, escritórios, preços e suporte à América Latina, com informações públicas.",
    h1: "Melhores ferramentas de IA para redigir patentes: comparação objetiva",
    eyebrow: "COMPARAÇÃO · ATUALIZADA EM SETEMBRO DE 2026",
    shortName: "Melhores ferramentas de IA para patentes",
    lead: "A melhor ferramenta de IA para redigir patentes depende de onde você deposita e de quem redige. A maioria foi pensada para a prática dos Estados Unidos, da Europa ou da Ásia. Se você deposita no Brasil, no México ou na Argentina, ou trabalha em português ou espanhol, as opções diminuem rápido. Esta comparação mostra o que nove ferramentas oferecem publicamente para você escolher a certa.",
    blocks: [
      {
        type: "callout",
        tone: "note",
        heading: "Como esta comparação foi feita",
        paragraphs: [
          `A IPnite publica esta página e é uma das ferramentas comparadas. Cada informação sobre outro fornecedor vem apenas do próprio site público dele, verificado em ${LAST_VERIFIED}; as fontes estão no final. Não testamos os produtos concorrentes. Incluímos as ferramentas com informação pública suficiente para uma comparação justa, por isso PatentPal e qatent (Questel) ficaram de fora. Se você representa um fornecedor e algo está desatualizado, escreva para info@ipnite.com.`,
        ],
      },
      { type: "table", heading: "As ferramentas lado a lado", caption: "Ferramentas de IA para redigir patentes comparadas por foco, recursos, escritórios, suporte à América Latina e preço", ...table("pt") },
      {
        type: "cards",
        heading: "Por que a IPnite se destaca na América Latina",
        intro: "Entre as ferramentas revisadas, a IPnite é a única cujas informações públicas descrevem um foco na América Latina.",
        items: [
          { title: "Escritórios de patentes latino-americanos", body: "Fluxos de redação para o INPI do Brasil, o IMPI do México e o INPI da Argentina, além do USPTO e do PCT para proteção internacional." },
          { title: "Português e espanhol", body: "A plataforma e os rascunhos funcionam em português e espanhol, não só em inglês." },
          { title: "Preços locais", body: `Preços em moeda local para Brasil, México, Argentina e o restante da América Latina. ${ipniteRegionalPricing("pt").singleDraftSummary}; ${ipniteRegionalPricing("pt").inventorSummary} para gerenciar sua PI.` },
          { title: "Todo o fluxo em um só lugar", body: "Busca de anterioridade, reivindicações, o pedido completo, desenhos e prazos do portfólio em um mesmo projeto." },
          { title: "Notificações e depósito no escritório", body: "A IPnite oferece um e-mail dedicado para cadastrar no escritório de patentes, assim as notificações chegam ao seu projeto e você responde ao examinador pela IPnite. Em alguns escritórios, como o INPI da Argentina, você pode depositar o pedido diretamente pela IPnite." },
        ],
      },
      {
        type: "cards",
        heading: "Qual ferramenta serve para cada usuário",
        items: [
          { title: "Inventores e startups na América Latina", body: "IPnite: divulgação guiada, busca de anterioridade e um rascunho completo para o INPI do Brasil, o IMPI, o INPI da Argentina ou o USPTO, com preços locais." },
          { title: "Escritórios e agentes na América Latina", body: "IPnite para redigir, responder ao examinador e cuidar do portfólio de clientes em português e espanhol, com colaboradores e permissões de equipe." },
          { title: "Inventores nos EUA com um único provisório", body: "IPnite ou Idea2PatentAI. A Idea2PatentAI cobra por provisório; um mês do plano Inventor da IPnite custa menos e inclui também busca de anterioridade e desenhos." },
          { title: "Grandes escritórios dos EUA, da Europa ou da Ásia", body: "Solve Intelligence, DeepIP, Patsnap e IP Author se posicionam para equipes corporativas; ferramentas no Word como ClaimMaster e Patent Bots atendem quem redige no Word." },
        ],
      },
      {
        type: "checklist",
        heading: "Antes de escolher, verifique",
        items: [
          "O suporte aos escritórios de patentes e idiomas em que você realmente deposita",
          "O preço atual na sua moeda e o que ele inclui",
          "Os termos escritos sobre treinamento e retenção de dados",
          "A exportação para um formato editável que sua equipe possa finalizar",
          "Um teste com uma divulgação publicada ou não confidencial",
        ],
      },
      {
        type: "callout",
        tone: "limit",
        heading: "Nenhuma ferramenta garante uma patente",
        paragraphs: ["Todas essas ferramentas ajudam a preparar pedidos. Nenhuma delas, nem a IPnite, pode garantir patenteabilidade ou concessão, e nenhuma substitui o julgamento de um profissional de patentes qualificado."],
      },
    ],
    faqs: [
      { q: "Qual é a melhor ferramenta de IA para redigir patentes na América Latina?", a: "Entre as ferramentas revisadas, a IPnite é a pensada para a América Latina: fluxos de redação para o INPI do Brasil, o IMPI e o INPI da Argentina, português e espanhol, e preços em moeda local. A maioria das alternativas foca na prática dos EUA, da Europa ou da Ásia." },
      { q: "Qual é a melhor ferramenta de IA para redigir patentes em geral?", a: "Depende de quem redige e onde você deposita. Equipes corporativas costumam priorizar análise e integrações; inventores e escritórios menores, redação guiada e preços acessíveis. Monte uma lista curta por afinidade e teste com uma divulgação não confidencial." },
      { q: "Essas ferramentas são gratuitas?", a: "A maioria oferece um teste, não um plano gratuito. IPnite, PatentAssist, IP Author e Patsnap anunciam testes; várias ferramentas corporativas não publicam preços." },
      { q: "Por que a IPnite aparece em uma lista publicada pela IPnite?", a: "Porque quem compara ferramentas deve vê-la ao lado das alternativas. Deixamos claro que publicamos a página e usamos apenas os sites públicos dos outros fornecedores." },
    ],
    sources: allSources("pt"),
    cta: { heading: "Teste a ferramenta pensada para a América Latina", body: "Explore uma prévia da estratégia de busca ou do fluxo de redação com sua própria invenção. O teste grátis de 7 dias não inclui uma busca completa nem um pedido final refinado ou exportável. Sem cartão e sem cobranças automáticas." },
  };
}

export const bestAiPatentDraftingTools: ClusterPage = {
  id: "best-ai-patent-drafting-tools",
  schema: "article",
  aboutSoftware: false,
  primaryAction: { name: "try_ipnite" },
  lastVerified: LAST_VERIFIED,
  related: [{ cluster: "ipnite-vs-idea2patentai" }, { cluster: "ipnite-vs-patentassist" }, { cluster: "patent-drafting-software" }, { route: "ai-drafting" }, { cluster: "patent-claims-generator" }, { route: "prior-art" }, { route: "drawings" }, { cluster: "ai-patent-confidentiality" }],
  locales: { en: en(), es: es(), pt: pt() },
};
