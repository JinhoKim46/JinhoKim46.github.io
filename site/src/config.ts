import type { T } from './i18n';

/** One-line edits live here: degree status, links, contact. */
export const profile = {
  email: 'jinhokim.kor@gmail.com',
  role: {
    en: 'MRI reconstruction and ML engineering',
    ko: 'MRI 영상 재구성, ML 엔지니어링',
  } satisfies T,
  // Change after the defense.
  affiliation: {
    en: 'PhD candidate, FAU Erlangen-Nürnberg, with Siemens Healthineers',
    ko: 'FAU 에를랑겐-뉘른베르크 박사과정, Siemens Healthineers 산학협력',
  } satisfies T,
  status: {
    en: 'My dissertation is submitted and the defense is coming up. I’m looking for postdoc, research scientist and ML engineer roles.',
    ko: '학위논문을 제출했고 디펜스를 앞두고 있습니다. 박사후연구원, 리서치 사이언티스트, ML 엔지니어 포지션을 찾고 있습니다.',
  } satisfies T,
};

export const contacts = [
  { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jinho-kim-mri-ai', text: 'linkedin.com/in/jinho-kim-mri-ai' },
  { label: 'GitHub', href: 'https://github.com/JinhoKim46', text: 'github.com/JinhoKim46' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=nM0I-TEAAAAJ&hl=en', text: 'Google Scholar' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0000-1324-8951', text: '0009-0000-1324-8951' },
];
