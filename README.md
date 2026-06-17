# Advanced Instrument Technologies

Marketing website for [Advanced Instrument Technologies (AIT)](https://www.aitechinc.com/) — a static multi-page site built with **Astro**, **React islands**, **TypeScript**, and **Tailwind CSS v4**.

## Prerequisites

Before you begin, install:

- **[Node.js](https://nodejs.org/) 18+** (20 or newer recommended)
- **npm** (included with Node.js)

Verify your setup:

```bash
node --version
npm --version
```

## Getting started

Follow these steps the first time you work on the project.

### 1. Clone the repository

```bash
git clone https://github.com/kplakosh/AIT.git
cd AIT
```

If you already have the repo locally, open the project folder instead:

```bash
cd path/to/advanced-instrument-technologies
```

### 2. Install dependencies

```bash
npm install
```

This installs Astro, React, Tailwind, and all other packages listed in `package.json`.

### 3. Configure environment variables (optional)

Some features work without a `.env` file, but you should create one for local development — especially if you are testing forms or SEO URLs.

```bash
cp .env.example .env
```

Then edit `.env` as needed:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_FORMSPREE_FORM_ID` | Contact form submissions ([Formspree](https://formspree.io)) |
| `PUBLIC_FORMSPREE_CAREERS_FORM_ID` | Careers job application form |
| `PUBLIC_SITE_URL` | Canonical URL for SEO, Open Graph, and sitemap generation |

> **Note:** Never commit `.env`. It is already listed in `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

When the server is ready, open:

**http://localhost:4321/**

The dev server watches for file changes and hot-reloads automatically.

### 5. Build for production (optional)

To verify the site builds correctly:

```bash
npm run build
```

Static output is written to `dist/`. The build also runs type-checking and regenerates `sitemap.xml` and `robots.txt`.

### 6. Preview the production build (optional)

```bash
npm run preview
```

This serves the contents of `dist/` locally so you can test the production output before deploying.

## Available commands

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the Astro dev server at `http://localhost:4321/` |
| `npm run build` | Type-check, build the static site, and generate SEO files |
| `npm run preview` | Serve the production build from `dist/` |
| `npm run lint` | Run ESLint |

## Site routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/people` | Our People |
| `/sustainability` | Sustainability |
| `/services` | Services |
| `/industries` | Industries |
| `/expertise` | Expertise |
| `/careers` | Careers |
| `/contact` | Contact |

## Project structure

```
advanced-instrument-technologies/
├── public/              # Static assets (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── pages/           # One .astro file per route
│   ├── sections/        # Page-specific content blocks
│   ├── layouts/         # BaseLayout (SEO, header, footer)
│   ├── shared/          # Astro components, content, styles, utilities
│   └── islands/         # Interactive React components (forms, header)
├── scripts/             # Build-time scripts (SEO file generation)
├── astro.config.mjs
└── package.json
```

## Further reading

- [BUILD_AND_RUN.md](./BUILD_AND_RUN.md) — additional build and troubleshooting notes
- [FRONTEND_ARCHITECTURE.md](./FRONTEND_ARCHITECTURE.md) — island architecture and folder conventions

## Troubleshooting

**Port 4321 already in use**

Stop the other process using that port, or start Astro on a different port:

```bash
npm run dev -- --port 4322
```

**Dependencies missing or out of date**

```bash
rm -rf node_modules
npm install
```

**Build fails on type errors**

Fix the reported TypeScript errors in `src/`, then run `npm run build` again.

**Contact or Careers forms do not submit**

Confirm `.env` exists and `PUBLIC_FORMSPREE_FORM_ID` / `PUBLIC_FORMSPREE_CAREERS_FORM_ID` are set to valid Formspree form IDs.

**Favicon or assets look stale in the browser**

Browsers cache favicons aggressively. Hard-refresh with **Cmd+Shift+R** (macOS) or **Ctrl+Shift+R** (Windows/Linux).
