import type { T } from '../i18n';

export interface Step { when: T; what: T; where: T; note?: T }

const same = (s: string): T => ({ en: s, ko: s });

export const bio: T = {
  en: 'I came to Erlangen in 2018 for a master’s in medical engineering and stayed for an industrial PhD with Siemens Healthineers on a topic of deep learning-based reconstruction and segmentation for MRCP. The dissertation is submitted and the final defense talk will be planned soon. Before that I studied Information, Communication and Electronics Engineering and Computer Science in Korea.',
  ko: '2018년 의공학 석사를 위해 에를랑겐에 왔고, 이어서 Siemens Healthineers와 산학협력으로 MRCP 딥러닝 재구성 및 영상 분할을 주제로 박사 연구를 진행했습니다. 박사 학위논문은 제출을 마친 상태이며, 최종 구두 시험을 앞두고 있습니다. 그 전에는 한국에서 정보통신전자공학과 컴퓨터공학을 공부했습니다.',
};

/** Work experience, newest first (CV: Jinho Kim, comprehensive). */
export const experience: Step[] = [
  {
    when: { en: 'Aug 2026 – now', ko: '2026.08 – 현재' }, what: { en: 'Independent data and automation engineer', ko: '독립 데이터·자동화 엔지니어' }, where: { en: 'Confidential SME client, remote', ko: '비공개 중소기업 고객, 원격' },
    note: { en: 'Contract data platform: PostgreSQL, Flask, Superset, Android and AWS CDK.', ko: '계약 데이터 플랫폼: PostgreSQL, Flask, Superset, Android, AWS CDK.' },
  },
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
    when: { en: '2026 – now', ko: '2026 – 현재' }, what: same('Agentic AI engineering'), where: { en: 'Personal projects and Turing College AI Engineering', ko: '개인 프로젝트, Turing College AI Engineering' },
    note: { en: 'Building LLM agents and tools while studying the field.', ko: 'LLM agent와 도구를 만들며 이 분야를 공부하고 있습니다.' },
  },
];

/** Degrees, newest first (CV: education). */
export const education: Step[] = [
  {
    when: { en: 'Oct 2021 – now', ko: '2021.10 – 현재' }, what: { en: 'PhD (Dr.-Ing.), AI in Biomedical Engineering', ko: '박사 (Dr.-Ing.), AI in Biomedical Engineering' }, where: same('FAU Erlangen-Nürnberg'),
    note: { en: 'Dissertation submitted, defense upcoming. Dissertation: Applications of Deep Learning Models to Magnetic Resonance Cholangiopancreatography: Reconstruction and Visualization.', ko: '학위논문 제출, 디펜스 예정. 학위논문: Applications of Deep Learning Models to Magnetic Resonance Cholangiopancreatography: Reconstruction and Visualization.' },
  },
  {
    when: { en: 'Oct 2018 – Jul 2021', ko: '2018.10 – 2021.07' }, what: same('M.Sc. Medical Engineering'), where: same('FAU Erlangen-Nürnberg'),
    note: { en: 'Thesis on deep learning respiratory motion correction in abdominal DWI, graded 1.0. Final grade 1.8.', ko: '복부 확산강조 MRI의 딥러닝 호흡 움직임 보정 논문, 1.0. 최종 성적 1.8.' },
  },
  {
    when: { en: 'Mar 2011 – Aug 2018', ko: '2011.03 – 2018.08' }, what: same('B.Eng. Information, Communication and Electronics Engineering'), where: { en: 'The Catholic University of Korea', ko: '가톨릭대학교' },
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
