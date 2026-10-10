export const locales = ['en', 'ko'] as const;
export type Lang = (typeof locales)[number];

/** Text that exists in both languages. */
export type T = { en: string; ko: string };

export const pick = (t: T, lang: Lang) => t[lang];

/** Path for a page in the given language: '/research' -> '/ko/research'. */
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

export const ui = {
  name: { en: 'Jinho Kim', ko: '김진호' },
  altName: { en: '김진호', ko: 'Jinho Kim' },
  navResearch: { en: 'Research', ko: '연구' },
  navEngineering: { en: 'Engineering', ko: '엔지니어링' },
  navPapers: { en: 'Papers', ko: '논문' },
  navAbout: { en: 'About', ko: '소개' },
  navContact: { en: 'Contact', ko: '연락처' },
  skip: { en: 'Skip to content', ko: '본문으로 건너뛰기' },
  language: { en: 'Language', ko: '언어' },
  viewResearch: { en: 'View research', ko: '연구 보기' },
  contactMe: { en: 'Contact me', ko: '연락하기' },
  readCase: { en: 'Read case study', ko: 'Case study 보기' },
  allEngineering: { en: 'All engineering work', ko: '엔지니어링 전체 보기' },
  selectedPapers: { en: 'Selected papers', ko: '주요 논문' },
  allPapers: { en: 'All papers', ko: '논문 전체 보기' },
  backResearch: { en: 'Back to research', ko: '연구 목록으로' },
  myRole: { en: 'My role', ko: '역할' },
  collaborators: { en: 'Collaborators', ko: '공동 연구' },
  links: { en: 'Links', ko: '링크' },
  moreResearch: { en: 'More research', ko: '다른 연구' },
  coFirst: { en: '* Shared first authorship.', ko: '* 공동 제1저자.' },
} satisfies Record<string, T>;
