# TRAVRO — Pre-Launch Website

Static pre-launch website for **TRAVRO** by Travel Trail Goods Inc. Built to satisfy four goals simultaneously: unlock Google Pomelli's Business DNA analysis (requires a live, bot-unblocked, text-rich URL), establish an SEO beachhead for the brand name, collect Kickstarter pre-launch email subscribers, and provide a professional URL for trade show and partner communications. The site is intentionally minimal — pure HTML + CSS + vanilla JS, no frameworks, no build step — so any developer can open a file and edit it. Nine sections, Cormorant Garamond typography, copper accent system.

---

## Local Preview

Requires Python 3 (ships with macOS).

```bash
# From the project root:
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

> The server must be started from the project root (the folder containing `index.html`). Starting it from a parent directory will serve the wrong files.

To stop the server: `Ctrl + C`, or kill it by port: `kill $(lsof -ti :8000)`

---

## Deploy to Vercel

Vercel's free Hobby tier is sufficient. `vercel.json` is already configured with clean URLs, custom 404 routing, and cache headers.

**First deploy (one-time setup):**

```bash
# Install the Vercel CLI globally (requires Node.js)
npm install -g vercel

# Authenticate
vercel login

# Deploy from the project root
vercel
```

Vercel will prompt you with a few questions. Recommended answers:
- **Set up and deploy?** → `Y`
- **Which scope?** → your personal account
- **Link to existing project?** → `N` (first time)
- **Project name?** → `travro` (or `travro-site`)
- **Directory?** → `.` (current folder)
- **Override settings?** → `N`

After deployment, Vercel prints a preview URL (e.g. `travro.vercel.app`). Share this URL with Pomelli for Business DNA analysis.

**Subsequent deploys:**

```bash
vercel --prod
```

**Binding a custom domain (travro.com):**

1. Go to your Vercel dashboard → Project → Settings → Domains
2. Add `travro.com` and `www.travro.com`
3. Update your DNS registrar's nameservers or add the CNAME/A records Vercel provides
4. Vercel provisions SSL automatically

---

## Swapping Placeholder Images

All placeholder images are `<div>` elements with a gray background and a text label. Replace them with real product photos when available.

**Step 1 — Add images to the `/images/` folder**

```
images/
├── k35-hero.webp          (target: 1200 × 800 px, 85% quality)
├── k35-expanded.webp      (target: 800 × 600 px, 80% quality)
├── k35-folded.webp        (target: 800 × 600 px, 80% quality)
├── k07-front.webp         (target: 600 × 400 px, 75% quality)
├── lk001-main.webp        (target: 600 × 400 px, 75% quality)
├── k34-main.webp          (target: 600 × 400 px, 75% quality)
└── og-image.jpg           (exactly 1200 × 630 px, 90% quality — for social sharing)
```

Use WebP format for all product shots. Keep a JPG fallback only for `og-image.jpg` (required by social platforms).

**Step 2 — Replace each placeholder `<div>` in `index.html`**

Find the placeholder div:

```html
<div
  class="placeholder-img hero__placeholder"
  role="img"
  aria-label="K35 carry-on luggage hero shot"
>K35 Hero Image — 1200×800</div>
```

Replace with a real `<img>` tag. Keep the wrapping class on the `<img>` so aspect-ratio and sizing still apply:

```html
<img
  class="hero__placeholder"
  src="images/k35-hero.webp"
  alt="K35 carry-on luggage, expanded view"
  width="1200"
  height="800"
  loading="eager"
>
```

> Use `loading="eager"` for the hero image (above the fold). Use `loading="lazy"` for all product and grid images below the fold.

**Placeholder → filename reference:**

| Placeholder label         | Replace with              | `loading` value |
|---------------------------|---------------------------|-----------------|
| `K35 Hero Image — 1200×800`  | `images/k35-hero.webp`    | `eager`         |
| `K35-expanded — 800×600`     | `images/k35-expanded.webp`| `lazy`          |
| `K35-folded — 800×600`       | `images/k35-folded.webp`  | `lazy`          |
| `K07 — 600×400`              | `images/k07-front.webp`   | `lazy`          |
| `LK001 — 600×400`            | `images/lk001-main.webp`  | `lazy`          |
| `K34 — 600×400`              | `images/k34-main.webp`    | `lazy`          |

**Step 3 — Update OG image**

The `og-image.jpg` file is referenced in `index.html` at:

```html
<meta property="og:image" content="/images/og-image.jpg">
```

This JPG is used by Facebook, Twitter/X, iMessage link previews, etc. It must be exactly **1200 × 630 px**, saved as JPG. Drop the file into `images/og-image.jpg` and redeploy.

---

## Connecting the Email Form

The email forms currently show a client-side success state only — no emails are captured yet. To make them functional:

1. Create a free [Formspree](https://formspree.io) account
2. Create a new form → copy your endpoint (looks like `https://formspree.io/f/xyzabcde`)
3. In `js/main.js`, find the comment `// When Formspree (or similar) is connected` and replace the success block with a `fetch()` POST to your endpoint:

```js
fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Accept': 'application/json' },
  body: new FormData(form)
})
.then(function (res) {
  if (res.ok) {
    form.style.display = 'none';
    successMsg.classList.add('is-visible');
    form.reset();
  }
});
```

Alternatively, drop a Mailchimp embed form in place of the existing form markup.

---

## File Structure

```
travro-site/
│
├── index.html          Single-page site. All 9 sections. All copy final and verbatim.
│
├── 404.html            Branded error page. Same CSS + fonts. No JS.
│
├── css/
│   └── style.css       All styles. CSS custom properties in :root. No preprocessor.
│                       Edit this file to change colors, spacing, or typography.
│
├── js/
│   └── main.js         Vanilla JS only. Header scroll, mobile nav, smooth scroll,
│                       email form handling. No libraries.
│
├── images/
│   └── og-image.jpg    Social sharing preview (1200×630). Add product photos here.
│
├── favicon.svg         TR monogram. Charcoal on transparent. 32×32 viewBox.
│
├── sitemap.xml         Single-URL sitemap for https://travro.com/
│
├── robots.txt          Allow all crawlers. Required for Pomelli compatibility.
│
├── vercel.json         Deployment config: cleanUrls, custom 404, cache headers.
│                       CSS/JS/images → immutable 1-year cache.
│                       HTML → no-cache (always fresh).
│
├── docs/
│   └── TRAVRO_Website_Project_Charter_v2.md   Source of truth for all copy + specs (v3 as of Feb 25, 2026).
│
└── CLAUDE.md           Instructions for Claude Code (phased build workflow).
```

---

## Design Decisions

All copy is final and sourced verbatim from the Project Charter (`docs/TRAVRO_Website_Project_Charter_v2.md` Section 4, v3). Do not rewrite or paraphrase.

**Typography:** Cormorant Garamond — single typeface used at all scales from nav wordmark to legal copy. Display headings at weight 400; ghost/background text at weight 300 (Manifesto only); labels and badges at 500–600; spec values and wordmark at 700.

**Colors:** Warm copper `#C4956A` as primary accent. Stone background `#F5F2EE`. Warm taupe `#6B6560` for secondary text. Full token reference in charter Section 3.1.

For any visual change not covered by the charter, the guiding question is: **does it align with "Architectural Minimalism + Quiet Confidence"?** When in doubt, do less.

Reference sites for tone calibration: [aesop.com](https://aesop.com) · [monos.com](https://monos.com) · [peakdesign.com](https://peakdesign.com) · [cos.com](https://cos.com)
