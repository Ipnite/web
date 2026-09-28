import type { SeoPage } from "./types";
import { commonCta } from "./types";
import { routed } from "./helpers";

// Product pages for the steps of the Drafter workflow shown on the home page ("How the Drafter works").

const disclosure: SeoPage = {
  id: "invention-disclosure",
  kind: "product",
  related: ["ai-drafting", "prior-art", "patent-specification", "security", "journey-idea"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("invention-disclosure", {
    en: {
      title: "Invention Disclosure with AI: Describe Your Invention | IPnite",
      description: "Describe your invention step by step: problem, solution, components, and variants. IPnite turns your disclosure into the base of your patent application.",
      h1: "Describe your invention with a guided disclosure",
      eyebrow: "STEP 1 OF THE DRAFTER",
      lead: "A patent application is only as strong as the information behind it. IPnite guides you through a structured invention disclosure, so the claims, description, and drawings start from complete and consistent facts.",
      sections: [
        {
          heading: "What the disclosure captures",
          paragraphs: [
            "The disclosure asks for the same information a patent professional would request in a first meeting: what the invention is, which problem it solves, what is missing in current solutions, and how your solution works in detail.",
          ],
          bullets: [
            "Invention title and technical field",
            "Problem statement and technical gap",
            "Detailed proposed solution",
            "Key components and how they interact",
            "Alternatives, variants, and advantages",
          ],
        },
        {
          heading: "From disclosure to claims",
          paragraphs: [
            "The Discovery Agent structures what you wrote and uses it to run a prior-art search in the same project. With those references in view, IPnite drafts independent claims. You choose the strongest one, and it becomes the base for the dependent claims and the complete draft.",
          ],
        },
        {
          heading: "Tips for a stronger disclosure",
          paragraphs: [
            "Explain how the invention works, not only what it achieves. Include every variant you can think of: materials, ranges, and alternative configurations. As a general rule, subject matter that is not disclosed when you file cannot be added later.",
            "Keep the invention confidential until you file. Publishing, presenting, or selling it first can affect its novelty, and grace periods differ from office to office.",
          ],
        },
      ],
      faqs: [
        { q: "Do I need a patent attorney to write the disclosure?", a: "No. You describe the invention in your own words and IPnite structures it. You can involve a professional at any point for strategy or final review." },
        { q: "Is my disclosure used to train AI models?", a: "No. IPnite never uses your inventions, documents, or outputs to train AI models or for any purpose other than providing the service." },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Divulgación de la invención con IA: descríbela | IPnite",
      description: "Describe tu invención paso a paso: problema, solución, componentes y variantes. IPnite convierte tu divulgación en la base de tu solicitud de patente.",
      h1: "Describe tu invención con una divulgación guiada",
      eyebrow: "PASO 1 DEL REDACTOR",
      lead: "Una solicitud de patente es tan sólida como la información que la respalda. IPnite te guía en una divulgación estructurada de tu invención, para que las reivindicaciones, la descripción y los dibujos partan de datos completos y coherentes.",
      sections: [
        {
          heading: "Qué recoge la divulgación",
          paragraphs: [
            "La divulgación pide la misma información que un profesional de patentes solicitaría en una primera reunión: qué es la invención, qué problema resuelve, qué les falta a las soluciones actuales y cómo funciona tu solución en detalle.",
          ],
          bullets: [
            "Título de la invención y campo técnico",
            "Planteamiento del problema y brecha técnica",
            "Solución propuesta en detalle",
            "Componentes clave y cómo interactúan",
            "Alternativas, variantes y ventajas",
          ],
        },
        {
          heading: "De la divulgación a las reivindicaciones",
          paragraphs: [
            "El Agente de descubrimiento estructura lo que escribiste y lo usa para hacer una búsqueda de antecedentes en el mismo proyecto. Con esas referencias a la vista, IPnite redacta reivindicaciones independientes. Tú eliges la más sólida y esa se convierte en la base de las reivindicaciones dependientes y del borrador completo.",
          ],
        },
        {
          heading: "Consejos para una mejor divulgación",
          paragraphs: [
            "Explica cómo funciona la invención, no solo lo que logra. Incluye todas las variantes que se te ocurran: materiales, rangos y configuraciones alternativas. Como regla general, lo que no divulgas al presentar la solicitud no se puede agregar después.",
            "Mantén la invención en confidencialidad hasta presentar la solicitud. Publicarla, exponerla o venderla antes puede afectar su novedad, y los periodos de gracia cambian según la oficina.",
          ],
        },
      ],
      faqs: [
        { q: "¿Necesito un abogado de patentes para escribir la divulgación?", a: "No. Describes la invención con tus propias palabras e IPnite la estructura. Puedes involucrar a un profesional en cualquier momento para la estrategia o la revisión final." },
        { q: "¿Mi divulgación se usa para entrenar modelos de IA?", a: "No. IPnite nunca usa tus invenciones, documentos ni resultados para entrenar modelos de IA ni para ningún fin distinto de prestar el servicio." },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Divulgação da invenção com IA: descreva-a | IPnite",
      description: "Descreva sua invenção passo a passo: problema, solução, componentes e variantes. A IPnite transforma sua divulgação na base do seu pedido de patente.",
      h1: "Descreva sua invenção com uma divulgação guiada",
      eyebrow: "ETAPA 1 DA REDAÇÃO",
      lead: "Um pedido de patente é tão sólido quanto as informações que o sustentam. A IPnite guia você em uma divulgação estruturada da invenção, para que reivindicações, relatório descritivo e desenhos partam de dados completos e coerentes.",
      sections: [
        {
          heading: "O que a divulgação registra",
          paragraphs: [
            "A divulgação pede as mesmas informações que um profissional de patentes solicitaria em uma primeira reunião: o que é a invenção, qual problema ela resolve, o que falta nas soluções atuais e como sua solução funciona em detalhe.",
          ],
          bullets: [
            "Título da invenção e campo técnico",
            "Definição do problema e lacuna técnica",
            "Solução proposta em detalhe",
            "Componentes principais e como interagem",
            "Alternativas, variantes e vantagens",
          ],
        },
        {
          heading: "Da divulgação às reivindicações",
          paragraphs: [
            "O Agente de descoberta estrutura o que você escreveu e usa essas informações para fazer uma busca de anterioridade no mesmo projeto. Com essas referências à vista, a IPnite redige reivindicações independentes. Você escolhe a mais sólida, que se torna a base das reivindicações dependentes e da minuta completa.",
          ],
        },
        {
          heading: "Dicas para uma divulgação melhor",
          paragraphs: [
            "Explique como a invenção funciona, não apenas o que ela alcança. Inclua todas as variantes que imaginar: materiais, faixas e configurações alternativas. Como regra geral, o que não é divulgado no depósito não pode ser acrescentado depois.",
            "Mantenha a invenção em sigilo até o depósito. Publicá-la, apresentá-la ou vendê-la antes pode afetar sua novidade, e os períodos de graça variam de um escritório para outro.",
          ],
        },
      ],
      faqs: [
        { q: "Preciso de um advogado de patentes para escrever a divulgação?", a: "Não. Você descreve a invenção com suas próprias palavras e a IPnite a estrutura. Você pode envolver um profissional a qualquer momento para a estratégia ou a revisão final." },
        { q: "Minha divulgação é usada para treinar modelos de IA?", a: "Não. A IPnite nunca usa suas invenções, documentos ou resultados para treinar modelos de IA nem para nenhum fim além da prestação do serviço." },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const specification: SeoPage = {
  id: "patent-specification",
  kind: "product",
  related: ["ai-drafting", "invention-disclosure", "drawings", "patent-quality-review"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("patent-specification", {
    en: {
      title: "Patent Specification Drafting with AI | IPnite",
      description: "Draft the detailed description of your patent: background, summary, embodiments, and abstract, consistent with your claims and drawings.",
      h1: "Draft your patent specification with AI",
      eyebrow: "STEP 3 OF THE DRAFTER",
      lead: "The specification explains the invention so that a person skilled in the field can understand and carry it out, and it supports every claim. IPnite drafts it from your disclosure, in the same project as your claims and drawings.",
      sections: [
        {
          heading: "What IPnite drafts",
          paragraphs: [
            "The Drafter generates each part of the description from the information in your disclosure and the claims you selected, including embodiments and variants that give your claims room to move.",
          ],
          bullets: [
            "Technical field and background",
            "Summary of the invention",
            "Brief description of the drawings",
            "Detailed description with embodiments and variants",
            "Abstract",
          ],
        },
        {
          heading: "Why the description must support the claims",
          paragraphs: [
            "Patent laws require the description to disclose the invention clearly and completely enough to be carried out, and to support what is claimed. In the United States this requirement is in 35 U.S.C. 112(a); for international applications, PCT Rule 5 sets the content of the description. Features that are claimed but not described, or described only vaguely, are a frequent source of objections.",
          ],
        },
        {
          heading: "Consistent terminology and reference numerals",
          paragraphs: [
            "Because the description, claims, and drawings are generated in one project, each component keeps the same name and reference numeral across the whole application. You can edit any section before exporting the complete application.",
          ],
        },
      ],
      faqs: [
        { q: "Is the specification the same as the description?", a: "Yes. Offices use different names, such as specification, description, memoria descriptiva, or relatório descritivo, but it is the section that explains the invention in detail and supports the claims." },
        { q: "Can I edit the generated description?", a: "Yes. You review and edit every section before exporting. AI output can contain errors, so review it or have it reviewed by a professional before filing." },
      ],
      sources: [
        { label: "USPTO — MPEP 2161, written description and enablement (35 U.S.C. 112(a))", url: "https://www.uspto.gov/web/offices/pac/mpep/s2161.html" },
        { label: "WIPO — PCT Regulations, Rule 5 (the description)", url: "https://www.wipo.int/pct/en/texts/rules/r5.html" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Redacta la descripción de tu patente con IA | IPnite",
      description: "Redacta la descripción de tu patente: antecedentes, resumen, modalidades y resumen técnico, coherentes con tus reivindicaciones y tus dibujos.",
      h1: "Redacta la descripción de tu patente con IA",
      eyebrow: "PASO 3 DEL REDACTOR",
      lead: "La descripción explica la invención para que una persona experta en el campo la entienda y la pueda llevar a cabo, y respalda cada reivindicación. IPnite la redacta a partir de tu divulgación, en el mismo proyecto que tus reivindicaciones y dibujos.",
      sections: [
        {
          heading: "Qué redacta IPnite",
          paragraphs: [
            "El Redactor genera cada parte de la descripción con la información de tu divulgación y las reivindicaciones que elegiste, incluidas modalidades y variantes que dan margen a tus reivindicaciones.",
          ],
          bullets: [
            "Campo técnico y antecedentes",
            "Resumen de la invención",
            "Breve descripción de los dibujos",
            "Descripción detallada con modalidades y variantes",
            "Resumen técnico",
          ],
        },
        {
          heading: "Por qué la descripción debe respaldar las reivindicaciones",
          paragraphs: [
            "Las leyes de patentes exigen que la descripción divulgue la invención de forma clara y completa, para que pueda llevarse a cabo, y que respalde lo que se reivindica. En Estados Unidos este requisito está en 35 U.S.C. 112(a); en las solicitudes internacionales, la Regla 5 del PCT define el contenido de la descripción. Las características que se reivindican pero no se describen, o se describen de forma vaga, son una causa frecuente de requerimientos.",
          ],
        },
        {
          heading: "Terminología y números de referencia coherentes",
          paragraphs: [
            "Como la descripción, las reivindicaciones y los dibujos se generan en un mismo proyecto, cada componente conserva el mismo nombre y número de referencia en toda la solicitud. Puedes editar cualquier sección antes de exportar la solicitud completa.",
          ],
        },
      ],
      faqs: [
        { q: "¿La descripción es lo mismo que la memoria descriptiva?", a: "Sí. Cada oficina usa un nombre distinto, como descripción o memoria descriptiva, pero se trata de la sección que explica la invención en detalle y respalda las reivindicaciones." },
        { q: "¿Puedo editar la descripción generada?", a: "Sí. Revisas y editas cada sección antes de exportar. Los resultados de la IA pueden contener errores, así que revísalos o envíalos a revisión profesional antes de presentar." },
      ],
      sources: [
        { label: "USPTO — MPEP 2161, descripción escrita y habilitación (35 U.S.C. 112(a))", url: "https://www.uspto.gov/web/offices/pac/mpep/s2161.html" },
        { label: "OMPI — Reglamento del PCT, Regla 5 (la descripción)", url: "https://www.wipo.int/pct/en/texts/rules/r5.html" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Redija o relatório descritivo da patente com IA | IPnite",
      description: "Redija o relatório descritivo da sua patente: estado da técnica, sumário, concretizações e resumo, coerentes com suas reivindicações e desenhos.",
      h1: "Redija o relatório descritivo da sua patente com IA",
      eyebrow: "ETAPA 3 DA REDAÇÃO",
      lead: "O relatório descritivo explica a invenção para que um técnico no assunto a entenda e a reproduza, e fundamenta cada reivindicação. A IPnite o redige a partir da sua divulgação, no mesmo projeto das suas reivindicações e desenhos.",
      sections: [
        {
          heading: "O que a IPnite redige",
          paragraphs: [
            "A IPnite gera cada parte do relatório com as informações da sua divulgação e as reivindicações que você escolheu, incluindo concretizações e variantes que dão margem às suas reivindicações.",
          ],
          bullets: [
            "Campo técnico e estado da técnica",
            "Sumário da invenção",
            "Breve descrição dos desenhos",
            "Descrição detalhada com concretizações e variantes",
            "Resumo",
          ],
        },
        {
          heading: "Por que o relatório deve fundamentar as reivindicações",
          paragraphs: [
            "As leis de patentes exigem que o relatório descreva a invenção de forma clara e suficiente para que possa ser realizada, e que fundamente o que é reivindicado. Nos Estados Unidos esse requisito está no 35 U.S.C. 112(a); nos pedidos internacionais, a Regra 5 do PCT define o conteúdo da descrição. Características reivindicadas mas não descritas, ou descritas de forma vaga, são uma causa frequente de exigências.",
          ],
        },
        {
          heading: "Terminologia e sinais de referência coerentes",
          paragraphs: [
            "Como o relatório, as reivindicações e os desenhos são gerados no mesmo projeto, cada componente mantém o mesmo nome e sinal de referência em todo o pedido. Você pode editar qualquer seção antes de exportar o pedido completo.",
          ],
        },
      ],
      faqs: [
        { q: "O relatório descritivo é o mesmo que a descrição?", a: "Sim. Cada escritório usa um nome diferente, como relatório descritivo ou descrição, mas é a seção que explica a invenção em detalhe e fundamenta as reivindicações." },
        { q: "Posso editar o relatório gerado?", a: "Sim. Você revisa e edita cada seção antes de exportar. Os resultados da IA podem conter erros, então revise-os ou envie-os para revisão profissional antes do depósito." },
      ],
      sources: [
        { label: "USPTO — MPEP 2161, descrição escrita e suficiência (35 U.S.C. 112(a))", url: "https://www.uspto.gov/web/offices/pac/mpep/s2161.html" },
        { label: "OMPI — Regulamento do PCT, Regra 5 (a descrição)", url: "https://www.wipo.int/pct/en/texts/rules/r5.html" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const qualityReview: SeoPage = {
  id: "patent-quality-review",
  kind: "product",
  related: ["ai-drafting", "patent-specification", "drawings", "patent-export"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("patent-quality-review", {
    en: {
      title: "Patent Draft Quality Review with AI | IPnite",
      description: "Check your patent draft before filing: field-specific language, consistent terminology, reference numerals, structure, and formatting.",
      h1: "Review the quality of your patent draft",
      eyebrow: "STEP 5 OF THE DRAFTER",
      lead: "Before you export, IPnite's specialized and QA agents review the draft for field-specific language, consistency, and formatting, so you reach professional review or filing with fewer corrections.",
      sections: [
        {
          heading: "What the review looks at",
          paragraphs: [
            "The review reads the parts of the application against each other, the way an examiner does, and flags what does not match.",
          ],
          bullets: [
            "Technical language specific to your field",
            "Consistent terminology across claims, description, and drawings",
            "Reference numerals aligned between figures and text",
            "Section structure and formatting",
          ],
        },
        {
          heading: "Why consistency matters",
          paragraphs: [
            "Clear, consistent claims are a legal requirement. In the United States, 35 U.S.C. 112(b) requires claims to particularly point out and distinctly claim the invention. Inconsistent terms, numerals without an explanation, or sections out of order lead to office actions and costly amendments.",
          ],
        },
        {
          heading: "Automated review does not replace professional judgment",
          paragraphs: [
            "The QA agents catch inconsistencies and formatting issues; they do not decide your protection strategy or guarantee patentability. IPnite is software, not a law firm: review the final application yourself or have it reviewed by a qualified professional before filing.",
          ],
        },
      ],
      faqs: [
        { q: "Is the quality review included?", a: "Yes. It is part of every complete draft, whether you buy a single draft or produce it within your plan's limits." },
        { q: "Does the review check patentability?", a: "No. Patentability depends on the prior art and on each office. IPnite offers prior-art search and AI-assisted patentability analysis as separate steps." },
      ],
      sources: [
        { label: "USPTO — MPEP 2173, claims must particularly point out and distinctly claim the invention", url: "https://www.uspto.gov/web/offices/pac/mpep/s2173.html" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Revisión de calidad de borradores de patente | IPnite",
      description: "Revisa tu borrador de patente antes de presentarlo: lenguaje técnico del campo, terminología coherente, números de referencia, estructura y formato.",
      h1: "Revisa la calidad de tu borrador de patente",
      eyebrow: "PASO 5 DEL REDACTOR",
      lead: "Antes de exportar, los agentes especializados y de control de calidad de IPnite revisan el lenguaje técnico, la coherencia y el formato del borrador, para que llegues a la revisión profesional o a la presentación con menos correcciones.",
      sections: [
        {
          heading: "Qué revisa",
          paragraphs: [
            "La revisión contrasta las partes de la solicitud entre sí, como lo hace un examinador, y señala lo que no coincide.",
          ],
          bullets: [
            "Lenguaje técnico propio de tu campo",
            "Terminología coherente entre reivindicaciones, descripción y dibujos",
            "Números de referencia alineados entre figuras y texto",
            "Estructura de las secciones y formato",
          ],
        },
        {
          heading: "Por qué importa la coherencia",
          paragraphs: [
            "Que las reivindicaciones sean claras y coherentes es un requisito legal. En Estados Unidos, 35 U.S.C. 112(b) exige que las reivindicaciones señalen de forma particular y definan con claridad la invención. Los términos inconsistentes, los números sin explicación o las secciones desordenadas provocan requerimientos y modificaciones costosas.",
          ],
        },
        {
          heading: "La revisión automática no sustituye el criterio profesional",
          paragraphs: [
            "Los agentes de control de calidad detectan inconsistencias y problemas de formato; no definen tu estrategia de protección ni garantizan la patentabilidad. IPnite es software, no un despacho: revisa la solicitud final o envíala a revisión con un profesional calificado antes de presentarla.",
          ],
        },
      ],
      faqs: [
        { q: "¿La revisión de calidad está incluida?", a: "Sí. Forma parte de cada borrador completo, ya sea que compres un borrador individual o lo generes dentro de los límites de tu plan." },
        { q: "¿La revisión comprueba la patentabilidad?", a: "No. La patentabilidad depende de los antecedentes y de cada oficina. IPnite ofrece la búsqueda de antecedentes y el análisis de patentabilidad asistido por IA como pasos separados." },
      ],
      sources: [
        { label: "USPTO — MPEP 2173, claridad de las reivindicaciones (35 U.S.C. 112(b))", url: "https://www.uspto.gov/web/offices/pac/mpep/s2173.html" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Revisão de qualidade de minutas de patente | IPnite",
      description: "Revise sua minuta de patente antes do depósito: linguagem técnica do campo, terminologia coerente, sinais de referência, estrutura e formatação.",
      h1: "Revise a qualidade da sua minuta de patente",
      eyebrow: "ETAPA 5 DA REDAÇÃO",
      lead: "Antes de exportar, os agentes especializados e de controle de qualidade da IPnite revisam a linguagem técnica, a coerência e a formatação da minuta, para que você chegue à revisão profissional ou ao depósito com menos correções.",
      sections: [
        {
          heading: "O que é revisado",
          paragraphs: [
            "A revisão confronta as partes do pedido entre si, como faz um examinador, e aponta o que não coincide.",
          ],
          bullets: [
            "Linguagem técnica própria do seu campo",
            "Terminologia coerente entre reivindicações, relatório e desenhos",
            "Sinais de referência alinhados entre figuras e texto",
            "Estrutura das seções e formatação",
          ],
        },
        {
          heading: "Por que a coerência importa",
          paragraphs: [
            "Reivindicações claras e coerentes são um requisito legal. Nos Estados Unidos, o 35 U.S.C. 112(b) exige que as reivindicações apontem de forma particular e definam com clareza a invenção. Termos inconsistentes, sinais sem explicação ou seções fora de ordem geram exigências e emendas caras.",
          ],
        },
        {
          heading: "A revisão automática não substitui o julgamento profissional",
          paragraphs: [
            "Os agentes de controle de qualidade detectam inconsistências e problemas de formatação; não definem sua estratégia de proteção nem garantem a patenteabilidade. A IPnite é um software, não um escritório de advocacia: revise o pedido final ou envie-o para revisão por um profissional qualificado antes do depósito.",
          ],
        },
      ],
      faqs: [
        { q: "A revisão de qualidade está incluída?", a: "Sim. Ela faz parte de cada minuta completa, seja comprada individualmente ou gerada dentro dos limites do seu plano." },
        { q: "A revisão verifica a patenteabilidade?", a: "Não. A patenteabilidade depende do estado da técnica e de cada escritório. A IPnite oferece a busca de anterioridade e a análise de patenteabilidade assistida por IA como etapas separadas." },
      ],
      sources: [
        { label: "USPTO — MPEP 2173, clareza das reivindicações (35 U.S.C. 112(b))", url: "https://www.uspto.gov/web/offices/pac/mpep/s2173.html" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const exportPage: SeoPage = {
  id: "patent-export",
  kind: "product",
  related: ["ai-drafting", "patent-quality-review", "portfolio", "jurisdiction-pct"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("patent-export", {
    en: {
      title: "Export Your Patent Application as DOCX | IPnite",
      description: "Export your complete patent application as DOCX, with claims, description, abstract, and figures, ready for professional review or filing.",
      h1: "Export your patent application, ready to review and file",
      eyebrow: "STEP 6 OF THE DRAFTER",
      lead: "When the draft is ready, export the complete application as an editable DOCX document: claims, description, abstract, and figures together, ready to share with your attorney or to file.",
      sections: [
        {
          heading: "What you export",
          paragraphs: [
            "DOCX export is available for your purchased drafts. On the Startup and Institutional plans you can also export the whole project as JSON or ZIP.",
          ],
          bullets: [
            "Claims, description, and abstract in one DOCX file",
            "Figures exported with the application",
            "An editable document that belongs to you",
            "JSON and ZIP project export on Startup and Institutional",
          ],
        },
        {
          heading: "Why DOCX",
          paragraphs: [
            "DOCX is editable and widely accepted. The USPTO asks for the specification, claims, and abstract of utility applications filed electronically in DOCX, and charges a surcharge for other formats. Other offices, such as IMPI, INPI Argentina, and INPI Brazil, have their own electronic filing systems; check which format they accept before you file.",
          ],
        },
        {
          heading: "Filing stays in your hands",
          paragraphs: [
            "IPnite does not file applications automatically today: you file yourself or through a professional. Everything IPnite generates from your information belongs to you, and you can file, license, or share it without restriction.",
          ],
        },
      ],
      faqs: [
        { q: "Can I export during the free trial?", a: "No. The 7-day free trial lets you explore a Draft Preview; it does not include a final refined, exportable application." },
        { q: "Can I edit the file after exporting it?", a: "Yes. The DOCX file is fully editable in Word, Google Docs, or LibreOffice." },
      ],
      sources: [
        { label: "USPTO — DOCX for patent applications", url: "https://www.uspto.gov/patents/docx" },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Exporta tu solicitud de patente en DOCX | IPnite",
      description: "Exporta tu solicitud de patente completa en DOCX, con reivindicaciones, descripción, resumen y figuras, lista para revisión profesional o para presentar.",
      h1: "Exporta tu solicitud de patente, lista para revisar y presentar",
      eyebrow: "PASO 6 DEL REDACTOR",
      lead: "Cuando el borrador está listo, exportas la solicitud completa en un documento DOCX editable: reivindicaciones, descripción, resumen y figuras juntos, listos para compartir con tu abogado o para presentar.",
      sections: [
        {
          heading: "Qué exportas",
          paragraphs: [
            "La exportación en DOCX está disponible para los borradores que adquieres. En los planes Startup e Institucional también puedes exportar el proyecto completo en JSON o ZIP.",
          ],
          bullets: [
            "Reivindicaciones, descripción y resumen en un solo archivo DOCX",
            "Figuras exportadas junto con la solicitud",
            "Un documento editable que te pertenece",
            "Exportación del proyecto en JSON y ZIP en Startup e Institucional",
          ],
        },
        {
          heading: "Por qué DOCX",
          paragraphs: [
            "DOCX es un formato editable y ampliamente aceptado. El USPTO pide que la descripción, las reivindicaciones y el resumen de las solicitudes de patente de invención presentadas en línea estén en DOCX, y cobra un recargo por otros formatos. Otras oficinas, como el IMPI, el INPI de Argentina y el INPI de Brasil, tienen sus propios sistemas de presentación electrónica; verifica qué formato aceptan antes de presentar.",
          ],
        },
        {
          heading: "La presentación queda en tus manos",
          paragraphs: [
            "Hoy IPnite no presenta solicitudes automáticamente: las presentas tú o a través de un profesional. Todo lo que IPnite genera a partir de tu información te pertenece, y puedes presentarlo, licenciarlo o compartirlo sin restricciones.",
          ],
        },
      ],
      faqs: [
        { q: "¿Puedo exportar durante la prueba gratis?", a: "No. La prueba gratis de 7 días te permite explorar una vista previa del borrador; no incluye una solicitud final refinada ni exportable." },
        { q: "¿Puedo editar el archivo después de exportarlo?", a: "Sí. El archivo DOCX se puede editar por completo en Word, Google Docs o LibreOffice." },
      ],
      sources: [
        { label: "USPTO — DOCX para solicitudes de patente", url: "https://www.uspto.gov/patents/docx" },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Exporte seu pedido de patente em DOCX | IPnite",
      description: "Exporte seu pedido de patente completo em DOCX, com reivindicações, relatório descritivo, resumo e figuras, pronto para revisão profissional ou depósito.",
      h1: "Exporte seu pedido de patente, pronto para revisar e depositar",
      eyebrow: "ETAPA 6 DA REDAÇÃO",
      lead: "Quando a minuta estiver pronta, exporte o pedido completo em um documento DOCX editável: reivindicações, relatório descritivo, resumo e figuras juntos, prontos para compartilhar com seu advogado ou para depositar.",
      sections: [
        {
          heading: "O que você exporta",
          paragraphs: [
            "A exportação em DOCX está disponível para as minutas adquiridas. Nos planos Startup e Institucional você também pode exportar o projeto completo em JSON ou ZIP.",
          ],
          bullets: [
            "Reivindicações, relatório descritivo e resumo em um único arquivo DOCX",
            "Figuras exportadas junto com o pedido",
            "Um documento editável que pertence a você",
            "Exportação do projeto em JSON e ZIP no Startup e no Institucional",
          ],
        },
        {
          heading: "Por que DOCX",
          paragraphs: [
            "DOCX é um formato editável e amplamente aceito. O USPTO pede que o relatório descritivo, as reivindicações e o resumo dos pedidos de patente de invenção depositados eletronicamente estejam em DOCX, e cobra uma sobretaxa por outros formatos. Outros escritórios, como o IMPI, o INPI da Argentina e o INPI do Brasil, têm seus próprios sistemas de depósito eletrônico; verifique qual formato aceitam antes de depositar.",
          ],
        },
        {
          heading: "O depósito fica nas suas mãos",
          paragraphs: [
            "Hoje a IPnite não deposita pedidos automaticamente: você deposita por conta própria ou por meio de um profissional. Tudo o que a IPnite gera a partir das suas informações pertence a você, e você pode depositar, licenciar ou compartilhar sem restrições.",
          ],
        },
      ],
      faqs: [
        { q: "Posso exportar durante o teste grátis?", a: "Não. O teste grátis de 7 dias permite explorar uma prévia da minuta; não inclui um pedido final refinado ou exportável." },
        { q: "Posso editar o arquivo depois de exportá-lo?", a: "Sim. O arquivo DOCX é totalmente editável no Word, Google Docs ou LibreOffice." },
      ],
      sources: [
        { label: "USPTO — DOCX para pedidos de patente", url: "https://www.uspto.gov/patents/docx" },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

export const drafterStepPages: SeoPage[] = [disclosure, specification, qualityReview, exportPage];
