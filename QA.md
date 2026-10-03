# Verification report

Reviewed on **3 October 2026** against the supplied resume and photograph.

## Production Lighthouse audit

Local production build, Lighthouse **13.5.0**, headless Chrome **151**, default mobile simulation and throttling:

| Category       |   Score | Requested target |
| -------------- | ------: | ---------------: |
| Performance    |  **96** |              90+ |
| Accessibility  | **100** |              95+ |
| Best Practices | **100** |              95+ |
| SEO            | **100** |              95+ |

- First Contentful Paint: **1.7 s**
- Largest Contentful Paint: **2.6 s**
- Total Blocking Time: **0 ms**
- Cumulative Layout Shift: **0**
- Speed Index: **1.7 s**

[Full Lighthouse report](docs/lighthouse-mobile.html) · [Machine-readable report](docs/lighthouse-mobile.json)

These are local measured results, not guarantees for every device or deployment. The deployed domain, Cloudflare response headers, redirects and live sitemap must be verified after publishing.

## Automated checks

- Production build and asset verification passed.
- Resume-grounded data checks passed (2 tests).
- Browser suite passed (3 tests): all five architecture scenarios, all four employers, keyboard tab movement, capability expansion, actual PDF response, mobile menu Escape/focus behavior, reduced motion, and responsive overflow checks.
- No horizontal page overflow at **320, 390, 768, 1024 or 1440px**.
- Automated axe checks found **zero WCAG A/AA violations** at desktop/mobile widths and with the mobile menu open.
- Lighthouse's label-in-name audit also passed after reviewing acronym labels and career milestone controls.
- No client runtime errors during the interaction test.
- Dependency installation reported **zero known vulnerabilities** in the installed dependency tree.

## Visual and content review

- Reviewed desktop, tablet and phone layouts, including the hero, portrait, ecosystem and Architect Mode.
- Wrapped diagram rows follow a numbered serpentine sequence. On phones, the architecture becomes a continuous vertical flow.
- Career navigation remains a vertical tablist with consistent Up/Down/Home/End keyboard controls.
- Diagrams identify platform alternatives and illustrative patterns; they do not imply an invented client topology or completed migration.
- Wipro work preserves platform evaluation/PoC context. Adobe content preserves AJO pilot scope.
- Employers, dates, clients, certifications, education, technologies, email and LinkedIn were checked against the supplied resume.
- The original photograph was resized and compressed; CSS provides its vignette and color treatment without facial edits.
- No fabricated metrics, testimonials, logos, results or proficiency scores.

## Deployment configuration remaining

The project is ready for Cloudflare Pages; **it has not been deployed**. Set `VITE_SITE_URL` to the final origin (or use Cloudflare's `CF_PAGES_URL`) so the build can generate absolute canonical/social URLs and a populated sitemap. No domain was supplied, so the local build intentionally does not invent one. See [README.md](README.md) for exact deployment steps.
