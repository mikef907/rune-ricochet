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

### Host-level sitemap discovery and diagnostics

GitHub Pages serves this project under /rune-ricochet/. Google only uses
https://mikef907.github.io/robots.txt for this host; it ignores the project's
/rune-ricochet/robots.txt. The effective host file originally returned 404,
which allows crawling but does not advertise the sitemap.

On November 17, 2026, the existing account-root repository
https://github.com/mikef907/mikef907.github.io was updated to publish robots.txt
with an unrestricted crawler group and the canonical XML sitemap URL. The
root file returns HTTP 200 as plain text. The existing app-ads.txt is unchanged.
Root repository checkout: E:\Projects\mikef907.github.io.

The root URL-prefix property https://mikef907.github.io/ is now verified in
Search Console using Google's HTML verification file. Preserve both that file
and the game homepage's existing verification meta tag. The root property is
needed for robots.txt and Crawl Stats reports; subfolder properties do not
expose those diagnostics. At verification time, Crawl Stats had no data yet.

This corrects a sitemap discovery gap, but the missing robots.txt was not a
crawl block and is not established as the cause of Couldn't fetch. Do not
claim that the sitemap is processed until Search Console reports Success.

For ongoing maintenance, keep canonical URLs synchronized in both sitemap
formats, retain the root sitemap declaration, and use Search Console to inspect
new crawl errors. The original XML sitemap was resubmitted after the host fix.

References:
- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/appearance/structured-data/software-app
- https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://apps.apple.com/us/app/rune-ricochet/id6818950693
- https://play.google.com/store/apps/details?id=com.swollom.runericochet


### Sitemap fetch diagnosis (November 17, 2026)

The URL-prefix property is verified using the homepage's Google verification tag;
preserve that tag. Google accepted the XML sitemap submission, but initially
reported Couldn't fetch even though its live URL test reported Crawl allowed: Yes
and Page fetch: Successful. Public requests return HTTP 200 with valid XML, and
Search Console reports no manual actions.

sitemap.txt is a plain-text sitemap containing the same four canonical page URLs.
It provides a supported alternative submission to distinguish XML-specific
processing issues from site-wide sitemap processing. Keep its URLs synchronized
with sitemap.xml.

The text sitemap was also accepted but showed Couldn't fetch and zero discovered
pages. Google's live test at November 17, 2026, 08:19 (Search Console display time)
successfully fetched it with crawling allowed. Both formats therefore pass live
access checks, but successful sitemap processing remains unconfirmed. There is
no specific fetch or parsing error in either sitemap's details report.

Google accepted a homepage indexing request and added it to a priority crawl
queue. Do not repeatedly request indexing or request indexing of sitemap files.
Check the Sitemaps report after Google's next crawl; the acceptance criterion is
Success with four discovered pages. A submission receipt or successful live URL
test alone does not meet that criterion. No hosting or XML defect was identified
in the checks above, and the reason for the processing failure is not confirmed.


### Follow-up findings (November 17, 2026)

The homepage is now indexed. URL Inspection reports a successful Googlebot
smartphone crawl at November 17, 2026, 08:17:46 (Search Console display time),
with crawling and indexing allowed. Google selected the inspected homepage URL
as canonical. The crawl predates the host robots.txt change, so that change must
not be credited with making the homepage indexable.

All four IPv4 addresses returned by DNS delivered byte-identical sitemap XML
with HTTP 200 and valid TLS. IPv6 could not be tested from this workstation,
which has no IPv6 default route. This is a local test limitation, not evidence
of a GitHub Pages IPv6 failure.

The remaining sitemap warning does not establish a site-wide crawl block.
Google's Sitemaps help lists low crawl demand among possible causes, but Search
Console has not exposed the exact cause for this site. Avoid speculative XML
rewrites or additional duplicate sitemap formats. Wait for actual crawl data or
a specific error before changing hosting further.
