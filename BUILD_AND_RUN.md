# Build and Run Instructions

Project: **Advanced Instrument Technologies**  
Stack: Astro (MPA) + React islands + TypeScript

See [FRONTEND_ARCHITECTURE.md](./FRONTEND_ARCHITECTURE.md) for the Island architecture and folder conventions.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (20+ recommended)
- npm (included with Node.js)

Check your versions:

```bash
node --version
npm --version
```

## First-Time Setup

Clone or open the project, then install dependencies:

```bash
cd ~/Projects/advanced-instrument-technologies
npm install
cp .env.example .env   # optional — configure Formspree and site URL
```

## Development

Start the local development server with hot reload:

```bash
npm run dev
```

Open the app in your browser:

- **Local:** http://localhost:4321/

The dev server watches for file changes and updates the page automatically.

## Production Build

Create an optimized static build:

```bash
npm run build
```

Output is written to the `dist/` directory. Each route is a separate HTML file. Interactive islands ship as small, page-specific JS chunks.

## Preview Production Build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Common Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start Astro dev server               |
| `npm run build`   | Type-check, build static site, SEO   |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
advanced-instrument-technologies/
├── public/              # Static assets served as-is
├── src/
│   ├── pages/           # MPA routes (one .astro per URL)
│   ├── sections/        # Page-specific static blocks
│   ├── layouts/         # BaseLayout shell
│   ├── shared/          # Reusable Astro components, content, styles
│   └── islands/         # Interactive React components
├── dist/                # Production build output (generated)
├── astro.config.mjs
└── package.json
```

## Troubleshooting

**Dependencies out of date or missing**

```bash
rm -rf node_modules
npm install
```

**Build fails on type errors**

Fix the reported errors in `src/`, then run `npm run build` again.
