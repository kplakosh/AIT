# Advanced Instrument Technologies — Website Rebuild Plan

## Executive Summary

Rebuild [aitechinc.com](http://www.aitechinc.com/) as a modern, responsive website using the existing **Vite + React + TypeScript** project. The site preserves original AIT content and expands with **approved new pages and sections** informed by [Benchmark](https://www.bench.com/) structure (adapted — not copied).

**Current state:** Five pages live — Home, About *(partial)*, Services, Careers, Contact — with Formspree on Contact and Careers, centralized SEO, and a reusable Modal component.

**Remaining work:** Complete About narrative (Vision, Mission, Purpose, Values), add Sustainability, Our People, Industries, and Expertise pages, enhance Home and Services, then QA and GitHub Pages deploy.

Detailed page specs and copy requirements live in `additional_features.md` (local, gitignored). This document is the **committed execution roadmap**.

---

## Scope Evolution

| Milestone | Scope |
|-----------|-------|
| Original plan | 3 pages: Home, Services, Contact |
| Phase 8 (approved) | + About Us (`/about`) |
| Phase 9 (approved + shipped) | + Careers (`/careers`) with job listing and Formspree apply modal |
| Phases 10–13 (approved direction) | About completion, Sustainability, Our People, Industries, Expertise, Home polish |
| Deferred | Blog, case studies, Investors/IR, per-vertical microsites, full ATS, Leadership *(unless assets provided)* |

**Principles**
- All public copy in `src/content/site.ts` — leadership approval before publish.
- Industry verticals reflect **real AIT customers** (six consolidated verticals — not Benchmark’s seven markets).
- No hash URLs for in-page navigation.
- Do not copy Benchmark text verbatim.

---

## Site Map — Current vs Target

### Live today

| Route | Nav | Status | Notes |
|-------|-----|--------|-------|
| `/` | Home | **Done** | Hero, intro, CTAs (About, Services, Contact) |
| `/about` | About | **Done** | Vision, Mission, Purpose, Values, How It Started, Who We Are, Location, NI Alliance |
| `/services` | Services | **Done** | Five service sections as icon cards |
| `/careers` | Careers | **Done** | Culture copy, Test Engineer opening, modal apply (Formspree `xrevdqop`) |
| `/contact` | Contact | **Done** | Formspree form, details, map |
| `/people` | Our People | **Done** | Culture, how we work, values, growth, team spotlights |
| `/sustainability` | Sustainability | **Done** | Commitment, four pillars, quality & integrity |
| `/industries` | Industries | **Done** | Six industry vertical cards |
| `/expertise` | Expertise | **Done** | Six technical specialty cards |

### Planned (Phases 13–15)

| Route | Nav (proposed) | Phase | Purpose |
|-------|----------------|-------|---------|
| `/leadership` | Leadership | Optional | Bios + photos — Phase E / deferred |

### Target navigation (after Phases 11–12)

```
Home · About · Our People · Services · Industries · Expertise · Careers · Sustainability · Contact
```

Add nav items **incrementally** as each page ships — do not expose links to unbuilt routes.

---

## Current Site Inventory

### Global Elements

| Element | Content |
|---------|---------|
| **Logo** | Custom AIT logo (`logo.png`, `logo-on-dark.png`) |
| **Navigation** | Home · About · Our People · Services · Industries · Expertise · Careers · Sustainability · Contact |
| **Footer** | Logo, nav links, Copyright 2026 Advanced Instrument Technologies, Inc. |

### Home (`/`)

1. Hero — company intro, tagline, CTAs (About, Services, Contact)

> Location and NI Alliance blocks moved to About (Phase 8).

### About (`/about`) — partial

1. **How It Started** — placeholder *(final copy TBD — Phase 10)*
2. **Who We Are** — four paragraphs (engineering expertise, NI Alliance, customer partnership)
3. **Location & Reach** — Cumming, GA; global customers
4. **NI Alliance Partner** — credentials + badge
5. **CTAs** — Services, Contact

**Planned (Phase 10):** Vision, Mission, Purpose, Values, section reorder, “Your Vision is our Mission” closing CTA band.

### Services (`/services`)

1. Lifecycle intro (Concept, Build, Deploy, Support) with link to Industries
2. LabVIEW and TestStand — 5 bullets
3. Hardware — 3 bullets
4. Total Solutions — turnkey paragraph
5. How can we help? — industries/examples paragraph
6. Let us help you — contact CTA

### Careers (`/careers`) — new

1. **Why work at AIT** — culture paragraph
2. **Open positions** — job listing card(s) from `careersContent.openings`
3. **Apply** — modal form (Formspree): name, email, phone, cover letter, resume; hidden `position`, `job_id`

Manage openings in `site.ts`; set `status: 'closed'` to hide a role.

### Contact (`/contact`)

1. Welcome paragraph
2. Formspree form (name, email, message)
3. Company name, address, phone (**770-672-0543**), email (**info@aitechinc.com**)
4. Google Maps embed (5845 Steeplechase Blvd, Cumming, GA 30040)

---

## Competitor UX Patterns to Adopt

| Pattern | How we apply it |
|---------|-----------------|
| Bold hero with clear value prop | Home hero; stronger hook in Phase 13 |
| Sticky header — always visible on scroll | Phase 13 — verify & harden (see below) |
| Service / capability cards with icons | Services page |
| Trust/credential callout | NI badge on About; trust strip planned (Phase 13) |
| Industry vertical cards | `/industries` — Phase 12 |
| Sustainability / culture trust pages | `/sustainability`, `/people` — Phase 11 |
| Split contact layout | Form first; details + map grid |
| Modal forms | Careers application modal |
| Subtle scroll motion | FadeIn sections; respects reduced motion |
| Mobile-first nav | Hamburger below ~768px |

**Out of scope:** Blog, case study subsite, Investors/IR, client logo carousels, live chat, seven separate market microsites, full careers ATS.

---

## Recommended Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 19 + TypeScript | In project |
| Routing | `react-router-dom` (`createBrowserRouter`) | SPA with SEO route handles |
| Styling | Tailwind CSS v4 | Design tokens, responsive utilities |
| Icons | `lucide-react` | Service cards, job metadata |
| Animation | `framer-motion` (light) | Section reveals, modal, mobile nav |
| SEO | `react-helmet-async` via `PageLayout` / `SiteSeo` | Per-page meta, OG tags |
| Forms | Formspree (`@formspree/react`) | Contact + Careers (GitHub Pages compatible) |
| Maps | Google Maps iframe | No API key |
| Build/deploy | Vite → `dist/` | GitHub Pages |

**Environment variables** (`.env` — never commit):

| Variable | Purpose |
|----------|---------|
| `VITE_FORMSPREE_FORM_ID` | Contact form |
| `VITE_FORMSPREE_CAREERS_FORM_ID` | Careers apply modal (`xrevdqop`) |
| `VITE_SITE_URL` | Canonical URLs, sitemap |

---

## Design Direction

### Visual Identity

| Token | Hex | Role |
|-------|-----|------|
| Teal | `#49888a` | Primary accent, links |
| Deep teal | `#234958` | Header/footer, dark sections |
| Navy plum | `#26274e` | Hero backgrounds, headings |
| Muted rose | `#7f456d` | Secondary accent, errors |
| Warm gold | `#aa9047` | Dividers, accents |

- **Typography:** Inter / system sans
- **Logo:** Black on light; white variant on dark backgrounds
- **Layout:** Max width ~1200px; WCAG 2.1 AA contrast; focus states on all interactives

### Page layout standard

All pages use `Container` from `src/components/ui/Container.tsx` with documented sizes in `src/lib/layout.ts`:

| Container size | Max width | Use for |
|----------------|-----------|---------|
| `default` | 75rem (`max-w-content`) | Grids, cards, job listings, map rows (Services, Careers openings) |
| `narrow` | 48rem (`max-w-3xl`) | Page headers (`PageHeader`) and prose sections (About, Careers culture) |
| `wide` | 64rem (`max-w-5xl`) | Forms and featured single blocks (Contact form) |

**Rules**
- Every section: `Section` → `Container` → content. Never apply `max-w-*` on inner elements without centering the parent column.
- Prose body copy: use `proseBody` from `src/lib/layout.ts`.
- Text + graphic pairs: use `contentPairGrid` inside `Container` (default).
- Header/footer align to `pageGutter` (same width as default `Container`).

### Persistent sticky header

The site header must **remain visible at the top of the viewport while the user scrolls**. It must **not** auto-hide on scroll down or collapse away (no scroll-direction hide/show pattern).

| Requirement | Detail |
|-------------|--------|
| **Behavior** | Header stays pinned during vertical scroll on all pages and breakpoints |
| **No auto-hide** | Do not hide the header when scrolling down or reveal only on scroll up |
| **Scroll feedback** | Optional: stronger shadow or background when scrolled (visual polish only — visibility unchanged) |
| **Stacking** | Header above page content (`z-40`); below modals and mobile nav overlay (`z-50`) |
| **Mobile** | Sticky behavior when mobile menu is closed; opening the menu does not affect header pin position |
| **Accessibility** | Skip-to-content link remains usable; focus order unchanged |

**Current state:** `Header.tsx` uses `fixed inset-x-0 top-0` (not `sticky` — `overflow-x: hidden` on `html`/`body` breaks sticky in many browsers). Main content uses `main-offset-header` padding so nothing hides under the bar. Scroll only toggles shadow — no hide-on-scroll.

**Implementation:** `src/components/layout/Header.tsx`, `PageLayout.tsx`, `--spacing-site-header` in `src/index.css`.

**QA (Phase 14):** Scroll long pages on desktop and mobile; confirm header never leaves the viewport; confirm modals and mobile nav still layer correctly.

---

## Implementation Plan — Step by Step

### Phases 0–7 — Foundation ✅

| Phase | Goal | Status |
|-------|------|--------|
| **0** | Content & asset lock (`site.ts`, images) | ✅ |
| **1** | Project foundation — routing, Tailwind, folder structure | ✅ |
| **2** | Design system — Container, Section, Card, Button, Header, Footer, MobileNav | ✅ |
| **3** | Home page — hero, CTAs | ✅ |
| **4** | Services page — five sections as icon cards | ✅ |
| **5** | Contact page — Formspree + map | ✅ |
| **6** | Accessibility & responsive polish | ✅ |
| **7** | SEO — route handles, `SiteSeo`, sitemap script | ✅ |

**Shared components added post–Phase 7:** `ScrollToTop`, `Modal` (focus trap, Escape, backdrop).

---

### Phase 8 — About Us Page (initial) ✅

**Goal:** Dedicated `/about` using reorganized Home content; slim Home to avoid duplication.

**Shipped:**
- `AboutPage.tsx` with How It Started, Who We Are, Location & Reach, NI Alliance
- `/about` route, nav link, `pageMeta.about`, sitemap entry
- Home refactored — location/NI moved to About; CTAs include About

**Remaining → Phase 10**

---

### Phase 9 — Careers Page ✅

**Goal:** Careers hub with open position(s) and application flow.

**Shipped:**
- `/careers` route, nav link, SEO, sitemap
- `careersContent` in `site.ts` — culture copy, Test Engineer — LabVIEW & TestStand opening
- `JobOpening`, `JobApplicationModal`, `JobApplicationForm` components
- Formspree careers form (`VITE_FORMSPREE_CAREERS_FORM_ID=xrevdqop`)
- Apply opens in **modal** (not inline section)

**Key files:** `CareersPage.tsx`, `src/components/careers/*`, `src/components/ui/Modal.tsx`

---

### Phase 10 — About Foundation ✅

**Goal:** Complete company narrative on `/about` (maps to **Phase A** in `additional_features.md`).

| # | Task | Deliverable |
|---|------|-------------|
| 10.1 | Vision, Mission, Purpose copy in `aboutContent` | Leadership-approved text |
| 10.2 | Values grid (4–5 values) | `ValueCard` component + `aboutContent.values` |
| 10.3 | How It Started — replace placeholder | Founding story |
| 10.4 | Reorder About sections | Vision → Mission → Purpose → Values → How It Started → Who We Are → Location → NI |
| 10.5 | `ClosingCta` — “Your Vision is our Mission” | Reusable band → Contact / Services |
| 10.6 | Update `pageMeta.about` | SEO description |

**Copy framework (draft — needs approval):** see `additional_features.md` Appendix C.

**Deliverable:** Complete About page narrative flow.

---

### Phase 11 — Trust & Culture Pages ✅

**Goal:** Sustainability and Our People pages (maps to **Phase B**).

| # | Task | Route |
|---|------|-------|
| 11.1 | Sustainability page | `/sustainability` |
| 11.2 | Our People & Culture page | `/people` |
| 11.3 | Nav links to new pages | Global header/footer navigation |
| 11.4 | Routes, `pageMeta`, sitemap entries | Infrastructure |

**Sustainability sections:** Commitment statement · Environment · Our People · Community · Governance · Quality/NI alignment.

**Our People sections:** Culture headline · How we work · Values in practice · Employee spotlights *(needs photos/quotes)* · CTA → Careers.

**Deliverable:** Two new pages; nav grows by two items.

---

### Phase 12 — Industries & Expertise ✅

**Goal:** Show who AIT serves and technical specialization (maps to **Phase C**).

| # | Task | Route |
|---|------|-------|
| 12.1 | Industries We Serve — six vertical cards | `/industries` |
| 12.2 | Technical Expertise — 6–8 specialty cards | `/expertise` |
| 12.3 | Services lifecycle framing | `/services` enhance |
| 12.4 | Routes, SEO, sitemap | Infrastructure |

**Six industry verticals** *(customer-derived — no public customer names without approval):*

1. Semiconductor Equipment & Electronics Manufacturing  
2. Automotive & Transportation Systems  
3. Aerospace & Defense  
4. Industrial Manufacturing & Equipment  
5. Materials, Chemicals & Process Industries  
6. Infrastructure, Energy & Critical Systems  

**Expertise cards (suggested):** LabVIEW & TestStand · Production Test & QA · Hardware Integration · Requirements & V&V · NI Alliance · R&D to Production migration.

**Deliverable:** Two new pages; Services enhanced; nav grows by two items.

---

### Phase 13 — Homepage & Site-Wide Polish *(next)*

**Goal:** Tie new content into Home and final UX polish (maps to **Phase D**).

| # | Task |
|---|------|
| 13.0 | **Persistent fixed header** — ✅ `fixed` positioning + main offset (`--spacing-site-header`) |
| 13.1 | Home hero — Vision or Purpose one-liner |
| 13.2 | Industries teaser grid → `/industries` |
| 13.3 | Services/capabilities teaser (3 cards) |
| 13.4 | Sustainability teaser → `/sustainability` |
| 13.5 | Trust strip — NI badge, location, link to About |
| 13.6 | Services intro tied to Mission *(after Phase 10)* |
| 13.7 | Optional Contact form subheading |

**Deliverable:** Home reflects full site IA; conversion paths to new pages.

---

### Phase 14 — QA & Cross-Browser Testing

1. Chrome, Safari, Firefox, Edge — desktop + mobile
2. All routes, forms (Contact + Careers modal), map link
3. **Sticky header** — remains visible on scroll; no auto-hide on any page
4. Expanded nav on mobile (9 items after Phases 11–12)
5. `npm run build` + `npm run preview`
6. Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 90
7. Content review against approved copy

**Deliverable:** QA sign-off checklist.

---

### Phase 15 — Deployment

1. GitHub Actions: build on push → deploy `dist/` to GitHub Pages
2. Repository secrets: `VITE_FORMSPREE_FORM_ID`, `VITE_FORMSPREE_CAREERS_FORM_ID`, `VITE_SITE_URL`
3. SPA `404.html` fallback for client-side routing
4. Staging: `https://kplakosh.github.io/AIT/`
5. Production cutover to `aitechinc.com` when approved
6. Submit sitemap to Google Search Console

**Deliverable:** Live staging site; production cutover when ready.

---

### Phase E — Optional / Future *(needs assets)*

| Item | Notes |
|------|-------|
| Leadership (`/leadership`) | Names, titles, photos |
| Company timeline | Milestone dates from leadership |
| Customer logos / testimonials | Legal approval |
| Facility / team photography | About & People |
| Per-industry / per-expertise landing pages | High maintenance |
| Case studies | Customer approval |
| Blog / CMS | Deferred |

---

## Timeline Estimate

| Phase | Duration | Status |
|-------|----------|--------|
| 0–7 Foundation | ~6 days | ✅ |
| 8 About (initial) | 1 day | ✅ |
| 9 Careers | 1 day | ✅ |
| 10 About foundation | 1–1.5 days | ✅ |
| 11 Sustainability + People | 2–3 days | ✅ |
| 12 Industries + Expertise | 2–3 days | ✅ |
| 13 Home polish | 1 day | ⏳ **Next** |
| 14 QA | 0.5 day | ⏳ |
| 15 Deploy | 0.5 day | ⏳ |
| **Remaining** | **~7–9 working days** | |

*Durations assume copy is approved before each phase starts.*

---

## Shared Components Tracker

| Component | Status | Phase |
|-----------|--------|-------|
| `PageLayout`, `SiteSeo`, `ScrollToTop` | Done | 7 |
| `Header` — persistent fixed (no scroll hide) | Done | 13 |
| `Modal` | Done | 9 |
| `ContactForm` (Formspree) | Done | 5 |
| `JobApplicationForm` (Formspree) | Done | 9 |
| `ValueCard` | Done | 10 |
| `ClosingCta` | Done | 10 |
| `IndustryCard` | Done | 12 |
| `ExpertiseCard` | Done | 12 |
| `TrustStrip` | Not started | 13 |
| Employee spotlight card | Done | 11 |

---

## Approved Decisions

| # | Decision | Status |
|---|----------|--------|
| 1 | Copyright year **2026** | ✅ |
| 2 | Custom logo (light/dark variants) | ✅ |
| 3 | Warm sunset/fall palette | ✅ |
| 4 | GitHub Pages hosting — `https://github.com/kplakosh/AIT.git` | ✅ |
| 5 | Staging first; `aitechinc.com` when ready | ✅ |
| 6 | Contact form — **Formspree** | ✅ |
| 7 | About Us page at `/about` | ✅ |
| 8 | Careers page at `/careers` with Formspree apply modal | ✅ |
| 9 | Benchmark-inspired IA — adapt, don’t copy | ✅ |
| 10 | Six industry verticals from customer list | ✅ Approved direction |
| 11 | Sustainability replaces Investors | ✅ Approved direction |
| 12 | New copy requires leadership approval | ✅ |
| 13 | Persistent sticky header (always visible, no scroll hide) | ✅ Approved direction |

---

## Contact & Careers Forms

Both use **Formspree** (Option C — approved for static GitHub Pages hosting).

| Form | Env var | Endpoint |
|------|---------|----------|
| Contact | `VITE_FORMSPREE_FORM_ID` | Configured in `.env.example` |
| Careers apply | `VITE_FORMSPREE_CAREERS_FORM_ID` | `xrevdqop` |

Store keys in `.env` locally and as **GitHub Actions secrets** for production builds — never commit `.env`.

---

## GitHub Setup

| Setting | Value |
|---------|-------|
| **Remote** | `https://github.com/kplakosh/AIT.git` |
| **Visibility** | Private |
| **License** | Proprietary — Copyright 2026 AIT, Inc. |
| **Staging URL** | `https://kplakosh.github.io/AIT/` (after Phase 15) |

**`.gitignore` includes:** `node_modules/`, `dist/`, `.env`, `additional_features.md`, `chat-summary.md`, cache/logs.

---

## Success Criteria

### Shipped (Phases 0–9)

- Five pages live with responsive layout and WCAG AA targets
- Formspree on Contact and Careers
- Centralized SEO and sitemap generation
- Original site copy preserved; About and Careers add approved content

### Remaining (Phases 10–15)

- About narrative complete (Vision, Mission, Purpose, Values)
- Sustainability, Our People, Industries, Expertise pages live
- Home reflects expanded IA with teasers to new pages
- All new copy leadership-approved before publish
- Header remains visible at top of viewport on scroll (no auto-hide)
- Lighthouse ≥ 90 (Performance, Accessibility, SEO)
- Staging deploy on GitHub Pages; production cutover when approved

---

## Suggested Approval Flow

1. ~~Phases 0–7 — Foundation~~ ✅  
2. ~~Phase 8 — About (initial)~~ ✅  
3. ~~Phase 9 — Careers~~ ✅  
4. ~~Phase 10 — Approve About copy~~ ✅ *(draft copy shipped — leadership review recommended)*  
5. ~~Phase 11 — Approve Sustainability + People copy~~ ✅ *(draft copy shipped — leadership review recommended)*  
6. ~~Phase 12 — Approve Industries + Expertise card copy~~ ✅ *(draft copy shipped — leadership review recommended)*  
7. **Phase 13 — Home polish**  
8. Phase 14 — QA  
9. Phase 15 — Deploy staging  
10. Production cutover to `aitechinc.com`

**Related doc:** `additional_features.md` — detailed page specs, customer vertical analysis, copy framework (local only).
