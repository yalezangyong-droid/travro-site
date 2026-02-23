# CLAUDE.md — TRAVRO Pre-Launch Website

## What This Project Is
Static pre-launch website for TRAVRO luggage brand. Kickstarter Q2 2026.

## Single Source of Truth
**Read `docs/TRAVRO_Website_Project_Charter_v2.md` for all specs.** It has: brand colors, typography, ALL final copy (use verbatim — never rewrite), page architecture, SEO requirements, image specs.

## Critical Constraints
- Static HTML + CSS + minimal JS. No frameworks. No bundlers. No package.json.
- All text in HTML source (not JS-rendered). SEO and Pomelli crawlers can't execute JS.
- No bot-blocking. No CAPTCHA. No JS challenges.
- All charter copy is FINAL. Use verbatim. Do not optimize or paraphrase.
- Placeholder images = gray rectangles (#E0DDD8) with text labels showing image name + dimensions.
- System CLI tools (like Vercel CLI) are fine. No project-level npm dependencies.

## Brand Quick Reference
| Token | Value |
|-------|-------|
| Primary | #2C2C2C (warm charcoal) |
| Background | #F5F2EE (off-white stone) |
| Accent | #8B8A6E (sage, temporary) |
| Text secondary | #7A7A7A |
| Placeholder gray | #E0DDD8 |
| Border | #D6D3CE |
| Surface | #FFFFFF |
| Font | Inter from Google Fonts, fallback: system-ui, -apple-system, sans-serif |
| Brand name | TRAVRO — always uppercase, letter-spacing: 0.15em–0.2em, weight: 600 |
| Heading weight | 500–600. Letter-spacing: ~0.02em |
| Body weight | 400. Line-height: 1.7 |

## Design North Star
"Architectural portfolio feel, not typical DTC e-commerce." More restrained = always better.
Reference: aesop.com, monos.com, peakdesign.com, cos.com

## ⚠️ PHASED BUILD — DO NOT BUILD EVERYTHING AT ONCE

This project uses a **phase-by-phase** workflow. The user will tell you which phase to execute. Complete ONE phase, then STOP and wait for the next instruction.

**Do NOT proceed to the next phase without user confirmation.**

### Phase 1 → CSS Foundation
Create `css/style.css`. Read Charter Sections 3.1–3.4 for specs.
Include: CSS custom properties for all colors/fonts/spacing, reset, base typography, all component and section styles (hero, story, philosophy grid, product preview, founder, footer), responsive breakpoints (mobile ≤ 768px), email form styles, placeholder image styles, navigation (fixed header with scroll state).
Output: 1 file. **STOP.**

### Phase 2 → HTML
Create `index.html`. Read Charter Section 4 for ALL copy (use verbatim).
Include: `<head>` with meta tags, OG tags, Google Fonts link, favicon link, CSS link. `<body>` with: nav header, Section 1 Hero, Section 2 Our Story, Section 3 Design Philosophy (3-column), Section 4 Product Preview (K35 hero + 3-item Coming Soon grid), Section 5 About Founder, Section 6 Footer. All placeholder images. JSON-LD structured data. JS script link at bottom.
Output: 1 file. **STOP.**

### Phase 3 → JavaScript
Create `js/main.js`.
Include: header scroll behavior (add class on scroll), smooth scroll for anchor links, mobile nav toggle, email form handling (prevent default, show success message, optional Formspree/Mailchimp integration).
Output: 1 file. **STOP.**

### Phase 4 → SEO & Deployment Files
Create these 5 files:
- `sitemap.xml` — single URL entry for travro.com
- `robots.txt` — allow all crawlers, reference sitemap
- `404.html` — simple branded 404 page using same styles
- `favicon.svg` — minimal "TR" monogram or TRAVRO text, charcoal on transparent
- `vercel.json` — clean URLs, custom 404, cache headers for static assets
Output: 5 files. **STOP.**

### Phase 5 → Review & README
Review all files for consistency (colors match, copy is verbatim, links work).
Create `README.md` — project overview, local preview instructions (`python3 -m http.server 8000`), deployment steps (Vercel), image swap instructions.
Output: 1 file + any fixes. **DONE.**

## Decision Authority
For anything NOT in the charter (spacing, hover states, transitions, breakpoints), you decide. When in doubt: more restrained.

## Project Structure (Final)
```
travro-site/
├── CLAUDE.md
├── docs/
│   └── TRAVRO_Website_Project_Charter_v2.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── og-image.jpg
├── favicon.svg
├── sitemap.xml
├── robots.txt
├── 404.html
├── vercel.json
└── README.md
```

## Ask Before Acting
- Do NOT add features not in the charter
- Do NOT install npm packages
- Do NOT create a build pipeline
- Do NOT proceed to next phase without user saying so
- If ambiguous, ask
