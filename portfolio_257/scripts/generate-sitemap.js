import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const srcDir = path.join(projectRoot, "src");
const publicDir = path.join(projectRoot, "public");

const BASE_URL = (process.env.SITE_URL || "https://rohangawade.vercel.app").replace(/\/+$/, "");

const FILE_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx"]);
const EXCLUDED_DIRS = new Set(["node_modules", "dist", "public", ".git"]);

const staticRoutes = new Set(["/"]);
const manualRoutes = [
  // Add any static routes that are not declared in <Route> definitions.
  // Example: "/about",
  // Example: "/contact",
  // Example: "/services",
];

function walkFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      walkFiles(path.join(dir, entry.name), files);
      continue;
    }
    const ext = path.extname(entry.name);
    if (FILE_EXTENSIONS.has(ext)) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function normalizePath(p) {
  if (!p || typeof p !== "string") return null;
  if (!p.startsWith("/")) return null;
  if (p.includes("${")) return null;
  const clean = p.split(/[?#]/)[0];
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean;
}

function extractPathsFromContent(content) {
  const paths = new Set();

  const routeTagRegex = /<Route\b[^>]*\bpath\s*=\s*(?:\{)?["'`](.*?)["'`]\}?/g;
  const routeObjectRegex = /\bpath\s*:\s*["'`](.*?)["'`]/g;
  const toRegex = /\bto\s*=\s*(?:\{)?["'`](\/[^"'`}]*)["'`]\}?/g;
  const navigateRegex = /\bnavigate\(\s*["'`](\/[^"'`]*)["'`]\s*\)/g;
  const navigateTemplateRegex = /\bnavigate\(\s*`([^`]+)`\s*\)/g;
  const toTemplateRegex = /\bto\s*=\s*\{?\s*`([^`]+)`\s*\}?\s*/g;

  const addMatches = (regex, transform) => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      const raw = match[1];
      const value = transform ? transform(raw) : raw;
      if (value) paths.add(value);
    }
  };

  addMatches(routeTagRegex);
  addMatches(routeObjectRegex);
  addMatches(toRegex);
  addMatches(navigateRegex);
  addMatches(navigateTemplateRegex, (value) =>
    value.includes("${") ? value.replace(/\$\{[^}]+\}/g, ":param") : value
  );
  addMatches(toTemplateRegex, (value) =>
    value.includes("${") ? value.replace(/\$\{[^}]+\}/g, ":param") : value
  );

  return paths;
}

function getWorkCategories() {
  const dataFile = path.join(srcDir, "data", "workData.js");
  if (!fs.existsSync(dataFile)) return [];
  const content = fs.readFileSync(dataFile, "utf8");
  const keyRegex = /["'`]([^"'`]+)["'`]\s*:\s*{/g;
  const keys = new Set();
  let match;
  while ((match = keyRegex.exec(content)) !== null) {
    keys.add(match[1]);
  }
  return [...keys].filter((key) => key && !key.includes("/"));
}

function priorityForPath(p) {
  if (p === "/") return "1.0";
  const depth = p.split("/").filter(Boolean).length;
  if (depth === 1) return "0.8";
  if (depth === 2) return "0.7";
  return "0.6";
}

function buildSitemap() {
  const allFiles = walkFiles(srcDir);
  const routes = new Set([...staticRoutes]);
  const dynamicRoutes = new Set();

  for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, "utf8");
    const extracted = extractPathsFromContent(content);
    for (const rawPath of extracted) {
      const normalized = normalizePath(rawPath);
      if (!normalized) continue;
      if (normalized.includes(":") || normalized.includes("*")) {
        dynamicRoutes.add(normalized);
      } else {
        routes.add(normalized);
      }
    }
  }

  for (const manualPath of manualRoutes) {
    const normalized = normalizePath(manualPath);
    if (normalized) routes.add(normalized);
  }

  if (dynamicRoutes.has("/work/:category")) {
    const categories = getWorkCategories();
    for (const category of categories) {
      routes.add(`/work/${category}`);
    }
  }

  const sortedRoutes = [...routes].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const lastmod = new Date().toISOString().split("T")[0];
  const urlEntries = sortedRoutes
    .map((routePath) => {
      const loc = routePath === "/" ? `${BASE_URL}/` : `${BASE_URL}${routePath}`;
      const priority = priorityForPath(routePath);
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    "</urlset>",
    "",
  ].join("\n");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outputPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(outputPath, xml, "utf8");

  return { outputPath, total: sortedRoutes.length };
}

const result = buildSitemap();
console.log(`Sitemap generated: ${result.outputPath} (${result.total} URLs)`);
