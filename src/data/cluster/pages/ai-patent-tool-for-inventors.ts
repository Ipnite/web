import { marketPricing, formatPrice } from "../../../config/pricing";
import type { ClusterPage } from "../types";
import { ipniteRegionalPricing } from "../vendors";

/** Intent: an individual inventor looking for help turning an invention into a structured patent draft. */

const inventorPrice = {
  en: formatPrice(marketPricing.US.prices.inventor.monthly, marketPricing.US.currency, "en"),
  pt: formatPrice(marketPricing.BR.prices.inventor.monthly, marketPricing.BR.currency, "pt"),
};

export const aiPatentToolForInventors: ClusterPage = {
  id: "ai-patent-tool-for-inventors",
  schema: "page",
  aboutSoftware: true,
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  related: [{ route: "ai-drafting" }, { route: "prior-art" }, { cluster: "patent-claims-generator" }, { route: "drawings" }, { route: "provisional" }, { cluster: "ai-patent-confidentiality" }, { article: "how-to-patent-an-idea" }, { cluster: "best-ai-patent-drafting-tools" }],
  locales: {
    en: {
      title: "AI Patent Tool for Inventors: Idea to Patent Draft | IPnite",
      description: "How independent inventors can use AI to search prior art, structure a disclosure, and prepare a patent draft to file or send for professional review.",
      h1: "An AI Patent Tool for Inventors",
      eyebrow: "FOR INDEPENDENT INVENTORS",
      shortName: "AI patent tool for inventors",
      lead: "You understand your invention better than anyone. What is usually missing is the patent format: claims, a detailed description, drawings with reference numerals, and a view of what already exists. IPnite guides you through those steps and gives you a structured draft you can file yourself or take to a patent professional.",
      blocks: [
        {
          type: "prose",
          heading: "The gap between an invention and a patent application",
          paragraphs: [
            "Most inventors arrive with sketches, notes, and a prototype, not with the vocabulary of a patent office. A patent application has to describe the invention so that someone skilled in the field could reproduce it, define the protected scope in claims, and explain how it differs from earlier work.",
            "When that translation goes wrong, the result is either an expensive back-and-forth with a professional or a self-drafted application that describes too little. An AI patent tool helps close that gap by asking the right questions and producing the structure for you to review.",
          ],
        },
        {
          type: "steps",
          heading: "What the workflow looks like in IPnite",
          steps: [
            { title: "Describe the invention in your own words", body: "The Discovery Agent asks about the problem, how your solution works, its parts, alternatives, and advantages, and organizes your answers into an invention disclosure." },
            { title: "Check what already exists", body: "Run a prior-art search by technical concept. Save the closest references to the project so they inform the draft." },
            { title: "Generate claims and the description", body: "The Drafter prepares independent and dependent claims plus a detailed description, background, summary, and abstract from the same disclosure." },
            { title: "Create reference drawings", body: "Generate figures whose reference numerals match the text, then refine them." },
            { title: "Review, export, and decide how to file", body: "Run the QA checks, export the application as DOCX, and either file it yourself or send it to a patent attorney or agent for review." },
          ],
        },
        {
          type: "cards",
          heading: "Gather this before you start",
          intro: "The draft can only be as complete as what you give it. Twenty minutes of preparation makes a noticeable difference.",
          items: [
            { title: "Sketches and photos", body: "Hand drawings, CAD screenshots, or photos of a prototype help describe structure and generate figures." },
            { title: "Variations", body: "Other materials, shapes, configurations, or steps that would also work. Variations become fallback positions in the claims." },
            { title: "The problem and the advantage", body: "What goes wrong with current solutions, and what measurable improvement yours provides." },
            { title: "Dates and disclosures", body: "When and where you have already shown, sold, or published the invention. This affects your filing options." },
            { title: "Co-inventors", body: "Everyone who contributed to at least one claimed feature may need to be named as an inventor." },
            { title: "Known competitors", body: "Products or patents you already know about give the prior-art search a useful starting point." },
          ],
        },
        {
          type: "split",
          heading: "What an AI patent tool can and cannot do for you",
          left: {
            title: "What it helps with",
            items: [
              "Turning an informal description into a structured disclosure",
              "Finding related patents you did not know about",
              "Producing a complete first draft in the format patent offices expect",
              "Keeping claims, description, and drawings consistent",
              "Lowering the cost of professional review by handing over an organized draft",
            ],
          },
          right: {
            title: "What it cannot do",
            items: [
              "Guarantee that your invention is patentable or that a patent will be granted",
              "Replace a legal opinion on patentability, infringement, or freedom to operate",
              "Know business context you do not provide, such as licensing plans",
              "Decide your filing strategy or which countries to protect",
              "Take responsibility for the final text; you or your representative review it",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "File before you show it publicly",
          paragraphs: [
            "Public disclosure before filing (a launch, a crowdfunding page, a conference talk, a sale) can limit where you can still obtain a patent. Some countries allow a limited grace period for your own disclosures; many do not. If in doubt, file first, then talk about it.",
          ],
        },
        {
          type: "prose",
          heading: "What it costs",
          paragraphs: [
            `The Inventor plan costs ${inventorPrice.en} per month in the United States, with regional prices for Mexico, Argentina, Brazil, and the rest of Latin America. It includes one active project, two prior-art searches per month, one external collaborator such as your attorney, and DOCX export. Every paid plan includes a patentability search.`,
            "You can start with a 7-day free trial that includes a prior-art search with the Discovery Agent. No credit card is required and nothing is charged automatically. Patent office fees are separate and paid to the office.",
          ],
        },
      ],
      faqs: [
        { q: "Can I file a patent application myself with an AI-generated draft?", a: "Many patent offices allow inventors to file on their own behalf, although some require a local representative for foreign applicants. You are responsible for reviewing the draft, and professional review is strongly recommended for anything commercially important." },
        { q: "Do I need to know patent law to use IPnite?", a: "No. The Discovery Agent asks plain-language questions about your invention. Understanding the basics of claims and prior art helps you review the result, and the Learn section explains both." },
        { q: "Will my invention be kept confidential?", a: "IPnite does not use your inventions, prompts, documents, or drafts to train AI models, and invention materials are encrypted in transit and at rest. The security page explains how the AI processing works." },
        { q: "Is an AI draft enough for a provisional application?", a: "A provisional application must still describe the invention fully enough to support the claims you file later. A detailed, reviewed draft is far more useful than a short summary. See the provisional application page for details." },
      ],
      cta: { heading: "Turn your idea into a structured draft", body: "Start the 7-day free trial, describe your invention to the Discovery Agent, and run your first prior-art search. No credit card." },
    },
    es: {
      title: "Herramienta de patentes con IA para inventores | IPnite",
      description: "Cómo un inventor independiente puede usar IA para buscar antecedentes, estructurar su invención y preparar un borrador de patente para presentar o revisar.",
      h1: "Una herramienta de patentes con IA para inventores",
      eyebrow: "PARA INVENTORES INDEPENDIENTES",
      shortName: "Herramienta con IA para inventores",
      lead: "Nadie entiende tu invención mejor que tú. Lo que suele faltar es el formato de una patente: reivindicaciones, una descripción detallada, dibujos con números de referencia y una idea clara de lo que ya existe. IPnite te guía en esos pasos y te entrega un borrador estructurado que puedes presentar por tu cuenta o llevar a un profesional.",
      blocks: [
        {
          type: "prose",
          heading: "La distancia entre una invención y una solicitud de patente",
          paragraphs: [
            "La mayoría de los inventores llegan con bocetos, notas y un prototipo, no con el lenguaje de una oficina de patentes. Una solicitud debe describir la invención de modo que alguien del campo pueda reproducirla, definir en las reivindicaciones qué se protege y explicar en qué se distingue de lo anterior.",
            "Cuando esa traducción sale mal, el resultado es un ida y vuelta caro con un profesional o una solicitud redactada por cuenta propia que describe demasiado poco. Una herramienta de patentes con IA ayuda a cerrar esa distancia: hace las preguntas correctas y genera la estructura para que tú la revises.",
          ],
        },
        {
          type: "steps",
          heading: "Cómo es el flujo en IPnite",
          steps: [
            { title: "Describe la invención con tus palabras", body: "El Agente de descubrimiento te pregunta por el problema, cómo funciona tu solución, sus partes, alternativas y ventajas, y organiza tus respuestas en una divulgación de la invención." },
            { title: "Revisa lo que ya existe", body: "Haz una búsqueda de antecedentes por concepto técnico. Guarda las referencias más cercanas en el proyecto para que orienten el borrador." },
            { title: "Genera reivindicaciones y descripción", body: "The Drafter prepara reivindicaciones independientes y dependientes, además de la descripción detallada, los antecedentes, el resumen y el resumen técnico, a partir de la misma divulgación." },
            { title: "Crea dibujos de referencia", body: "Genera figuras cuyos números de referencia coinciden con el texto y ajústalas." },
            { title: "Revisa, exporta y decide cómo presentar", body: "Pasa los controles de calidad, exporta la solicitud en DOCX y preséntala tú mismo o envíala a un abogado o agente de patentes para revisión." },
          ],
        },
        {
          type: "cards",
          heading: "Reúne esto antes de empezar",
          intro: "El borrador solo puede ser tan completo como la información que le das. Veinte minutos de preparación hacen una diferencia notable.",
          items: [
            { title: "Bocetos y fotos", body: "Dibujos a mano, capturas de CAD o fotos del prototipo ayudan a describir la estructura y a generar las figuras." },
            { title: "Variantes", body: "Otros materiales, formas, configuraciones o pasos que también funcionarían. Las variantes se convierten en posiciones de respaldo en las reivindicaciones." },
            { title: "El problema y la ventaja", body: "Qué falla en las soluciones actuales y qué mejora concreta aporta la tuya." },
            { title: "Fechas y divulgaciones", body: "Cuándo y dónde ya mostraste, vendiste o publicaste la invención. Esto afecta tus opciones de presentación." },
            { title: "Coinventores", body: "Quien haya contribuido al menos a una característica reivindicada quizá deba figurar como inventor." },
            { title: "Competidores conocidos", body: "Los productos o patentes que ya conoces son un buen punto de partida para la búsqueda de antecedentes." },
          ],
        },
        {
          type: "split",
          heading: "Lo que una herramienta de patentes con IA puede y no puede hacer",
          left: {
            title: "En qué te ayuda",
            items: [
              "Convertir una descripción informal en una divulgación estructurada",
              "Encontrar patentes relacionadas que no conocías",
              "Producir un primer borrador completo con el formato que esperan las oficinas",
              "Mantener coherentes las reivindicaciones, la descripción y los dibujos",
              "Abaratar la revisión profesional al entregar un borrador ordenado",
            ],
          },
          right: {
            title: "Lo que no puede hacer",
            items: [
              "Garantizar que tu invención sea patentable o que se otorgue la patente",
              "Sustituir una opinión legal sobre patentabilidad, infracción o libertad de operación",
              "Conocer el contexto de negocio que no le das, como planes de licenciamiento",
              "Decidir tu estrategia de presentación o en qué países protegerte",
              "Responder por el texto final: lo revisas tú o tu representante",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "Presenta antes de mostrarla en público",
          paragraphs: [
            "Divulgar la invención antes de presentar la solicitud (un lanzamiento, una campaña de financiamiento, una conferencia, una venta) puede limitar dónde todavía puedes obtener una patente. Algunos países dan un periodo de gracia limitado para tus propias divulgaciones; muchos no. Si tienes dudas, presenta primero y luego habla de ella.",
          ],
        },
        {
          type: "prose",
          heading: "Cuánto cuesta",
          paragraphs: [
            `Precio del plan: ${ipniteRegionalPricing("es").inventorSummary}. Incluye un proyecto activo, dos búsquedas de antecedentes al mes, un colaborador externo (por ejemplo, tu abogado) y exportación en DOCX. Todos los planes de pago incluyen una búsqueda de patentabilidad.`,
            "Puedes empezar con la prueba gratis de 7 días, que incluye una búsqueda de antecedentes con el Agente de descubrimiento. No necesitas tarjeta y no hay cobros automáticos. Las tarifas de la oficina de patentes son aparte y se pagan a la oficina.",
          ],
        },
      ],
      faqs: [
        { q: "¿Puedo presentar yo mismo una solicitud con un borrador generado por IA?", a: "Muchas oficinas permiten que el inventor presente por su cuenta, aunque algunas exigen un representante local a los solicitantes extranjeros. Tú eres responsable de revisar el borrador, y la revisión profesional es muy recomendable para todo lo que tenga valor comercial." },
        { q: "¿Necesito saber de derecho de patentes para usar IPnite?", a: "No. El Agente de descubrimiento te hace preguntas en lenguaje sencillo sobre tu invención. Entender lo básico de las reivindicaciones y los antecedentes te ayuda a revisar el resultado, y la sección Aprende explica ambos temas." },
        { q: "¿Mi invención se mantendrá confidencial?", a: "IPnite no usa tus invenciones, instrucciones, documentos ni borradores para entrenar modelos de IA, y los materiales de invención se cifran en tránsito y en reposo. La página de seguridad explica cómo funciona el procesamiento con IA." },
        { q: "¿Un borrador de IA basta para una solicitud provisional?", a: "Una solicitud provisional también debe describir la invención con suficiente detalle para respaldar las reivindicaciones que presentes después. Un borrador detallado y revisado es mucho más útil que un resumen breve. Consulta la página de solicitudes provisionales." },
      ],
      cta: { heading: "Convierte tu idea en un borrador estructurado", body: "Empieza la prueba gratis de 7 días, describe tu invención al Agente de descubrimiento y haz tu primera búsqueda de antecedentes. Sin tarjeta." },
    },
    pt: {
      title: "Ferramenta de patentes com IA para inventores | IPnite",
      description: "Como um inventor independente pode usar IA para buscar anterioridades, estruturar a invenção e preparar um rascunho de patente para depositar ou revisar.",
      h1: "Uma ferramenta de patentes com IA para inventores",
      eyebrow: "PARA INVENTORES INDEPENDENTES",
      shortName: "Ferramenta com IA para inventores",
      lead: "Ninguém entende sua invenção melhor do que você. O que costuma faltar é o formato de uma patente: reivindicações, um relatório descritivo detalhado, desenhos com sinais de referência e uma visão clara do que já existe. A IPnite guia você por essas etapas e entrega um rascunho estruturado para depositar por conta própria ou levar a um profissional.",
      blocks: [
        {
          type: "prose",
          heading: "A distância entre uma invenção e um pedido de patente",
          paragraphs: [
            "A maioria dos inventores chega com esboços, anotações e um protótipo, não com a linguagem de um escritório de patentes. Um pedido precisa descrever a invenção de forma que um técnico no assunto consiga reproduzi-la, definir nas reivindicações o que é protegido e explicar em que ela difere do que já existia.",
            "Quando essa tradução dá errado, o resultado é um vaivém caro com um profissional ou um pedido redigido por conta própria que descreve pouco demais. Uma ferramenta de patentes com IA ajuda a fechar essa distância: faz as perguntas certas e gera a estrutura para você revisar.",
          ],
        },
        {
          type: "steps",
          heading: "Como é o fluxo na IPnite",
          steps: [
            { title: "Descreva a invenção com suas palavras", body: "O Agente de descoberta pergunta sobre o problema, como sua solução funciona, suas partes, alternativas e vantagens, e organiza as respostas em uma divulgação da invenção." },
            { title: "Veja o que já existe", body: "Faça uma busca de anterioridade por conceito técnico. Salve as referências mais próximas no projeto para orientar o rascunho." },
            { title: "Gere reivindicações e relatório", body: "O The Drafter prepara reivindicações independentes e dependentes, além do relatório descritivo, do estado da técnica, do sumário e do resumo, a partir da mesma divulgação." },
            { title: "Crie desenhos de referência", body: "Gere figuras cujos sinais de referência coincidem com o texto e ajuste-as." },
            { title: "Revise, exporte e decida como depositar", body: "Passe pelos controles de qualidade, exporte o pedido em DOCX e deposite você mesmo ou envie a um advogado ou agente da propriedade industrial para revisão." },
          ],
        },
        {
          type: "cards",
          heading: "Reúna isto antes de começar",
          intro: "O rascunho só pode ser tão completo quanto as informações que você fornece. Vinte minutos de preparação fazem uma diferença visível.",
          items: [
            { title: "Esboços e fotos", body: "Desenhos à mão, capturas de CAD ou fotos do protótipo ajudam a descrever a estrutura e a gerar as figuras." },
            { title: "Variações", body: "Outros materiais, formatos, configurações ou etapas que também funcionariam. Variações viram posições de fallback nas reivindicações." },
            { title: "O problema e a vantagem", body: "O que falha nas soluções atuais e que melhoria concreta a sua traz." },
            { title: "Datas e divulgações", body: "Quando e onde você já mostrou, vendeu ou publicou a invenção. Isso afeta suas opções de depósito." },
            { title: "Coinventores", body: "Quem contribuiu para pelo menos uma característica reivindicada talvez precise constar como inventor." },
            { title: "Concorrentes conhecidos", body: "Produtos ou patentes que você já conhece são um bom ponto de partida para a busca de anterioridade." },
          ],
        },
        {
          type: "split",
          heading: "O que uma ferramenta de patentes com IA pode e não pode fazer",
          left: {
            title: "Em que ela ajuda",
            items: [
              "Transformar uma descrição informal em uma divulgação estruturada",
              "Encontrar patentes relacionadas que você não conhecia",
              "Produzir um primeiro rascunho completo no formato que os escritórios esperam",
              "Manter reivindicações, relatório e desenhos coerentes",
              "Baratear a revisão profissional ao entregar um rascunho organizado",
            ],
          },
          right: {
            title: "O que ela não pode fazer",
            items: [
              "Garantir que sua invenção seja patenteável ou que a patente seja concedida",
              "Substituir um parecer jurídico sobre patenteabilidade, infração ou liberdade de operação",
              "Conhecer o contexto de negócio que você não informa, como planos de licenciamento",
              "Decidir sua estratégia de depósito ou em quais países se proteger",
              "Responder pelo texto final: quem revisa é você ou seu representante",
            ],
          },
        },
        {
          type: "callout",
          tone: "note",
          heading: "Deposite antes de mostrar em público",
          paragraphs: [
            "Divulgar a invenção antes do depósito (um lançamento, uma campanha de financiamento coletivo, uma palestra, uma venda) pode limitar onde você ainda consegue obter uma patente. Alguns países oferecem um período de graça limitado para suas próprias divulgações; muitos não. Na dúvida, deposite primeiro e depois divulgue.",
          ],
        },
        {
          type: "prose",
          heading: "Quanto custa",
          paragraphs: [
            `No Brasil, o plano Inventor custa ${inventorPrice.pt} por mês; também há preços locais para México, Argentina, Estados Unidos e o restante da América Latina. Ele inclui um projeto ativo, duas buscas de anterioridade por mês, um colaborador externo (por exemplo, seu advogado) e exportação em DOCX. Todos os planos pagos incluem uma busca de patenteabilidade.`,
            "Você pode começar com o teste grátis de 7 dias, que inclui uma busca de anterioridade com o Agente de descoberta. Não precisa de cartão e não há cobrança automática. As taxas do escritório de patentes são à parte e pagas ao escritório.",
          ],
        },
      ],
      faqs: [
        { q: "Posso depositar sozinho um pedido com um rascunho gerado por IA?", a: "Muitos escritórios permitem que o próprio inventor deposite, embora alguns exijam um procurador local para depositantes estrangeiros. Você é responsável por revisar o rascunho, e a revisão profissional é muito recomendada para tudo o que tenha valor comercial." },
        { q: "Preciso entender de direito de patentes para usar a IPnite?", a: "Não. O Agente de descoberta faz perguntas em linguagem simples sobre sua invenção. Entender o básico de reivindicações e anterioridade ajuda a revisar o resultado, e a seção Aprenda explica os dois temas." },
        { q: "Minha invenção será mantida confidencial?", a: "A IPnite não usa suas invenções, instruções, documentos ou rascunhos para treinar modelos de IA, e os materiais de invenção são criptografados em trânsito e em repouso. A página de segurança explica como funciona o processamento com IA." },
        { q: "Um rascunho de IA basta para um pedido provisório?", a: "Um pedido provisório também precisa descrever a invenção com detalhe suficiente para sustentar as reivindicações que você depositar depois. Um rascunho detalhado e revisado é muito mais útil do que um resumo curto. Veja a página de pedidos provisórios." },
      ],
      cta: { heading: "Transforme sua ideia em um rascunho estruturado", body: "Comece o teste grátis de 7 dias, descreva sua invenção ao Agente de descoberta e faça sua primeira busca de anterioridade. Sem cartão." },
    },
  },
};
