// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://www.ipnite.com";
const EXCLUDED_ROUTES = ["/coming-soon/", "/es/coming-soon/", "/pt-br/coming-soon/", "/contact/", "/es/contact/", "/pt-br/contact/"];

/** Regenerates sitemap.xml from the actual build output on every build, so it never goes stale. */
function autoSitemap() {
  return {
    name: "auto-sitemap",
    hooks: {
      /** @param {import("astro").HookParameters<"astro:build:done">} params */
      "astro:build:done": async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        /** @type {string[]} */
        const routes = [];

        /** @param {string} current */
        function walk(current) {
          for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
            const full = path.join(current, entry.name);
            if (entry.isDirectory()) {
              walk(full);
            } else if (entry.name === "index.html") {
              const relDir = path.relative(outDir, current).split(path.sep).filter(Boolean).join("/");
              routes.push(relDir ? `/${relDir}/` : "/");
            }
          }
        }

        walk(outDir);

        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = routes
          .filter((route) => !EXCLUDED_ROUTES.includes(route))
          .sort()
          .map((route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

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
