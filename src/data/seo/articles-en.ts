import type { ArticleCopy } from "./articles";

const USPTO_BASICS = { label: "USPTO — Patent basics", url: "https://www.uspto.gov/patents/basics" };
const USPTO_PROVISIONAL = { label: "USPTO — Provisional application for patent", url: "https://www.uspto.gov/patents/basics/apply/provisional-application" };
const USPTO_FEES = { label: "USPTO — Fee schedule", url: "https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule" };
const WIPO_PCT = { label: "WIPO — The PCT system", url: "https://www.wipo.int/pct/en/" };
const MPEP_608 = { label: "USPTO — MPEP 608.02, drawings (37 CFR 1.84)", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" };
const MPEP_2100 = { label: "USPTO — MPEP chapter 2100, patentability", url: "https://www.uspto.gov/web/offices/pac/mpep/mpep-2100.html" };
const GOOGLE_PATENTS = { label: "Google Patents", url: "https://patents.google.com/" };
const ESPACENET = { label: "EPO — Espacenet", url: "https://worldwide.espacenet.com/" };
const PATENTSCOPE = { label: "WIPO — PATENTSCOPE", url: "https://patentscope.wipo.int/" };
const PPUBS = { label: "USPTO — Patent Public Search", url: "https://ppubs.uspto.gov/pubwebapp/" };

export const articlesEn: Record<string, ArticleCopy> = {
  "how-to-patent-an-idea": {
    title: "How to Patent an Idea: A Step-by-Step Guide | IPnite",
    description: "An idea becomes patentable once it is a concrete technical solution. The steps: document, search prior art, draft, file, and plan protection abroad.",
    h1: "How to Patent an Idea",
    lead: "You cannot patent an abstract idea, but you can patent the concrete technical solution behind it. Here is the path from idea to a filed application.",
    sections: [
      {
        heading: "1. Turn the idea into an invention",
        paragraphs: [
          "Patent offices protect inventions: technical solutions to technical problems that can be made or used. \"An app that helps farmers\" is an idea; a specific method of processing soil-sensor data to schedule irrigation is an invention. Write down the problem, how your solution works, its essential components, and the alternatives you can imagine.",
          "Keep the invention confidential while you prepare. In most countries a public disclosure before filing can destroy novelty, and grace periods are limited and not universal.",
        ],
      },
      {
        heading: "2. Search the prior art",
        paragraphs: [
          "Before investing in drafting, look for patents, applications, papers, and products that already disclose something similar. The goal is not to prove that nothing exists, but to find the closest references and understand what is truly new about your solution.",
        ],
      },
      {
        heading: "3. Check patentability",
        paragraphs: [
          "Most systems require novelty, inventive step (non-obviousness in the United States), and industrial application or utility. Some subject matter, such as abstract methods, discoveries, or certain medical methods, is excluded or restricted depending on the country.",
        ],
      },
      {
        heading: "4. Choose where and how to file",
        paragraphs: [
          "Decide which markets matter. In the United States and, since April 2026, in Mexico, a provisional application can secure an early date for 12 months. In Argentina and Brazil you file the complete national application directly. Within 12 months of your first filing you can extend protection abroad using Paris Convention priority or a single PCT application.",
        ],
      },
      {
        heading: "5. Draft the application",
        paragraphs: [
          "A patent application has a description detailed enough for a skilled person to reproduce the invention, claims that define the protection, an abstract, and usually drawings. The claims are the most important part: they decide what others cannot do without your permission.",
        ],
        bullets: [
          "Describe several embodiments and variants, not just one prototype",
          "Draft independent claims for the core combination and dependent claims as fallbacks",
          "Use consistent terminology and reference numerals",
          "Review everything before filing or have it professionally reviewed",
        ],
      },
      {
        heading: "6. File, then manage the process",
        paragraphs: [
          "After filing, the office examines formalities and substance, may issue objections, and eventually grants or refuses the patent. Track deadlines, answer office actions, and pay maintenance or annuity fees to keep the patent alive.",
        ],
      },
    ],
    faqs: [
      { q: "Can I patent an idea without a prototype?", a: "Yes, if you can describe the invention in enough detail for a skilled person to make and use it. A physical prototype is not required, but a vague concept is not enough." },
      { q: "How long does it take to get a patent?", a: "It depends on the office and the field; examination commonly takes several years. Filing, however, secures your date immediately." },
    ],
    sources: [USPTO_BASICS, WIPO_PCT],
  },

  "what-is-a-provisional-patent-application": {
    title: "What Is a Provisional Patent Application? | IPnite",
    description: "A provisional application secures a filing date for 12 months without examination. How it works in the United States and in Mexico since 2026.",
    h1: "What Is a Provisional Patent Application?",
    lead: "A provisional application is an early, simplified filing that secures a date for your invention and gives you 12 months to file the complete application.",
    sections: [
      {
        heading: "How a provisional works",
        paragraphs: [
          "A provisional is filed with a description of the invention and, usually, drawings. It is not examined and never becomes a patent on its own. Within 12 months you must file the complete application—a U.S. nonprovisional or a PCT application—that claims the provisional's benefit. The provisional's date then counts for everything the provisional actually disclosed.",
        ],
      },
      {
        heading: "Where it exists",
        paragraphs: [
          "The United States has used provisional applications since 1995. Mexico introduced them with the reform to its Federal Law for the Protection of Industrial Property, in force since April 6, 2026: the Mexican provisional is not published or examined, the 12-month period cannot be extended, and the provisional cannot itself claim priority from an earlier application. Argentina and Brazil do not offer an equivalent filing.",
        ],
      },
      {
        heading: "Advantages",
        paragraphs: [],
        bullets: [
          "An early filing date while you keep developing the invention",
          "The right to use \"patent pending\" in the United States",
          "Twelve months to test the market, raise funds, or refine claims",
          "Lower official fees than a complete application",
        ],
      },
      {
        heading: "The main risk: a thin disclosure",
        paragraphs: [
          "The later application can only rely on the provisional date for what the provisional describes. If the provisional is a short summary or a slide deck, your final claims may lack support and lose that date. Treat the provisional as a complete technical disclosure: every essential component, alternatives, examples, and figures.",
        ],
      },
    ],
    faqs: [
      { q: "Does a provisional need claims?", a: "In the United States claims are not required, but including them can help you check that the description supports what you will eventually protect." },
      { q: "What happens if I miss the 12-month deadline?", a: "The provisional expires and its date can no longer be claimed. Any public disclosure since then may count against you." },
    ],
    sources: [USPTO_PROVISIONAL, { label: "IMPI — Mexican Institute of Industrial Property", url: "https://www.gob.mx/impi" }],
  },

  "provisional-patent-application-cost": {
    title: "How Much Does a Provisional Patent Application Cost? | IPnite",
    description: "The official fee is only part of the cost. What makes up the price of a provisional—fees, drawings, search, drafting, and review—and how to spend wisely.",
    h1: "How Much Does a Provisional Patent Application Cost?",
    lead: "The official filing fee is usually the smallest part of the cost. What you really pay for is a disclosure strong enough to support your future claims.",
    sections: [
      {
        heading: "The components of the cost",
        paragraphs: [],
        bullets: [
          "Official filing fee, which in the United States depends on entity size (large, small, or micro entity)",
          "Prior-art search to understand what is truly new",
          "Drafting of the description, examples, and optional claims",
          "Drawings or figures",
          "Professional review, if you choose it",
        ],
      },
      {
        heading: "Official fees",
        paragraphs: [
          "USPTO fees change periodically and are reduced for small and micro entities. Check the current fee schedule before filing. In Mexico, IMPI publishes its own fees for the new provisional application.",
        ],
      },
      {
        heading: "Why the cheapest provisional can be the most expensive",
        paragraphs: [
          "A provisional only protects what it describes. A rushed, thin filing may cost little today but leave the complete application without support for its claims, forcing you to rely on a later date. The money is best spent on a complete description with variants and figures.",
        ],
      },
      {
        heading: "Where IPnite fits",
        paragraphs: [
          "IPnite combines prior-art search, drafting, drawings, and QA in one subscription, starting with the Inventor plan. You can file the result yourself or send it for review, which usually shortens the professional's time and cost.",
        ],
      },
    ],
    faqs: [
      { q: "Can I file a provisional myself?", a: "Yes. Inventors can file directly with the USPTO. Make sure the disclosure is complete, since the provisional is not examined and errors are not flagged." },
    ],
    sources: [USPTO_FEES, USPTO_PROVISIONAL],
  },

  "can-ai-write-a-patent-application": {
    title: "Can AI Write a Patent Application? | IPnite",
    description: "AI can draft claims, descriptions, and figures, but it cannot be the inventor or replace review. What AI does well, its risks, and how to use it safely.",
    h1: "Can AI Write a Patent Application?",
    lead: "Yes—AI can produce a structured, complete draft. It cannot be the inventor, and its output still needs careful review before filing.",
    sections: [
      {
        heading: "What AI does well",
        paragraphs: [
          "Patent drafting has a lot of structure: claim trees, embodiments, consistent terminology, reference numerals, and standard sections. AI trained for that workflow can turn a good technical disclosure into a complete draft far faster than starting from a blank page, and can propose variants you had not written down.",
        ],
      },
      {
        heading: "What AI cannot do",
        paragraphs: [
          "AI is not an inventor. Patent offices and courts in several countries, including in the DABUS cases, have held that inventors must be natural persons. The technical contribution must come from people. AI also cannot know facts you did not give it, and it can produce errors or invented references.",
        ],
      },
      {
        heading: "General chatbots versus patent software",
        paragraphs: [
          "Pasting an invention into a consumer chatbot raises two issues: confidentiality, because some consumer services may use conversations to improve models, and structure, because a general chat does not keep your prior art, claims, drawings, and versions connected. Patent-specific software should state clearly how it handles your data.",
        ],
      },
      {
        heading: "How to use AI safely",
        paragraphs: [],
        bullets: [
          "Provide a complete, accurate technical disclosure",
          "Verify every technical statement and every cited reference",
          "Check that the claims are supported by the description",
          "Use tools that do not train on your data",
          "Review before filing or have the draft professionally reviewed",
        ],
      },
    ],
    faqs: [
      { q: "Does IPnite train on my invention?", a: "No. IPnite never uses your content to train AI models or for any purpose other than providing the service." },
      { q: "Who is the inventor if I use AI to draft?", a: "The people who conceived the invention. Using AI to write the application does not change inventorship." },
    ],
  },

  "how-to-search-existing-patents": {
    title: "How to Search for Existing Patents: Free Databases | IPnite",
    description: "Search existing patents with Google Patents, Espacenet, PATENTSCOPE, and USPTO tools. Keywords, classifications, citations, and families explained.",
    h1: "How to Search for Existing Patents",
    lead: "A good patent search combines several databases and techniques: concepts and synonyms, classifications, citations, and patent families.",
    sections: [
      {
        heading: "Free databases worth knowing",
        paragraphs: [],
        bullets: [
          "Google Patents: fast full-text search with machine translation",
          "Espacenet (EPO): worldwide coverage and patent families",
          "PATENTSCOPE (WIPO): PCT applications and national collections",
          "USPTO Patent Public Search: U.S. patents and applications",
          "National offices such as IMPI, INPI Argentina, and INPI Brazil for local documents",
        ],
      },
      {
        heading: "Search by concept, not just by word",
        paragraphs: [
          "Different documents describe the same thing with different words. List the essential features of your invention and several synonyms for each. Combine them in queries, and read the most relevant results to discover more terminology.",
        ],
      },
      {
        heading: "Use classifications",
        paragraphs: [
          "The International Patent Classification (IPC) and the Cooperative Patent Classification (CPC) group documents by technology. Once you find a relevant document, look at its codes and search within them—you will find documents that use completely different language.",
        ],
      },
      {
        heading: "Follow citations and families",
        paragraphs: [
          "Every relevant document points to others: the references it cites and the later documents that cite it. A patent family groups the filings of the same invention in several countries, which helps you read the version in your language and see where it is protected.",
        ],
      },
      {
        heading: "Keep a record",
        paragraphs: [
          "Save the queries you ran, the databases, the date, and why each relevant document matters. That record makes the search reproducible and useful for drafting and for professional review.",
        ],
      },
    ],
    sources: [GOOGLE_PATENTS, ESPACENET, PATENTSCOPE, PPUBS],
  },

  "what-is-prior-art": {
    title: "What Is Prior Art in Patents? | IPnite",
    description: "Prior art is any public information before your filing date that may show your invention is not new or obvious. What counts, dates, and why it matters.",
    h1: "What Is Prior Art?",
    lead: "Prior art is everything made available to the public before your filing date that may be relevant to whether your invention is new and inventive.",
    sections: [
      {
        heading: "What counts as prior art",
        paragraphs: [
          "Prior art is not limited to patents. It includes published applications, scientific papers, theses, books, websites, videos, product manuals, products on sale, and public talks—anywhere in the world and in any language.",
        ],
      },
      {
        heading: "The date is what matters",
        paragraphs: [
          "Prior art is measured against your effective filing date, or your priority date if you claim one. That is why filing early matters: every day before filing, new disclosures can appear, including your own. Grace periods, such as one year in the United States, Argentina, Brazil, and Mexico for the inventor's own disclosures, are limited and not recognized everywhere.",
        ],
      },
      {
        heading: "How prior art is used",
        paragraphs: [
          "Examiners use prior art to decide novelty—whether a single document already discloses every feature of a claim—and inventive step, whether the claimed solution would have been obvious to a skilled person in light of one or more documents.",
        ],
      },
      {
        heading: "Why search before drafting",
        paragraphs: [
          "Knowing the closest prior art lets you claim what is truly new, describe your advantages convincingly, and avoid spending on an application that cannot succeed.",
        ],
      },
    ],
    faqs: [
      { q: "Is my own publication prior art?", a: "It can be. Outside the grace periods of specific countries, your own paper, talk, or product launch before filing can be used against your application." },
      { q: "Do secret documents count?", a: "Generally no, because prior art must be available to the public. However, earlier-filed applications published later can count against you in many systems." },
    ],
    sources: [MPEP_2100],
  },

  "how-to-perform-a-prior-art-search": {
    title: "How to Perform a Prior Art Search, Step by Step | IPnite",
    description: "Define essential features, expand terms and classifications, follow citations, and document relevance. A practical prior-art search method for inventors.",
    h1: "How to Perform a Prior Art Search",
    lead: "A prior-art search answers one question: has the combination of features that makes your invention work already been disclosed? This method keeps the search focused.",
    sections: [
      {
        heading: "Step 1: Define the essential features",
        paragraphs: [
          "Write your invention as a short list of technical features that, together, solve the problem. These features are what you will compare each reference against.",
        ],
      },
      {
        heading: "Step 2: Build the vocabulary",
        paragraphs: [
          "For each feature, list synonyms, broader and narrower terms, and the words used in the field. Add the relevant IPC or CPC classification codes as you discover them.",
        ],
      },
      {
        heading: "Step 3: Search in rounds",
        paragraphs: [
          "Start broad, read the best results, and refine. Each relevant document gives you new terms, classifications, and citations to follow. Search non-patent literature too: papers, standards, and product documentation.",
        ],
      },
      {
        heading: "Step 4: Compare feature by feature",
        paragraphs: [
          "Build a simple table with your features as rows and the most relevant documents as columns. Mark which features each document discloses. A document that discloses all of them is a novelty problem; several documents that together cover them raise an inventive-step question.",
        ],
      },
      {
        heading: "Step 5: Document and decide",
        paragraphs: [
          "Record the databases, queries, dates, and your conclusions. Use them to decide whether to file, which features to emphasize in the claims, and how to describe the advantages of your invention.",
        ],
      },
    ],
    faqs: [
      { q: "Can a search be complete?", a: "No search can guarantee that every relevant document was found. A careful search reduces risk; it does not eliminate it." },
    ],
    sources: [ESPACENET, PATENTSCOPE, GOOGLE_PATENTS],
  },

  "patent-drawing-requirements": {
    title: "Patent Drawing Requirements: USPTO and PCT Rules | IPnite",
    description: "Black-and-white line drawings, reference numerals, views, and margins. The main patent drawing rules under 37 CFR 1.84 and PCT Rule 11.",
    h1: "Patent Drawing Requirements",
    lead: "Drawings must show every feature needed to understand the invention and follow the formal rules of the office where you file.",
    sections: [
      {
        heading: "When drawings are required",
        paragraphs: [
          "Most offices require drawings whenever they are necessary to understand the invention, which covers nearly every mechanical, electrical, or device invention and many processes, often shown as flowcharts.",
        ],
      },
      {
        heading: "Common formal rules",
        paragraphs: [
          "The United States sets drawing standards in 37 CFR 1.84, and international applications follow PCT Rule 11. Details vary by office, but the principles are similar.",
        ],
        bullets: [
          "Black, durable line drawings; color and photographs only in limited cases",
          "Standard sheet size (A4 or U.S. letter) with minimum margins",
          "Figures numbered consecutively (Fig. 1, Fig. 2…)",
          "Reference numerals that also appear in the description",
          "Legible lettering and no unnecessary text on the drawing",
        ],
      },
      {
        heading: "Consistency with the text",
        paragraphs: [
          "Every reference numeral in a figure should be explained in the description, and every feature in the claims should be visible in at least one figure when drawings are needed. Inconsistencies trigger objections and can be hard to fix without adding new matter.",
        ],
      },
    ],
    sources: [MPEP_608, { label: "WIPO — PCT Regulations, Rule 11", url: "https://www.wipo.int/pct/en/texts/rules/r11.html" }],
  },

  "how-patent-claims-work": {
    title: "How Patent Claims Work: Independent and Dependent | IPnite",
    description: "Claims define what your patent protects. How independent and dependent claims, preambles, and transitional phrases shape scope and fallback positions.",
    h1: "How Patent Claims Work",
    lead: "The claims are the legal boundary of a patent. The description explains the invention; the claims decide what others cannot do without your permission.",
    sections: [
      {
        heading: "Anatomy of a claim",
        paragraphs: [
          "A claim is a single sentence with three parts: a preamble that names the invention (\"A device for…\"), a transitional phrase, and the body that lists the elements and how they relate. Every element in a claim limits it: the more elements, the narrower the protection.",
        ],
      },
      {
        heading: "Open and closed transitions",
        paragraphs: [
          "\"Comprising\" is open: a product with extra elements still falls within the claim. \"Consisting of\" is closed: extra elements usually take a product outside it. The choice changes the scope significantly.",
        ],
      },
      {
        heading: "Independent and dependent claims",
        paragraphs: [
          "An independent claim stands on its own and defines the broadest version of the invention you can justify over the prior art. Dependent claims refer to an earlier claim and add features. If the independent claim is rejected or invalidated, dependent claims provide fallback positions.",
        ],
      },
      {
        heading: "Support and clarity",
        paragraphs: [
          "Every claim must be supported by the description and use terms with a clear antecedent basis (\"a sensor\" first, then \"the sensor\"). Claims broader than what the description supports are a frequent reason for rejection.",
        ],
      },
      {
        heading: "Claim counts and fees",
        paragraphs: [
          "Many offices charge extra for claims above a threshold. In the United States, fees apply above three independent and twenty total claims, so a claim set should be deliberate rather than long.",
        ],
      },
    ],
    sources: [{ label: "USPTO — MPEP 608.01(m), form of claims", url: "https://www.uspto.gov/web/offices/pac/mpep/s608.html" }],
  },

  "what-does-patent-pending-mean": {
    title: "What Does \"Patent Pending\" Mean? | IPnite",
    description: "\"Patent pending\" means an application has been filed, not that a patent was granted. What it protects, what it does not, and how to use it correctly.",
    h1: "What Does Patent Pending Mean?",
    lead: "\"Patent pending\" tells the market that you have filed a patent application. It does not mean a patent has been granted or that anyone is already infringing.",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Marking a product \"patent pending\" signals that protection may be coming, which can discourage copying and add credibility with investors and partners. In the United States you can use it once a provisional or nonprovisional application covering the product is filed.",
        ],
      },
      {
        heading: "What it does not do",
        paragraphs: [
          "You cannot sue for infringement until a patent is granted. In the United States, a published application can give rise to provisional rights—a reasonable royalty from publication—if the granted claims are substantially identical to the published ones and the infringer had actual notice.",
        ],
      },
      {
        heading: "Use it honestly",
        paragraphs: [
          "Using \"patent pending\" when no application covers the product is false marking, which U.S. law penalizes, and misleading claims can be sanctioned under consumer-protection rules in other countries. Stop using it if the application is abandoned.",
        ],
      },
    ],
    sources: [{ label: "U.S. Code — 35 U.S.C. 292, false marking", url: "https://www.law.cornell.edu/uscode/text/35/292" }, { label: "U.S. Code — 35 U.S.C. 154(d), provisional rights", url: "https://www.law.cornell.edu/uscode/text/35/154" }],
  },

  "when-should-a-startup-file-a-patent": {
    title: "When Should a Startup File a Patent? | IPnite",
    description: "File before public disclosure, fundraising pitches, and launches. How timing, budget, provisional applications, and the PCT fit a startup's IP strategy.",
    h1: "When Should a Startup File a Patent?",
    lead: "As a rule, before the invention becomes public. Timing also depends on technical maturity, budget, and the markets you plan to enter.",
    sections: [
      {
        heading: "Before any public disclosure",
        paragraphs: [
          "Launches, demos, papers, pitch events, and even detailed job posts can disclose an invention. Most countries grant patents to the first to file, and many do not recognize any grace period. Filing first protects your options everywhere.",
        ],
      },
      {
        heading: "When the invention is concrete enough",
        paragraphs: [
          "You do not need a finished product, but you do need to describe how the invention works in enough detail for a skilled person to reproduce it. If key parts are still unknown, file what is solid and consider later filings for improvements.",
        ],
      },
      {
        heading: "Use provisionals and the PCT to manage cost",
        paragraphs: [
          "In the United States and Mexico a provisional secures a date for 12 months at lower cost. Before those 12 months end, a PCT application can delay national-phase costs until roughly 30 months from the first filing, giving you time to raise funds and validate markets.",
        ],
      },
      {
        heading: "A simple checklist",
        paragraphs: [],
        bullets: [
          "Is anything about to become public?",
          "Can we describe the invention in reproducible detail?",
          "Have we searched the closest prior art?",
          "Which markets matter in the next three years?",
          "Who owns the invention: founders, company, or a university?",
        ],
      },
    ],
    sources: [USPTO_PROVISIONAL, WIPO_PCT],
  },

  "pitch-investors-before-filing-a-patent": {
    title: "Can You Pitch Investors Before Filing a Patent? | IPnite",
    description: "Pitching before filing can create disclosure risk, and many investors will not sign NDAs. How to protect your invention while you raise money.",
    h1: "Can You Pitch Investors Before Filing a Patent?",
    lead: "You can, but it carries risk. The safest order is to file first—often a provisional—and then pitch with the invention protected.",
    sections: [
      {
        heading: "Why pitching can be a disclosure",
        paragraphs: [
          "A private conversation under a confidentiality agreement is usually not a public disclosure. A demo day, a public deck, a recorded webinar, or a pitch to many people without confidentiality may be. Once public, the invention may lose novelty in countries without a grace period.",
        ],
      },
      {
        heading: "Investors and NDAs",
        paragraphs: [
          "Many venture investors do not sign NDAs because they see many similar companies. Do not count on one. Instead, control what you share.",
        ],
        bullets: [
          "Explain the problem, market, and results, not how the solution works in detail",
          "Share technical details only after filing, or under a signed NDA",
          "Keep a record of what you shared, with whom, and when",
        ],
      },
      {
        heading: "File first, then pitch",
        paragraphs: [
          "A well-drafted provisional (United States or Mexico) or a national application (Argentina, Brazil) lets you say \"patent pending\" and discuss the technology more freely. Investors also value a startup that has secured its core IP early.",
        ],
      },
    ],
  },

  "what-is-patentability": {
    title: "What Is Patentability? Requirements Explained | IPnite",
    description: "Patentability requires eligible subject matter, novelty, inventive step or non-obviousness, industrial application, and a sufficient description.",
    h1: "What Is Patentability?",
    lead: "Patentability is the set of legal conditions an invention must meet to be granted a patent. The core requirements are similar across most countries.",
    sections: [
      {
        heading: "The core requirements",
        paragraphs: [],
        bullets: [
          "Eligible subject matter: the invention is not in an excluded category",
          "Novelty: no single prior-art disclosure already shows every feature",
          "Inventive step (non-obviousness in the United States): the solution is not obvious to a skilled person",
          "Industrial application or utility: it can be made or used in industry",
          "Sufficient description: a skilled person can reproduce it from the application",
        ],
      },
      {
        heading: "Excluded subject matter",
        paragraphs: [
          "Discoveries, scientific theories, mathematical methods, and abstract ideas are generally excluded. Software and business methods are treated differently by each office: the United States applies the Alice/Mayo eligibility test, while Latin American and European offices look for a technical character. Methods of medical treatment are excluded in many countries outside the United States.",
        ],
      },
      {
        heading: "Patentability is assessed claim by claim",
        paragraphs: [
          "An application is not simply patentable or not. Each claim is assessed against the prior art. That is why a good claim set includes a broad claim and narrower dependent claims that may survive if the broad one fails.",
        ],
      },
      {
        heading: "Patentability searches and opinions",
        paragraphs: [
          "A patentability search compares your invention with the closest prior art. IPnite includes an AI-assisted patentability analysis on every paid plan; like any AI deliverable, it is yours to read or to have reviewed by a professional.",
        ],
      },
    ],
    sources: [MPEP_2100],
  },

  "novelty-vs-inventive-step": {
    title: "Novelty vs Inventive Step (Non-Obviousness) | IPnite",
    description: "Novelty asks whether one document shows every feature; inventive step asks whether the solution was obvious. How examiners apply each test.",
    h1: "Novelty vs Inventive Step and Non-Obviousness",
    lead: "They are two different tests. An invention can be new and still be refused because it would have been obvious to a skilled person.",
    sections: [
      {
        heading: "Novelty: one document, every feature",
        paragraphs: [
          "An invention lacks novelty when a single prior-art disclosure shows every feature of the claim, arranged as claimed. If even one feature is missing from that document, the claim is new over it.",
        ],
      },
      {
        heading: "Inventive step: would it have been obvious?",
        paragraphs: [
          "Inventive step, called non-obviousness in the United States, asks whether a person skilled in the field would have arrived at the claimed solution from the prior art, often by combining documents. The European Patent Office uses the problem-solution approach; U.S. examiners apply the Graham factors and the reasoning of the KSR decision.",
        ],
      },
      {
        heading: "An example",
        paragraphs: [
          "Suppose one document discloses a bottle with a temperature sensor and another discloses a display that changes color. A bottle combining both may be new, because no single document shows it, but it may lack inventive step if combining them was an obvious way to show temperature. Showing an unexpected technical effect helps argue inventive step.",
        ],
      },
      {
        heading: "What this means for drafting",
        paragraphs: [
          "Describe the technical problem, the advantages, and any unexpected results of your solution. Those facts are what you will rely on to argue inventive step during examination.",
        ],
      },
    ],
    sources: [MPEP_2100, { label: "EPO — Guidelines for Examination, Part G", url: "https://www.epo.org/en/legal/guidelines-epc" }],
  },

  "patent-search-vs-prior-art-search": {
    title: "Patent Search vs Prior Art Search: Differences | IPnite",
    description: "Patent search is broad discovery; prior-art search tests one invention against earlier disclosures. When to use each, plus FTO and landscape searches.",
    h1: "Patent Search vs Prior Art Search",
    lead: "Both use the same databases, but they answer different questions. Choosing the right one saves time and money.",
    sections: [
      {
        heading: "Patent search: broad discovery",
        paragraphs: [
          "A general patent search explores a technology field, a competitor, or an inventor. It helps you understand the landscape, spot trends, and find licensing or collaboration opportunities.",
        ],
      },
      {
        heading: "Prior-art search: one invention, one question",
        paragraphs: [
          "A prior-art search (also called a patentability or novelty search) compares a specific invention against everything made public before a date. Its output is a short list of the closest references and how each relates to your features.",
        ],
      },
      {
        heading: "Other types of search",
        paragraphs: [],
        bullets: [
          "Freedom to operate (FTO): can I sell this product without infringing someone's valid, in-force patents in a given country?",
          "Validity or invalidity: can an existing patent be challenged?",
          "Landscape: who is patenting what in a field, and where?",
        ],
      },
      {
        heading: "How IPnite handles them",
        paragraphs: [
          "IPnite offers broad patent search, prior-art search with the Discovery Agent, and, depending on the plan, patentability and FTO analyses. These are AI-assisted deliverables that you read or have professionally reviewed.",
        ],
      },
    ],
  },
};
