// QA for the SEO content cluster (src/data/cluster). Run after a build:
//   npm run build && node scripts/cluster-qa.mjs            -> checks released topics exist and unreleased ones do not
//   IPNITE_CLUSTER_PREVIEW=1 npm run build && node scripts/cluster-qa.mjs --preview   -> checks every topic
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const preview = process.argv.includes("--preview");
const manifest = fs.readFileSync(path.resolve("src/data/cluster/manifest.ts"), "utf8");
const topicsBlock = manifest.slice(manifest.indexOf("export const clusterTopics"), manifest.indexOf("export const mappedToExisting"));
const topics = [...topicsBlock.matchAll(/id: "([^"]+)",\s*paths: \{ en: "([^"]+)", es: "([^"]+)", pt: "([^"]+)" \},[\s\S]*?released: (true|false)/g)]
  .map((m) => ({ id: m[1], paths: [m[2], m[3], m[4]], live: preview || m[5] === "true" }));
if (!topics.length) { console.error("No topics parsed from manifest.ts"); process.exit(1); }

const files = [];
(function walk(dir) { for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, e.name); if (e.isDirectory()) walk(p); else if (e.name === "index.html") files.push(p); } })(dist);
const routeOf = (f) => { const r = path.relative(dist, path.dirname(f)).split(path.sep).filter(Boolean).join("/"); return r ? `/${r}/` : "/"; };
const titles = {}, descs = {};
for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  if (/name="robots" content="[^"]*noindex/.test(h)) continue;
  (titles[h.match(/<title>([\s\S]*?)<\/title>/)?.[1]] ??= []).push(routeOf(f));
  (descs[h.match(/<meta name="description" content="([^"]*)"/)?.[1]] ??= []).push(routeOf(f));
}
const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const errors = [];

for (const topic of topics) {
  topic.paths.forEach((p, i) => {
    const file = path.join(dist, p, "index.html");
    if (!topic.live) {
      if (fs.existsSync(file)) errors.push(`${p}: unreleased but built`);
      if (sitemap.includes(`${p}</loc>`)) errors.push(`${p}: unreleased but in sitemap`);
      return;
    }
    if (!fs.existsSync(file)) { errors.push(`${p}: missing`); return; }
    const h = fs.readFileSync(file, "utf8");
    const canonical = h.match(/rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical !== `https://www.ipnite.com${p}`) errors.push(`${p}: canonical ${canonical}`);
    if (h.match(/property="og:url" content="([^"]+)"/)?.[1] !== canonical) errors.push(`${p}: og:url differs from canonical`);
    if (!/^index, follow/.test(h.match(/name="robots" content="([^"]+)"/)?.[1] ?? "")) errors.push(`${p}: not indexable`);
    const alts = Object.fromEntries([...h.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    const want = { en: topic.paths[0], es: topic.paths[1], "pt-BR": topic.paths[2], "x-default": topic.paths[0] };
    for (const [k, v] of Object.entries(want)) if (alts[k] !== `https://www.ipnite.com${v}`) errors.push(`${p}: hreflang ${k}=${alts[k]}`);
    if (h.match(/<html lang="([^"]+)"/)?.[1] !== ["en", "es", "pt-BR"][i]) errors.push(`${p}: wrong html lang`);
    if ((h.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`${p}: expected one H1`);
    if (!sitemap.includes(`<loc>https://www.ipnite.com${p}</loc>`)) errors.push(`${p}: not in sitemap`);
    if ((h.match(/src="\/ipnite-analytics\.js"/g) || []).length !== 1) errors.push(`${p}: analytics bootstrap missing or duplicated`);
    if (h.match(/name="ipnite:page-key" content="([^"]+)"/)?.[1] !== topic.paths[0]) errors.push(`${p}: wrong analytics page key`);
    const title = h.match(/<title>([\s\S]*?)<\/title>/)[1];
    const desc = h.match(/<meta name="description" content="([^"]*)"/)[1];
    if (titles[title].length > 1) errors.push(`${p}: duplicate title (${titles[title].join(", ")})`);
    if (descs[desc].length > 1) errors.push(`${p}: duplicate description`);
    if (title.length > 65) errors.push(`${p}: title ${title.length} chars`);
    if (desc.length < 70 || desc.length > 160) errors.push(`${p}: description ${desc.length} chars`);
    const types = [];
    for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const json = JSON.parse(m[1]);
      (Array.isArray(json) ? json : [json]).forEach((x) => types.push([].concat(x["@type"]).join("+")));
    }
    for (const required of ["Organization", "BreadcrumbList", "FAQPage"]) if (!types.includes(required)) errors.push(`${p}: missing ${required} schema`);
    if (/aggregateRating|"@type":"Review"/i.test(h)) errors.push(`${p}: rating or review schema is not allowed`);
    for (const m of h.matchAll(/src="(\/[^"]+)"/g)) if (!fs.existsSync(path.join(dist, m[1]))) errors.push(`${p}: broken asset ${m[1]}`);
  });
}

const unreleased = topics.filter((t) => !t.live).flatMap((t) => t.paths);
for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  for (const u of unreleased) if (h.includes(`href="${u}"`)) errors.push(`${routeOf(f)}: links to unreleased ${u}`);
}

for (const e of errors) console.error(`ERROR ${e}`);
console.log(`Checked ${topics.filter((t) => t.live).length} live and ${topics.filter((t) => !t.live).length} unreleased cluster topics.`);
if (errors.length) process.exit(1);
console.log("Cluster QA passed.");
