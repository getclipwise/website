# SEO Strategy

Clipwise AI follows Google/Bing structured data and on-page SEO best practices.

## Implementation at a glance

- Meta tags (`src/components/seo.astro`):

  | Tag                        | Purpose                                                                        |
  | -------------------------- | ------------------------------------------------------------------------------ |
  | `<title>`                  | `%s \| Clipwise AI` template                                                   |
  | `meta[name="description"]` | Search snippet summary                                                         |
  | `meta[name="author"]`      | Content author                                                                 |
  | `meta[name="robots"]`      | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
  | `link[rel="canonical"]`    | Canonical URL                                                                  |

- Social sharing: Open Graph + Twitter Card tags are preconfigured.
- Structured data (`src/components/structured-data.astro`):

  | Schema           | Purpose                            | Scope     |
  | ---------------- | ---------------------------------- | --------- |
  | `Organization`   | Brand identity                     | All pages |
  | `BreadcrumbList` | Navigation structure               | All pages |
  | `WebApplication` | Chrome extension details & pricing | Home      |
  | `WebSite`        | Site info with publisher           | Home      |
  | `HowTo`          | Usage steps                        | Home      |

  Entity `@id` map (reuse before adding new):

  | `@id`                     | Type           | Used by                                                           |
  | ------------------------- | -------------- | ----------------------------------------------------------------- |
  | `https://morello.dev/#me` | Person         | Organization.founder, WebApplication.author (canonical, external) |
  | `{siteUrl}#organization`  | Organization   | Offer.seller, WebApplication.publisher, WebSite.publisher         |
  | `{siteUrl}#logo`          | ImageObject    | Organization.logo, WebApplication.image                           |
  | `{siteUrl}#screenshot`    | ImageObject    | WebApplication.screenshot                                         |
  | `{siteUrl}#software`      | WebApplication | —                                                                 |
  | `{siteUrl}#website`       | WebSite        | —                                                                 |

  **Cross-site entity linking:** The Person entity uses a canonical `@id` (`https://morello.dev/#me`) hosted on the author's personal website. This site only references it — the full Person schema with `sameAs` links is defined on morello.dev. Search engines resolve the `@id` across crawls to connect the entities in their Knowledge Graph.

- Sitemap & robots: `@astrojs/sitemap` generates `/sitemap-index.xml`; `/robots.txt` links to it.
- Section anchors: Home uses `#how-it-works`, `#features`, `#use-cases`, `#privacy`, `#pricing`, `#get-started`.

## Link attributes

- External links: `rel="noopener noreferrer"` (already applied site-wide)
- Sponsored/affiliate: add `rel="sponsored nofollow"`
- User-generated: add `rel="ugc nofollow"`

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
