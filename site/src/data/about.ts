import type { T } from '../i18n';

export interface Step { when: T; what: T; where: T; note?: T }

const same = (s: string): T => ({ en: s, ko: s });

export const bio: { lead: T; paragraphs: T[] } = {
  lead: {
    en: 'Deep learning researcher in MRI reconstruction and applied AI, based in Munich, Germany.',
    ko: 'MRI 영상 재구성과 응용 AI를 연구하는 뮌헨 기반의 딥러닝 연구자입니다.',
  },
  paragraphs: [
    {
      en: 'I’m Jinho Kim, a researcher and AI engineer working at the intersection of medical imaging and machine learning.',
      ko: '저는 의료영상과 머신러닝의 접점에서 연구하고 시스템을 개발하는 김진호입니다.',
    },
    {
      en: 'My doctoral research at FAU and Siemens Healthineers focused on making MRI faster and more practical, especially MRCP. I developed self-supervised reconstruction for 3 T and 0.55 T MRI, scan-specific reconstruction for 14-second breath-hold MRCP, and segmentation-guided MIP enhancement.',
      ko: 'FAU와 Siemens Healthineers에서 진행한 박사과정 연구에서는 MRI, 특히 MRCP를 더 빠르고 실용적으로 만드는 데 집중했습니다. 3 T와 0.55 T MRI를 위한 자기지도 재구성, 14초 호흡정지 MRCP의 스캔별 재구성, 영상 분할 기반 MIP 개선 기술을 개발했습니다.',
    },
    {
      en: 'I enjoy taking ideas beyond publications and turning them into systems people can use. Alongside my MRI research, I build AI infrastructure and LLM-based agents, and have built, deployed and run a full-stack service for an SME that is in daily use.',
      ko: '저는 연구 아이디어를 논문에만 머무르게 하지 않고 실제 사용할 수 있는 시스템으로 구현하는 일을 좋아합니다. MRI 연구와 함께 AI 인프라와 LLM 기반 에이전트를 개발하고 있으며, 중소기업의 풀스택 서비스를 직접 만들고 배포하며 운영하고 있습니다.',
    },
    {
      en: 'My next research direction is agentic AI in medical imaging, especially the MRI workflow, where I can combine my reconstruction work with the agent systems I build now.',
      ko: '앞으로는 에이전틱 AI를 의료영상, 특히 MRI 워크플로우에 접목하는 연구를 하고 싶습니다. 재구성 연구와 에이전트 개발 경험을 함께 살릴 수 있는 분야라고 생각합니다.',
    },
  ],
};

/** Work experience, newest first (CV: Jinho Kim, comprehensive). */
export const experience: Step[] = [
  {
    when: { en: 'Jun – Aug 2026', ko: '2026.06 – 08' }, what: same('Senior AI Infrastructure Engineer'), where: same('BMW Group, Munich'),
    note: { en: 'MLflow platform on AWS, AI workload cost dashboard, evaluation of sandboxed execution for AI agents.', ko: 'AWS 기반 MLflow 플랫폼, AI 워크로드 비용 대시보드, AI 에이전트용 샌드박스 실행 환경 평가.' },
  },
  {
    when: { en: 'Oct 2021 – Mar 2026', ko: '2021.10 – 2026.03' }, what: { en: 'AI research engineer (PhD candidate)', ko: 'AI research engineer (박사과정)' }, where: same('Siemens Healthineers / FAU Erlangen-Nürnberg'),
    note: { en: 'Deep learning MRCP reconstruction and segmentation, distributed training on DGX and Slurm, Computational MRI and Deep Learning in MRI teaching.', ko: 'MRCP 딥러닝 재구성과 분할, DGX·Slurm 분산 학습, Computational MRI와 Deep Learning in MRI 강의.' },
  },
  {
    when: { en: 'Nov 2020 – Jul 2021', ko: '2020.11 – 2021.07' }, what: { en: 'Deep learning research intern', ko: '딥러닝 연구 인턴' }, where: same('Siemens Healthineers / FAU Erlangen-Nürnberg'),
    note: { en: 'Respiratory motion correction for diffusion-weighted MRI.', ko: '확산강조 MRI의 호흡 움직임 보정.' },
  },
  {
    when: { en: 'Apr 2019 – Dec 2020', ko: '2019.04 – 2020.12' }, what: { en: 'Student research assistant', ko: '학생 연구원' }, where: same('Fraunhofer IISB, Erlangen'),
    note: { en: 'GUI automation for design workflows, 92% less manual effort.', ko: '설계 작업 자동화 GUI, 수작업 92% 감소.' },
  },
];

