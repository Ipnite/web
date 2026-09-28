import type { SeoPage } from "./types";
import { commonCta } from "./types";
import { routed } from "./helpers";

const us: SeoPage = {
  id: "jurisdiction-us",
  kind: "jurisdiction",
  handBuilt: { en: true },
  related: ["provisional", "ai-drafting", "jurisdiction-pct", "prior-art", "journey-filed"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("jurisdiction-us", {
    en: {
      title: "How to File a Patent in the United States | IPnite",
      description: "USPTO filing basics: provisional and nonprovisional applications, the one-year grace period, and how to prepare a filing-ready application.",
      h1: "How to File a Patent in the United States",
      eyebrow: "USPTO · OFFICIAL SOURCE",
      lead: "The United States Patent and Trademark Office (USPTO) examines utility patent applications under a first-inventor-to-file system.",
      sections: [{ heading: "Provisional and nonprovisional", paragraphs: ["A provisional application secures a filing date for 12 months. The nonprovisional application is the one the USPTO examines."] }],
      sources: [{ label: "USPTO — Patent basics", url: "https://www.uspto.gov/patents/basics" }],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Cómo presentar una patente en Estados Unidos | IPnite",
      description: "Guía de la USPTO: solicitudes provisionales y definitivas, periodo de gracia de un año y cómo preparar una solicitud lista para presentar desde Latinoamérica.",
      h1: "Cómo presentar una patente en Estados Unidos",
      eyebrow: "USPTO · FUENTE OFICIAL",
      lead: "La Oficina de Patentes y Marcas de Estados Unidos (USPTO) examina las solicitudes de patente de invención bajo un sistema de primer inventor en presentar. Si vendes o planeas vender en ese mercado, proteger ahí tu invención suele ser prioritario.",
      sections: [
        {
          heading: "El sistema de primer inventor en presentar",
          paragraphs: [
            "Desde el 16 de marzo de 2013, con la ley America Invents Act, Estados Unidos concede la patente a quien presenta primero, no a quien inventó primero. Existe un periodo de gracia de un año: las divulgaciones hechas por el propio inventor dentro del año anterior a la presentación no se usan en su contra. Muchos otros países no reconocen ese beneficio, así que conviene presentar antes de divulgar.",
          ],
        },
        {
          heading: "Solicitud provisional y solicitud definitiva",
          paragraphs: [
            "La solicitud provisional asegura una fecha de presentación durante 12 meses, no se examina y no se convierte sola en patente. Dentro de ese plazo debes presentar la solicitud definitiva (nonprovisional) o una solicitud PCT que reclame su beneficio. La solicitud definitiva sí se examina y, si se concede, la patente dura hasta 20 años desde su presentación, sujeta al pago de anualidades de mantenimiento a los 3.5, 7.5 y 11.5 años.",
          ],
          bullets: [
            "Descripción que permita reproducir la invención",
            "Al menos una reivindicación en la solicitud definitiva",
            "Dibujos cuando sean necesarios para entender la invención",
            "Resumen técnico y declaración del inventor",
            "Tasas que dependen del tamaño de la entidad (grande, pequeña o micro)",
          ],
        },
        {
          heading: "Cómo te ayuda IPnite",
          paragraphs: [
            "IPnite estructura la divulgación, busca antecedentes y genera en inglés la descripción, las reivindicaciones, el resumen y los dibujos de tu solicitud, lista para exportar en DOCX y presentar en el sistema Patent Center de la USPTO. IPnite no presenta por ti; la revisión y la decisión de presentar son tuyas.",
          ],
        },
      ],
      faqs: [
        { q: "¿Puedo presentar en Estados Unidos desde Latinoamérica?", a: "Sí. Los inventores extranjeros pueden presentar ante la USPTO. Revisa los requisitos de representación y de licencia de presentación en el extranjero que apliquen a tu caso." },
        { q: "¿Cuánto dura una patente estadounidense?", a: "Hasta 20 años desde la presentación de la solicitud definitiva, siempre que se paguen las tasas de mantenimiento." },
      ],
      sources: [
        { label: "USPTO — Conceptos básicos de patentes (en inglés)", url: "https://www.uspto.gov/patents/basics" },
        { label: "USPTO — Solicitud provisional (en inglés)", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Como depositar uma patente nos Estados Unidos | IPnite",
      description: "Guia do USPTO: pedidos provisórios e definitivos, período de graça de um ano e como preparar um pedido pronto para depósito a partir do Brasil.",
      h1: "Como depositar uma patente nos Estados Unidos",
      eyebrow: "USPTO · FONTE OFICIAL",
      lead: "O Escritório de Patentes e Marcas dos Estados Unidos (USPTO) examina pedidos de patente de invenção em um sistema de primeiro inventor a depositar. Se você vende ou pretende vender nesse mercado, proteger a invenção ali costuma ser prioridade.",
      sections: [
        {
          heading: "O sistema de primeiro inventor a depositar",
          paragraphs: [
            "Desde 16 de março de 2013, com o America Invents Act, os Estados Unidos concedem a patente a quem deposita primeiro, não a quem inventou primeiro. Há um período de graça de um ano: divulgações do próprio inventor no ano anterior ao depósito não são usadas contra ele. Muitos países não reconhecem esse benefício, então é melhor depositar antes de divulgar.",
          ],
        },
        {
          heading: "Pedido provisório e pedido definitivo",
          paragraphs: [
            "O pedido provisório garante uma data de depósito por 12 meses, não é examinado e não vira patente sozinho. Nesse prazo você deve depositar o pedido definitivo (nonprovisional) ou um pedido PCT que reivindique seu benefício. O definitivo é examinado e, se concedido, a patente dura até 20 anos a partir do depósito, sujeita às taxas de manutenção aos 3,5, 7,5 e 11,5 anos.",
          ],
          bullets: [
            "Relatório que permita reproduzir a invenção",
            "Pelo menos uma reivindicação no pedido definitivo",
            "Desenhos quando necessários para entender a invenção",
            "Resumo e declaração do inventor",
            "Taxas que dependem do porte da entidade (grande, pequena ou micro)",
          ],
        },
        {
          heading: "Como a IPnite ajuda",
          paragraphs: [
            "A IPnite estrutura a divulgação, busca anterioridades e gera em inglês o relatório, as reivindicações, o resumo e os desenhos do seu pedido, pronto para exportar em DOCX e depositar no Patent Center do USPTO. A IPnite não deposita por você; a revisão e a decisão de depositar são suas.",
          ],
        },
      ],
      faqs: [
        { q: "Posso depositar nos Estados Unidos a partir do Brasil?", a: "Sim. Inventores estrangeiros podem depositar no USPTO. Verifique os requisitos de representação e de licença de depósito no exterior aplicáveis ao seu caso." },
        { q: "Quanto dura uma patente americana?", a: "Até 20 anos a partir do depósito do pedido definitivo, desde que as taxas de manutenção sejam pagas." },
      ],
      sources: [
        { label: "USPTO — Noções básicas de patentes (em inglês)", url: "https://www.uspto.gov/patents/basics" },
        { label: "USPTO — Pedido provisório (em inglês)", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const mx: SeoPage = {
  id: "jurisdiction-mx",
  kind: "jurisdiction",
  handBuilt: { es: true },
  related: ["provisional", "ai-drafting", "jurisdiction-pct", "prior-art", "journey-filed"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("jurisdiction-mx", {
    en: {
      title: "How to File a Patent in Mexico | IPnite",
      description: "IMPI filing basics: the new provisional application in force since April 2026, patent and utility model terms, and how to prepare an application in Spanish.",
      h1: "How to File a Patent in Mexico",
      eyebrow: "IMPI · OFFICIAL SOURCE",
      lead: "Patents in Mexico are granted by the Mexican Institute of Industrial Property (IMPI) under the Federal Law for the Protection of Industrial Property. Since April 6, 2026, Mexico also offers provisional applications.",
      sections: [
        {
          heading: "The new Mexican provisional application",
          paragraphs: [
            "The 2026 reform introduced provisional patent applications. From the filing of a provisional you have a non-extendable 12-month period to file the complete application; the provisional itself is not published or examined, and it is considered declined if the complete application is not filed in time. A Mexican provisional cannot claim priority from an earlier application.",
          ],
        },
        {
          heading: "Patents and utility models",
          paragraphs: [
            "An invention patent lasts 20 years from filing and requires novelty, inventive step, and industrial application. Utility models protect practical improvements to objects, tools, or devices and last 15 years. Applications must be filed in Spanish, and IMPI performs formal and substantive examination.",
          ],
          bullets: [
            "Description, claims, abstract, and drawings in Spanish",
            "Publication of the application after 18 months",
            "Grace period of 12 months for the inventor's own disclosures",
            "Mexico is a PCT Contracting State",
          ],
        },
        {
          heading: "How IPnite helps",
          paragraphs: [
            "IPnite prepares the provisional or complete application in Spanish—description, claims, abstract, and drawings—and exports it as DOCX ready to review and file with IMPI. Filing and final review remain your responsibility.",
          ],
        },
      ],
      sources: [
        { label: "IMPI — Mexican Institute of Industrial Property", url: "https://www.gob.mx/impi" },
        { label: "WIPO — PCT Contracting States", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Redacción de patentes para México con IA | IPnite",
      description: "Prepara solicitudes provisionales y de patente para el IMPI con IA.",
      h1: "Redacción de patentes para México con IA",
      eyebrow: "MÉXICO · IMPI",
      lead: "Prepara solicitudes provisionales y de patente para el IMPI.",
      sections: [{ heading: "Solicitud provisional", paragraphs: ["Desde el 6 de abril de 2026 México cuenta con solicitudes provisionales."] }],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Como depositar uma patente no México | IPnite",
      description: "Guia do IMPI: o novo pedido provisório em vigor desde abril de 2026, prazos de patentes e modelos de utilidade e como preparar o pedido em espanhol.",
      h1: "Como depositar uma patente no México",
      eyebrow: "IMPI · FONTE OFICIAL",
      lead: "As patentes no México são concedidas pelo Instituto Mexicano da Propriedade Industrial (IMPI) com base na Lei Federal de Proteção à Propriedade Industrial. Desde 6 de abril de 2026, o México também oferece pedidos provisórios.",
      sections: [
        {
          heading: "O novo pedido provisório mexicano",
          paragraphs: [
            "A reforma de 2026 criou o pedido provisório de patente. A partir do depósito do provisório há um prazo improrrogável de 12 meses para depositar o pedido completo; o provisório não é publicado nem examinado e é considerado declinado se o pedido completo não for depositado a tempo. Um provisório mexicano não pode reivindicar prioridade de um pedido anterior.",
          ],
        },
        {
          heading: "Patentes e modelos de utilidade",
          paragraphs: [
            "A patente de invenção dura 20 anos a partir do depósito e exige novidade, atividade inventiva e aplicação industrial. Os modelos de utilidade protegem melhorias práticas em objetos, ferramentas ou dispositivos e duram 15 anos. O pedido deve ser apresentado em espanhol, e o IMPI faz exame formal e de mérito.",
          ],
          bullets: [
            "Relatório, reivindicações, resumo e desenhos em espanhol",
            "Publicação do pedido após 18 meses",
            "Período de graça de 12 meses para divulgações do próprio inventor",
            "O México é Estado contratante do PCT",
          ],
        },
        {
          heading: "Como a IPnite ajuda",
          paragraphs: [
            "A IPnite prepara o pedido provisório ou completo em espanhol (relatório, reivindicações, resumo e desenhos) e o exporta em DOCX pronto para revisar e depositar no IMPI. O depósito e a revisão final são sua responsabilidade.",
          ],
        },
      ],
      sources: [
        { label: "IMPI — Instituto Mexicano da Propriedade Industrial (em espanhol)", url: "https://www.gob.mx/impi" },
        { label: "OMPI — Estados contratantes do PCT (em inglês)", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const ar: SeoPage = {
  id: "jurisdiction-ar",
  kind: "jurisdiction",
  handBuilt: { es: true },
  related: ["ai-drafting", "prior-art", "jurisdiction-pct", "portfolio", "journey-filed"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("jurisdiction-ar", {
    en: {
      title: "How to File a Patent in Argentina | IPnite",
      description: "INPI Argentina filing basics: Law 24,481, the one-year grace period, PCT accession status, and how to prepare a filing-ready application in Spanish.",
      h1: "How to File a Patent in Argentina",
      eyebrow: "INPI ARGENTINA · OFFICIAL SOURCE",
      lead: "Patents in Argentina are granted by the National Institute of Industrial Property (INPI) under Law 24,481. Argentina has no provisional application, so the filing date comes from the complete national application.",
      sections: [
        {
          heading: "What the law requires",
          paragraphs: [
            "An invention must be new, involve inventive activity, and have industrial application. Invention patents last 20 years from filing; utility models last 10 years. Disclosures made by the inventor within one year before filing do not destroy novelty in Argentina, but many other countries do not recognize that grace period.",
          ],
          bullets: [
            "Description, claims, abstract, and drawings in Spanish",
            "Formal and substantive examination by INPI",
            "Paris Convention priority of 12 months for foreign filings",
          ],
        },
        {
          heading: "Argentina and the PCT",
          paragraphs: [
            "Argentina is not yet a PCT Contracting State. The Chamber of Deputies approved accession in August 2026 and the bill returned to the Senate. Until accession is complete, international protection from Argentina relies on direct national filings claiming Paris Convention priority.",
          ],
        },
        {
          heading: "How IPnite helps",
          paragraphs: [
            "IPnite prepares your application in Spanish and exports it as DOCX ready to file with INPI. Direct filing with INPI Argentina from the IPnite platform is coming soon, followed by trademark filings.",
          ],
        },
      ],
      sources: [
        { label: "INPI Argentina — National Institute of Industrial Property", url: "https://www.argentina.gob.ar/inpi" },
        { label: "WIPO — PCT Contracting States", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Redacción de patentes para Argentina con IA | IPnite",
      description: "Prepará solicitudes de patente para el INPI argentino con IA.",
      h1: "Redacción de patentes para Argentina con IA",
      eyebrow: "ARGENTINA · INPI",
      lead: "Prepará tu solicitud de patente para el INPI.",
      sections: [{ heading: "Solicitud nacional", paragraphs: ["Argentina no tiene solicitud provisional."] }],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Como depositar uma patente na Argentina | IPnite",
      description: "Guia do INPI argentino: Lei 24.481, período de graça de um ano, situação da adesão ao PCT e como preparar o pedido em espanhol.",
      h1: "Como depositar uma patente na Argentina",
      eyebrow: "INPI ARGENTINA · FONTE OFICIAL",
      lead: "As patentes na Argentina são concedidas pelo Instituto Nacional da Propriedade Industrial (INPI) com base na Lei 24.481. A Argentina não tem pedido provisório, então a data de depósito vem do pedido nacional completo.",
      sections: [
        {
          heading: "O que a lei exige",
          paragraphs: [
            "A invenção deve ser nova, envolver atividade inventiva e ter aplicação industrial. As patentes de invenção duram 20 anos a partir do depósito; os modelos de utilidade, 10 anos. Divulgações do inventor no ano anterior ao depósito não destroem a novidade na Argentina, mas muitos países não reconhecem esse período de graça.",
          ],
          bullets: [
            "Relatório, reivindicações, resumo e desenhos em espanhol",
            "Exame formal e de mérito pelo INPI",
            "Prioridade unionista de 12 meses (Convenção de Paris)",
          ],
        },
        {
          heading: "A Argentina e o PCT",
          paragraphs: [
            "A Argentina ainda não é Estado contratante do PCT. A Câmara dos Deputados aprovou a adesão em agosto de 2026 e o projeto voltou ao Senado. Até a adesão ser concluída, a proteção internacional a partir da Argentina depende de depósitos nacionais diretos com prioridade da Convenção de Paris.",
          ],
        },
        {
          heading: "Como a IPnite ajuda",
          paragraphs: [
            "A IPnite prepara seu pedido em espanhol e o exporta em DOCX pronto para depósito no INPI. Em breve será possível depositar no INPI argentino diretamente pela plataforma e, depois, registrar marcas.",
          ],
        },
      ],
      sources: [
        { label: "INPI Argentina (em espanhol)", url: "https://www.argentina.gob.ar/inpi" },
        { label: "OMPI — Estados contratantes do PCT (em inglês)", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const br: SeoPage = {
  id: "jurisdiction-br",
  kind: "jurisdiction",
  handBuilt: { pt: true },
  related: ["ai-drafting", "prior-art", "jurisdiction-pct", "portfolio", "journey-filed"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("jurisdiction-br", {
    en: {
      title: "How to File a Patent in Brazil | IPnite",
      description: "INPI Brazil filing basics: Law 9,279/1996, the 12-month grace period, the 36-month examination request, and how to prepare an application in Portuguese.",
      h1: "How to File a Patent in Brazil",
      eyebrow: "INPI BRAZIL · OFFICIAL SOURCE",
      lead: "Patents in Brazil are granted by the National Institute of Industrial Property (INPI) under the Industrial Property Law (Law 9,279/1996). Brazil has no provisional application; the filing date comes from the application itself.",
      sections: [
        {
          heading: "Key rules",
          paragraphs: [
            "Invention patents last 20 years from filing and utility models 15 years; since the Supreme Court's 2021 decision there is no longer a minimum term counted from grant. Applications are kept confidential for 18 months and then published. Examination is not automatic: the applicant must request it within 36 months of filing.",
          ],
          bullets: [
            "Application in Portuguese: description, claims, abstract, and drawings",
            "12-month grace period for the inventor's own disclosures",
            "Request for examination within 36 months",
            "Brazil is a PCT Contracting State",
          ],
        },
        {
          heading: "How IPnite helps",
          paragraphs: [
            "IPnite prepares the application in Portuguese—relatório descritivo, claims, abstract, and drawings—and exports it as DOCX ready to review and file electronically with INPI. Filing and final review remain your responsibility.",
          ],
        },
      ],
      sources: [
        { label: "INPI Brazil (in Portuguese)", url: "https://www.gov.br/inpi/pt-br" },
        { label: "Brazil — Industrial Property Law 9,279/1996 (in Portuguese)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9279.htm" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Cómo presentar una patente en Brasil | IPnite",
      description: "Guía del INPI de Brasil: Ley 9.279/1996, periodo de gracia de 12 meses, solicitud de examen en 36 meses y cómo preparar la solicitud en portugués.",
      h1: "Cómo presentar una patente en Brasil",
      eyebrow: "INPI BRASIL · FUENTE OFICIAL",
      lead: "En Brasil, las patentes las concede el Instituto Nacional de la Propiedad Industrial (INPI) con base en la Ley de Propiedad Industrial (Ley 9.279/1996). Brasil no tiene solicitud provisional: la fecha de presentación la da la propia solicitud.",
      sections: [
        {
          heading: "Reglas clave",
          paragraphs: [
            "Las patentes de invención duran 20 años desde la presentación y los modelos de utilidad 15 años; desde la decisión del Supremo Tribunal Federal de 2021 ya no existe un plazo mínimo contado desde la concesión. Las solicitudes se mantienen en secreto 18 meses y luego se publican. El examen no es automático: debes pedirlo dentro de los 36 meses siguientes a la presentación.",
          ],
          bullets: [
            "Solicitud en portugués: descripción, reivindicaciones, resumen y dibujos",
            "Periodo de gracia de 12 meses para divulgaciones del propio inventor",
            "Solicitud de examen dentro de los 36 meses",
            "Brasil es Estado contratante del PCT",
          ],
        },
        {
          heading: "Cómo te ayuda IPnite",
          paragraphs: [
            "IPnite prepara la solicitud en portugués (relatório descritivo, reivindicaciones, resumen y dibujos) y la exporta en DOCX lista para revisar y presentar electrónicamente ante el INPI. La presentación y la revisión final son tu responsabilidad.",
          ],
        },
      ],
      sources: [
        { label: "INPI Brasil (en portugués)", url: "https://www.gov.br/inpi/pt-br" },
        { label: "Brasil — Ley de Propiedad Industrial 9.279/1996 (en portugués)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9279.htm" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Redação de patentes para o Brasil com IA | IPnite",
      description: "Prepare pedidos de patente para o INPI com IA.",
      h1: "Redação de patentes para o Brasil com IA",
      eyebrow: "BRASIL · INPI",
      lead: "Prepare seu pedido de patente para o INPI.",
      sections: [{ heading: "Pedido nacional", paragraphs: ["O Brasil não tem pedido provisório."] }],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const pct: SeoPage = {
  id: "jurisdiction-pct",
  kind: "jurisdiction",
  related: ["jurisdiction-us", "jurisdiction-mx", "jurisdiction-br", "provisional", "journey-filed"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("jurisdiction-pct", {
    en: {
      title: "How the PCT Patent Application Process Works | IPnite",
      description: "One international application, an international search report, publication at 18 months, and national phase entry at 30 or 31 months. How the PCT works.",
      h1: "How the PCT Patent Application Process Works",
      eyebrow: "WIPO · OFFICIAL SOURCE",
      lead: "The Patent Cooperation Treaty (PCT), administered by WIPO, lets you file one international application that keeps your options open in more than 150 countries. There is no such thing as an international patent: each country still decides whether to grant.",
      sections: [
        {
          heading: "The international phase",
          paragraphs: [
            "You file the international application with a receiving office, often your national patent office, usually within 12 months of your first filing to claim its priority. An International Searching Authority issues a search report and a written opinion on patentability. The application is published about 18 months after the priority date. You may optionally request international preliminary examination.",
          ],
        },
        {
          heading: "The national phase",
          paragraphs: [
            "Around 30 months from the priority date (31 in some offices, such as the European Patent Office), you enter the national or regional phase in each country where you want protection, paying fees and filing translations. Each office then examines under its own law.",
          ],
          bullets: [
            "Month 0: first filing (for example, a provisional or national application)",
            "Month 12: PCT filing claiming priority",
            "About month 16: international search report and written opinion",
            "Month 18: international publication",
            "Month 30/31: national phase entry",
          ],
        },
        {
          heading: "Who can use it",
          paragraphs: [
            "The United States, Mexico, and Brazil are PCT Contracting States. Argentina is not yet: its accession was approved by the Chamber of Deputies in August 2026 and returned to the Senate.",
          ],
        },
        {
          heading: "How IPnite helps",
          paragraphs: [
            "IPnite keeps the first filing, the prior art, and every version of the application in one project, so the PCT application is consistent with the priority document. Filing strategy and deadlines are your responsibility or your professional's.",
          ],
        },
      ],
      sources: [
        { label: "WIPO — PCT: The International Patent System", url: "https://www.wipo.int/pct/en/" },
        { label: "WIPO — PCT Contracting States", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Cómo funciona una solicitud internacional PCT | IPnite",
      description: "Una solicitud internacional, informe de búsqueda, publicación a los 18 meses y entrada en fase nacional a los 30 o 31 meses. Así funciona el PCT.",
      h1: "Cómo funciona el proceso de solicitud PCT",
      eyebrow: "OMPI · FUENTE OFICIAL",
      lead: "El Tratado de Cooperación en materia de Patentes (PCT), administrado por la OMPI, te permite presentar una sola solicitud internacional que mantiene abiertas tus opciones en más de 150 países. No existe una patente internacional: cada país decide si la concede.",
      sections: [
        {
          heading: "La fase internacional",
          paragraphs: [
            "Presentas la solicitud internacional ante una oficina receptora, a menudo tu oficina nacional, normalmente dentro de los 12 meses siguientes a tu primera presentación para reclamar su prioridad. Una Administración encargada de la búsqueda internacional emite un informe de búsqueda y una opinión escrita sobre la patentabilidad. La solicitud se publica unos 18 meses después de la fecha de prioridad. Si quieres, puedes pedir un examen preliminar internacional.",
          ],
        },
        {
          heading: "La fase nacional",
          paragraphs: [
            "Alrededor de los 30 meses desde la fecha de prioridad (31 en algunas oficinas, como la Oficina Europea de Patentes) entras en la fase nacional o regional de cada país donde quieres protección, pagando tasas y presentando traducciones. Cada oficina examina según su propia ley.",
          ],
          bullets: [
            "Mes 0: primera presentación (por ejemplo, una provisional o una solicitud nacional)",
            "Mes 12: solicitud PCT reclamando la prioridad",
            "Mes 16 aprox.: informe de búsqueda internacional y opinión escrita",
            "Mes 18: publicación internacional",
            "Mes 30/31: entrada en fase nacional",
          ],
        },
        {
          heading: "Quién puede usarlo",
          paragraphs: [
            "Estados Unidos, México y Brasil son Estados contratantes del PCT. Argentina todavía no: la Cámara de Diputados aprobó la adhesión en agosto de 2026 y el proyecto volvió al Senado.",
          ],
        },
        {
          heading: "Cómo te ayuda IPnite",
          paragraphs: [
            "IPnite guarda la primera presentación, los antecedentes y cada versión de la solicitud en un solo proyecto, para que la solicitud PCT sea coherente con el documento de prioridad. La estrategia y los plazos son tu responsabilidad o la de tu profesional.",
          ],
        },
      ],
      sources: [
        { label: "OMPI — PCT: el sistema internacional de patentes", url: "https://www.wipo.int/pct/es/" },
        { label: "OMPI — Estados contratantes del PCT (en inglés)", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Como funciona um pedido internacional PCT | IPnite",
      description: "Um pedido internacional, relatório de busca, publicação aos 18 meses e entrada na fase nacional aos 30 ou 31 meses. Veja como funciona o PCT.",
      h1: "Como funciona o processo de pedido PCT",
      eyebrow: "OMPI · FONTE OFICIAL",
      lead: "O Tratado de Cooperação em Matéria de Patentes (PCT), administrado pela OMPI, permite depositar um único pedido internacional que mantém suas opções abertas em mais de 150 países. Não existe patente internacional: cada país decide se concede.",
      sections: [
        {
          heading: "A fase internacional",
          paragraphs: [
            "Você deposita o pedido internacional em um escritório receptor, muitas vezes o INPI, normalmente em até 12 meses do primeiro depósito para reivindicar sua prioridade. Uma Autoridade de Busca Internacional emite um relatório de busca e uma opinião escrita sobre a patenteabilidade. O pedido é publicado cerca de 18 meses após a data de prioridade. Se quiser, pode solicitar o exame preliminar internacional.",
          ],
        },
        {
          heading: "A fase nacional",
          paragraphs: [
            "Por volta de 30 meses da data de prioridade (31 em alguns escritórios, como o Escritório Europeu de Patentes), você entra na fase nacional ou regional de cada país onde quer proteção, pagando taxas e apresentando traduções. Cada escritório examina conforme sua própria lei.",
          ],
          bullets: [
            "Mês 0: primeiro depósito (por exemplo, um pedido nacional no INPI)",
            "Mês 12: pedido PCT reivindicando a prioridade",
            "Mês 16 aprox.: relatório de busca internacional e opinião escrita",
            "Mês 18: publicação internacional",
            "Mês 30/31: entrada na fase nacional",
          ],
        },
        {
          heading: "Quem pode usar",
          paragraphs: [
            "O Brasil, os Estados Unidos e o México são Estados contratantes do PCT. A Argentina ainda não: a adesão foi aprovada pela Câmara dos Deputados em agosto de 2026 e voltou ao Senado.",
          ],
        },
        {
          heading: "Como a IPnite ajuda",
          paragraphs: [
            "A IPnite guarda o primeiro depósito, as anterioridades e cada versão do pedido em um só projeto, para que o pedido PCT seja coerente com o documento de prioridade. A estratégia e os prazos são responsabilidade sua ou do seu profissional.",
          ],
        },
      ],
      sources: [
        { label: "OMPI — PCT: o sistema internacional de patentes (em inglês)", url: "https://www.wipo.int/pct/en/" },
        { label: "OMPI — Estados contratantes do PCT (em inglês)", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

export const jurisdictionPages: SeoPage[] = [us, mx, ar, br, pct];
