import type { SeoPage } from "./types";
import { commonCta } from "./types";
import { routed } from "./helpers";

const startups: SeoPage = {
  id: "startups",
  kind: "audience",
  related: ["ai-drafting", "prior-art", "provisional", "portfolio"],
  primaryAction: { name: "try_ipnite" },
  locales: routed("startups", {
    en: {
      title: "Patent Software for Startups and Founders | IPnite",
      description: "Protect your technology before you pitch or launch. Search prior art, draft a filing-ready application, and manage your IP portfolio with your team.",
      h1: "Patent Tools Built for Startups",
      eyebrow: "BUILD IP WITH LIMITED RESOURCES",
      lead: "Early-stage teams need to protect their technical edge before pitching, publishing, or launching—without spending the runway on a first draft. IPnite gives founders a guided path from invention to filing-ready application.",
      sections: [
        {
          heading: "File before you disclose",
          paragraphs: [
            "Demo days, investor decks, papers, and product launches can become public disclosures. In most countries a public disclosure before filing can destroy novelty; the grace periods that exist in the United States, Mexico, Argentina, and Brazil are limited and not recognized everywhere. A filed application—often a provisional in the United States or Mexico—lets you talk about your technology with far less risk.",
          ],
        },
        {
          heading: "What founders do with IPnite",
          paragraphs: [
            "IPnite turns founder knowledge into an organized disclosure, checks it against prior art, and produces a structured application you can file yourself or hand to counsel for a faster, cheaper review.",
          ],
          bullets: [
            "Run prior-art searches before major filing spend",
            "Turn technical know-how into a complete disclosure",
            "Draft claims, description, and drawings in one project",
            "Export DOCX for filing or professional review",
            "Keep versions, collaborators, and deadlines in one portfolio",
          ],
        },
        {
          heading: "Plans that grow with the company",
          paragraphs: [
            "The Startup plan includes up to 10 active projects, 10 prior-art searches per month, up to 3 collaborators per project, and DOCX, JSON, and ZIP export. You can start with a free 7-day trial that includes one prior-art search.",
          ],
        },
        {
          heading: "Your IP, your decisions",
          paragraphs: [
            "Everything you create in IPnite belongs to your company, and IPnite never uses it to train AI. IPnite is software, not a law firm: you decide when to file on your own and when to bring in a patent professional.",
          ],
        },
      ],
      faqs: [
        { q: "Should a startup file before talking to investors?", a: "Filing first is the safest route. Many investors do not sign NDAs, and some disclosures can limit your ability to patent later. A provisional application is a common way to secure a date quickly." },
        { q: "Can founders draft without an attorney?", a: "Yes. IPnite produces a complete, structured application. You can file it yourself or have it reviewed by a professional; either way, review is your responsibility." },
      ],
      cta: commonCta.en[0],
      ctaBody: commonCta.en[1],
    },
    es: {
      title: "Software de patentes para startups y fundadores | IPnite",
      description: "Protege tu tecnología antes de presentarla o lanzarla. Busca antecedentes, redacta una solicitud lista para presentar y gestiona tu cartera de PI con tu equipo.",
      h1: "Herramientas de patentes para startups",
      eyebrow: "CONSTRUYE PI CON RECURSOS LIMITADOS",
      lead: "Los equipos en etapa temprana necesitan proteger su ventaja técnica antes de presentarla, publicarla o lanzarla, sin gastar su capital en un primer borrador. IPnite da a los fundadores un camino guiado de la invención a la solicitud lista para presentar.",
      sections: [
        {
          heading: "Presenta antes de divulgar",
          paragraphs: [
            "Los demo days, las presentaciones a inversionistas, los artículos y los lanzamientos pueden convertirse en divulgaciones públicas. En la mayoría de los países, una divulgación antes de presentar puede destruir la novedad; los periodos de gracia de Estados Unidos, México, Argentina y Brasil son limitados y no se reconocen en todas partes. Con una solicitud presentada (a menudo una provisional en Estados Unidos o México) puedes hablar de tu tecnología con mucho menos riesgo.",
          ],
        },
        {
          heading: "Qué hacen los fundadores con IPnite",
          paragraphs: [
            "IPnite convierte el conocimiento de los fundadores en una divulgación ordenada, la compara con los antecedentes y produce una solicitud estructurada que puedes presentar por tu cuenta o entregar a un asesor para una revisión más rápida y económica.",
          ],
          bullets: [
            "Búsqueda de antecedentes antes de invertir en la presentación",
            "El conocimiento técnico convertido en una divulgación completa",
            "Reivindicaciones, descripción y dibujos en un solo proyecto",
            "Exportación en DOCX para presentar o revisar",
            "Versiones, colaboradores y plazos en una sola cartera",
          ],
        },
        {
          heading: "Planes que crecen con tu empresa",
          paragraphs: [
            "El plan Startup incluye hasta 10 proyectos activos, 10 búsquedas de antecedentes al mes, hasta 3 colaboradores por proyecto y exportación en DOCX, JSON y ZIP. Puedes empezar con la prueba gratis de 7 días, que incluye una búsqueda de antecedentes.",
          ],
        },
        {
          heading: "Tu PI, tus decisiones",
          paragraphs: [
            "Todo lo que creas en IPnite pertenece a tu empresa, e IPnite nunca lo usa para entrenar IA. IPnite es software, no un despacho: tú decides cuándo presentar por tu cuenta y cuándo sumar a un profesional de patentes.",
          ],
        },
      ],
      faqs: [
        { q: "¿Una startup debe presentar antes de hablar con inversionistas?", a: "Presentar primero es lo más seguro. Muchos inversionistas no firman acuerdos de confidencialidad y algunas divulgaciones pueden limitar tu capacidad de patentar después. Una solicitud provisional es una forma común de asegurar una fecha rápido." },
        { q: "¿Los fundadores pueden redactar sin abogado?", a: "Sí. IPnite genera una solicitud completa y estructurada. Puedes presentarla por tu cuenta o enviarla a revisión profesional; en ambos casos, la revisión es tu responsabilidad." },
      ],
      cta: commonCta.es[0],
      ctaBody: commonCta.es[1],
    },
    pt: {
      title: "Software de patentes para startups e fundadores | IPnite",
      description: "Proteja sua tecnologia antes de apresentá-la ou lançá-la. Busque anterioridades, redija um pedido pronto para depósito e gerencie seu portfólio de PI.",
      h1: "Ferramentas de patentes para startups",
      eyebrow: "CONSTRUA PI COM RECURSOS LIMITADOS",
      lead: "Equipes em fase inicial precisam proteger sua vantagem técnica antes de apresentar, publicar ou lançar, sem gastar o caixa em um primeiro rascunho. A IPnite dá aos fundadores um caminho guiado da invenção ao pedido pronto para depósito.",
      sections: [
        {
          heading: "Deposite antes de divulgar",
          paragraphs: [
            "Demo days, apresentações a investidores, artigos e lançamentos podem virar divulgações públicas. Na maioria dos países, uma divulgação antes do depósito pode destruir a novidade; os períodos de graça dos Estados Unidos, do México, da Argentina e do Brasil são limitados e não valem em toda parte. Com um pedido depositado você pode falar da sua tecnologia com muito menos risco.",
          ],
        },
        {
          heading: "O que os fundadores fazem com a IPnite",
          paragraphs: [
            "A IPnite transforma o conhecimento dos fundadores em uma divulgação organizada, compara-a com as anterioridades e produz um pedido estruturado que você pode depositar por conta própria ou entregar a um profissional para uma revisão mais rápida e barata.",
          ],
          bullets: [
            "Busca de anterioridade antes de investir no depósito",
            "Conhecimento técnico transformado em divulgação completa",
            "Reivindicações, relatório e desenhos em um só projeto",
            "Exportação em DOCX para depositar ou revisar",
            "Versões, colaboradores e prazos em um só portfólio",
          ],
        },
        {
          heading: "Planos que crescem com a empresa",
          paragraphs: [
            "O plano Startup inclui até 10 projetos ativos, 10 buscas de anterioridade por mês, até 3 colaboradores por projeto e exportação em DOCX, JSON e ZIP. Você pode começar com o teste grátis de 7 dias, que inclui uma busca de anterioridade.",
          ],
        },
        {
          heading: "Sua PI, suas decisões",
          paragraphs: [
            "Tudo o que você cria na IPnite pertence à sua empresa, e a IPnite nunca usa isso para treinar IA. A IPnite é um software, não um escritório de advocacia: você decide quando depositar por conta própria e quando envolver um profissional.",
          ],
        },
      ],
      faqs: [
        { q: "Uma startup deve depositar antes de falar com investidores?", a: "Depositar primeiro é o mais seguro. Muitos investidores não assinam acordos de confidencialidade, e algumas divulgações podem limitar a possibilidade de patentear depois." },
        { q: "Fundadores podem redigir sem advogado?", a: "Sim. A IPnite gera um pedido completo e estruturado. Você pode depositá-lo por conta própria ou enviá-lo para revisão profissional; em ambos os casos, a revisão é sua responsabilidade." },
      ],
      cta: commonCta.pt[0],
      ctaBody: commonCta.pt[1],
    },
  }),
};

