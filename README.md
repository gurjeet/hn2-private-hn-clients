# Curated Directory of HackerNews Clients

Curated directory of Hacker News clients across web, mobile, desktop, terminal,
and extensions. Built as a static Astro site and published at
https://hackernews.hn.

## Features

+ Filter and search by platform, price, status, and open-source
+ Client detail pages with links, tags, and metadata
+ JSON-backed content with schema validation
+ Static output for fast hosting

## Project Structure

+ `src/pages/` - Listing and client detail pages
+ `src/lib/clients.js` - Client data loader
+ `data/clients.json` - Curated client entries
+ `data/taxonomy.json` - Allowed platforms, tags, pricing, status
+ `schema/client.schema.json` - JSON schema for client entries
+ `scripts/validate-clients.mjs` - Data validation script

## Requirements

+ Node.js `~24.8.0`
+ npm `~11.6.0`

## Development

```bash
npm install
npm run dev
```

## Build and Preview

```bash
npm run build
npm run preview
```

Build output is written to `docs/` (see `astro.config.mjs`). The postbuild step
rewrites asset paths so the site can be served from a subdirectory and adds
`docs/.nojekyll` so that GitHub Pages doesn't try to process the project using
Jekyll.

## Data Updates

Validate client entries before submitting changes:

```bash
npm run validate:data
```

## Contributing

See `CONTRIBUTING.md` for curation guidelines and submission steps.

