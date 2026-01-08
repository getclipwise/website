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
src/
├── assets/              # Static assets (icon.svg, og-image.png)
├── components/
│   ├── home/           # Home page sections (hero, features, pricing, etc.)
│   └── *.astro         # Reusable components (header, footer, SEO, cards)
├── layouts/
│   └── root-layout.astro  # Base HTML layout
├── lib/
│   └── site-config.ts    # Centralized site configuration
├── pages/
│   ├── index.astro      # Home page (composed of home/* sections)
│   ├── privacy.astro    # Privacy policy page
│   └── robots.txt.ts    # Dynamic robots.txt
└── styles/
    └── global.css       # Global styles with CSS variable design tokens
```

### Key Architectural Patterns

**1. Centralized Configuration**

- All site metadata, URLs, pricing, and author info lives in `src/lib/site-config.ts`
- Export as `const` object for type safety
- Used by SEO component, layouts, and pages

**2. Component Composition**

- Pages compose larger sections from `components/home/*`
- Sections receive props for content (features, steps, pricing tiers)
- Keeps page files declarative and data-focused (see `src/pages/index.astro`)

**3. Path Aliases**

- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Use `@/components/...`, `@/lib/...`, etc. everywhere

**4. Design System**

- CSS custom properties define color tokens in `src/styles/global.css`
- Supports light/dark mode via `prefers-color-scheme`
- OKLCH color space for perceptual uniformity
- Tailwind v4's `@theme inline` directive maps CSS vars to Tailwind utilities

**5. Asset Handling**

- Import assets with `?url` suffix: `import faviconUrl from "@/assets/icon.svg?url"`
- Sharp processes images automatically during build

**6. SEO & Meta**

- `SEO.astro` component generates all meta tags (Open Graph, Twitter Cards)
- Accepts `title`, `titleTemplate`, `description` props
- Automatically constructs canonical URLs and OG image paths
- Root layout (`root-layout.astro`) includes SEO component in `<head>`

**7. Site URL Configuration**

- `astro.config.mjs` dynamically sets site URL:
  - Production: Uses `VERCEL_PROJECT_PRODUCTION_URL` env var
  - Fallback: `https://getclipwise.app`
- Required for sitemap generation and canonical URLs

## Important Details

### Styling

- Tailwind v4 uses new `@import "tailwindcss"` syntax in global.css
- No `tailwind.config.js` file needed
- Design tokens use CSS variables for theming
- `tw-animate-css` provides animation utilities

### Icons

- Use `<Icon name="lucide:icon-name" />` or `<Icon name="simple-icons:brand" />`
- Icon names follow Iconify naming conventions

### Type Safety

- Extends `astro/tsconfigs/strict` for strictest TypeScript checks
- Astro component props typed with TypeScript interfaces/types
- Use `as const` for configuration objects to preserve literal types

### Deployment

- Vercel automatically detects Astro and builds with `astro build`
- No special Vercel configuration needed (no `vercel.json`)
- Site URL derived from `VERCEL_PROJECT_PRODUCTION_URL` environment variable

## Content Updates

When updating site content:

1. **Text/Copy**: Edit data structures in `src/pages/index.astro` (features, steps, useCases, etc.)
2. **Links/Pricing**: Update `src/lib/site-config.ts`
3. **SEO**: Modify defaults in `site-config.ts` or pass props to `RootLayout`
4. **Styling**: Edit CSS variables in `src/styles/global.css` for theme changes
