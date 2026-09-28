import type { SeoPage } from "./types";
import { commonCta } from "./types";
import { routed } from "./helpers";
import { drafterStepPages } from "./drafterSteps";

const drafting: SeoPage = {
  id: "ai-drafting",
  kind: "product",
  related: ["prior-art", "drawings", "portfolio", "provisional", "journey-idea"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("ai-drafting", {
    en: {
      title: "AI Patent Drafting Software | IPnite",
      description: "Turn an invention disclosure into claims, a full specification, drawings, and a DOCX patent application ready to file. Built for inventors and firms.",
      h1: "AI Patent Drafting Software",
      eyebrow: "THE DRAFTER BY IPnite",
      lead: "IPnite turns a technical disclosure into a structured patent application—claims, specification, abstract, and drawings—that you can review, export as DOCX, and file.",
      sections: [
        {
          heading: "From disclosure to a filing-ready application",
          paragraphs: [
            "Drafting starts with the invention, not with a blank page. You describe the technical problem, the solution, its components, alternatives, and advantages. IPnite's agents keep that information connected while they build every part of the application.",
            "The Drafter generates independent and dependent claims, a detailed description with embodiments and variants, a background section, a summary, and an abstract. Drawings and reference numerals stay consistent with the text because they come from the same project.",
          ],
          bullets: [
            "Guided invention disclosure with the Discovery Agent",
            "Independent and dependent claim sets with fallback positions",
            "Specification, background, summary, and abstract",
            "Reference drawings aligned with the description",
            "Field-specific language review and QA checks",
            "DOCX export on every plan",
          ],
        },
        {
          heading: "Drafting connected to prior art",
          paragraphs: [
            "A strong application is written with the closest prior art in mind. IPnite runs prior-art searches inside the same project, so the references you save inform claim scope and the description of what makes the invention different.",
            "Because research, drafts, drawings, and versions live together, you never rebuild context across separate documents, emails, and chat windows.",
          ],
        },
        {
          heading: "Built for inventors and for patent professionals",
          paragraphs: [
            "Independent inventors and startups use IPnite to produce a complete, structured application they can file themselves or send for professional review. Law firms and patent agents use it to cut the time spent on first drafts and repetitive sections while keeping strategy and final judgment in their hands.",
          ],
        },
        {
          heading: "You own your drafts, and review stays with you",
          paragraphs: [
            "Everything IPnite generates from your information belongs to you: you can edit it, file it with any patent office, and use it however you decide. IPnite never uses your content to train AI models.",
            "AI output can contain errors. IPnite is software, not a law firm: you are responsible for reviewing the application or having it reviewed by a qualified professional before filing.",
          ],
        },
      ],
      faqs: [
        { q: "Can IPnite write a complete patent application?", a: "Yes. IPnite generates claims, a detailed description, background, summary, abstract, and reference drawings in one project. You review, edit, and export the application as DOCX before filing." },
        { q: "Which patent offices can I prepare applications for?", a: "IPnite supports preparation workflows for the USPTO (United States), IMPI (Mexico), INPI Argentina, INPI Brazil, and international PCT applications." },
        { q: "Who owns the text IPnite generates?", a: "You do. Drafts generated from your information belong to you and can be filed, edited, or shared without restriction." },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Software de redacción de patentes con IA | IPnite",
      description: "Convierte la divulgación de tu invención en reivindicaciones, descripción, dibujos y una solicitud en DOCX lista para presentar. Para inventores y despachos.",
      h1: "Software de redacción de patentes con IA",
      eyebrow: "EL REDACTOR DE IPnite",
      lead: "IPnite convierte una divulgación técnica en una solicitud de patente estructurada (reivindicaciones, descripción, resumen y dibujos) que puedes revisar, exportar en DOCX y presentar.",
      sections: [
        {
          heading: "De la divulgación a una solicitud lista para presentar",
          paragraphs: [
            "La redacción empieza por la invención, no por una hoja en blanco. Describes el problema técnico, la solución, sus componentes, alternativas y ventajas. Los agentes de IPnite mantienen esa información conectada mientras construyen cada parte de la solicitud.",
            "El Redactor genera reivindicaciones independientes y dependientes, una descripción detallada con modalidades y variantes, los antecedentes, el resumen de la invención y el resumen técnico. Los dibujos y sus números de referencia coinciden con el texto porque salen del mismo proyecto.",
          ],
          bullets: [
            "Divulgación guiada con el Agente de descubrimiento",
            "Reivindicaciones independientes y dependientes con posiciones de respaldo",
            "Descripción, antecedentes, resumen y resumen técnico",
            "Dibujos de referencia alineados con la descripción",
            "Revisión del lenguaje técnico del campo y control de calidad",
            "Exportación en DOCX en todos los planes",
          ],
        },
        {
          heading: "Redacción conectada con la búsqueda de antecedentes",
          paragraphs: [
            "Una buena solicitud se redacta teniendo presentes los antecedentes más cercanos. IPnite hace la búsqueda de antecedentes dentro del mismo proyecto, así que las referencias que guardas orientan el alcance de las reivindicaciones y la explicación de lo que hace diferente a tu invención.",
            "Como la investigación, los borradores, los dibujos y las versiones viven juntos, nunca tienes que reconstruir el contexto entre documentos, correos y ventanas de chat.",
          ],
        },
        {
          heading: "Para inventores y para profesionales de patentes",
          paragraphs: [
            "Inventores independientes y startups usan IPnite para obtener una solicitud completa y estructurada que pueden presentar por su cuenta o enviar a revisión profesional. Despachos y agentes de patentes la usan para reducir el tiempo de los primeros borradores y de las secciones repetitivas, sin ceder la estrategia ni el criterio final.",
          ],
        },
        {
          heading: "Tus borradores son tuyos y la revisión queda en tus manos",
          paragraphs: [
            "Todo lo que IPnite genera a partir de tu información te pertenece: puedes editarlo, presentarlo ante cualquier oficina de patentes y usarlo como decidas. IPnite nunca usa tu contenido para entrenar modelos de IA.",
            "Los resultados de la IA pueden contener errores. IPnite es software, no un despacho: tú eres responsable de revisar la solicitud o de enviarla a revisión con un profesional antes de presentarla.",
          ],
        },
      ],
      faqs: [
        { q: "¿IPnite puede redactar una solicitud de patente completa?", a: "Sí. IPnite genera reivindicaciones, descripción detallada, antecedentes, resumen y dibujos de referencia en un solo proyecto. Tú revisas, editas y exportas la solicitud en DOCX antes de presentarla." },
        { q: "¿Para qué oficinas de patentes puedo preparar solicitudes?", a: "IPnite tiene flujos de preparación para la USPTO (Estados Unidos), el IMPI (México), el INPI de Argentina, el INPI de Brasil y solicitudes internacionales PCT." },
        { q: "¿De quién es el texto que genera IPnite?", a: "Tuyo. Los borradores generados con tu información te pertenecen y puedes presentarlos, editarlos o compartirlos sin restricciones." },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Software de redação de patentes com IA | IPnite",
      description: "Transforme a divulgação da sua invenção em reivindicações, relatório, desenhos e um pedido em DOCX pronto para depósito. Para inventores e escritórios.",
      h1: "Software de redação de patentes com IA",
      eyebrow: "THE DRAFTER DA IPnite",
      lead: "A IPnite transforma uma divulgação técnica em um pedido de patente estruturado (reivindicações, relatório descritivo, resumo e desenhos) que você pode revisar, exportar em DOCX e depositar.",
      sections: [
        {
          heading: "Da divulgação a um pedido pronto para depósito",
          paragraphs: [
            "A redação começa pela invenção, não por uma página em branco. Você descreve o problema técnico, a solução, seus componentes, alternativas e vantagens. Os agentes da IPnite mantêm essas informações conectadas enquanto constroem cada parte do pedido.",
            "The Drafter gera reivindicações independentes e dependentes, um relatório descritivo com concretizações e variantes, o estado da técnica, o sumário e o resumo. Os desenhos e seus sinais de referência ficam coerentes com o texto porque vêm do mesmo projeto.",
          ],
          bullets: [
            "Divulgação guiada com o Agente de descoberta",
            "Reivindicações independentes e dependentes com posições de fallback",
            "Relatório descritivo, estado da técnica, sumário e resumo",
            "Desenhos de referência alinhados à descrição",
            "Revisão da linguagem técnica do campo e controle de qualidade",
            "Exportação em DOCX em todos os planos",
          ],
        },
        {
          heading: "Redação conectada à busca de anterioridade",
          paragraphs: [
            "Um bom pedido é redigido com as anterioridades mais próximas em mente. A IPnite faz a busca de anterioridade dentro do mesmo projeto, então as referências que você salva orientam o escopo das reivindicações e a explicação do que torna sua invenção diferente.",
            "Como pesquisa, rascunhos, desenhos e versões ficam juntos, você nunca precisa reconstruir o contexto entre documentos, e-mails e janelas de chat.",
          ],
        },
        {
          heading: "Para inventores e para profissionais de patentes",
          paragraphs: [
            "Inventores independentes e startups usam a IPnite para obter um pedido completo e estruturado que podem depositar por conta própria ou enviar para revisão profissional. Escritórios e agentes da propriedade industrial a usam para reduzir o tempo dos primeiros rascunhos e das seções repetitivas, mantendo a estratégia e o julgamento final.",
          ],
        },
        {
          heading: "Seus rascunhos são seus, e a revisão fica com você",
          paragraphs: [
            "Tudo o que a IPnite gera a partir das suas informações pertence a você: pode editar, depositar em qualquer escritório de patentes e usar como decidir. A IPnite nunca usa seu conteúdo para treinar modelos de IA.",
            "Resultados de IA podem conter erros. A IPnite é um software, não um escritório de advocacia: você é responsável por revisar o pedido ou enviá-lo para revisão com um profissional antes do depósito.",
          ],
        },
      ],
      faqs: [
        { q: "A IPnite consegue redigir um pedido de patente completo?", a: "Sim. A IPnite gera reivindicações, relatório descritivo, estado da técnica, resumo e desenhos de referência em um único projeto. Você revisa, edita e exporta o pedido em DOCX antes do depósito." },
        { q: "Para quais escritórios de patentes posso preparar pedidos?", a: "A IPnite tem fluxos de preparação para o USPTO (Estados Unidos), o IMPI (México), o INPI da Argentina, o INPI do Brasil e pedidos internacionais PCT." },
        { q: "De quem é o texto que a IPnite gera?", a: "Seu. Os rascunhos gerados com suas informações pertencem a você e podem ser depositados, editados ou compartilhados sem restrições." },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const priorArt: SeoPage = {
  id: "prior-art",
  kind: "product",
  related: ["ai-drafting", "search", "drawings", "portfolio", "journey-idea"],
  primaryAction: { name: "search_prior_art", event: "prior_art_search_clicked" },
  locales: routed("prior-art", {
    en: {
      title: "AI Prior Art Search for Patents | IPnite",
      description: "Find, review, and organize the patent references closest to your invention with AI-assisted prior-art search, then draft with those references in view.",
      h1: "AI-Powered Prior Art Search",
      eyebrow: "SEARCH BEFORE YOU DRAFT",
      lead: "Prior art decides whether an invention is new and how broad its claims can be. IPnite's Discovery Agent searches by technical concept, not just keywords, and keeps the relevant references inside your project.",
      sections: [
        {
          heading: "What a prior-art search answers",
          paragraphs: [
            "Prior art is any information made public before your filing date that may disclose features of your invention: patents, published applications, scientific papers, products, and other public disclosures. A prior-art search asks a precise question: has this combination of features already been disclosed, and how close is the closest reference?",
            "The answer shapes everything that follows—whether to file, which features to claim, and how to describe the advantage over what already exists.",
          ],
        },
        {
          heading: "How the Discovery Agent works",
          paragraphs: [
            "You describe the invention in your own words. The agent identifies its essential technical features, expands terminology and synonyms, and searches patent literature semantically, so results appear even when other documents use different wording.",
          ],
          bullets: [
            "Concept-based search beyond exact keywords",
            "Relevance ranking against the essential features of your invention",
            "Reference viewer with bibliographic data and key passages",
            "Saved references connected to the drafting project",
            "Patentability analysis on every paid plan, delivered for your review",
          ],
        },
        {
          heading: "From search results to better claims",
          paragraphs: [
            "Saved references stay attached to the invention. When The Drafter builds claims, it can emphasize the features that distinguish your invention from the closest documents and prepare dependent claims that give you fallback positions.",
          ],
        },
        {
          heading: "Results you read with judgment",
          paragraphs: [
            "No search can guarantee that every relevant document was found. Patentability and freedom-to-operate (FTO) analyses from IPnite are AI-assisted deliverables: you are responsible for reading them or having them reviewed by a qualified professional, and IPnite does not guarantee their conclusions.",
          ],
        },
      ],
      faqs: [
        { q: "Can I try a prior-art search for free?", a: "Explore a Search Strategy Preview or Draft Preview with your own invention. The 7-day free trial does not include a complete search or a final refined, exportable application. No credit card and no automatic charges." },
        { q: "How many searches do the plans include?", a: "Inventor includes 2 prior-art searches per month, Startup 10, and Institutional 50." },
        { q: "Is a prior-art search the same as a legal opinion?", a: "No. A search identifies and organizes relevant references. A formal patentability or FTO opinion requires a professional's legal analysis." },
      ],
      cta: "Preview your search strategy free",
      ctaBody: "Preview a search strategy or try the drafting workflow during a 7-day free trial. No complete search or final export. No credit card.",
    },
    es: {
      title: "Búsqueda de antecedentes de patentes con IA | IPnite",
      description: "Encuentra, revisa y organiza las patentes más cercanas a tu invención con búsqueda de antecedentes asistida por IA, y redacta con esas referencias a la vista.",
      h1: "Búsqueda de antecedentes con IA",
      eyebrow: "BUSCA ANTES DE REDACTAR",
      lead: "Los antecedentes deciden si una invención es nueva y qué tan amplias pueden ser sus reivindicaciones. El Agente de descubrimiento de IPnite busca por concepto técnico, no solo por palabras clave, y guarda las referencias relevantes dentro de tu proyecto.",
      sections: [
        {
          heading: "Qué responde una búsqueda de antecedentes",
          paragraphs: [
            "Un antecedente es cualquier información hecha pública antes de tu fecha de presentación que pueda divulgar características de tu invención: patentes, solicitudes publicadas, artículos científicos, productos y otras divulgaciones. La búsqueda de antecedentes hace una pregunta precisa: ¿ya se divulgó esta combinación de características y qué tan cerca está la referencia más próxima?",
            "La respuesta define todo lo que sigue: si conviene presentar, qué características reivindicar y cómo explicar la ventaja frente a lo que ya existe.",
          ],
        },
        {
          heading: "Cómo funciona el Agente de descubrimiento",
          paragraphs: [
            "Describes la invención con tus propias palabras. El agente identifica sus características técnicas esenciales, amplía la terminología y los sinónimos, y busca en la literatura de patentes de forma semántica, así que aparecen resultados aunque otros documentos usen palabras distintas.",
          ],
          bullets: [
            "Búsqueda por conceptos, más allá de palabras exactas",
            "Resultados ordenados según las características esenciales de tu invención",
            "Visor de referencias con datos bibliográficos y pasajes clave",
            "Referencias guardadas y conectadas al proyecto de redacción",
            "Análisis de patentabilidad en todos los planes de pago, entregado para tu revisión",
          ],
        },
        {
          heading: "De los resultados a mejores reivindicaciones",
          paragraphs: [
            "Las referencias guardadas quedan unidas a la invención. Cuando el Redactor construye las reivindicaciones, puede destacar las características que distinguen tu invención de los documentos más cercanos y preparar reivindicaciones dependientes que te den posiciones de respaldo.",
          ],
        },
        {
          heading: "Resultados que se leen con criterio",
          paragraphs: [
            "Ninguna búsqueda garantiza haber encontrado todos los documentos relevantes. Los análisis de patentabilidad y de libertad de operación (FTO) de IPnite son entregables asistidos por IA: tú eres responsable de leerlos o de enviarlos a revisión con un profesional, e IPnite no garantiza sus conclusiones.",
          ],
        },
      ],
      faqs: [
        { q: "¿Puedo probar una búsqueda de antecedentes gratis?", a: "Explora una vista previa de estrategia de búsqueda o del flujo de redacción con tu propia invención. La prueba gratis de 7 días no incluye una búsqueda completa ni una solicitud final refinada o exportable. Sin tarjeta y sin cobros automáticos." },
        { q: "¿Cuántas búsquedas incluyen los planes?", a: "Inventor incluye 2 búsquedas de antecedentes al mes, Startup 10 e Institucional 50." },
        { q: "¿Una búsqueda de antecedentes equivale a una opinión legal?", a: "No. La búsqueda identifica y organiza referencias relevantes. Una opinión formal de patentabilidad o FTO requiere el análisis jurídico de un profesional." },
      ],
      cta: "Prueba gratis tu estrategia de búsqueda",
      ctaBody: "Prueba una estrategia de búsqueda o el flujo de redacción durante 7 días. Sin búsqueda completa ni exportación final. Sin tarjeta.",
    },
    pt: {
      title: "Busca de anterioridade de patentes com IA | IPnite",
      description: "Encontre, revise e organize as patentes mais próximas da sua invenção com busca de anterioridade assistida por IA e redija com essas referências à vista.",
      h1: "Busca de anterioridade com IA",
      eyebrow: "PESQUISE ANTES DE REDIGIR",
      lead: "A anterioridade decide se uma invenção é nova e quão amplas podem ser suas reivindicações. O Agente de descoberta da IPnite busca por conceito técnico, não só por palavras-chave, e mantém as referências relevantes dentro do seu projeto.",
      sections: [
        {
          heading: "O que uma busca de anterioridade responde",
          paragraphs: [
            "Anterioridade é qualquer informação tornada pública antes da data de depósito que possa revelar características da sua invenção: patentes, pedidos publicados, artigos científicos, produtos e outras divulgações. A busca faz uma pergunta precisa: essa combinação de características já foi divulgada, e quão próxima está a referência mais relevante?",
            "A resposta define tudo o que vem depois: se vale a pena depositar, quais características reivindicar e como explicar a vantagem sobre o que já existe.",
          ],
        },
        {
          heading: "Como funciona o Agente de descoberta",
          paragraphs: [
            "Você descreve a invenção com suas próprias palavras. O agente identifica as características técnicas essenciais, amplia a terminologia e os sinônimos e busca na literatura de patentes de forma semântica, então aparecem resultados mesmo quando outros documentos usam palavras diferentes.",
          ],
          bullets: [
            "Busca por conceitos, além de palavras exatas",
            "Resultados ordenados pelas características essenciais da invenção",
            "Visualizador de referências com dados bibliográficos e trechos-chave",
            "Referências salvas e conectadas ao projeto de redação",
            "Análise de patenteabilidade em todos os planos pagos, entregue para sua revisão",
          ],
        },
        {
          heading: "Dos resultados a reivindicações melhores",
          paragraphs: [
            "As referências salvas ficam ligadas à invenção. Quando The Drafter constrói as reivindicações, pode destacar as características que distinguem sua invenção dos documentos mais próximos e preparar reivindicações dependentes que dão posições de fallback.",
          ],
        },
        {
          heading: "Resultados lidos com critério",
          paragraphs: [
            "Nenhuma busca garante ter encontrado todos os documentos relevantes. As análises de patenteabilidade e de liberdade de operação (FTO) da IPnite são entregáveis assistidos por IA: você é responsável por lê-las ou enviá-las para revisão profissional, e a IPnite não garante suas conclusões.",
          ],
        },
      ],
      faqs: [
        { q: "Posso testar uma busca de anterioridade grátis?", a: "Explore uma prévia da estratégia de busca ou do fluxo de redação com sua própria invenção. O teste grátis de 7 dias não inclui uma busca completa nem um pedido final refinado ou exportável. Sem cartão e sem cobranças automáticas." },
        { q: "Quantas buscas os planos incluem?", a: "O Inventor inclui 2 buscas de anterioridade por mês, o Startup 10 e o Institucional 50." },
        { q: "Uma busca de anterioridade equivale a um parecer jurídico?", a: "Não. A busca identifica e organiza referências relevantes. Um parecer formal de patenteabilidade ou FTO exige a análise jurídica de um profissional." },
      ],
      cta: "Teste grátis sua estratégia de busca",
      ctaBody: "Experimente uma estratégia de busca ou o fluxo de redação durante 7 dias. Sem busca completa nem exportação final. Sem cartão.",
    },
  }),
};

const drawings: SeoPage = {
  id: "drawings",
  kind: "product",
  related: ["ai-drafting", "prior-art", "portfolio", "provisional"],
  primaryAction: { name: "create_patent_drawing", event: "patent_drawing_clicked" },
  locales: routed("drawings", {
    en: {
      title: "AI Patent Drawing Generator | IPnite",
      description: "Create patent figures and reference numerals that match your claims and description, in the same project where you draft your application.",
      h1: "Create Patent Drawings with AI",
      eyebrow: "FIGURES THAT SUPPORT THE DISCLOSURE",
      lead: "Figures make structures, relationships, and process steps easier to understand. IPnite's Drawing Agent creates reference drawings from the components already captured in your invention, so numbering and terminology match the text.",
      sections: [
        {
          heading: "From technical description to figures",
          paragraphs: [
            "The Drawing Agent uses the components, connections, and steps recorded in your disclosure to propose diagrams, flowcharts, and reference figures. Each element receives a reference numeral that is reused in the detailed description.",
          ],
          bullets: [
            "Block diagrams, flowcharts, and reference figures",
            "Consistent reference numerals across figures and text",
            "Brief description of the drawings generated with the application",
            "Figures exported with the DOCX application",
            "Download figures as PNG, JPG, or SVG",
          ],
        },
        {
          heading: "Why consistency matters",
          paragraphs: [
            "A figure must support the disclosure rather than introduce unexplained subject matter. Mismatched names, numerals that appear in a figure but not in the text, or views that contradict the claims are common reasons for objections and costly corrections.",
          ],
        },
        {
          heading: "Formal requirements differ by office",
          paragraphs: [
            "Patent offices set rules for line quality, margins, sheet size, views, and lettering. In the United States these rules are in 37 CFR 1.84; international applications follow PCT Rule 11. Review generated figures against the requirements of your target office before filing, or have them professionally reviewed.",
          ],
        },
      ],
      faqs: [
        { q: "Can IPnite produce drawings ready to file?", a: "IPnite generates reference figures and numerals aligned with your application. Check them against the formal requirements of your target office before filing." },
        { q: "Are drawings included in every plan?", a: "Yes. AI-assisted drawings are part of the Inventor, Startup, and Institutional plans." },
      ],
      sources: [
        { label: "USPTO — 37 CFR 1.84, standards for drawings (MPEP 608.02)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" },
        { label: "WIPO — PCT Regulations, Rule 11", url: "https://www.wipo.int/pct/en/texts/rules/r11.html" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Generador de dibujos de patentes con IA | IPnite",
      description: "Crea figuras de patente y números de referencia que coinciden con tus reivindicaciones y tu descripción, en el mismo proyecto donde redactas la solicitud.",
      h1: "Crea dibujos de patentes con IA",
      eyebrow: "FIGURAS QUE RESPALDAN LA DIVULGACIÓN",
      lead: "Las figuras explican estructuras, relaciones y etapas de un proceso. El Agente de dibujos de IPnite crea dibujos de referencia a partir de los componentes que ya capturaste, así que la numeración y la terminología coinciden con el texto.",
      sections: [
        {
          heading: "De la descripción técnica a las figuras",
          paragraphs: [
            "El Agente de dibujos usa los componentes, conexiones y pasos registrados en tu divulgación para proponer diagramas, diagramas de flujo y figuras de referencia. Cada elemento recibe un número de referencia que se reutiliza en la descripción detallada.",
          ],
          bullets: [
            "Diagramas de bloques, diagramas de flujo y figuras de referencia",
            "Números de referencia coherentes entre figuras y texto",
            "Breve descripción de los dibujos generada con la solicitud",
            "Figuras exportadas junto con la solicitud en DOCX",
            "Descarga las figuras en PNG, JPG o SVG",
          ],
        },
        {
          heading: "Por qué importa la coherencia",
          paragraphs: [
            "Una figura debe respaldar la divulgación, no introducir materia sin explicar. Nombres que no coinciden, números que aparecen en una figura pero no en el texto o vistas que contradicen las reivindicaciones son causas frecuentes de requerimientos y correcciones costosas.",
          ],
        },
        {
          heading: "Los requisitos formales cambian según la oficina",
          paragraphs: [
            "Cada oficina fija reglas sobre calidad de línea, márgenes, tamaño de hoja, vistas y rotulación. En Estados Unidos están en 37 CFR 1.84 y las solicitudes internacionales siguen la Regla 11 del PCT. Revisa las figuras generadas frente a los requisitos de la oficina donde vas a presentar, o envíalas a revisión profesional.",
          ],
        },
      ],
      faqs: [
        { q: "¿IPnite genera dibujos listos para presentar?", a: "IPnite genera figuras y números de referencia alineados con tu solicitud. Revísalos frente a los requisitos formales de la oficina correspondiente antes de presentar." },
        { q: "¿Los dibujos están incluidos en todos los planes?", a: "Sí. Los dibujos asistidos por IA forman parte de los planes Inventor, Startup e Institucional." },
      ],
      sources: [
        { label: "USPTO — 37 CFR 1.84, estándares para dibujos (MPEP 608.02)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" },
        { label: "OMPI — Reglamento del PCT, Regla 11", url: "https://www.wipo.int/pct/en/texts/rules/r11.html" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Gerador de desenhos de patentes com IA | IPnite",
      description: "Crie figuras de patente e sinais de referência que coincidem com suas reivindicações e seu relatório, no mesmo projeto em que você redige o pedido.",
      h1: "Crie desenhos de patentes com IA",
      eyebrow: "FIGURAS QUE SUSTENTAM A DIVULGAÇÃO",
      lead: "As figuras explicam estruturas, relações e etapas de um processo. O Agente de desenhos da IPnite cria desenhos de referência a partir dos componentes que você já registrou, então numeração e terminologia coincidem com o texto.",
      sections: [
        {
          heading: "Da descrição técnica às figuras",
          paragraphs: [
            "O Agente de desenhos usa os componentes, conexões e etapas registrados na divulgação para propor diagramas, fluxogramas e figuras de referência. Cada elemento recebe um sinal de referência reutilizado no relatório descritivo.",
          ],
          bullets: [
            "Diagramas de blocos, fluxogramas e figuras de referência",
            "Sinais de referência coerentes entre figuras e texto",
            "Breve descrição dos desenhos gerada com o pedido",
            "Figuras exportadas com o pedido em DOCX",
            "Baixe as figuras em PNG, JPG ou SVG",
          ],
        },
        {
          heading: "Por que a coerência importa",
          paragraphs: [
            "Uma figura deve sustentar a divulgação, não introduzir matéria sem explicação. Nomes que não coincidem, sinais que aparecem em uma figura mas não no texto ou vistas que contradizem as reivindicações são causas frequentes de exigências e correções caras.",
          ],
        },
        {
          heading: "Os requisitos formais variam por escritório",
          paragraphs: [
            "Cada escritório define regras sobre qualidade de linha, margens, tamanho de folha, vistas e legendas. Nos Estados Unidos elas estão no 37 CFR 1.84, e os pedidos internacionais seguem a Regra 11 do PCT. Revise as figuras geradas conforme os requisitos do escritório de destino antes do depósito, ou envie-as para revisão profissional.",
          ],
        },
      ],
      faqs: [
        { q: "A IPnite gera desenhos prontos para depósito?", a: "A IPnite gera figuras e sinais de referência alinhados ao seu pedido. Confira-os com os requisitos formais do escritório de destino antes do depósito." },
        { q: "Os desenhos estão incluídos em todos os planos?", a: "Sim. Os desenhos assistidos por IA fazem parte dos planos Inventor, Startup e Institucional." },
      ],
      sources: [
        { label: "USPTO — 37 CFR 1.84, padrões para desenhos (MPEP 608.02)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" },
        { label: "OMPI — Regulamento do PCT, Regra 11", url: "https://www.wipo.int/pct/en/texts/rules/r11.html" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const portfolio: SeoPage = {
  id: "portfolio",
  kind: "product",
  related: ["ai-drafting", "prior-art", "universities", "startups", "journey-filed"],
  primaryAction: { name: "manage_patent_portfolio", event: "portfolio_management_clicked" },
  locales: routed("portfolio", {
    en: {
      title: "Patent Portfolio Management Software | IPnite",
      description: "Keep patent applications, documents, deadlines, and alerts in one workspace, connected to the drafts and prior art behind each invention.",
      h1: "Manage Your Patent Portfolio in One Place",
      eyebrow: "FROM DOCUMENTS TO PORTFOLIO VISIBILITY",
      lead: "IPnite keeps patent projects from turning into disconnected folders. Upload existing applications, extract their key information, and see what is active, what is pending, and what needs attention.",
      sections: [
        {
          heading: "One record for every invention",
          paragraphs: [
            "Each project keeps its disclosure, prior-art references, drafts, drawings, exports, and collaborators together. When a deadline approaches or a question comes up, the full context is one click away.",
          ],
          bullets: [
            "Upload existing applications and documents",
            "AI-assisted extraction of key patent data",
            "Filing management, calendar, and deadline alerts",
            "Archive projects without losing portfolio context",
            "Team management and permissions on Institutional",
          ],
        },
        {
          heading: "Useful for growing teams",
          paragraphs: [
            "Founders, law firms, universities, and research teams use a shared structure to understand what exists, what is active, and what requires a decision. Institutional plans add invention disclosure management and team permissions.",
          ],
        },
        {
          heading: "A workspace, not a docketing guarantee",
          paragraphs: [
            "IPnite helps you track dates and obligations, but official deadlines depend on the patent office. You remain responsible for confirming dates, status, and ownership records with official sources or a qualified professional.",
          ],
        },
      ],
      faqs: [
        { q: "What happens to archived projects?", a: "Archived projects do not count toward your active-project limit and are kept for three months. IPnite notifies the owner about 30, 7, and 1 day before permanent deletion." },
        { q: "Can I export my portfolio?", a: "Every plan exports applications as DOCX. Startup and Institutional also export full projects as JSON and ZIP." },
      ],
      cta: "Organize your patent portfolio",
      ctaBody: "Bring applications, documents, alerts, and drafting work into one workspace. Start with a free 7-day trial.",
    },
    es: {
      title: "Software de gestión de portafolio de patentes | IPnite",
      description: "Reúne solicitudes, documentos, plazos y alertas en un solo espacio, conectados con los borradores y antecedentes de cada invención.",
      h1: "Gestiona tu portafolio de patentes en un solo lugar",
      eyebrow: "DE LOS DOCUMENTOS A LA VISIBILIDAD",
      lead: "IPnite evita que tus proyectos de patente terminen en carpetas desconectadas. Carga solicitudes existentes, extrae su información clave y ve qué está activo, qué está pendiente y qué requiere atención.",
      sections: [
        {
          heading: "Un expediente por invención",
          paragraphs: [
            "Cada proyecto guarda juntos la divulgación, los antecedentes, los borradores, los dibujos, las exportaciones y los colaboradores. Cuando se acerca un plazo o surge una duda, todo el contexto está a un clic.",
          ],
          bullets: [
            "Carga de solicitudes y documentos existentes",
            "Extracción de datos clave con asistencia de IA",
            "Gestión de presentaciones, calendario y alertas de plazos",
            "Archivo de proyectos sin perder el contexto del portafolio",
            "Gestión de equipos y permisos en el plan Institucional",
          ],
        },
        {
          heading: "Útil para equipos en crecimiento",
          paragraphs: [
            "Fundadores, despachos, universidades y equipos de investigación usan una estructura compartida para saber qué existe, qué está activo y qué necesita una decisión. El plan Institucional agrega gestión de divulgaciones de invención y permisos de equipo.",
          ],
        },
        {
          heading: "Un espacio de trabajo, no una garantía de plazos",
          paragraphs: [
            "IPnite te ayuda a dar seguimiento a fechas y obligaciones, pero los plazos oficiales dependen de cada oficina. Tú eres responsable de confirmar fechas, estados y titularidad con las fuentes oficiales o con un profesional.",
          ],
        },
      ],
      faqs: [
        { q: "¿Qué pasa con los proyectos archivados?", a: "No cuentan para tu límite de proyectos activos y se conservan durante tres meses. IPnite avisa al titular aproximadamente 30, 7 y 1 día antes de eliminarlos definitivamente." },
        { q: "¿Puedo exportar mi portafolio?", a: "Todos los planes exportan las solicitudes en DOCX. Startup e Institucional también exportan proyectos completos en JSON y ZIP." },
      ],
      cta: "Organiza tu portafolio de patentes",
      ctaBody: "Reúne solicitudes, documentos, alertas y redacción en un solo espacio. Empieza con la prueba gratis de 7 días.",
    },
    pt: {
      title: "Software de gestão de portfólio de patentes | IPnite",
      description: "Reúna pedidos, documentos, prazos e alertas em um só espaço, conectados aos rascunhos e às anterioridades de cada invenção.",
      h1: "Gerencie seu portfólio de patentes em um só lugar",
      eyebrow: "DOS DOCUMENTOS À VISIBILIDADE",
      lead: "A IPnite evita que seus projetos de patente virem pastas desconectadas. Carregue pedidos existentes, extraia suas informações-chave e veja o que está ativo, pendente e o que exige atenção.",
      sections: [
        {
          heading: "Um registro por invenção",
          paragraphs: [
            "Cada projeto mantém juntos a divulgação, as anterioridades, os rascunhos, os desenhos, as exportações e os colaboradores. Quando um prazo se aproxima ou surge uma dúvida, todo o contexto está a um clique.",
          ],
          bullets: [
            "Carregamento de pedidos e documentos existentes",
            "Extração de dados-chave com assistência de IA",
            "Gestão de depósitos, calendário e alertas de prazos",
            "Arquivamento de projetos sem perder o contexto do portfólio",
            "Gestão de equipes e permissões no plano Institucional",
          ],
        },
        {
          heading: "Útil para equipes em crescimento",
          paragraphs: [
            "Fundadores, escritórios, universidades e equipes de pesquisa usam uma estrutura compartilhada para saber o que existe, o que está ativo e o que precisa de decisão. O plano Institucional adiciona gestão de divulgações de invenção e permissões de equipe.",
          ],
        },
        {
          heading: "Um espaço de trabalho, não uma garantia de prazos",
          paragraphs: [
            "A IPnite ajuda a acompanhar datas e obrigações, mas os prazos oficiais dependem de cada escritório. Você é responsável por confirmar datas, status e titularidade com as fontes oficiais ou com um profissional.",
          ],
        },
      ],
      faqs: [
        { q: "O que acontece com projetos arquivados?", a: "Não contam para o limite de projetos ativos e ficam guardados por três meses. A IPnite avisa o titular cerca de 30, 7 e 1 dia antes da exclusão definitiva." },
        { q: "Posso exportar meu portfólio?", a: "Todos os planos exportam os pedidos em DOCX. Startup e Institucional também exportam projetos completos em JSON e ZIP." },
      ],
      cta: "Organize seu portfólio de patentes",
      ctaBody: "Reúna pedidos, documentos, alertas e redação em um só espaço. Comece com o teste grátis de 7 dias.",
    },
  }),
};

const provisional: SeoPage = {
  id: "provisional",
  kind: "product",
  related: ["ai-drafting", "jurisdiction-us", "jurisdiction-mx", "prior-art"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("provisional", {
    en: {
      title: "Provisional Patent Application with AI | IPnite",
      description: "Prepare a detailed provisional patent application for the USPTO or, since 2026, Mexico's IMPI, with AI-assisted disclosure, drawings, and DOCX export.",
      h1: "Draft a Provisional Patent Application with AI",
      eyebrow: "UNITED STATES AND MEXICO",
      lead: "A provisional application secures an early filing date and gives you 12 months to file the complete application. It is only as strong as the disclosure inside it—IPnite helps you make that disclosure complete.",
      sections: [
        {
          heading: "Where provisional applications exist",
          paragraphs: [
            "The United States has offered provisional applications for decades. Mexico introduced them with the reform to its Federal Law for the Protection of Industrial Property, in force since April 6, 2026: a Mexican provisional is not published or examined, and the complete application must be filed within a non-extendable 12-month period. Argentina and Brazil do not have an equivalent filing.",
          ],
        },
        {
          heading: "What makes a provisional useful",
          paragraphs: [
            "A later application can only rely on the provisional's date for subject matter the provisional actually describes. A short or vague provisional may leave your final claims without support. That is why IPnite treats the provisional as a full technical disclosure, not a placeholder.",
          ],
          bullets: [
            "Describe the problem, solution, and every essential component",
            "Include alternatives, variants, and implementation examples",
            "Add figures wherever they clarify the invention",
            "Consider including claims to test how the invention will be protected",
            "Plan the complete or PCT application before the 12-month deadline",
          ],
        },
        {
          heading: "How IPnite prepares it",
          paragraphs: [
            "The Discovery Agent structures your disclosure and runs a prior-art search. The Drafter turns it into a detailed description with embodiments, optional claims, and reference drawings. You export a DOCX ready to review and file, and the same project becomes the base for the complete application.",
          ],
        },
      ],
      faqs: [
        { q: "Is a provisional application examined?", a: "No. In the United States and in Mexico provisional applications are not examined, and they never become patents on their own." },
        { q: "Can the 12-month deadline be extended?", a: "No. In both countries the complete application must be filed within 12 months. In the United States, missing it means the provisional expires and its filing date can no longer be claimed." },
        { q: "Can I claim a Mexican provisional as priority in another country?", a: "Seek professional advice for international strategy. Mexican law also provides that a provisional cannot itself claim priority from an earlier application." },
      ],
      sources: [
        { label: "USPTO — Provisional application for patent", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" },
        { label: "IMPI — Mexican Institute of Industrial Property", url: "https://www.gob.mx/impi" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Solicitud provisional de patente con IA | IPnite",
      description: "Prepara una solicitud provisional detallada para la USPTO o, desde 2026, para el IMPI de México, con divulgación asistida por IA y exportación en DOCX.",
      h1: "Redacta una solicitud provisional de patente con IA",
      eyebrow: "ESTADOS UNIDOS Y MÉXICO",
      lead: "Una solicitud provisional asegura una fecha de presentación temprana y te da 12 meses para presentar la solicitud completa. Su valor depende de la divulgación que contiene, e IPnite te ayuda a que esa divulgación sea completa.",
      sections: [
        {
          heading: "Dónde existen las solicitudes provisionales",
          paragraphs: [
            "Estados Unidos ofrece solicitudes provisionales desde hace décadas. México las incorporó con la reforma a la Ley Federal de Protección a la Propiedad Industrial, vigente desde el 6 de abril de 2026: la provisional mexicana no se publica ni se examina, y la solicitud completa debe presentarse en un plazo improrrogable de 12 meses. Argentina y Brasil no tienen una figura equivalente.",
          ],
        },
        {
          heading: "Qué hace útil a una provisional",
          paragraphs: [
            "La solicitud posterior solo puede apoyarse en la fecha de la provisional para lo que la provisional realmente describe. Una provisional breve o vaga puede dejar sin respaldo tus reivindicaciones finales. Por eso IPnite trata la provisional como una divulgación técnica completa, no como un trámite.",
          ],
          bullets: [
            "Describe el problema, la solución y cada componente esencial",
            "Incluye alternativas, variantes y ejemplos de implementación",
            "Agrega figuras donde aclaren la invención",
            "Considera incluir reivindicaciones para probar cómo se protegerá",
            "Planea la solicitud completa o PCT antes del plazo de 12 meses",
          ],
        },
        {
          heading: "Cómo la prepara IPnite",
          paragraphs: [
            "El Agente de descubrimiento estructura tu divulgación y hace una búsqueda de antecedentes. El Redactor la convierte en una descripción detallada con modalidades, reivindicaciones opcionales y dibujos de referencia. Exportas un DOCX listo para revisar y presentar, y el mismo proyecto sirve de base para la solicitud completa.",
          ],
        },
      ],
      faqs: [
        { q: "¿La solicitud provisional se examina?", a: "No. En Estados Unidos y en México las provisionales no se examinan y nunca se convierten por sí solas en patente." },
        { q: "¿Se puede ampliar el plazo de 12 meses?", a: "No. En ambos países la solicitud completa debe presentarse dentro de los 12 meses. En Estados Unidos, si no lo haces, la provisional vence y ya no puedes reclamar su fecha." },
        { q: "¿La provisional mexicana puede reclamar prioridad?", a: "La ley mexicana establece que una solicitud provisional no puede reclamar la prioridad de una solicitud anterior. Para una estrategia internacional, consulta a un profesional." },
      ],
      sources: [
        { label: "USPTO — Solicitud provisional de patente (en inglés)", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" },
        { label: "IMPI — Instituto Mexicano de la Propiedad Industrial", url: "https://www.gob.mx/impi" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Pedido provisório de patente com IA | IPnite",
      description: "Prepare um pedido provisório detalhado para o USPTO ou, desde 2026, para o IMPI do México, com divulgação assistida por IA, desenhos e exportação em DOCX.",
      h1: "Redija um pedido provisório de patente com IA",
      eyebrow: "ESTADOS UNIDOS E MÉXICO",
      lead: "Um pedido provisório garante uma data de depósito antecipada e dá 12 meses para depositar o pedido completo. Seu valor depende da divulgação que ele contém, e a IPnite ajuda a deixá-la completa.",
      sections: [
        {
          heading: "Onde existem pedidos provisórios",
          paragraphs: [
            "Os Estados Unidos oferecem pedidos provisórios há décadas. O México os criou com a reforma da Lei Federal de Proteção à Propriedade Industrial, em vigor desde 6 de abril de 2026: o provisório mexicano não é publicado nem examinado, e o pedido completo deve ser depositado em um prazo improrrogável de 12 meses. O Brasil e a Argentina não têm figura equivalente.",
          ],
        },
        {
          heading: "O que torna um provisório útil",
          paragraphs: [
            "O pedido posterior só pode se apoiar na data do provisório para aquilo que o provisório realmente descreve. Um provisório curto ou vago pode deixar suas reivindicações finais sem suporte. Por isso a IPnite trata o provisório como uma divulgação técnica completa, não como formalidade.",
          ],
          bullets: [
            "Descreva o problema, a solução e cada componente essencial",
            "Inclua alternativas, variantes e exemplos de implementação",
            "Adicione figuras onde elas esclarecerem a invenção",
            "Considere incluir reivindicações para testar a proteção",
            "Planeje o pedido completo ou PCT antes do prazo de 12 meses",
          ],
        },
        {
          heading: "Como a IPnite o prepara",
          paragraphs: [
            "O Agente de descoberta estrutura sua divulgação e faz uma busca de anterioridade. The Drafter a transforma em um relatório detalhado com concretizações, reivindicações opcionais e desenhos de referência. Você exporta um DOCX pronto para revisar e depositar, e o mesmo projeto vira a base do pedido completo.",
          ],
        },
      ],
      faqs: [
        { q: "O pedido provisório é examinado?", a: "Não. Nos Estados Unidos e no México os provisórios não são examinados e nunca se tornam patente sozinhos." },
        { q: "O prazo de 12 meses pode ser prorrogado?", a: "Não. Nos dois países o pedido completo deve ser depositado em até 12 meses. Nos Estados Unidos, se o prazo passar, o provisório expira e sua data não pode mais ser reivindicada." },
        { q: "O Brasil tem pedido provisório?", a: "Não. No Brasil, a data de depósito vem do próprio pedido de patente depositado no INPI." },
      ],
      sources: [
        { label: "USPTO — Pedido provisório de patente (em inglês)", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" },
        { label: "IMPI — Instituto Mexicano da Propriedade Industrial (em espanhol)", url: "https://www.gob.mx/impi" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const search: SeoPage = {
  id: "search",
  kind: "product",
  related: ["prior-art", "ai-drafting", "portfolio", "learn"],
  primaryAction: { name: "search_prior_art", event: "prior_art_search_clicked" },
  locales: routed("search", {
    en: {
      title: "AI Patent Search | IPnite",
      description: "Explore patent documents by concept, review families and key passages, and save useful references to the project where you draft.",
      h1: "Search Patents with AI",
      eyebrow: "BROADER PATENT DISCOVERY",
      lead: "Patent search is broad discovery across technologies, applicants, and inventors. Prior-art search is narrower: it tests one invention against potentially relevant disclosures. IPnite supports both in the same workspace.",
      sections: [
        {
          heading: "When you need a broad patent search",
          paragraphs: [
            "Use a broad search to understand a technology field before you invest in development, to see who is patenting in your space, or to find licensing and collaboration opportunities. The goal is a map of the landscape, not a verdict on one invention.",
          ],
          bullets: [
            "Explore documents by concept, not only by keyword",
            "Review families, bibliographic data, and relevant passages",
            "Save useful references with the related project",
            "Switch to a prior-art search when you evaluate a specific invention",
          ],
        },
        {
          heading: "From discovery to action",
          paragraphs: [
            "Documents you save stay attached to the project. When a promising idea appears, the same references inform the prior-art search, the drafting of claims, and the strategy you discuss with your team.",
          ],
        },
        {
          heading: "Searches inform decisions; they do not replace them",
          paragraphs: [
            "Search results help you decide what to explore. Conclusions about patentability, validity, or freedom to operate require careful reading of the documents and, when stakes are high, a professional opinion.",
          ],
        },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Buscador de patentes con IA | IPnite",
      description: "Explora documentos de patente por concepto, revisa familias y pasajes clave, y guarda las referencias útiles en el proyecto donde redactas.",
      h1: "Busca patentes con IA",
      eyebrow: "DESCUBRIMIENTO AMPLIO DE PATENTES",
      lead: "La búsqueda de patentes es un descubrimiento amplio de tecnologías, solicitantes e inventores. La búsqueda de antecedentes es más acotada: compara una invención concreta con las divulgaciones relevantes. IPnite hace ambas en el mismo espacio.",
      sections: [
        {
          heading: "Cuándo necesitas una búsqueda amplia",
          paragraphs: [
            "Usa una búsqueda amplia para entender un campo tecnológico antes de invertir en desarrollo, ver quién está patentando en tu sector o encontrar oportunidades de licencia y colaboración. El objetivo es un mapa del panorama, no un veredicto sobre una invención.",
          ],
          bullets: [
            "Explora documentos por concepto y no solo por palabras",
            "Revisa familias, datos bibliográficos y pasajes relevantes",
            "Guarda referencias útiles en el proyecto relacionado",
            "Pasa a la búsqueda de antecedentes cuando evalúes una invención concreta",
          ],
        },
        {
          heading: "Del descubrimiento a la acción",
          paragraphs: [
            "Los documentos que guardas quedan unidos al proyecto. Cuando aparece una idea prometedora, esas mismas referencias alimentan la búsqueda de antecedentes, la redacción de reivindicaciones y la estrategia que defines con tu equipo.",
          ],
        },
        {
          heading: "La búsqueda informa decisiones, no las reemplaza",
          paragraphs: [
            "Los resultados te ayudan a decidir qué explorar. Las conclusiones sobre patentabilidad, validez o libertad de operación requieren leer con cuidado los documentos y, cuando hay mucho en juego, una opinión profesional.",
          ],
        },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Busca de patentes com IA | IPnite",
      description: "Explore documentos de patente por conceito, revise famílias e trechos-chave e salve as referências úteis no projeto em que você redige.",
      h1: "Busque patentes com IA",
      eyebrow: "DESCOBERTA AMPLA DE PATENTES",
      lead: "A busca de patentes é uma descoberta ampla de tecnologias, depositantes e inventores. A busca de anterioridade é mais específica: compara uma invenção concreta com divulgações relevantes. A IPnite faz as duas no mesmo espaço.",
      sections: [
        {
          heading: "Quando você precisa de uma busca ampla",
          paragraphs: [
            "Use uma busca ampla para entender um campo tecnológico antes de investir em desenvolvimento, ver quem está patenteando no seu setor ou encontrar oportunidades de licenciamento e colaboração. O objetivo é um mapa do cenário, não um veredito sobre uma invenção.",
          ],
          bullets: [
            "Explore documentos por conceito, não só por palavras",
            "Revise famílias, dados bibliográficos e trechos relevantes",
            "Salve referências úteis no projeto relacionado",
            "Passe para a busca de anterioridade ao avaliar uma invenção concreta",
          ],
        },
        {
          heading: "Da descoberta à ação",
          paragraphs: [
            "Os documentos salvos ficam ligados ao projeto. Quando surge uma ideia promissora, essas mesmas referências alimentam a busca de anterioridade, a redação das reivindicações e a estratégia definida com sua equipe.",
          ],
        },
        {
          heading: "A busca informa decisões, não as substitui",
          paragraphs: [
            "Os resultados ajudam a decidir o que explorar. Conclusões sobre patenteabilidade, validade ou liberdade de operação exigem leitura cuidadosa dos documentos e, quando há muito em jogo, um parecer profissional.",
          ],
        },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const googleSources = {
  en: [
    { label: "Google Cloud — Vertex AI and zero data retention", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/vertex-ai-zero-data-retention" },
    { label: "Google Cloud — Abuse monitoring for generative AI", url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/abuse-monitoring" },
    { label: "Google Cloud Platform Terms of Service", url: "https://cloud.google.com/terms" },
  ],
};

const security: SeoPage = {
  id: "security",
  kind: "trust",
  related: ["ai-drafting", "prior-art", "portfolio", "attorneys", "journey-idea"],
  primaryAction: { name: "try_ipnite" },
  locales: routed("security", {
    en: {
      title: "Security and Data Privacy for AI Patent Drafting | IPnite",
      description: "IPnite never uses your invention data to train AI models or for any other purpose. Learn how Google Cloud Vertex AI processes it and what Google documents.",
      h1: "Your Invention Stays Yours",
      eyebrow: "SECURITY AND PRIVACY",
      lead: "IPnite does not use your inventions, prompts, documents, or drafts to train AI models or for any purpose other than providing the service to you. Your drafts belong to you.",
      sections: [
        {
          heading: "What IPnite does—and never does—with your data",
          paragraphs: [
            "Your content is used only to run the workflows you request: searching, drafting, generating drawings, checking quality, and exporting. IPnite does not train models on it, sell it, share it for advertising, or analyze it for any other purpose.",
          ],
          bullets: [
            "No model training on your content, ever",
            "Everything generated from your information belongs to you",
            "Encryption in transit (TLS) and at rest for invention materials",
            "Access limited to the systems needed to deliver the service",
            "Website analytics only with your consent and without project content",
          ],
        },
        {
          heading: "How the AI runs: Google Cloud Vertex AI",
          paragraphs: [
            "IPnite processes AI requests through the enterprise Vertex AI API in IPnite's own Google Cloud environment—not through a consumer chatbot account. Google Cloud's terms state that Google does not use customer data to train or fine-tune its AI models without the customer's prior permission or instruction. IPnite has not given that permission.",
          ],
        },
        {
          heading: "What Google documents about temporary retention",
          paragraphs: [
            "Google's documentation explains that some generative AI features can keep data temporarily—for example, caching inputs for up to 24 hours to reduce latency, or logging prompts for abuse monitoring under certain account types. These operational copies are not used for training. The links below point to Google's current documentation.",
          ],
        },
        {
          heading: "The data IPnite collects",
          paragraphs: [
            "To run your account IPnite keeps account details (name and email), billing records handled by payment processors such as Stripe and, depending on the country, local providers like Mercado Pago or Pix, and aggregate demographic information such as country and professional profile. The Privacy Policy lists retention periods and your rights.",
          ],
        },
      ],
      faqs: [
        { q: "Does IPnite train AI on my invention?", a: "No. IPnite never uses your inventions, prompts, documents, or drafts to train AI models or for any purpose other than providing the service." },
        { q: "Does Google train on my data through Vertex AI?", a: "Google Cloud's terms state that customer data is not used to train or fine-tune Google's models without the customer's permission or instruction. IPnite has not granted that permission." },
        { q: "Who owns what IPnite generates?", a: "You do. You can edit, file, license, or share your drafts however you choose." },
      ],
      sources: [...googleSources.en, { label: "IPnite Privacy Policy", url: "https://www.ipnite.com/privacy/" }],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Seguridad y privacidad en patentes con IA | IPnite",
      description: "IPnite nunca usa los datos de tu invención para entrenar modelos de IA ni para otro fin. Conoce cómo los procesa Vertex AI de Google Cloud.",
      h1: "Tu invención sigue siendo tuya",
      eyebrow: "SEGURIDAD Y PRIVACIDAD",
      lead: "IPnite no usa tus invenciones, instrucciones, documentos ni borradores para entrenar modelos de IA ni para ningún otro fin que prestarte el servicio. Tus borradores te pertenecen.",
      sections: [
        {
          heading: "Qué hace IPnite con tus datos, y qué nunca hace",
          paragraphs: [
            "Tu contenido se usa solo para ejecutar los flujos que pides: buscar, redactar, generar dibujos, revisar la calidad y exportar. IPnite no entrena modelos con él, no lo vende, no lo comparte con fines publicitarios ni lo analiza para ningún otro propósito.",
          ],
          bullets: [
            "Nunca entrenamos modelos con tu contenido",
            "Todo lo generado con tu información te pertenece",
            "Cifrado en tránsito (TLS) y en reposo para los materiales de invención",
            "Acceso limitado a los sistemas necesarios para prestar el servicio",
            "Analítica del sitio solo con tu consentimiento y sin contenido de proyectos",
          ],
        },
        {
          heading: "Cómo funciona la IA: Vertex AI de Google Cloud",
          paragraphs: [
            "IPnite procesa las solicitudes de IA mediante la API empresarial de Vertex AI en su propio entorno de Google Cloud, no mediante una cuenta de chatbot para consumidores. Los términos de Google Cloud establecen que Google no usa los datos del cliente para entrenar ni ajustar sus modelos sin permiso o instrucción previa del cliente. IPnite no ha dado ese permiso.",
          ],
        },
        {
          heading: "Qué documenta Google sobre la retención temporal",
          paragraphs: [
            "La documentación de Google explica que algunas funciones de IA generativa pueden conservar datos de forma temporal; por ejemplo, un caché de hasta 24 horas para reducir la latencia o registros para monitorear abusos en ciertos tipos de cuenta. Esas copias operativas no se usan para entrenar modelos. Los enlaces de abajo llevan a la documentación vigente de Google.",
          ],
        },
        {
          heading: "Los datos que recopila IPnite",
          paragraphs: [
            "Para operar tu cuenta, IPnite conserva tus datos de cuenta (nombre y correo), los registros de facturación que gestionan procesadores de pago como Stripe y, según el país, proveedores locales como Mercado Pago o Pix, e información demográfica agregada, como país y perfil profesional. La Política de Privacidad detalla los plazos de conservación y tus derechos.",
          ],
        },
      ],
      faqs: [
        { q: "¿IPnite entrena su IA con mi invención?", a: "No. IPnite nunca usa tus invenciones, instrucciones, documentos ni borradores para entrenar modelos de IA ni para ningún otro fin que prestarte el servicio." },
        { q: "¿Google entrena con mis datos a través de Vertex AI?", a: "Los términos de Google Cloud establecen que los datos del cliente no se usan para entrenar ni ajustar los modelos de Google sin permiso o instrucción del cliente. IPnite no ha dado ese permiso." },
        { q: "¿De quién es lo que genera IPnite?", a: "Tuyo. Puedes editar, presentar, licenciar o compartir tus borradores como decidas." },
      ],
      sources: [
        { label: "Google Cloud — Vertex AI y retención cero de datos (en inglés)", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/vertex-ai-zero-data-retention" },
        { label: "Google Cloud — Monitoreo de abusos en IA generativa (en inglés)", url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/abuse-monitoring" },
        { label: "Condiciones del Servicio de Google Cloud Platform", url: "https://cloud.google.com/terms" },
        { label: "Política de Privacidad de IPnite", url: "https://www.ipnite.com/es/privacy/" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Segurança e privacidade na redação de patentes com IA | IPnite",
      description: "A IPnite nunca usa os dados da sua invenção para treinar modelos de IA nem para outro fim. Saiba como o Vertex AI do Google Cloud os processa.",
      h1: "Sua invenção continua sendo sua",
      eyebrow: "SEGURANÇA E PRIVACIDADE",
      lead: "A IPnite não usa suas invenções, instruções, documentos ou rascunhos para treinar modelos de IA nem para nenhum outro fim além de prestar o serviço. Seus rascunhos pertencem a você.",
      sections: [
        {
          heading: "O que a IPnite faz com seus dados, e o que nunca faz",
          paragraphs: [
            "Seu conteúdo é usado apenas para executar os fluxos que você solicita: buscar, redigir, gerar desenhos, revisar a qualidade e exportar. A IPnite não treina modelos com ele, não o vende, não o compartilha para publicidade nem o analisa para outro propósito.",
          ],
          bullets: [
            "Nunca treinamos modelos com seu conteúdo",
            "Tudo o que é gerado com suas informações pertence a você",
            "Criptografia em trânsito (TLS) e em repouso para materiais de invenção",
            "Acesso limitado aos sistemas necessários para prestar o serviço",
            "Analytics do site só com seu consentimento e sem conteúdo de projetos",
          ],
        },
        {
          heading: "Como a IA funciona: Vertex AI do Google Cloud",
          paragraphs: [
            "A IPnite processa as solicitações de IA pela API empresarial do Vertex AI em seu próprio ambiente do Google Cloud, não por uma conta de chatbot de consumo. Os termos do Google Cloud estabelecem que o Google não usa dados do cliente para treinar ou ajustar seus modelos sem permissão ou instrução prévia do cliente. A IPnite não deu essa permissão.",
          ],
        },
        {
          heading: "O que o Google documenta sobre retenção temporária",
          paragraphs: [
            "A documentação do Google explica que alguns recursos de IA generativa podem manter dados temporariamente; por exemplo, um cache de até 24 horas para reduzir a latência ou registros para monitorar abusos em certos tipos de conta. Essas cópias operacionais não são usadas para treinar modelos. Os links abaixo levam à documentação atual do Google.",
          ],
        },
        {
          heading: "Os dados que a IPnite coleta",
          paragraphs: [
            "Para operar sua conta, a IPnite mantém seus dados de conta (nome e e-mail), os registros de cobrança gerenciados por processadores de pagamento como Stripe e, conforme o país, provedores locais como Mercado Pago ou Pix, e informações demográficas agregadas, como país e perfil profissional. A Política de Privacidade detalha os prazos de retenção e seus direitos.",
          ],
        },
      ],
      faqs: [
        { q: "A IPnite treina sua IA com minha invenção?", a: "Não. A IPnite nunca usa suas invenções, instruções, documentos ou rascunhos para treinar modelos de IA nem para nenhum outro fim além de prestar o serviço." },
        { q: "O Google treina com meus dados pelo Vertex AI?", a: "Os termos do Google Cloud estabelecem que os dados do cliente não são usados para treinar ou ajustar os modelos do Google sem permissão ou instrução do cliente. A IPnite não deu essa permissão." },
        { q: "De quem é o que a IPnite gera?", a: "Seu. Você pode editar, depositar, licenciar ou compartilhar seus rascunhos como quiser." },
      ],
      sources: [
        { label: "Google Cloud — Vertex AI e retenção zero de dados (em inglês)", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/vertex-ai-zero-data-retention" },
        { label: "Google Cloud — Monitoramento de abusos em IA generativa (em inglês)", url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/abuse-monitoring" },
        { label: "Termos de Serviço do Google Cloud Platform", url: "https://cloud.google.com/terms" },
        { label: "Política de Privacidade da IPnite", url: "https://www.ipnite.com/pt-br/privacy/" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

export const productPages: SeoPage[] = [drafting, ...drafterStepPages, priorArt, drawings, portfolio, provisional, search, security];
