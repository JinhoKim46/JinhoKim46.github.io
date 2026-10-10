export const locales = ['en', 'ko'] as const;
export type Lang = (typeof locales)[number];

/** Text that exists in both languages. */
export type T = { en: string; ko: string };

export const pick = (t: T, lang: Lang) => t[lang];

/** Path for a page in the given language: '/research/x' -> '/ko/research/x'. */
export function localePath(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return clean === '/' ? '/ko/' : `/ko${clean}`;
}

/** Strip the locale prefix so a URL can be re-targeted at the other language. */
export function basePath(pathname: string) {
  const p = pathname.replace(/^\/ko(?=\/|$)/, '') || '/';
  return p.length > 1 ? p.replace(/\/$/, '') : p;
}

/** Home page sections, in order. Their ids are the nav anchors. */
export const sections = [
  { id: 'research', label: { en: 'Research', ko: 'Research' } },
  { id: 'engineering', label: { en: 'Engineering', ko: 'Engineering' } },
  { id: 'about', label: { en: 'About', ko: 'About' } },
  { id: 'papers', label: { en: 'Papers', ko: 'Papers' } },
  { id: 'contact', label: { en: 'Contact', ko: 'Contact' } },
] as const;

export const ui = {
  name: { en: 'Jinho Kim', ko: '김진호' },
  altName: { en: '김진호', ko: 'Jinho Kim' },
  skip: { en: 'Skip to content', ko: '본문으로 건너뛰기' },
  language: { en: 'Language', ko: '언어' },
  contactMe: { en: 'Contact me', ko: '연락하기' },
  caseStudy: { en: 'Case study', ko: 'Case study' },
  backResearch: { en: 'All research', ko: '전체 연구' },
  myRole: { en: 'Role', ko: '역할' },
  collaborators: { en: 'With', ko: '공동 연구' },
  links: { en: 'Links', ko: '링크' },
  moreResearch: { en: 'More research', ko: '다른 연구' },
  coFirst: { en: '* Shared first authorship.', ko: '* 공동 제1저자.' },
} satisfies Record<string, T>;
