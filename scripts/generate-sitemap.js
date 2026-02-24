/**
 * Generates public/sitemap.xml from blog posts.
 * Run before build: npm run generate-sitemap (or prebuild).
 * Set VITE_SITE_URL in .env for production (e.g. https://ayyanahmed.com).
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const blogPath = join(root, "src", "data", "blog.js");
const outPath = join(root, "public", "sitemap.xml");

const baseUrl = process.env.VITE_SITE_URL || "https://yourdomain.com";
const base = baseUrl.replace(/\/$/, "");

const blogRaw = readFileSync(blogPath, "utf-8");
const slugs = [...blogRaw.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);

const urls = [
  { loc: base + "/", priority: "1.0" },
  { loc: base + "/blog", priority: "0.9" },
  ...slugs.map((slug) => ({ loc: base + "/blog/" + slug, priority: "0.8" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(outPath, xml, "utf-8");
console.log("Generated", outPath, "with", urls.length, "URLs");
