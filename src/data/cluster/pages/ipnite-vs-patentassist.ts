import type { ClusterPage } from "../types";
import { LAST_VERIFIED, vendorSources, ipniteSources, ipniteUsPrices, ipniteRegionalPricing } from "../vendors";

/**
 * Intent: "IPnite vs PatentAssist". PatentAssist facts come only from its public pages (see vendorSources).
 * RELEASE GATE: see manifest.ts. Re-verify on release day.
 */

const p = { en: ipniteUsPrices("en") };
const r = { es: ipniteRegionalPricing("es"), pt: ipniteRegionalPricing("pt") };

export const ipniteVsPatentAssist: ClusterPage = {
  id: "ipnite-vs-patentassist",
  schema: "page",
  aboutSoftware: false,
  primaryAction: { name: "try_ipnite" },
  lastVerified: LAST_VERIFIED,
  related: [{ cluster: "best-ai-patent-drafting-tools" }, { cluster: "ipnite-vs-idea2patentai" }, { cluster: "patent-drafting-software" }, { route: "attorneys" }, { cluster: "patent-claims-generator" }, { route: "portfolio" }, { route: "jurisdiction-pct" }, { cluster: "ai-patent-confidentiality" }],
  locales: {
    en: {
      title: "IPnite vs PatentAssist: Feature and Pricing Comparison | IPnite",
      description: "IPnite and PatentAssist compared on drafting, claims, search, drawings, portfolio, jurisdictions, pricing, and stated security, using public sources.",
      h1: "IPnite vs PatentAssist",
      eyebrow: "SIDE-BY-SIDE COMPARISON",
      shortName: "IPnite vs PatentAssist",
      lead: "PatentAssist and IPnite both draft claims and specifications from an invention disclosure and publish monthly pricing. They differ mainly in which patent offices they are built around, how pricing is metered, and how much of the workflow around the draft they cover.",
      blocks: [
        {
          type: "table",
          heading: "Side by side",
          caption: "IPnite and PatentAssist compared by criterion",
          columns: ["", "IPnite", "PatentAssist"],
          rows: [
            ["Built for", "Inventors, startups, patent professionals, universities", "Patent agents and attorneys; also innovators and startups"],
            ["Published pricing", `Inventor ${p.en.inventor}, Startup ${p.en.startup}, Institutional ${p.en.institutional} per month in the US; regional prices`, "Lite US$29/month (300 credits), Pro US$90/month (1,500 credits); Enterprise by quote"],
            ["Pricing model", "Plan limits on projects, searches, users, and storage", "Monthly AI credits with top-up packs"],
            ["Free trial", "7 days, no credit card", "7 days with 300 trial credits"],
            ["Drafting", "Claims, specification, abstract, drawings in one project", "Disclosure, provisional draft, claims, complete specification"],
            ["Drafting formats", "USPTO, IMPI (Mexico), INPI Argentina, INPI Brazil, PCT", "India (IPO) and USPTO"],
            ["Patent search", "Concept-based prior-art search in the project", "Search across IPO, USPTO, and EPO; patentability reports (beta)"],
            ["Drawings", "Generated with matching reference numerals", "AI drawing generation (beta); figure descriptions"],
            ["Portfolio and deadlines", "Yes", "Not stated"],
            ["FTO", "Add-on; included in Institutional", "Not stated"],
            ["Collaboration", "Collaborators; team permissions", "Not stated"],
            ["Interface languages", "English, Spanish, Portuguese", "Not stated"],
            ["Export", "DOCX", "DOCX; PNG for drawings"],
            ["Stated security", "No training on customer content; enterprise Vertex AI API; encryption in transit and at rest", "No training (Azure OpenAI); AES-256, TLS 1.2+; hosted on Azure and AWS in EU and India regions"],
          ],
          note: `PatentAssist entries are taken from its public website as of ${LAST_VERIFIED}. “Not stated” means its public pages did not mention it.`,
        },
        {
          type: "prose",
          heading: "Where they differ most",
          paragraphs: [
            "Jurisdiction is the clearest dividing line. PatentAssist produces drafts in Indian Patent Office and USPTO formats and searches Indian, US, and European patents. IPnite's drafting workflows cover the USPTO, Mexico, Argentina, Brazil, and the PCT, with the interface in English, Spanish, and Portuguese.",
            "Scope is the second. PatentAssist concentrates on the drafting itself, with an AI copilot for editing. IPnite also keeps portfolio records, deadlines, collaborators, and an optional FTO module next to the draft. Pricing follows from that: PatentAssist meters AI credits, while IPnite plans set limits on projects, searches, and users.",
          ],
        },
        {
          type: "split",
          heading: "Which one fits you",
          left: {
            title: "PatentAssist may fit better if",
            items: [
              "You draft for the Indian Patent Office",
              "You want Indian and European patents in the same search",
              "Credit-based pricing matches your volume",
            ],
          },
          right: {
            title: "IPnite may fit better if",
            items: [
              "You file in Mexico, Argentina, Brazil, or through the PCT",
              "You work in Spanish or Portuguese",
              "You want portfolio, deadlines, and collaborators with the draft",
              "You need an FTO module alongside drafting",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "About this comparison",
          paragraphs: [`IPnite publishes this page. PatentAssist information comes only from its public website, checked on ${LAST_VERIFIED}; we did not test its product. Features and prices change, so confirm details with each vendor. Corrections: info@ipnite.com.`],
        },
      ],
      faqs: [
        { q: "Is PatentAssist cheaper than IPnite?", a: `PatentAssist's Lite plan (US$29 per month) is below IPnite's US Inventor plan (${p.en.inventor} per month). The plans are metered differently—AI credits versus projects and searches—and IPnite's regional prices in Latin America are lower than its US prices, so compare against your expected volume.` },
        { q: "Do both generate patent claims?", a: "Yes. Both generate independent and dependent claims from an invention disclosure for professional review." },
        { q: "Which one supports Latin American patent offices?", a: "IPnite supports preparation for IMPI (Mexico), INPI Argentina, and INPI Brazil. PatentAssist's public pages describe Indian Patent Office and USPTO formats." },
        { q: "Do they train AI on my invention?", a: "Both state that customer invention data is not used to train AI models. Read each vendor's privacy terms and data-processing agreement before uploading anything." },
      ],
      sources: [...ipniteSources("en"), ...vendorSources.patentassist],
      cta: { heading: "Compare for yourself", body: "Run IPnite on a published disclosure with the 7-day free trial. No credit card." },
    },
    es: {
      title: "IPnite vs PatentAssist: funciones y precios | IPnite",
      description: "IPnite y PatentAssist frente a frente: redacción, reivindicaciones, búsqueda, dibujos, cartera, jurisdicciones, precios y seguridad declarada.",
      h1: "IPnite vs PatentAssist",
      eyebrow: "COMPARACIÓN LADO A LADO",
      shortName: "IPnite vs PatentAssist",
      lead: "PatentAssist e IPnite redactan reivindicaciones y descripciones a partir de una divulgación y publican precios mensuales. Se diferencian sobre todo en las oficinas de patentes para las que están pensadas, en cómo se mide el precio y en cuánto del flujo alrededor del borrador cubren.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite y PatentAssist comparados por criterio",
          columns: ["", "IPnite", "PatentAssist"],
          rows: [
            ["Pensada para", "Inventores, startups, profesionales de patentes, universidades", "Agentes y abogados de patentes; también innovadores y startups"],
            ["Precios publicados", r.es.plans, "Lite US$29/mes (300 créditos), Pro US$90/mes (1,500 créditos); Enterprise a cotización"],
            ["Modelo de precio", "Límites por plan en proyectos, búsquedas, usuarios y almacenamiento", "Créditos de IA mensuales con paquetes adicionales"],
            ["Prueba gratis", "7 días, sin tarjeta", "7 días con 300 créditos de prueba"],
            ["Redacción", "Reivindicaciones, descripción, resumen y dibujos en un proyecto", "Divulgación, borrador provisional, reivindicaciones, descripción completa"],
            ["Formatos de redacción", "USPTO, IMPI (México), INPI Argentina, INPI Brasil, PCT", "India (IPO) y USPTO"],
            ["Búsqueda de patentes", "Búsqueda de antecedentes por concepto dentro del proyecto", "Búsqueda en IPO, USPTO y EPO; informes de patentabilidad (beta)"],
            ["Dibujos", "Generados con números de referencia coherentes", "Generación con IA (beta); descripciones de figuras"],
            ["Cartera y plazos", "Sí", "No indicado"],
            ["FTO", "Complemento; incluido en Institucional", "No indicado"],
            ["Colaboración", "Colaboradores; permisos de equipo", "No indicado"],
            ["Idiomas de la interfaz", "Español, inglés, portugués", "No indicado"],
            ["Exportación", "DOCX", "DOCX; PNG para dibujos"],
            ["Seguridad declarada", "Sin entrenamiento con contenido del cliente; API empresarial de Vertex AI; cifrado en tránsito y en reposo", "Sin entrenamiento (Azure OpenAI); AES-256, TLS 1.2+; alojado en Azure y AWS en regiones de la UE e India"],
          ],
          note: `Los datos de PatentAssist provienen de su sitio web público al ${LAST_VERIFIED}. “No indicado” significa que sus páginas públicas no lo mencionan.`,
        },
        {
          type: "prose",
          heading: "Dónde se diferencian más",
          paragraphs: [
            "La jurisdicción es la línea divisoria más clara. PatentAssist produce borradores en formato de la Oficina de Patentes de India y de la USPTO, y busca patentes de India, EE. UU. y Europa. Los flujos de redacción de IPnite cubren la USPTO, México, Argentina, Brasil y el PCT, con la interfaz en español, inglés y portugués.",
            "El alcance es la segunda. PatentAssist se concentra en la redacción, con un copiloto de IA para editar. IPnite además mantiene registros de cartera, plazos, colaboradores y un módulo FTO opcional junto al borrador. El precio va en línea con eso: PatentAssist mide créditos de IA y los planes de IPnite fijan límites de proyectos, búsquedas y usuarios.",
          ],
        },
        {
          type: "split",
          heading: "Cuál te conviene",
          left: {
            title: "PatentAssist puede convenirte más si",
            items: [
              "Redactas para la Oficina de Patentes de India",
              "Quieres patentes de India y Europa en la misma búsqueda",
              "El precio por créditos se ajusta a tu volumen",
            ],
          },
          right: {
            title: "IPnite puede convenirte más si",
            items: [
              "Presentas en México, Argentina, Brasil o por la vía PCT",
              "Trabajas en español o portugués",
              "Quieres cartera, plazos y colaboradores junto al borrador",
              "Necesitas un módulo FTO además de la redacción",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "Sobre esta comparación",
          paragraphs: [`IPnite publica esta página. La información de PatentAssist proviene solo de su sitio web público, revisado el ${LAST_VERIFIED}; no probamos su producto. Las funciones y los precios cambian, así que confirma los detalles con cada proveedor. Correcciones: info@ipnite.com.`],
        },
      ],
      faqs: [
        { q: "¿PatentAssist es más barata que IPnite?", a: `PatentAssist publica su plan Lite a US$29 al mes (300 créditos). IPnite publica precios regionales: ${r.es.inventorSummary}. Los planes se miden distinto (créditos de IA frente a proyectos y búsquedas), así que compara según tu volumen y las oficinas en las que presentas.` },
        { q: "¿Ambas generan reivindicaciones de patente?", a: "Sí. Ambas generan reivindicaciones independientes y dependientes a partir de una divulgación, para revisión profesional." },
        { q: "¿Cuál admite oficinas de patentes de Latinoamérica?", a: "IPnite admite la preparación para el IMPI (México), el INPI de Argentina y el INPI de Brasil. Las páginas públicas de PatentAssist describen formatos de la Oficina de Patentes de India y de la USPTO." },
        { q: "¿Entrenan su IA con mi invención?", a: "Ambas declaran que los datos de la invención no se usan para entrenar modelos de IA. Lee las condiciones de privacidad y el acuerdo de tratamiento de datos de cada proveedor antes de subir cualquier cosa." },
      ],
      sources: [...ipniteSources("es"), ...vendorSources.patentassist],
      cta: { heading: "Compáralas tú mismo", body: "Prueba IPnite con una divulgación publicada durante la prueba gratis de 7 días. Sin tarjeta." },
    },
    pt: {
      title: "IPnite vs PatentAssist: recursos e preços | IPnite",
      description: "IPnite e PatentAssist comparados em redação, reivindicações, busca, desenhos, portfólio, jurisdições, preços e segurança declarada, com fontes públicas.",
      h1: "IPnite vs PatentAssist",
      eyebrow: "COMPARAÇÃO LADO A LADO",
      shortName: "IPnite vs PatentAssist",
      lead: "PatentAssist e IPnite redigem reivindicações e relatórios a partir de uma divulgação e publicam preços mensais. Elas diferem principalmente nos escritórios de patentes para os quais foram pensadas, na forma como o preço é medido e em quanto do fluxo em torno do rascunho cobrem.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e PatentAssist comparadas por critério",
          columns: ["", "IPnite", "PatentAssist"],
          rows: [
            ["Pensada para", "Inventores, startups, profissionais de patentes, universidades", "Agentes e advogados de patentes; também inovadores e startups"],
            ["Preços publicados", r.pt.plans, "Lite US$ 29/mês (300 créditos), Pro US$ 90/mês (1.500 créditos); Enterprise sob consulta"],
            ["Modelo de preço", "Limites por plano em projetos, buscas, usuários e armazenamento", "Créditos de IA mensais com pacotes adicionais"],
            ["Teste grátis", "7 dias, sem cartão", "7 dias com 300 créditos de teste"],
            ["Redação", "Reivindicações, relatório, resumo e desenhos em um projeto", "Divulgação, rascunho provisório, reivindicações, relatório completo"],
            ["Formatos de redação", "USPTO, IMPI (México), INPI Argentina, INPI Brasil, PCT", "Índia (IPO) e USPTO"],
            ["Busca de patentes", "Busca de anterioridade por conceito dentro do projeto", "Busca em IPO, USPTO e EPO; relatórios de patenteabilidade (beta)"],
            ["Desenhos", "Gerados com sinais de referência coerentes", "Geração com IA (beta); descrições de figuras"],
            ["Portfólio e prazos", "Sim", "Não informado"],
            ["FTO", "Complemento; incluído no Institucional", "Não informado"],
            ["Colaboração", "Colaboradores; permissões de equipe", "Não informado"],
            ["Idiomas da interface", "Português, inglês, espanhol", "Não informado"],
            ["Exportação", "DOCX", "DOCX; PNG para desenhos"],
            ["Segurança declarada", "Sem treinamento com conteúdo do cliente; API corporativa do Vertex AI; criptografia em trânsito e em repouso", "Sem treinamento (Azure OpenAI); AES-256, TLS 1.2+; hospedado na Azure e na AWS em regiões da UE e da Índia"],
          ],
          note: `As informações da PatentAssist vêm do seu site público em ${LAST_VERIFIED}. “Não informado” significa que suas páginas públicas não mencionam o item.`,
        },
        {
          type: "prose",
          heading: "Onde elas mais diferem",
          paragraphs: [
            "A jurisdição é a linha divisória mais clara. A PatentAssist produz rascunhos nos formatos do Escritório de Patentes da Índia e do USPTO e busca patentes da Índia, dos EUA e da Europa. Os fluxos de redação da IPnite cobrem o USPTO, o Brasil, o México, a Argentina e o PCT, com interface em português, inglês e espanhol.",
            "O escopo é a segunda. A PatentAssist se concentra na redação, com um copiloto de IA para edição. A IPnite também mantém registros de portfólio, prazos, colaboradores e um módulo FTO opcional ao lado do rascunho. O preço acompanha isso: a PatentAssist mede créditos de IA e os planos da IPnite definem limites de projetos, buscas e usuários.",
          ],
        },
        {
          type: "split",
          heading: "Qual combina com você",
          left: {
            title: "A PatentAssist pode servir melhor se",
            items: [
              "Você redige para o Escritório de Patentes da Índia",
              "Você quer patentes da Índia e da Europa na mesma busca",
              "O preço por créditos combina com seu volume",
            ],
          },
          right: {
            title: "A IPnite pode servir melhor se",
            items: [
              "Você deposita no Brasil, no México, na Argentina ou pela via PCT",
              "Você trabalha em português ou espanhol",
              "Você quer portfólio, prazos e colaboradores junto ao rascunho",
              "Você precisa de um módulo FTO além da redação",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "Sobre esta comparação",
          paragraphs: [`A IPnite publica esta página. As informações da PatentAssist vêm apenas do seu site público, verificado em ${LAST_VERIFIED}; não testamos o produto. Recursos e preços mudam, então confirme os detalhes com cada fornecedor. Correções: info@ipnite.com.`],
        },
      ],
      faqs: [
        { q: "A PatentAssist é mais barata que a IPnite?", a: `A PatentAssist publica o plano Lite a US$ 29 por mês (300 créditos). A IPnite publica preços regionais: ${r.pt.inventorSummary}. Os planos são medidos de forma diferente (créditos de IA versus projetos e buscas), então compare de acordo com seu volume e os escritórios em que você deposita.` },
        { q: "As duas geram reivindicações de patente?", a: "Sim. As duas geram reivindicações independentes e dependentes a partir de uma divulgação, para revisão profissional." },
        { q: "Qual delas suporta escritórios de patentes da América Latina?", a: "A IPnite suporta a preparação para o INPI do Brasil, o IMPI do México e o INPI da Argentina. As páginas públicas da PatentAssist descrevem formatos do Escritório de Patentes da Índia e do USPTO." },
        { q: "Elas treinam IA com a minha invenção?", a: "As duas declaram que os dados da invenção não são usados para treinar modelos de IA. Leia os termos de privacidade e o acordo de tratamento de dados de cada fornecedor antes de enviar qualquer coisa." },
      ],
      sources: [...ipniteSources("pt"), ...vendorSources.patentassist],
      cta: { heading: "Compare você mesmo", body: "Teste a IPnite com uma divulgação publicada durante o teste grátis de 7 dias. Sem cartão." },
    },
  },
};
