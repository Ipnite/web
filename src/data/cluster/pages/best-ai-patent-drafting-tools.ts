import type { Locale } from "../../routes";
import type { ClusterPage, ClusterLocaleCopy } from "../types";
import { LAST_VERIFIED, vendorSources, ipniteSources, ipniteUsPrices, ipniteRegionalPricing } from "../vendors";

/**
 * Intent: "best AI patent drafting tools" — an objective comparison based only on vendors' public pages.
 * "Not stated" means the reviewed public pages did not say; it does not mean the product lacks the feature.
 * RELEASE GATE: see manifest.ts. Re-verify every cell against vendorSources on release day.
 */

type T = Record<Locale, string>;
const t = (en: string, es: string, pt: string): T => ({ en, es, pt });

const NS = t("Not stated", "No indicado", "Não informado");
const YES = t("Yes", "Sí", "Sim");
const NOT_PUB = t("Not published", "No publicado", "Não publicado");

interface Row { tool: string; focus: T; customers: T; delivery: T; pricing: T; drafting: T; claims: T; prior: T; drawings: T; oa: T; portfolio: T; fto: T; jurisdictions: T; security: T; collaboration: T }

function rows(locale: Locale): Row[] {
  const p = ipniteUsPrices(locale);
  const regional = ipniteRegionalPricing(locale);
  return [
    {
      tool: "IPnite",
      focus: t("End-to-end workflow: disclosure, search, drafting, drawings, portfolio", "Flujo completo: divulgación, búsqueda, redacción, dibujos y cartera", "Fluxo completo: divulgação, busca, redação, desenhos e portfólio"),
      customers: t("Inventors, startups, patent professionals, universities", "Inventores, startups, profesionales de patentes, universidades", "Inventores, startups, profissionais de patentes, universidades"),
      delivery: t("Web app; DOCX export", "App web; exportación en DOCX", "App web; exportação em DOCX"),
      pricing: t(`Published: from ${p.inventor}/month in the US, lower regional prices in Latin America; 7-day free trial`, `Publicado: ${regional.inventorSummary}; prueba gratis de 7 días`, `Publicado: ${regional.inventorSummary}; teste grátis de 7 dias`),
      drafting: YES, claims: YES, prior: YES, drawings: YES,
      oa: t("Not offered", "No ofrecido", "Não oferecido"),
      portfolio: YES,
      fto: t("Add-on; included in Institutional", "Complemento; incluido en Institucional", "Complemento; incluído no Institucional"),
      jurisdictions: t("USPTO, IMPI (Mexico), INPI Argentina, INPI Brazil, PCT", "USPTO, IMPI (México), INPI Argentina, INPI Brasil, PCT", "USPTO, IMPI (México), INPI Argentina, INPI Brasil, PCT"),
      security: t("No training on customer content; enterprise Vertex AI API; encryption in transit and at rest", "Sin entrenamiento con contenido del cliente; API empresarial de Vertex AI; cifrado en tránsito y en reposo", "Sem treinamento com conteúdo do cliente; API corporativa do Vertex AI; criptografia em trânsito e em repouso"),
      collaboration: t("Collaborators; team permissions", "Colaboradores; permisos de equipo", "Colaboradores; permissões de equipe"),
    },
    {
      tool: "ClaimMaster",
      focus: t("Proofreading and drafting automation in Word, with GPT-based drafting features", "Revisión y automatización en Word, con funciones de redacción basadas en GPT", "Revisão e automação no Word, com recursos de redação baseados em GPT"),
      customers: t("Law firms, patent practitioners", "Despachos y profesionales de patentes", "Escritórios e profissionais de patentes"),
      delivery: t("Microsoft Word add-in, runs locally", "Complemento de Microsoft Word, se ejecuta localmente", "Suplemento do Microsoft Word, executado localmente"),
      pricing: NOT_PUB,
      drafting: t("GPT-assisted sections", "Secciones asistidas con GPT", "Seções assistidas por GPT"),
      claims: t("Proofreading checks", "Revisión de errores", "Verificação de erros"),
      prior: NS,
      drawings: t("Part-number consistency checks", "Revisión de números de referencia", "Verificação de sinais de referência"),
      oa: t("USPTO forms and correspondence", "Formularios USPTO y correspondencia", "Formulários do USPTO e correspondência"),
      portfolio: NS, fto: NS,
      jurisdictions: t("USPTO forms; US and foreign family trees", "Formularios USPTO; familias de EE. UU. y extranjeras", "Formulários do USPTO; famílias dos EUA e estrangeiras"),
      security: t("Local processing emphasized; GPT features use an external model", "Destaca el procesamiento local; las funciones GPT usan un modelo externo", "Destaca o processamento local; recursos GPT usam um modelo externo"),
      collaboration: NS,
    },
    {
      tool: "DeepIP",
      focus: t("Drafting, prosecution, search, and analysis for professionals", "Redacción, trámite, búsqueda y análisis para profesionales", "Redação, processamento, busca e análise para profissionais"),
      customers: t("Law firms, in-house patent teams", "Despachos y equipos internos de patentes", "Escritórios e equipes internas de patentes"),
      delivery: t("Microsoft Word add-in; API", "Complemento de Microsoft Word; API", "Suplemento do Microsoft Word; API"),
      pricing: NOT_PUB,
      drafting: YES, claims: YES, prior: YES,
      drawings: t("Yes (separate module)", "Sí (módulo aparte)", "Sim (módulo separado)"),
      oa: YES, portfolio: NS,
      fto: t("FTO and invalidity analysis", "Análisis FTO y de invalidez", "Análise FTO e de invalidade"),
      jurisdictions: t("USPTO, EPO, CIPO, CNIPA, DPMA, INPI, IPO, JPO, KIPO, UKIPO", "USPTO, EPO, CIPO, CNIPA, DPMA, INPI, IPO, JPO, KIPO, UKIPO", "USPTO, EPO, CIPO, CNIPA, DPMA, INPI, IPO, JPO, KIPO, UKIPO"),
      security: t("States ISO 27001, ISO 42001, SOC 2 Type II; no retention or training", "Declara ISO 27001, ISO 42001, SOC 2 Tipo II; sin retención ni entrenamiento", "Declara ISO 27001, ISO 42001, SOC 2 Tipo II; sem retenção nem treinamento"),
      collaboration: NS,
    },
    {
      tool: "Idea2PatentAI",
      focus: t("Guided provisional application drafting", "Redacción guiada de solicitudes provisionales", "Redação guiada de pedidos provisórios"),
      customers: t("Inventors, entrepreneurs, startups; attorney workflow offered", "Inventores, emprendedores, startups; ofrece flujo para abogados", "Inventores, empreendedores, startups; oferece fluxo para advogados"),
      delivery: t("Web app; Word and PDF export", "App web; exportación en Word y PDF", "App web; exportação em Word e PDF"),
      pricing: t("US$79 per provisional or US$199 for three (one-time)", "US$79 por provisional o US$199 por tres (pago único)", "US$ 79 por provisório ou US$ 199 por três (pagamento único)"),
      drafting: t("Provisional applications", "Solicitudes provisionales", "Pedidos provisórios"),
      claims: t("Yes (section of the draft)", "Sí (sección del borrador)", "Sim (seção do rascunho)"),
      prior: NS, drawings: NS, oa: NS, portfolio: NS, fto: NS,
      jurisdictions: t("US provisional applications", "Solicitudes provisionales de EE. UU.", "Pedidos provisórios dos EUA"),
      security: t("TLS 1.2+, AES-256 at rest; no training on invention details; user deletion", "TLS 1.2+, AES-256 en reposo; sin entrenamiento con la invención; eliminación por el usuario", "TLS 1.2+, AES-256 em repouso; sem treinamento com a invenção; exclusão pelo usuário"),
      collaboration: NS,
    },
    {
      tool: "IP Author",
      focus: t("Drafting, office actions, and prior-art search for patent teams", "Redacción, oficios y búsqueda de antecedentes para equipos de patentes", "Redação, exigências e busca de anterioridade para equipes de patentes"),
      customers: t("Corporate patent groups, law firms, in-house IP teams", "Grupos corporativos de patentes, despachos, equipos internos de PI", "Grupos corporativos de patentes, escritórios, equipes internas de PI"),
      delivery: NS,
      pricing: t("Not published; 14-day free trial", "No publicado; prueba gratis de 14 días", "Não publicado; teste grátis de 14 dias"),
      drafting: YES, claims: YES, prior: YES,
      drawings: t("Flowcharts and block diagrams", "Diagramas de flujo y de bloques", "Fluxogramas e diagramas de blocos"),
      oa: YES, portfolio: NS, fto: NS,
      jurisdictions: t("Prior-art search across 100+ jurisdictions", "Búsqueda de antecedentes en más de 100 jurisdicciones", "Busca de anterioridade em mais de 100 jurisdições"),
      security: t("States SOC 2 Type II; no training; zero-retention options", "Declara SOC 2 Tipo II; sin entrenamiento; opciones sin retención", "Declara SOC 2 Tipo II; sem treinamento; opções sem retenção"),
      collaboration: NS,
    },
    {
      tool: "Patent Bots",
      focus: t("Proofreading, prosecution tools, and examiner statistics", "Revisión, herramientas de trámite y estadísticas de examinadores", "Revisão, ferramentas de processamento e estatísticas de examinadores"),
      customers: t("Patent attorneys, law firms", "Abogados de patentes y despachos", "Advogados de patentes e escritórios"),
      delivery: t("Web; Word add-in", "Web; complemento de Word", "Web; suplemento do Word"),
      pricing: t("À la carte and firm plans; amounts not published", "Planes a la carta y para despachos; montos no publicados", "Planos avulsos e para escritórios; valores não publicados"),
      drafting: t("Drafting and proofreading tools", "Herramientas de redacción y revisión", "Ferramentas de redação e revisão"),
      claims: t("Proofreading checks", "Revisión de errores", "Verificação de erros"),
      prior: NS, drawings: NS,
      oa: t("Office-action shells, IDS, USPTO forms", "Plantillas de respuesta, IDS, formularios USPTO", "Modelos de resposta, IDS, formulários do USPTO"),
      portfolio: t("Patent list building", "Listas de patentes", "Listas de patentes"),
      fto: NS,
      jurisdictions: t("USPTO tools; US and European patent data", "Herramientas USPTO; datos de patentes de EE. UU. y Europa", "Ferramentas do USPTO; dados de patentes dos EUA e da Europa"),
      security: t("States zero-data-retention infrastructure", "Declara infraestructura sin retención de datos", "Declara infraestrutura sem retenção de dados"),
      collaboration: NS,
    },
    {
      tool: "PatentAssist",
      focus: t("Disclosure, claims, and specification drafting with patent search", "Redacción de divulgación, reivindicaciones y descripción con búsqueda de patentes", "Redação de divulgação, reivindicações e relatório com busca de patentes"),
      customers: t("Patent agents and attorneys; also innovators and startups", "Agentes y abogados de patentes; también innovadores y startups", "Agentes e advogados de patentes; também inovadores e startups"),
      delivery: t("Web app; DOCX export in IPO or USPTO format", "App web; DOCX en formato IPO o USPTO", "App web; DOCX no formato IPO ou USPTO"),
      pricing: t("Lite US$29/month, Pro US$90/month, Enterprise by quote; 7-day trial", "Lite US$29/mes, Pro US$90/mes, Enterprise a cotización; prueba de 7 días", "Lite US$ 29/mês, Pro US$ 90/mês, Enterprise sob consulta; teste de 7 dias"),
      drafting: YES, claims: YES,
      prior: t("Search (IPO, USPTO, EPO); patentability reports (beta)", "Búsqueda (IPO, USPTO, EPO); informes de patentabilidad (beta)", "Busca (IPO, USPTO, EPO); relatórios de patenteabilidade (beta)"),
      drawings: t("AI generation (beta)", "Generación con IA (beta)", "Geração com IA (beta)"),
      oa: NS, portfolio: NS, fto: NS,
      jurisdictions: t("India (IPO) and USPTO drafting formats", "Formatos de India (IPO) y USPTO", "Formatos da Índia (IPO) e do USPTO"),
      security: t("AES-256, TLS 1.2+; no training (Azure OpenAI); hosted in EU and India regions", "AES-256, TLS 1.2+; sin entrenamiento (Azure OpenAI); alojado en regiones de la UE e India", "AES-256, TLS 1.2+; sem treinamento (Azure OpenAI); hospedado em regiões da UE e da Índia"),
      collaboration: NS,
    },
    {
      tool: "PatentPal",
      focus: t("Generates specification text and figures from your claims", "Genera descripción y figuras a partir de tus reivindicaciones", "Gera relatório e figuras a partir das suas reivindicações"),
      customers: NS,
      delivery: t("Web app; export to Word and Visio or PowerPoint", "App web; exporta a Word y Visio o PowerPoint", "App web; exporta para Word e Visio ou PowerPoint"),
      pricing: NOT_PUB,
      drafting: t("Detailed description, abstract, summary", "Descripción detallada, resumen y sumario", "Relatório detalhado, resumo e sumário"),
      claims: t("You provide the claims", "Tú aportas las reivindicaciones", "Você fornece as reivindicações"),
      prior: NS,
      drawings: t("Flowcharts and block diagrams", "Diagramas de flujo y de bloques", "Fluxogramas e diagramas de blocos"),
      oa: NS, portfolio: NS, fto: NS, jurisdictions: NS, security: NS, collaboration: NS,
    },
    {
      tool: "Patsnap",
      focus: t("Patent search and analytics with AI drafting and search agents", "Búsqueda y analítica de patentes con agentes de IA de redacción y búsqueda", "Busca e análise de patentes com agentes de IA de redação e busca"),
      customers: t("Law firms, life-sciences and high-tech companies", "Despachos, empresas de ciencias de la vida y alta tecnología", "Escritórios, empresas de ciências da vida e alta tecnologia"),
      delivery: NS,
      pricing: t("Not published; 14-day free trial", "No publicado; prueba gratis de 14 días", "Não publicado; teste grátis de 14 dias"),
      drafting: t("Drafting agents", "Agentes de redacción", "Agentes de redação"),
      claims: YES,
      prior: t("Novelty search", "Búsqueda de novedad", "Busca de novidade"),
      drawings: NS, oa: YES,
      portfolio: t("Portfolio analysis", "Análisis de cartera", "Análise de portfólio"),
      fto: YES,
      jurisdictions: t("Patent data from 174 jurisdictions", "Datos de patentes de 174 jurisdicciones", "Dados de patentes de 174 jurisdições"),
      security: t("States ISO 27001:2022, SOC 2 Type 1; TLS 1.2+, AES-256", "Declara ISO 27001:2022, SOC 2 Tipo 1; TLS 1.2+, AES-256", "Declara ISO 27001:2022, SOC 2 Tipo 1; TLS 1.2+, AES-256"),
      collaboration: NS,
    },
    {
      tool: "Solve Intelligence",
      focus: t("Drafting, prosecution, portfolio, and litigation support for professionals", "Redacción, trámite, cartera y apoyo en litigios para profesionales", "Redação, processamento, portfólio e apoio a litígios para profissionais"),
      customers: t("Law firms, in-house IP teams", "Despachos y equipos internos de PI", "Escritórios e equipes internas de PI"),
      delivery: NS,
      pricing: NOT_PUB,
      drafting: YES,
      claims: t("Yes, including Markush claims", "Sí, incluidas reivindicaciones Markush", "Sim, inclusive reivindicações Markush"),
      prior: t("Patentability assessments", "Evaluaciones de patentabilidad", "Avaliações de patenteabilidade"),
      drawings: t("Figure generation", "Generación de figuras", "Geração de figuras"),
      oa: YES, portfolio: YES,
      fto: t("FTO risk reviews", "Revisiones de riesgo FTO", "Revisões de risco FTO"),
      jurisdictions: NS,
      security: t("States SOC 2 Type II, ISO 27001, ISO 42001; no training; configurable zero retention", "Declara SOC 2 Tipo II, ISO 27001, ISO 42001; sin entrenamiento; retención cero configurable", "Declara SOC 2 Tipo II, ISO 27001, ISO 42001; sem treinamento; retenção zero configurável"),
      collaboration: NS,
    },
  ];
}

