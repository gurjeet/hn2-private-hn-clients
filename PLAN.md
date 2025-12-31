# hackernews.hn Project Plan

## Goal
Build `hackernews.hn` as a curated, trustworthy directory of Hacker News clients so people can quickly find the best option for their platform and preferences.

## Audience
- People looking for the best HN client for their device or workflow
- Developers who build HN clients and want visibility

## Scope
- Public, read-only directory of HN clients with curation
- Search, filter, sort, and detail pages
- Clear submission path (PR or simple form)

## Non-goals
- Building a new HN client
- User accounts, logins, or personalization
- Automated ranking or scraping without human review

## Success Criteria
- 30-50 verified listings in MVP
- Clear curation criteria and update cadence
- Fast load, mobile-friendly UI, and findability via search

## Content Model (Draft)
Each client entry includes:
- `id`, `name`, `tagline`, `description`
- `platforms` (web, iOS, Android, macOS, Windows, Linux, terminal, extension)
- `client_type` (web, mobile, desktop, terminal, extension)
- `price` (free, paid, freemium), `license`, `open_source` (bool), `repo_url`
- `homepage_url`, `store_urls`, `hn_discussion_url`
- `tags` (e.g., offline, reader, keyboard, minimalist)
- `status` (active, inactive, discontinued), `last_checked`, `last_release` (if known)
- `screenshots` (optional)

## Taxonomy (Draft)
- Platforms: `web`, `ios`, `android`, `macos`, `windows`, `linux`, `terminal`, `extension`
- Pricing: `free`, `paid`, `freemium`
- Status: `active`, `inactive`, `discontinued`
- Tags: `offline`, `reader`, `keyboard`, `minimal`, `power-user`, `notifications`,
  `themeable`, `sync`, `saved`, `comments-first`

## Curation & Ingestion Workflow
1. Parse sources (e.g., `misc/ideas_extracted.txt`).
2. Triage and dedupe candidates.
3. Verify links, availability, and basic functionality.
4. Add to dataset with required fields + tags.
5. Periodic review to confirm activity and update status.
6. Accept submissions with checklist and proof of activity.

## UX Requirements
- Browseable listing with compact cards
- Search across name, tags, and description
- Filters: platform, price, open-source, status, tags
- Sort: newest verified, last updated, platform popularity (optional)
- Detail pages with screenshots, links, and HN discussion
- A clear “About / Criteria” page

## Tech Decision
- Static site generator: Astro
- Data format: JSON in-repo (validated by `schema/client.schema.json`)
- Search: client-side Fuse.js with prebuilt index
- Hosting: Cloudflare Pages (primary) or Vercel (fallback)
- Curation: PR-based updates in Git; optional simple submit form later

## MVP Backlog
- Define schema + data store format
- Seed 30-50 verified entries
- Build listing, filters, search, and detail pages
- Add submission workflow and contribution guide
- Deploy `hackernews.hn` and set analytics

## Milestones (Proposed)
1. Plan + schema finalized
2. MVP data seeded
3. UI built and deployed
4. Submission workflow live

## Open Questions / Risks
- What qualifies as “best” (editorial picks vs neutral list)?
- How to handle discontinued or forked clients?
- Update cadence and who maintains it
- Whether to include paid-only clients without trials
