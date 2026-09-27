import type { ClusterPage, ClusterSource } from "../types";

/**
 * Intent: "is AI safe for patents?" — vendor-neutral guidance on confidentiality when an unpublished invention goes into an AI system.
 * IPnite-specific claims here are limited to what the existing security page and Privacy Policy already state.
 * The existing /patent-ai-security/ page remains the canonical page for IPnite's own security details.
 */

const google: ClusterSource[] = [
  { label: "Google Cloud — Vertex AI and zero data retention", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/vertex-ai-zero-data-retention" },
  { label: "Google Cloud — Abuse monitoring for generative AI", url: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/abuse-monitoring" },
  { label: "Google Cloud Platform Terms of Service", url: "https://cloud.google.com/terms" },
];

export const aiPatentConfidentiality: ClusterPage = {
  id: "ai-patent-confidentiality",
  schema: "article",
  aboutSoftware: false,
  primaryAction: { name: "try_ipnite" },
  related: [{ route: "security" }, { article: "can-ai-write-a-patent-application" }, { article: "pitch-investors-before-filing-a-patent" }, { cluster: "patent-drafting-software" }, { cluster: "ai-patent-tool-for-inventors" }, { route: "provisional" }, { route: "attorneys" }, { cluster: "best-ai-patent-drafting-tools" }],
  locales: {
    en: {
      title: "AI Patent Confidentiality: Is AI Safe for Inventions? | IPnite",
      description: "What actually happens to an unpublished invention in an AI tool: training, retention, human review, and disclosure risk, plus the questions to ask any vendor.",
      h1: "AI Patent Confidentiality: Is It Safe to Put an Invention into AI?",
      eyebrow: "PRIVACY GUIDE",
      shortName: "AI patent confidentiality",
      lead: "An invention that has not been filed depends on staying confidential. Before you paste a disclosure into any AI system, it helps to know where the real risks are—model training, retention, human access, and public disclosure—and which contract terms address them.",
      blocks: [
        {
          type: "prose",
          heading: "Why confidentiality matters more for patents",
          paragraphs: [
            "Most countries require an invention to be new on the filing date. Information that becomes available to the public before you file can be cited against your own application, and in countries without a grace period the damage may be permanent.",
            "That makes the question broader than ordinary data privacy. It is not only whether a leak would be embarrassing, but whether your invention could reach anyone outside a confidential relationship before the filing date.",
          ],
        },
        {
          type: "table",
          heading: "Where the risk actually is",
          intro: "“AI” covers very different services. The risk depends on the terms and configuration of the specific service, not on the technology in general.",
          caption: "Confidentiality risks when using AI for unpublished inventions",
          columns: ["Risk", "What it means", "What to check"],
          rows: [
            ["Training on your inputs", "Your text is used to improve a model that other people use.", "Whether the terms exclude training, and whether that is a default or a setting you must change."],
            ["Retention and logs", "Copies of prompts and outputs are kept, even temporarily.", "How long inputs are cached or logged, and whether zero-retention options exist."],
            ["Human review", "Staff at the provider may read flagged content, for example for abuse monitoring.", "When human review can happen and under which account types."],
            ["Subprocessors", "Your data passes through other companies' systems.", "The list of subprocessors and the AI provider behind the product."],
            ["Account access", "Colleagues, contractors, or a shared login can see the project.", "Permissions, collaborator controls, and audit logs."],
            ["Public disclosure", "The invention becomes available to the public before filing.", "Whether the service is confidential and access-controlled, and professional advice if in doubt."],
          ],
        },
        {
          type: "split",
          heading: "Consumer chat apps versus professional tools",
          intro: "The same underlying model can be offered under very different terms.",
          left: {
            title: "Be cautious with",
            items: [
              "Free or personal accounts whose terms allow using conversations to improve models",
              "Shared or personal logins used for company inventions",
              "Browser extensions and plug-ins with unclear data handling",
              "Pasting a full disclosure when a short, non-confidential description would do",
            ],
          },
          right: {
            title: "Look for",
            items: [
              "Written terms that exclude training on customer content",
              "Business or enterprise AI APIs rather than consumer apps",
              "Stated retention periods and deletion options",
              "Encryption in transit and at rest, access controls, and audit logs",
            ],
          },
        },
        {
          type: "checklist",
          heading: "Questions to ask any AI patent tool",
          items: [
            "Is my content used to train or improve any model—yours or your AI provider's?",
            "Which AI provider and API process my data, and under whose account?",
            "What is cached or logged, for how long, and who can read it?",
            "Can I delete projects, and what happens to backups?",
            "Is data encrypted in transit and at rest?",
            "Who inside my team and outside it can access a project?",
            "Do you have a privacy policy and data-processing terms I can review before uploading anything?",
          ],
        },
        {
          type: "steps",
          heading: "Practical habits that reduce risk",
          steps: [
            { title: "Choose the tool before the invention", body: "Read the terms first. Once a disclosure is uploaded, you cannot take it back." },
            { title: "Keep inventions out of personal chat accounts", body: "Use a service with written confidentiality and no-training terms, under an account your organization controls." },
            { title: "Share only what the task needs", body: "A prior-art search may need the technical concept, not customer names or commercial plans." },
            { title: "File early when disclosure is coming", body: "If you plan to pitch, publish, or launch, a filed application—such as a provisional in the United States—protects your date." },
            { title: "Use NDAs for people, not for software", body: "NDAs protect conversations with investors and partners. For software, rely on the vendor's contract and settings." },
          ],
        },
        {
          type: "prose",
          heading: "How IPnite handles invention data",
          paragraphs: [
            "IPnite does not use your inventions, prompts, documents, or drafts to train AI models or for any purpose other than providing the service. AI requests run through the enterprise Vertex AI API in IPnite's own Google Cloud environment, not through a consumer chatbot account. Google Cloud's terms state that customer data is not used to train or fine-tune Google's models without the customer's permission or instruction; IPnite has not given that permission.",
            "Google documents that some generative AI features may keep data temporarily, for example caching inputs for up to 24 hours or logging prompts for abuse monitoring under certain account types. Invention materials are encrypted in transit and at rest, and access is restricted to the systems and people needed to provide the service. No system is completely secure; the security page and Privacy Policy describe the details.",
          ],
        },
        {
          type: "callout",
          tone: "limit",
          heading: "This is general information, not legal advice",
          paragraphs: ["Whether a particular use of an AI service could affect novelty depends on the service's terms and on the law of each country. If an invention is valuable and you are unsure, speak with a patent professional before sharing it with any third party."],
        },
      ],
      faqs: [
        { q: "Is it safe to use AI to draft a patent?", a: "It can be, when the service contractually excludes training on your content, limits retention and access, and encrypts data. The risk comes from using services whose terms allow reuse of your inputs, not from AI as such." },
        { q: "Can using ChatGPT or another chatbot count as public disclosure?", a: "It depends on the service's terms and on each country's law, and there is little case law. Consumer accounts whose conversations may be used for training are the riskiest option. Use professional tools with confidentiality terms, and ask a patent professional if an invention is valuable." },
        { q: "Does IPnite train AI on my invention?", a: "No. IPnite never uses your inventions, prompts, documents, or drafts to train AI models or for any purpose other than providing the service." },
        { q: "Should I file before using AI tools?", a: "Filing is not required before using a confidential tool, but filing before any public disclosure is the safest way to protect your date. Many inventors use AI to prepare the application they file." },
      ],
      sources: [...google, { label: "IPnite — Privacy Policy", url: "https://www.ipnite.com/privacy/" }],
      cta: { heading: "Draft with confidentiality in mind", body: "Start the 7-day free trial. Your inventions are never used to train AI models. No credit card." },
    },
    es: {
      title: "Confidencialidad de patentes con IA: ¿es seguro? | IPnite",
      description: "Qué pasa realmente con una invención no publicada en una herramienta de IA: entrenamiento, retención, revisión humana y riesgo de divulgación.",
      h1: "Confidencialidad de patentes con IA: ¿es seguro poner una invención en una IA?",
      eyebrow: "GUÍA DE PRIVACIDAD",
      shortName: "Confidencialidad de patentes con IA",
      lead: "Una invención que aún no se presenta depende de mantenerse confidencial. Antes de pegar una divulgación en cualquier sistema de IA, conviene saber dónde están los riesgos reales (entrenamiento de modelos, retención, acceso humano y divulgación pública) y qué condiciones contractuales los cubren.",
      blocks: [
        {
          type: "prose",
          heading: "Por qué la confidencialidad importa más en patentes",
          paragraphs: [
            "La mayoría de los países exige que la invención sea nueva en la fecha de presentación. La información que se hace accesible al público antes de presentar puede citarse contra tu propia solicitud, y en países sin periodo de gracia el daño puede ser permanente.",
            "Por eso la pregunta va más allá de la privacidad de datos habitual. No se trata solo de si una filtración sería incómoda, sino de si tu invención podría llegar a alguien fuera de una relación confidencial antes de la fecha de presentación.",
          ],
        },
        {
          type: "table",
          heading: "Dónde está realmente el riesgo",
          intro: "“IA” abarca servicios muy distintos. El riesgo depende de las condiciones y la configuración de cada servicio, no de la tecnología en general.",
          caption: "Riesgos de confidencialidad al usar IA con invenciones no publicadas",
          columns: ["Riesgo", "Qué significa", "Qué revisar"],
          rows: [
            ["Entrenamiento con tus datos", "Tu texto se usa para mejorar un modelo que usan otras personas.", "Si las condiciones excluyen el entrenamiento y si eso es predeterminado o una opción que debes cambiar."],
            ["Retención y registros", "Se guardan copias de instrucciones y respuestas, aunque sea temporalmente.", "Cuánto tiempo se almacenan o registran las entradas y si existen opciones sin retención."],
            ["Revisión humana", "Personal del proveedor puede leer contenido marcado, por ejemplo para vigilar abusos.", "Cuándo puede haber revisión humana y con qué tipos de cuenta."],
            ["Subencargados", "Tus datos pasan por sistemas de otras empresas.", "La lista de subencargados y el proveedor de IA detrás del producto."],
            ["Acceso a la cuenta", "Colegas, contratistas o una cuenta compartida pueden ver el proyecto.", "Permisos, control de colaboradores y registros de auditoría."],
            ["Divulgación pública", "La invención queda al alcance del público antes de presentarla.", "Si el servicio es confidencial y con acceso controlado, y asesoría profesional si hay dudas."],
          ],
        },
        {
          type: "split",
          heading: "Apps de chat para consumidores frente a herramientas profesionales",
          intro: "El mismo modelo de fondo puede ofrecerse con condiciones muy distintas.",
          left: {
            title: "Ten cuidado con",
            items: [
              "Cuentas gratuitas o personales cuyas condiciones permiten usar las conversaciones para mejorar modelos",
              "Cuentas personales o compartidas usadas para invenciones de la empresa",
              "Extensiones de navegador y complementos con manejo de datos poco claro",
              "Pegar una divulgación completa cuando bastaría una descripción breve y no confidencial",
            ],
          },
          right: {
            title: "Busca",
            items: [
              "Condiciones escritas que excluyan el entrenamiento con el contenido del cliente",
              "API de IA empresariales en lugar de apps para consumidores",
              "Plazos de retención declarados y opciones para eliminar datos",
              "Cifrado en tránsito y en reposo, control de accesos y registros de auditoría",
            ],
          },
        },
        {
          type: "checklist",
          heading: "Preguntas para cualquier herramienta de patentes con IA",
          items: [
            "¿Mi contenido se usa para entrenar o mejorar algún modelo, tuyo o de tu proveedor de IA?",
            "¿Qué proveedor y qué API de IA procesan mis datos, y bajo la cuenta de quién?",
            "¿Qué se almacena temporalmente o se registra, por cuánto tiempo y quién puede leerlo?",
            "¿Puedo eliminar proyectos, y qué pasa con los respaldos?",
            "¿Los datos se cifran en tránsito y en reposo?",
            "¿Quién, dentro y fuera de mi equipo, puede acceder a un proyecto?",
            "¿Tienes una política de privacidad y condiciones de tratamiento de datos que pueda revisar antes de subir nada?",
          ],
        },
        {
          type: "steps",
          heading: "Hábitos prácticos que reducen el riesgo",
          steps: [
            { title: "Elige la herramienta antes que la invención", body: "Lee primero las condiciones. Una vez que subes una divulgación, no puedes recuperarla." },
            { title: "No uses cuentas personales de chat para invenciones", body: "Usa un servicio con condiciones escritas de confidencialidad y sin entrenamiento, con una cuenta que controle tu organización." },
            { title: "Comparte solo lo que la tarea necesita", body: "Una búsqueda de antecedentes puede necesitar el concepto técnico, no nombres de clientes ni planes comerciales." },
            { title: "Presenta pronto si vas a divulgar", body: "Si piensas presentar a inversionistas, publicar o lanzar, una solicitud presentada, como una provisional, protege tu fecha." },
            { title: "Los NDA son para personas, no para software", body: "Un acuerdo de confidencialidad protege conversaciones con inversionistas y socios. Con el software, apóyate en el contrato y la configuración del proveedor." },
          ],
        },
        {
          type: "prose",
          heading: "Cómo maneja IPnite los datos de tu invención",
          paragraphs: [
            "IPnite no usa tus invenciones, instrucciones, documentos ni borradores para entrenar modelos de IA ni para ningún fin distinto de prestarte el servicio. Las solicitudes de IA se procesan mediante la API empresarial de Vertex AI en el entorno de Google Cloud de IPnite, no mediante una cuenta de chatbot para consumidores. Las condiciones de Google Cloud establecen que los datos del cliente no se usan para entrenar ni ajustar los modelos de Google sin su permiso o instrucción; IPnite no ha dado ese permiso.",
            "Google documenta que algunas funciones de IA generativa pueden conservar datos temporalmente, por ejemplo almacenar entradas en caché hasta 24 horas o registrar instrucciones para vigilar abusos en ciertos tipos de cuenta. Los materiales de invención se cifran en tránsito y en reposo, y el acceso se limita a los sistemas y personas necesarios para prestar el servicio. Ningún sistema es completamente seguro; la página de seguridad y la Política de privacidad dan los detalles.",
          ],
        },
        {
          type: "callout",
          tone: "limit",
          heading: "Información general, no asesoría legal",
          paragraphs: ["Si un uso concreto de un servicio de IA puede afectar la novedad depende de las condiciones del servicio y de la ley de cada país. Si una invención es valiosa y tienes dudas, consulta a un profesional de patentes antes de compartirla con terceros."],
        },
      ],
      faqs: [
        { q: "¿Es seguro usar IA para redactar una patente?", a: "Puede serlo si el servicio excluye por contrato el entrenamiento con tu contenido, limita la retención y el acceso, y cifra los datos. El riesgo viene de usar servicios cuyas condiciones permiten reutilizar tus entradas, no de la IA en sí." },
        { q: "¿Usar ChatGPT u otro chatbot puede contar como divulgación pública?", a: "Depende de las condiciones del servicio y de la ley de cada país, y hay poca jurisprudencia. Las cuentas para consumidores cuyas conversaciones pueden usarse para entrenar son la opción más riesgosa. Usa herramientas profesionales con condiciones de confidencialidad y consulta a un profesional si la invención es valiosa." },
        { q: "¿IPnite entrena su IA con mi invención?", a: "No. IPnite nunca usa tus invenciones, instrucciones, documentos ni borradores para entrenar modelos de IA ni para otro fin distinto de prestar el servicio." },
        { q: "¿Debo presentar la solicitud antes de usar herramientas de IA?", a: "No es obligatorio para usar una herramienta confidencial, pero presentar antes de cualquier divulgación pública es la forma más segura de proteger tu fecha. Muchos inventores usan IA precisamente para preparar la solicitud que presentan." },
      ],
      sources: [...google, { label: "IPnite — Política de privacidad", url: "https://www.ipnite.com/es/privacy/" }],
      cta: { heading: "Redacta con la confidencialidad en mente", body: "Empieza la prueba gratis de 7 días. Tus invenciones nunca se usan para entrenar modelos de IA. Sin tarjeta." },
    },
    pt: {
      title: "Confidencialidade de patentes com IA: é seguro? | IPnite",
      description: "O que realmente acontece com uma invenção não publicada em uma ferramenta de IA: treinamento, retenção, revisão humana e risco de divulgação.",
      h1: "Confidencialidade de patentes com IA: é seguro colocar uma invenção em uma IA?",
      eyebrow: "GUIA DE PRIVACIDADE",
      shortName: "Confidencialidade de patentes com IA",
      lead: "Uma invenção ainda não depositada depende de continuar confidencial. Antes de colar uma divulgação em qualquer sistema de IA, vale saber onde estão os riscos reais (treinamento de modelos, retenção, acesso humano e divulgação pública) e quais cláusulas contratuais tratam deles.",
      blocks: [
        {
          type: "prose",
          heading: "Por que a confidencialidade pesa mais em patentes",
          paragraphs: [
            "A maioria dos países exige que a invenção seja nova na data de depósito. Informações que se tornam acessíveis ao público antes do depósito podem ser citadas contra o seu próprio pedido, e em países sem período de graça o dano pode ser permanente.",
            "Por isso a pergunta vai além da privacidade de dados comum. Não se trata só de um vazamento ser constrangedor, mas de a invenção poder chegar a alguém fora de uma relação confidencial antes da data de depósito.",
          ],
        },
        {
          type: "table",
          heading: "Onde o risco realmente está",
          intro: "“IA” abrange serviços muito diferentes. O risco depende dos termos e da configuração de cada serviço, não da tecnologia em geral.",
          caption: "Riscos de confidencialidade ao usar IA com invenções não publicadas",
          columns: ["Risco", "O que significa", "O que verificar"],
          rows: [
            ["Treinamento com seus dados", "Seu texto é usado para melhorar um modelo que outras pessoas usam.", "Se os termos excluem o treinamento e se isso é padrão ou uma configuração que você precisa mudar."],
            ["Retenção e registros", "Cópias de instruções e respostas são guardadas, mesmo que temporariamente.", "Por quanto tempo as entradas ficam em cache ou em logs e se há opções sem retenção."],
            ["Revisão humana", "Funcionários do provedor podem ler conteúdo sinalizado, por exemplo para monitorar abusos.", "Quando pode haver revisão humana e em quais tipos de conta."],
            ["Suboperadores", "Seus dados passam pelos sistemas de outras empresas.", "A lista de suboperadores e o provedor de IA por trás do produto."],
            ["Acesso à conta", "Colegas, terceirizados ou um login compartilhado podem ver o projeto.", "Permissões, controle de colaboradores e registros de auditoria."],
            ["Divulgação pública", "A invenção fica acessível ao público antes do depósito.", "Se o serviço é confidencial e com acesso controlado, e orientação profissional em caso de dúvida."],
          ],
        },
        {
          type: "split",
          heading: "Apps de chat para consumidores versus ferramentas profissionais",
          intro: "O mesmo modelo pode ser oferecido com termos muito diferentes.",
          left: {
            title: "Cuidado com",
            items: [
              "Contas gratuitas ou pessoais cujos termos permitem usar conversas para melhorar modelos",
              "Logins pessoais ou compartilhados usados para invenções da empresa",
              "Extensões de navegador e plug-ins com tratamento de dados pouco claro",
              "Colar uma divulgação completa quando uma descrição curta e não confidencial bastaria",
            ],
          },
          right: {
            title: "Procure",
            items: [
              "Termos escritos que excluam o treinamento com o conteúdo do cliente",
              "APIs de IA corporativas em vez de apps para consumidores",
              "Prazos de retenção declarados e opções de exclusão",
              "Criptografia em trânsito e em repouso, controle de acesso e registros de auditoria",
            ],
          },
        },
        {
          type: "checklist",
          heading: "Perguntas para qualquer ferramenta de patentes com IA",
          items: [
            "Meu conteúdo é usado para treinar ou melhorar algum modelo, seu ou do seu provedor de IA?",
            "Qual provedor e qual API de IA processam meus dados, e sob a conta de quem?",
            "O que fica em cache ou em logs, por quanto tempo e quem pode ler?",
            "Posso excluir projetos, e o que acontece com os backups?",
            "Os dados são criptografados em trânsito e em repouso?",
            "Quem, dentro e fora da minha equipe, pode acessar um projeto?",
            "Existe uma política de privacidade e termos de tratamento de dados que eu possa ler antes de enviar qualquer coisa?",
          ],
        },
        {
          type: "steps",
          heading: "Hábitos práticos que reduzem o risco",
          steps: [
            { title: "Escolha a ferramenta antes da invenção", body: "Leia os termos primeiro. Depois que uma divulgação é enviada, não dá para desfazer." },
            { title: "Não use contas pessoais de chat para invenções", body: "Use um serviço com termos escritos de confidencialidade e sem treinamento, com uma conta controlada pela sua organização." },
            { title: "Compartilhe só o que a tarefa exige", body: "Uma busca de anterioridade pode precisar do conceito técnico, não de nomes de clientes nem de planos comerciais." },
            { title: "Deposite cedo se for divulgar", body: "Se você vai apresentar a investidores, publicar ou lançar, um pedido depositado protege sua data." },
            { title: "NDA é para pessoas, não para software", body: "Um acordo de confidencialidade protege conversas com investidores e parceiros. No software, conte com o contrato e as configurações do fornecedor." },
          ],
        },
        {
          type: "prose",
          heading: "Como a IPnite trata os dados da sua invenção",
          paragraphs: [
            "A IPnite não usa suas invenções, instruções, documentos ou rascunhos para treinar modelos de IA nem para qualquer finalidade além de prestar o serviço. As solicitações de IA são processadas pela API corporativa do Vertex AI no ambiente Google Cloud da própria IPnite, e não por uma conta de chatbot para consumidores. Os termos do Google Cloud afirmam que os dados do cliente não são usados para treinar ou ajustar os modelos do Google sem sua permissão ou instrução; a IPnite não deu essa permissão.",
            "O Google documenta que alguns recursos de IA generativa podem manter dados temporariamente, por exemplo armazenar entradas em cache por até 24 horas ou registrar instruções para monitorar abusos em certos tipos de conta. Os materiais de invenção são criptografados em trânsito e em repouso, e o acesso é restrito aos sistemas e pessoas necessários para prestar o serviço. Nenhum sistema é totalmente seguro; a página de segurança e a Política de Privacidade trazem os detalhes.",
          ],
        },
        {
          type: "callout",
          tone: "limit",
          heading: "Informação geral, não aconselhamento jurídico",
          paragraphs: ["Se um uso específico de um serviço de IA pode afetar a novidade depende dos termos do serviço e da lei de cada país. Se a invenção é valiosa e você tem dúvidas, fale com um profissional de patentes antes de compartilhá-la com terceiros."],
        },
      ],
      faqs: [
        { q: "É seguro usar IA para redigir uma patente?", a: "Pode ser, quando o serviço exclui por contrato o treinamento com seu conteúdo, limita retenção e acesso e criptografa os dados. O risco vem de usar serviços cujos termos permitem reaproveitar suas entradas, não da IA em si." },
        { q: "Usar o ChatGPT ou outro chatbot pode contar como divulgação pública?", a: "Depende dos termos do serviço e da lei de cada país, e há pouca jurisprudência. Contas para consumidores cujas conversas podem ser usadas para treinamento são a opção mais arriscada. Use ferramentas profissionais com termos de confidencialidade e consulte um profissional se a invenção for valiosa." },
        { q: "A IPnite treina IA com a minha invenção?", a: "Não. A IPnite nunca usa suas invenções, instruções, documentos ou rascunhos para treinar modelos de IA nem para outra finalidade além de prestar o serviço." },
        { q: "Devo depositar antes de usar ferramentas de IA?", a: "Não é obrigatório para usar uma ferramenta confidencial, mas depositar antes de qualquer divulgação pública é a forma mais segura de proteger sua data. Muitos inventores usam IA justamente para preparar o pedido que depositam." },
      ],
      sources: [...google, { label: "IPnite — Política de Privacidade", url: "https://www.ipnite.com/pt-br/privacy/" }],
      cta: { heading: "Redija pensando na confidencialidade", body: "Comece o teste grátis de 7 dias. Suas invenções nunca são usadas para treinar modelos de IA. Sem cartão." },
    },
  },
};
