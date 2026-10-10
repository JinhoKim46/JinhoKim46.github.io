# Jinho Kim portfolio

A bilingual (EN/KO) personal portfolio site for research and ML engineering roles. It will be an Astro + Tailwind + MDX static site on GitHub Pages at `https://jinhokim46.github.io` (repo `JinhoKim46/JinhoKim46.github.io`). The site is not built yet. Design and content are being settled on a canvas prototype first.

## Layout

```
CLAUDE.md                  this file
documents/
  jinho-portfolio-plan-2026-10-10.md   original brief (IA, design, hosting decisions)
  rules/                   project rules, one topic per file (see below)
  sources/                 everything the site uses, web-ready
    content-plan.md        what goes on each page; the owner writes this, the build follows it
    README.md              source index, repo list, CV and paper discrepancies
    figures/               web copies of figures + README mapping each to its original
    papers/  cv/  notes/
  publications/            raw paper folders (read-only originals)
site/                      the Astro app (to be created)
```

## Workflow

1. The owner edits `documents/sources/content-plan.md`. It is the build spec for page content: build from it, and when it is silent, ask rather than fill the gap.
2. Every figure or document the site uses is copied into `documents/sources/` first and logged there. The site reads only from `sources/`.
3. Design changes are tried on the canvas prototype (https://claude.ai/artifact/AsfwYQ5Pb3oKBvKnV8FUNd) before they reach `site/`.

## Rules

Read the matching file before touching that area:

- `documents/rules/facts.md`: before writing any number, title, date, role or affiliation
- `documents/rules/figures.md`: before adding, cropping or displaying any image, or touching the comparison slider
- `documents/rules/copy.md`: before writing or editing any EN or KO text
