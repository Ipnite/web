import type { ArticleCopy } from "./articles";

const USPTO_BASICS = { label: "USPTO — Conceptos básicos de patentes (en inglés)", url: "https://www.uspto.gov/patents/basics" };
const USPTO_PROVISIONAL = { label: "USPTO — Solicitud provisional (en inglés)", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" };
const USPTO_FEES = { label: "USPTO — Tarifas vigentes (en inglés)", url: "https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule" };
const IMPI = { label: "IMPI — Instituto Mexicano de la Propiedad Industrial", url: "https://www.gob.mx/impi" };
const WIPO_PCT = { label: "OMPI — El sistema PCT", url: "https://www.wipo.int/pct/es/" };
const MPEP_608 = { label: "USPTO — MPEP 608.02, dibujos (en inglés)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" };
const MPEP_2100 = { label: "USPTO — MPEP capítulo 2100, patentabilidad (en inglés)", url: "https://www.uspto.gov/web/offices/pac/mpep/mpep-2100.html" };
const GOOGLE_PATENTS = { label: "Google Patents", url: "https://patents.google.com/" };
const ESPACENET = { label: "OEP — Espacenet", url: "https://worldwide.espacenet.com/" };
const PATENTSCOPE = { label: "OMPI — PATENTSCOPE", url: "https://patentscope.wipo.int/" };

export const articlesEs: Record<string, ArticleCopy> = {
  "how-to-write-a-patent-application": {
    title: "Cómo redactar una solicitud de patente paso a paso | IPnite",
    description: "Las partes de una solicitud de patente, el orden que funciona para redactarlas y los errores que la debilitan. Guía práctica con fuentes oficiales.",
    h1: "¿Cómo redacto una solicitud de patente?",
    lead: "Empieza por la invención, no por el formulario. Describe el problema y cómo funciona tu solución, define en las reivindicaciones lo que quieres proteger y respalda ambas cosas con dibujos. Esta guía explica el orden que funciona y lo que esperan las oficinas de patentes.",
    sections: [
      {
        heading: "¿Qué lleva una solicitud de patente?",
        paragraphs: ["Casi todas las oficinas piden las mismas partes: un título, una descripción, una o más reivindicaciones, un resumen y, cuando ayudan a entender la invención, dibujos. El Reglamento del PCT fija el orden habitual de la descripción: campo técnico, antecedentes, la divulgación del problema y su solución, una breve descripción de los dibujos, la mejor manera de llevar a cabo la invención y su aplicación industrial."],
        bullets: ["Descripción: explica la invención para que alguien del campo pueda reproducirla", "Reivindicaciones: definen el alcance legal de la protección", "Resumen: una síntesis técnica breve que se usa en las búsquedas", "Dibujos: figuras con números de referencia que coinciden con el texto"],
      },
      {
        heading: "¿En qué orden la redacto?",
        paragraphs: ["Redactar las partes en el orden en que aparecen en el papel casi nunca es lo mejor. Esta secuencia mantiene la solicitud coherente:"],
        bullets: ["1. Anota el problema, cómo funciona tu solución, sus componentes y todas las alternativas que se te ocurran", "2. Busca antecedentes y anota qué hace diferente a tu invención", "3. Redacta las reivindicaciones: primero la independiente, con las características esenciales, y luego las dependientes, como posiciones de respaldo", "4. Escribe la descripción detallada de modo que respalde cada elemento de cada reivindicación, con modalidades y variantes", "5. Prepara los dibujos y usa los mismos números de referencia en el texto", "6. Agrega el campo técnico, los antecedentes y el resumen de la invención", "7. Deja el resumen técnico para el final; en el PCT, de preferencia entre 50 y 150 palabras", "8. Revisa terminología, numeración y respaldo de principio a fin"],
      },
      {
        heading: "¿Qué tan detallada debe ser la descripción?",
        paragraphs: ["Lo bastante para que una persona experta en el campo pueda fabricar y usar la invención. En Estados Unidos, el 35 U.S.C. 112(a) exige una descripción escrita de la invención y de la forma de fabricarla y usarla, además del mejor modo que conciba el inventor. Lo que falte en la fecha de presentación es difícil o imposible de agregar después sin perder esa fecha, así que describe variantes, materiales, rangos y ejemplos, no solo tu prototipo."],
      },
      {
        heading: "¿Cómo redacto las reivindicaciones?",
        paragraphs: ["Las reivindicaciones deben señalar de forma particular y distinta lo que consideras tu invención (35 U.S.C. 112(b)). Cada reivindicación independiente enumera las características esenciales que, juntas, resuelven el problema; las dependientes agregan características más específicas que pueden salvar la solicitud si la reivindicación amplia choca con un antecedente. Usa un solo término por elemento y mantenlo idéntico en reivindicaciones, descripción y dibujos."],
      },
      {
        heading: "¿Qué errores debilitan una solicitud?",
        paragraphs: [],
        bullets: ["Describir solo el prototipo en lugar de la solución general y sus variantes", "Cambiar el nombre de un elemento entre secciones", "Reivindicar características que la descripción nunca explica", "Números de referencia en los dibujos que no aparecen en el texto", "Explicar las ventajas, pero no cómo las logra la invención", "Hacer pública la invención antes de presentar"],
      },
      {
        heading: "¿Cada oficina pide algo distinto?",
        paragraphs: ["Las partes centrales son las mismas, pero cambian el idioma y las reglas de forma. La USPTO trabaja en inglés, el IMPI y el INPI de Argentina en español, y el INPI de Brasil en portugués. Los dibujos, márgenes, formato de página y tarifas también siguen las reglas de cada oficina, como la Regla 11 del PCT para las solicitudes internacionales, así que revisa los requisitos de la oficina donde vas a presentar."],
      },
      {
        heading: "¿Puedo redactarla yo mismo o necesito un profesional?",
        paragraphs: ["Puedes preparar por tu cuenta una solicitud completa y estructurada, y muchas oficinas aceptan que el inventor presente directamente, aunque algunas exigen un representante local a los solicitantes extranjeros. Donde más aporta un abogado o agente de patentes es en el alcance de las reivindicaciones y en la estrategia, así que una ruta práctica es llegar con un borrador bien organizado y pagar por su criterio, no por lo básico. En IPnite, el Agente de descubrimiento estructura tu divulgación y hace la búsqueda de antecedentes, y el Redactor prepara las reivindicaciones, la descripción, los dibujos y la revisión de calidad, y exporta un DOCX para tu revisión. No sustituye la asesoría legal."],
      },
    ],
    sources: [{ label: "Código de EE. UU. (govinfo.gov) — 35 U.S.C. 112, descripción (en inglés)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title35/html/USCODE-2023-title35-partII-chap11-sec112.htm" }, { label: "OMPI — Regla 5 del PCT, la descripción (en inglés)", url: "https://www.wipo.int/pct/en/texts/rules/r5.html" }, { label: "OMPI — Regla 8 del PCT, el resumen (en inglés)", url: "https://www.wipo.int/pct/en/texts/rules/r8.html" }, { label: "OMPI — Regla 11 del PCT, requisitos materiales (en inglés)", url: "https://www.wipo.int/pct/en/texts/rules/r11.html" }, { label: "IMPI — Instituto Mexicano de la Propiedad Industrial", url: "https://www.gob.mx/impi" }],
  },

  "how-to-patent-an-idea": {
    title: "Cómo patentar una idea: guía paso a paso | IPnite",
    description: "Una idea se vuelve patentable cuando es una solución técnica concreta. Conoce los pasos: documentar, buscar antecedentes, redactar, presentar y proteger fuera.",
    h1: "Cómo patentar una idea",
    lead: "No puedes patentar una idea abstracta, pero sí la solución técnica concreta que hay detrás. Este es el camino de la idea a una solicitud presentada.",
    sections: [
      {
        heading: "1. Convierte la idea en una invención",
        paragraphs: [
          "Las oficinas de patentes protegen invenciones: soluciones técnicas a problemas técnicos que se pueden fabricar o usar. «Una app para agricultores» es una idea; un método concreto para procesar datos de sensores de suelo y programar el riego es una invención. Escribe el problema, cómo funciona tu solución, sus componentes esenciales y las alternativas que se te ocurran.",
          "Mantén la invención en confidencialidad mientras te preparas. En la mayoría de los países, una divulgación pública antes de presentar puede destruir la novedad, y los periodos de gracia son limitados y no se reconocen en todas partes.",
        ],
      },
      {
        heading: "2. Busca antecedentes",
        paragraphs: [
          "Antes de invertir en la redacción, busca patentes, solicitudes, artículos y productos que ya divulguen algo parecido. El objetivo no es demostrar que no existe nada, sino encontrar las referencias más cercanas y entender qué es realmente nuevo en tu solución.",
        ],
      },
      {
        heading: "3. ¿Se puede patentar mi invención?",
        paragraphs: [
          "La mayoría de los sistemas exige novedad, actividad inventiva y aplicación industrial. Algunas materias, como los métodos abstractos, los descubrimientos o ciertos métodos médicos, están excluidas o restringidas según el país.",
        ],
      },
      {
        heading: "4. ¿Dónde y cómo presento?",
        paragraphs: [
          "Decide qué mercados te importan. En Estados Unidos y, desde abril de 2026, en México, una solicitud provisional asegura una fecha temprana durante 12 meses. En Argentina y Brasil presentas directamente la solicitud nacional completa. Dentro de los 12 meses desde tu primera presentación puedes extender la protección al extranjero con la prioridad del Convenio de París o con una sola solicitud PCT.",
        ],
      },
      {
        heading: "5. Redacta la solicitud",
        paragraphs: [
          "Una solicitud de patente tiene una descripción tan detallada que un experto pueda reproducir la invención, reivindicaciones que definen la protección, un resumen y normalmente dibujos. Las reivindicaciones son lo más importante: deciden lo que otros no pueden hacer sin tu permiso.",
        ],
        bullets: [
          "Describe varias modalidades y variantes, no solo un prototipo",
          "Redacta reivindicaciones independientes para la combinación central y dependientes como respaldo",
          "Usa terminología y números de referencia coherentes",
          "Revisa todo antes de presentar o envíalo a revisión profesional",
        ],
      },
      {
        heading: "6. Presenta y da seguimiento",
        paragraphs: [
          "Después de presentar, la oficina revisa la forma y el fondo, puede emitir requerimientos y finalmente concede o niega la patente. Vigila los plazos, responde los requerimientos y paga las anualidades para mantener la patente vigente.",
        ],
      },
    ],
    faqs: [
      { q: "¿Puedo patentar una idea sin prototipo?", a: "Sí, si puedes describir la invención con el detalle suficiente para que un experto la fabrique y la use. No necesitas un prototipo físico, pero un concepto vago no basta." },
      { q: "¿Cuánto tarda obtener una patente?", a: "Depende de la oficina y del campo técnico; el examen suele tardar varios años. En cambio, presentar la solicitud asegura tu fecha de inmediato." },
    ],
    sources: [IMPI, USPTO_BASICS, WIPO_PCT],
  },

  "what-is-a-provisional-patent-application": {
    title: "¿Qué es una solicitud provisional de patente? | IPnite",
    description: "La solicitud provisional asegura una fecha de presentación por 12 meses sin examen. Cómo funciona en Estados Unidos y en México desde 2026.",
    h1: "¿Qué es una solicitud provisional de patente?",
    lead: "Es una presentación temprana y simplificada que asegura una fecha para tu invención y te da 12 meses para presentar la solicitud completa.",
    sections: [
      {
        heading: "¿Cómo funciona una solicitud provisional?",
        paragraphs: [
          "La provisional se presenta con una descripción de la invención y, normalmente, dibujos. No se examina y nunca se convierte por sí sola en patente. Dentro de los 12 meses debes presentar la solicitud completa que reclama su beneficio. A partir de ahí, la fecha de la provisional cuenta para todo lo que la provisional realmente describe.",
        ],
      },
      {
        heading: "¿Dónde puedo presentar una solicitud provisional?",
        paragraphs: [
          "Estados Unidos usa solicitudes provisionales desde 1995. México las incorporó con la reforma a la Ley Federal de Protección a la Propiedad Industrial, vigente desde el 6 de abril de 2026: la provisional mexicana no se publica ni se examina, el plazo de 12 meses es improrrogable y la provisional no puede reclamar la prioridad de una solicitud anterior. Argentina y Brasil no tienen una figura equivalente.",
        ],
      },
      {
        heading: "Ventajas",
        paragraphs: [],
        bullets: [
          "Una fecha de presentación temprana mientras sigues desarrollando la invención",
          "Doce meses para probar el mercado, levantar capital o afinar las reivindicaciones",
          "Tasas oficiales menores que las de una solicitud completa",
          "Posibilidad de indicar que la patente está en trámite",
        ],
      },
      {
        heading: "¿Cuál es el principal riesgo de una provisional?",
        paragraphs: [
          "La solicitud posterior solo puede apoyarse en la fecha de la provisional para lo que la provisional describe. Si la provisional es un resumen corto o una presentación, tus reivindicaciones finales pueden quedarse sin respaldo y perder esa fecha. Trata la provisional como una divulgación técnica completa: cada componente esencial, alternativas, ejemplos y figuras.",
        ],
      },
    ],
    faqs: [
      { q: "¿La provisional necesita reivindicaciones?", a: "En Estados Unidos no son obligatorias, pero incluirlas te ayuda a comprobar que la descripción respalda lo que vas a proteger." },
      { q: "¿Qué pasa si se vence el plazo de 12 meses?", a: "En Estados Unidos la provisional vence y ya no puedes reclamar su fecha; en México se considera declinada sin necesidad de declaración del IMPI. Cualquier divulgación posterior puede usarse en tu contra." },
    ],
    sources: [IMPI, USPTO_PROVISIONAL],
  },

  "provisional-patent-application-cost": {
    title: "¿Cuánto cuesta una solicitud provisional de patente? | IPnite",
    description: "La tasa oficial es solo una parte del costo. Qué incluye el precio de una provisional (tasas, dibujos, búsqueda, redacción y revisión) y cómo invertir bien.",
    h1: "¿Cuánto cuesta una solicitud provisional de patente?",
    lead: "La tasa oficial suele ser la parte más pequeña del costo. Lo que realmente pagas es una divulgación lo bastante sólida para respaldar tus reivindicaciones futuras.",
    sections: [
      {
        heading: "¿Qué estoy pagando en realidad?",
        paragraphs: [],
        bullets: [
          "Tasa oficial de presentación; en Estados Unidos depende del tamaño de la entidad (grande, pequeña o micro)",
          "Búsqueda de antecedentes para saber qué es realmente nuevo",
          "Redacción de la descripción, los ejemplos y, opcionalmente, reivindicaciones",
          "Dibujos o figuras",
          "Revisión profesional, si decides contratarla",
        ],
      },
      {
        heading: "¿Cuánto cuestan las tasas oficiales?",
        paragraphs: [
          "Las tasas de la USPTO cambian periódicamente y tienen descuentos para entidades pequeñas y micro. Consulta la tabla vigente antes de presentar. En México, el IMPI publica sus propias tarifas para la nueva solicitud provisional.",
        ],
      },
      {
        heading: "¿Por qué la provisional más barata puede salir más cara?",
        paragraphs: [
          "Una provisional solo protege lo que describe. Una presentación apresurada y escueta puede costar poco hoy, pero dejar la solicitud completa sin respaldo para sus reivindicaciones y obligarte a depender de una fecha posterior. Conviene invertir en una descripción completa con variantes y figuras.",
        ],
      },
      {
        heading: "Dónde encaja IPnite",
        paragraphs: [
          "IPnite reúne búsqueda de antecedentes, redacción, dibujos y control de calidad en una sola suscripción, desde el plan Inventor. Puedes presentar el resultado por tu cuenta o enviarlo a revisión, lo que normalmente reduce el tiempo y el costo del profesional.",
        ],
      },
    ],
    faqs: [
      { q: "¿Puedo presentar una provisional por mi cuenta?", a: "Sí. Los inventores pueden presentar directamente ante la USPTO o el IMPI. Asegúrate de que la divulgación esté completa, porque la provisional no se examina y nadie te señalará los errores." },
    ],
    sources: [USPTO_FEES, IMPI],
  },

  "can-ai-write-a-patent-application": {
    title: "¿Puede la IA redactar una solicitud de patente? | IPnite",
    description: "La IA puede redactar reivindicaciones, descripciones y figuras, pero no puede ser inventora ni sustituir la revisión. Qué hace bien, sus riesgos y cómo usarla.",
    h1: "¿Puede la IA redactar una solicitud de patente?",
    lead: "Sí: la IA puede producir un borrador completo y estructurado. No puede ser la inventora, y su resultado necesita una revisión cuidadosa antes de presentarse.",
    sections: [
      {
        heading: "¿Qué hace bien la IA en una solicitud de patente?",
        paragraphs: [
          "La redacción de patentes tiene mucha estructura: árboles de reivindicaciones, modalidades, terminología coherente, números de referencia y secciones estándar. Una IA preparada para ese flujo convierte una buena divulgación técnica en un borrador completo mucho más rápido que empezar desde cero, y puede proponer variantes que no habías escrito.",
        ],
      },
      {
        heading: "¿Qué no puede hacer la IA?",
        paragraphs: [
          "La IA no es inventora. Oficinas de patentes y tribunales de varios países, incluidos los casos DABUS, han sostenido que los inventores deben ser personas físicas. La contribución técnica debe venir de personas. La IA tampoco conoce datos que no le diste y puede cometer errores o inventar referencias.",
        ],
      },
      {
        heading: "Chatbots generales frente a software de patentes",
        paragraphs: [
          "Pegar una invención en un chatbot para consumidores plantea dos problemas: la confidencialidad, porque algunos servicios de consumo pueden usar las conversaciones para mejorar sus modelos, y la estructura, porque un chat general no mantiene conectados tus antecedentes, reivindicaciones, dibujos y versiones. Un software de patentes debe explicar con claridad cómo trata tus datos.",
        ],
      },
      {
        heading: "¿Cómo uso la IA con seguridad con mi invención?",
        paragraphs: [],
        bullets: [
          "Da una divulgación técnica completa y precisa",
          "Verifica cada afirmación técnica y cada referencia citada",
          "Comprueba que las reivindicaciones estén respaldadas por la descripción",
          "Usa herramientas que no entrenen con tus datos",
          "Revisa antes de presentar o envía el borrador a revisión profesional",
        ],
      },
    ],
    faqs: [
      { q: "¿IPnite entrena su IA con mi invención?", a: "No. IPnite nunca usa tu contenido para entrenar modelos de IA ni para otro fin que prestarte el servicio." },
      { q: "Si uso IA para redactar, ¿quién es el inventor?", a: "Las personas que concibieron la invención. Usar IA para escribir la solicitud no cambia la inventoría." },
    ],
  },

  "how-to-search-existing-patents": {
    title: "Cómo buscar patentes existentes: bases de datos gratis | IPnite",
    description: "Busca patentes en Google Patents, Espacenet, PATENTSCOPE y las oficinas nacionales. Palabras clave, clasificaciones, citas y familias, explicadas.",
    h1: "Cómo buscar patentes existentes",
    lead: "Una buena búsqueda combina varias bases de datos y técnicas: conceptos y sinónimos, clasificaciones, citas y familias de patentes.",
    sections: [
      {
        heading: "¿Dónde puedo buscar patentes gratis?",
        paragraphs: [],
        bullets: [
          "Google Patents: búsqueda rápida de texto completo con traducción automática",
          "Espacenet (OEP): cobertura mundial y familias de patentes",
          "PATENTSCOPE (OMPI): solicitudes PCT y colecciones nacionales",
          "USPTO Patent Public Search: patentes y solicitudes de Estados Unidos",
          "Oficinas nacionales como el IMPI, el INPI de Argentina y el INPI de Brasil",
        ],
      },
      {
        heading: "¿Por qué una búsqueda por palabras no encuentra todo?",
        paragraphs: [
          "Documentos distintos describen lo mismo con palabras distintas. Enumera las características esenciales de tu invención y varios sinónimos de cada una. Combínalos en tus consultas y lee los resultados más relevantes para descubrir más terminología.",
        ],
      },
      {
        heading: "¿Cómo uso las clasificaciones de patentes?",
        paragraphs: [
          "La Clasificación Internacional de Patentes (CIP) y la Clasificación Cooperativa de Patentes (CPC) agrupan los documentos por tecnología. Cuando encuentres un documento relevante, revisa sus códigos y busca dentro de ellos: aparecerán documentos que usan un lenguaje totalmente distinto.",
        ],
      },
      {
        heading: "Sigue las citas y las familias",
        paragraphs: [
          "Cada documento relevante apunta a otros: los que cita y los posteriores que lo citan. Una familia de patentes agrupa las presentaciones de la misma invención en varios países, lo que te permite leer la versión en tu idioma y ver dónde está protegida.",
        ],
      },
      {
        heading: "Lleva un registro",
        paragraphs: [
          "Guarda las consultas, las bases de datos, la fecha y por qué importa cada documento. Ese registro hace la búsqueda reproducible y útil para la redacción y la revisión profesional.",
        ],
      },
    ],
    sources: [GOOGLE_PATENTS, ESPACENET, PATENTSCOPE],
  },

  "what-is-prior-art": {
    title: "¿Qué son los antecedentes de una patente? | IPnite",
    description: "Los antecedentes son la información pública anterior a tu presentación que puede mostrar que tu invención no es nueva o es obvia. Qué cuenta y por qué.",
    h1: "¿Qué son los antecedentes de una patente?",
    lead: "Los antecedentes (el estado de la técnica) son todo lo que se hizo público antes de tu fecha de presentación y que puede influir en si tu invención es nueva e inventiva.",
    sections: [
      {
        heading: "Qué cuenta como antecedente",
        paragraphs: [
          "No solo las patentes. También cuentan las solicitudes publicadas, los artículos científicos, las tesis, los libros, los sitios web, los videos, los manuales de producto, los productos a la venta y las ponencias públicas, en cualquier país y en cualquier idioma.",
        ],
      },
      {
        heading: "¿Qué fecha importa para los antecedentes?",
        paragraphs: [
          "Los antecedentes se miden contra tu fecha de presentación, o contra tu fecha de prioridad si la reclamas. Por eso importa presentar pronto: cada día antes de hacerlo pueden aparecer nuevas divulgaciones, incluidas las tuyas. Los periodos de gracia, como el de un año para las divulgaciones del propio inventor en Estados Unidos, México, Argentina y Brasil, son limitados y no valen en todas partes.",
        ],
      },
      {
        heading: "¿Cómo usa el examinador los antecedentes?",
        paragraphs: [
          "Los examinadores usan los antecedentes para decidir la novedad (si un solo documento ya muestra todas las características de una reivindicación) y la actividad inventiva (si la solución habría sido obvia para un experto a la luz de uno o varios documentos).",
        ],
      },
      {
        heading: "¿Por qué buscar antes de redactar?",
        paragraphs: [
          "Conocer los antecedentes más cercanos te permite reivindicar lo que realmente es nuevo, explicar tus ventajas de forma convincente y no gastar en una solicitud que no puede prosperar.",
        ],
      },
    ],
    faqs: [
      { q: "¿Mi propia publicación cuenta como antecedente?", a: "Puede contar. Fuera de los periodos de gracia de cada país, tu propio artículo, ponencia o lanzamiento antes de presentar puede usarse contra tu solicitud." },
      { q: "¿Los documentos secretos cuentan?", a: "En general no, porque el antecedente debe estar al alcance del público. Sin embargo, en muchos sistemas cuentan las solicitudes presentadas antes que la tuya aunque se publiquen después." },
    ],
    sources: [MPEP_2100],
  },

  "how-to-perform-a-prior-art-search": {
    title: "Cómo hacer una búsqueda de antecedentes paso a paso | IPnite",
    description: "Define las características esenciales, amplía términos y clasificaciones, sigue las citas y documenta. Un método práctico de búsqueda de antecedentes.",
    h1: "Cómo hacer una búsqueda de antecedentes",
    lead: "Una búsqueda de antecedentes responde una pregunta: ¿ya se divulgó la combinación de características que hace funcionar tu invención? Este método mantiene la búsqueda enfocada.",
    sections: [
      {
        heading: "Paso 1: define las características esenciales",
        paragraphs: [
          "Escribe tu invención como una lista corta de características técnicas que, juntas, resuelven el problema. Con esas características vas a comparar cada referencia.",
        ],
      },
      {
        heading: "Paso 2: arma el vocabulario",
        paragraphs: [
          "Para cada característica, anota sinónimos, términos más amplios y más específicos, y las palabras que se usan en el campo. Agrega los códigos de clasificación CIP o CPC a medida que los descubras.",
        ],
      },
      {
        heading: "Paso 3: busca por rondas",
        paragraphs: [
          "Empieza amplio, lee los mejores resultados y refina. Cada documento relevante te da nuevos términos, clasificaciones y citas que seguir. Busca también fuera de las patentes: artículos, normas técnicas y documentación de productos.",
        ],
      },
      {
        heading: "Paso 4: ¿Cómo comparo un documento con mi invención?",
        paragraphs: [
          "Arma una tabla con tus características en las filas y los documentos más relevantes en las columnas. Marca qué características divulga cada documento. Un documento que las divulga todas es un problema de novedad; varios que juntos las cubren plantean una duda de actividad inventiva.",
        ],
      },
      {
        heading: "Paso 5: ¿Qué hago con los resultados?",
        paragraphs: [
          "Registra las bases de datos, las consultas, las fechas y tus conclusiones. Úsalas para decidir si presentar, qué características destacar en las reivindicaciones y cómo explicar las ventajas de tu invención.",
        ],
      },
    ],
    faqs: [
      { q: "¿Una búsqueda puede ser completa?", a: "Ninguna búsqueda garantiza haber encontrado todos los documentos relevantes. Una búsqueda cuidadosa reduce el riesgo, no lo elimina." },
    ],
    sources: [ESPACENET, PATENTSCOPE, GOOGLE_PATENTS],
  },

  "patent-drawing-requirements": {
    title: "Requisitos de los dibujos de patente: USPTO y PCT | IPnite",
    description: "Dibujos de línea en negro, números de referencia, vistas y márgenes. Las principales reglas para dibujos de patente según 37 CFR 1.84 y la Regla 11 del PCT.",
    h1: "Requisitos de los dibujos de patente",
    lead: "Los dibujos deben mostrar cada característica necesaria para entender la invención y seguir las reglas formales de la oficina donde presentas.",
    sections: [
      {
        heading: "¿Cuándo necesito dibujos?",
        paragraphs: [
          "La mayoría de las oficinas los exige siempre que sean necesarios para entender la invención, lo que abarca casi cualquier invención mecánica, eléctrica o de dispositivos y muchos procesos, que suelen mostrarse como diagramas de flujo.",
        ],
      },
      {
        heading: "¿Qué reglas siguen los dibujos de patente?",
        paragraphs: [
          "Estados Unidos fija los estándares en 37 CFR 1.84 y las solicitudes internacionales siguen la Regla 11 del PCT. Los detalles cambian según la oficina, pero los principios son parecidos.",
        ],
        bullets: [
          "Dibujos de línea en negro y duraderos; color y fotografías solo en casos limitados",
          "Tamaño de hoja estándar (A4 o carta) con márgenes mínimos",
          "Figuras numeradas de forma consecutiva (Fig. 1, Fig. 2…)",
          "Números de referencia que también aparecen en la descripción",
          "Rotulación legible y sin texto innecesario en el dibujo",
        ],
      },
      {
        heading: "¿Los dibujos tienen que coincidir con el texto?",
        paragraphs: [
          "Cada número de referencia de una figura debe explicarse en la descripción, y cada característica de las reivindicaciones debe verse en al menos una figura cuando los dibujos sean necesarios. Las incoherencias generan requerimientos y pueden ser difíciles de corregir sin agregar materia nueva.",
        ],
      },
    ],
    sources: [MPEP_608, { label: "OMPI — Reglamento del PCT, Regla 11 (en inglés)", url: "https://www.wipo.int/pct/en/texts/rules/r11.html" }],
  },

  "how-patent-claims-work": {
    title: "Cómo funcionan las reivindicaciones de patente | IPnite",
    description: "Las reivindicaciones definen lo que protege tu patente. Cómo las independientes, las dependientes, el preámbulo y la transición determinan el alcance.",
    h1: "Cómo funcionan las reivindicaciones de patente",
    lead: "Las reivindicaciones son el límite jurídico de una patente. La descripción explica la invención; las reivindicaciones deciden lo que otros no pueden hacer sin tu permiso.",
    sections: [
      {
        heading: "¿Cómo es una reivindicación de patente?",
        paragraphs: [
          "Una reivindicación es una sola oración con tres partes: un preámbulo que nombra la invención («Un dispositivo para…»), una expresión de transición y el cuerpo, que enumera los elementos y cómo se relacionan. Cada elemento limita la reivindicación: cuantos más elementos, más estrecha la protección.",
        ],
      },
      {
        heading: "Transiciones abiertas y cerradas",
        paragraphs: [
          "«Que comprende» es abierta: un producto con elementos adicionales sigue dentro de la reivindicación. «Que consiste en» es cerrada: los elementos adicionales normalmente dejan al producto fuera. La elección cambia mucho el alcance.",
        ],
      },
      {
        heading: "¿Qué diferencia hay entre reivindicaciones independientes y dependientes?",
        paragraphs: [
          "Una reivindicación independiente se sostiene sola y define la versión más amplia de la invención que puedes justificar frente a los antecedentes. Las dependientes remiten a una anterior y agregan características. Si la independiente se rechaza o se anula, las dependientes son tus posiciones de respaldo.",
        ],
      },
      {
        heading: "Respaldo y claridad",
        paragraphs: [
          "Cada reivindicación debe estar respaldada por la descripción y usar términos con antecedente claro («un sensor» primero, luego «el sensor»). Las reivindicaciones más amplias que lo que respalda la descripción son un motivo frecuente de rechazo.",
        ],
      },
      {
        heading: "¿El número de reivindicaciones cambia las tasas?",
        paragraphs: [
          "Muchas oficinas cobran de más por encima de cierto número de reivindicaciones. En Estados Unidos hay tasas adicionales a partir de más de tres independientes y veinte en total, así que conviene un juego de reivindicaciones pensado, no largo.",
        ],
      },
    ],
    sources: [{ label: "USPTO — MPEP 608.01(m), forma de las reivindicaciones (en inglés)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" }],
  },

  "what-does-patent-pending-mean": {
    title: "¿Qué significa «patente en trámite»? | IPnite",
    description: "«Patente en trámite» (patent pending) indica que se presentó una solicitud, no que se concedió la patente. Qué protege, qué no y cómo usarlo bien.",
    h1: "¿Qué significa «patente en trámite»?",
    lead: "«Patente en trámite» (en inglés, patent pending) le dice al mercado que presentaste una solicitud de patente. No significa que la patente esté concedida.",
    sections: [
      {
        heading: "¿De qué me sirve «patente en trámite»?",
        paragraphs: [
          "Indicar que un producto tiene una patente en trámite avisa que la protección puede llegar, lo que desalienta copias y da credibilidad frente a inversionistas y socios. En Estados Unidos puedes usar «patent pending» en cuanto presentas una solicitud provisional o definitiva que cubra el producto.",
        ],
      },
      {
        heading: "¿«Patente en trámite» ya me protege?",
        paragraphs: [
          "No puedes demandar por infracción hasta que se conceda la patente. En Estados Unidos, una solicitud publicada puede dar derechos provisionales (una regalía razonable desde la publicación) si las reivindicaciones concedidas son sustancialmente idénticas a las publicadas y el infractor tuvo conocimiento real.",
        ],
      },
      {
        heading: "¿Cuándo puedo usar «patente en trámite»?",
        paragraphs: [
          "Indicar «patente en trámite» cuando ninguna solicitud cubre el producto es un marcado falso que la ley estadounidense sanciona, y las afirmaciones engañosas pueden sancionarse con las normas de protección al consumidor de otros países. Deja de usarlo si abandonas la solicitud.",
        ],
      },
    ],
    sources: [{ label: "Código de EE. UU. — 35 U.S.C. 292, marcado falso (en inglés)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title35/html/USCODE-2023-title35-partIII-chap29-sec292.htm" }, { label: "Código de EE. UU. — 35 U.S.C. 154(d), derechos provisionales (en inglés)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title35/html/USCODE-2023-title35-partII-chap14-sec154.htm" }],
  },

  "when-should-a-startup-file-a-patent": {
    title: "¿Cuándo debe una startup presentar una patente? | IPnite",
    description: "Antes de cualquier divulgación pública, presentación a inversionistas o lanzamiento. Cómo encajan el momento, el presupuesto, la provisional y el PCT.",
    h1: "¿Cuándo debe una startup presentar una patente?",
    lead: "Como regla general, antes de que la invención sea pública. El momento también depende de la madurez técnica, el presupuesto y los mercados a los que quieres entrar.",
    sections: [
      {
        heading: "¿Debemos presentar antes de hacerlo público?",
        paragraphs: [
          "Los lanzamientos, las demostraciones, los artículos, los eventos de pitch e incluso una vacante muy detallada pueden divulgar una invención. La mayoría de los países concede la patente a quien presenta primero, y muchos no reconocen ningún periodo de gracia. Presentar primero protege tus opciones en todas partes.",
        ],
      },
      {
        heading: "¿Qué tan concreta debe estar la invención?",
        paragraphs: [
          "No necesitas un producto terminado, pero sí describir cómo funciona la invención con el detalle suficiente para que un experto la reproduzca. Si hay partes clave que aún no conoces, presenta lo que está sólido y considera nuevas solicitudes para las mejoras.",
        ],
      },
      {
        heading: "¿Cómo manejamos el costo de presentar?",
        paragraphs: [
          "En Estados Unidos y México, una provisional asegura una fecha durante 12 meses con un costo menor. Antes de que terminen esos 12 meses, una solicitud PCT puede diferir los costos de las fases nacionales hasta unos 30 meses desde la primera presentación, lo que te da tiempo para levantar capital y validar mercados.",
        ],
      },
      {
        heading: "Una lista de verificación sencilla",
        paragraphs: [],
        bullets: [
          "¿Algo está por hacerse público?",
          "¿Podemos describir la invención con detalle reproducible?",
          "¿Buscamos los antecedentes más cercanos?",
          "¿Qué mercados importan en los próximos tres años?",
          "¿De quién es la invención: de los fundadores, de la empresa o de una universidad?",
        ],
      },
    ],
    sources: [IMPI, USPTO_PROVISIONAL, WIPO_PCT],
  },

  "pitch-investors-before-filing-a-patent": {
    title: "¿Puedes presentar a inversionistas antes de patentar? | IPnite",
    description: "Presentar antes de solicitar la patente crea riesgos de divulgación y muchos inversionistas no firman NDA. Cómo proteger tu invención mientras levantas capital.",
    h1: "¿Puedes presentar tu idea a inversionistas antes de patentar?",
    lead: "Puedes, pero tiene riesgos. El orden más seguro es presentar primero la solicitud (a menudo una provisional) y después hacer el pitch con la invención protegida.",
    sections: [
      {
        heading: "¿Un pitch puede contar como divulgación pública?",
        paragraphs: [
          "Una conversación privada bajo un acuerdo de confidencialidad normalmente no es una divulgación pública. Un demo day, una presentación pública, un webinar grabado o un pitch ante muchas personas sin confidencialidad sí pueden serlo. Una vez pública, la invención puede perder la novedad en países sin periodo de gracia.",
        ],
      },
      {
        heading: "¿Los inversionistas firman acuerdos de confidencialidad?",
        paragraphs: [
          "Muchos fondos de capital de riesgo no firman acuerdos de confidencialidad porque ven muchas empresas parecidas. No cuentes con uno. Mejor controla lo que compartes.",
        ],
        bullets: [
          "Explica el problema, el mercado y los resultados, no cómo funciona la solución en detalle",
          "Comparte detalles técnicos solo después de presentar o con un acuerdo firmado",
          "Registra qué compartiste, con quién y cuándo",
        ],
      },
      {
        heading: "Primero presenta, después haz el pitch",
        paragraphs: [
          "Una provisional bien redactada (Estados Unidos o México) o una solicitud nacional (Argentina o Brasil) te permite decir que tienes una patente en trámite y hablar de la tecnología con más libertad. Los inversionistas también valoran a una startup que aseguró su PI central a tiempo.",
        ],
      },
    ],
  },

  "what-is-patentability": {
    title: "¿Qué es la patentabilidad? Requisitos explicados | IPnite",
    description: "La patentabilidad exige materia patentable, novedad, actividad inventiva, aplicación industrial y una descripción suficiente. Así se evalúa cada requisito.",
    h1: "¿Qué es la patentabilidad?",
    lead: "La patentabilidad es el conjunto de condiciones legales que debe cumplir una invención para obtener una patente. Los requisitos centrales son parecidos en casi todos los países.",
    sections: [
      {
        heading: "¿Qué hace patentable a una invención?",
        paragraphs: [],
        bullets: [
          "Materia patentable: la invención no está en una categoría excluida",
          "Novedad: ningún antecedente muestra por sí solo todas las características",
          "Actividad inventiva: la solución no es obvia para un experto en la materia",
          "Aplicación industrial: puede fabricarse o usarse en la industria",
          "Descripción suficiente: un experto puede reproducirla a partir de la solicitud",
        ],
      },
      {
        heading: "¿Qué no se puede patentar?",
        paragraphs: [
          "Los descubrimientos, las teorías científicas, los métodos matemáticos y las ideas abstractas suelen estar excluidos. El software y los métodos de negocios se tratan distinto en cada oficina: Estados Unidos aplica la prueba de elegibilidad de Alice/Mayo, mientras que las oficinas latinoamericanas y europeas buscan un carácter técnico. Los métodos de tratamiento médico están excluidos en muchos países fuera de Estados Unidos.",
        ],
      },
      {
        heading: "La patentabilidad se evalúa reivindicación por reivindicación",
        paragraphs: [
          "Una solicitud no es simplemente patentable o no. Cada reivindicación se compara con los antecedentes. Por eso un buen juego de reivindicaciones incluye una amplia y otras dependientes más estrechas que pueden sobrevivir si la amplia cae.",
        ],
      },
      {
        heading: "¿Una búsqueda de patentabilidad equivale a una opinión?",
        paragraphs: [
          "Una búsqueda de patentabilidad compara tu invención con los antecedentes más cercanos. IPnite incluye un análisis de patentabilidad asistido por IA en todos los planes de pago; como todo entregable de IA, es tuyo para leerlo o enviarlo a revisión profesional.",
        ],
      },
    ],
    sources: [IMPI, MPEP_2100],
  },

  "novelty-vs-inventive-step": {
    title: "Novedad vs actividad inventiva: la diferencia | IPnite",
    description: "La novedad pregunta si un documento muestra todas las características; la actividad inventiva, si la solución era obvia. Cómo aplica cada prueba un examinador.",
    h1: "Novedad vs actividad inventiva",
    lead: "Son dos pruebas distintas. Una invención puede ser nueva y aun así negarse porque habría sido obvia para un experto.",
    sections: [
      {
        heading: "¿Cuándo es nueva una invención?",
        paragraphs: [
          "Una invención carece de novedad cuando un solo antecedente muestra todas las características de la reivindicación, dispuestas como se reivindican. Si falta aunque sea una característica en ese documento, la reivindicación es nueva frente a él.",
        ],
      },
      {
        heading: "Actividad inventiva: ¿habría sido obvia?",
        paragraphs: [
          "La actividad inventiva (non-obviousness en Estados Unidos) pregunta si un experto en el campo habría llegado a la solución reivindicada a partir de los antecedentes, a menudo combinando documentos. La Oficina Europea de Patentes usa el enfoque problema-solución; los examinadores estadounidenses aplican los factores Graham y el razonamiento del caso KSR.",
        ],
      },
      {
        heading: "Un ejemplo",
        paragraphs: [
          "Supón que un documento divulga una botella con sensor de temperatura y otro una pantalla que cambia de color. Una botella que combina ambos puede ser nueva, porque ningún documento la muestra sola, pero carecer de actividad inventiva si combinarlos era una forma obvia de mostrar la temperatura. Demostrar un efecto técnico inesperado ayuda a sostener la actividad inventiva.",
        ],
      },
      {
        heading: "¿Qué significa esto al redactar mis reivindicaciones?",
        paragraphs: [
          "Describe el problema técnico, las ventajas y cualquier resultado inesperado de tu solución. Esos hechos son los que vas a usar para defender la actividad inventiva durante el examen.",
        ],
      },
    ],
    sources: [MPEP_2100, { label: "OEP — Directrices de examen, parte G (en inglés)", url: "https://www.epo.org/en/legal/guidelines-epc" }],
  },

  "patent-search-vs-prior-art-search": {
    title: "Búsqueda de patentes vs búsqueda de antecedentes | IPnite",
    description: "La búsqueda de patentes es exploración amplia; la de antecedentes compara una invención con divulgaciones previas. Cuándo usar cada una, más FTO y panoramas.",
    h1: "Búsqueda de patentes vs búsqueda de antecedentes",
    lead: "Ambas usan las mismas bases de datos, pero responden preguntas distintas. Elegir la correcta ahorra tiempo y dinero.",
    sections: [
      {
        heading: "¿Cuándo necesito una búsqueda amplia de patentes?",
        paragraphs: [
          "Una búsqueda general de patentes explora un campo tecnológico, un competidor o un inventor. Te ayuda a entender el panorama, detectar tendencias y encontrar oportunidades de licencia o colaboración.",
        ],
      },
      {
        heading: "¿Cuándo necesito una búsqueda de antecedentes?",
        paragraphs: [
          "La búsqueda de antecedentes (también llamada de patentabilidad o de novedad) compara una invención concreta con todo lo que se hizo público antes de una fecha. Su resultado es una lista corta de las referencias más cercanas y cómo se relaciona cada una con tus características.",
        ],
      },
      {
        heading: "¿Qué otras búsquedas de patentes existen?",
        paragraphs: [],
        bullets: [
          "Libertad de operación (FTO): ¿puedo vender este producto sin infringir patentes vigentes de terceros en un país?",
          "Validez o nulidad: ¿se puede impugnar una patente existente?",
          "Panorama tecnológico: ¿quién patenta qué en un campo y dónde?",
        ],
      },
      {
        heading: "Cómo las resuelve IPnite",
        paragraphs: [
          "IPnite ofrece búsqueda amplia de patentes, búsqueda de antecedentes con el Agente de descubrimiento y, según el plan, análisis de patentabilidad y FTO. Son entregables asistidos por IA que tú lees o envías a revisión profesional.",
        ],
      },
    ],
  },
};