const attorneys: SeoPage = {
  id: "attorneys",
  kind: "audience",
  related: ["ai-drafting", "prior-art", "drawings", "security"],
  primaryAction: { name: "start_drafting", event: "start_drafting_clicked" },
  locales: routed("attorneys", {
    en: {
      title: "AI Patent Drafting for Attorneys and Patent Agents | IPnite",
      description: "Cut first-draft time for claims, specifications, and figures while strategy and final judgment stay with the practitioner. Editable DOCX export.",
      h1: "AI Patent Tools for Patent Professionals",
      eyebrow: "A DRAFTING COPILOT FOR FIRMS",
      lead: "IPnite helps attorneys, patent agents, and IP firms reduce repetitive preparation—intake, prior art, first-draft claims, specifications, and figures—while strategy and final legal judgment remain with the practitioner.",
      sections: [
        {
          heading: "Where the time goes—and where IPnite helps",
          paragraphs: [
            "Much of a first draft is structured work: turning an inventor's notes into a disclosure, building claim trees, writing embodiments, and keeping reference numerals consistent. IPnite handles that structure so the practitioner spends time on claim strategy and prosecution risk.",
          ],
          bullets: [
            "Consistent invention disclosure intake",
            "Prior-art research connected to each matter",
            "Independent and dependent claim starting points",
            "Specification sections with embodiments and variants",
            "Reference drawings with consistent numerals",
            "Editable DOCX for refinement in your usual tools",
          ],
        },
        {
          heading: "Built for teams",
          paragraphs: [
            "The Institutional plan includes three users, unlimited active projects under a reasonable-use policy, 50 prior-art searches per month, the FTO module, team permissions, and invention disclosure management. Additional users are billed at the regional price.",
          ],
        },
        {
          heading: "Confidentiality designed for client work",
          paragraphs: [
            "IPnite never uses client materials to train AI models or for any purpose other than delivering the service. Processing runs on the enterprise Vertex AI API in IPnite's Google Cloud environment. See the security page for details.",
          ],
        },
        {
          heading: "Professional responsibility stays with you",
          paragraphs: [
            "IPnite is a software tool. Practitioners remain responsible for verifying output, complying with professional rules, and every filing decision.",
          ],
        },
      ],
      cta: "Try IPnite with your next matter",
      ctaBody: "Start a free 7-day trial with one prior-art search, or talk to us about the Institutional plan.",
    },
    es: {
      title: "Redacción de patentes con IA para abogados y agentes | IPnite",
      description: "Reduce el tiempo de los primeros borradores de reivindicaciones, descripciones y figuras; la estrategia sigue en manos del profesional. Exporta en DOCX.",
      h1: "Herramientas de IA para profesionales de patentes",
      eyebrow: "UN COPILOTO DE REDACCIÓN PARA DESPACHOS",
      lead: "IPnite ayuda a abogados, agentes de patentes y despachos de PI a reducir el trabajo repetitivo (recepción de la divulgación, antecedentes, primeras reivindicaciones, descripción y figuras) mientras la estrategia y el criterio jurídico final siguen en manos del profesional.",
      sections: [
        {
          heading: "Dónde se va el tiempo y dónde ayuda IPnite",
          paragraphs: [
            "Buena parte de un primer borrador es trabajo estructurado: convertir las notas del inventor en una divulgación, armar el árbol de reivindicaciones, redactar modalidades y mantener coherentes los números de referencia. IPnite resuelve esa estructura para que el profesional dedique su tiempo a la estrategia de reivindicaciones y al riesgo en el trámite.",
          ],
          bullets: [
            "Recepción consistente de divulgaciones de invención",
            "Búsqueda de antecedentes conectada con cada asunto",
            "Puntos de partida para reivindicaciones independientes y dependientes",
            "Secciones de la descripción con modalidades y variantes",
            "Dibujos de referencia con numeración coherente",
            "DOCX editable para afinar en tus herramientas habituales",
          ],
        },
        {
          heading: "Pensado para equipos",
          paragraphs: [
            "El plan Institucional incluye tres usuarios, proyectos activos ilimitados sujetos a uso razonable, 50 búsquedas de antecedentes al mes, el módulo FTO, permisos de equipo y gestión de divulgaciones de invención. Los usuarios adicionales se cobran al precio regional.",
          ],
        },
        {
          heading: "Confidencialidad pensada para el trabajo con clientes",
          paragraphs: [
            "IPnite nunca usa materiales de clientes para entrenar modelos de IA ni para otro fin que prestar el servicio. El procesamiento se hace con la API empresarial de Vertex AI en el entorno de Google Cloud de IPnite. Consulta la página de seguridad para más detalles.",
          ],
        },
        {
          heading: "La responsabilidad profesional sigue siendo tuya",
          paragraphs: [
            "IPnite es una herramienta de software. El profesional sigue siendo responsable de verificar los resultados, de cumplir las normas de su ejercicio y de cada decisión de presentación.",
          ],
        },
      ],
      cta: "Prueba IPnite con tu próximo asunto",
      ctaBody: "Empieza la prueba gratis de 7 días con una búsqueda de antecedentes, o escríbenos para conocer el plan Institucional.",
    },
    pt: {
      title: "Redação de patentes com IA para advogados e agentes | IPnite",
      description: "Reduza o tempo dos primeiros rascunhos de reivindicações, relatórios e figuras, com a estratégia nas mãos do profissional. Exportação em DOCX editável.",
      h1: "Ferramentas de IA para profissionais de patentes",
      eyebrow: "UM COPILOTO DE REDAÇÃO PARA ESCRITÓRIOS",
      lead: "A IPnite ajuda advogados, agentes da propriedade industrial e escritórios de PI a reduzir o trabalho repetitivo (recebimento da divulgação, anterioridades, primeiras reivindicações, relatório e figuras) enquanto a estratégia e o julgamento jurídico final ficam com o profissional.",
      sections: [
        {
          heading: "Onde o tempo vai e onde a IPnite ajuda",
          paragraphs: [
            "Boa parte de um primeiro rascunho é trabalho estruturado: transformar as anotações do inventor em uma divulgação, montar a árvore de reivindicações, redigir concretizações e manter os sinais de referência coerentes. A IPnite resolve essa estrutura para que o profissional dedique seu tempo à estratégia de reivindicações e ao risco no exame.",
          ],
          bullets: [
            "Recebimento consistente de divulgações de invenção",
            "Busca de anterioridade conectada a cada caso",
            "Pontos de partida para reivindicações independentes e dependentes",
            "Seções do relatório com concretizações e variantes",
            "Desenhos de referência com numeração coerente",
            "DOCX editável para refinar nas suas ferramentas habituais",
          ],
        },
        {
          heading: "Pensado para equipes",
          paragraphs: [
            "O plano Institucional inclui três usuários, projetos ativos ilimitados sujeitos a uso razoável, 50 buscas de anterioridade por mês, o módulo FTO, permissões de equipe e gestão de divulgações de invenção. Usuários adicionais são cobrados pelo preço regional.",
          ],
        },
        {
          heading: "Confidencialidade pensada para o trabalho com clientes",
          paragraphs: [
            "A IPnite nunca usa materiais de clientes para treinar modelos de IA nem para outro fim além de prestar o serviço. O processamento é feito pela API empresarial do Vertex AI no ambiente do Google Cloud da IPnite. Veja a página de segurança para mais detalhes.",
          ],
        },
        {
          heading: "A responsabilidade profissional continua sendo sua",
          paragraphs: [
            "A IPnite é uma ferramenta de software. O profissional continua responsável por verificar os resultados, cumprir as normas da profissão e cada decisão de depósito.",
          ],
        },
      ],
      cta: "Experimente a IPnite no seu próximo caso",
      ctaBody: "Comece o teste grátis de 7 dias com uma busca de anterioridade ou fale conosco sobre o plano Institucional.",
    },
  }),
};

