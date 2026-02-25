# TRAVRO Pre-Launch Website — Claude Code Project Charter v2.0

**Date:** February 25, 2026
**Status:** Active — v3 reflects production implementation as of Feb 25, 2026
**Project Owner:** Will Zang, Co-founder, Travel Trail Goods Inc.
**Technical Executor:** Claude Code
**Target:** Deploy immediately using temporary URL; bind custom domain when ready

---

## Changelog

### v3.0 — Feb 25, 2026
- Typography updated: Inter → Cormorant Garamond (editorial serif, Google Fonts)
- Accent color updated: sage #8B8A6E → warm copper #C4956A (ratified as permanent)
- Text secondary updated: #7A7A7A → warm taupe #6B6560; border and placeholder tokens added
- Page architecture expanded: 6 → 9 sections (Editorial Strip, Manifesto, Stack Section added)
- All Section 4 copy updated to reflect live site (live copy ratified as authoritative source of truth)
- SEO meta description, OG title, JSON-LD updated to match live HTML

### v2.0 — Feb 22, 2026
- Initial charter approved for execution

---

## 1. PROJECT OBJECTIVES

### Primary Goals
1. **Unlock Google Pomelli** — Pomelli requires a live website URL to generate a "Business DNA" profile, which then powers its Photoshoot feature (AI product photography). The site must have sufficient text content, clear visual identity, and no bot-blocking mechanisms.
2. **Establish SEO beachhead** — "TRAVRO" currently returns zero Google results. This site becomes the first indexed page, establishing permanent search ownership.
3. **Kickstarter pre-launch funnel** — Collect email subscribers for Q2 2026 Kickstarter campaign launch.
4. **Brand presence** — Provide a professional URL for trade shows, business cards, and partner communications.

### Explicitly Out of Scope
- No e-commerce functionality (no cart, checkout, inventory)
- No CMS or admin panel
- No blog or content management system
- No user accounts or authentication
- No complex page transitions or animations
- No multi-language support (English only for now)
- This is NOT the final website. A Shopify migration will follow post-Kickstarter.

---

## 2. TECHNICAL DECISIONS (Confirmed)

| Dimension | Decision | Rationale |
|-----------|----------|-----------|
| Architecture | Static site | Fast, SEO-friendly, zero ops cost, Pomelli-compatible |
| Tech stack | HTML + CSS + minimal JS | Claude Code can execute fully; no framework overhead |
| Hosting | Vercel or Netlify (free tier) | Temporary URL for development; custom domain binding later |
| Domain | travro.com (being purchased) | Temporary: travro.vercel.app or travro.netlify.app |
| Responsive | Desktop + Mobile required | Pomelli is desktop-optimized, but visitors may be mobile |
| Images | WebP format, lazy-loaded | Many product photos; must control page load speed |

### Technical Constraints
- Pure HTML — content must be in the HTML source, not rendered by JavaScript. This is critical for both SEO crawlers and Pomelli's website analyzer. Pomelli cannot read JavaScript-rendered content.
- No bot-blocking: no CAPTCHA, no Cloudflare challenge pages, no JavaScript-gated content. Pomelli's crawler will fail if blocked (confirmed: Cloudflare users have reported this issue).
- Email collection: use a free third-party service (Mailchimp embed, Formspree, or similar). Claude Code chooses the simplest reliable option.
- All text content hardcoded in HTML (not loaded from API or JSON files).

---

## 3. BRAND VISUAL SPECIFICATIONS

**Source of truth:** TRAVRO 品牌定位说明书 v2.2, Section 九 (Visual Identity Direction Framework)

### 3.1 Color System

| Role | CSS Variable | Hex | Notes |
|------|-------------|-----|-------|
| Brand Primary | `--color-primary` | `#2C2C2C` | Deep charcoal / warm black — NOT pure black |
| Brand Background | `--color-background` | `#F5F2EE` | Off-white stone — NOT pure white |
| Brand Accent | `--color-accent` | `#C4956A` | **Warm copper** — permanent (replaced sage in v3) |
| Text Primary | `--color-text` | `#2C2C2C` | Same as primary |
| Text Secondary | `--color-text-secondary` | `#6B6560` | **Warm taupe** — harmonizes with copper + stone background |
| Surface White | `--color-surface` | `#FFFFFF` | Use sparingly for cards or contrast |
| Border | `--color-border` | `#D4D0C8` | Warmer greige — for dividers and rule lines |
| Placeholder | `--color-placeholder` | `#E0DDD8` | Dev placeholder backgrounds; replace with real images |
| Deprecated | `--color-sage` | `#8B8A6E` | Reserved — do not use in new work |

