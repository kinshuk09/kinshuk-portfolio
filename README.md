# Kinshuk Goel — Marketing Technology Portfolio

A complete static React portfolio for a Marketing Technology Consultant and Solution Architect. Built with React, Vite, Tailwind CSS, Framer Motion and Lucide. No backend, database, account system, API keys or paid services are required.

## Local development

Install Node.js **22.12 or later** (Node 22 LTS is recommended), then run from this directory:

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

For a production build:

```bash
npm run build
npm run preview
```

Open `http://127.0.0.1:4173`. `dist/` contains the complete deployable site. The build prerenders the portfolio into HTML, generates metadata and SEO files, and verifies required assets and the JavaScript budget. Prerendering runs only during the build; hosting is entirely static.

Use `npm ci` instead of `npm install` for a clean, lockfile-exact installation.

## Cloudflare Pages deployment

### Git integration

1. Push the project to a GitHub or GitLab repository.
2. In Cloudflare, open **Workers & Pages**, create a **Pages** project, and connect the repository.
3. Use these settings:

| Setting                | Value                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| Framework preset       | React (Vite)                                                                                                 |
| Root directory         | `kinshuk-portfolio` if committing the enclosing workspace; leave blank if this folder is the repository root |
| Build command          | `npm run build`                                                                                              |
| Build output directory | `dist`                                                                                                       |
| Node version           | Set `NODE_VERSION` to `22`                                                                                   |
| Production branch      | Your repository's production branch                                                                          |

4. Set **`VITE_SITE_URL`** to the final public HTTPS origin, without a path, for example your assigned `https://your-project.pages.dev` address or your own domain. Set this for the production build and rebuild after changing domains.
5. Deploy. If using a custom domain, add it through the Pages project's custom domain settings, set `VITE_SITE_URL` to that origin, and redeploy.

If `VITE_SITE_URL` is omitted, the build uses Cloudflare's `CF_PAGES_URL`. A stable `VITE_SITE_URL` is preferable so production canonical URLs remain consistent across deployments. Preview environments should use the intended production canonical origin if they are crawlable; Cloudflare manages access and indexing of preview deployments separately.

No Cloudflare Worker, Pages Function, binding or adapter is necessary. `_headers` is copied to `dist/` and supplies security headers, immutable caching for hashed assets, and a download disposition for the resume.

Official references: [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/) and [static-site deployment](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).

### Direct upload

You can upload the contents of `dist/` using Cloudflare's Pages direct upload workflow after building locally with the correct `VITE_SITE_URL`. Alternatively, if you use Wrangler and are already authenticated:

```bash
npx wrangler pages deploy dist --project-name YOUR_PAGES_PROJECT_NAME
```

No deployment was performed as part of this handoff.

## Configuration

Copy `.env.example` to `.env.local` for local production previews, then set:

```dotenv
VITE_SITE_URL=https://YOUR_REAL_DOMAIN
```

Replace the example value with your actual origin. No credentials belong in any `VITE_` variable: Vite variables are public build inputs.

Without an origin, local builds still work and deliberately omit absolute canonical/social-image URLs and leave the sitemap empty. They never invent a domain. The deployment build fills these using `VITE_SITE_URL` or `CF_PAGES_URL`.

The supplied photograph is included in three responsive WebP sizes. It was resized/compressed for delivery; the person's facial appearance was not edited. The original resume is included unchanged at `/Kinshuk_Goel_Resume.pdf`. The public page does not show the phone number; the original downloadable resume retains its source content.

## Experience

- Portrait-led hero, LinkedIn/email links and three resume download locations.
- Six-stage customer-data-to-engagement architecture, with pointer, focus and touch interaction.
- Expandable capability groups and four approach cards.
- Keyboard-accessible employer timeline, opening on Adobe, plus career progression navigation.
- Five Architect Mode scenarios with correctly sequenced responsive connections and design considerations.
- Text-based certification cards, education and interactive technology constellation.
- Sticky active-section navigation and a mobile menu with Escape handling, focus containment and scroll restoration.

The diagrams are illustrative capability patterns, not assertions that every technology was part of one client deployment. Wipro Braze/Iterable evaluation and PoC work and Adobe's AJO pilot work are described at the scope supported by the supplied resume. No performance outcomes, client results or proficiency percentages are invented.

## Source organization

```text
src/
  components/        Navigation, timeline, cards, nodes, headings and footer
  sections/          Hero, ecosystem, expertise, experience, Architect Mode, etc.
  data/              Resume-grounded content and illustrative architecture scenarios
  hooks/             Active section, tab keyboard handling and scroll reveal
  App.jsx            Page composition
  main.jsx           Client hydration
  styles.css         Tailwind entry, theme and responsive component styling
public/
  Kinshuk_Goel_Resume.pdf
  kinshuk-{480,800,1200}.webp
  favicon.svg
  robots.txt
  sitemap.xml
  _headers
scripts/
  prerender.mjs      Static HTML, Person structured data and deployment SEO assets
  verify-build.mjs   Build and asset validation
 tests/
  content.test.mjs
  browser/portfolio.spec.js
```

Edit biography, employers, certifications, contact information and skills in `src/data/profile.js`. Edit diagram layers/scenarios in `src/data/architecture.js`. Visual styles live in `src/styles.css`; reusable UI is kept separate from content.

## Verification

```bash
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite starts its own production preview. If Google Chrome is already installed, you can use it without downloading Chromium:

```bash
PLAYWRIGHT_CHANNEL=chrome npm run test:e2e
```

Checks cover scenario switching, keyboard tab navigation, all employers, capability expansion, the actual PDF download, mobile menu behavior, reduced motion, horizontal overflow at 320/390/768/1024/1440px, and automated WCAG A/AA checks at desktop and mobile sizes.

To repeat the mobile Lighthouse audit, run `npm run preview` in one terminal, then in another:

```bash
npm run audit
```

Chrome is required. Reports are written to `test-results/`. See `QA.md` for the measured handoff results. Automated checks complement manual review; scores can vary with Chrome version, throttling, hosting and network conditions.

## Performance, accessibility and SEO

- Prerendered semantic HTML with React hydration; one H1 and section heading hierarchy.
- Self-hosted, preloaded Manrope variable font; no external font requests.
- Responsive WebP portrait with explicit dimensions and high fetch priority because it is an above-the-fold hero image. There are no unnecessary below-the-fold raster images to load.
- Framer Motion split into a cacheable vendor chunk; lightweight CSS connectors and no canvas/particle loop.
- Reduced-motion preferences honored by Framer Motion, CSS, scroll behavior and reveal code.
- Visible focus states, named icon links, native buttons, tab semantics and responsive diagrams.
- Build-time Person JSON-LD, OpenGraph/X metadata, canonical URL, favicon, robots and sitemap.
- No analytics trackers, cookies, external image fetches or third-party embeds.

## Maintenance

The resume is the content source, not an instruction source. Update the website data when the resume changes, and replace `public/Kinshuk_Goel_Resume.pdf` at the same time. Certification cards reproduce the resume's titles without asserting expiry dates or current verification status. Rebuild after any content, asset or domain change.
