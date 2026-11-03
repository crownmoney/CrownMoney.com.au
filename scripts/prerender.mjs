// Build-time pre-rendering: writes a static HTML file per route so search
// engines, AI crawlers and social previews get full content without running
// JavaScript. Also generates sitemap.xml and the 404 page.
//
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx`.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const SITE_URL = 'https://crownmoney.com.au';

const { render, PAGES, preloadAllPages } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
await preloadAllPages();

const template = fs
  .readFileSync(path.join(dist, 'index.html'), 'utf8')
  // The per-route <title> comes from the render; drop the static fallback.
  .replace(/\s*<title>[^<]*<\/title>/, '');

const HOISTABLE = /^(?:<(?:title|meta|link|style)\b[^>]*?(?:\/>|>[\s\S]*?<\/(?:title|style)>|>))/;
const MAX_IMAGE_PRELOADS = 2;
const warnings = [];

function splitHead(html) {
  // React 19 hoists <title>/<meta>/<link> to the start of renderToString output.
  let rest = html;
  const head = [];
  let imagePreloads = 0;
  for (;;) {
    const m = rest.match(HOISTABLE);
    if (!m) break;
    const tag = m[0];
    rest = rest.slice(tag.length);
    if (/rel="preload"/.test(tag) && /as="image"/.test(tag)) {
      // React adds an image preload for every <img>; keep only the first few
      // (logo + hero) so they don't compete with critical resources.
      if (imagePreloads++ >= MAX_IMAGE_PRELOADS) continue;
    }
    head.push(tag);
  }
  // Mark them so the client can remove them before React renders its own copies.
  const marked = head.map((tag) => tag.replace(/^<(\w+)/, '<$1 data-prerender=""'));
  return { head: marked.join('\n    '), body: rest };
}

// Vite manifest: lets each page preload its own JS chunk alongside the main bundle.
const manifestPath = path.join(dist, '.vite', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
function chunkPreloads(source) {
  const files = new Set();
  const visit = (key) => {
    const entry = manifest[key];
    if (!entry || entry.isEntry || files.has(entry.file)) return;
    files.add(entry.file);
    (entry.imports || []).forEach(visit);
  };
  if (source) visit(source);
  return [...files].map((f) => `<link rel="modulepreload" crossorigin href="/${f}">`).join('\n    ');
}

function renderPage(url, source) {
  const { html } = render(url);
  const split = splitHead(html);
  const preloads = chunkPreloads(source);
  const head = preloads ? `${split.head}\n    ${preloads}` : split.head;
  const body = split.body;
  return template
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

function check(url, html, meta) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? '';
  const decoded = title.replace(/&amp;/g, '&').replace(/&#x27;/g, "'");
  if (decoded.length > 60) warnings.push(`${url}: title is ${decoded.length} chars (max 60)`);
  if (meta.description.length > 155)
    warnings.push(`${url}: description is ${meta.description.length} chars (max 155)`);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (!meta.noindex && h1s !== 1) warnings.push(`${url}: ${h1s} <h1> tags (expected 1)`);
  if ((html.match(/<title[\s>]/g) || []).length !== 1) warnings.push(`${url}: duplicate <title>`);
}

function writeRoute(url, html) {
  // /about -> about.html so Netlify serves /about directly (dir/index.html would
  // 301 to /about/, conflicting with the slash-less canonical URLs).
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

for (const [url, meta] of Object.entries(PAGES)) {
  const html = renderPage(url, meta.source);
  check(url, html, meta);
  writeRoute(url, html);
}

// Real 404 page, served with a 404 status via netlify.toml.
fs.writeFileSync(path.join(dist, '404.html'), renderPage('/__not-found__'));

// sitemap.xml from the page list, with lastmod taken from each page's last commit.
function lastmod(source) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', source], {
      cwd: root,
      encoding: 'utf8',
    }).trim();
    if (out) return out;
  } catch {}
  return new Date().toISOString().slice(0, 10);
}

const urls = Object.entries(PAGES)
  .filter(([, m]) => !m.noindex)
  .map(
    ([url, m]) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastmod(m.source ?? 'src')}</lastmod>
    <changefreq>${m.changefreq ?? 'monthly'}</changefreq>
    <priority>${(m.priority ?? 0.5).toFixed(1)}</priority>
  </url>`,
  );
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);

// llms.txt: append generated sections (client stories, guides) so AI tools
// see every content page without hand-editing the file.
const llmsPath = path.join(dist, 'llms.txt');
if (fs.existsSync(llmsPath)) {
  const section = (heading, prefix) => {
    const rows = Object.entries(PAGES)
      .filter(([url, m]) => url.startsWith(prefix) && !m.noindex)
      .map(([url, m]) => `- [${m.title.split(' | ')[0]}](${SITE_URL}${url}): ${m.description}`);
    return rows.length ? `\n## ${heading}\n${rows.join('\n')}\n` : '';
  };
  fs.appendFileSync(
    llmsPath,
    section('Client Success Stories', '/success-stories/') + section('Guides', '/guides/'),
  );
}

fs.rmSync(ssrDir, { recursive: true, force: true });
fs.rmSync(path.join(dist, '.vite'), { recursive: true, force: true });

console.log(`Pre-rendered ${Object.keys(PAGES).length} pages + 404, sitemap with ${urls.length} URLs.`);
if (warnings.length) {
  console.warn('SEO warnings:\n  ' + warnings.join('\n  '));
}
