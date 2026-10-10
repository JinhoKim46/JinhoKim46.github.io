// Copies web-ready figures from documents/sources/figures into public/media.
// The site reads images only from there (see documents/rules/figures.md).
import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('../../documents/sources/figures/', import.meta.url));
const dest = fileURLToPath(new URL('../public/media/', import.meta.url));

// documents/ stays out of the public repo, so CI builds from the committed public/media copy.
if (!existsSync(src)) {
  console.log('documents/sources/figures not found; using committed public/media');
  process.exit(0);
}
rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
// Copy only what pages use: skip notes, early-mockup crops and unused sagittal views.
const skip = (p) => p.endsWith('.md') || /legacy_|mip_cover|zs_.*_sag/.test(p);
cpSync(src, dest, { recursive: true, filter: (p) => !skip(p) });
console.log(`Synced figures to ${dest}`);
