# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**IMPORTANT**: This file MUST be kept in sync with any codebase changes. Update it whenever architecture, commands, or key patterns change.

## Project Overview

This is the marketing website for **Clipwise AI**, a Chrome extension that converts webpages to Markdown for AI assistants. Built with **Astro 5** and **Tailwind CSS v4**, deployed on Vercel.

## Commands

```bash
# Development
pnpm dev              # Start dev server at localhost:4321

# Build & Preview
pnpm build            # Build production site to ./dist/
pnpm preview          # Preview production build locally

# Type Checking
pnpm astro check      # Run TypeScript type checker

# Astro CLI
pnpm astro ...        # Run Astro CLI commands
```

## Architecture

### Tech Stack

- **Framework**: Astro 5 (static site generation)
- **Styling**: Tailwind CSS v4 via Vite plugin (`@tailwindcss/vite`)
- **Icons**: `astro-icon` with Iconify collections (`lucide`, `simple-icons`)
- **Image Processing**: Sharp
- **Integrations**: Sitemap generation via `@astrojs/sitemap`

### Project Structure

```text
docs/
└── *.md                 # Documentation (SEO strategy, etc.)

src/
├── assets/              # Static assets (icon.svg, og-image.png)
├── components/
│   ├── home/            # Home page sections (hero, features, pricing, etc.)
│   ├── seo.astro        # SEO meta tags (OG, Twitter Cards)
│   ├── structured-data.astro  # JSON-LD structured data schemas
│   └── *.astro          # Reusable components (header, footer, cards)
├── content/             # Content collections (JSON data files)
│   ├── features.json
│   ├── steps.json
│   ├── use-cases.json
│   ├── pricing-tiers.json
│   ├── trust-badges.json
│   └── privacy-highlights.json
├── content.config.ts    # Content collection schemas (Zod)
├── layouts/
│   └── root-layout.astro  # Base HTML layout with SEO
├── lib/
│   └── site-config.ts   # Site metadata and external URLs
├── pages/
│   ├── index.astro      # Home page (queries content collections)
│   ├── privacy.astro    # Privacy policy page
│   └── robots.txt.ts    # Dynamic robots.txt
├── styles/
│   └── global.css       # Global styles with CSS variable design tokens
├── types/
│   └── index.ts         # Shared TypeScript types (inferred from content schemas)
└── utils/
    ├── format-price.ts  # Price formatting with site locale/currency
    └── interpolate.ts   # Template string interpolation utility
```

### Key Architectural Patterns

**1. Content Collections**

- All structured content lives in `src/content/*.json` files
- Schemas defined in `src/content.config.ts` using Zod
- Types in `src/types/index.ts` are inferred from collection schemas via `CollectionEntry<"...">["data"]`
- Query with `getCollection("collectionName")` from `astro:content`
- Use `{placeholder}` syntax for dynamic values; interpolate at render time with `interpolate()` from `@/utils/interpolate`

**2. Centralized Configuration**

- Site metadata, external URLs, and dynamic values (e.g., `freeDailyLimit`) live in `src/lib/site-config.ts`
- Content data (features, pricing, etc.) lives in content collections, NOT in site-config
- **Avoid duplication**: dynamic values in content JSON should use placeholders like `{freeDailyLimit}`, not hardcoded numbers
- Export as `const` object for type safety

**3. Component Composition**

- Pages compose larger sections from `components/home/*`
- Sections receive props for content (features, steps, pricing tiers)
- Keeps page files declarative and data-focused

**4. Path Aliases**

- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Use `@/components/...`, `@/lib/...`, etc. everywhere

**5. Design System**

- CSS custom properties define color tokens in `src/styles/global.css`
- Supports light/dark mode via `prefers-color-scheme`
- OKLCH color space for perceptual uniformity
- Tailwind v4's `@theme inline` directive maps CSS vars to Tailwind utilities

**6. Asset Handling**

- Import assets with `?url` suffix: `import faviconUrl from "@/assets/icon.svg?url"`
- Sharp processes images automatically during build

**7. SEO & Structured Data**

See [`docs/SEO.md`](docs/SEO.md) for the complete SEO strategy.

Key components:

- `seo.astro` — Meta tags, Open Graph, Twitter Cards
- `structured-data.astro` — JSON-LD schemas (Organization, BreadcrumbList, SoftwareApplication, WebSite)

**8. Site URL Configuration**

- `astro.config.mjs` dynamically sets site URL:
  - Production: Uses `VERCEL_PROJECT_PRODUCTION_URL` env var
  - Fallback: `https://www.getclipwise.app`
- Required for sitemap generation and canonical URLs

## Code Style Guidelines

### Comments

- **Do NOT add self-evident comments** that merely describe what the code does
- Comments should explain **why**, not **what**
- Good: `// Headline is not a collection because it's page-specific`
- Bad: `// Get features from collection`, `// Map over items`, `// Build the list`
- HTML section markers (e.g., `<!-- Primary Meta Tags -->`) are acceptable for navigation

### Type Safety

- Extends `astro/tsconfigs/strict` for strictest TypeScript checks
- Types are inferred from content collection schemas in `src/types/index.ts`
- Component props use `type Props = SomeType` for direct type aliases
- Component props use `interface Props extends SomeType` when adding extra props
- Use explicit type annotations for arrays with union types

### Styling

- Tailwind v4 uses new `@import "tailwindcss"` syntax in global.css
- No `tailwind.config.js` file needed
- Design tokens use CSS variables for theming
- `tw-animate-css` provides animation utilities

### Icons

- Use `<Icon name="lucide:icon-name" />` or `<Icon name="simple-icons:brand" />`
- Icon names follow Iconify naming conventions

### Deployment

- Vercel automatically detects Astro and builds with `astro build`
- No special Vercel configuration needed (no `vercel.json`)
- Site URL derived from `VERCEL_PROJECT_PRODUCTION_URL` environment variable

## Content Updates

When updating site content:

1. **Features/Pricing/Steps**: Edit JSON files in `src/content/`
2. **External URLs**: Update `src/lib/site-config.ts`
3. **SEO**: Modify defaults in `site-config.ts` or pass props to `RootLayout`
4. **Styling**: Edit CSS variables in `src/styles/global.css` for theme changes
