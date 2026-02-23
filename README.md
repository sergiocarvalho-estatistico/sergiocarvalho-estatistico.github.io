# Sérgio Carvalho - Portfolio

Modern portfolio site built with Astro 4, TypeScript, and Tailwind CSS.

## Tech Stack

- **Astro 4** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Content Collections** - Content management

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Editing Content

Content lives in `src/content/` organized by type and language:

```
src/content/
├── projects/
│   ├── pt/    # Portuguese
│   ├── en/    # English
│   └── es/    # Spanish
├── articles/
├── recommendations/
└── materials/
```

## i18n Structure

- **PT (Portuguese)** - Default language at `/`
- **EN (English)** - At `/en/`
- **ES (Spanish)** - At `/es/`

## Publishing

Push to `master` branch triggers automatic deployment to GitHub Pages via GitHub Actions.
