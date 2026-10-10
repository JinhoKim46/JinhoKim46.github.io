import type { T } from './i18n';

/** One-line edits live here: degree status, intro, links. */
export const profile = {
  email: 'jinhokim.kor@gmail.com',
  role: {
    en: 'MRI reconstruction, MRI segmentation and ML engineering',
    ko: 'MRI reconstruction, MRI segmentation, ML engineering',
  } satisfies T,
  // Change after the defense.
  affiliation: {
    en: 'PhD candidate, FAU Erlangen-Nürnberg (industrial PhD with Siemens Healthineers, 2021–2026)',
    ko: 'FAU 에를랑겐-뉘른베르크 박사과정 (Siemens Healthineers 산학협력, 2021–2026)',
  } satisfies T,
};

export const intro: T = {
  en: 'I develop deep learning methods for accelerated MRI reconstruction and MRI segmentation, mainly MRCP. My research focuses on self-supervised and zero-shot self-supervised methods without fully sampled data. I also build AI infrastructure and LLM-based agents.',
  ko: '딥러닝으로 고속 촬영한 MRI 데이터를 재구성하고 MRI 영상 분할을 연구를 합니다. 주로 MRCP를 다루며, 완전 샘플링 데이터가 필요 없는 자기지도 학습과 제로샷 자기지도 학습에 집중합니다. AI 인프라와 LLM 기반 에이전트 개발로 연구 경험을 넓히고 있습니다.',
};

export const contacts = [
  { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jinho-kim-mri-ai', text: 'linkedin.com/in/jinho-kim-mri-ai' },
  { label: 'GitHub', href: 'https://github.com/JinhoKim46', text: 'github.com/JinhoKim46' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=nM0I-TEAAAAJ&hl=en', text: 'Google Scholar' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0000-1324-8951', text: '0009-0000-1324-8951' },
];
