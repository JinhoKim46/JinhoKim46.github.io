import type { T } from '../i18n';

export interface Step { when: T; what: T; where: T; note?: T }

const same = (s: string): T => ({ en: s, ko: s });

export const bio: T = {
  en: 'I came to Erlangen in 2018 for a master’s in medical engineering and stayed for an industrial PhD with Siemens Healthineers on deep learning for MRCP. The dissertation is submitted. Before that I studied electronics and computer science in Korea, where my first papers were on image enhancement.',
  ko: '2018년 의공학 석사를 위해 에를랑겐에 왔고, 이어서 Siemens Healthineers와 산학협력으로 MRCP 딥러닝 박사과정을 했습니다. 학위논문은 제출을 마쳤습니다. 그 전에는 한국에서 전자공학과 컴퓨터공학을 공부했고, 첫 논문은 image enhancement에 관한 것이었습니다.',
};

/** Work and education on one line of time, newest first. */
export const timeline: Step[] = [
  {
    when: { en: 'Aug 2026 – now', ko: '2026.08 – 현재' }, what: same('Agentic AI engineering'), where: { en: 'Projects and Turing College AI Engineering', ko: '개인 프로젝트, Turing College AI Engineering' },
    note: { en: 'Building LLM agents and tools while studying the field. Alongside, a data and automation project for an SME client.', ko: 'LLM agent와 도구를 만들며 이 분야를 공부하고 있습니다. 중소기업 고객의 데이터·자동화 프로젝트도 함께 하고 있습니다.' },
  },
  { when: { en: 'Jun – Aug 2026', ko: '2026.06 – 08' }, what: same('Senior AI Infrastructure Engineer'), where: same('BMW Group, Munich') },
  {
    when: { en: 'Oct 2021 – Mar 2026', ko: '2021.10 – 2026.03' }, what: { en: 'PhD, AI research engineer', ko: '박사과정, AI research engineer' }, where: same('Siemens Healthineers / FAU Erlangen-Nürnberg'),
    note: { en: 'Dissertation submitted, defense upcoming. Taught Computational MRI (2nd Best Lecture Award) and Deep Learning in MRI.', ko: '학위논문 제출, 디펜스 예정. Computational MRI(우수강의상 2위)와 Deep Learning in MRI 강의.' },
  },
  { when: { en: 'Nov 2020 – Jul 2021', ko: '2020.11 – 2021.07' }, what: { en: 'Deep learning research intern', ko: 'Deep learning research intern' }, where: same('Siemens Healthineers') },
  { when: { en: '2018 – 2021', ko: '2018 – 2021' }, what: same('M.Sc. Medical Engineering'), where: same('FAU Erlangen-Nürnberg'), note: { en: 'Thesis graded 1.0. Student research assistant at Fraunhofer IISB, 2019–2020.', ko: '석사 논문 1.0. 2019–2020 Fraunhofer IISB 학생 연구원.' } },
  { when: { en: '2011 – 2018', ko: '2011 – 2018' }, what: same('B.Eng. Information, Communication and Electronics Engineering'), where: { en: 'The Catholic University of Korea', ko: '가톨릭대학교' }, note: { en: 'Double major in computer science; exchange at St. Cloud State University, 2016.', ko: '컴퓨터공학 복수전공, 2016년 St. Cloud State University 교환학생.' } },
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
