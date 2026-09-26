import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
if (!fs.existsSync(dist)) {
  console.error("dist/ does not exist. Run npm run build first.");
  process.exit(1);
}

const htmlFiles = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute);
    else if (entry.name === "index.html") htmlFiles.push(absolute);
  }
}
walk(dist);

const excluded = new Set(["/coming-soon/", "/es/coming-soon/", "/pt-br/coming-soon/", "/contact/", "/es/contact/", "/pt-br/contact/"]);
const routeFor = (file) => {
  const relative = path.relative(dist, path.dirname(file)).split(path.sep).filter(Boolean).join("/");
  return relative ? `/${relative}/` : "/";
};
const routeSet = new Set(htmlFiles.map(routeFor));
const errors = [];
const warnings = [];

for (const file of htmlFiles) {
  const route = routeFor(file);
  if (excluded.has(route)) continue;
  const html = fs.readFileSync(file, "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1]?.trim();
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  const alternates = [...html.matchAll(/<link\s+rel=["']alternate["']\s+hreflang=["']([^"']+)["']/gi)].map((match) => match[1]);

  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (!canonical) errors.push(`${route}: missing canonical`);
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  if (/<meta\s+name=["']keywords["']/i.test(html)) errors.push(`${route}: obsolete meta keywords present`);
  if (!["en", "es", "pt-BR", "x-default"].every((code) => alternates.includes(code))) warnings.push(`${route}: incomplete hreflang set`);

  for (const match of html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch { errors.push(`${route}: invalid JSON-LD`); }
  }

  for (const match of html.matchAll(/href=["'](\/[^"'#?]*)(?:[?#][^"']*)?["']/gi)) {
    let target = match[1] || "/";
    if (/\.[a-z0-9]+$/i.test(target)) continue;
    if (!target.endsWith("/")) target += "/";
    if (!routeSet.has(target)) errors.push(`${route}: broken internal link ${target}`);
  }
}

const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
for (const route of routeSet) {
  if (!excluded.has(route) && !sitemap.includes(`https://www.ipnite.com${route}`)) errors.push(`${route}: missing from sitemap`);
}
if (sitemap.includes("https://www.ipnite.com/home/")) errors.push("/home/: obsolete URL appears in sitemap");

for (const warning of [...new Set(warnings)]) console.warn(`WARN ${warning}`);
for (const error of [...new Set(errors)]) console.error(`ERROR ${error}`);
console.log(`Audited ${htmlFiles.length - [...excluded].filter((route) => routeSet.has(route)).length} indexable HTML pages.`);
if (errors.length) process.exit(1);
console.log("SEO audit passed.");
