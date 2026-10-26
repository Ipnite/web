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
      lead: "Both tools help inventors turn an idea into a patent draft. Idea2PatentAI sells guided US provisional applications one at a time. IPnite covers the whole workflow—Prior-Art Search, Draft, drawings, and Management under separate product rights—for the USPTO and for Latin American patent offices, and in Latin America a complete Single Draft costs less than one Idea2PatentAI provisional.",
      blocks: [
        {
          type: "table",
          heading: "Side by side",
          caption: "IPnite and Idea2PatentAI compared by criterion",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Focus", "Built Latin America first: Spanish and Portuguese, IMPI, INPI Argentina, and INPI Brazil, local-currency prices", "US provisional applications; no stated Latin America focus"],
            ["Cost of one draft", `One-time Single Draft with The Drafter: ${r.en.singleDraft}`, "US$79 per provisional, one-time, plus sales tax"],
            ["What that payment includes", "A complete Draft with claims, drawings, one final Audit/QA and saved DOCX; Search and Management are separate", "A guided provisional draft with claims; Word and PDF export"],
            ["Additional drafts", `On the Inventor plan: ${r.en.draftAddon} per draft`, "US$299 for three provisionals"],
            ["Billing currency", r.en.currency, r.en.usdOnly],
            ["Pricing model", `${r.en.path}. ${r.en.upgrade}.`, "One-time: US$79 per provisional or US$299 for three, plus sales tax"],
            ["Built for", "Inventors, startups, patent firms, and universities in Latin America and the US", "Inventors, entrepreneurs, and startups; also offers an attorney workflow"],
            ["Patent offices", "IMPI (Mexico), INPI Argentina, INPI Brazil, USPTO, PCT", "US provisional applications (USPTO)"],
            ["Drafting scope", "Provisional and complete applications", "Provisional applications"],
            ["Claims", "Independent and dependent claims", "Included in the draft"],
            ["Export", "DOCX; drawings in PNG, JPG, and SVG", "Word and PDF"],
            ["Professional handoff", "External collaborator on every plan", "Attorney referral network"],
          ],
          note: `Idea2PatentAI entries are taken from its public website as of ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "Other IPnite products and availability",
          intro: "Draft and Prior-Art Search are separate purchases. Management requires a subscription; future modules are not available.",
          items: [
            { title: "Prior-art search", body: "Search by technical concept and save the closest references to the project before you draft." },
            { title: "Patent drawings", body: "Figures generated from the same project, with reference numerals that match the text." },
            { title: "Examiner responses by email", body: "Use Management to track filings and deadlines. Receiving office notices and sending examiner responses directly from IPnite are not currently available." },
            { title: "Filing from the app", body: "Direct filing from IPnite is not currently available; you or your representative submit the application to the patent office." },
            { title: "Portfolio and deadlines", body: "Applications, documents, and key dates in one place after filing." },
            { title: "Patentability and FTO", body: "Patentability Search and FTO are distinct future products, not currently available." },
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
              "You want the provisional for less, with drawings included and Search purchased separately",
              "You file in Mexico, Argentina, Brazil, or through the PCT",
              "You work in Spanish or Portuguese",
              "You will need a complete application or subscription portfolio tracking later",
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
        { q: "Is IPnite cheaper than Idea2PatentAI for a provisional?", a: `In Latin America, yes. A complete Single Draft costs ${r.en.singleDraftLatam}, compared with Idea2PatentAI's US$79 one-time fee, and includes drawings, one final Audit/QA, and a saved DOCX. Search and Management are separate purchases. In the US the Single Draft costs more, but if you draft several patents, each additional draft on the Inventor plan costs ${r.en.draftAddon}; patent office fees are separate in both cases.` },
        { q: "Can either tool file the application for me?", a: "Idea2PatentAI prepares the draft for you to file. IPnite direct filing is not currently available; you or your representative file the application. Official fees are paid to the patent office in both cases." },
        { q: "Which one supports Latin American patent offices?", a: "IPnite supports preparation for IMPI (Mexico), INPI Argentina, and INPI Brazil, as well as the USPTO and PCT. Idea2PatentAI focuses on US provisional applications." },
        { q: "Do they train AI on my invention?", a: "Both state that invention content is not used to train AI models. Read each vendor's privacy terms before uploading anything." },
      ],
      sources: [...ipniteSources("en"), ...vendorSources.idea2patentai],
      cta: { heading: "Prepare your provisional for less", body: "Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges." },
    },
    es: {
      title: "IPnite vs Idea2PatentAI: funciones y precios | IPnite",
      description: "IPnite vs Idea2PatentAI: costo de una provisional, oficinas de patentes, alcance de redacción y soporte para Latinoamérica, con información pública.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "COMPARACIÓN LADO A LADO",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "Ambas herramientas ayudan a los inventores a convertir una idea en un borrador de patente. Idea2PatentAI vende solicitudes provisionales de EE. UU. guiadas, una por una. IPnite cubre todo el flujo (búsqueda de antecedentes, Draft, dibujos y Gestión con derechos separados) para la USPTO y para las oficinas de patentes de Latinoamérica, y en Latinoamérica un borrador completo con el Redactor cuesta menos que una sola provisional de Idea2PatentAI.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e Idea2PatentAI comparados por criterio",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Enfoque", "Hecha primero para Latinoamérica: español y portugués, IMPI, INPI Argentina e INPI Brasil, precios en moneda local", "Provisionales de EE. UU.; sin enfoque declarado en Latinoamérica"],
            ["Costo de un borrador", `Pago único con el Redactor: ${r.es.singleDraft}`, "US$79 por provisional, pago único, más impuestos"],
            ["Qué incluye ese pago", "Draft completo con reivindicaciones, dibujos, una auditoría final y DOCX guardado; búsqueda y Gestión por separado", "Borrador guiado de provisional con reivindicaciones; exportación en Word y PDF"],
            ["Borradores adicionales", `Con el plan Inventor: ${r.es.draftAddon} por borrador`, "US$299 por tres provisionales"],
            ["Moneda de cobro", r.es.currency, r.es.usdOnly],
            ["Modelo de precio", `${r.es.path}. ${r.es.upgrade}.`, "Pago único: US$79 por provisional o US$299 por tres, más impuestos"],
            ["Pensada para", "Inventores, startups, despachos y universidades de Latinoamérica y EE. UU.", "Inventores, emprendedores y startups; también ofrece un flujo para abogados"],
            ["Oficinas de patentes", "IMPI (México), INPI Argentina, INPI Brasil, USPTO, PCT", "Provisionales de EE. UU. (USPTO)"],
            ["Alcance de redacción", "Solicitudes provisionales y completas", "Solicitudes provisionales"],
            ["Reivindicaciones", "Independientes y dependientes", "Incluidas en el borrador"],
            ["Exportación", "DOCX; dibujos en PNG, JPG y SVG", "Word y PDF"],
            ["Entrega a un profesional", "Colaborador externo en todos los planes", "Red de referencia de abogados"],
          ],
          note: `Los datos de Idea2PatentAI provienen de su sitio web público al ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "Otros productos de IPnite y su disponibilidad",
          intro: "Draft y búsqueda de antecedentes se compran por separado. Gestión requiere suscripción; los módulos futuros no están disponibles.",
          items: [
            { title: "Búsqueda de antecedentes", body: "Busca por concepto técnico y guarda las referencias más cercanas en el proyecto antes de redactar." },
            { title: "Dibujos de patente", body: "Figuras generadas en el mismo proyecto, con números de referencia que coinciden con el texto." },
            { title: "Respuestas al examinador por correo", body: "Utiliza Gestión para dar seguimiento a presentaciones y plazos. Recibir notificaciones de la oficina y enviar respuestas al examinador directamente desde IPnite aún no está disponible." },
            { title: "Presentación desde la app", body: "La presentación directa desde IPnite aún no está disponible; tú o tu representante presentan la solicitud ante la oficina." },
            { title: "Portafolio y plazos", body: "Solicitudes, documentos y fechas clave en un solo lugar después de presentar." },
            { title: "Patentabilidad y FTO", body: "La búsqueda de patentabilidad y FTO son productos futuros distintos, aún no disponibles." },
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
              "Quieres la provisional por menos, con dibujos incluidos y búsqueda comprada por separado",
              "Presentas en México, Argentina, Brasil o por la vía PCT",
              "Trabajas en español o portugués",
              "Más adelante necesitarás la solicitud completa o seguimiento de portafolio con suscripción",
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
        { q: "¿IPnite es más barata que Idea2PatentAI para una provisional?", a: `En Latinoamérica, sí. Un borrador completo con el Redactor cuesta ${r.es.singleDraftLatam}, frente al pago único de US$79 de Idea2PatentAI, e incluye dibujos, una auditoría final y un DOCX guardado. La búsqueda y Gestión se adquieren por separado. Y si redactas varias patentes, con el plan Inventor cada borrador adicional cuesta ${r.es.draftAddon}, todo en tu moneda local; las tarifas de la oficina de patentes son aparte en ambos casos.` },
        { q: "¿Alguna de las dos presenta la solicitud por mí?", a: "Idea2PatentAI prepara el borrador para que tú lo presentes. La presentación directa desde IPnite aún no está disponible; tú o tu representante presentan la solicitud. Las tarifas oficiales se pagan a la oficina en ambos casos." },
        { q: "¿Cuál admite oficinas de patentes de Latinoamérica?", a: "IPnite admite la preparación para el IMPI (México), el INPI de Argentina y el INPI de Brasil, además de la USPTO y el PCT. Idea2PatentAI se enfoca en solicitudes provisionales de EE. UU." },
        { q: "¿Entrenan su IA con mi invención?", a: "Ambas declaran que el contenido de la invención no se usa para entrenar modelos de IA. Lee las condiciones de privacidad de cada proveedor antes de subir cualquier cosa." },
      ],
      sources: [...ipniteSources("es"), ...vendorSources.idea2patentai],
      cta: { heading: "Prepara tu provisional por menos", body: "Explora una vista previa de estrategia de búsqueda o del flujo de redacción con tu propia invención. La prueba gratis de 7 días no incluye una búsqueda completa ni una solicitud final refinada o exportable. Sin tarjeta y sin cobros automáticos." },
    },
    pt: {
      title: "IPnite vs Idea2PatentAI: recursos e preços | IPnite",
      description: "IPnite vs Idea2PatentAI: custo de um provisório, escritórios de patentes, escopo de redação e suporte à América Latina, com informações públicas.",
      h1: "IPnite vs Idea2PatentAI",
      eyebrow: "COMPARAÇÃO LADO A LADO",
      shortName: "IPnite vs Idea2PatentAI",
      lead: "As duas ferramentas ajudam inventores a transformar uma ideia em um rascunho de patente. A Idea2PatentAI vende pedidos provisórios dos EUA guiados, um de cada vez. A IPnite cobre todo o fluxo (busca de anterioridade, Draft, desenhos e Gestão com direitos separados) para o USPTO e para os escritórios de patentes da América Latina, e na América Latina uma minuta avulsa completa custa menos que um único provisório da Idea2PatentAI.",
      blocks: [
        {
          type: "table",
          heading: "Lado a lado",
          caption: "IPnite e Idea2PatentAI comparadas por critério",
          columns: ["", "IPnite", "Idea2PatentAI"],
          rows: [
            ["Foco", "Feita primeiro para a América Latina: português e espanhol, INPI Brasil, IMPI e INPI Argentina, preços em moeda local", "Pedidos provisórios dos EUA; sem foco declarado na América Latina"],
            ["Custo de uma minuta", `Minuta avulsa com pagamento único: ${r.pt.singleDraft}`, "US$ 79 por provisório, pagamento único, mais impostos"],
            ["O que esse pagamento inclui", "Draft completo com reivindicações, desenhos, uma auditoria final e DOCX salvo; busca e Gestão separados", "Rascunho guiado de provisório com reivindicações; exportação em Word e PDF"],
            ["Minutas adicionais", `No plano Inventor: ${r.pt.draftAddon} por minuta`, "US$ 299 por três provisórios"],
            ["Moeda de cobrança", r.pt.currency, r.pt.usdOnly],
            ["Modelo de preço", `${r.pt.path}. ${r.pt.upgrade}.`, "Pagamento único: US$ 79 por provisório ou US$ 299 por três, mais impostos"],
            ["Pensada para", "Inventores, startups, escritórios e universidades da América Latina e dos EUA", "Inventores, empreendedores e startups; também oferece um fluxo para advogados"],
            ["Escritórios de patentes", "INPI Brasil, IMPI (México), INPI Argentina, USPTO, PCT", "Provisórios dos EUA (USPTO)"],
            ["Escopo de redação", "Pedidos provisórios e completos", "Pedidos provisórios"],
            ["Reivindicações", "Independentes e dependentes", "Incluídas no rascunho"],
            ["Exportação", "DOCX; desenhos em PNG, JPG e SVG", "Word e PDF"],
            ["Entrega a um profissional", "Colaborador externo em todos os planos", "Rede de indicação de advogados"],
          ],
          note: `As informações da Idea2PatentAI vêm do seu site público em ${LAST_VERIFIED}.`,
        },
        {
          type: "cards",
          heading: "Outros produtos da IPnite e sua disponibilidade",
          intro: "Draft e busca de anterioridade são compras separadas. Gestão exige assinatura; módulos futuros não estão disponíveis.",
          items: [
            { title: "Busca de anterioridade", body: "Busque por conceito técnico e salve as referências mais próximas no projeto antes de redigir." },
            { title: "Desenhos de patente", body: "Figuras geradas no mesmo projeto, com sinais de referência que coincidem com o texto." },
            { title: "Respostas ao examinador por e-mail", body: "Use Gestão para acompanhar depósitos e prazos. Receber notificações do escritório e enviar respostas ao examinador diretamente pela IPnite ainda não está disponível." },
            { title: "Depósito pelo app", body: "O depósito direto pela IPnite ainda não está disponível; você ou seu procurador deposita o pedido no escritório." },
            { title: "Portfólio e prazos", body: "Pedidos, documentos e datas importantes em um só lugar depois do depósito." },
            { title: "Patenteabilidade e FTO", body: "Busca de patenteabilidade e FTO são produtos futuros distintos, ainda indisponíveis." },
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
              "Você quer o provisório por menos, com desenhos incluídos e busca comprada separadamente",
              "Você deposita no Brasil, no México, na Argentina ou pela via PCT",
              "Você trabalha em português ou espanhol",
              "Depois você vai precisar do pedido completo ou de acompanhar o portfólio com assinatura",
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
        { q: "A IPnite é mais barata que a Idea2PatentAI para um provisório?", a: `Na América Latina, sim. Uma minuta avulsa completa custa ${r.pt.singleDraftLatam}, contra o pagamento único de US$ 79 da Idea2PatentAI, e inclui desenhos, uma auditoria final e um DOCX salvo. Busca e Gestão são adquiridos separadamente. E se você redige várias patentes, no plano Inventor cada minuta adicional custa ${r.pt.draftAddon}, tudo em moeda local; as taxas do escritório de patentes são à parte nos dois casos.` },
        { q: "Alguma das duas deposita o pedido por mim?", a: "A Idea2PatentAI prepara o rascunho para você depositar. O depósito direto pela IPnite ainda não está disponível; você ou seu procurador deposita o pedido. As taxas oficiais são pagas ao escritório nos dois casos." },
        { q: "Qual delas suporta escritórios de patentes da América Latina?", a: "A IPnite suporta a preparação para o INPI do Brasil, o IMPI do México e o INPI da Argentina, além do USPTO e do PCT. A Idea2PatentAI foca em pedidos provisórios dos EUA." },
        { q: "Elas treinam IA com a minha invenção?", a: "As duas declaram que o conteúdo da invenção não é usado para treinar modelos de IA. Leia os termos de privacidade de cada fornecedor antes de enviar qualquer coisa." },
      ],
      sources: [...ipniteSources("pt"), ...vendorSources.idea2patentai],
      cta: { heading: "Prepare seu provisório por menos", body: "Explore uma prévia da estratégia de busca ou do fluxo de redação com sua própria invenção. O teste grátis de 7 dias não inclui uma busca completa nem um pedido final refinado ou exportável. Sem cartão e sem cobranças automáticas." },
    },
  },
};
