import { readFile, access, readdir, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile('dist/index.html', 'utf8');
for (const file of [
  'Kinshuk_Goel_Resume.pdf',
  'kinshuk-480.webp',
  'kinshuk-800.webp',
  'kinshuk-1200.webp',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml',
  '_headers',
])
  await access(`dist/${file}`);
assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'Exactly one primary heading');
for (const id of ['home', 'expertise', 'experience', 'architecture', 'certifications', 'contact'])
  assert.ok(html.includes(`id="${id}"`), `Missing section ${id}`);
assert.ok(html.includes('application/ld+json'), 'Missing Person structured data');
assert.ok(!html.includes('+91 852'), 'Phone number must not appear in public page markup');
assert.ok(!html.includes('example.com'), 'No placeholder domain should reach production');
assert.ok(html.includes('kinshuk09@gmail.com'), 'Expected resume-grounded email');
const resume = await readFile('dist/Kinshuk_Goel_Resume.pdf');
assert.equal(resume.subarray(0, 4).toString(), '%PDF', 'Resume must be an actual PDF');
const js = (await readdir('dist/assets')).filter((f) => f.endsWith('.js'));
const bytes = (await Promise.all(js.map((f) => stat(`dist/assets/${f}`)))).reduce(
  (n, s) => n + s.size,
  0,
);
assert.ok(bytes < 500000, `JavaScript budget exceeded: ${bytes} bytes`);
console.log(
  `Build verified: prerendered HTML, resume, metadata, static assets. JS: ${(bytes / 1024).toFixed(1)} KiB uncompressed.`,
);
