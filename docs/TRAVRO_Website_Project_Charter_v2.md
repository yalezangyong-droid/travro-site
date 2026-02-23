# TRAVRO Pre-Launch Website — Claude Code Project Charter v2.0

**Date:** February 22, 2026  
**Status:** Approved for execution  
**Project Owner:** Will Zang, Co-founder, Travel Trail Goods Inc.  
**Technical Executor:** Claude Code  
**Target:** Deploy immediately using temporary URL; bind custom domain when ready

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

| Role | Color Direction | CSS Variable | Hex Value |
|------|----------------|--------------|-----------|
| Brand Primary | Deep Charcoal / Warm Black (NOT pure black — carries warm undertone) | `--color-primary` | `#2C2C2C` |
| Brand Background | Off-White / Stone (NOT pure white — carries stone/warm gray tint) | `--color-background` | `#F5F2EE` |
| Brand Accent | Sage / Olive (temporary — final accent TBD by designer Lucas) | `--color-accent` | `#8B8A6E` |
| Text Primary | Same as Brand Primary | `--color-text` | `#2C2C2C` |
| Text Secondary | Mid-gray for supporting text | `--color-text-secondary` | `#7A7A7A` |
| Surface White | Pure white — use sparingly for cards or contrast sections | `--color-surface` | `#FFFFFF` |

### 3.2 Typography

| Role | Specification |
|------|--------------|
| Font family | `Inter` from Google Fonts (both headings and body). Fallback: `system-ui, -apple-system, sans-serif` |
| Headings | Weight: 500 (Medium) to 600 (Semi-Bold). Conveys reliability and engineering precision. |
| Body text | Weight: 400 (Regular). Clean and readable. |
| Brand name "TRAVRO" | Always uppercase. Letter-spacing: 0.15em - 0.2em. Weight: 600. |
| Heading letter-spacing | Slightly wider than default (~0.02em). Reflects "white space" and "restraint" in brand tone. |

### 3.3 Design Principles

1. **Architectural Minimalism** — Design the site like architecture: clear structure, powerful white space. Reference: Aesop.com, COS, Muji.
2. **Tone-on-Tone** — Extend the product's one-tone color philosophy into the website. Avoid strong color contrasts.
3. **Maker Texture** — Convey the authenticity of a manufacturer-turned-brand. Not sterile "Silicon Valley DTC" aesthetic.
4. **Less is more** — No decorative graphics. No gradients, no drop shadows, no rounded card stacking. Let content and product photography speak.

### 3.4 Visual Prohibitions (DO NOT)
- ❌ Travel-related icons (airplanes, globes, compasses, roads)
- ❌ Decorative design elements or ornamental borders
- ❌ Thin/light font weights (conveys "frivolous" not "quiet strength")
- ❌ More than 3 colors on any single viewport
- ❌ Generic stock photo aesthetics
- ❌ Flashy animations, parallax scrolling, or particle effects
- ❌ Emoji or playful iconography

---

## 4. PAGE ARCHITECTURE

Single-page long-scroll layout. Six sections. All content is in English.

**Critical Pomelli requirement:** Every section must contain substantive English text (not just images). Pomelli extracts tone of voice, brand values, and messaging from text content. Image-heavy pages with little text produce weak Business DNA profiles.

---

### Section 1: HERO

**Purpose:** Communicate brand identity in 3 seconds + capture email leads.

**Layout:** Full-width. Brand name prominent. Single hero product image. Email capture form.

**Content (final copy — use verbatim):**

- **Brand name:** TRAVRO (large wordmark, uppercase, wide letter-spacing)
- **Tagline:** Travel in your own light.
- **Subtitle:** Design-forward luggage. 25 years of engineering. Honest pricing.
- **CTA:** Email input field with placeholder "Enter your email" + button "Join the Journey"
- **Badge:** "Coming to Kickstarter 2026"
- **Hero image:** K35 carry-on product photo (placeholder during development: use a centered gray rectangle with text "K35 Hero Image — 1200×800")

---

### Section 2: OUR STORY

**Purpose:** Establish brand origin narrative. Primary tone-of-voice signal for Pomelli.

**Layout:** Text-dominant section. Optional: small supporting image (factory or product detail).

**Content (final copy — use verbatim):**

**Heading:** We didn't start with a brand. We started with a factory floor.

**Body:**

