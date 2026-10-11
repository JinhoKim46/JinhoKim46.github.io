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
    en: 'PhD candidate, FAU Erlangen-Nürnberg (industrial PhD with Siemens Healthineers, 2021–2026). Dissertation submitted, defense upcoming.',
    ko: 'FAU 에를랑겐-뉘른베르크 박사과정 (Siemens Healthineers 산학협력, 2021–2026). 학위논문 제출, 디펜스 예정.',
  } satisfies T,
};

export const intro: T = {
  en: 'I develop deep learning methods for accelerated MRI reconstruction and segmentation, mainly MRCP. My research covers self-supervised and zero-shot self-supervised reconstruction, which needs no fully sampled data. I also build AI infrastructure and LLM agents. My next research direction is agentic AI in medical imaging, especially across the MRI workflow.',
  ko: '고속 촬영한 MRI 데이터를 재구성하고 영상을 분할하는 딥러닝 연구를 합니다. 주로 MRCP를 다루며, 완전 샘플링 데이터 없이 학습하는 자기지도 학습과 제로샷 자기지도 학습이 핵심 주제입니다. AI 인프라와 LLM 에이전트도 직접 만들고 있습니다. 앞으로는 에이전틱 AI를 의료영상, 특히 MRI 워크플로우에 접목하는 연구를 하고 싶습니다.',
};

export const contacts = [
  { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jinho-kim-mri-ai', text: 'linkedin.com/in/jinho-kim-mri-ai' },
  { label: 'GitHub', href: 'https://github.com/JinhoKim46', text: 'github.com/JinhoKim46' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=nM0I-TEAAAAJ&hl=en', text: 'Google Scholar' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0000-1324-8951', text: '0009-0000-1324-8951' },
];
