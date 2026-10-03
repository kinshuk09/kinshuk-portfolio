import { readFile, writeFile, readdir } from 'node:fs/promises';
import { createServer, loadEnv } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';

const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
const configured = env.VITE_SITE_URL || env.CF_PAGES_URL || '';
if (configured && !/^https?:\/\/[^/]+\/?$/.test(configured))
  throw new Error('VITE_SITE_URL must be an HTTP(S) origin without a path.');
const origin = configured.replace(/\/$/, '');
const server = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: 'custom',
  mode: 'production',
});
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const { profile, expertise } = await server.ssrLoadModule('/src/data/profile.js');
  const app = renderToString(React.createElement(App));
  const assets = await readdir('dist/assets');
  const font = assets.find(
    (file) => file.includes('manrope-latin-wght-normal') && file.endsWith('.woff2'),
  );
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressCountry: 'IN' },
    knowsAbout: expertise.flatMap((g) => g.tags),
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Uttar Pradesh Technical University' },
    ...(origin ? { url: `${origin}/`, image: `${origin}/kinshuk-800.webp` } : {}),
  };
  const metadata = [
    font
      ? `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`
      : '',
    origin
      ? `<link rel="canonical" href="${origin}/" />\n<meta property="og:url" content="${origin}/" />\n<meta property="og:image" content="${origin}/kinshuk-800.webp" />\n<meta property="og:image:alt" content="Kinshuk Goel, Marketing Technology Consultant" />\n<meta name="twitter:image" content="${origin}/kinshuk-800.webp" />\n<meta name="twitter:image:alt" content="Kinshuk Goel, Marketing Technology Consultant" />`
      : '',
    `<script type="application/ld+json">${JSON.stringify(person).replaceAll('<', '\\u003c')}</script>`,
  ].join('\n');
  const html = (await readFile('dist/index.html', 'utf8'))
    .replace('<!--app-html-->', app)
    .replace('<!--site-metadata-->', metadata);
  await writeFile('dist/index.html', html);
  await writeFile(
    'dist/robots.txt',
    `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`,
  );
  await writeFile(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin ? `\n  <url><loc>${origin}/</loc></url>\n` : ''}</urlset>\n`,
  );
  if (!origin)
    console.warn(
      'No site origin configured. Set VITE_SITE_URL (or Cloudflare CF_PAGES_URL) to generate canonical URLs and populate the sitemap.',
    );
  console.log('Prerendered the complete portfolio, Person data and SEO assets.');
} finally {
  await server.close();
}