For 25 years, a factory in Jiangxi, China has been the silent force behind luggage brands you already know. They didn't build a brand. They built expertise — one hinge, one wheel, one zipper at a time.

TRAVRO is what happens when that expertise finally gets its own name.

We're not a brand that outsources manufacturing. We are the manufacturer. That's why we can offer Hinomoto wheels, YKK zippers, and TSA-approved locks at a price point that doesn't require a coupon code to feel fair.

---

### Section 3: DESIGN PHILOSOPHY

**Purpose:** Communicate product differentiation and design language.

**Layout:** Three equal columns (desktop) or stacked blocks (mobile). Each block has a bold subtitle + short paragraph.

**Content (final copy — use verbatim):**

**Heading:** Three rules. No exceptions.

**Block 1 — One-tone system.**
Shell, handle, wheels, zipper — all the same color. No visual noise. This isn't a design choice; it's a design discipline.

**Block 2 — Engineering-grade components.**
Hinomoto wheels. YKK zippers. TSA-approved locks. The same components inside luggage that costs twice as much.

**Block 3 — Quiet confidence.**
We don't make the loudest suitcase at the carousel. We make the one you trust to show up intact after 50 flights.

---

### Section 4: PRODUCT PREVIEW

**Purpose:** Showcase the product line, build anticipation.

**Layout:** K35 as hero product with larger image + description. Other products in a smaller grid below as "Coming Soon."

**Content (final copy — use verbatim):**

**K35 — Hero Product**
- **Name:** K35 — The Carry-On That Folds in Half
- **Subtitle:** Big on travel, small on storage.
- **Description:** Your suitcase takes up more space in your apartment than your coffee table. And you use your coffee table every day. The K35 folds to half its size when you're home. Opens to a full-size carry-on in 10 seconds.
- **Price badge:** Starting from $99 on Kickstarter
- **Images:** 2–3 photos (expanded view + folded view). Placeholder during dev: gray rectangles labeled "K35-expanded — 800×600" and "K35-folded — 800×600"

**Coming Soon Grid (3 items):**

| Product | One-liner | Placeholder label |
|---------|-----------|-------------------|
| K07 Mobile Office | Your office, anywhere. Front-open design fits your 16" MacBook. | "K07 — 600×400" |
| LK001 Aluminum Frame | 25 years in the making. Our flagship. | "LK001 — 600×400" |
| K34 Artist Canvas | Your luggage is a canvas. Limited-edition UV art surface. | "K34 — 600×400" |

---

### Section 5: ABOUT THE FOUNDER

**Purpose:** Build trust through founder credibility. "Bridge person" narrative.

**Layout:** Text-dominant. Optional: founder photo placeholder.

**Content (final copy — use verbatim):**

**Heading:** Built by someone who knows both sides.

**Body:**

TRAVRO started with a gap that most people never see. On one side: a factory with 25 years of engineering mastery — the kind of place that makes luggage for brands you already own. On the other side: American travelers paying $300 for carry-ons built with the exact same components.

Will Zang saw both sides. A decade at Maersk — the world's largest shipping company — building markets across three continents. Yale School of Management. And a simple question that wouldn't go away: why does great luggage engineering always hide behind someone else's name?

TRAVRO is the answer. Not a brand that found a factory. A factory that finally built its own brand.

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
<meta name="description" content="TRAVRO is luggage built by the manufacturer. 25 years of expertise, Hinomoto wheels, YKK zippers, design-forward aesthetics — at a price that makes sense. Coming to Kickstarter 2026.">
```

### Open Graph Tags
```html
<meta property="og:title" content="TRAVRO — Travel in Your Own Light">
<meta property="og:description" content="Design-forward luggage. 25 years of engineering. Honest pricing. Coming to Kickstarter 2026.">
<meta property="og:image" content="/images/og-image.jpg">
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
  "logo": "https://travro.com/images/travro-logo.svg",
  "description": "Design-forward luggage brand. 25 years of manufacturing expertise.",
  "foundingDate": "2025",
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
├── index.html              # Single page with all 6 sections
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

**All English copy in Section 4 of this charter is FINAL and APPROVED.** Claude Code should use this text verbatim. Do not rewrite, "optimize," paraphrase, or add marketing flourishes.

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

*Charter v2.0 | Created: Feb 22, 2026 | For: TRAVRO Pre-launch Website Build via Claude Code*
