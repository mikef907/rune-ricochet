# Rune Ricochet website

Official game website, media kit, privacy, terms, and support pages for Rune Ricochet, published by Swollom.

- Website: https://mikef907.github.io/rune-ricochet/
- Privacy: https://mikef907.github.io/rune-ricochet/privacy/
- Terms: https://mikef907.github.io/rune-ricochet/terms/

This is a static HTML/CSS site with no build dependencies or publisher-added tracking.
GitHub Pages publishes `main` from the repository root. `.nojekyll` disables Jekyll processing.
Edit the static HTML directly. The game landing page uses `assets/home.css`;
policy pages and the media kit use `assets/styles.css`. Keep internal links under `/rune-ricochet/`
and update canonical links, `robots.txt`, and `sitemap.xml` if the domain or base path changes.

The mobile privacy policy preserves the previously published text, effective September 12,
2026. Terms and the separate website note were approved by the publisher on October 5, 2026.

For support or privacy requests: mikef907@gmail.com.

## Local preview

Serve a directory containing a `rune-ricochet` folder that points to this checkout,
then open `/rune-ricochet/`. No build or executable JavaScript is required. JSON-LD script blocks contain only structured data.
The landing page uses the existing gameplay capture and icon, with decorative inline
SVG illustrations. Store destinations, Android campaign attribution, gameplay clips,
and policy text are preserved.

## Search and discovery

The homepage targets the game's name, brick breaker roguelite, turn-based gameplay,
and iOS/Android availability in natural page text and unique metadata. The visible
gameplay questions use facts from the published App Store and Google Play listings.

The homepage has one JSON-LD game entity, with publisher, platforms, single-player
mode, free base price, official store links and social profiles. It replaces the
earlier partial microdata. The media kit adds a breadcrumb matching its visible
navigation. No ratings, reviews, install counts, or unsupported offline/multiplayer
claims are invented. VideoGame markup describes the entity; it does not promise
Google Software App rich results. Those require a supported app type plus a
qualifying visible rating or review, which the website does not currently have.
The gameplay questions are ordinary HTML, without FAQ rich-result markup.

Keep each page's canonical URL in sitemap.xml. Update lastmod only when that page's
content, links, or structured data changes significantly. The image entries point
to the original gameplay capture and app icon.

### GitHub Pages discovery limitation

This repository publishes under /rune-ricochet/. Its robots.txt is therefore at
/rune-ricochet/robots.txt, which crawlers do not use for host-level directives.
The effective location is https://mikef907.github.io/robots.txt; it returned 404
during the November 16, 2026 audit. This does not block crawling, but the project
robots.txt cannot advertise its sitemap to Google by itself.

Account-level follow-up:
1. Verify the URL-prefix property https://mikef907.github.io/rune-ricochet/ in
   Google Search Console. If needed, add the exact HTML tag or HTML verification
   file supplied by the owner; never invent a token.
2. Submit https://mikef907.github.io/rune-ricochet/sitemap.xml in that property's
   Sitemaps report.
3. Inspect the homepage and media-kit URLs and request indexing where appropriate.
4. Save a baseline of indexed pages, clicks, impressions, CTR, and queries. Compare
   the following 28 days after recrawling with the prior 28 days; separate brand
   searches from genre searches. Report observations, not guaranteed rankings.

If an existing account-root Pages repository is configured later, add the sitemap
directive to its root robots.txt without replacing any existing rules. Do not
change unrelated account-wide hosting from this project.

References:
- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/appearance/structured-data/software-app
- https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://apps.apple.com/us/app/rune-ricochet/id6818950693
- https://play.google.com/store/apps/details?id=com.swollom.runericochet