### 3.2 Typography

| Role | Specification |
|------|--------------|
| Font family | `Cormorant Garamond` from Google Fonts. Fallback: `Georgia, serif` |
| Google Fonts URL weights | `ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400` |
| Design rationale | Single typeface with total authority — editorial serif from nav wordmark to legal copy. Archetype: Aesop, Freight Display. |
| Display headings | Weight 400 (Regular). Confident without being heavy at large scale (clamp 4rem–9.5rem). |
| Ghost / background text | Weight 300 (Light). Intentionally hairline — used only for Manifesto overlay text at 15rem. |
| UI labels, badges | Weight 500–600 with `letter-spacing: 0.09–0.13em`. All-caps tracking compensates for serif x-height at small sizes. |
| Spec values ($99, 4″, 10s) | Weight 700. Bold copper figures need visual presence. |
| Brand name "TRAVRO" | Weight 700. Letter-spacing: 0.18em. Always uppercase. |
| Body text | Weight 400. Line-height: 1.7. |

### 3.3 Design Principles

1. **Architectural Minimalism** — Design the site like architecture: clear structure, powerful white space. Reference: Aesop.com, COS, Muji.
2. **Tone-on-Tone** — Extend the product's one-tone color philosophy into the website. Avoid strong color contrasts.
3. **Maker Texture** — Convey the authenticity of a manufacturer-turned-brand. Not sterile "Silicon Valley DTC" aesthetic.
4. **Less is more** — No decorative graphics. No gradients, no drop shadows, no rounded card stacking. Let content and product photography speak.

### 3.4 Visual Prohibitions (DO NOT)
- ❌ Travel-related icons (airplanes, globes, compasses, roads)
- ❌ Decorative design elements or ornamental borders
- ❌ Light weights (300) on body text or UI labels — reserved exclusively for large-scale ghost/background typography
- ❌ More than 3 colors on any single viewport
- ❌ Generic stock photo aesthetics
- ❌ Flashy animations, parallax scrolling, or particle effects
- ❌ Emoji or playful iconography

---

## 4. PAGE ARCHITECTURE

Single-page long-scroll layout. Nine sections. All content is in English.

**Critical Pomelli requirement:** Every section must contain substantive English text (not just images). Pomelli extracts tone of voice, brand values, and messaging from text content. Image-heavy pages with little text produce weak Business DNA profiles.

---

### Section 1: HERO

**Purpose:** Communicate brand identity in 3 seconds + capture email leads.

**Layout:** Full-width. Brand name prominent. Single hero product image. Email capture form.

**Content (final copy — use verbatim):**

- **Brand name:** TRAVRO (large wordmark, uppercase, wide letter-spacing)
- **Tagline:** Travel in your own light.
- **Subtitle:** Design-forward luggage engineered by 25 years of manufacturing expertise. Not a brand with a factory. A factory with a brand.
- **CTA:** Email input field with placeholder "Enter your email" + button "Join the Journey"
- **Badge:** "Coming to Kickstarter · Q2 2026"
- **Hero image:** K35 carry-on product photo

---

### Section 1b: EDITORIAL STRIP *(added v3)*

**Purpose:** Visual brand statement between Hero and Our Story. No headline, no body copy — pure product imagery.

**Layout:** Full-width horizontal strip of 4 product photos in fixed aspect ratio. Each image has a short uppercase figcaption label.

**Content:**
- Image 1: K35 carry-on — full profile shot
- Image 2: K35 — folded to 4″ depth
- Image 3: K35 — expanded carry-on, full volume
- Image 4: K07 Mobile Office bag

---

### Section 2: OUR STORY

**Purpose:** Establish brand origin narrative. Primary tone-of-voice signal for Pomelli.

**Layout:** Text-dominant section. Optional: small supporting image (factory or product detail).

**Content (final copy — use verbatim):**

**Heading:** We didn't start with a brand. We started with a factory floor.

**Body:**

For 25 years, our manufacturing partners have built luggage for the world's most recognized names in travel—producing millions of units across Asia's most sophisticated supply chains. We've seen firsthand how the industry works: premium brands add their label, triple the price, and pass the cost to you.

