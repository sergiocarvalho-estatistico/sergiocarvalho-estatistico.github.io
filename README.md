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

## Replacing the Portrait Photo

The portrait photo displayed in the Hero section and About pages is stored in `public/img/`.

To replace it:

1. Prepare a square image (1:1 aspect ratio, 400×400 px or larger recommended).
2. Optimize for web (JPEG ≤ 150 KB, or WebP for better compression).
3. Replace `public/img/portrait.jpg` with the new image (keep the same filename).
4. Optionally add `public/img/portrait.webp` (WebP version) — all portrait locations already include a `<source>` element that will prefer `.webp` when present.
5. The old image is kept as `public/img/portrait-old.jpg` for reference.

Files that reference the portrait:
- `src/components/Hero.astro` (Hero section on home pages)
- `src/pages/sobre/index.astro` (Portuguese About page)
- `src/pages/en/about/index.astro` (English About page)
- `src/pages/es/acerca/index.astro` (Spanish About page)

## Publishing

Push to `master` branch triggers automatic deployment to GitHub Pages via GitHub Actions.