const headers = {
  en: {
    glance: ["Tool", "Main focus", "Stated customers", "Delivery", "Public pricing"],
    features: ["Tool", "Drafting", "Claims", "Prior art", "Drawings", "Office actions", "Portfolio", "FTO"],
    trust: ["Tool", "Offices / jurisdictions", "Security and privacy (as stated by the vendor)", "Collaboration"],
  },
  es: {
    glance: ["Herramienta", "Enfoque principal", "Clientes declarados", "Formato", "Precio público"],
    features: ["Herramienta", "Redacción", "Reivindicaciones", "Antecedentes", "Dibujos", "Oficios", "Cartera", "FTO"],
    trust: ["Herramienta", "Oficinas / jurisdicciones", "Seguridad y privacidad (según el proveedor)", "Colaboración"],
  },
  pt: {
    glance: ["Ferramenta", "Foco principal", "Clientes declarados", "Formato", "Preço público"],
    features: ["Ferramenta", "Redação", "Reivindicações", "Anterioridade", "Desenhos", "Exigências", "Portfólio", "FTO"],
    trust: ["Ferramenta", "Escritórios / jurisdições", "Segurança e privacidade (segundo o fornecedor)", "Colaboração"],
  },
} as const;

function tables(locale: Locale) {
  const r = rows(locale);
  const h = headers[locale];
  return {
    glance: { columns: [...h.glance], rows: r.map((x) => [x.tool, x.focus[locale], x.customers[locale], x.delivery[locale], x.pricing[locale]]) },
    features: { columns: [...h.features], rows: r.map((x) => [x.tool, x.drafting[locale], x.claims[locale], x.prior[locale], x.drawings[locale], x.oa[locale], x.portfolio[locale], x.fto[locale]]) },
    trust: { columns: [...h.trust], rows: r.map((x) => [x.tool, x.jurisdictions[locale], x.security[locale], x.collaboration[locale]]) },
  };
}

