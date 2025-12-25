# Contributing to hackernews.hn

Thanks for helping build a curated directory of Hacker News clients. Please keep submissions focused on actual HN clients (web, mobile, desktop, terminal, or extensions).

## How to add a client
1. Pick a stable `id` slug (lowercase, numbers, and hyphens only).
2. Add a new entry to `data/clients.json` that matches `schema/client.schema.json`.
3. Use tags from `data/taxonomy.json`. If a new tag is needed, add it there too.
4. Set `last_checked` to the date you verified the client (YYYY-MM-DD).
5. Open a PR with a short description and links you verified.

## Required fields
- `id`, `name`, `description`
- `platforms`, `client_type`, `price`, `status`
- `homepage_url`, `last_checked`

## Optional fields
- `tagline`, `tags`, `repo_url`, `hn_discussion_url`, `store_urls`, `last_release`, `screenshots`

## Validation
Run the data validator before submitting:

```bash
npm install
npm run validate:data
```

## Curation guidelines
- Focus on actively maintained clients where possible.
- Use accurate pricing and status values.
- Avoid duplicates or thin wrappers that do not improve the reading experience.
