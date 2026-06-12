# Build and Run Instructions

Project: **Advanced Instrument Technologies**  
Stack: Vite + React + TypeScript

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
```

## Development

Start the local development server with hot reload:

```bash
npm run dev
```

Open the app in your browser:

- **Local:** http://localhost:5173/

The dev server watches for file changes and updates the page automatically.

To expose the dev server on your network (for testing on other devices):

```bash
npm run dev -- --host
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Output is written to the `dist/` directory. This command runs TypeScript type-checking (`tsc -b`) and then bundles the app with Vite.

## Preview Production Build

Serve the built app locally to verify the production output:

```bash
npm run preview
```

After running this command, open the URL shown in the terminal (typically http://localhost:4173/).

## Linting

Run ESLint across the project:

```bash
npm run lint
```

## Common Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start development server             |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
advanced-instrument-technologies/
├── public/          # Static assets served as-is
├── src/             # Application source code
│   ├── App.tsx      # Root React component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── dist/            # Production build output (generated)
├── index.html       # HTML entry point
├── vite.config.ts   # Vite configuration
└── package.json     # Scripts and dependencies
```

## Troubleshooting

**Port already in use**

If port 5173 is taken, Vite will try the next available port. Check the terminal output for the correct URL.

**Dependencies out of date or missing**

```bash
rm -rf node_modules
npm install
```

**Build fails on TypeScript errors**

Fix the reported errors in `src/`, then run `npm run build` again.
