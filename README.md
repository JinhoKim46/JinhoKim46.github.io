# jinhokim46.github.io

Source of [jinhokim46.github.io](https://jinhokim46.github.io), the personal site of Jinho Kim: MRI reconstruction research and ML engineering, in English and Korean.

Built with [Astro](https://astro.build), Tailwind CSS and MDX, and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in site/dist
```

One home page (`site/src/views/Home.astro`) plus a page per case study. Case studies live in `site/src/content/research/{en,ko}/*.mdx`; engineering, papers, timeline and the comparison slider in `site/src/data/*.ts`; degree status, intro and contact links in `site/src/config.ts`.
