# Frontend Architecture

This project uses an **Island architecture** on top of **Astro** to deliver a fast, SEO-friendly multi-page application (MPA). Pages are pre-rendered as static HTML at build time. Interactive behavior is limited to small, isolated JavaScript bundles ("islands") that hydrate only where needed.

## Principles

1. **Static by default** — Page markup, copy, cards, and layout render as HTML with zero client JavaScript.
2. **Islands for interactivity** — Forms, navigation state, and modals ship as focused React components with explicit hydration directives.
3. **Reusable components** — Shared UI primitives (buttons, cards, sections) live in one place and are composed into pages.
4. **MPA routing** — Each route is its own HTML file (`/about/index.html`), not a client-side router.

## Directory Structure

```
src/
├── pages/                  # MPA routes (one .astro file per URL)
│   ├── index.astro         # /
│   ├── about.astro
│   ├── services.astro
│   ├── careers.astro
│   └── contact.astro
│
├── sections/               # Page-specific content blocks (static)
│   └── home/
│       └── HeroSection.astro
│
├── layouts/                # Shared page shells
│   └── BaseLayout.astro    # SEO, header island, footer, skip link
│
├── shared/                 # Shared assets used across pages
│   ├── components/         # Static Astro UI components
│   │   ├── ui/             # ButtonLink, Card, Container, Section, …
│   │   ├── layout/         # Footer
│   │   ├── contact/        # ContactDetails
│   │   ├── services/       # ServiceCard, ServiceBulletList
│   │   └── home/           # LocationGraphic
│   ├── content/
│   │   └── site.ts         # Copy, routes, nav, jobs, SEO metadata
│   ├── lib/                # Utilities (cn, a11y, layout, seo)
│   └── styles/
│       └── global.css      # Tailwind + design tokens
│
└── islands/                # Interactive React components (hydrated)
    ├── SiteHeader.tsx      # Desktop nav + mobile drawer (client:load)
    ├── ContactForm.tsx     # Formspree contact form (client:visible)
    ├── CareersApply.tsx    # Job listings + apply modal (client:visible)
    ├── hooks/              # Island-only hooks (useFocusTrap)
    └── ui/                 # React UI used inside islands (Button, Modal, Card)
```

### Shared vs page-specific

| Location | Purpose | Examples |
|----------|---------|----------|
| `shared/components/` | Reusable UI used on multiple pages | `ButtonLink`, `Card`, `ServiceCard` |
| `shared/content/` | Centralized copy and configuration | `site.ts`, `navLinks`, `pageMeta` |
| `sections/{page}/` | Blocks unique to one page | `sections/home/HeroSection.astro` |
| `pages/*.astro` | Route entry — composes layout + sections + islands | `contact.astro` |
| `islands/` | Client-side interactivity only | Forms, header, modals |

When adding a new page:

1. Add route and SEO entry in `shared/content/site.ts`
2. Create `src/pages/{route}.astro` using `BaseLayout`
3. Extract static sections into `src/sections/{page}/` if the page grows
4. Add an island only if the section needs client state (forms, toggles, modals)

## Typography

Body paragraphs use the **`.body-text`** utility (`global.css`) or the **`Prose.astro`** component. They span the full `Container` width — do not add `max-w-*` on section copy.

| Token / component | Use for |
|-------------------|---------|
| `.body-text` / `Prose.astro` | Section paragraphs, card body copy, subtitles |
| `.body-text-inverse` | Paragraphs on dark / gradient backgrounds |
| `PageHeader` | Page title + description (uses inverse body text) |
| `SectionHeading` | Section titles + subtitles (subtitle uses `.body-text`) |
| `Container size="narrow"` | Only deliberate narrow columns (e.g. centered forms) |


| Island | Page(s) | Hydration | Why it needs JS |
|--------|---------|-----------|-----------------|
| `SiteHeader` | All | `client:load` | Mobile menu, scroll shadow, focus trap |
| `ContactForm` | Contact | `client:visible` | Formspree submission, validation |
| `CareersApply` | Careers | `client:visible` | Apply modal, file upload form |

Everything else — hero sections, service cards, about copy, footer, maps — is static HTML.

### Hydration directives

- **`client:load`** — Hydrate immediately on page load. Use for above-the-fold UI that users interact with right away (header).
- **`client:visible`** — Hydrate when the island scrolls into view. Use for below-the-fold forms to reduce initial JS.

## Component Guidelines

### Static components (`.astro`)

Use for presentational UI with no client state:

- Buttons that are links → `ButtonLink.astro`
- Cards, sections, headings → `Card.astro`, `Section.astro`, `SectionHeading.astro`
- Page-specific layout blocks → `sections/{page}/`

### Island components (`.tsx`)

Use only when you need:

- React state (`useState`, `useEffect`)
- Form libraries (`@formspree/react`)
- Focus traps, modals, animations with user interaction (`framer-motion` modals)

Keep islands small. Prefer one island per interactive feature, not one island per page.

## Content & Configuration

All public copy, navigation links, job openings, and SEO metadata live in:

```
src/shared/content/site.ts
```

Environment variables (see `.env.example`):

| Variable | Purpose |
|----------|---------|
| `PUBLIC_FORMSPREE_FORM_ID` | Contact form |
| `PUBLIC_FORMSPREE_CAREERS_FORM_ID` | Careers apply form |
| `PUBLIC_SITE_URL` | Canonical URLs, OG tags, sitemap |

Legacy `VITE_*` names are still read for backward compatibility.

## Commands

```bash
npm run dev      # Astro dev server
npm run build    # Static build to dist/ + sitemap/robots
npm run preview  # Preview production build
```

## Adding a Shared Component

1. Create `src/shared/components/ui/MyComponent.astro` (or domain folder)
2. Accept props in the frontmatter (`---` block)
3. Use Tailwind utility classes matching existing tokens in `global.css`
4. Import and use from pages or other components

## Adding an Island

1. Create `src/islands/MyFeature.tsx` as a default export
2. Import in the relevant `.astro` page
3. Add a hydration directive: `<MyFeature client:visible />`
4. Pass server-known data as props (e.g. `currentPath` from `Astro.url.pathname`)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 5 (static MPA) |
| Islands | React 19 |
| Styling | Tailwind CSS v4 |
| Forms | Formspree (`@formspree/react`) |
| Animation | CSS fade-in (static); framer-motion (islands only) |
| Deploy | Static `dist/` (GitHub Pages planned) |
