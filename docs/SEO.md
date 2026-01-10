# SEO Strategy

Clipwise AI follows Google/Bing structured data and on-page SEO best practices.

## Implementation at a glance

- Meta tags (`src/components/seo.astro`):

  | Tag                        | Purpose                                  |
  | -------------------------- | ---------------------------------------- |
  | `<title>`                  | `%s \| Clipwise AI` template             |
  | `meta[name="description"]` | Search snippet summary                   |
  | `meta[name="author"]`      | Content author                           |
  | `meta[name="robots"]`      | `index, follow, max-image-preview:large` |
  | `link[rel="canonical"]`    | Canonical URL                            |

- Social sharing: Open Graph + Twitter Card tags are preconfigured.
- Structured data (`src/components/structured-data.astro`):

  | Schema           | Purpose                     | Scope     |
  | ---------------- | --------------------------- | --------- |
  | `Organization`   | Brand identity              | All pages |
  | `BreadcrumbList` | Navigation structure        | All pages |
  | `WebApplication` | Extension details & pricing | Home      |
  | `WebSite`        | Site info with publisher    | Home      |
  | `HowTo`          | Usage steps                 | Home      |

  Entity `@id` map (reuse before adding new):

  - `#organization` → Organization; used by Offer.seller, WebApplication.publisher, WebSite.publisher
  - `#author` → Person; used by Organization.founder, WebApplication.author
  - `#logo` → ImageObject; used by Organization.logo, WebApplication.image
  - `#screenshot` → ImageObject; used by WebApplication.screenshot
  - `#software` → WebApplication
  - `#website` → WebSite

- Sitemap & robots: `@astrojs/sitemap` generates `/sitemap-index.xml`; `/robots.txt` links to it.
- Section anchors: Home uses `#how-it-works`, `#features`, `#use-cases`, `#privacy`, `#pricing`.

## Adding a new page

1. Set `seo.title` and `seo.description` via `RootLayout`.
2. Provide `structuredData.breadcrumbs` with canonical paths.
3. Add semantic section IDs if the page has multiple sections.
4. Reuse existing `@id` entities when adding schemas; create new ones only as needed.

## Validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
