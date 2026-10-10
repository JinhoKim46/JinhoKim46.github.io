import type { T } from './i18n';

/** One-line edits live here: degree status, intro, links. */
export const profile = {
  email: 'jinhokim.kor@gmail.com',
  role: {
    en: 'MRI reconstruction and ML engineering',
    ko: 'MRI reconstruction, ML engineering',
  } satisfies T,
  // Change after the defense.
  affiliation: {
    en: 'PhD candidate, FAU Erlangen-Nürnberg, with Siemens Healthineers',
    ko: 'FAU 에를랑겐-뉘른베르크 박사과정, Siemens Healthineers 산학협력',
  } satisfies T,
};

export const intro: T = {
  en: 'I work on deep learning reconstruction for accelerated, undersampled MRI, mostly MRCP. My focus is self-supervised and zero-shot self-supervised learning, which train without fully-sampled data. On the engineering side, I am widening my scope through AI infrastructure and LLM-based agentic AI.',
  ko: '딥러닝 기반 방법으로 고속 촬영한 undersampled MRI 데이터에서 영상을 복원하는 연구를 합니다. 주로 MRCP를 다루며, fully-sampled 데이터 없이 학습하는 self-supervised와 zero-shot self-supervised 방식이 중심입니다. 엔지니어링 쪽으로는 AI infrastructure와 LLM 기반 agentic AI를 공부하며 관심 분야를 넓히고 있습니다.',
};

export const contacts = [
  { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jinho-kim-mri-ai', text: 'linkedin.com/in/jinho-kim-mri-ai' },
  { label: 'GitHub', href: 'https://github.com/JinhoKim46', text: 'github.com/JinhoKim46' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=nM0I-TEAAAAJ&hl=en', text: 'Google Scholar' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0000-1324-8951', text: '0009-0000-1324-8951' },
];