TRAVRO was built to change that equation. Same factories. Same components. Same engineering precision. A fraction of the cost—because we're not paying for a legacy brand's overhead.

This is luggage made by people who know every rivet, every wheel mechanism, every zipper track. Not by marketers who discovered luggage was profitable.

---

### Section 2b: MANIFESTO *(added v3)*

**Purpose:** Brand manifesto statement between Our Story and Design Philosophy. Pure typographic impact — no body copy.

**Layout:** Full-bleed dark section (charcoal background). Two lines of large display text at 15rem, weight 300 (intentionally hairline at this scale). Second line offset right and italicized.

**Content:**
- Line 1: "The premium luggage brand"
- Line 2 (offset, italic): "that doesn't charge a premium."

---

### Section 3: DESIGN PHILOSOPHY

**Purpose:** Communicate product differentiation and design language.

**Layout:** Three equal columns (desktop) or stacked blocks (mobile). Each block has a bold subtitle + short paragraph.

**Content (final copy — use verbatim):**

**Heading:** Three rules. No exceptions.

**Block 1 — One-tone system.**
Every component—body, zippers, handles, wheels—is designed in the same tonal family. No visual noise. No mismatched hardware. The product looks like one considered decision, not an assembly of parts.

**Block 2 — Engineering-grade components.**
We use Hinomoto wheels from Japan, YKK zippers, and TSA-approved combination locks. Not because they're premium talking points—because they're the components that actually work, across hundreds of thousands of kilometres.

**Block 3 — Quiet confidence.**
No logo parade. No flashy hardware. No trend-chasing colorways. TRAVRO is designed to look exactly right for exactly as long as you own it. The kind of design that ages like architecture, not fashion.

---

### Section 3b: STACK SECTION *(added v3)*

**Purpose:** Immersive product storytelling between Design Philosophy and Coming Soon grid. Expands the K35 narrative into three cinematic cards.

**Layout:** Sticky-scroll — left panel holds a product image that pans as user scrolls; right panel shows stacked narrative cards. Spec strip at bottom: 4″ folded depth / 10s to open / $99 starting price.

**Card 1 — K35 introduction:**
Heading: K35 — The Carry-On That Folds in Half
Body: Full carry-on volume when you need it. Folds to half its depth in 10 seconds when you don't. The only luggage that solves the storage problem as elegantly as it solves the travel problem.

**Card 2 — Engineering:**
Heading: Built for the distance, not the shelf.
Body: Our proprietary mechanism collapses the shell to 4 inches without losing its shape. [Engineering components story: Hinomoto wheels, YKK zippers, TSA locks]

**Card 3 — Design system:**
Heading: One tone. Zero compromises.
Body: [One-tone aesthetic story — how the design system extends to every component]

---

### Section 4: PRODUCT PREVIEW

**Purpose:** Showcase the product line, build anticipation.

**Layout:** K35 as hero product with larger image + description. Other products in a smaller grid below as "Coming Soon."

**Content (final copy — use verbatim):**

**K35 — Hero Product**
- **Name:** K35 — The Carry-On That Folds in Half
- **Description:** Full carry-on volume when you need it. Folds to half its depth in 10 seconds when you don't. The only luggage that solves the storage problem as elegantly as it solves the travel problem.
- **Price badge:** Starting from $99 on Kickstarter
- **Images:** K35 expanded and folded product photos

**Coming Soon Grid (3 items):**

| Product | One-liner |
|---------|-----------|
| K07 Mobile Office | The bag that works as hard as you do. |
| LK001 Aluminum Frame | Industrial precision. Lifetime warranty. |
| K34 Artist Canvas | For when you pack like you live. |

---

### Section 5: ABOUT THE FOUNDER

**Purpose:** Build trust through founder credibility. "Bridge person" narrative.

**Layout:** Text-dominant. Optional: founder photo placeholder.

**Content (final copy — use verbatim):**

**Heading:** Built by someone who knows both sides.

**Body:**

Most luggage brands are built by marketers who found a manufacturer. TRAVRO is built by someone who grew up in the industry—who spent years on both sides of the factory floor and the business class cabin.

After years in global logistics and supply chain at Maersk, then an MBA at Yale, our founder Will Zang kept asking the same question: why does everyone in the know buy their luggage from the factory direct, while everyone else pays five times the price for a label?

TRAVRO is the answer. Not a brand that happens to make luggage. A manufacturing team that finally decided to talk directly to the people who carry it.