const allSources = (locale: Locale) => [...ipniteSources(locale), ...Object.values(vendorSources).flat()];

function en(): ClusterLocaleCopy {
  const tb = tables("en");
  return {
    title: "Best AI Patent Drafting Tools: 2026 Comparison | IPnite",
    description: "A factual comparison of 10 AI patent drafting tools—drafting, claims, prior art, drawings, office actions, pricing, and stated security—from public sources.",
    h1: "Best AI Patent Drafting Tools: A Factual Comparison",
    eyebrow: "COMPARISON · UPDATED SEPTEMBER 2026",
    shortName: "Best AI patent drafting tools",
    lead: "There is no single best AI patent drafting tool—there is a best fit for your work. This comparison lays out what ten tools publicly say they do, who they are built for, and what they publish about pricing and security, so you can shortlist the ones worth a trial.",
    blocks: [
      {
        type: "callout",
        tone: "note",
        heading: "How this comparison was made",
        paragraphs: [
          `IPnite publishes this page and is one of the tools compared. To keep it fair, every entry for another vendor comes only from that vendor's own public website, checked on ${LAST_VERIFIED}; sources are listed at the end. We did not test competitors' products, and we do not rank them.`,
          "“Not stated” means the pages we reviewed did not mention it—not that the product lacks it. Security entries repeat each vendor's own claims; IPnite has not audited them. qatent (Questel) is not included because its official pages could not be retrieved for verification on the review date. If you represent a listed vendor and something is out of date, write to info@ipnite.com.",
        ],
      },
      { type: "table", heading: "At a glance: focus, customers, and pricing", caption: "AI patent drafting tools: focus, customers, delivery and public pricing", ...tb.glance },
      { type: "table", heading: "Feature coverage", intro: "Based on what each vendor lists publicly. Feature names differ between vendors, so short descriptions are used where a plain yes would be misleading.", caption: "AI patent drafting tools: feature coverage from public vendor pages", ...tb.features },
      { type: "table", heading: "Jurisdictions, security, and collaboration", intro: "Security certifications and data-handling promises are the vendors' own statements. Ask for the contract terms before uploading confidential material.", caption: "AI patent drafting tools: jurisdictions, stated security and collaboration", ...tb.trust },
      {
        type: "cards",
        heading: "Which type of tool fits which user",
        items: [
          { title: "Independent inventors and early startups", body: "Look for guided disclosure intake, published pricing, and DOCX export you can file or hand to an attorney. Idea2PatentAI (per-application pricing for provisionals) and IPnite (subscription covering search, drafting, drawings, and portfolio) are built with this group in mind." },
          { title: "Solo practitioners and small firms", body: "Compare published plans and whether the tool fits your drafting style. PatentAssist and IPnite publish monthly prices; Word-based tools such as ClaimMaster and Patent Bots suit practitioners who want to keep drafting in Word." },
          { title: "Large firms and in-house IP departments", body: "Office-action support, portfolio analytics, enterprise security documentation, and integrations tend to matter most. Solve Intelligence, DeepIP, Patsnap, and IP Author position themselves for this segment; pricing is typically by quote." },
          { title: "Latin American applicants", body: "Check drafting support for IMPI, INPI Argentina, and INPI Brazil, and Spanish and Portuguese interfaces. Among the tools reviewed, IPnite is the only one whose public pages describe drafting workflows for all three offices together with regional pricing in local currencies." },
        ],
      },
      {
        type: "checklist",
        heading: "Before you choose, verify",
        items: [
          "The current price and what it includes (projects, searches, users, storage)",
          "Written terms on training, retention, and subprocessors",
          "Support for the offices and languages you actually file in",
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
      { q: "What is the best AI patent drafting tool?", a: "It depends on who is drafting. Enterprise IP teams often need office-action and portfolio features; inventors need guided intake and affordable pricing; small firms need something that fits their existing workflow. Shortlist by fit and test with a real, non-confidential disclosure." },
      { q: "Are these tools free?", a: "Most offer a trial rather than a free plan. Among the tools reviewed, IPnite, PatentAssist, IP Author, and Patsnap advertise trials; several enterprise tools only quote prices on request." },
      { q: "Why is IPnite on a list that IPnite publishes?", a: "Because readers comparing tools should see it next to the alternatives. We disclose that we publish the page, rely only on vendors' public pages for other tools, and do not rank the products." },
      { q: "How often is this comparison updated?", a: "The review date is shown at the top. Vendors change features and prices frequently, so confirm details on each vendor's site before buying." },
    ],
    sources: allSources("en"),
    cta: { heading: "Add IPnite to your shortlist", body: "Try the full workflow—disclosure, prior-art search, claims, drawings, and DOCX export—with a 7-day free trial. No credit card." },
  };
}

function es(): ClusterLocaleCopy {
  const tb = tables("es");
  return {
    title: "Mejores herramientas de IA para redactar patentes | IPnite",
    description: "Comparación objetiva de 10 herramientas de IA para redactar patentes: reivindicaciones, antecedentes, dibujos, oficios, precios y seguridad declarada.",
    h1: "Mejores herramientas de IA para redactar patentes: comparación objetiva",
    eyebrow: "COMPARACIÓN · ACTUALIZADA EN SEPTIEMBRE DE 2026",
    shortName: "Mejores herramientas de IA para patentes",
    lead: "No existe una única mejor herramienta de IA para redactar patentes; existe la que mejor se adapta a tu trabajo. Esta comparación reúne lo que diez herramientas dicen públicamente que hacen, para quién están pensadas y qué publican sobre precios y seguridad, para que elijas cuáles vale la pena probar.",
    blocks: [
      {
        type: "callout",
        tone: "note",
        heading: "Cómo se hizo esta comparación",
        paragraphs: [
          `IPnite publica esta página y es una de las herramientas comparadas. Para que sea justa, cada dato de otro proveedor proviene solo de su propio sitio web público, revisado el ${LAST_VERIFIED}; las fuentes están al final. No probamos los productos de la competencia ni los clasificamos.`,
          "“No indicado” significa que las páginas revisadas no lo mencionan, no que el producto carezca de ello. Los datos de seguridad repiten lo que declara cada proveedor; IPnite no los ha auditado. qatent (Questel) no se incluye porque sus páginas oficiales no pudieron consultarse para verificarlas en la fecha de revisión. Si representas a un proveedor y algo está desactualizado, escribe a info@ipnite.com.",
        ],
      },
      { type: "table", heading: "De un vistazo: enfoque, clientes y precios", caption: "Herramientas de IA para redactar patentes: enfoque, clientes, formato y precio público", ...tb.glance },
      { type: "table", heading: "Cobertura de funciones", intro: "Según lo que cada proveedor publica. Los nombres de las funciones varían, así que usamos descripciones breves donde un simple “sí” sería engañoso.", caption: "Herramientas de IA para redactar patentes: funciones según las páginas públicas", ...tb.features },
      { type: "table", heading: "Jurisdicciones, seguridad y colaboración", intro: "Las certificaciones y compromisos de manejo de datos son declaraciones de cada proveedor. Pide las condiciones contractuales antes de subir material confidencial.", caption: "Herramientas de IA para redactar patentes: jurisdicciones, seguridad declarada y colaboración", ...tb.trust },
      {
        type: "cards",
        heading: "Qué tipo de herramienta conviene a cada usuario",
        items: [
          { title: "Inventores independientes y startups en etapa temprana", body: "Busca captura guiada de la divulgación, precios publicados y exportación en DOCX que puedas presentar o entregar a un abogado. Idea2PatentAI (precio por solicitud provisional) e IPnite (suscripción con búsqueda, redacción, dibujos y cartera) están pensadas para este grupo." },
          { title: "Profesionales independientes y despachos pequeños", body: "Compara los planes publicados y si la herramienta se adapta a tu forma de redactar. PatentAssist e IPnite publican precios mensuales; herramientas en Word como ClaimMaster y Patent Bots convienen a quienes quieren seguir redactando en Word." },
          { title: "Despachos grandes y departamentos internos de PI", body: "Suelen pesar más el apoyo en oficios, la analítica de cartera, la documentación de seguridad empresarial y las integraciones. Solve Intelligence, DeepIP, Patsnap e IP Author se posicionan para este segmento; el precio suele ser a cotización." },
          { title: "Solicitantes en Latinoamérica", body: "Revisa si hay soporte de redacción para el IMPI, el INPI de Argentina y el INPI de Brasil, e interfaces en español y portugués. Entre las herramientas revisadas, IPnite es la única cuyas páginas públicas describen flujos de redacción para las tres oficinas junto con precios regionales en moneda local." },
        ],
      },
      {
        type: "checklist",
        heading: "Antes de elegir, verifica",
        items: [
          "El precio actual y lo que incluye (proyectos, búsquedas, usuarios, almacenamiento)",
          "Las condiciones escritas sobre entrenamiento, retención y subencargados",
          "El soporte para las oficinas e idiomas en los que realmente presentas",
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
      { q: "¿Cuál es la mejor herramienta de IA para redactar patentes?", a: "Depende de quién redacta. Los equipos corporativos de PI suelen necesitar funciones de oficios y cartera; los inventores, captura guiada y precios accesibles; los despachos pequeños, algo que encaje en su flujo actual. Haz una lista corta por afinidad y prueba con una divulgación real no confidencial." },
      { q: "¿Estas herramientas son gratuitas?", a: "La mayoría ofrece una prueba, no un plan gratuito. Entre las revisadas, IPnite, PatentAssist, IP Author y Patsnap anuncian pruebas; varias herramientas empresariales solo cotizan bajo pedido." },
      { q: "¿Por qué IPnite aparece en una lista que publica IPnite?", a: "Porque quien compara herramientas debe verla junto a las alternativas. Aclaramos que publicamos la página, usamos solo las páginas públicas de los demás proveedores y no clasificamos los productos." },
      { q: "¿Cada cuánto se actualiza esta comparación?", a: "La fecha de revisión aparece arriba. Los proveedores cambian funciones y precios con frecuencia, así que confirma los detalles en el sitio de cada uno antes de contratar." },
    ],
    sources: allSources("es"),
    cta: { heading: "Agrega IPnite a tu lista corta", body: "Prueba el flujo completo (divulgación, búsqueda de antecedentes, reivindicaciones, dibujos y exportación en DOCX) con la prueba gratis de 7 días. Sin tarjeta." },
  };
}

function pt(): ClusterLocaleCopy {
  const tb = tables("pt");
  return {
    title: "Melhores ferramentas de IA para redigir patentes | IPnite",
    description: "Comparação objetiva de 10 ferramentas de IA para redigir patentes: redação, reivindicações, anterioridade, desenhos, exigências, preços e segurança declarada.",
    h1: "Melhores ferramentas de IA para redigir patentes: comparação objetiva",
    eyebrow: "COMPARAÇÃO · ATUALIZADA EM SETEMBRO DE 2026",
    shortName: "Melhores ferramentas de IA para patentes",
    lead: "Não existe uma única melhor ferramenta de IA para redigir patentes; existe a que melhor se adapta ao seu trabalho. Esta comparação reúne o que dez ferramentas dizem publicamente que fazem, para quem foram criadas e o que publicam sobre preços e segurança, para você escolher quais vale a pena testar.",
    blocks: [
      {
        type: "callout",
        tone: "note",
        heading: "Como esta comparação foi feita",
        paragraphs: [
          `A IPnite publica esta página e é uma das ferramentas comparadas. Para ser justa, cada informação sobre outro fornecedor vem apenas do próprio site público dele, verificado em ${LAST_VERIFIED}; as fontes estão no final. Não testamos os produtos concorrentes nem os classificamos.`,
          "“Não informado” significa que as páginas revisadas não mencionam o recurso, não que o produto não o tenha. As informações de segurança repetem o que cada fornecedor declara; a IPnite não as auditou. O qatent (Questel) não foi incluído porque suas páginas oficiais não puderam ser acessadas para verificação na data da revisão. Se você representa um fornecedor e algo está desatualizado, escreva para info@ipnite.com.",
        ],
      },
      { type: "table", heading: "Visão geral: foco, clientes e preços", caption: "Ferramentas de IA para redigir patentes: foco, clientes, formato e preço público", ...tb.glance },
      { type: "table", heading: "Cobertura de recursos", intro: "Com base no que cada fornecedor publica. Os nomes dos recursos variam, então usamos descrições curtas onde um simples “sim” seria enganoso.", caption: "Ferramentas de IA para redigir patentes: recursos segundo as páginas públicas", ...tb.features },
      { type: "table", heading: "Jurisdições, segurança e colaboração", intro: "Certificações e compromissos de tratamento de dados são declarações de cada fornecedor. Peça os termos contratuais antes de enviar material confidencial.", caption: "Ferramentas de IA para redigir patentes: jurisdições, segurança declarada e colaboração", ...tb.trust },
      {
        type: "cards",
        heading: "Qual tipo de ferramenta serve para cada usuário",
        items: [
          { title: "Inventores independentes e startups em fase inicial", body: "Procure coleta guiada da divulgação, preços publicados e exportação em DOCX para depositar ou entregar a um advogado. Idea2PatentAI (preço por pedido provisório) e IPnite (assinatura com busca, redação, desenhos e portfólio) foram pensadas para esse grupo." },
          { title: "Profissionais autônomos e escritórios pequenos", body: "Compare os planos publicados e se a ferramenta combina com seu jeito de redigir. PatentAssist e IPnite publicam preços mensais; ferramentas no Word como ClaimMaster e Patent Bots atendem quem quer continuar redigindo no Word." },
          { title: "Grandes escritórios e departamentos internos de PI", body: "Costumam pesar mais o apoio a exigências, a análise de portfólio, a documentação de segurança corporativa e as integrações. Solve Intelligence, DeepIP, Patsnap e IP Author se posicionam para esse segmento; o preço costuma ser sob consulta." },
          { title: "Depositantes na América Latina", body: "Verifique se há suporte de redação para o IMPI, o INPI da Argentina e o INPI do Brasil, e interfaces em português e espanhol. Entre as ferramentas revisadas, a IPnite é a única cujas páginas públicas descrevem fluxos de redação para os três escritórios junto com preços regionais em moeda local." },
        ],
      },
      {
        type: "checklist",
        heading: "Antes de escolher, verifique",
        items: [
          "O preço atual e o que ele inclui (projetos, buscas, usuários, armazenamento)",
          "Os termos escritos sobre treinamento, retenção e suboperadores",
          "O suporte aos escritórios e idiomas em que você realmente deposita",
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
      { q: "Qual é a melhor ferramenta de IA para redigir patentes?", a: "Depende de quem redige. Equipes corporativas de PI costumam precisar de recursos para exigências e portfólio; inventores, de coleta guiada e preços acessíveis; escritórios pequenos, de algo que se encaixe no fluxo atual. Monte uma lista curta por afinidade e teste com uma divulgação real não confidencial." },
      { q: "Essas ferramentas são gratuitas?", a: "A maioria oferece um teste, não um plano gratuito. Entre as revisadas, IPnite, PatentAssist, IP Author e Patsnap anunciam testes; várias ferramentas corporativas só informam preço sob consulta." },
      { q: "Por que a IPnite aparece em uma lista publicada pela IPnite?", a: "Porque quem compara ferramentas deve vê-la ao lado das alternativas. Deixamos claro que publicamos a página, usamos apenas as páginas públicas dos outros fornecedores e não classificamos os produtos." },
      { q: "Com que frequência esta comparação é atualizada?", a: "A data da revisão aparece no topo. Os fornecedores mudam recursos e preços com frequência, então confirme os detalhes no site de cada um antes de contratar." },
    ],
    sources: allSources("pt"),
    cta: { heading: "Coloque a IPnite na sua lista curta", body: "Teste o fluxo completo (divulgação, busca de anterioridade, reivindicações, desenhos e exportação em DOCX) com o teste grátis de 7 dias. Sem cartão." },
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
