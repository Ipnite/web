import type { ClusterPage } from "../types";
import { LAST_VERIFIED, vendorSources, ipniteSources, ipniteRegionalPricing } from "../vendors";

/**
 * Intent: "IPnite vs Idea2PatentAI". Idea2PatentAI facts come only from its public pages (see vendorSources).
 * RELEASE GATE: see manifest.ts. Re-verify on release day.
 */

const r = { en: ipniteRegionalPricing("en"), es: ipniteRegionalPricing("es"), pt: ipniteRegionalPricing("pt") };

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
      description: "IPnite vs Idea2PatentAI: cost of a provisional, patent offices, drafting scope, and Latin America support, compared using public information.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "SIDE-BY-SIDE COMPARISON",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "Both tools help inventors turn an idea into a patent draft. Idea2PatentAI sells guided US provisional applications one at a time. IPnite covers the whole workflow—prior-art search, the draft, drawings, examiner responses, and portfolio—for the USPTO and for Latin American patent offices, and one month of its Inventor plan costs less than a single Idea2PatentAI provisional.",
      blocks: [
        {
          type: "table",
          heading: "Side by side",
          caption: "IPnite and Idea2PatentAI compared by criterion",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Cost of one provisional", r.en.oneProvisional, "US$79 one-time"],
            ["Pricing model", "Monthly or annual subscription you can cancel; 7-day free trial", "One-time: US$79 per provisional or US$199 for three"],
            ["Built for", "Inventors, startups, patent firms, and universities in Latin America and the US", "Inventors, entrepreneurs, and startups; also offers an attorney workflow"],
            ["Patent offices", "IMPI (Mexico), INPI Argentina, INPI Brazil, USPTO, PCT", "US provisional applications (USPTO)"],
            ["Drafting scope", "Provisional and complete applications", "Provisional applications"],
            ["Claims", "Independent and dependent claims", "Included in the draft"],
            ["Export", "DOCX", "Word and PDF"],
            ["Professional handoff", "External collaborator on every plan", "Attorney referral network"],
          ],
          note: `Idea2PatentAI entries are taken from its public website as of ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "Also included in IPnite",
          intro: "Beyond the draft itself, every IPnite project brings the rest of the patent workflow together.",
          items: [
            { title: "Prior-art search", body: "Search by technical concept and save the closest references to the project before you draft." },
            { title: "Patent drawings", body: "Figures generated from the same project, with reference numerals that match the text." },
            { title: "Examiner responses by email", body: "IPnite gives you a dedicated email address to register with the patent office, so its notifications reach your project and you can answer the examiner from IPnite." },
            { title: "Filing from the app", body: "In some offices, such as INPI Argentina, you can submit the application directly from IPnite." },
            { title: "Portfolio and deadlines", body: "Applications, documents, and key dates in one place after filing." },
            { title: "Patentability and FTO", body: "A patentability search on every paid plan and an optional freedom-to-operate module." },
            { title: "Spanish and Portuguese", body: "Work and draft in Spanish, Portuguese, or English for Latin American and US filings." },
          ],
        },
        {
          type: "split",
          heading: "Which one fits you",
          left: {
            title: "Idea2PatentAI may fit if",
            items: [
              "You only need one US provisional and prefer a one-time purchase",
              "You want access to its attorney referral network",
            ],
          },
          right: {
            title: "IPnite fits better if",
            items: [
              "You want the provisional for less, with prior-art search and drawings included",
              "You file in Mexico, Argentina, Brazil, or through the PCT",
              "You work in Spanish or Portuguese",
              "You will need a complete application, examiner responses, or portfolio tracking later",
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
        { q: "Is IPnite cheaper than Idea2PatentAI for a provisional?", a: `Yes, if you prepare it within a month. ${r.en.oneProvisional}, compared with Idea2PatentAI's US$79 one-time fee, and the IPnite plan also includes prior-art search and drawings. Patent office fees are separate in both cases.` },
        { q: "Can either tool file the application for me?", a: "Idea2PatentAI prepares the draft for you to file. With IPnite, in some offices such as INPI Argentina you can submit the application directly from the app; elsewhere you or your representative file it. Official fees are paid to the patent office in both cases." },
        { q: "Which one supports Latin American patent offices?", a: "IPnite supports preparation for IMPI (Mexico), INPI Argentina, and INPI Brazil, as well as the USPTO and PCT. Idea2PatentAI focuses on US provisional applications." },
        { q: "Do they train AI on my invention?", a: "Both state that invention content is not used to train AI models. Read each vendor's privacy terms before uploading anything." },
      ],
      sources: [...ipniteSources("en"), ...vendorSources.idea2patentai],
      cta: { heading: "Prepare your provisional for less", body: "Run a prior-art search and start a draft with the 7-day free trial. No credit card." },
    },
    es: {
      title: "IPnite vs Idea2PatentAI: funciones y precios | IPnite",
      description: "IPnite vs Idea2PatentAI: costo de una provisional, oficinas de patentes, alcance de redacción y soporte para Latinoamérica, con información pública.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "COMPARACIÓN LADO A LADO",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "Ambas herramientas ayudan a los inventores a convertir una idea en un borrador de patente. Idea2PatentAI vende solicitudes provisionales de EE. UU. guiadas, una por una. IPnite cubre todo el flujo (búsqueda de antecedentes, borrador, dibujos, respuestas al examinador y cartera) para la USPTO y para las oficinas de patentes de Latinoamérica, y un mes de su plan Inventor cuesta menos que una sola provisional de Idea2PatentAI.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e Idea2PatentAI comparados por criterio",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Costo de una provisional", r.es.oneProvisional, "US$79, pago único"],
            ["Modelo de precio", "Suscripción mensual o anual que puedes cancelar; prueba gratis de 7 días", "Pago único: US$79 por provisional o US$199 por tres"],
            ["Pensada para", "Inventores, startups, despachos y universidades de Latinoamérica y EE. UU.", "Inventores, emprendedores y startups; también ofrece un flujo para abogados"],
            ["Oficinas de patentes", "IMPI (México), INPI Argentina, INPI Brasil, USPTO, PCT", "Provisionales de EE. UU. (USPTO)"],
            ["Alcance de redacción", "Solicitudes provisionales y completas", "Solicitudes provisionales"],
            ["Reivindicaciones", "Independientes y dependientes", "Incluidas en el borrador"],
            ["Exportación", "DOCX", "Word y PDF"],
            ["Entrega a un profesional", "Colaborador externo en todos los planes", "Red de referencia de abogados"],
          ],
          note: `Los datos de Idea2PatentAI provienen de su sitio web público al ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "También incluido en IPnite",
          intro: "Además del borrador, cada proyecto de IPnite reúne el resto del proceso de patente.",
          items: [
            { title: "Búsqueda de antecedentes", body: "Busca por concepto técnico y guarda las referencias más cercanas en el proyecto antes de redactar." },
            { title: "Dibujos de patente", body: "Figuras generadas en el mismo proyecto, con números de referencia que coinciden con el texto." },
            { title: "Respuestas al examinador por correo", body: "IPnite te da un correo dedicado que puedes registrar ante la oficina de patentes para recibir sus notificaciones en tu proyecto y responder al examinador desde IPnite." },
            { title: "Presentación desde la app", body: "En algunas oficinas, como el INPI de Argentina, puedes presentar la solicitud directamente desde IPnite." },
            { title: "Cartera y plazos", body: "Solicitudes, documentos y fechas clave en un solo lugar después de presentar." },
            { title: "Patentabilidad y FTO", body: "Una búsqueda de patentabilidad en todos los planes de pago y un módulo opcional de libertad de operación." },
            { title: "Español y portugués", body: "Trabaja y redacta en español, portugués o inglés para presentaciones en Latinoamérica y EE. UU." },
          ],
        },
        {
          type: "split",
          heading: "Cuál te conviene",
          left: {
            title: "Idea2PatentAI puede servirte si",
            items: [
              "Solo necesitas una provisional en EE. UU. y prefieres una compra única",
              "Quieres acceso a su red de referencia de abogados",
            ],
          },
          right: {
            title: "IPnite te conviene más si",
            items: [
              "Quieres la provisional por menos, con búsqueda de antecedentes y dibujos incluidos",
              "Presentas en México, Argentina, Brasil o por la vía PCT",
              "Trabajas en español o portugués",
              "Más adelante necesitarás la solicitud completa, respuestas al examinador o seguimiento de cartera",
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
        { q: "¿IPnite es más barata que Idea2PatentAI para una provisional?", a: `Sí, si la preparas dentro de un mes. ${r.es.oneProvisional}, frente al pago único de US$79 de Idea2PatentAI, y el plan de IPnite incluye además búsqueda de antecedentes y dibujos. Las tarifas de la oficina de patentes son aparte en ambos casos.` },
        { q: "¿Alguna de las dos presenta la solicitud por mí?", a: "Idea2PatentAI prepara el borrador para que tú lo presentes. Con IPnite, en algunas oficinas como el INPI de Argentina puedes presentar la solicitud directamente desde la app; en las demás la presentas tú o tu representante. Las tarifas oficiales se pagan a la oficina en ambos casos." },
        { q: "¿Cuál admite oficinas de patentes de Latinoamérica?", a: "IPnite admite la preparación para el IMPI (México), el INPI de Argentina y el INPI de Brasil, además de la USPTO y el PCT. Idea2PatentAI se enfoca en solicitudes provisionales de EE. UU." },
        { q: "¿Entrenan su IA con mi invención?", a: "Ambas declaran que el contenido de la invención no se usa para entrenar modelos de IA. Lee las condiciones de privacidad de cada proveedor antes de subir cualquier cosa." },
      ],
      sources: [...ipniteSources("es"), ...vendorSources.idea2patentai],
      cta: { heading: "Prepara tu provisional por menos", body: "Haz una búsqueda de antecedentes y empieza un borrador con la prueba gratis de 7 días. Sin tarjeta." },
    },
    pt: {
      title: "IPnite vs Idea2PatentAI: recursos e preços | IPnite",
      description: "IPnite vs Idea2PatentAI: custo de um provisório, escritórios de patentes, escopo de redação e suporte à América Latina, com informações públicas.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "COMPARAÇÃO LADO A LADO",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "As duas ferramentas ajudam inventores a transformar uma ideia em um rascunho de patente. A Idea2PatentAI vende pedidos provisórios dos EUA guiados, um de cada vez. A IPnite cobre todo o fluxo (busca de anterioridade, rascunho, desenhos, respostas ao examinador e portfólio) para o USPTO e para os escritórios de patentes da América Latina, e um mês do plano Inventor custa menos que um único provisório da Idea2PatentAI.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e Idea2PatentAI comparadas por critério",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Custo de um provisório", r.pt.oneProvisional, "US$ 79, pagamento único"],
            ["Modelo de preço", "Assinatura mensal ou anual que você pode cancelar; teste grátis de 7 dias", "Pagamento único: US$ 79 por provisório ou US$ 199 por três"],
            ["Pensada para", "Inventores, startups, escritórios e universidades da América Latina e dos EUA", "Inventores, empreendedores e startups; também oferece um fluxo para advogados"],
            ["Escritórios de patentes", "INPI Brasil, IMPI (México), INPI Argentina, USPTO, PCT", "Provisórios dos EUA (USPTO)"],
            ["Escopo de redação", "Pedidos provisórios e completos", "Pedidos provisórios"],
            ["Reivindicações", "Independentes e dependentes", "Incluídas no rascunho"],
            ["Exportação", "DOCX", "Word e PDF"],
            ["Entrega a um profissional", "Colaborador externo em todos os planos", "Rede de indicação de advogados"],
          ],
          note: `As informações da Idea2PatentAI vêm do seu site público em ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "Também incluído na IPnite",
          intro: "Além do rascunho, cada projeto da IPnite reúne o restante do processo de patente.",
          items: [
            { title: "Busca de anterioridade", body: "Busque por conceito técnico e salve as referências mais próximas no projeto antes de redigir." },
            { title: "Desenhos de patente", body: "Figuras geradas no mesmo projeto, com sinais de referência que coincidem com o texto." },
            { title: "Respostas ao examinador por e-mail", body: "A IPnite oferece um e-mail dedicado para cadastrar no escritório de patentes, assim as notificações chegam ao seu projeto e você responde ao examinador pela IPnite." },
            { title: "Depósito pelo app", body: "Em alguns escritórios, como o INPI da Argentina, você pode depositar o pedido diretamente pela IPnite." },
            { title: "Portfólio e prazos", body: "Pedidos, documentos e datas importantes em um só lugar depois do depósito." },
            { title: "Patenteabilidade e FTO", body: "Uma busca de patenteabilidade em todos os planos pagos e um módulo opcional de liberdade de operação." },
            { title: "Português e espanhol", body: "Trabalhe e redija em português, espanhol ou inglês para depósitos na América Latina e nos EUA." },
          ],
        },
        {
          type: "split",
          heading: "Qual combina com você",
          left: {
            title: "A Idea2PatentAI pode servir se",
            items: [
              "Você só precisa de um provisório nos EUA e prefere uma compra única",
              "Você quer acesso à rede de indicação de advogados dela",
            ],
          },
          right: {
            title: "A IPnite serve melhor se",
            items: [
              "Você quer o provisório por menos, com busca de anterioridade e desenhos incluídos",
              "Você deposita no Brasil, no México, na Argentina ou pela via PCT",
              "Você trabalha em português ou espanhol",
              "Depois você vai precisar do pedido completo, de respostas ao examinador ou de acompanhar o portfólio",
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
        { q: "A IPnite é mais barata que a Idea2PatentAI para um provisório?", a: `Sim, se você prepará-lo dentro de um mês. ${r.pt.oneProvisional}, contra o pagamento único de US$ 79 da Idea2PatentAI, e o plano da IPnite também inclui busca de anterioridade e desenhos. As taxas do escritório de patentes são à parte nos dois casos.` },
        { q: "Alguma das duas deposita o pedido por mim?", a: "A Idea2PatentAI prepara o rascunho para você depositar. Com a IPnite, em alguns escritórios como o INPI da Argentina você pode depositar o pedido diretamente pelo app; nos demais, o depósito é feito por você ou pelo seu procurador. As taxas oficiais são pagas ao escritório nos dois casos." },
        { q: "Qual delas suporta escritórios de patentes da América Latina?", a: "A IPnite suporta a preparação para o INPI do Brasil, o IMPI do México e o INPI da Argentina, além do USPTO e do PCT. A Idea2PatentAI foca em pedidos provisórios dos EUA." },
        { q: "Elas treinam IA com a minha invenção?", a: "As duas declaram que o conteúdo da invenção não é usado para treinar modelos de IA. Leia os termos de privacidade de cada fornecedor antes de enviar qualquer coisa." },
      ],
      sources: [...ipniteSources("pt"), ...vendorSources.idea2patentai],
      cta: { heading: "Prepare seu provisório por menos", body: "Faça uma busca de anterioridade e comece um rascunho com o teste grátis de 7 dias. Sem cartão." },
    },
  },
};