---

### Section 6: FOOTER

**Content:**
- Repeat email CTA: "Join the journey. Be the first to know." + email input + subscribe button
- Social media icon links (Instagram, TikTok) — link to `https://instagram.com/travro` and `https://tiktok.com/@travro` even if accounts are empty placeholders
- "TRAVRO — A Travel Trail Goods Inc. Brand"
- "Based in California. Crafted with 25 years of expertise."
- "© 2026 Travel Trail Goods Inc. All rights reserved."

---

## 5. PRODUCT PHOTOGRAPHY ASSETS

### Current Status
- Professional studio product photos completed (IMG_3802 through IMG_3909, JPG format)
- All photos are **unbranded** (no TRAVRO logo on products)
- Photos will be provided by Will after selection; Claude Code should build with **placeholders first**

### Placeholder Strategy
During development, use styled placeholder elements (not external placeholder services). Each placeholder should be:
- A centered gray (`#E0DDD8`) rectangle matching the specified dimensions
- Text label inside showing the intended image (e.g., "K35 Hero — 1200×800")
- Same aspect ratio as the final images will use

### Image Naming Convention
```
/images/k35-hero.webp
/images/k35-folded.webp
/images/k35-detail-[n].webp
/images/k07-front.webp
/images/lk001-main.webp
/images/k34-main.webp
/images/og-image.jpg          (for social sharing preview, 1200×630)
```

### Image Optimization Requirements
| Usage | Max Width | Quality | Format | Loading |
|-------|-----------|---------|--------|---------|
| Hero image | 1920px | 85% | WebP with JPG fallback | eager (above fold) |
| Product images | 1200px | 80% | WebP | lazy |
| Grid thumbnails | 600px | 75% | WebP | lazy |
| OG image | 1200×630px | 90% | JPG (required by social platforms) | N/A |

---

## 6. SEO REQUIREMENTS

### Meta Tags
```html
<title>TRAVRO — Design-Forward Luggage | 25 Years of Engineering | Honest Pricing</title>
<meta name="description" content="TRAVRO builds design-forward luggage using 25 years of manufacturing expertise. Same factory-grade components as premium brands. A fraction of the cost. Coming to Kickstarter Q2 2026.">
```

### Open Graph Tags
```html
<meta property="og:title" content="TRAVRO — Design-Forward Luggage | 25 Years of Engineering">
<meta property="og:description" content="TRAVRO builds design-forward luggage using 25 years of manufacturing expertise. Same factory-grade components as premium brands. A fraction of the cost. Coming to Kickstarter Q2 2026.">
<meta property="og:image" content="https://travro.com/images/og-image.jpg">
<meta property="og:url" content="https://travro.com">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data (JSON-LD)
Include Organization schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TRAVRO",
  "url": "https://travro.com",
  "logo": "https://travro.com/images/logo.png",
  "description": "TRAVRO builds design-forward luggage using 25 years of manufacturing expertise. Same factory-grade components as premium brands. A fraction of the cost.",
  "foundingDate": "2026",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Travel Trail Goods Inc."
  }
}
```

### Technical SEO Checklist
- [ ] Semantic HTML: proper heading hierarchy (single `<h1>`, logical `<h2>`-`<h3>` structure)
- [ ] All images have descriptive `alt` text
- [ ] `sitemap.xml` generated (even for single page)
- [ ] `robots.txt` — allow all crawlers, no restrictions. Critical for Pomelli compatibility.
- [ ] Favicon: simple TRAVRO "TR" monogram or text. Provide as `/favicon.ico` + `/favicon.svg`
- [ ] `<link rel="canonical">` tag pointing to `https://travro.com/`
- [ ] Page load time target: under 3 seconds on 3G connection

---

## 7. POMELLI COMPATIBILITY NOTES

Pomelli (labs.google.com/pomelli) will crawl this website to build a Business DNA profile. These requirements ensure optimal extraction:

1. **Text-rich HTML** — All section copy must be in the HTML source. Pomelli analyzes text to extract tone of voice, brand values, and messaging style.
2. **Consistent visual identity in CSS** — Pomelli extracts color palette and typography from the rendered page. The CSS custom properties defined in Section 3 must be consistently applied throughout.
3. **Product images present** — Even placeholder images help Pomelli understand product category. Final product photos will improve results significantly.
4. **No bot blocking** — No CAPTCHA, no JavaScript challenges, no Cloudflare protection on this site. Pomelli's crawler has been confirmed to fail on bot-protected sites.
5. **Clean robots.txt** — Allow all user agents. Do not block any crawlers.
6. **Analysis time** — Pomelli takes up to 8 minutes to analyze a site. No action needed, just be aware.
7. **Usage limits** — Pomelli allows 300 image creatives/month and 4 video animations/day. Plan Photoshoot output accordingly.

