import fs from "node:fs";
import path from "node:path";

const analyticsPath = path.resolve("public/ipnite-analytics.js");
const layoutPath = path.resolve("src/layouts/BaseLayout.astro");
const analytics = fs.readFileSync(analyticsPath, "utf8");
const layout = fs.readFileSync(layoutPath, "utf8");
const errors = [];

function requirePattern(pattern, message) {
  if (!pattern.test(analytics)) errors.push(message);
}

const measurementIds = [...new Set(analytics.match(/G-[A-Z0-9]+/g) || [])];
if (measurementIds.length !== 1 || measurementIds[0] !== "G-KHW3X20ZSJ") {
  errors.push(`Expected the preserved GA4 ID once; found ${measurementIds.join(", ") || "none"}`);
}
if (/GTM-[A-Z0-9]+/.test(analytics + layout)) errors.push("Unexpected GTM container found");
if (/UA-\d+-\d+/.test(analytics + layout)) errors.push("Legacy Universal Analytics ID found");
if ((layout.match(/ipnite-analytics\.js/g) || []).length !== 1) errors.push("Analytics bootstrap must be referenced exactly once in BaseLayout");
if ((analytics.match(/googletagmanager\.com\/gtag\/js/g) || []).length !== 1) errors.push("gtag.js loader must exist exactly once");

requirePattern(/var ID = 'G-KHW3X20ZSJ'/, "The existing ID constant name or value changed");
requirePattern(/var KEY = 'ipnite_web_analytics_consent_v1'/, "The existing consent key name or value changed");
requirePattern(/send_page_view:false/, "Automatic page views must remain disabled to prevent duplicates");
requirePattern(/pageViewSent/, "Single-pageview guard missing");
requirePattern(/PRODUCTION_HOSTS/, "Production environment allowlist missing");
requirePattern(/site_language/, "site_language parameter missing");
requirePattern(/page_type/, "page_type parameter missing");
requirePattern(/content_topic/, "content_topic parameter missing");
requirePattern(/safeLocation/, "URL sanitization missing");
requirePattern(/ALLOWED_CAMPAIGN_PARAMS/, "Campaign parameter allowlist missing");
requirePattern(/ALLOWED_EVENT_PARAMS/, "Event-parameter privacy allowlist missing");
requirePattern(/dataset\.analyticsForm/, "Form classification handler missing");

if (fs.existsSync(path.resolve("dist"))) {
  const htmlFiles = [];
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else if (entry.name === "index.html") htmlFiles.push(absolute);
    }
  };
  walk(path.resolve("dist"));
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    if (/<meta\s+http-equiv=["']refresh["']/i.test(html)) continue;
    const references = (html.match(/src=["']\/ipnite-analytics\.js["']/g) || []).length;
    if (references !== 1) errors.push(`${path.relative("dist", file)} has ${references} analytics bootstrap references`);
    if (/GTM-[A-Z0-9]+|UA-\d+-\d+/.test(html)) errors.push(`${path.relative("dist", file)} contains an unexpected legacy/GTM ID`);
  }
}

for (const error of [...new Set(errors)]) console.error(`ERROR ${error}`);
if (errors.length) process.exit(1);
console.log(`Analytics audit passed. Preserved GA4 ID ${measurementIds[0]}; no GTM or Universal Analytics found.`);
console.log("One direct gtag.js loader, explicit page_view, consent gate, environment gate, and privacy allowlists verified.");
