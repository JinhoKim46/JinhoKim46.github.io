# jinhokim46.github.io

Source of Jinho Kim's personal site. It presents his MRI reconstruction research and ML engineering work in English and Korean.

Live site: <https://jinhokim46.github.io>

## Table of contents

- [Overview](#overview)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Editing content](#editing-content)
- [Adding or replacing figures](#adding-or-replacing-figures)
- [Deploying](#deploying)
- [Checking a deploy and troubleshooting](#checking-a-deploy-and-troubleshooting)
- [Notes](#notes)

## Overview

| Item | Detail |
|---|---|
| Framework | Astro 5 (static site) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Content | MDX (case studies), TypeScript data files |
| Other | `@astrojs/sitemap` |
| Languages | English is the default (no prefix). Korean lives under `/ko/`. |
| Hosting | GitHub Pages, deployed by GitHub Actions |
| Repository | `git@github.com:JinhoKim46/JinhoKim46.github.io.git` (branch `main`) |

The site has one home page (`site/src/views/Home.astro`) and a set of case study pages. A push to `main` triggers GitHub Actions, which builds and deploys the site.

## Project structure

```text
.
├── .github/workflows/deploy.yml   # deploy workflow (runs on push to main)
├── documents/                     # local-only working documents (gitignored, not in the repo)
│   ├── publications/
│   ├── rules/
│   └── sources/figures/           # figure originals (copied to site/public/media)
└── site/                          # Astro project (run npm commands here)
    ├── scripts/sync-sources.mjs   # copies figures from documents to public/media
    ├── public/media/              # images the site actually uses (committed)
    ├── src/
    │   ├── config.ts              # profile, intro text, contact links
    │   ├── data/
    │   │   ├── about.ts           # About / timeline
    │   │   ├── engineering.ts     # Engineering section
    │   │   ├── papers.ts          # Papers list
    │   │   └── compare.ts         # comparison slider (cases, layers, captions)
    │   ├── content/research/
    │   │   ├── en/*.mdx           # case studies (English)
    │   │   └── ko/*.mdx           # case studies (Korean, same slugs)
    │   ├── views/                 # Home.astro, CaseStudy.astro
    │   ├── components/            # Compare, ContactBlock, PaperList, SectionTitle
    │   ├── layouts/Base.astro
    │   ├── styles/global.css
    │   └── pages/                 # thin route files (index, ko/, research/[slug])
    ├── astro.config.mjs
    └── package.json
```

`documents/` is in `.gitignore`, so it never reaches GitHub. Edits made only inside that folder are not deployed and do not show up in git.

## Local development

### Requirements

- Node.js v22 (the local version)
- npm
- git, with an SSH key set up for GitHub
- Optional: the `gh` CLI, to check deploy status

### Install

```bash
cd site
npm install
```

### Run

Run every command inside `site/`.

| Command | What it does |
|---|---|
| `npm run dev` | Syncs figures, then starts the dev server (http://localhost:4321) |
| `npm run build` | Syncs figures, then builds the static site into `site/dist` |
| `npm run preview` | Serves the built `dist` at http://localhost:4321 |
| `npm run check` | Runs `astro check` (type and content checks) |
| `npm run sync` | Runs only the figure copy |

```bash
cd site
npm run dev
```

While the dev server runs, the browser updates each time you save a file.

## Editing content

### What to edit where

| To change | File |
|---|---|
| Email, role, affiliation, intro text (EN/KO), contact links | `site/src/config.ts` |
| About / timeline | `site/src/data/about.ts` |
| Engineering section | `site/src/data/engineering.ts` |
| Papers list | `site/src/data/papers.ts` |
| Comparison slider (cases, layers, captions, default comparison) | `site/src/data/compare.ts` |
| Case study body text | `site/src/content/research/{en,ko}/*.mdx` |
| Home page layout | `site/src/views/Home.astro` |
| Case study page layout | `site/src/views/CaseStudy.astro` |
| Shared components | `site/src/components/` (`Compare.astro`, `ContactBlock.astro`, `PaperList.astro`, `SectionTitle.astro`) |
| Base layout and global styles | `site/src/layouts/Base.astro`, `site/src/styles/global.css` |
| Routes | `site/src/pages/` (`index.astro`, `ko/`, `research/[slug].astro` are thin wiring files and rarely need edits) |

### Rules

- Text fields are bilingual objects shaped `{ en, ko }`. Every visible string needs both languages.
- Each case study has one file per language. `en/` and `ko/` use the same slug (file name). When you edit one, check the other.
- Put a non-breaking space between a number and its unit. For example: `3 T`, `599 s`, `R = 25`.
- Keep paper titles, authors and venue names in English in both languages.
- After the PhD is awarded, update `affiliation` in `site/src/config.ts` (the code comment reads "Change after the defense").

### Comparison slider defaults

The default comparison in `site/src/data/compare.ts` has the shape `start: { mode, a, b }`.

- `mode`: chooses which layers to compare. It is one of `'all'`, `'p12'`, `'p23'` or `'p13'`.
- `a`, `b`: positions of the dividers, in percent.

### Checking your edits

After saving, open both the EN page and the KO page (`/ko/`) with `npm run dev`. Before deploying, `npm run build` must pass.

## Adding or replacing figures

The site reads only the images in `site/public/media/`. The originals live in a local-only folder that git does not track, so the order of steps matters.

- Originals: `documents/sources/figures/` (gitignored)
- `sync-sources.mjs` copies that folder into `site/public/media/`. It empties `public/media/` first. It skips `*.md`, `legacy_*`, `mip_cover*` and `zs_*_sag*`.
- CI has no `documents/` folder, so it uses the `site/public/media/` committed to the repo as is.

To change a figure, follow these steps.

1. Add or replace the image in `documents/sources/figures/`.
2. Run `npm run dev` or `npm run build` locally to refresh `site/public/media/`.

   ```bash
   cd site
   npm run build
   ```

3. Point `compare.ts` or the `.mdx` file at the new file name.
4. Run `git status` and check the changes in `site/public/media/`. Commit them. If you skip this, the image does not appear on the live site.

## Deploying

Deploying means committing and pushing to `main`. `.github/workflows/deploy.yml` runs on every push to `main`. You can also start it by hand from the Actions tab with `workflow_dispatch`.

The workflow has two jobs.

- `build`: builds `site/` with `withastro/action` (`path: site`).
- `deploy`: publishes to GitHub Pages with `actions/deploy-pages`.

### Step by step

1. Check that the build passes locally. This step is required.

   ```bash
   cd site
   npm run build
   ```

2. Optional: preview the build.

   ```bash
   npm run preview   # http://localhost:4321
   ```

3. Review your changes. If you changed a figure, `site/public/media/` must be in the list.

   ```bash
   cd ..
   git status
   ```

4. Stage and commit.

   ```bash
   git add -A          # or list only the paths you need
   git commit -m "Update papers list"
   ```

5. Push to `main`.

   ```bash
   git push origin main
   ```

6. Wait for GitHub Actions to finish (see "Checking a deploy" below). It usually takes 1 to 2 minutes.

## Checking a deploy and troubleshooting

### Checking a deploy

- Open <https://github.com/JinhoKim46/JinhoKim46.github.io/actions> and wait until the latest run turns green.
- With the `gh` CLI installed, you can also check from the terminal.

  ```bash
  gh run list
  gh run watch
  ```

- After a successful run, the change appears on <https://jinhokim46.github.io> within 1 to 2 minutes. If the browser shows the old page, do a hard refresh to bypass the cache.

### Troubleshooting

| Symptom | Cause and fix |
|---|---|
| The build fails in Actions | Run `cd site && npm run build` locally to reproduce the error, then fix it. |
| Images are missing on the live site | You probably did not commit `site/public/media/`. Re-read the [figure steps](#adding-or-replacing-figures), commit and push. |
| The site looks unchanged after an edit | Either the browser cache is stale or the workflow is still running. Wait for the run to finish in the Actions tab, then hard refresh. |
| The workflow succeeded but the page is not published | In the repository under Settings → Pages, check that Source is set to "GitHub Actions". |

## Notes

- Edits made only inside `documents/` (rules, content-plan, sources and so on) are not deployed and do not show up in git.
- The repository is public, so put only publishable content in `site/`.
- `site/dist` is build output. Do not edit it by hand.
