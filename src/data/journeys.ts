import type { Locale } from "./routes";

/**
 * Copy for the two journey hubs ("I have an idea" and "I filed my application").
 * The hubs connect existing specialist pages; they do not replace them. Every product claim here
 * comes from an existing IPnite page (product.ts, PricingSection.astro, cluster pages), and every
 * legal line carries its source. Review the legal lines against the cited sources before editing.
 */

export const LAST_REVIEWED = { en: "September 28, 2026", es: "28 de septiembre de 2026", pt: "28 de setembro de 2026" } as const;

/** Patent office (jurisdiction). Independent from the site region. */
export type Office = "uspto" | "impi" | "inpi-ar" | "inpi-br" | "other";
export const offices: Office[] = ["uspto", "impi", "inpi-ar", "inpi-br", "other"];

export interface Source { label: string; url: string }

const S = {
  uspto102: { label: "35 U.S.C. 102(b)(1) · MPEP Appendix L (USPTO)", url: "https://www.uspto.gov/web/offices/pac/mpep/mpep-9015-appx-l.html" },
  uspto41: { label: "35 U.S.C. 41(b) · MPEP Appendix L (USPTO)", url: "https://www.uspto.gov/web/offices/pac/mpep/mpep-9015-appx-l.html" },
  usc154: { label: "35 U.S.C. 154(d) · govinfo.gov", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title35/html/USCODE-2023-title35-partII-chap14-sec154.htm" },
  usptoBasics: { label: "USPTO — Patent basics", url: "https://www.uspto.gov/patents/basics" },
  usptoProvisional: { label: "USPTO — Provisional application for patent", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" },
  usptoFees: { label: "USPTO — Fee schedule", url: "https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule" },
  impi: { label: "IMPI — gob.mx/impi", url: "https://www.gob.mx/impi" },
  inpiAr: { label: "INPI Argentina — argentina.gob.ar/inpi", url: "https://www.argentina.gob.ar/inpi" },
  inpiBr: { label: "INPI Brasil — gov.br/inpi", url: "https://www.gov.br/inpi/pt-br" },
  lpi: { label: "Lei 9.279/1996 (LPI) · planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/leis/l9279.htm" },
  wipoDirectory: { label: "WIPO — Directory of intellectual property offices", url: "https://www.wipo.int/directory/en/urls.jsp" },
  wipoPct: { label: "WIPO — PCT", url: "https://www.wipo.int/pct/en/" },
  pctStates: { label: "WIPO — PCT Contracting States", url: "https://www.wipo.int/pct/en/pct_contracting_states.html" },
} satisfies Record<string, Source>;

export const WIPO_DIRECTORY = S.wipoDirectory.url;

/** Localized label for a source; the URL never changes. */
function src(source: Source, label?: string): Source {
  return label ? { label, url: source.url } : source;
}

/** Official fee pages per office. IMPI, INPI Argentina and INPI Brasil link to the office site, where each publishes its fees. */
export const officeFeeUrl: Record<Exclude<Office, "other">, string> = {
  uspto: S.usptoFees.url,
  impi: S.impi.url,
  "inpi-ar": S.inpiAr.url,
  "inpi-br": S.inpiBr.url,
};

export const officeNames: Record<Locale, Record<Office, string>> = {
  en: { uspto: "USPTO (United States)", impi: "IMPI (Mexico)", "inpi-ar": "INPI (Argentina)", "inpi-br": "INPI (Brazil)", other: "Other / international" },
  es: { uspto: "USPTO (Estados Unidos)", impi: "IMPI (México)", "inpi-ar": "INPI (Argentina)", "inpi-br": "INPI (Brasil)", other: "Otra / internacional" },
  pt: { uspto: "USPTO (Estados Unidos)", impi: "IMPI (México)", "inpi-ar": "INPI (Argentina)", "inpi-br": "INPI (Brasil)", other: "Outro / internacional" },
};

/* ------------------------------------------------------------------ */
/* Shared UI strings                                                   */
/* ------------------------------------------------------------------ */

export const ui = {
  en: { home: "Home", example: "Example", sources: "Sources", lastReviewed: "Last reviewed", startHere: "Start here", perMonth: "/mo", perYear: "/yr", or: "or", source: "Source", official: "Official fees", jurisdictionLabel: "My application is with:", here: "I'm here", disclaimer: "General information, not legal advice. Deadlines and rules depend on the office; I confirm them with the official source or a patent professional." },
  es: { home: "Inicio", example: "Ejemplo", sources: "Fuentes", lastReviewed: "Última revisión", startHere: "Empieza aquí", perMonth: "/mes", perYear: "/año", or: "o", source: "Fuente", official: "Tarifas oficiales", jurisdictionLabel: "Mi solicitud está en:", here: "Estoy aquí", disclaimer: "Información general, no asesoría legal. Los plazos y reglas dependen de cada oficina; los confirmo con la fuente oficial o con un profesional de patentes." },
  pt: { home: "Início", example: "Exemplo", sources: "Fontes", lastReviewed: "Última revisão", startHere: "Comece aqui", perMonth: "/mês", perYear: "/ano", or: "ou", source: "Fonte", official: "Taxas oficiais", jurisdictionLabel: "Meu pedido está no:", here: "Estou aqui", disclaimer: "Informação geral, não aconselhamento jurídico. Prazos e regras dependem de cada escritório; eu os confirmo na fonte oficial ou com um profissional de patentes." },
} as const;

/** Plan descriptions reuse the homepage pricing copy (PricingSection.astro). */
export const planCopy = {
  en: { inventor: { name: "Inventor", desc: "For independent inventors protecting and managing their ideas." }, startup: { name: "Startup", desc: "For startups building and managing an IP portfolio." }, institutional: { name: "Institutional", desc: "For law firms, universities, TTOs and IP teams. Includes 3 users." } },
  es: { inventor: { name: "Inventor", desc: "Para inventores independientes que protegen y gestionan sus ideas." }, startup: { name: "Startup", desc: "Para startups que construyen y gestionan un portafolio de propiedad intelectual." }, institutional: { name: "Institucional", desc: "Para despachos, universidades, oficinas de transferencia tecnológica y equipos de propiedad intelectual. Incluye 3 usuarios." } },
  pt: { inventor: { name: "Inventor", desc: "Para inventores independentes que protegem e gerenciam suas ideias." }, startup: { name: "Startup", desc: "Para startups que constroem e gerenciam um portfólio de propriedade intelectual." }, institutional: { name: "Institucional", desc: "Para escritórios, universidades, NITs e equipes de propriedade intelectual. Inclui 3 usuários." } },
} as const;

/** Trial terms as stated on the homepage pricing section and commonCta (same for every market). */
export const trialLine = {
  en: "I can try the platform free for 7 days, with no credit card and no automatic charges.",
  es: "Puedo probar la plataforma gratis 7 días, sin tarjeta y sin cobros automáticos.",
  pt: "Posso testar a plataforma grátis por 7 dias, sem cartão e sem cobranças automáticas.",
} as const;

/* ------------------------------------------------------------------ */
/* Page A — "I have an idea. Now what?"                                */
/* ------------------------------------------------------------------ */

/** Site-region variants: a Spanish page serves Mexico, Argentina and the rest of Latin America. */
export type RegionVariant = "US" | "MX" | "AR" | "BR" | "LATAM";

export const ideaPage = {
  en: {
    title: "I Have an Idea. How Do I Patent It? | IPnite",
    description: "I have an idea. Now what? Check if it's already patented, see what I can protect, and draft my patent application, starting with one invention.",
    breadcrumb: "I have an idea. Now what?",
    hero: {
      eyebrow: "I have an invention and no map",
      h1: ["I have an idea.", "Now what?"],
      text: "I've made notes, run a few searches, even asked ChatGPT. What I need now is a clear next step: find out what already exists, understand it, and turn my idea into a patent application.",
      primary: "Start with my invention",
      secondary: "I have questions first",
      cards: ["Notes in three different apps. One of them is a napkin.", "Googled “how to patent an idea.” Opened eleven tabs.", "Opened Google Patents. Didn't understand what I was looking at. Closed it.", "Asked ChatGPT. Still not sure."],
      highlight: "Can I actually patent this?",
    },
    strip: { label: "The questions in my head right now", chips: ["Has someone already patented this?", "Which results actually matter?", "Can I write a patent myself?", "Is it safe to use AI?", "Do I need an attorney?", "What will it cost?"] },
    search: {
      thought: "I think this is new. I searched Google and didn't find the same thing.",
      h2: "But does that mean I can patent it?",
      answer: "Maybe not. Patents describe inventions in technical and legal language I'd never type into Google. Before anything else, I want to search where patents actually live and see what's closest to my idea.",
      cta: "Search my invention",
      link: "How prior art search works",
      caption: "My invention, described in my own words.",
      alt: "IPnite invention disclosure form where the inventor describes the problem, the solution and its components",
    },
    results: {
      h2: "I found hundreds of patents. Which ones actually matter?",
      answer: "I don't need hundreds of results. I need the closest ones, and to understand what makes my idea different from each of them.",
      leftTitle: "What my search gave me",
      leftLines: ["US 2019/0xxxxxx — Bottle closure with integrated…", "EP 3 xxx xxx — Apparatus and method for the sterilization of…", "WO 2020/xxxxxx — Portable fluid treatment device comprising…", "US 10,xxx,xxx — System for irradiating a liquid in a vessel…", "CN 11xxxxxxx — Bottle cap assembly having a light-emitting…"],
      leftMore: "…and hundreds more, in dense legal language.",
      rightTitle: "What I actually need to see",
      cards: [
        { tag: "Closest match · High overlap", body: "Overlaps: UV light source in the cap, rechargeable battery. Differs: activated by a button, not by closing the cap." },
        { tag: "Related · Partial overlap", body: "A closure sensor that triggers an action when a vessel is sealed. Different purpose, similar mechanism." },
      ],
      closing: "That difference might be where my invention lives.",
      link: "How I can find what makes my idea different",
    },
    write: {
      thought: "I can explain my invention. I have no idea how to turn it into a patent.",
      h2: "Can I write a patent myself?",
      answer: "I can prepare it step by step: describe the problem my invention solves and how it solves it, define what I want to protect, and end up with a structured application ready for professional review.",
      leftTitle: "My words",
      left: "“It's a cap that cleans the water with UV light every time I close it, so I don't have to remember to press anything.”",
      rightTitle: "Structured claim",
      right: "“A closure for a liquid vessel, comprising: a housing; an ultraviolet light source disposed within the housing; and a sensor configured to detect engagement of the closure with the vessel and, in response, to activate the light source.”",
      steps: [
        { title: "Describe", body: "The technical problem, the solution and the alternatives" },
        { title: "Claims", body: "The features I want to protect" },
        { title: "Specification", body: "The technical description and abstract" },
        { title: "Drawings", body: "Reference figures that support the text" },
        { title: "QA", body: "A consistency and formatting review" },
        { title: "Export", body: "A document ready for review and filing" },
      ],
      link: "How patent drafting works",
    },
    ai: {
      h2: "I'm about to put an unpublished invention into AI. Where does it actually go?",
      answer: "Before I type my idea anywhere, I want to know exactly where it goes and who can use it.",
      colGeneral: "General-purpose AI chat",
      colIpnite: "IPnite",
      rows: [
        { q: "What is it built for?", general: "Open-ended conversation on any topic", ipnite: "One job: a structured patent workflow" },
        { q: "Is my invention used to train AI models?", general: "Depends on the product and its settings. I'd have to check its policy.", ipnite: "My inventions, prompts, documents and drafts aren't used to train AI models." },
        { q: "Who owns my idea?", general: "Governed by that product's terms", ipnite: "Everything generated from my information belongs to me." },
        { q: "What do I get?", general: "Answers in a chat window", ipnite: "Claims, specification and abstract, reference drawings, a quality review and a DOCX export" },
      ],
      link: "How IPnite handles my data",
    },
    attorney: {
      thought: "The attorney quote is more than I expected. Do I need that before I even know if this is worth pursuing?",
      h2: "Do I need an attorney already?",
      answer: "Maybe, eventually. But I can arrive prepared, so I'm paying for their judgment, not for the basics.",
      blocks: [
        { tag: "Me", title: "The idea", body: "Notes, sketches, what makes it work" },
        { tag: "With IPnite", title: "Search, structure, draft", body: "Prior art understood, application drafted" },
        { tag: "Professional review", title: "Judgment and filing", body: "Strategy, scope and where to file" },
      ],
      note: "IPnite doesn't replace legal advice. It helps me prepare.",
    },
    cost: {
      thought: "I just need to get this one idea moving.",
      h2: "How much is all of this going to cost?",
      answer: "I see three paths. The middle one lets me start without betting everything.",
      own: { title: "On my own", body: "Free tools. Plus a lot of my time, and it's hard to know what I'm missing." },
      drafter: { title: "The Drafter", unit: "per draft", payment: "One-time payment. No subscription.", includes: ["Independent and dependent claims", "Technical specification and abstract", "Reference drawings", "Quality review (QA)", "DOCX export"], cta: "Create my draft" },
      pro: { title: "Professional drafting", body: "Depends on the professional and on my invention. I'd ask for a quote. Full legal judgment, worth it once I know my idea is worth pursuing." },
      fees: "Official patent office fees are separate and paid to the office where I file.",
      feesLatam: "Official patent office fees are separate. They depend on the country where I file.",
      feeLink: { US: "USPTO fee schedule", MX: "IMPI official fees", AR: "INPI Argentina official fees", BR: "INPI Brazil official fees", LATAM: "WIPO directory of national patent offices" },
    },
    more: {
      thought: "Later, maybe:",
      h2: "What if I keep having ideas?",
      answer: "Then I'll want everything in one place: search, drafting and my portfolio.",
      link: "Compare my plan options",
    },
    file: {
      h2: "Where would I file?",
      local: {
        US: "If I file in the United States, my application goes to the USPTO.",
        MX: "If I file in Mexico, my application goes to IMPI.",
        AR: "If I file in Argentina, my application goes to INPI.",
        BR: "If I file in Brazil, my application goes to INPI.",
        LATAM: "My application goes to the patent office of the country where I file.",
      },
      localLink: { US: "How filing works in the United States", MX: "How filing works in Mexico", AR: "How filing works in Argentina", BR: "How filing works in Brazil", LATAM: "Find the patent office of each country" },
      abroad: "That's not my only option. If I want protection in other countries too, the PCT is one way to do it.",
      abroadAr: "That's not my only option. Argentina isn't a PCT member yet, so from Argentina I'd file directly in each country, claiming my Argentine date within 12 months under the Paris Convention.",
      pctLink: "How the PCT route works",
    },
    final: {
      h2: "Now I know my next step.",
      text: "One invention first. Everything else, later.",
      primary: "Start with my invention",
      secondary: "Search my idea first",
      other: "I already filed",
      indexLabel: "What I still want to know",
    },
  },

  es: {
    title: "Cómo patentar una idea: ¿por dónde empiezo? | IPnite",
    description: "Tengo una idea. ¿Y ahora qué? Ver si ya está patentada, entender qué puedo proteger y redactar mi solicitud de patente, empezando por una invención.",
    breadcrumb: "Tengo una idea. ¿Y ahora qué?",
    hero: {
      eyebrow: "Tengo una invención y ningún mapa",
      h1: ["Tengo una idea.", "¿Y ahora qué?"],
      text: "Ya tomé notas, hice algunas búsquedas y hasta le pregunté a ChatGPT. Lo que necesito ahora es un siguiente paso claro: saber qué existe, entenderlo y convertir mi idea en una solicitud de patente.",
      primary: "Empezar con mi invención",
      secondary: "Primero tengo dudas",
      cards: ["Notas en tres apps distintas. Una de ellas es una servilleta.", "Busqué “cómo patentar una idea”. Abrí once pestañas.", "Entré a Google Patents. No entendí lo que veía. Lo cerré.", "Le pregunté a ChatGPT. Sigo sin estar seguro."],
      highlight: "¿De verdad puedo patentar esto?",
    },
    strip: { label: "Las preguntas que tengo en la cabeza", chips: ["¿Alguien ya lo patentó?", "¿Qué resultados importan de verdad?", "¿Puedo redactar una patente yo mismo?", "¿Es seguro usar IA?", "¿Necesito un abogado?", "¿Cuánto me va a costar?"] },
    search: {
      thought: "Creo que es algo nuevo. Lo busqué en Google y no encontré nada igual.",
      h2: "Pero ¿eso significa que puedo patentarlo?",
      answer: "Quizá no. Las patentes describen las invenciones con un lenguaje técnico y legal que yo nunca escribiría en Google. Antes que nada, quiero buscar donde de verdad están las patentes y ver qué se parece más a mi idea.",
      cta: "Buscar mi invención",
      link: "Cómo funciona la búsqueda de antecedentes",
      caption: "Mi invención, descrita con mis propias palabras.",
      alt: "Formulario de divulgación de IPnite donde el inventor describe el problema, la solución y sus componentes",
    },
    results: {
      h2: "Encontré cientos de patentes. ¿Cuáles importan de verdad?",
      answer: "No necesito cientos de resultados. Necesito los más cercanos y entender qué hace diferente a mi idea de cada uno.",
      leftTitle: "Lo que me dio mi búsqueda",
      leftLines: ["US 2019/0xxxxxx — Bottle closure with integrated…", "EP 3 xxx xxx — Aparato y método para la esterilización de…", "WO 2020/xxxxxx — Dispositivo portátil de tratamiento de fluidos…", "US 10,xxx,xxx — System for irradiating a liquid in a vessel…", "MX/a/20xx/xxxxxx — Tapa con fuente de luz para…"],
      leftMore: "…y cientos más, en lenguaje legal denso.",
      rightTitle: "Lo que de verdad necesito ver",
      cards: [
        { tag: "Más cercano · Coincidencia alta", body: "Coincide: fuente de luz UV en la tapa, batería recargable. Difiere: se activa con un botón, no al cerrar la tapa." },
        { tag: "Relacionado · Coincidencia parcial", body: "Un sensor de cierre que activa una acción cuando se sella un recipiente. Otro propósito, mecanismo similar." },
      ],
      closing: "Esa diferencia puede ser justo donde vive mi invención.",
      link: "Cómo encontrar lo que hace diferente a mi idea",
    },
    write: {
      thought: "Puedo explicar mi invención. No tengo idea de cómo convertirla en una patente.",
      h2: "¿Puedo redactar una patente yo mismo?",
      answer: "Puedo prepararla paso a paso: describir el problema que resuelve mi invención y cómo lo resuelve, definir lo que quiero proteger y terminar con una solicitud estructurada, lista para revisión profesional.",
      leftTitle: "Mis palabras",
      left: "“Es una tapa que limpia el agua con luz UV cada vez que la cierro, para no tener que acordarme de apretar nada.”",
      rightTitle: "Reivindicación estructurada",
      right: "“Un cierre para un recipiente de líquidos, que comprende: una carcasa; una fuente de luz ultravioleta dispuesta dentro de la carcasa; y un sensor configurado para detectar el acoplamiento del cierre con el recipiente y, en respuesta, activar la fuente de luz.”",
      steps: [
        { title: "Describir", body: "El problema técnico, la solución y las alternativas" },
        { title: "Reivindicaciones", body: "Las características que quiero proteger" },
        { title: "Descripción", body: "La descripción técnica y el resumen" },
        { title: "Dibujos", body: "Figuras de referencia que respaldan el texto" },
        { title: "Calidad", body: "Una revisión de coherencia y formato" },
        { title: "Exportar", body: "Un documento listo para revisar y presentar" },
      ],
      link: "Cómo funciona la redacción de patentes",
    },
    ai: {
      h2: "Estoy por meter una invención inédita en una IA. ¿A dónde va a parar?",
      answer: "Antes de escribir mi idea en cualquier lugar, quiero saber exactamente a dónde va y quién puede usarla.",
      colGeneral: "Chat de IA de uso general",
      colIpnite: "IPnite",
      rows: [
        { q: "¿Para qué está hecho?", general: "Conversación abierta sobre cualquier tema", ipnite: "Una sola tarea: un flujo estructurado de patentes" },
        { q: "¿Usan mi invención para entrenar modelos de IA?", general: "Depende del producto y su configuración. Tendría que revisar su política.", ipnite: "Mis invenciones, instrucciones, documentos y borradores no se usan para entrenar modelos de IA." },
        { q: "¿De quién es mi idea?", general: "Lo definen los términos de ese producto", ipnite: "Todo lo que se genera con mi información me pertenece." },
        { q: "¿Qué obtengo?", general: "Respuestas en una ventana de chat", ipnite: "Reivindicaciones, descripción y resumen, dibujos de referencia, revisión de calidad y exportación en DOCX" },
      ],
      link: "Cómo maneja IPnite mis datos",
    },
    attorney: {
      thought: "La cotización del abogado es más de lo que esperaba. ¿La necesito antes de saber si esto vale la pena?",
      h2: "¿Ya necesito un abogado?",
      answer: "Quizá, más adelante. Pero puedo llegar preparado, para pagar por su criterio y no por lo básico.",
      blocks: [
        { tag: "Yo", title: "La idea", body: "Notas, bocetos, lo que la hace funcionar" },
        { tag: "Con IPnite", title: "Buscar, estructurar, redactar", body: "Antecedentes entendidos, solicitud redactada" },
        { tag: "Revisión profesional", title: "Criterio y presentación", body: "Estrategia, alcance y dónde presentar" },
      ],
      note: "IPnite no sustituye la asesoría legal. Me ayuda a prepararme.",
    },
    cost: {
      thought: "Solo necesito poner en marcha esta idea.",
      h2: "¿Cuánto me va a costar todo esto?",
      answer: "Veo tres caminos. El de en medio me deja empezar sin apostarlo todo.",
      own: { title: "Por mi cuenta", body: "Herramientas gratis. Más mucho de mi tiempo, y es difícil saber qué se me escapa." },
      drafter: { title: "El Redactor", unit: "por borrador", payment: "Pago único. Sin suscripción.", includes: ["Reivindicaciones independientes y dependientes", "Descripción técnica y resumen", "Dibujos de referencia", "Revisión de calidad", "Exportación en DOCX"], cta: "Crear mi borrador" },
      pro: { title: "Redacción profesional", body: "Depende del profesional y de mi invención. Pediría una cotización. Criterio legal completo, que vale la pena cuando sé que mi idea merece seguir." },
      fees: "Las tarifas oficiales son aparte y se pagan a la oficina donde presento.",
      feesLatam: "Las tarifas oficiales son aparte. Dependen del país donde presente.",
      feeLink: { US: "Tarifas de la USPTO", MX: "Tarifas oficiales del IMPI", AR: "Tarifas oficiales del INPI de Argentina", BR: "Tarifas oficiales del INPI de Brasil", LATAM: "Directorio de oficinas de patentes de la OMPI" },
    },
    more: {
      thought: "Más adelante, quizá:",
      h2: "¿Y si se me siguen ocurriendo ideas?",
      answer: "Entonces voy a querer todo en un solo lugar: búsqueda, redacción y mi portafolio.",
      link: "Comparar mis opciones de plan",
    },
    file: {
      h2: "¿Dónde presentaría?",
      local: {
        US: "Si presento en Estados Unidos, mi solicitud va a la USPTO.",
        MX: "Si presento en México, mi solicitud va al IMPI.",
        AR: "Si presento en Argentina, mi solicitud va al INPI.",
        BR: "Si presento en Brasil, mi solicitud va al INPI.",
        LATAM: "Mi solicitud va a la oficina de patentes del país donde presente.",
      },
      localLink: { US: "Cómo se presenta en Estados Unidos", MX: "Cómo se presenta en México", AR: "Cómo se presenta en Argentina", BR: "Cómo se presenta en Brasil", LATAM: "Encontrar la oficina de patentes de cada país" },
      abroad: "No es mi única opción. Si también quiero protección en otros países, el PCT es una forma de lograrlo.",
      abroadAr: "No es mi única opción. Argentina todavía no es miembro del PCT, así que desde Argentina presentaría directamente en cada país, reclamando mi fecha argentina dentro de los 12 meses que da el Convenio de París.",
      pctLink: "Cómo funciona la vía PCT",
    },
    final: {
      h2: "Ya sé cuál es mi siguiente paso.",
      text: "Primero, una invención. Todo lo demás, después.",
      primary: "Empezar con mi invención",
      secondary: "Primero buscar mi idea",
      other: "Ya presenté mi solicitud",
      indexLabel: "Lo que todavía quiero saber",
    },
  },

  pt: {
    title: "Como patentear uma ideia no Brasil: por onde começar | IPnite",
    description: "Tenho uma ideia. E agora? Ver se já foi patenteada, entender o que posso proteger e redigir meu pedido de patente, começando por uma invenção.",
    breadcrumb: "Tenho uma ideia. E agora?",
    hero: {
      eyebrow: "Tenho uma invenção e nenhum mapa",
      h1: ["Tenho uma ideia.", "E agora?"],
      text: "Já fiz anotações, algumas buscas e até perguntei ao ChatGPT. O que preciso agora é de um próximo passo claro: descobrir o que já existe, entender isso e transformar minha ideia em um pedido de patente.",
      primary: "Começar pela minha invenção",
      secondary: "Antes tenho dúvidas",
      cards: ["Anotações em três apps diferentes. Uma delas é um guardanapo.", "Pesquisei “como patentear uma ideia”. Abri onze abas.", "Abri o Google Patents. Não entendi o que estava vendo. Fechei.", "Perguntei ao ChatGPT. Continuo sem certeza."],
      highlight: "Dá mesmo para patentear isso?",
    },
    strip: { label: "As perguntas na minha cabeça agora", chips: ["Alguém já patenteou isso?", "Quais resultados importam de verdade?", "Posso redigir uma patente sozinho?", "É seguro usar IA?", "Preciso de um advogado?", "Quanto vai custar?"] },
    search: {
      thought: "Acho que é novo. Pesquisei no Google e não achei nada igual.",
      h2: "Mas isso quer dizer que posso patentear?",
      answer: "Talvez não. As patentes descrevem invenções em uma linguagem técnica e jurídica que eu nunca digitaria no Google. Antes de tudo, quero buscar onde as patentes realmente estão e ver o que mais se aproxima da minha ideia.",
      cta: "Buscar minha invenção",
      link: "Como funciona a busca de anterioridade",
      caption: "Minha invenção, descrita com minhas próprias palavras.",
      alt: "Formulário de divulgação da IPnite em que o inventor descreve o problema, a solução e seus componentes",
    },
    results: {
      h2: "Encontrei centenas de patentes. Quais importam de verdade?",
      answer: "Não preciso de centenas de resultados. Preciso dos mais próximos e entender o que torna minha ideia diferente de cada um.",
      leftTitle: "O que minha busca me deu",
      leftLines: ["US 2019/0xxxxxx — Bottle closure with integrated…", "EP 3 xxx xxx — Aparelho e método para a esterilização de…", "WO 2020/xxxxxx — Dispositivo portátil de tratamento de fluidos…", "BR 10 20xx 0xxxxx — Tampa com fonte de luz para…", "US 10,xxx,xxx — System for irradiating a liquid in a vessel…"],
      leftMore: "…e centenas mais, em linguagem jurídica densa.",
      rightTitle: "O que realmente preciso ver",
      cards: [
        { tag: "Mais próxima · Sobreposição alta", body: "Coincide: fonte de luz UV na tampa, bateria recarregável. Difere: ativada por um botão, não ao fechar a tampa." },
        { tag: "Relacionada · Sobreposição parcial", body: "Um sensor de fechamento que aciona uma ação quando o recipiente é vedado. Outro propósito, mecanismo parecido." },
      ],
      closing: "Essa diferença pode ser exatamente onde mora minha invenção.",
      link: "Como encontrar o que torna minha ideia diferente",
    },
    write: {
      thought: "Consigo explicar minha invenção. Não faço ideia de como transformá-la em uma patente.",
      h2: "Posso redigir uma patente sozinho?",
      answer: "Posso prepará-la passo a passo: descrever o problema que minha invenção resolve e como resolve, definir o que quero proteger e terminar com um pedido estruturado, pronto para revisão profissional.",
      leftTitle: "Minhas palavras",
      left: "“É uma tampa que limpa a água com luz UV toda vez que eu fecho, para eu não ter que lembrar de apertar nada.”",
      rightTitle: "Reivindicação estruturada",
      right: "“Um fechamento para um recipiente de líquidos, compreendendo: um alojamento; uma fonte de luz ultravioleta disposta no alojamento; e um sensor configurado para detectar o acoplamento do fechamento ao recipiente e, em resposta, ativar a fonte de luz.”",
      steps: [
        { title: "Descrever", body: "O problema técnico, a solução e as alternativas" },
        { title: "Reivindicações", body: "As características que quero proteger" },
        { title: "Relatório", body: "O relatório descritivo e o resumo" },
        { title: "Desenhos", body: "Figuras de referência que sustentam o texto" },
        { title: "QA", body: "Uma revisão de coerência e formatação" },
        { title: "Exportar", body: "Um documento pronto para revisão e depósito" },
      ],
      link: "Como funciona a redação de patentes",
    },
    ai: {
      h2: "Estou prestes a colocar uma invenção inédita em uma IA. Para onde ela vai?",
      answer: "Antes de digitar minha ideia em qualquer lugar, quero saber exatamente para onde ela vai e quem pode usá-la.",
      colGeneral: "Chat de IA de uso geral",
      colIpnite: "IPnite",
      rows: [
        { q: "Para que foi feito?", general: "Conversa aberta sobre qualquer assunto", ipnite: "Uma só tarefa: um fluxo estruturado de patentes" },
        { q: "Minha invenção é usada para treinar modelos de IA?", general: "Depende do produto e das configurações. Eu teria que conferir a política.", ipnite: "Minhas invenções, instruções, documentos e rascunhos não são usados para treinar modelos de IA." },
        { q: "De quem é minha ideia?", general: "Definido pelos termos desse produto", ipnite: "Tudo o que é gerado com minhas informações pertence a mim." },
        { q: "O que eu recebo?", general: "Respostas em uma janela de chat", ipnite: "Reivindicações, relatório descritivo e resumo, desenhos de referência, revisão de qualidade e exportação em DOCX" },
      ],
      link: "Como a IPnite trata meus dados",
    },
    attorney: {
      thought: "O orçamento do advogado veio acima do que eu esperava. Preciso disso antes de saber se vale a pena seguir?",
      h2: "Já preciso de um advogado?",
      answer: "Talvez, mais adiante. Mas posso chegar preparado, para pagar pelo critério dele e não pelo básico.",
      blocks: [
        { tag: "Eu", title: "A ideia", body: "Anotações, esboços, o que faz ela funcionar" },
        { tag: "Com a IPnite", title: "Buscar, estruturar, redigir", body: "Anterioridades entendidas, pedido redigido" },
        { tag: "Revisão profissional", title: "Critério e depósito", body: "Estratégia, escopo e onde depositar" },
      ],
      note: "A IPnite não substitui aconselhamento jurídico. Ela me ajuda a me preparar.",
    },
    cost: {
      thought: "Só preciso colocar esta ideia em movimento.",
      h2: "Quanto tudo isso vai custar?",
      answer: "Vejo três caminhos. O do meio me deixa começar sem apostar tudo.",
      own: { title: "Por conta própria", body: "Ferramentas grátis. Mais muito do meu tempo, e é difícil saber o que estou deixando passar." },
      drafter: { title: "The Drafter", unit: "por minuta", payment: "Pagamento único. Sem assinatura.", includes: ["Reivindicações independentes e dependentes", "Relatório descritivo e resumo", "Desenhos de referência", "Revisão de qualidade (QA)", "Exportação em DOCX"], cta: "Criar minha minuta" },
      pro: { title: "Redação profissional", body: "Depende do profissional e da minha invenção. Eu pediria um orçamento. Critério jurídico completo, que vale a pena quando sei que minha ideia merece seguir." },
      fees: "As taxas oficiais são à parte e pagas ao escritório onde eu depositar.",
      feesLatam: "As taxas oficiais são à parte. Dependem do país onde eu depositar.",
      feeLink: { US: "Tabela de taxas do USPTO", MX: "Taxas oficiais do IMPI", AR: "Taxas oficiais do INPI da Argentina", BR: "Taxas oficiais do INPI", LATAM: "Diretório de escritórios de patentes da OMPI" },
    },
    more: {
      thought: "Mais adiante, talvez:",
      h2: "E se eu continuar tendo ideias?",
      answer: "Aí vou querer tudo em um só lugar: busca, redação e meu portfólio.",
      link: "Comparar minhas opções de plano",
    },
    file: {
      h2: "Onde eu depositaria?",
      local: {
        US: "Se eu depositar nos Estados Unidos, meu pedido vai para o USPTO.",
        MX: "Se eu depositar no México, meu pedido vai para o IMPI.",
        AR: "Se eu depositar na Argentina, meu pedido vai para o INPI.",
        BR: "Se eu depositar no Brasil, meu pedido vai para o INPI.",
        LATAM: "Meu pedido vai para o escritório de patentes do país onde eu depositar.",
      },
      localLink: { US: "Como depositar nos Estados Unidos", MX: "Como depositar no México", AR: "Como depositar na Argentina", BR: "Como depositar no Brasil", LATAM: "Encontrar o escritório de patentes de cada país" },
      abroad: "Não é minha única opção. Se eu também quiser proteção em outros países, o PCT é um caminho.",
      abroadAr: "Não é minha única opção. A Argentina ainda não é membro do PCT, então a partir de lá eu depositaria diretamente em cada país, reivindicando a data argentina dentro dos 12 meses da Convenção de Paris.",
      pctLink: "Como funciona a via PCT",
    },
    final: {
      h2: "Agora sei qual é meu próximo passo.",
      text: "Primeiro, uma invenção. Todo o resto, depois.",
      primary: "Começar pela minha invenção",
      secondary: "Buscar minha ideia primeiro",
      other: "Já depositei meu pedido",
      indexLabel: "O que ainda quero saber",
    },
  },
} as const;

/** Disclosure line in A6, per site region, with its source. */
export const disclosureLine: Record<Locale, Partial<Record<RegionVariant, { text: string; sources: Source[] }>>> = {
  en: {
    US: { text: "If I disclose my invention myself, the United States still gives me one year to file; many other countries are stricter, so filing first keeps my options open.", sources: [S.uspto102] },
  },
  es: {
    MX: { text: "Si yo mismo divulgo mi invención, México me da 12 meses para presentar; muchos otros países no, así que presentar primero mantiene abiertas mis opciones.", sources: [src(S.impi, "IMPI — Ley Federal de Protección a la Propiedad Industrial")] },
    AR: { text: "Si yo mismo divulgo mi invención, Argentina me da un año para presentar (Ley 24.481); muchos otros países no, así que presentar primero mantiene abiertas mis opciones.", sources: [src(S.inpiAr, "INPI Argentina — Ley 24.481")] },
    LATAM: { text: "Y antes de mostrar mi idea en público, debo revisar cómo afecta la divulgación mis derechos en cada país donde podría presentar.", sources: [] },
  },
  pt: {
    BR: { text: "Se eu mesmo divulgar minha invenção, o Brasil me dá 12 meses para depositar (LPI); muitos outros países não, então depositar primeiro mantém minhas opções abertas.", sources: [S.lpi] },
  },
};

/* ------------------------------------------------------------------ */
/* Page B — "I filed my patent application. Now what?"                 */
/* ------------------------------------------------------------------ */

export interface TimelinePanel { stages: string[]; hereAfter: number; note?: string; sources: Source[] }

export const filedPage = {
  en: {
    title: "I Filed My Patent Application. Now What? | IPnite",
    description: "I filed my patent application. Now what? What happens next, what to do when the office writes back, and how to keep track of every deadline.",
    breadcrumb: "I filed my patent application. Now what?",
    hero: {
      eyebrow: "My application is in. The waiting isn't simple.",
      h1: ["I filed my patent application.", "Now what?"],
      text: "I have a filing number and a receipt. What I don't have is a clear picture of what happens next, what I'm supposed to do, or when.",
      primary: "Keep track of my application",
      secondary: "I have questions first",
      cards: ["Got a filing receipt. Saved it… somewhere.", "Nobody told me what happens next.", "Is there something I'm supposed to be doing right now?", "When will I even hear back?"],
      highlight: "What if I miss something important?",
    },
    strip: { label: "The questions in my head right now", chips: ["What happens now?", "How much time do I have?", "The office wrote back. What does it say?", "What if I miss a deadline?", "Where do I keep all of this?", "Should I file in other countries?", "Can I start selling?", "What will it cost?"] },
    process: {
      thought: "I thought filing was the hard part.",
      h2: "What happens now?",
      answer: "Filing is the start of a process, not the end. I want to see the whole path and know where my application is on it.",
      otherText: "The steps depend on the patent office where I filed. Many follow a similar path (formal review, publication, examination and a decision), but the names, order and deadlines are set by each country's law.",
      directoryLink: "Find the patent office where I filed",
      officeLink: { uspto: "How the process works at the USPTO", impi: "How the process works at IMPI", "inpi-ar": "How the process works at INPI Argentina", "inpi-br": "How the process works at INPI Brazil" },
    },
    time: {
      thought: "Every letter from the patent office seems to come with a deadline. And they're not all the same.",
      h2: "How do I know how much time I have?",
      answer: "Deadlines depend on the office and on what it's asking for. I need every date in one place, with an alert before it's too late, not a note in my phone.",
      card: [
        { label: "Response due", when: "in 18 days", hot: true },
        { label: "Annuity due", when: "in 4 months" },
        { label: "Deadline to file abroad", when: "in 7 months" },
      ],
      cardTitle: "My dates",
      cta: "Track my dates",
      link: "How I can manage my application",
    },
    office: {
      thought: "Pages of legal language, citations to other patents, and a deadline at the end.",
      h2: "The office wrote back. What does it even say?",
      answer: "Before I talk to my attorney, I want to understand what the office is asking for and how long I have to respond. With IPnite I can have the office's notices reach my project and answer the examiner from there.",
      period: "How long I have depends on the office and on what it's asking for, and it's stated in the notice itself. I take that date from the notice, not from memory.",
    },
    missed: {
      thought: "That's exactly what I can't afford to find out the hard way.",
      h2: "What if I miss a deadline?",
      line: "Missing a deadline can put my application at risk. Whether it can be recovered, and at what cost, depends on the office's rules.",
      closing: "That's why I want alerts, not memory.",
    },
    keep: {
      thought: "The filing receipt is in my email. The drawings are on my laptop. The office letter is a PDF somewhere.",
      h2: "Where do I keep all of this?",
      answer: "I want my application, documents, dates and alerts in one workspace. No spreadsheets, no digging through email.",
      alt: "IPnite workspace with the invention project and its sections",
      link: "How I can keep everything in one place",
    },
    abroad: {
      thought: "What if this works outside the country where I filed?",
      h2: "Should I file in other countries too?",
      answer: "There's a window to decide, and it doesn't stay open forever. I want to know when it closes and where it's worth investing.",
      paris: "In general, I have 12 months from my first filing to file in other countries and claim that earlier date.",
      pct: "The PCT lets me file one international application within that window and choose countries later, around 30 months from my first filing (31 in some offices).",
      arNote: "Argentina isn't a PCT member yet; from there, filing abroad goes directly to each country with Paris Convention priority.",
      link: "How the PCT route works",
    },
    selling: {
      thought: "It says “patent pending.” Does that mean I'm safe?",
      h2: "Can I start selling my product now?",
      answer: "A pending application doesn't tell me whether my product uses something someone else has already patented. Before I launch, I want an initial look at that risk.",
      fto: "IPnite offers freedom-to-operate (FTO) analyses: as a per-jurisdiction add-on on Startup and included on Institutional.",
      pendingLink: "What “patent pending” actually means",
    },
    attorney: {
      thought: "Maybe. But it's my invention.",
      h2: "Does my attorney handle all of this?",
      answer: "Maybe they do. But I want to know where my application stands without having to ask, and have everything in one place to share with them.",
      collab: "On Inventor I can invite one external collaborator, like my attorney; on Startup, up to 3 per project.",
    },
    cost: {
      thought: "I don't want another big bill. I just don't want to lose track.",
      h2: "What will staying on top of this cost?",
      answer: "One application, every date and document in one place.",
      plans: { inventor: "If I have one application to keep track of.", startup: "If I have several applications.", institutional: "If I manage applications for others." },
      cta: "Keep track of my application",
      link: "Compare my plan options",
      feesOther: "Official fees are separate. They depend on the office where I filed.",
    },
    mine: { h2: "My office", guide: { uspto: "Patents in the United States, step by step", impi: "Patents in Mexico, step by step", "inpi-ar": "Patents in Argentina, step by step", "inpi-br": "Patents in Brazil, step by step" }, directory: "Contact details for every national patent office" },
    final: {
      h2: "Now I know what's coming.",
      text: "Every date, every document, one place.",
      primary: "Keep track of my application",
      other: "I have another idea",
      indexLabel: "What I still want to know",
    },
  },

  es: {
    title: "Presenté mi solicitud de patente. ¿Qué sigue? | IPnite",
    description: "Presenté mi solicitud de patente. ¿Qué sigue? Qué pasa después, qué hacer cuando la oficina me responde y cómo no perder ningún plazo.",
    breadcrumb: "Presenté mi solicitud. ¿Qué sigue?",
    hero: {
      eyebrow: "Mi solicitud ya entró. La espera no es sencilla.",
      h1: ["Presenté mi solicitud de patente.", "¿Qué sigue?"],
      text: "Tengo un número de expediente y un acuse. Lo que no tengo es una idea clara de qué pasa ahora, qué me toca hacer ni cuándo.",
      primary: "Dar seguimiento a mi solicitud",
      secondary: "Primero tengo dudas",
      cards: ["Me llegó el acuse. Lo guardé… en algún lado.", "Nadie me dijo qué pasa después.", "¿Hay algo que debería estar haciendo ahorita?", "¿Cuándo me van a responder?"],
      highlight: "¿Y si se me pasa algo importante?",
    },
    strip: { label: "Las preguntas que tengo en la cabeza", chips: ["¿Qué pasa ahora?", "¿Cuánto tiempo tengo?", "La oficina me respondió. ¿Qué dice?", "¿Y si se me pasa un plazo?", "¿Dónde guardo todo esto?", "¿Presento en otros países?", "¿Ya puedo vender?", "¿Cuánto me va a costar?"] },
    process: {
      thought: "Pensé que presentar era lo difícil.",
      h2: "¿Qué pasa ahora?",
      answer: "Presentar es el inicio de un proceso, no el final. Quiero ver todo el camino y saber en qué punto está mi solicitud.",
      otherText: "Los pasos dependen de la oficina de patentes donde presenté. Muchas siguen un camino parecido (revisión de forma, publicación, examen y una decisión), pero los nombres, el orden y los plazos los fija la ley de cada país.",
      directoryLink: "Encontrar la oficina de patentes donde presenté",
      officeLink: { uspto: "Cómo funciona el proceso en la USPTO", impi: "Cómo funciona el proceso en el IMPI", "inpi-ar": "Cómo funciona el proceso en el INPI de Argentina", "inpi-br": "Cómo funciona el proceso en el INPI de Brasil" },
    },
    time: {
      thought: "Cada carta de la oficina parece venir con un plazo. Y no todos son iguales.",
      h2: "¿Cómo sé cuánto tiempo tengo?",
      answer: "Los plazos dependen de la oficina y de lo que me pide. Necesito todas las fechas en un solo lugar, con una alerta antes de que sea tarde, no una nota en el celular.",
      card: [
        { label: "Respuesta pendiente", when: "en 18 días", hot: true },
        { label: "Pago de anualidad", when: "en 4 meses" },
        { label: "Plazo para presentar en el extranjero", when: "en 7 meses" },
      ],
      cardTitle: "Mis fechas",
      cta: "Seguir mis fechas",
      link: "Cómo puedo gestionar mi solicitud",
    },
    office: {
      thought: "Páginas de lenguaje legal, citas a otras patentes y un plazo al final.",
      h2: "La oficina me respondió. ¿Qué dice?",
      answer: "Antes de hablar con mi abogado, quiero entender qué me pide la oficina y cuánto tiempo tengo para responder. Con IPnite puedo recibir las notificaciones de la oficina en mi proyecto y responder al examinador desde ahí.",
      period: "El tiempo que tengo depende de la oficina y de lo que me pide, y viene indicado en la propia notificación. Tomo esa fecha de la notificación, no de memoria.",
    },
    missed: {
      thought: "Eso es justo lo que no me puedo dar el lujo de descubrir por las malas.",
      h2: "¿Y si se me pasa un plazo?",
      line: "Perder un plazo puede poner en riesgo mi solicitud. Si se puede recuperar, y a qué costo, depende de las reglas de cada oficina.",
      closing: "Por eso quiero alertas, no memoria.",
    },
    keep: {
      thought: "El acuse está en mi correo. Los dibujos, en mi laptop. La carta de la oficina es un PDF en algún lado.",
      h2: "¿Dónde guardo todo esto?",
      answer: "Quiero mi solicitud, documentos, fechas y alertas en un solo espacio de trabajo. Sin hojas de cálculo ni búsquedas en el correo.",
      alt: "Espacio de trabajo de IPnite con el proyecto de la invención y sus secciones",
      link: "Cómo tener todo en un solo lugar",
    },
    abroad: {
      thought: "¿Y si esto funciona fuera del país donde presenté?",
      h2: "¿Debo presentar también en otros países?",
      answer: "Hay una ventana para decidir y no se queda abierta para siempre. Quiero saber cuándo se cierra y dónde vale la pena invertir.",
      paris: "En general, tengo 12 meses desde mi primera presentación para presentar en otros países y reclamar esa fecha anterior.",
      pct: "El PCT me permite presentar una sola solicitud internacional dentro de esa ventana y elegir países después, alrededor de los 30 meses desde mi primera presentación (31 en algunas oficinas).",
      arNote: "Argentina todavía no es miembro del PCT; desde ahí, presentar en el extranjero se hace directo en cada país, con la prioridad del Convenio de París.",
      link: "Cómo funciona la vía PCT",
    },
    selling: {
      thought: "Dice “patente en trámite”. ¿Eso significa que ya estoy protegido?",
      h2: "¿Ya puedo empezar a vender mi producto?",
      answer: "Una solicitud en trámite no me dice si mi producto usa algo que otra persona ya patentó. Antes de lanzarlo, quiero una primera revisión de ese riesgo.",
      fto: "IPnite ofrece análisis de libertad de operación (FTO): como complemento por jurisdicción en Startup e incluido en Institucional.",
      pendingLink: "Qué significa de verdad “patente en trámite”",
    },
    attorney: {
      thought: "Quizá. Pero es mi invención.",
      h2: "¿Mi abogado se encarga de todo esto?",
      answer: "Quizá sí. Pero quiero saber en qué va mi solicitud sin tener que preguntar, y tener todo en un solo lugar para compartírselo.",
      collab: "En Inventor puedo invitar a un colaborador externo, como mi abogado; en Startup, hasta 3 por proyecto.",
    },
    cost: {
      thought: "No quiero otra cuenta grande. Solo no quiero perder el hilo.",
      h2: "¿Cuánto me cuesta estar al pendiente de esto?",
      answer: "Una solicitud, cada fecha y cada documento en un solo lugar.",
      plans: { inventor: "Si tengo una solicitud que seguir.", startup: "Si tengo varias solicitudes.", institutional: "Si gestiono solicitudes de otras personas." },
      cta: "Dar seguimiento a mi solicitud",
      link: "Comparar mis opciones de plan",
      feesOther: "Las tarifas oficiales son aparte. Dependen de la oficina donde presenté.",
    },
    mine: { h2: "Mi oficina", guide: { uspto: "Patentes en Estados Unidos, paso a paso", impi: "Patentes en México, paso a paso", "inpi-ar": "Patentes en Argentina, paso a paso", "inpi-br": "Patentes en Brasil, paso a paso" }, directory: "Datos de contacto de cada oficina nacional de patentes" },
    final: {
      h2: "Ya sé lo que viene.",
      text: "Cada fecha, cada documento, un solo lugar.",
      primary: "Dar seguimiento a mi solicitud",
      other: "Tengo otra idea",
      indexLabel: "Lo que todavía quiero saber",
    },
  },

  pt: {
    title: "Depositei meu pedido de patente. E agora? | IPnite",
    description: "Depositei meu pedido de patente. E agora? O que acontece depois, o que fazer quando o escritório responde e como acompanhar cada prazo.",
    breadcrumb: "Depositei meu pedido. E agora?",
    hero: {
      eyebrow: "Meu pedido foi depositado. A espera não é simples.",
      h1: ["Depositei meu pedido de patente.", "E agora?"],
      text: "Tenho um número de processo e um comprovante. O que não tenho é uma visão clara do que acontece agora, do que preciso fazer, nem de quando.",
      primary: "Acompanhar meu pedido",
      secondary: "Antes tenho dúvidas",
      cards: ["Recebi o comprovante de depósito. Salvei… em algum lugar.", "Ninguém me disse o que vem depois.", "Tem algo que eu deveria estar fazendo agora?", "Quando vou ter alguma resposta?"],
      highlight: "E se eu perder algo importante?",
    },
    strip: { label: "As perguntas na minha cabeça agora", chips: ["O que acontece agora?", "Quanto tempo eu tenho?", "O escritório respondeu. O que diz?", "E se eu perder um prazo?", "Onde guardo tudo isso?", "Deposito em outros países?", "Já posso vender?", "Quanto vai custar?"] },
    process: {
      thought: "Achei que depositar era a parte difícil.",
      h2: "O que acontece agora?",
      answer: "Depositar é o começo de um processo, não o fim. Quero ver o caminho inteiro e saber em que ponto meu pedido está.",
      otherText: "As etapas dependem do escritório de patentes onde depositei. Muitos seguem um caminho parecido (exame formal, publicação, exame e uma decisão), mas os nomes, a ordem e os prazos são definidos pela lei de cada país.",
      directoryLink: "Encontrar o escritório de patentes onde depositei",
      officeLink: { uspto: "Como funciona o processo no USPTO", impi: "Como funciona o processo no IMPI", "inpi-ar": "Como funciona o processo no INPI da Argentina", "inpi-br": "Como funciona o processo no INPI" },
    },
    time: {
      thought: "Cada carta do escritório parece vir com um prazo. E eles não são todos iguais.",
      h2: "Como sei quanto tempo eu tenho?",
      answer: "Os prazos dependem do escritório e do que ele pede. Preciso de todas as datas em um só lugar, com um alerta antes que seja tarde, e não uma nota no celular.",
      card: [
        { label: "Resposta pendente", when: "em 18 dias", hot: true },
        { label: "Pagamento de anuidade", when: "em 4 meses" },
        { label: "Prazo para depositar no exterior", when: "em 7 meses" },
      ],
      cardTitle: "Minhas datas",
      cta: "Acompanhar minhas datas",
      link: "Como posso gerenciar meu pedido",
    },
    office: {
      thought: "Páginas de linguagem jurídica, citações de outras patentes e um prazo no final.",
      h2: "O escritório respondeu. O que isso quer dizer?",
      answer: "Antes de falar com meu advogado, quero entender o que o escritório está pedindo e quanto tempo tenho para responder. Com a IPnite, as notificações do escritório chegam ao meu projeto e posso responder ao examinador por lá.",
      period: "O tempo que tenho depende do escritório e do que ele pede, e vem indicado na própria notificação. Pego essa data da notificação, não da memória.",
    },
    missed: {
      thought: "É exatamente o que não posso descobrir do jeito difícil.",
      h2: "E se eu perder um prazo?",
      line: "Perder um prazo pode colocar meu pedido em risco. Se dá para recuperar, e a que custo, depende das regras de cada escritório.",
      closing: "Por isso quero alertas, não memória.",
    },
    keep: {
      thought: "O comprovante está no meu e-mail. Os desenhos, no laptop. A carta do escritório é um PDF em algum lugar.",
      h2: "Onde guardo tudo isso?",
      answer: "Quero meu pedido, documentos, datas e alertas em um só espaço de trabalho. Sem planilhas, sem garimpar e-mails.",
      alt: "Espaço de trabalho da IPnite com o projeto da invenção e suas seções",
      link: "Como manter tudo em um só lugar",
    },
    abroad: {
      thought: "E se isso funcionar fora do país onde depositei?",
      h2: "Devo depositar em outros países também?",
      answer: "Existe uma janela para decidir, e ela não fica aberta para sempre. Quero saber quando ela fecha e onde vale a pena investir.",
      paris: "Em geral, tenho 12 meses a partir do primeiro depósito para depositar em outros países e reivindicar essa data anterior.",
      pct: "O PCT me permite depositar um único pedido internacional dentro dessa janela e escolher os países depois, por volta de 30 meses do primeiro depósito (31 em alguns escritórios).",
      arNote: "A Argentina ainda não é membro do PCT; a partir de lá, o depósito no exterior é feito diretamente em cada país, com a prioridade da Convenção de Paris.",
      link: "Como funciona a via PCT",
    },
    selling: {
      thought: "Diz “patente pendente”. Isso quer dizer que estou protegido?",
      h2: "Já posso começar a vender meu produto?",
      answer: "Um pedido pendente não me diz se meu produto usa algo que outra pessoa já patenteou. Antes de lançar, quero uma primeira análise desse risco.",
      fto: "A IPnite oferece análises de liberdade de operação (FTO): como adicional por jurisdição no Startup e incluídas no Institucional.",
      pendingLink: "O que “patente pendente” significa de verdade",
    },
    attorney: {
      thought: "Talvez. Mas a invenção é minha.",
      h2: "Meu advogado cuida de tudo isso?",
      answer: "Talvez sim. Mas quero saber como está meu pedido sem precisar perguntar, e ter tudo em um só lugar para compartilhar com ele.",
      collab: "No Inventor posso convidar um colaborador externo, como meu advogado; no Startup, até 3 por projeto.",
    },
    cost: {
      thought: "Não quero outra conta grande. Só não quero perder o fio.",
      h2: "Quanto custa ficar em dia com isso?",
      answer: "Um pedido, cada data e cada documento em um só lugar.",
      plans: { inventor: "Se tenho um pedido para acompanhar.", startup: "Se tenho vários pedidos.", institutional: "Se gerencio pedidos de outras pessoas." },
      cta: "Acompanhar meu pedido",
      link: "Comparar minhas opções de plano",
      feesOther: "As taxas oficiais são à parte. Dependem do escritório onde depositei.",
    },
    mine: { h2: "Meu escritório", guide: { uspto: "Patentes nos Estados Unidos, passo a passo", impi: "Patentes no México, passo a passo", "inpi-ar": "Patentes na Argentina, passo a passo", "inpi-br": "Patentes no Brasil, passo a passo" }, directory: "Contatos de cada escritório nacional de patentes" },
    final: {
      h2: "Agora sei o que vem pela frente.",
      text: "Cada data, cada documento, um só lugar.",
      primary: "Acompanhar meu pedido",
      other: "Tenho outra ideia",
      indexLabel: "O que ainda quero saber",
    },
  },
} as const;

/** B3 timelines per office. Stages come from the cited sources; "hereAfter" marks the "I'm here" position. */
export const timelines: Record<Locale, Record<Exclude<Office, "other">, TimelinePanel>> = {
  en: {
    uspto: { stages: ["Filing", "Examination of my nonprovisional application", "Examiner communications and my responses", "Grant or refusal", "Maintenance fees at 3½, 7½ and 11½ years after grant"], hereAfter: 0, note: "If I filed a provisional, it's never examined: I have 12 months to file the nonprovisional (or a PCT application) that claims it.", sources: [S.usptoBasics, S.usptoProvisional, S.uspto41] },
    impi: { stages: ["Filing", "Formal examination", "Publication, after 18 months", "Substantive examination", "Grant or refusal"], hereAfter: 0, note: "If I filed a Mexican provisional, it isn't published or examined: I have a non-extendable 12 months to file the complete application.", sources: [src(S.impi, "IMPI — Federal Law for the Protection of Industrial Property")] },
    "inpi-ar": { stages: ["Filing", "Formal examination", "Substantive examination", "Grant or refusal"], hereAfter: 0, sources: [src(S.inpiAr, "INPI Argentina — Law 24,481")] },
    "inpi-br": { stages: ["Filing", "18 months of secrecy", "Publication", "My request for examination, within 36 months of filing", "Technical examination", "Decision"], hereAfter: 0, note: "Examination in Brazil isn't automatic: I have to request it within 36 months of filing.", sources: [S.lpi, S.inpiBr] },
  },
  es: {
    uspto: { stages: ["Presentación", "Examen de mi solicitud definitiva (nonprovisional)", "Comunicaciones del examinador y mis respuestas", "Concesión o rechazo", "Tasas de mantenimiento a los 3½, 7½ y 11½ años de la concesión"], hereAfter: 0, note: "Si presenté una provisional, nunca se examina: tengo 12 meses para presentar la solicitud definitiva (o una PCT) que la reclame.", sources: [src(S.usptoBasics, "USPTO — Patent basics (en inglés)"), src(S.usptoProvisional, "USPTO — Provisional application (en inglés)"), S.uspto41] },
    impi: { stages: ["Presentación", "Examen de forma", "Publicación, después de 18 meses", "Examen de fondo", "Otorgamiento o negativa"], hereAfter: 0, note: "Si presenté una solicitud provisional, no se publica ni se examina: tengo 12 meses improrrogables para presentar la solicitud completa.", sources: [src(S.impi, "IMPI — Ley Federal de Protección a la Propiedad Industrial")] },
    "inpi-ar": { stages: ["Presentación", "Examen formal", "Examen de fondo", "Concesión o denegación"], hereAfter: 0, sources: [src(S.inpiAr, "INPI Argentina — Ley 24.481")] },
    "inpi-br": { stages: ["Depósito (presentación)", "18 meses en secreto", "Publicación", "Mi solicitud de examen, dentro de los 36 meses desde la presentación", "Examen técnico", "Decisión"], hereAfter: 0, note: "En Brasil el examen no es automático: tengo que pedirlo dentro de los 36 meses siguientes a la presentación.", sources: [src(S.lpi, "Ley 9.279/1996 (LPI) · planalto.gov.br (en portugués)"), src(S.inpiBr, "INPI Brasil (en portugués)")] },
  },
  pt: {
    uspto: { stages: ["Depósito", "Exame do meu pedido definitivo (nonprovisional)", "Comunicações do examinador e minhas respostas", "Concessão ou recusa", "Taxas de manutenção aos 3,5, 7,5 e 11,5 anos após a concessão"], hereAfter: 0, note: "Se depositei um provisório, ele nunca é examinado: tenho 12 meses para depositar o pedido definitivo (ou um PCT) que o reivindique.", sources: [src(S.usptoBasics, "USPTO — Patent basics (em inglês)"), src(S.usptoProvisional, "USPTO — Provisional application (em inglês)"), S.uspto41] },
    impi: { stages: ["Depósito", "Exame formal", "Publicação, após 18 meses", "Exame de mérito", "Concessão ou recusa"], hereAfter: 0, note: "Se depositei um provisório mexicano, ele não é publicado nem examinado: tenho 12 meses improrrogáveis para depositar o pedido completo.", sources: [src(S.impi, "IMPI — Lei Federal de Proteção à Propriedade Industrial (em espanhol)")] },
    "inpi-ar": { stages: ["Depósito", "Exame formal", "Exame de mérito", "Concessão ou indeferimento"], hereAfter: 0, sources: [src(S.inpiAr, "INPI Argentina — Lei 24.481 (em espanhol)")] },
    "inpi-br": { stages: ["Depósito", "Sigilo de 18 meses", "Publicação", "Meu pedido de exame, em até 36 meses do depósito", "Exame técnico", "Decisão"], hereAfter: 0, note: "No Brasil o exame não é automático: preciso pedi-lo em até 36 meses do depósito.", sources: [S.lpi, S.inpiBr] },
  },
};

/** B9 per office. Only the USPTO line states a rule; the rest stay neutral because no reviewed source covers them. */
export const pendingRights: Record<Locale, Record<Office, { text: string; sources: Source[] }>> = {
  en: {
    uspto: { text: "I can't sue for infringement until the patent is granted. After publication, I may later get a reasonable royalty, but only if the granted claims are substantially identical to the published ones and the other party had actual notice.", sources: [S.usc154] },
    impi: { text: "What my pending application protects before grant depends on Mexican law; I confirm it with IMPI or a professional before I launch.", sources: [S.impi] },
    "inpi-ar": { text: "What my pending application protects before grant depends on Argentine law; I confirm it with INPI or a professional before I launch.", sources: [S.inpiAr] },
    "inpi-br": { text: "What my pending application protects before grant depends on Brazilian law; I confirm it with INPI or a professional before I launch.", sources: [S.inpiBr] },
    other: { text: "What a pending application protects depends on the country's law.", sources: [] },
  },
  es: {
    uspto: { text: "No puedo demandar por infracción hasta que se conceda la patente. Después de la publicación podría obtener más adelante una regalía razonable, pero solo si las reivindicaciones concedidas son sustancialmente idénticas a las publicadas y la otra parte tuvo conocimiento efectivo.", sources: [src(S.usc154, "35 U.S.C. 154(d) · govinfo.gov (en inglés)")] },
    impi: { text: "Lo que protege mi solicitud en trámite antes del otorgamiento depende de la ley mexicana; lo confirmo con el IMPI o con un profesional antes de lanzar.", sources: [S.impi] },
    "inpi-ar": { text: "Lo que protege mi solicitud en trámite antes de la concesión depende de la ley argentina; lo confirmo con el INPI o con un profesional antes de lanzar.", sources: [S.inpiAr] },
    "inpi-br": { text: "Lo que protege mi solicitud en trámite antes de la concesión depende de la ley brasileña; lo confirmo con el INPI o con un profesional antes de lanzar.", sources: [src(S.inpiBr, "INPI Brasil (en portugués)")] },
    other: { text: "Lo que protege una solicitud en trámite depende de la ley de cada país.", sources: [] },
  },
  pt: {
    uspto: { text: "Não posso processar por infração até a patente ser concedida. Depois da publicação, posso obter mais tarde uma royalty razoável, mas só se as reivindicações concedidas forem substancialmente idênticas às publicadas e a outra parte tiver tido ciência efetiva.", sources: [src(S.usc154, "35 U.S.C. 154(d) · govinfo.gov (em inglês)")] },
    impi: { text: "O que meu pedido pendente protege antes da concessão depende da lei mexicana; confirmo com o IMPI ou com um profissional antes de lançar.", sources: [S.impi] },
    "inpi-ar": { text: "O que meu pedido pendente protege antes da concessão depende da lei argentina; confirmo com o INPI ou com um profissional antes de lançar.", sources: [S.inpiAr] },
    "inpi-br": { text: "O que meu pedido pendente protege antes da concessão depende da LPI; confirmo com o INPI ou com um profissional antes de lançar.", sources: [S.inpiBr] },
    other: { text: "O que um pedido pendente protege depende da lei de cada país.", sources: [] },
  },
};

/** B11 fees line and B12 office line per office. */
export const officeLines: Record<Locale, { fees: Record<Exclude<Office, "other">, string>; feeLink: Record<Exclude<Office, "other">, string>; mine: Record<Office, string> }> = {
  en: {
    fees: { uspto: "Official fees, like maintenance fees, are separate and paid to the USPTO.", impi: "Official fees, like annuities, are separate and paid to IMPI.", "inpi-ar": "Official fees, like annuities, are separate and paid to INPI Argentina.", "inpi-br": "Official fees, like annuities, are separate and paid to INPI Brazil." },
    feeLink: { uspto: "USPTO fee schedule", impi: "IMPI official fees", "inpi-ar": "INPI Argentina official fees", "inpi-br": "INPI Brazil official fees" },
    mine: { uspto: "My application is with the USPTO.", impi: "My application is with IMPI.", "inpi-ar": "My application is with INPI Argentina.", "inpi-br": "My application is with INPI Brazil.", other: "My application is with the patent office of the country where I filed." },
  },
  es: {
    fees: { uspto: "Las tarifas oficiales, como las tasas de mantenimiento, son aparte y se pagan a la USPTO.", impi: "Las tarifas oficiales, como las anualidades, son aparte y se pagan al IMPI.", "inpi-ar": "Las tarifas oficiales, como las anualidades, son aparte y se pagan al INPI de Argentina.", "inpi-br": "Las tarifas oficiales, como las anualidades, son aparte y se pagan al INPI de Brasil." },
    feeLink: { uspto: "Tarifas de la USPTO", impi: "Tarifas oficiales del IMPI", "inpi-ar": "Tarifas oficiales del INPI de Argentina", "inpi-br": "Tarifas oficiales del INPI de Brasil" },
    mine: { uspto: "Mi solicitud está en la USPTO.", impi: "Mi solicitud está en el IMPI.", "inpi-ar": "Mi solicitud está en el INPI de Argentina.", "inpi-br": "Mi solicitud está en el INPI de Brasil.", other: "Mi solicitud está en la oficina de patentes del país donde presenté." },
  },
  pt: {
    fees: { uspto: "As taxas oficiais, como as de manutenção, são à parte e pagas ao USPTO.", impi: "As taxas oficiais, como as anuidades, são à parte e pagas ao IMPI.", "inpi-ar": "As taxas oficiais, como as anuidades, são à parte e pagas ao INPI da Argentina.", "inpi-br": "As taxas oficiais, como as anuidades, são à parte e pagas ao INPI." },
    feeLink: { uspto: "Tabela de taxas do USPTO", impi: "Taxas oficiais do IMPI", "inpi-ar": "Taxas oficiais do INPI da Argentina", "inpi-br": "Taxas oficiais do INPI" },
    mine: { uspto: "Meu pedido está no USPTO.", impi: "Meu pedido está no IMPI.", "inpi-ar": "Meu pedido está no INPI da Argentina.", "inpi-br": "Meu pedido está no INPI do Brasil.", other: "Meu pedido está no escritório de patentes do país onde depositei." },
  },
};

/** International lines in B8, cited. */
export const abroadSources: Record<Locale, Source[]> = {
  en: [S.wipoPct, S.pctStates],
  es: [{ label: "OMPI — PCT", url: "https://www.wipo.int/pct/es/" }, src(S.pctStates, "OMPI — Estados contratantes del PCT (en inglés)")],
  pt: [src(S.wipoPct, "OMPI — PCT (em inglês)"), src(S.pctStates, "OMPI — Estados contratantes do PCT (em inglês)")],
};

export const directoryLabel = { en: "WIPO directory of national patent offices", es: "Directorio de oficinas de patentes de la OMPI (en inglés)", pt: "Diretório de escritórios de patentes da OMPI (em inglês)" } as const;
