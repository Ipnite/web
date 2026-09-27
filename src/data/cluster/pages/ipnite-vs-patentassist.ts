import type { ClusterPage } from "../types";
import { LAST_VERIFIED, vendorSources, ipniteSources, ipniteRegionalPricing } from "../vendors";

/**
 * Intent: "IPnite vs PatentAssist". PatentAssist facts come only from its public pages (see vendorSources).
 * RELEASE GATE: see manifest.ts. Re-verify on release day.
 */

const r = { en: ipniteRegionalPricing("en"), es: ipniteRegionalPricing("es"), pt: ipniteRegionalPricing("pt") };

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
      description: "IPnite vs PatentAssist: patent offices, pricing, drafting, search, drawings, and Latin America support, compared using public information.",
      h1: "IPnite vs PatentAssist",
      eyebrow: "SIDE-BY-SIDE COMPARISON",
      shortName: "IPnite vs PatentAssist",
      lead: "PatentAssist and IPnite both draft claims and specifications from an invention disclosure. PatentAssist is built around India's patent office and the USPTO. IPnite is built for Latin America—IMPI, INPI Argentina, and INPI Brazil—plus the USPTO and PCT, with Spanish and Portuguese and local prices.",
      blocks: [
        {
          type: "table",
          heading: "Side by side",
          caption: "IPnite and PatentAssist compared by criterion",
          columns: ["", "IPnite", "PatentAssist"],
          rows: [
            ["Patent offices", "IMPI (Mexico), INPI Argentina, INPI Brazil, USPTO, PCT", "India (IPO) and USPTO formats"],
            ["Built for", "Inventors, startups, patent firms, and universities in Latin America and the US", "Patent agents and attorneys; also innovators and startups"],
            ["Entry price", r.en.inventorSummary, "Lite US$29/month (300 AI credits)"],
            ["Published plans", r.en.plans, "Lite US$29, Pro US$90 per month; Enterprise by quote"],
            ["Pricing model", "Monthly or annual plan with project, search, and user allowances", "Monthly AI credits with top-up packs"],
            ["Free trial", "7 days, no credit card", "7 days with 300 trial credits"],
            ["Drafting", "Claims, specification, abstract, and drawings in one project", "Disclosure, provisional draft, claims, complete specification"],
            ["Patent search", "Concept-based prior-art search inside the project", "IPO, USPTO, and EPO; patentability reports in beta"],
            ["Drawings", "Generated with matching reference numerals", "AI generation in beta; figure descriptions"],
            ["Export", "DOCX", "DOCX; PNG for drawings"],
          ],
          note: `PatentAssist entries are taken from its public website as of ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "Also included in IPnite",
          intro: "IPnite keeps the rest of the patent workflow next to the draft.",
          items: [
            { title: "Latin American offices", body: "Drafting workflows for IMPI, INPI Argentina, and INPI Brazil, plus the PCT route." },
            { title: "Spanish and Portuguese", body: "Work and draft in the languages your filings and clients use." },
            { title: "Examiner responses by email", body: "IPnite gives you a dedicated email address to register with the patent office, so its notifications reach your project and you can answer the examiner from IPnite." },
            { title: "Filing from the app", body: "In some offices, such as INPI Argentina, you can submit the application directly from IPnite." },
            { title: "Portfolio and deadlines", body: "Applications, documents, and key dates for every invention or client." },
            { title: "FTO module", body: "Freedom-to-operate analysis as an add-on, included in the Institutional plan." },
            { title: "Collaborators and permissions", body: "Invite attorneys, co-inventors, or colleagues and control team access." },
          ],
        },
        {
          type: "split",
          heading: "Which one fits you",
          left: {
            title: "PatentAssist may fit if",
            items: [
              "You draft mainly for the Indian Patent Office",
              "You want Indian and European patents in the same search",
            ],
          },
          right: {
            title: "IPnite fits better if",
            items: [
              "You file in Mexico, Argentina, Brazil, or through the PCT",
              "You work in Spanish or Portuguese",
              "You want local-currency pricing for Latin America",
              "You need examiner responses, portfolio tracking, or FTO alongside drafting",
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
        { q: "Is IPnite cheaper than PatentAssist?", a: `In Latin America, yes: IPnite's Inventor plan costs ${r.en.inventor.latam} per month, compared with US$29 for PatentAssist Lite. In the US, the Inventor plan is ${r.en.inventor.us} per month. The plans are metered differently—AI credits versus projects and searches—so compare against your volume.` },
        { q: "Do both generate patent claims?", a: "Yes. Both generate independent and dependent claims from an invention disclosure for professional review." },
        { q: "Which one supports Latin American patent offices?", a: "IPnite supports preparation for IMPI (Mexico), INPI Argentina, and INPI Brazil. PatentAssist is built around Indian Patent Office and USPTO formats." },
        { q: "Do they train AI on my invention?", a: "Both state that customer invention data is not used to train AI models. Read each vendor's privacy terms before uploading anything." },
      ],
      sources: [...ipniteSources("en"), ...vendorSources.patentassist],
      cta: { heading: "Try the platform built for Latin America", body: "Run IPnite on a published disclosure with the 7-day free trial. No credit card." },
    },
    es: {
      title: "IPnite vs PatentAssist: funciones y precios | IPnite",
      description: "IPnite vs PatentAssist: oficinas de patentes, precios, redacción, búsqueda, dibujos y soporte para Latinoamérica, con información pública.",
      h1: "IPnite vs PatentAssist",
      eyebrow: "COMPARACIÓN LADO A LADO",
      shortName: "IPnite vs PatentAssist",
      lead: "PatentAssist e IPnite redactan reivindicaciones y descripciones a partir de una divulgación. PatentAssist está pensada para la oficina de patentes de India y la USPTO. IPnite está pensada para Latinoamérica (IMPI, INPI de Argentina e INPI de Brasil), además de la USPTO y el PCT, en español y portugués y con precios locales.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite y PatentAssist comparados por criterio",
          columns: ["", "IPnite", "PatentAssist"],
          rows: [
            ["Oficinas de patentes", "IMPI (México), INPI Argentina, INPI Brasil, USPTO, PCT", "Formatos de India (IPO) y USPTO"],
            ["Pensada para", "Inventores, startups, despachos y universidades de Latinoamérica y EE. UU.", "Agentes y abogados de patentes; también innovadores y startups"],
            ["Precio de entrada", r.es.inventorSummary, "Lite US$29/mes (300 créditos de IA)"],
            ["Planes publicados", r.es.plans, "Lite US$29, Pro US$90 al mes; Enterprise a cotización"],
            ["Modelo de precio", "Plan mensual o anual con proyectos, búsquedas y usuarios incluidos", "Créditos de IA mensuales con paquetes adicionales"],
            ["Prueba gratis", "7 días, sin tarjeta", "7 días con 300 créditos de prueba"],
            ["Redacción", "Reivindicaciones, descripción, resumen y dibujos en un proyecto", "Divulgación, borrador provisional, reivindicaciones, descripción completa"],
            ["Búsqueda de patentes", "Búsqueda de antecedentes por concepto dentro del proyecto", "IPO, USPTO y EPO; informes de patentabilidad en beta"],
            ["Dibujos", "Generados con números de referencia coherentes", "Generación con IA en beta; descripciones de figuras"],
            ["Exportación", "DOCX", "DOCX; PNG para dibujos"],
          ],
          note: `Los datos de PatentAssist provienen de su sitio web público al ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "También incluido en IPnite",
          intro: "IPnite mantiene el resto del proceso de patente junto al borrador.",
          items: [
            { title: "Oficinas latinoamericanas", body: "Flujos de redacción para el IMPI, el INPI de Argentina y el INPI de Brasil, además de la vía PCT." },
            { title: "Español y portugués", body: "Trabaja y redacta en los idiomas de tus presentaciones y tus clientes." },
            { title: "Respuestas al examinador por correo", body: "IPnite te da un correo dedicado que puedes registrar ante la oficina de patentes para recibir sus notificaciones en tu proyecto y responder al examinador desde IPnite." },
            { title: "Presentación desde la app", body: "En algunas oficinas, como el INPI de Argentina, puedes presentar la solicitud directamente desde IPnite." },
            { title: "Cartera y plazos", body: "Solicitudes, documentos y fechas clave de cada invención o cliente." },
            { title: "Módulo FTO", body: "Análisis de libertad de operación como complemento, incluido en el plan Institucional." },
            { title: "Colaboradores y permisos", body: "Invita a abogados, coinventores o colegas y controla el acceso del equipo." },
          ],
        },
        {
          type: "split",
          heading: "Cuál te conviene",
          left: {
            title: "PatentAssist puede servirte si",
            items: [
              "Redactas principalmente para la Oficina de Patentes de India",
              "Quieres patentes de India y Europa en la misma búsqueda",
            ],
          },
          right: {
            title: "IPnite te conviene más si",
            items: [
              "Presentas en México, Argentina, Brasil o por la vía PCT",
              "Trabajas en español o portugués",
              "Quieres precios en moneda local para Latinoamérica",
              "Necesitas respuestas al examinador, seguimiento de cartera o FTO junto con la redacción",
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
        { q: "¿IPnite es más barata que PatentAssist?", a: `En Latinoamérica, sí: el plan Inventor de IPnite cuesta ${r.es.inventor.latam} al mes (${r.es.inventor.mx} en México), frente a US$29 de PatentAssist Lite. En EE. UU., el plan Inventor cuesta ${r.es.inventor.us} al mes. Los planes se miden distinto (créditos de IA frente a proyectos y búsquedas), así que compara según tu volumen.` },
        { q: "¿Ambas generan reivindicaciones de patente?", a: "Sí. Ambas generan reivindicaciones independientes y dependientes a partir de una divulgación, para revisión profesional." },
        { q: "¿Cuál admite oficinas de patentes de Latinoamérica?", a: "IPnite admite la preparación para el IMPI (México), el INPI de Argentina y el INPI de Brasil. PatentAssist está pensada para los formatos de la Oficina de Patentes de India y de la USPTO." },
        { q: "¿Entrenan su IA con mi invención?", a: "Ambas declaran que los datos de la invención no se usan para entrenar modelos de IA. Lee las condiciones de privacidad de cada proveedor antes de subir cualquier cosa." },
      ],
      sources: [...ipniteSources("es"), ...vendorSources.patentassist],
      cta: { heading: "Prueba la plataforma pensada para Latinoamérica", body: "Prueba IPnite con una divulgación publicada durante la prueba gratis de 7 días. Sin tarjeta." },
    },
    pt: {
      title: "IPnite vs PatentAssist: recursos e preços | IPnite",
      description: "IPnite vs PatentAssist: escritórios de patentes, preços, redação, busca, desenhos e suporte à América Latina, com informações públicas.",
      h1: "IPnite vs PatentAssist",
      eyebrow: "COMPARAÇÃO LADO A LADO",
      shortName: "IPnite vs PatentAssist",
      lead: "PatentAssist e IPnite redigem reivindicações e relatórios a partir de uma divulgação. A PatentAssist foi pensada para o escritório de patentes da Índia e o USPTO. A IPnite foi pensada para a América Latina (INPI do Brasil, IMPI e INPI da Argentina), além do USPTO e do PCT, em português e espanhol e com preços locais.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e PatentAssist comparadas por critério",
          columns: ["", "IPnite", "PatentAssist"],
          rows: [
            ["Escritórios de patentes", "INPI Brasil, IMPI (México), INPI Argentina, USPTO, PCT", "Formatos da Índia (IPO) e do USPTO"],
            ["Pensada para", "Inventores, startups, escritórios e universidades da América Latina e dos EUA", "Agentes e advogados de patentes; também inovadores e startups"],
            ["Preço de entrada", r.pt.inventorSummary, "Lite US$ 29/mês (300 créditos de IA)"],
            ["Planos publicados", r.pt.plans, "Lite US$ 29, Pro US$ 90 por mês; Enterprise sob consulta"],
            ["Modelo de preço", "Plano mensal ou anual com projetos, buscas e usuários incluídos", "Créditos de IA mensais com pacotes adicionais"],
            ["Teste grátis", "7 dias, sem cartão", "7 dias com 300 créditos de teste"],
            ["Redação", "Reivindicações, relatório, resumo e desenhos em um projeto", "Divulgação, rascunho provisório, reivindicações, relatório completo"],
            ["Busca de patentes", "Busca de anterioridade por conceito dentro do projeto", "IPO, USPTO e EPO; relatórios de patenteabilidade em beta"],
            ["Desenhos", "Gerados com sinais de referência coerentes", "Geração com IA em beta; descrições de figuras"],
            ["Exportação", "DOCX", "DOCX; PNG para desenhos"],
          ],
          note: `As informações da PatentAssist vêm do seu site público em ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "Também incluído na IPnite",
          intro: "A IPnite mantém o restante do processo de patente ao lado do rascunho.",
          items: [
            { title: "Escritórios latino-americanos", body: "Fluxos de redação para o INPI do Brasil, o IMPI e o INPI da Argentina, além da via PCT." },
            { title: "Português e espanhol", body: "Trabalhe e redija nos idiomas dos seus depósitos e clientes." },
            { title: "Respostas ao examinador por e-mail", body: "A IPnite oferece um e-mail dedicado para cadastrar no escritório de patentes, assim as notificações chegam ao seu projeto e você responde ao examinador pela IPnite." },
            { title: "Depósito pelo app", body: "Em alguns escritórios, como o INPI da Argentina, você pode depositar o pedido diretamente pela IPnite." },
            { title: "Portfólio e prazos", body: "Pedidos, documentos e datas importantes de cada invenção ou cliente." },
            { title: "Módulo FTO", body: "Análise de liberdade de operação como complemento, incluída no plano Institucional." },
            { title: "Colaboradores e permissões", body: "Convide advogados, coinventores ou colegas e controle o acesso da equipe." },
          ],
        },
        {
          type: "split",
          heading: "Qual combina com você",
          left: {
            title: "A PatentAssist pode servir se",
            items: [
              "Você redige principalmente para o Escritório de Patentes da Índia",
              "Você quer patentes da Índia e da Europa na mesma busca",
            ],
          },
          right: {
            title: "A IPnite serve melhor se",
            items: [
              "Você deposita no Brasil, no México, na Argentina ou pela via PCT",
              "Você trabalha em português ou espanhol",
              "Você quer preços em moeda local na América Latina",
              "Você precisa de respostas ao examinador, portfólio ou FTO junto com a redação",
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
        { q: "A IPnite é mais barata que a PatentAssist?", a: `No Brasil, sim: o plano Inventor da IPnite custa ${r.pt.inventor.br} por mês, contra US$ 29 do PatentAssist Lite. No restante da América Latina custa ${r.pt.inventor.latam} e nos EUA, ${r.pt.inventor.us} por mês. Os planos são medidos de forma diferente (créditos de IA versus projetos e buscas), então compare de acordo com seu volume.` },
        { q: "As duas geram reivindicações de patente?", a: "Sim. As duas geram reivindicações independentes e dependentes a partir de uma divulgação, para revisão profissional." },
        { q: "Qual delas suporta escritórios de patentes da América Latina?", a: "A IPnite suporta a preparação para o INPI do Brasil, o IMPI do México e o INPI da Argentina. A PatentAssist foi pensada para os formatos do Escritório de Patentes da Índia e do USPTO." },
        { q: "Elas treinam IA com a minha invenção?", a: "As duas declaram que os dados da invenção não são usados para treinar modelos de IA. Leia os termos de privacidade de cada fornecedor antes de enviar qualquer coisa." },
      ],
      sources: [...ipniteSources("pt"), ...vendorSources.patentassist],
      cta: { heading: "Teste a plataforma pensada para a América Latina", body: "Teste a IPnite com uma divulgação publicada durante o teste grátis de 7 dias. Sem cartão." },
    },
  },
};
