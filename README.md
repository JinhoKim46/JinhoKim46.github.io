# jinhokim46.github.io

Source of [jinhokim46.github.io](https://jinhokim46.github.io), the personal site of Jinho Kim: MRI reconstruction research and ML engineering, in English and Korean.

Built with [Astro](https://astro.build), Tailwind CSS and MDX, and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in site/dist
```

Content lives in `site/src/content/research/{en,ko}/*.mdx` (case studies) and `site/src/data/*.ts` (engineering, papers, about, comparison slider). Degree status and contact links are in `site/src/config.ts`.
