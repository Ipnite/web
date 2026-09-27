import type { ClusterPage } from "../types";
import { LAST_VERIFIED, vendorSources, ipniteSources, ipniteUsPrices, ipniteRegionalPricing } from "../vendors";

/**
 * Intent: "IPnite vs Idea2PatentAI". Idea2PatentAI facts come only from its public pages (see vendorSources).
 * RELEASE GATE: see manifest.ts. Re-verify on release day.
 */

const p = { en: ipniteUsPrices("en") };
const r = { es: ipniteRegionalPricing("es"), pt: ipniteRegionalPricing("pt") };

export const ipniteVsIdea2PatentAi: ClusterPage = {
  id: "ipnite-vs-idea2patentai",
  schema: "page",
  aboutSoftware: false,
  primaryAction: { name: "try_ipnite" },
  lastVerified: LAST_VERIFIED,
  related: [{ cluster: "best-ai-patent-drafting-tools" }, { cluster: "ipnite-vs-patentassist" }, { route: "provisional" }, { cluster: "ai-patent-tool-for-inventors" }, { route: "prior-art" }, { route: "drawings" }, { article: "what-is-a-provisional-patent-application" }, { cluster: "ai-patent-confidentiality" }],
  locales: {
    en: {
      title: "IPnite vs Idea2PatentAI: Feature and Pricing Comparison | IPnite",
      description: "IPnite and Idea2PatentAI compared on drafting scope, prior-art search, drawings, jurisdictions, pricing model, and stated privacy, using public sources.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "SIDE-BY-SIDE COMPARISON",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "Both tools help inventors turn an idea into a patent draft. Idea2PatentAI focuses on guided US provisional applications sold per application. IPnite is a subscription workflow that also covers prior-art search, drawings, portfolio records, and Latin American patent offices. Here is how they compare on the facts each publishes.",
      blocks: [
        {
          type: "table",
          heading: "Side by side",
          caption: "IPnite and Idea2PatentAI compared by criterion",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Built for", "Inventors, startups, patent professionals, universities", "Inventors, entrepreneurs, startups; also offers an attorney workflow"],
            ["Pricing model", `Subscription: Inventor ${p.en.inventor}/month in the US, regional prices; 7-day free trial`, "One-time: US$79 per provisional application or US$199 for three"],
            ["Drafting scope", "Provisional and complete applications", "Provisional applications"],
            ["Claims", "Independent and dependent claims", "Included as a section of the draft"],
            ["Prior-art search", "Yes, inside the project", "Not stated"],
            ["Patent drawings", "Yes, with matching reference numerals", "Not stated"],
            ["Portfolio and deadlines", "Yes", "Not stated"],
            ["Patentability / FTO", "Patentability search on paid plans; FTO add-on", "Not stated"],
            ["Patent offices", "USPTO, IMPI (Mexico), INPI Argentina, INPI Brazil, PCT", "US provisional applications"],
            ["Interface languages", "English, Spanish, Portuguese", "Not stated"],
            ["Export", "DOCX", "Word and PDF"],
            ["Professional handoff", "External collaborator on every plan", "Attorney referral network included"],
            ["Stated privacy", "No training on customer content; encryption in transit and at rest", "No training on invention details; TLS 1.2+ and AES-256 at rest; user deletion"],
          ],
          note: `Idea2PatentAI entries are taken from its public website as of ${LAST_VERIFIED}. “Not stated” means its public pages did not mention it.`,
        },
        {
          type: "prose",
          heading: "The main difference: one provisional or an ongoing workflow",
          paragraphs: [
            "Idea2PatentAI is designed around a single deliverable: a US provisional patent application drafted through a guided questionnaire and paid for once. If that is all you need, its pricing is simple and predictable.",
            `IPnite is designed around the work before and after the draft. Prior-art search shapes the claims, drawings are generated from the same project, and the application stays in a portfolio with its deadlines. That makes more sense if you expect to file more than once, need a complete application later, or file outside the United States. The Inventor plan costs ${p.en.inventor} per month in the US.`,
          ],
        },
        {
          type: "split",
          heading: "Which one fits you",
          left: {
            title: "Idea2PatentAI may fit better if",
            items: [
              "You need one US provisional application and prefer a one-time fee",
              "You already know the prior art or will search elsewhere",
              "You want access to its attorney referral network",
            ],
          },
          right: {
            title: "IPnite may fit better if",
            items: [
              "You want prior-art search, claims, and drawings in one project",
              "You file in Mexico, Argentina, Brazil, or through the PCT",
              "You work in Spanish or Portuguese",
              "You expect several inventions or need portfolio and deadline tracking",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "About this comparison",
          paragraphs: [`IPnite publishes this page. Idea2PatentAI information comes only from its public website, checked on ${LAST_VERIFIED}; we did not test its product. Features and prices change, so confirm details with each vendor. Corrections: info@ipnite.com.`],
        },
      ],
      faqs: [
        { q: "Is Idea2PatentAI cheaper than IPnite?", a: "For a single US provisional application, Idea2PatentAI's one-time US$79 fee is lower than a month of IPnite's US Inventor plan. IPnite's subscription also includes prior-art searches, drawings, and portfolio records, and regional prices are lower in Latin America." },
        { q: "Can either tool file the application for me?", a: "Both prepare drafts for you to review. Filing and official fees are handled with the patent office, by you or your representative." },
        { q: "Which one supports Latin American patent offices?", a: "IPnite supports preparation for IMPI (Mexico), INPI Argentina, and INPI Brazil, as well as the USPTO and PCT. Idea2PatentAI's public pages describe US provisional applications." },
        { q: "Do they train AI on my invention?", a: "Both state that invention content is not used to train AI models. Read each vendor's privacy terms before uploading anything." },
      ],
      sources: [...ipniteSources("en"), ...vendorSources.idea2patentai],
      cta: { heading: "See IPnite's full workflow", body: "Run a prior-art search and start a draft with the 7-day free trial. No credit card." },
    },
    es: {
      title: "IPnite vs Idea2PatentAI: funciones y precios | IPnite",
      description: "IPnite e Idea2PatentAI comparados en alcance de redacción, búsqueda de antecedentes, dibujos, jurisdicciones, modelo de precio y privacidad declarada.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "COMPARACIÓN LADO A LADO",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "Ambas herramientas ayudan a los inventores a convertir una idea en un borrador de patente. Idea2PatentAI se enfoca en solicitudes provisionales de EE. UU. guiadas y vendidas por solicitud. IPnite es un flujo por suscripción que además cubre búsqueda de antecedentes, dibujos, registros de cartera y oficinas de patentes de Latinoamérica. Así se comparan según lo que cada una publica.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e Idea2PatentAI comparados por criterio",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Pensada para", "Inventores, startups, profesionales de patentes, universidades", "Inventores, emprendedores, startups; también ofrece un flujo para abogados"],
            ["Modelo de precio", `Suscripción: ${r.es.inventorSummary}; prueba gratis de 7 días`, "Pago único: US$79 por solicitud provisional o US$199 por tres"],
            ["Alcance de redacción", "Solicitudes provisionales y completas", "Solicitudes provisionales"],
            ["Reivindicaciones", "Independientes y dependientes", "Incluidas como sección del borrador"],
            ["Búsqueda de antecedentes", "Sí, dentro del proyecto", "No indicado"],
            ["Dibujos de patente", "Sí, con números de referencia coherentes", "No indicado"],
            ["Cartera y plazos", "Sí", "No indicado"],
            ["Patentabilidad / FTO", "Búsqueda de patentabilidad en planes de pago; FTO como complemento", "No indicado"],
            ["Oficinas de patentes", "USPTO, IMPI (México), INPI Argentina, INPI Brasil, PCT", "Solicitudes provisionales de EE. UU."],
            ["Idiomas de la interfaz", "Español, inglés, portugués", "No indicado"],
            ["Exportación", "DOCX", "Word y PDF"],
            ["Entrega a un profesional", "Colaborador externo en todos los planes", "Incluye red de referencia de abogados"],
            ["Privacidad declarada", "Sin entrenamiento con contenido del cliente; cifrado en tránsito y en reposo", "Sin entrenamiento con la invención; TLS 1.2+ y AES-256 en reposo; eliminación por el usuario"],
          ],
          note: `Los datos de Idea2PatentAI provienen de su sitio web público al ${LAST_VERIFIED}. “No indicado” significa que sus páginas públicas no lo mencionan.`,
        },
        {
          type: "prose",
          heading: "La diferencia principal: una provisional o un flujo continuo",
          paragraphs: [
            "Idea2PatentAI está diseñada en torno a un solo entregable: una solicitud provisional de EE. UU. redactada con un cuestionario guiado y pagada una sola vez. Si es todo lo que necesitas, su precio es simple y predecible.",
            `IPnite está diseñada en torno al trabajo antes y después del borrador. La búsqueda de antecedentes orienta las reivindicaciones, los dibujos se generan en el mismo proyecto y la solicitud queda en una cartera con sus plazos. Tiene más sentido si piensas presentar más de una vez, necesitarás una solicitud completa después o presentarás fuera de Estados Unidos. Precio del plan: ${r.es.inventorSummary}.`,
          ],
        },
        {
          type: "split",
          heading: "Cuál te conviene",
          left: {
            title: "Idea2PatentAI puede convenirte más si",
            items: [
              "Necesitas una sola solicitud provisional en EE. UU. y prefieres un pago único",
              "Ya conoces los antecedentes o los buscarás en otro lugar",
              "Quieres acceso a su red de referencia de abogados",
            ],
          },
          right: {
            title: "IPnite puede convenirte más si",
            items: [
              "Quieres búsqueda de antecedentes, reivindicaciones y dibujos en un mismo proyecto",
              "Presentas en México, Argentina, Brasil o por la vía PCT",
              "Trabajas en español o portugués",
              "Prevés varias invenciones o necesitas seguimiento de cartera y plazos",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "Sobre esta comparación",
          paragraphs: [`IPnite publica esta página. La información de Idea2PatentAI proviene solo de su sitio web público, revisado el ${LAST_VERIFIED}; no probamos su producto. Las funciones y los precios cambian, así que confirma los detalles con cada proveedor. Correcciones: info@ipnite.com.`],
        },
      ],
      faqs: [
        { q: "¿Idea2PatentAI es más barata que IPnite?", a: `Depende de lo que necesites. Idea2PatentAI cobra un pago único de US$79 por una solicitud provisional de EE. UU. IPnite es una suscripción (${r.es.inventorSummary}) que incluye además búsquedas de antecedentes, dibujos, cartera y flujos para el IMPI, el INPI de Argentina y el INPI de Brasil.` },
        { q: "¿Alguna de las dos presenta la solicitud por mí?", a: "Ambas preparan borradores para que los revises. La presentación y las tarifas oficiales se gestionan ante la oficina de patentes, por ti o por tu representante." },
        { q: "¿Cuál admite oficinas de patentes de Latinoamérica?", a: "IPnite admite la preparación para el IMPI (México), el INPI de Argentina y el INPI de Brasil, además de la USPTO y el PCT. Las páginas públicas de Idea2PatentAI describen solicitudes provisionales de EE. UU." },
        { q: "¿Entrenan su IA con mi invención?", a: "Ambas declaran que el contenido de la invención no se usa para entrenar modelos de IA. Lee las condiciones de privacidad de cada proveedor antes de subir cualquier cosa." },
      ],
      sources: [...ipniteSources("es"), ...vendorSources.idea2patentai],
      cta: { heading: "Conoce el flujo completo de IPnite", body: "Haz una búsqueda de antecedentes y empieza un borrador con la prueba gratis de 7 días. Sin tarjeta." },
    },
    pt: {
      title: "IPnite vs Idea2PatentAI: recursos e preços | IPnite",
      description: "IPnite e Idea2PatentAI comparados em escopo de redação, busca de anterioridade, desenhos, jurisdições, modelo de preço e privacidade declarada.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "COMPARAÇÃO LADO A LADO",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "As duas ferramentas ajudam inventores a transformar uma ideia em um rascunho de patente. A Idea2PatentAI foca em pedidos provisórios dos EUA guiados e vendidos por pedido. A IPnite é um fluxo por assinatura que também cobre busca de anterioridade, desenhos, registros de portfólio e escritórios de patentes da América Latina. Veja como se comparam com base no que cada uma publica.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e Idea2PatentAI comparadas por critério",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Pensada para", "Inventores, startups, profissionais de patentes, universidades", "Inventores, empreendedores, startups; também oferece um fluxo para advogados"],
            ["Modelo de preço", `Assinatura: ${r.pt.inventorSummary}; teste grátis de 7 dias`, "Pagamento único: US$ 79 por pedido provisório ou US$ 199 por três"],
            ["Escopo de redação", "Pedidos provisórios e completos", "Pedidos provisórios"],
            ["Reivindicações", "Independentes e dependentes", "Incluídas como seção do rascunho"],
            ["Busca de anterioridade", "Sim, dentro do projeto", "Não informado"],
            ["Desenhos de patente", "Sim, com sinais de referência coerentes", "Não informado"],
            ["Portfólio e prazos", "Sim", "Não informado"],
            ["Patenteabilidade / FTO", "Busca de patenteabilidade nos planos pagos; FTO como complemento", "Não informado"],
            ["Escritórios de patentes", "USPTO, IMPI (México), INPI Argentina, INPI Brasil, PCT", "Pedidos provisórios dos EUA"],
            ["Idiomas da interface", "Português, inglês, espanhol", "Não informado"],
            ["Exportação", "DOCX", "Word e PDF"],
            ["Entrega a um profissional", "Colaborador externo em todos os planos", "Inclui rede de indicação de advogados"],
            ["Privacidade declarada", "Sem treinamento com conteúdo do cliente; criptografia em trânsito e em repouso", "Sem treinamento com a invenção; TLS 1.2+ e AES-256 em repouso; exclusão pelo usuário"],
          ],
          note: `As informações da Idea2PatentAI vêm do seu site público em ${LAST_VERIFIED}. “Não informado” significa que suas páginas públicas não mencionam o item.`,
        },
        {
          type: "prose",
          heading: "A principal diferença: um provisório ou um fluxo contínuo",
          paragraphs: [
            "A Idea2PatentAI foi desenhada em torno de uma única entrega: um pedido provisório dos EUA redigido com um questionário guiado e pago uma só vez. Se é só disso que você precisa, o preço é simples e previsível.",
            `A IPnite foi desenhada em torno do trabalho antes e depois do rascunho. A busca de anterioridade orienta as reivindicações, os desenhos são gerados no mesmo projeto e o pedido fica em um portfólio com seus prazos. Faz mais sentido se você pretende depositar mais de uma vez, vai precisar de um pedido completo depois ou vai depositar fora dos Estados Unidos. Preço do plano: ${r.pt.inventorSummary}.`,
          ],
        },
        {
          type: "split",
          heading: "Qual combina com você",
          left: {
            title: "A Idea2PatentAI pode servir melhor se",
            items: [
              "Você precisa de um único pedido provisório nos EUA e prefere pagamento único",
              "Você já conhece as anterioridades ou vai buscá-las em outro lugar",
              "Você quer acesso à rede de indicação de advogados dela",
            ],
          },
          right: {
            title: "A IPnite pode servir melhor se",
            items: [
              "Você quer busca de anterioridade, reivindicações e desenhos em um mesmo projeto",
              "Você deposita no Brasil, no México, na Argentina ou pela via PCT",
              "Você trabalha em português ou espanhol",
              "Você prevê várias invenções ou precisa acompanhar portfólio e prazos",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "Sobre esta comparação",
          paragraphs: [`A IPnite publica esta página. As informações da Idea2PatentAI vêm apenas do seu site público, verificado em ${LAST_VERIFIED}; não testamos o produto. Recursos e preços mudam, então confirme os detalhes com cada fornecedor. Correções: info@ipnite.com.`],
        },
      ],
      faqs: [
        { q: "A Idea2PatentAI é mais barata que a IPnite?", a: `Depende do que você precisa. A Idea2PatentAI cobra um pagamento único de US$ 79 por um pedido provisório dos EUA. A IPnite é uma assinatura (${r.pt.inventorSummary}) que também inclui buscas de anterioridade, desenhos, portfólio e fluxos para o INPI do Brasil, o IMPI e o INPI da Argentina.` },
        { q: "Alguma das duas deposita o pedido por mim?", a: "As duas preparam rascunhos para você revisar. O depósito e as taxas oficiais são tratados com o escritório de patentes, por você ou pelo seu procurador." },
        { q: "Qual delas suporta escritórios de patentes da América Latina?", a: "A IPnite suporta a preparação para o INPI do Brasil, o IMPI do México e o INPI da Argentina, além do USPTO e do PCT. As páginas públicas da Idea2PatentAI descrevem pedidos provisórios dos EUA." },
        { q: "Elas treinam IA com a minha invenção?", a: "As duas declaram que o conteúdo da invenção não é usado para treinar modelos de IA. Leia os termos de privacidade de cada fornecedor antes de enviar qualquer coisa." },
      ],
      sources: [...ipniteSources("pt"), ...vendorSources.idea2patentai],
      cta: { heading: "Conheça o fluxo completo da IPnite", body: "Faça uma busca de anterioridade e comece um rascunho com o teste grátis de 7 dias. Sem cartão." },
    },
  },
};
