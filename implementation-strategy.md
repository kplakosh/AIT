# Advanced Instrument Technologies — Website Rebuild Plan

## Executive Summary

Rebuild [aitechinc.com](http://www.aitechinc.com/) as a modern, responsive website using the existing **Vite + React + TypeScript** project. The new site will preserve the **same three pages and the same content blocks** as the current site — no new pages, no new sections (no blog, careers, case studies, testimonials, etc.).

The goal is to deliver competitor-level **UI/UX polish** (Averna, Bloomy, Primetest, Cyth, Rovisys, Viewpoint) while staying faithful to AIT's current information architecture.

---

## Current Site Inventory (Source of Truth)

### Global Elements (All Pages)

| Element | Current Content |
|---|---|
| **Logo** | Custom AIT logo (uploaded; black letter variant — white text on dark backgrounds as needed) |
| **Navigation** | Home · Services · Contact |
| **Footer** | "Copyright 2026 Advanced Instrument Technologies, Inc." |

### Home (`/`)

1. Company intro — engineering services, custom/turnkey test solutions, R&D / manufacturing / QA
2. Location — Cumming, GA (northern Atlanta suburb); global customer base
3. NI Alliance Partner — certified developers, quality assurance statement
4. **NI Certified Alliance Partner badge** — `/images/logos/ni_cert_alliance_part.png`

### Services (`/services`)

1. **LabVIEW and TestStand** — 5 bullet points
2. **Hardware** — 3 bullet points
3. **Total Solutions** — turnkey paragraph
4. **How can we help?** — industries/examples paragraph
5. **Let us help you** — contact CTA paragraph

### Contact (`/contact`)

1. Welcome paragraph
2. Company name, address, phone (**770-672-0543**), email (**info@aitechinc.com**)
3. Google Maps embed (5845 Steeplechase Blvd, Cumming, GA 30040)

> **Constraint:** Everything above is in scope. Nothing else is added unless explicitly approved later.

---

## Competitor UX Patterns to Adopt (Without Adding Sections)

| Pattern | Seen At | How We Apply It (Within Existing Content) |
|---|---|---|
| Bold hero with clear value prop | Averna, Bloomy | Home intro becomes a full-width hero — same text, stronger typography |
| Sticky header + active nav state | All competitors | Fixed nav with scroll-aware highlight |
| Service cards with icons | Primetest, Cyth | Services page: 5 existing sections as visual cards |
| Strong visual hierarchy | Viewpoint, Rovisys | Clear H1/H2 scale, generous whitespace |
| Trust/credential callout | Bloomy (NI experts) | NI badge as a designed credential panel on Home |
| Split contact layout | Averna, Bloomy | Contact: info left, map right (same info + map) |
| Subtle scroll/hover motion | Modern competitors | Fade-in on sections; no distracting animation |
| Mobile-first responsive nav | All | Hamburger menu below ~768px |

**Explicitly out of scope** (competitors have these; current AIT site does not):

- Blog / newsletter signup
- Case studies / portfolio
- Careers
- Product catalogs
- Client logo carousels
- Live chat / contact forms (current site is static contact info only)
- Industry vertical landing pages

---

## Recommended Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | React 19 + TypeScript | Already in project |
| Routing | `react-router-dom` | 3-page SPA with clean URLs |
| Styling | **Tailwind CSS v4** | Fast iteration, responsive utilities, design tokens |
| Icons | `lucide-react` | Lightweight icons for service cards |
| Animation | `framer-motion` (light use) | Section reveals, nav transitions |
| SEO | `react-helmet-async` | Per-page title/description/meta |
| Maps | Google Maps embed iframe | Matches current site; no API key needed |
| Build/deploy | Vite → static `dist/` | GitHub Pages (staging URL first) |

---

## Design Direction

### Visual Identity

- **Palette (approved — warm sunset/fall):**

  | Token | Hex | Role |
  |---|---|---|
  | Teal | `#49888a` | Primary accent, links, highlights |
  | Deep teal | `#234958` | Header/footer backgrounds, dark sections |
  | Navy plum | `#26274e` | Hero backgrounds, headings |
  | Muted rose | `#7f456d` | Secondary accent, CTA hover states |
  | Warm gold | `#aa9047` | Accent highlights, dividers, badges |

- **Typography:** `Inter` or `DM Sans` (headings) + system sans fallback
- **Tone:** Warm, professional, trustworthy — sunset/fall palette with test engineering credibility
- **Logo:** Uploaded AIT logo with black letters; invert to white on dark backgrounds (`#234958`, `#26274e`)
- **Imagery:** Subtle warm gradients and abstract patterns; reuse AIT logo + NI badge; no stock-photo hero unless assets are supplied

### Layout Principles

- Max content width ~1200px, 16–24px base spacing scale
- Section padding: 80–120px desktop, 48–64px mobile
- WCAG 2.1 AA contrast on all text
- Focus states on all interactive elements

---

## Implementation Plan — Step by Step

### Phase 0 — Content & Asset Lock (½ day) ✅

**Goal:** Freeze scope before any code is written.

1. ✅ Extract and store all copy in `src/content/site.ts` — verbatim from current site
2. ✅ Assets in `public/images/`:
   - `logo.png` — custom AIT logo (uploaded)
   - `ni-alliance-partner.png` — NI Certified Alliance Partner badge
3. ✅ Copyright year: **2026**
4. ⏳ Sign-off on content file + design mood

**Deliverable:** Approved content manifest + assets in `public/`

---

### Phase 1 — Project Foundation (1 day) ✅

**Goal:** Replace Vite starter with production-ready structure.

1. ✅ Remove Vite demo code (`App.tsx` counter, demo assets, etc.)
2. ✅ Install dependencies: `react-router-dom`, Tailwind, `lucide-react`, `framer-motion`, `react-helmet-async`
3. ✅ Configure Tailwind with design tokens (colors, fonts, spacing)
4. ✅ Set up folder structure (see below)
5. ✅ Configure routes: `/`, `/services`, `/contact`
6. ✅ 404 redirect to Home

**Deliverable:** Routed shell with placeholder pages using locked content

---

### Phase 2 — Design System & Shared Components (1–1½ days) ✅

**Goal:** Reusable building blocks before page work.

1. ✅ **`Container`** — max-width wrapper with narrow/wide size options
2. ✅ **`Section`** — vertical spacing + variants (default, muted, white, dark, gradient)
3. ✅ **`SectionHeading`** — H2 with gold divider, subtitle, alignment options
4. ✅ **`Card`** — default, elevated, and accent variants
5. ✅ **`Button`** — primary, secondary, ghost + sm/md/lg sizes
6. ✅ **`PageHeader`** — reusable gradient page title band
7. ✅ **`Header`** — sticky, scroll shadow, cream background, active nav
8. ✅ **`MobileNav`** — slide-in drawer, body scroll lock, animations
9. ✅ **`Footer`** — logo, nav links, copyright
10. ✅ **`NavLinkItem`** — consistent nav link styling
11. ✅ **Dev preview** — `/dev/components` (development only)

**Deliverable:** Polished design system + dev component preview route

---

### Phase 3 — Home Page (1 day)

**Goal:** Modern presentation of existing Home content only.

**Layout (same content, better structure):**

```
┌─────────────────────────────────────────┐
│  HERO                                   │
│  H1: Advanced Instrument Technologies   │
│  Intro paragraph (existing copy)        │
│  [Contact Us →]  (links to /contact)    │
├─────────────────────────────────────────┤
│  ABOUT / LOCATION                       │
│  Paragraph 2 — Cumming GA + global      │
├─────────────────────────────────────────┤
│  CREDENTIALS                            │
│  Paragraph 3 — NI Alliance Partner      │
│  [NI Certified Alliance Partner badge]  │
└─────────────────────────────────────────┘
```

1. Hero with gradient/pattern background and primary CTA to Contact
2. Two-column "location" block on desktop (text + subtle map pin graphic or Georgia outline — decorative only, not new content)
3. Credential band with NI badge prominently displayed
4. Scroll-triggered fade-in on each block

**No additions:** No stats, no client logos, no service previews.

**Deliverable:** Completed Home page, responsive

---

### Phase 4 — Services Page (1 day)

**Goal:** Transform 5 text sections into scannable, modern layout.

**Layout:**

```
┌─────────────────────────────────────────┐
│  Page header: "Services"                │
│  Brief intro (optional: first line from  │
│  "How can we help?" — or page-only H1)  │
├─────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐            │
│  │ LabVIEW  │  │ Hardware │   Row 1    │
│  │ TestStand│  │          │            │
│  └──────────┘  └──────────┘            │
│  ┌──────────────────────────────┐    │
│  │     Total Solutions (full)     │    │
│  └──────────────────────────────┘    │
│  ┌──────────┐  ┌──────────┐            │
│  │ How can  │  │ Let us   │   Row 2    │
│  │ we help? │  │ help you │            │
│  └──────────┘  └──────────┘            │
└─────────────────────────────────────────┘
```

1. Each of the 5 existing H2 sections → `Card` with icon
2. Bullet lists styled with custom markers
3. "Let us help you" card includes inline link/button to `/contact`
4. Alternating section backgrounds for visual rhythm

**Deliverable:** Completed Services page

---

### Phase 5 — Contact Page (½–1 day)

**Goal:** Professional contact experience with static info + Formspree inquiry form.

**Layout:**

```
┌─────────────────────────────────────────┐
│  Page header + welcome paragraph        │
├──────────────────┬──────────────────────┤
│  Contact details │  Google Maps embed   │
│  • Company name  │  (same iframe src)   │
│  • Address       │                      │
│  • Phone (tel:)  │                      │
│  • Email (mailto)│                      │
├──────────────────┴──────────────────────┤
│  Contact form (Formspree — Option C)    │
│  Name · Email · Message · Submit        │
└─────────────────────────────────────────┘
```

1. Clickable `tel:` and `mailto:` links
2. Responsive: stacked on mobile, side-by-side on desktop
3. Map iframe — lazy-loaded, accessible title
4. "View larger map" link preserved
5. **Formspree form** — name, email, message fields; submissions email `info@aitechinc.com`
6. Form endpoint ID from `VITE_FORMSPREE_FORM_ID` env var (see `.env.example`)

**Deliverable:** Completed Contact page with Formspree integration

---

### Phase 6 — Responsive, Accessibility & Polish (1 day)

1. Test breakpoints: 320, 375, 768, 1024, 1440px
2. Keyboard navigation through header, mobile menu, all links
3. Skip-to-content link
4. `aria-current="page"` on active nav item
5. Reduced-motion media query — disable animations
6. Image alt text on logo and NI badge
7. Focus-visible styles on all interactives
8. Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 90

**Deliverable:** Accessibility checklist passed

---

### Phase 7 — SEO & Metadata (½ day)

Per-page meta (derived from existing site):

| Page | Title | Description |
|---|---|---|
| Home | Advanced Instrument Technologies \| Test Engineering Services | LabVIEW and TestStand test engineering and integration services. Turnkey solutions and development. |
| Services | Services \| Advanced Instrument Technologies | LabVIEW, TestStand, hardware, and turnkey test engineering solutions. |
| Contact | Contact \| Advanced Instrument Technologies | Contact AIT in Cumming, GA for test engineering needs. |

1. Open Graph tags (og:title, og:description, og:image)
2. Semantic HTML: `<main>`, `<nav>`, `<footer>`, one `<h1>` per page
3. `robots.txt` + `sitemap.xml` (3 URLs)
4. Favicon from AIT branding

**Deliverable:** SEO-ready static output

---

### Phase 8 — QA & Cross-Browser Testing (½ day)

1. Chrome, Safari, Firefox, Edge
2. iOS Safari + Android Chrome
3. Verify all internal links and external map link
4. `npm run build` + `npm run preview` smoke test
5. Content diff: every paragraph from old site present on new site

**Deliverable:** QA sign-off checklist

---

### Phase 9 — Deployment (½ day)

1. Connect project to GitHub repository (see **GitHub Setup** below)
2. Configure **GitHub Pages** for staging URL (e.g. `https://<username>.github.io/advanced-instrument-technologies/`)
3. Add GitHub Actions workflow: build on push → deploy `dist/` to Pages
4. SPA redirect rules (`404.html` fallback for client-side routing)
5. **Production cutover deferred** — `aitechinc.com` DNS update only when final version is approved
6. Post-launch: submit sitemap to Google Search Console

**Deliverable:** Live staging site on GitHub Pages

---

## Timeline Estimate

| Phase | Duration |
|---|---|
| 0 — Content lock | 0.5 day |
| 1 — Foundation | 1 day |
| 2 — Design system | 1–1.5 days |
| 3 — Home | 1 day |
| 4 — Services | 1 day |
| 5 — Contact | 0.5–1 day |
| 6 — A11y/responsive | 1 day |
| 7 — SEO | 0.5 day |
| 8 — QA | 0.5 day |
| 9 — Deploy | 0.5 day |
| **Total** | **~7–8 working days** |

---

## Approved Decisions

| # | Decision | Status |
|---|---|---|
| 1 | **Copyright year** | ✅ Update to **2026** |
| 2 | **Logo** | ✅ Custom logo uploaded (black letters; white variant on dark backgrounds) |
| 3 | **Color palette** | ✅ Warm sunset/fall: `#49888a` / `#234958` / `#26274e` / `#7f456d` / `#aa9047` |
| 4 | **Hosting** | ✅ **GitHub Pages** — `https://github.com/kplakosh/AIT.git` (private) |
| 5 | **Domain cutover** | ✅ **Staging URL first** — production at `aitechinc.com` when final version is ready |
| 6 | **Contact form** | ✅ **Option C (Formspree)** — implement in Phase 5 |

---

## Contact Form Options

The current site has **static contact info only** (phone, email, address, map). A contact form is not a separate page section — it would live within the existing Contact page. Options for a static GitHub Pages site:

### Option A — Static contact info only *(current site behavior)*

- Phone (`tel:`), email (`mailto:`), address, map embed
- **Pros:** Zero cost, zero maintenance, no spam, no backend, matches current site exactly
- **Cons:** Users must use their own email client; no structured inquiry capture

**Best for:** Keeping scope minimal; matching current site exactly.

---

### Option B — Enhanced static with `mailto:` CTA button

- Same as Option A, plus a prominent "Email Us" button that opens the user's mail client with a pre-filled subject line
- **Pros:** Slightly better UX with no backend
- **Cons:** Still depends on the user having email configured; unreliable on some mobile devices

**Best for:** Small improvement with zero infrastructure.

---

### Option C — Third-party form service *(recommended if you want a form)*

Since GitHub Pages has no server, form submissions go through an external service:

| Service | Free tier | How it works |
|---|---|---|
| **[Formspree](https://formspree.io)** | 50 submissions/mo | POST form to their endpoint → emails `info@aitechinc.com` |
| **[Getform](https://getform.io)** | 50 submissions/mo | Same pattern; dashboard for submissions |
| **[Web3Forms](https://web3forms.com)** | 250 submissions/mo | Access key in form; emails directly |
| **Google Forms embed** | Free | Embed iframe; responses in Google Sheets |

- **Pros:** Real form UX, spam filtering (Formspree), no backend code, works on GitHub Pages
- **Cons:** Third-party dependency; free tiers have limits; form access key must be stored carefully (env var, not committed)

**Best for:** Professional contact experience without managing a server.

---

### Option D — EmailJS (client-side email)

- JavaScript sends email directly from the browser via EmailJS API
- **Pros:** Custom form UI, no iframe
- **Cons:** API keys exposed in client bundle (mitigated with domain restrictions); less reliable than server-side

**Best for:** Custom-branded form when Formspree styling isn't enough.

---

### Recommendation

**Approved:** **Option C — Formspree** (implement in Phase 5).

- Static contact info (phone, email, address, map) ships first
- Formspree form added during Phase 5 Contact page work
- Form endpoint access key stored in `.env` locally and as a **GitHub Actions repository secret** for production builds — never committed

> A contact form does **not** add a new site section — it enhances the existing Contact page.

---

## GitHub Setup

### Repository connection ✅

| Setting | Value |
|---|---|
| **Remote URL** | `https://github.com/kplakosh/AIT.git` |
| **Visibility** | Private |
| **License** | Proprietary — see `LICENSE` file |
| **Staging URL** | `https://kplakosh.github.io/AIT/` (after Phase 9) |

**Note:** GitHub Pages on a private repo requires a GitHub plan that includes Pages for private repositories (GitHub Pro or org plan). Confirm this is enabled before Phase 9 deployment.

### License recommendation

| Scenario | Recommended license |
|---|---|
| **Private company website (recommended)** | **No open-source license** — add a `LICENSE` file stating proprietary: *"Copyright 2026 Advanced Instrument Technologies, Inc. All rights reserved."* |
| **Public repo, don't mind code being open** | **MIT License** — permissive, standard for open source |
| **Public repo, want patent protection** | **Apache 2.0** |

For a commercial company website, **proprietary (no OSS license)** with a **private repository** is the typical choice. MIT/Apache only apply if you intentionally want the source code to be freely reusable by others.

### `.gitignore` requirements

A project `.gitignore` will exclude:

```
# Dependencies
node_modules/

# Build output
dist/

# Environment & secrets
.env
.env.*
!.env.example

# Editor / OS
.DS_Store
.vscode/
*.local

# Logs
*.log
npm-debug.log*

# Form service keys (if using Formspree/Web3Forms)
# Never commit access keys — use GitHub Actions secrets instead
```

If Option C (Formspree/Web3Forms) is chosen, form access keys will be stored as **GitHub Actions repository secrets**, never committed to the repo.

---

## Success Criteria

- All 3 pages live with **100% of existing content** preserved
- **Zero new sections** beyond what aitechinc.com has today
- Mobile-responsive, accessible (WCAG AA)
- Visually competitive with reference sites
- Lighthouse scores ≥ 90 across Performance, Accessibility, SEO
- Static deploy from existing Vite project

---

## Suggested Approval Flow

1. ~~Review plan and answer the 6 decisions~~ ✅ All 6 decisions approved
2. ~~Connect GitHub repository~~ ✅ `https://github.com/kplakosh/AIT.git`
3. ~~Implement Phase 0 (content lock)~~ ✅ Content manifest + assets ready for sign-off
4. ~~Phase 1 — Project foundation~~ ✅ Routing, Tailwind, folder structure
5. ~~Phase 2 — Design system~~ ✅ Shared components polished
6. Phases 3–5 build out the site (Formspree form in Phase 5)
7. Review staging build on GitHub Pages URL
8. Phases 6–9 polish; production cutover to `aitechinc.com` when approved
