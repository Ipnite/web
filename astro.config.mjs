// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://www.ipnite.com";
/** Regenerates sitemap.xml from the actual build output on every build, so it never goes stale.
 * Pages marked noindex (redirects, contact shortcuts, coming-soon) are left out, and each URL
 * lists its language alternates so search engines can pair the English, Spanish, and Portuguese versions. */
function autoSitemap() {
  return {
    name: "auto-sitemap",
    hooks: {
      /** @param {import("astro").HookParameters<"astro:build:done">} params */
      "astro:build:done": async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        /** @type {{ route: string, alternates: [string, string][] }[]} */
        const routes = [];
        const lastmod = new Date().toISOString().slice(0, 10);

        /** @param {string} current */
        function walk(current) {
          for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
            const full = path.join(current, entry.name);
            if (entry.isDirectory()) {
              walk(full);
            } else if (entry.name === "index.html") {
              const html = fs.readFileSync(full, "utf-8");
              if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
              const relDir = path.relative(outDir, current).split(path.sep).filter(Boolean).join("/");
              const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => /** @type {[string, string]} */ ([match[1], match[2]]));
              routes.push({ route: relDir ? `/${relDir}/` : "/", alternates });
            }
          }
        }

        walk(outDir);

        const urls = routes
          .sort((a, b) => a.route.localeCompare(b.route))
          .map(({ route, alternates }) => {
            const links = alternates.map(([lang, href]) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`).join("");
            return `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${lastmod}</lastmod>${links}\n  </url>`;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;

        fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf-8");
      },
    },
  };
}

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [tailwind(), react(), autoSitemap()],
  vite: {
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  },
});