/** Study and self-learning, shown above the work history. */
export const learning: Step[] = [
  {
    when: { en: 'Sep 2026 – now', ko: '2026.09 – 현재' }, what: same('Agentic AI engineering'), where: { en: 'Personal projects and Turing College AI Engineering', ko: '개인 프로젝트, Turing College AI Engineering' },
    note: { en: 'Building LLM agents and tools while studying the field.', ko: 'LLM agent와 도구를 만들며 이 분야를 공부하고 있습니다.' },
  },
];

/** Degrees, newest first (CV: education). */
export const education: Step[] = [
  {
    when: { en: 'Oct 2021 – now', ko: '2021.10 – 현재' }, what: { en: 'PhD (Dr.-Ing.), AI in Biomedical Engineering', ko: '공학박사 (Dr.-Ing.), AI in Biomedical Engineering' }, where: same('FAU Erlangen-Nürnberg'),
    note: { en: 'Dissertation submitted, defense upcoming. Dissertation: Applications of Deep Learning Models to Magnetic Resonance Cholangiopancreatography: Reconstruction and Visualization.', ko: '학위논문 제출, 디펜스 예정. 학위논문: Applications of Deep Learning Models to Magnetic Resonance Cholangiopancreatography: Reconstruction and Visualization.' },
  },
  {
    when: { en: 'Oct 2018 – Jul 2021', ko: '2018.10 – 2021.07' }, what: { en: 'M.Sc., Medical Engineering', ko: '공학석사 (M.Sc.), Medical Engineering' }, where: same('FAU Erlangen-Nürnberg'),
    note: { en: 'Thesis on deep learning respiratory motion correction in abdominal DWI, graded 1.0. Final grade 1.8.', ko: '복부 확산강조 MRI의 딥러닝 호흡 움직임 보정 논문, 1.0. 최종 성적 1.8.' },
  },
  {
    when: { en: 'Mar 2011 – Aug 2018', ko: '2011.03 – 2018.08' }, what: { en: 'B.Eng., Information, Communication and Electronics Engineering', ko: '공학사 (B.Eng.), Information, Communication and Electronics Engineering' }, where: { en: 'The Catholic University of Korea', ko: '가톨릭대학교' },
    note: { en: 'Double major in computer science. Exchange at St. Cloud State University, 2016.', ko: '컴퓨터공학 복수전공. 2016년 St. Cloud State University 교환학생.' },
  },
];

export const extras: { title: T; items: T[] }[] = [
  {
    title: { en: 'Awards', ko: '수상' },
    items: [
      { en: '2nd Best Lecture Award, Computational MRI, FAU', ko: 'FAU 우수강의상 2위 (Computational MRI)' },
      { en: 'Outstanding Exchange Student Award, The Catholic University of Korea, 2016', ko: '가톨릭대학교 우수 교환학생상, 2016' },
      { en: 'Academic Excellence Scholarship, 4 semesters, The Catholic University of Korea', ko: '가톨릭대학교 성적 우수 장학금, 4학기' },
    ],
  },
  {
    title: { en: 'Community', ko: '커뮤니티' },
    items: [
      { en: 'Founder of the largest Korean online community in Franconia, 2019–now', ko: '프랑켄 지역 최대 한인 온라인 커뮤니티 설립·운영, 2019–현재' },
      { en: 'Founder and president of KOIN, a Korean students initiative, 2023–2024', ko: '한인 학생 모임 KOIN 설립, 회장, 2023–2024' },
    ],
  },
  {
    title: { en: 'Languages', ko: '언어' },
    items: [
      { en: 'Korean, native', ko: '한국어, 모국어' },
      { en: 'English, C1', ko: '영어, C1' },
      { en: 'German, A2/B1', ko: '독일어, A2/B1' },
    ],
  },
];
