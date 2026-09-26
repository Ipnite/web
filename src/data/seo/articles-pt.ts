import type { ArticleCopy } from "./articles";

const INPI_BR = { label: "INPI — Instituto Nacional da Propriedade Industrial", url: "https://www.gov.br/inpi/pt-br" };
const LPI = { label: "Lei da Propriedade Industrial (Lei 9.279/1996)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9279.htm" };
const USPTO_PROVISIONAL = { label: "USPTO — Pedido provisório (em inglês)", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" };
const USPTO_FEES = { label: "USPTO — Tabela de taxas (em inglês)", url: "https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule" };
const WIPO_PCT = { label: "OMPI — O sistema PCT (em inglês)", url: "https://www.wipo.int/pct/en/" };
const MPEP_608 = { label: "USPTO — MPEP 608.02, desenhos (em inglês)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" };
const MPEP_2100 = { label: "USPTO — MPEP capítulo 2100, patenteabilidade (em inglês)", url: "https://www.uspto.gov/web/offices/pac/mpep/mpep-2100.html" };
const GOOGLE_PATENTS = { label: "Google Patents", url: "https://patents.google.com/" };
const ESPACENET = { label: "EPO — Espacenet", url: "https://worldwide.espacenet.com/" };
const PATENTSCOPE = { label: "OMPI — PATENTSCOPE", url: "https://patentscope.wipo.int/" };

export const articlesPt: Record<string, ArticleCopy> = {
  "how-to-patent-an-idea": {
    title: "Como patentear uma ideia: guia passo a passo | IPnite",
    description: "Uma ideia se torna patenteável quando é uma solução técnica concreta. Os passos: documentar, buscar anterioridades, redigir, depositar e proteger fora.",
    h1: "Como patentear uma ideia",
    lead: "Não é possível patentear uma ideia abstrata, mas é possível patentear a solução técnica concreta por trás dela. Este é o caminho da ideia até o pedido depositado.",
    sections: [
      {
        heading: "1. Transforme a ideia em invenção",
        paragraphs: [
          "Os escritórios de patentes protegem invenções: soluções técnicas para problemas técnicos que podem ser fabricadas ou usadas. \"Um app para agricultores\" é uma ideia; um método concreto para processar dados de sensores de solo e programar a irrigação é uma invenção. Escreva o problema, como sua solução funciona, seus componentes essenciais e as alternativas possíveis.",
          "Mantenha a invenção em sigilo enquanto se prepara. Na maioria dos países, uma divulgação pública antes do depósito pode destruir a novidade, e os períodos de graça são limitados e não valem em toda parte.",
        ],
      },
      {
        heading: "2. Busque anterioridades",
        paragraphs: [
          "Antes de investir na redação, procure patentes, pedidos, artigos e produtos que já divulguem algo parecido. O objetivo não é provar que nada existe, mas encontrar as referências mais próximas e entender o que é realmente novo na sua solução.",
        ],
      },
      {
        heading: "3. Avalie a patenteabilidade",
        paragraphs: [
          "A maioria dos sistemas exige novidade, atividade inventiva e aplicação industrial. Algumas matérias, como métodos abstratos, descobertas ou certos métodos médicos, são excluídas ou restritas conforme o país.",
        ],
      },
      {
        heading: "4. Escolha onde e como depositar",
        paragraphs: [
          "Defina quais mercados importam. No Brasil você deposita diretamente o pedido completo no INPI; não existe pedido provisório. Nos Estados Unidos e, desde abril de 2026, no México, um provisório garante uma data antecipada por 12 meses. Em até 12 meses do primeiro depósito você pode estender a proteção ao exterior com a prioridade da Convenção de Paris ou com um único pedido PCT.",
        ],
      },
      {
        heading: "5. Redija o pedido",
        paragraphs: [
          "Um pedido de patente tem um relatório descritivo detalhado o suficiente para que um técnico no assunto reproduza a invenção, reivindicações que definem a proteção, um resumo e normalmente desenhos. As reivindicações são o mais importante: definem o que outros não podem fazer sem sua autorização.",
        ],
        bullets: [
          "Descreva várias concretizações e variantes, não apenas um protótipo",
          "Redija reivindicações independentes para a combinação central e dependentes como fallback",
          "Use terminologia e sinais de referência coerentes",
          "Revise tudo antes do depósito ou envie para revisão profissional",
        ],
      },
      {
        heading: "6. Deposite e acompanhe o processo",
        paragraphs: [
          "No Brasil, o pedido fica em sigilo por 18 meses e depois é publicado, e o exame precisa ser solicitado em até 36 meses do depósito. O INPI pode emitir exigências e, ao final, conceder ou indeferir a patente. Acompanhe os prazos e pague as anuidades para manter o pedido e a patente em vigor.",
        ],
      },
    ],
    faqs: [
      { q: "Posso patentear uma ideia sem protótipo?", a: "Sim, se você conseguir descrever a invenção com detalhe suficiente para que um técnico no assunto a fabrique e use. Não é preciso um protótipo físico, mas um conceito vago não basta." },
      { q: "Quanto tempo leva para obter uma patente?", a: "Depende do escritório e do campo técnico; o exame costuma levar vários anos. O depósito, porém, garante sua data imediatamente." },
    ],
    sources: [INPI_BR, LPI, WIPO_PCT],
  },

  "what-is-a-provisional-patent-application": {
    title: "O que é um pedido provisório de patente? | IPnite",
    description: "O pedido provisório garante uma data de depósito por 12 meses sem exame. Como funciona nos Estados Unidos e no México desde 2026, e por que o Brasil não o tem.",
    h1: "O que é um pedido provisório de patente?",
    lead: "É um depósito antecipado e simplificado que garante uma data para sua invenção e dá 12 meses para depositar o pedido completo.",
    sections: [
      {
        heading: "Como funciona",
        paragraphs: [
          "O provisório é depositado com a descrição da invenção e, normalmente, desenhos. Não é examinado e nunca se torna patente sozinho. Em até 12 meses é preciso depositar o pedido completo que reivindica seu benefício. A partir daí, a data do provisório vale para tudo o que o provisório realmente descreve.",
        ],
      },
      {
        heading: "Onde existe",
        paragraphs: [
          "Os Estados Unidos usam pedidos provisórios desde 1995. O México os criou com a reforma da sua Lei Federal de Proteção à Propriedade Industrial, em vigor desde 6 de abril de 2026: o provisório mexicano não é publicado nem examinado, o prazo de 12 meses é improrrogável e ele não pode reivindicar prioridade de um pedido anterior. O Brasil e a Argentina não têm figura equivalente: no Brasil, a data vem do próprio pedido depositado no INPI.",
        ],
      },
      {
        heading: "Vantagens",
        paragraphs: [],
        bullets: [
          "Uma data de depósito antecipada enquanto você continua desenvolvendo a invenção",
          "Doze meses para testar o mercado, captar recursos ou ajustar as reivindicações",
          "Taxas oficiais menores que as de um pedido completo",
          "Nos Estados Unidos, o direito de usar \"patent pending\"",
        ],
      },
      {
        heading: "O principal risco: uma divulgação fraca",
        paragraphs: [
          "O pedido posterior só pode se apoiar na data do provisório para aquilo que o provisório descreve. Se ele for um resumo curto ou uma apresentação, suas reivindicações finais podem ficar sem suporte e perder essa data. Trate o provisório como uma divulgação técnica completa: cada componente essencial, alternativas, exemplos e figuras.",
        ],
      },
    ],
    faqs: [
      { q: "O Brasil tem pedido provisório?", a: "Não. No Brasil, a data de depósito vem do pedido de patente depositado no INPI, que depois pode servir de prioridade para depósitos no exterior." },
      { q: "O que acontece se eu perder o prazo de 12 meses?", a: "Nos Estados Unidos o provisório expira e sua data não pode mais ser reivindicada; no México ele é considerado declinado. Qualquer divulgação posterior pode ser usada contra você." },
    ],
    sources: [USPTO_PROVISIONAL, INPI_BR],
  },

  "provisional-patent-application-cost": {
    title: "Quanto custa um pedido provisório de patente? | IPnite",
    description: "A taxa oficial é só uma parte do custo. O que compõe o preço de um provisório (taxas, desenhos, busca, redação e revisão) e como investir bem.",
    h1: "Quanto custa um pedido provisório de patente?",
    lead: "A taxa oficial costuma ser a menor parte do custo. O que você realmente paga é uma divulgação sólida o bastante para sustentar suas reivindicações futuras.",
    sections: [
      {
        heading: "Os componentes do custo",
        paragraphs: [],
        bullets: [
          "Taxa oficial de depósito; nos Estados Unidos depende do porte da entidade (grande, pequena ou micro)",
          "Busca de anterioridade para saber o que é realmente novo",
          "Redação do relatório, dos exemplos e, opcionalmente, das reivindicações",
          "Desenhos ou figuras",
          "Revisão profissional, se você optar por ela",
        ],
      },
      {
        heading: "Taxas oficiais",
        paragraphs: [
          "As taxas do USPTO mudam periodicamente e têm descontos para pequenas e microentidades. Consulte a tabela vigente antes do depósito. No México, o IMPI publica suas próprias tarifas para o novo pedido provisório. No Brasil não há provisório: o custo inicial é o do pedido de patente no INPI.",
        ],
      },
      {
        heading: "Por que o provisório mais barato pode sair mais caro",
        paragraphs: [
          "Um provisório só protege o que descreve. Um depósito apressado e enxuto pode custar pouco hoje, mas deixar o pedido completo sem suporte para suas reivindicações e obrigar você a depender de uma data posterior. Vale investir em uma descrição completa com variantes e figuras.",
        ],
      },
      {
        heading: "Onde a IPnite entra",
        paragraphs: [
          "A IPnite reúne busca de anterioridade, redação, desenhos e controle de qualidade em uma assinatura, a partir do plano Inventor. Você pode depositar o resultado por conta própria ou enviá-lo para revisão, o que normalmente reduz o tempo e o custo do profissional.",
        ],
      },
    ],
    sources: [USPTO_FEES, USPTO_PROVISIONAL],
  },

  "can-ai-write-a-patent-application": {
    title: "A IA pode redigir um pedido de patente? | IPnite",
    description: "A IA pode redigir reivindicações, relatórios e figuras, mas não pode ser inventora nem substituir a revisão. O que faz bem, riscos e como usá-la bem.",
    h1: "A IA pode redigir um pedido de patente?",
    lead: "Sim: a IA pode produzir um rascunho completo e estruturado. Ela não pode ser a inventora, e o resultado precisa de revisão cuidadosa antes do depósito.",
    sections: [
      {
        heading: "O que a IA faz bem",
        paragraphs: [
          "A redação de patentes tem muita estrutura: árvores de reivindicações, concretizações, terminologia coerente, sinais de referência e seções padrão. Uma IA preparada para esse fluxo transforma uma boa divulgação técnica em um rascunho completo muito mais rápido do que começar do zero e pode propor variantes que você não tinha escrito.",
        ],
      },
      {
        heading: "O que a IA não pode fazer",
        paragraphs: [
          "A IA não é inventora. Escritórios de patentes e tribunais de vários países, inclusive nos casos DABUS, entenderam que inventores devem ser pessoas físicas. A contribuição técnica precisa vir de pessoas. A IA também não conhece dados que você não forneceu e pode errar ou inventar referências.",
        ],
      },
      {
        heading: "Chatbots gerais versus software de patentes",
        paragraphs: [
          "Colar uma invenção em um chatbot de consumo traz dois problemas: sigilo, porque alguns serviços de consumo podem usar as conversas para melhorar seus modelos, e estrutura, porque um chat geral não mantém conectadas suas anterioridades, reivindicações, desenhos e versões. Um software de patentes deve explicar com clareza como trata seus dados.",
        ],
      },
      {
        heading: "Como usar IA com segurança",
        paragraphs: [],
        bullets: [
          "Forneça uma divulgação técnica completa e precisa",
          "Verifique cada afirmação técnica e cada referência citada",
          "Confira se as reivindicações têm suporte no relatório",
          "Use ferramentas que não treinam com seus dados",
          "Revise antes do depósito ou envie o rascunho para revisão profissional",
        ],
      },
    ],
    faqs: [
      { q: "A IPnite treina sua IA com minha invenção?", a: "Não. A IPnite nunca usa seu conteúdo para treinar modelos de IA nem para outro fim além de prestar o serviço." },
      { q: "Se eu usar IA para redigir, quem é o inventor?", a: "As pessoas que conceberam a invenção. Usar IA para escrever o pedido não muda a autoria da invenção." },
    ],
  },

  "how-to-search-existing-patents": {
    title: "Como buscar patentes existentes: bases gratuitas | IPnite",
    description: "Busque patentes no Google Patents, Espacenet, PATENTSCOPE e na base do INPI. Palavras-chave, classificações, citações e famílias, explicadas.",
    h1: "Como buscar patentes existentes",
    lead: "Uma boa busca combina várias bases de dados e técnicas: conceitos e sinônimos, classificações, citações e famílias de patentes.",
    sections: [
      {
        heading: "Bases gratuitas que vale conhecer",
        paragraphs: [],
        bullets: [
          "Google Patents: busca rápida de texto completo com tradução automática",
          "Espacenet (EPO): cobertura mundial e famílias de patentes",
          "PATENTSCOPE (OMPI): pedidos PCT e coleções nacionais",
          "Base de patentes do INPI para documentos brasileiros",
          "USPTO Patent Public Search para documentos dos Estados Unidos",
        ],
      },
      {
        heading: "Busque por conceito, não só por palavra",
        paragraphs: [
          "Documentos diferentes descrevem a mesma coisa com palavras diferentes. Liste as características essenciais da sua invenção e vários sinônimos de cada uma. Combine-os nas consultas e leia os resultados mais relevantes para descobrir mais terminologia.",
        ],
      },
      {
        heading: "Use as classificações",
        paragraphs: [
          "A Classificação Internacional de Patentes (IPC) e a Classificação Cooperativa de Patentes (CPC) agrupam documentos por tecnologia. Quando encontrar um documento relevante, veja seus códigos e busque dentro deles: surgirão documentos com linguagem totalmente diferente.",
        ],
      },
      {
        heading: "Siga as citações e as famílias",
        paragraphs: [
          "Cada documento relevante aponta para outros: os que ele cita e os posteriores que o citam. Uma família de patentes agrupa os depósitos da mesma invenção em vários países, o que ajuda a ler a versão no seu idioma e ver onde ela está protegida.",
        ],
      },
      {
        heading: "Mantenha um registro",
        paragraphs: [
          "Guarde as consultas, as bases, a data e por que cada documento importa. Esse registro torna a busca reproduzível e útil para a redação e a revisão profissional.",
        ],
      },
    ],
    sources: [GOOGLE_PATENTS, ESPACENET, PATENTSCOPE, INPI_BR],
  },

  "what-is-prior-art": {
    title: "O que é anterioridade em patentes? | IPnite",
    description: "Anterioridade é a informação pública anterior ao depósito que pode mostrar que sua invenção não é nova ou é óbvia. O que conta e por que importa.",
    h1: "O que é anterioridade?",
    lead: "Anterioridade (o estado da técnica) é tudo o que foi tornado público antes da sua data de depósito e pode influenciar se sua invenção é nova e inventiva.",
    sections: [
      {
        heading: "O que conta como anterioridade",
        paragraphs: [
          "Não só patentes. Também contam pedidos publicados, artigos científicos, teses, livros, sites, vídeos, manuais de produto, produtos à venda e palestras públicas, em qualquer país e em qualquer idioma.",
        ],
      },
      {
        heading: "O que importa é a data",
        paragraphs: [
          "A anterioridade é medida contra sua data de depósito, ou contra sua data de prioridade se você a reivindicar. Por isso depositar cedo importa: a cada dia antes do depósito podem surgir novas divulgações, inclusive as suas. O período de graça brasileiro de 12 meses (art. 12 da LPI) cobre divulgações feitas pelo próprio inventor, mas não é reconhecido em todos os países.",
        ],
      },
      {
        heading: "Como é usada",
        paragraphs: [
          "Os examinadores usam a anterioridade para decidir a novidade (se um único documento já mostra todas as características de uma reivindicação) e a atividade inventiva (se a solução seria óbvia para um técnico no assunto diante de um ou mais documentos).",
        ],
      },
      {
        heading: "Por que buscar antes de redigir",
        paragraphs: [
          "Conhecer as anterioridades mais próximas permite reivindicar o que é realmente novo, explicar suas vantagens de forma convincente e evitar gastar com um pedido que não pode prosperar.",
        ],
      },
    ],
    faqs: [
      { q: "Minha própria publicação conta como anterioridade?", a: "Pode contar. Fora dos períodos de graça de cada país, seu próprio artigo, palestra ou lançamento antes do depósito pode ser usado contra o pedido." },
      { q: "Documentos sigilosos contam?", a: "Em geral não, porque a anterioridade precisa estar acessível ao público. Mas, em muitos sistemas, pedidos depositados antes do seu e publicados depois contam." },
    ],
    sources: [LPI, MPEP_2100],
  },

  "how-to-perform-a-prior-art-search": {
    title: "Como fazer uma busca de anterioridade passo a passo | IPnite",
    description: "Defina as características essenciais, amplie termos e classificações, siga citações e documente. Um método prático de busca de anterioridade.",
    h1: "Como fazer uma busca de anterioridade",
    lead: "Uma busca de anterioridade responde a uma pergunta: a combinação de características que faz sua invenção funcionar já foi divulgada? Este método mantém a busca focada.",
    sections: [
      {
        heading: "Passo 1: defina as características essenciais",
        paragraphs: [
          "Escreva sua invenção como uma lista curta de características técnicas que, juntas, resolvem o problema. É com elas que você vai comparar cada referência.",
        ],
      },
      {
        heading: "Passo 2: monte o vocabulário",
        paragraphs: [
          "Para cada característica, anote sinônimos, termos mais amplos e mais específicos e as palavras usadas no campo. Acrescente os códigos IPC ou CPC à medida que descobri-los.",
        ],
      },
      {
        heading: "Passo 3: busque em rodadas",
        paragraphs: [
          "Comece amplo, leia os melhores resultados e refine. Cada documento relevante traz novos termos, classificações e citações para seguir. Busque também fora das patentes: artigos, normas técnicas e documentação de produtos.",
        ],
      },
      {
        heading: "Passo 4: compare característica por característica",
        paragraphs: [
          "Monte uma tabela com suas características nas linhas e os documentos mais relevantes nas colunas. Marque quais características cada documento divulga. Um documento que divulga todas é um problema de novidade; vários que juntos as cobrem levantam uma questão de atividade inventiva.",
        ],
      },
      {
        heading: "Passo 5: documente e decida",
        paragraphs: [
          "Registre as bases, as consultas, as datas e suas conclusões. Use-as para decidir se vale depositar, quais características destacar nas reivindicações e como explicar as vantagens da invenção.",
        ],
      },
    ],
    faqs: [
      { q: "Uma busca pode ser completa?", a: "Nenhuma busca garante ter encontrado todos os documentos relevantes. Uma busca cuidadosa reduz o risco, não o elimina." },
    ],
    sources: [ESPACENET, PATENTSCOPE, GOOGLE_PATENTS],
  },

  "patent-drawing-requirements": {
    title: "Requisitos dos desenhos de patente: USPTO e PCT | IPnite",
    description: "Desenhos de linha em preto, sinais de referência, vistas e margens. As principais regras para desenhos de patente pelo 37 CFR 1.84 e pela Regra 11 do PCT.",
    h1: "Requisitos dos desenhos de patente",
    lead: "Os desenhos devem mostrar cada característica necessária para entender a invenção e seguir as regras formais do escritório onde você deposita.",
    sections: [
      {
        heading: "Quando os desenhos são exigidos",
        paragraphs: [
          "A maioria dos escritórios os exige sempre que forem necessários para entender a invenção, o que abrange quase toda invenção mecânica, elétrica ou de dispositivos e muitos processos, geralmente mostrados como fluxogramas.",
        ],
      },
      {
        heading: "Regras formais comuns",
        paragraphs: [
          "Os Estados Unidos definem os padrões no 37 CFR 1.84, os pedidos internacionais seguem a Regra 11 do PCT e o INPI tem suas próprias normas de apresentação. Os detalhes variam, mas os princípios são parecidos.",
        ],
        bullets: [
          "Desenhos de linha em preto e duráveis; cor e fotografias só em casos limitados",
          "Tamanho de folha padrão (A4) com margens mínimas",
          "Figuras numeradas em sequência (Fig. 1, Fig. 2…)",
          "Sinais de referência que também aparecem no relatório",
          "Legendas legíveis e sem texto desnecessário no desenho",
        ],
      },
      {
        heading: "Coerência com o texto",
        paragraphs: [
          "Cada sinal de referência de uma figura deve ser explicado no relatório, e cada característica das reivindicações deve aparecer em pelo menos uma figura quando houver desenhos. Incoerências geram exigências e podem ser difíceis de corrigir sem acrescentar matéria nova.",
        ],
      },
    ],
    sources: [INPI_BR, MPEP_608, { label: "OMPI — Regulamento do PCT, Regra 11 (em inglês)", url: "https://www.wipo.int/pct/en/texts/rules/r11.html" }],
  },

  "how-patent-claims-work": {
    title: "Como funcionam as reivindicações de patente | IPnite",
    description: "As reivindicações definem o que sua patente protege. Como independentes, dependentes, preâmbulo e expressão de transição determinam o escopo.",
    h1: "Como funcionam as reivindicações de patente",
    lead: "As reivindicações são o limite jurídico de uma patente. O relatório explica a invenção; as reivindicações definem o que outros não podem fazer sem sua autorização.",
    sections: [
      {
        heading: "Anatomia de uma reivindicação",
        paragraphs: [
          "Uma reivindicação é uma única frase com três partes: um preâmbulo que nomeia a invenção (\"Dispositivo para…\"), uma expressão de transição e o corpo, que lista os elementos e como se relacionam. Cada elemento limita a reivindicação: quanto mais elementos, mais estreita a proteção.",
        ],
      },
      {
        heading: "Transições abertas e fechadas",
        paragraphs: [
          "\"Compreendendo\" é aberta: um produto com elementos adicionais continua dentro da reivindicação. \"Consistindo em\" é fechada: elementos adicionais normalmente deixam o produto de fora. A escolha muda muito o escopo.",
        ],
      },
      {
        heading: "Reivindicações independentes e dependentes",
        paragraphs: [
          "Uma reivindicação independente se sustenta sozinha e define a versão mais ampla da invenção que você consegue justificar diante das anterioridades. As dependentes remetem a uma anterior e acrescentam características. Se a independente for rejeitada ou anulada, as dependentes são suas posições de fallback.",
        ],
      },
      {
        heading: "Suporte e clareza",
        paragraphs: [
          "Cada reivindicação deve ter suporte no relatório e usar termos com antecedente claro (\"um sensor\" primeiro, depois \"o sensor\"). Reivindicações mais amplas do que o relatório sustenta são um motivo frequente de rejeição.",
        ],
      },
      {
        heading: "Quantidade de reivindicações e taxas",
        paragraphs: [
          "Muitos escritórios cobram a mais acima de certo número de reivindicações. Nos Estados Unidos há taxas extras acima de três independentes e vinte no total, e o INPI também cobra por reivindicação excedente. Vale um quadro reivindicatório pensado, não longo.",
        ],
      },
    ],
    sources: [INPI_BR, { label: "USPTO — MPEP 608.01(m), forma das reivindicações (em inglês)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" }],
  },

  "what-does-patent-pending-mean": {
    title: "O que significa \"patente pendente\"? | IPnite",
    description: "\"Patente pendente\" indica que um pedido foi depositado, não que a patente foi concedida. O que protege, o que não protege e como usar a expressão.",
    h1: "O que significa patente pendente?",
    lead: "\"Patente pendente\" (em inglês, patent pending) informa ao mercado que você depositou um pedido de patente. Não significa que a patente foi concedida.",
    sections: [
      {
        heading: "Para que serve",
        paragraphs: [
          "Indicar que um produto tem patente pendente avisa que a proteção pode vir, o que desestimula cópias e dá credibilidade diante de investidores e parceiros. Nos Estados Unidos você pode usar \"patent pending\" assim que deposita um pedido provisório ou definitivo que cubra o produto.",
        ],
      },
      {
        heading: "O que não faz",
        paragraphs: [
          "Em regra, a ação por infração depende da concessão da patente. No Brasil, a LPI permite ao titular obter indenização pela exploração indevida ocorrida desde a publicação do pedido, depois que a patente for concedida. Nos Estados Unidos, um pedido publicado pode gerar direitos provisórios se as reivindicações concedidas forem substancialmente idênticas às publicadas e o infrator tiver conhecimento efetivo.",
        ],
      },
      {
        heading: "Use com honestidade",
        paragraphs: [
          "Indicar \"patente pendente\" quando nenhum pedido cobre o produto é marcação falsa, punida pela lei americana, e afirmações enganosas podem ser sancionadas pelas normas de defesa do consumidor, inclusive no Brasil. Pare de usar a expressão se o pedido for abandonado ou arquivado.",
        ],
      },
    ],
    sources: [LPI, { label: "Código dos EUA — 35 U.S.C. 292, marcação falsa (em inglês)", url: "https://www.law.cornell.edu/uscode/text/35/292" }],
  },

  "when-should-a-startup-file-a-patent": {
    title: "Quando uma startup deve depositar uma patente? | IPnite",
    description: "Antes de qualquer divulgação pública, pitch ou lançamento. Como o momento, o orçamento, o período de graça e o PCT se encaixam na estratégia de PI.",
    h1: "Quando uma startup deve depositar uma patente?",
    lead: "Como regra geral, antes que a invenção se torne pública. O momento também depende da maturidade técnica, do orçamento e dos mercados que você quer alcançar.",
    sections: [
      {
        heading: "Antes de qualquer divulgação pública",
        paragraphs: [
          "Lançamentos, demonstrações, artigos, eventos de pitch e até uma vaga muito detalhada podem divulgar uma invenção. A maioria dos países concede a patente a quem deposita primeiro, e muitos não reconhecem período de graça. O brasileiro, de 12 meses, não protege você no exterior. Depositar primeiro preserva suas opções em todo lugar.",
        ],
      },
      {
        heading: "Quando a invenção é concreta o suficiente",
        paragraphs: [
          "Você não precisa de um produto pronto, mas precisa descrever como a invenção funciona com detalhe suficiente para que um técnico no assunto a reproduza. Se partes-chave ainda são desconhecidas, deposite o que está sólido e considere novos pedidos para as melhorias.",
        ],
      },
      {
        heading: "Use o PCT para administrar o custo",
        paragraphs: [
          "Depois do primeiro depósito no INPI, você tem 12 meses para depositar no exterior com prioridade. Um pedido PCT nesse prazo adia os custos das fases nacionais para cerca de 30 meses do primeiro depósito, dando tempo para captar recursos e validar mercados.",
        ],
      },
      {
        heading: "Um checklist simples",
        paragraphs: [],
        bullets: [
          "Algo está para se tornar público?",
          "Conseguimos descrever a invenção com detalhe reproduzível?",
          "Buscamos as anterioridades mais próximas?",
          "Quais mercados importam nos próximos três anos?",
          "De quem é a invenção: dos fundadores, da empresa ou de uma universidade?",
        ],
      },
    ],
    sources: [INPI_BR, WIPO_PCT],
  },

  "pitch-investors-before-filing-a-patent": {
    title: "Posso apresentar a investidores antes de patentear? | IPnite",
    description: "Apresentar antes do depósito pode criar riscos de divulgação, e muitos investidores não assinam NDA. Como proteger sua invenção enquanto capta recursos.",
    h1: "É possível apresentar a investidores antes de depositar uma patente?",
    lead: "É possível, mas há riscos. A ordem mais segura é depositar primeiro e depois fazer o pitch com a invenção protegida.",
    sections: [
      {
        heading: "Por que um pitch pode ser uma divulgação",
        paragraphs: [
          "Uma conversa privada com acordo de confidencialidade normalmente não é divulgação pública. Um demo day, uma apresentação pública, um webinar gravado ou um pitch para muitas pessoas sem sigilo podem ser. Uma vez pública, a invenção pode perder a novidade em países sem período de graça.",
        ],
      },
      {
        heading: "Investidores e acordos de confidencialidade",
        paragraphs: [
          "Muitos fundos de venture capital não assinam NDA porque veem muitas empresas parecidas. Não conte com um. Controle o que você compartilha.",
        ],
        bullets: [
          "Explique o problema, o mercado e os resultados, não como a solução funciona em detalhe",
          "Compartilhe detalhes técnicos só depois do depósito ou com acordo assinado",
          "Registre o que compartilhou, com quem e quando",
        ],
      },
      {
        heading: "Primeiro deposite, depois apresente",
        paragraphs: [
          "Um pedido depositado no INPI (ou um provisório nos Estados Unidos ou no México) permite dizer que você tem patente pendente e falar da tecnologia com mais liberdade. Investidores também valorizam startups que protegeram cedo sua PI central.",
        ],
      },
    ],
  },

  "what-is-patentability": {
    title: "O que é patenteabilidade? Requisitos explicados | IPnite",
    description: "A patenteabilidade exige matéria patenteável, novidade, atividade inventiva, aplicação industrial e suficiência descritiva. Como cada requisito é avaliado.",
    h1: "O que é patenteabilidade?",
    lead: "Patenteabilidade é o conjunto de condições legais que uma invenção precisa cumprir para receber uma patente. Os requisitos centrais são parecidos na maioria dos países.",
    sections: [
      {
        heading: "Os requisitos centrais",
        paragraphs: [],
        bullets: [
          "Matéria patenteável: a invenção não está em uma categoria excluída (arts. 10 e 18 da LPI)",
          "Novidade: nenhuma anterioridade mostra sozinha todas as características",
          "Atividade inventiva: a solução não é óbvia para um técnico no assunto",
          "Aplicação industrial: pode ser fabricada ou usada na indústria",
          "Suficiência descritiva: um técnico consegue reproduzi-la a partir do pedido",
        ],
      },
      {
        heading: "Matéria excluída",
        paragraphs: [
          "Descobertas, teorias científicas, métodos matemáticos e ideias abstratas em geral são excluídos. No Brasil, a LPI também exclui, entre outros, programas de computador em si, métodos terapêuticos e cirúrgicos e o todo ou parte de seres vivos naturais. Cada escritório trata software e métodos de negócio de forma diferente.",
        ],
      },
      {
        heading: "A patenteabilidade é avaliada reivindicação por reivindicação",
        paragraphs: [
          "Um pedido não é simplesmente patenteável ou não. Cada reivindicação é comparada com as anterioridades. Por isso um bom quadro reivindicatório inclui uma reivindicação ampla e dependentes mais estreitas que podem sobreviver se a ampla cair.",
        ],
      },
      {
        heading: "Buscas e análises de patenteabilidade",
        paragraphs: [
          "Uma busca de patenteabilidade compara sua invenção com as anterioridades mais próximas. A IPnite inclui uma análise de patenteabilidade assistida por IA em todos os planos pagos; como todo entregável de IA, cabe a você lê-la ou enviá-la para revisão profissional.",
        ],
      },
    ],
    sources: [LPI, INPI_BR],
  },

  "novelty-vs-inventive-step": {
    title: "Novidade vs atividade inventiva: a diferença | IPnite",
    description: "A novidade pergunta se um documento mostra todas as características; a atividade inventiva, se a solução era óbvia. Como o examinador aplica cada teste.",
    h1: "Novidade vs atividade inventiva",
    lead: "São dois testes diferentes. Uma invenção pode ser nova e ainda assim ser indeferida por ser óbvia para um técnico no assunto.",
    sections: [
      {
        heading: "Novidade: um documento, todas as características",
        paragraphs: [
          "Falta novidade quando uma única anterioridade mostra todas as características da reivindicação, dispostas como reivindicadas. Se faltar pelo menos uma característica nesse documento, a reivindicação é nova diante dele.",
        ],
      },
      {
        heading: "Atividade inventiva: seria óbvia?",
        paragraphs: [
          "A atividade inventiva (non-obviousness nos Estados Unidos) pergunta se um técnico no assunto chegaria à solução reivindicada a partir das anterioridades, muitas vezes combinando documentos. O Escritório Europeu de Patentes usa a abordagem problema-solução; os examinadores americanos aplicam os fatores Graham e o raciocínio do caso KSR.",
        ],
      },
      {
        heading: "Um exemplo",
        paragraphs: [
          "Suponha que um documento divulgue uma garrafa com sensor de temperatura e outro uma tela que muda de cor. Uma garrafa que combina os dois pode ser nova, porque nenhum documento a mostra sozinho, mas não ter atividade inventiva se combiná-los era uma forma óbvia de mostrar a temperatura. Demonstrar um efeito técnico inesperado ajuda a sustentar a atividade inventiva.",
        ],
      },
      {
        heading: "O que isso significa para a redação",
        paragraphs: [
          "Descreva o problema técnico, as vantagens e qualquer resultado inesperado da solução. São esses fatos que você vai usar para defender a atividade inventiva no exame.",
        ],
      },
    ],
    sources: [LPI, { label: "EPO — Diretrizes de exame, parte G (em inglês)", url: "https://www.epo.org/en/legal/guidelines-epc" }],
  },

  "patent-search-vs-prior-art-search": {
    title: "Busca de patentes vs busca de anterioridade | IPnite",
    description: "A busca de patentes é exploração ampla; a de anterioridade compara uma invenção com divulgações anteriores. Quando usar cada uma, além de FTO e panoramas.",
    h1: "Busca de patentes vs busca de anterioridade",
    lead: "As duas usam as mesmas bases de dados, mas respondem a perguntas diferentes. Escolher a certa economiza tempo e dinheiro.",
    sections: [
      {
        heading: "Busca de patentes: exploração ampla",
        paragraphs: [
          "Uma busca geral de patentes explora um campo tecnológico, um concorrente ou um inventor. Ajuda a entender o cenário, identificar tendências e encontrar oportunidades de licenciamento ou colaboração.",
        ],
      },
      {
        heading: "Busca de anterioridade: uma invenção, uma pergunta",
        paragraphs: [
          "A busca de anterioridade (também chamada de patenteabilidade ou novidade) compara uma invenção concreta com tudo o que foi tornado público antes de uma data. O resultado é uma lista curta das referências mais próximas e de como cada uma se relaciona com suas características.",
        ],
      },
      {
        heading: "Outros tipos de busca",
        paragraphs: [],
        bullets: [
          "Liberdade de operação (FTO): posso vender este produto sem infringir patentes vigentes de terceiros em um país?",
          "Validade ou nulidade: é possível contestar uma patente existente?",
          "Panorama tecnológico: quem patenteia o quê em um campo, e onde?",
        ],
      },
      {
        heading: "Como a IPnite trata cada uma",
        paragraphs: [
          "A IPnite oferece busca ampla de patentes, busca de anterioridade com o Agente de descoberta e, conforme o plano, análises de patenteabilidade e FTO. São entregáveis assistidos por IA que você lê ou envia para revisão profissional.",
        ],
      },
    ],
  },
};