const universities: SeoPage = {
  id: "universities",
  kind: "audience",
  related: ["portfolio", "ai-drafting", "prior-art", "security"],
  primaryAction: { name: "try_ipnite" },
  locales: routed("universities", {
    en: {
      title: "Patent Software for Universities and TTOs | IPnite",
      description: "Capture researcher disclosures, assess prior art, prepare applications, and track the institutional portfolio. 50% off for eligible institutions.",
      h1: "Patent Management for Universities and Research Institutions",
      eyebrow: "CONNECT RESEARCH WITH PATENT WORK",
      lead: "Technology transfer offices receive more invention disclosures than they can draft. IPnite gives researchers and TTO staff one structure to capture technical information, assess prior art, prepare applications, and keep the institutional portfolio visible.",
      sections: [
        {
          heading: "From researcher disclosure to filing decision",
          paragraphs: [
            "Researchers describe their results in a guided disclosure. The TTO reviews prior art in the same project, decides which inventions to pursue, and prepares a structured application without re-typing the science.",
          ],
          bullets: [
            "Invention disclosure management",
            "Prior-art search connected to each disclosure",
            "Drafting, drawings, and QA in one project",
            "Team management and permissions",
            "Portfolio view across departments and projects",
          ],
        },
        {
          heading: "Watch out for publication timing",
          paragraphs: [
            "Academic publishing and conference talks are public disclosures. Filing before publication preserves options in countries without a grace period, while the grace periods in the United States, Mexico, Argentina, and Brazil only cover specific situations. A shared workflow helps the TTO act before the paper goes out.",
          ],
        },
        {
          heading: "IPnite for Research",
          paragraphs: [
            "Eligible universities, research centers, and TTOs receive 50% off the Institutional plan and additional users after eligibility verification.",
          ],
        },
      ],
      cta: "Talk to us about IPnite for Research",
      ctaBody: "Start a free 7-day trial or contact us to verify eligibility for the 50% research discount.",
    },
    es: {
      title: "Software de patentes para universidades y OTT | IPnite",
      description: "Recibe divulgaciones de investigadores, busca antecedentes, prepara solicitudes y sigue la cartera institucional. 50% de descuento para instituciones elegibles.",
      h1: "Gestión de patentes para universidades e instituciones de investigación",
      eyebrow: "CONECTA INVESTIGACIÓN Y PATENTES",
      lead: "Las oficinas de transferencia de tecnología reciben más divulgaciones de las que pueden redactar. IPnite da a investigadores y personal de transferencia una sola estructura para capturar información técnica, buscar antecedentes, preparar solicitudes y mantener visible la cartera institucional.",
      sections: [
        {
          heading: "De la divulgación del investigador a la decisión de presentar",
          paragraphs: [
            "Los investigadores describen sus resultados en una divulgación guiada. La oficina de transferencia revisa los antecedentes en el mismo proyecto, decide qué invenciones proteger y prepara una solicitud estructurada sin volver a capturar la ciencia.",
          ],
          bullets: [
            "Gestión de divulgaciones de invención",
            "Búsqueda de antecedentes conectada con cada divulgación",
            "Redacción, dibujos y control de calidad en un solo proyecto",
            "Gestión de equipos y permisos",
            "Vista de cartera por departamento y proyecto",
          ],
        },
        {
          heading: "Cuidado con el momento de publicar",
          paragraphs: [
            "Los artículos académicos y las ponencias son divulgaciones públicas. Presentar antes de publicar conserva opciones en países sin periodo de gracia, y los periodos de gracia de Estados Unidos, México, Argentina y Brasil solo cubren situaciones concretas. Un flujo compartido ayuda a la oficina de transferencia a actuar antes de que salga el artículo.",
          ],
        },
        {
          heading: "IPnite para Investigación",
          paragraphs: [
            "Universidades, centros de investigación y oficinas de transferencia elegibles reciben 50% de descuento en el plan Institucional y en usuarios adicionales, previa verificación.",
          ],
        },
      ],
      cta: "Conoce IPnite para Investigación",
      ctaBody: "Empieza la prueba gratis de 7 días o escríbenos para verificar la elegibilidad al descuento de 50%.",
    },
    pt: {
      title: "Software de patentes para universidades e NITs | IPnite",
      description: "Receba divulgações de pesquisadores, busque anterioridades, prepare pedidos e acompanhe o portfólio institucional. 50% de desconto para instituições elegíveis.",
      h1: "Gestão de patentes para universidades e instituições de pesquisa",
      eyebrow: "CONECTE PESQUISA E PATENTES",
      lead: "Os Núcleos de Inovação Tecnológica recebem mais divulgações do que conseguem redigir. A IPnite dá a pesquisadores e à equipe do NIT uma só estrutura para registrar informações técnicas, buscar anterioridades, preparar pedidos e manter visível o portfólio institucional.",
      sections: [
        {
          heading: "Da divulgação do pesquisador à decisão de depositar",
          paragraphs: [
            "Os pesquisadores descrevem seus resultados em uma divulgação guiada. O NIT revisa as anterioridades no mesmo projeto, decide quais invenções proteger e prepara um pedido estruturado sem redigitar a ciência.",
          ],
          bullets: [
            "Gestão de divulgações de invenção",
            "Busca de anterioridade conectada a cada divulgação",
            "Redação, desenhos e controle de qualidade em um só projeto",
            "Gestão de equipes e permissões",
            "Visão do portfólio por departamento e projeto",
          ],
        },
        {
          heading: "Atenção ao momento da publicação",
          paragraphs: [
            "Artigos acadêmicos e apresentações em congressos são divulgações públicas. Depositar antes de publicar preserva opções em países sem período de graça, e o período de graça brasileiro de 12 meses não é reconhecido em todos os países. Um fluxo compartilhado ajuda o NIT a agir antes da publicação.",
          ],
        },
        {
          heading: "IPnite para Pesquisa",
          paragraphs: [
            "Universidades, centros de pesquisa e NITs elegíveis recebem 50% de desconto no plano Institucional e em usuários adicionais, após verificação.",
          ],
        },
      ],
      cta: "Conheça a IPnite para Pesquisa",
      ctaBody: "Comece o teste grátis de 7 dias ou fale conosco para verificar a elegibilidade ao desconto de 50%.",
    },
  }),
};

export const audiencePages: SeoPage[] = [startups, attorneys, universities];
