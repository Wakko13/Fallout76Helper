# Fallout 76 Helper

A personal, searchable knowledge base for Fallout 76 — built to stop re-asking the
same questions across scattered wikis. Every answer gets written down once, tagged,
dated, and sourced, so it's findable instead of re-derived.

## How content is organized

Two content collections, both plain MDX files with frontmatter:

- **`src/content/faq/`** — one question per file. Short, direct, tagged, dated
  (`verified:`), with source links. This is where "how do I..." / "what's the best
  way to..." answers go.
- **`src/content/reference/`** — structured game-knowledge entries (SPECIAL, perks,
  legendary effects, plans/recipes, locations, events, camp, factions, vendors,
  bosses, mutations — see the `category` enum in `src/content.config.ts`). This is
  where more durable mechanics/data live.

Both schemas require a `verified` date and a `sources` list. Entries tagged
`events` (rotations, seasonal scoreboard) go stale fastest — re-check those first
after a game update, not everything else.

### Adding a new entry

Copy an existing `.mdx` file in the relevant collection, fill in frontmatter, write
the answer, cite sources. File name becomes the URL slug.

## Commands

| Command           | Action                                                     |
| ------------------ | ----------------------------------------------------------- |
| `npm run dev`      | Local dev server. **Run `npm run build` at least once first** — Pagefind search needs a built index to serve in dev mode. |
| `npm run build`    | Production build to `./dist/`, including the Pagefind search index. |
| `npm run preview`  | Preview the production build locally.                       |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages via the official `withastro/action`. The site is public
at whatever URL GitHub Pages assigns — there's no access gate, so treat the URL as
unlisted-but-not-private.

`astro.config.mjs` assumes the GitHub repo is `Wakko13/Fallout76Helper` (sets `site`
and `base` accordingly) — update those if the repo is renamed or moved.

## Status

Scaffold stage: structure, schemas, search, and deploy pipeline are wired up. The
FAQ and reference entries currently in the repo are **format examples, not
researched answers** — replace them as real questions get answered.