---

## 8. MVP BOUNDARY

### Must Have (ship with these)
- All 6 sections with final copy
- Responsive layout (desktop + mobile)
- Email subscription form (functional, connected to a real service)
- Image placeholders ready for swap (or final images if available)
- Full SEO implementation (meta tags, OG tags, structured data, sitemap, robots.txt)
- Favicon
- Deployed to Vercel or Netlify with working URL
- Clean, commented code (another developer will maintain this later)

### Nice to Have (if time allows)
- Subtle scroll-triggered fade-in animations (CSS-only, no JS library)
- Smooth scroll navigation (anchor links to sections)
- A sticky/minimal header that appears on scroll
- K35 image sequence showing fold/unfold progression

### Do Not Build
- Shopping cart or checkout
- Blog or CMS
- User accounts
- Live chat
- Dark mode toggle
- Multi-language
- Complex JavaScript interactions
- Cookie consent banner (no cookies being set beyond email service)

---

## 9. REFERENCE WEBSITES (Design Tone Calibration)

These are NOT templates to copy. They represent the visual tone TRAVRO aims for:

| Website | What to Reference |
|---------|-------------------|
| aesop.com | Minimalist typography, white space, text-driven brand storytelling |
| monos.com | Travel brand product presentation, restrained color palette |
| peakdesign.com | Maker-brand authenticity, Kickstarter-origin brand feel |
| cos.com | Architectural minimalism in fashion/lifestyle context |

**The north star:** If you removed all images and only read the typography and spacing, it should feel like a well-designed architecture portfolio — not a typical DTC e-commerce site.

---

## 10. DELIVERABLES

Claude Code should produce:

```
travro-site/
├── index.html              # Single page with all 9 sections
├── css/
│   └── style.css           # All styles, using CSS custom properties
├── js/
│   └── main.js             # Minimal: smooth scroll, mobile nav, form handling
├── images/
│   ├── (placeholder files or final product photos)
│   ├── og-image.jpg
│   └── favicon.svg
├── sitemap.xml
├── robots.txt
├── 404.html                # Simple branded 404 page
├── vercel.json             # OR netlify.toml — deployment config
└── README.md               # Local dev instructions + deployment guide
```

---

## 11. COPY USAGE INSTRUCTIONS

**All English copy in Section 4 of this charter is FINAL and APPROVED.** Do not rewrite, "optimize," paraphrase, or add marketing flourishes.

> **v3 note:** Section 4 copy was updated in v3 to reflect production implementation (live site as of Feb 25, 2026). The live HTML and this charter are now synchronized. Future copy edits must update both simultaneously to keep them in sync.

These copy blocks were developed through multiple iterations of brand positioning work (documented in TRAVRO 品牌定位说明书 v2.2 and TRAVRO Founder Narrative v2.0). They reflect deliberate tone-of-voice decisions:
- Confident but not arrogant
- Specific but not boring
- Restrained but not cold
- Facts over adjectives — let the reader draw conclusions

**Tone reference examples from the brand guide:**

| ❌ Don't write this | ✅ Write this |
|---------------------|--------------|
| "Revolutionary smooth-glide technology!" | "Hinomoto wheels. The same ones in luggage three times our price." |
| "The most innovative luggage ever created!" | "Folds to half its size. Fits under your bed. Opens to a full carry-on in 10 seconds." |
| "We're disrupting the luggage industry!" | "We've been making luggage for 25 years. We just finally put our own name on it." |

---

## 12. DESIGN DECISION AUTHORITY

For any visual detail NOT specified in this charter (spacing values, hover effects, section transitions, mobile breakpoints, etc.), Claude Code has full decision-making authority.

**Decision criteria:** Does it align with "Architectural Minimalism + Quiet Confidence"?  
**When in doubt:** More restrained is always better than more decorative.

---

*Charter v3.0 | Created: Feb 22, 2026 | Updated: Feb 25, 2026 | For: TRAVRO Pre-launch Website Build via Claude Code*
