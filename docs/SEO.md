# SEO Strategy

This document outlines the SEO implementation for the Clipwise AI website, following best practices from [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## Overview

The website implements a comprehensive SEO strategy focused on:

1. **Technical SEO** — Proper meta tags, structured data, and crawlability
2. **Content SEO** — Semantic HTML, clear headings, and descriptive content
3. **Performance** — Fast loading, mobile-friendly, and accessible

## Implementation

### Meta Tags (`src/components/seo.astro`)

| Meta Tag                   | Purpose                                                        |
| -------------------------- | -------------------------------------------------------------- |
| `<title>`                  | Page title with template `%s \| Clipwise AI`                   |
| `meta[name="description"]` | Page description for search snippets                           |
| `meta[name="author"]`      | Content author                                                 |
| `meta[name="robots"]`      | Indexing directives (`index, follow, max-image-preview:large`) |
| `link[rel="canonical"]`    | Canonical URL to prevent duplicate content                     |

### Open Graph & Twitter Cards

Social sharing meta tags are included for rich previews when shared on:

- Facebook / LinkedIn (`og:*` properties)
- Twitter / X (`twitter:*` properties)

### Structured Data (`src/components/structured-data.astro`)

JSON-LD schemas help search engines understand the content:

| Schema                | Purpose                            | Included On |
| --------------------- | ---------------------------------- | ----------- |
| `Organization`        | Brand identity for Knowledge Panel | All pages   |
| `BreadcrumbList`      | Site navigation structure          | All pages   |
| `SoftwareApplication` | Chrome extension product details   | Home page   |
| `WebSite`             | General site information           | Home page   |

#### Usage

```astro
<RootLayout
  seo={{ title: "Page Title" }}
  structuredData={{
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy/" },
    ],
  }}
/>
```

### Sitemap & Robots

- **Sitemap**: Auto-generated via `@astrojs/sitemap` at `/sitemap-index.xml`
- **robots.txt**: Dynamic generation at `/robots.txt` with sitemap reference

### 404 Page

A custom 404 page is provided at `src/pages/404.astro` to guide users back to the home page when they access a missing route. It includes `noindex` meta tag to prevent indexing.

### Deep Linking (Section IDs)

Sections have semantic IDs for direct linking and potential sitelinks:

**Home Page:**

- `#how-it-works`
- `#features`
- `#use-cases`
- `#privacy`
- `#pricing`

**Privacy Page:**

- `#overview`, `#data-controller`, `#data-collection`, `#legal-basis`
- `#how-it-works`, `#permissions`, `#ai-integration`, `#license-validation`
- `#data-sharing`, `#third-party-services`, `#data-security`, `#data-retention`
- `#your-rights`, `#international-transfers`, `#childrens-privacy`
- `#changes`, `#contact`

### Performance Optimizations

- **Preconnect**: `<link rel="preconnect">` for Chrome Web Store
- **DNS Prefetch**: Fallback for browsers without preconnect support
- **Theme Color**: Mobile browser chrome theming

## Validation Tools

Use these tools to validate the SEO implementation:

- [Google Rich Results Test](https://search.google.com/test/rich-results) — Validate structured data
- [Schema Markup Validator](https://validator.schema.org/) — Check JSON-LD syntax
- [Google Search Console](https://search.google.com/search-console) — Monitor indexing and performance
- [PageSpeed Insights](https://pagespeed.web.dev/) — Performance and Core Web Vitals

## Best Practices Followed

Based on [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide):

- ✅ Unique, descriptive titles for each page
- ✅ Meta descriptions that summarize page content
- ✅ Semantic HTML with proper heading hierarchy (`h1` → `h2` → `h3`)
- ✅ Canonical URLs to prevent duplicate content
- ✅ Mobile-friendly responsive design
- ✅ Fast loading with optimized assets
- ✅ Accessible with skip links and ARIA labels
- ✅ Structured data for rich search results
- ✅ XML sitemap for crawlability
- ✅ robots.txt with sitemap reference

## Adding New Pages

When adding a new page:

1. **Set unique title and description** via `RootLayout`'s `seo` prop
2. **Define `structuredData.breadcrumbs`** for the page hierarchy
3. **Add section IDs** if the page has multiple sections
4. **Consider structured data** — set `structuredData.includeProductSchemas` if relevant

Example:

```astro
<RootLayout
  seo={{
    title: "New Page Title",
    description: "Description for search results",
  }}
  structuredData={{
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "New Page", path: "/new-page/" },
    ],
  }}
>
  <main id="main-content">
    <section id="section-name">
      <h1>Page Heading</h1>
      <!-- Content -->
    </section>
  </main>
</RootLayout>
```
