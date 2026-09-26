import type { APIRoute } from "astro";
import { seoPages } from "../data/seoContent";
import type { Locale } from "../data/routes";

const SITE = "https://www.ipnite.com";
const languages: Array<[Locale, string]> = [["en", "English"], ["es", "Spanish"], ["pt", "Portuguese"]];

/** Full text of every generated product, audience, jurisdiction, and learning page, for AI assistants. */
export const GET: APIRoute = () => {
  const blocks: string[] = [
    "# IPnite — full content",
    "",
    "> Full text of IPnite's product pages, jurisdiction guides, and patent guides in English, Spanish, and Portuguese. IPnite is an AI-assisted patent preparation platform operated by Ik-Holcan LLC. Summary and pricing: https://www.ipnite.com/llms.txt",
    "",
  ];

  for (const [locale, language] of languages) {
    blocks.push(`## ${language}`, "");
    for (const page of seoPages) {
      if (page.handBuilt?.[locale]) continue;
      const copy = page.locales[locale];
      blocks.push(`### ${copy.h1}`, `URL: ${SITE}${copy.path}`, "", copy.lead, "");
      for (const section of copy.sections) {
        blocks.push(`#### ${section.heading}`, ...section.paragraphs.map((paragraph) => `${paragraph}\n`));
        if (section.bullets) blocks.push(...section.bullets.map((bullet) => `- ${bullet}`), "");
      }
      for (const faq of copy.faqs ?? []) blocks.push(`Q: ${faq.q}`, `A: ${faq.a}`, "");
      for (const source of copy.sources ?? []) blocks.push(`Source: ${source.label} — ${source.url}`);
      blocks.push("");
    }
  }

  return new Response(blocks.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
