import type { T } from '../i18n';

export interface Entry { when: T; what: T; where: T; note?: T }

const same = (s: string): T => ({ en: s, ko: s });

export const bio: T[] = [
  {
    en: 'I came to Erlangen in 2018 for a master’s in medical engineering and stayed for a PhD with Siemens Healthineers on deep learning for MRCP. My dissertation, “Applications of Deep Learning Models to Magnetic Resonance Cholangiopancreatography: Reconstruction and Visualization”, is submitted. Before Germany I studied electronics and computer science in Korea, where my first papers were on image enhancement.',
    ko: '2018년에 의공학 석사를 하러 에를랑겐에 왔고, 이어서 Siemens Healthineers와 함께 MRCP 딥러닝으로 박사과정을 했습니다. 학위논문 “Applications of Deep Learning Models to Magnetic Resonance Cholangiopancreatography: Reconstruction and Visualization”은 제출을 마쳤습니다. 독일에 오기 전에는 한국에서 전자공학과 컴퓨터공학을 공부했고, 첫 논문은 영상 화질 개선에 관한 것이었습니다.',
  },
  {
    en: 'My PhD contract ended in March 2026. Since then I have worked on AI infrastructure at BMW Group, and I now take on data and automation projects as an independent engineer while preparing for my defense.',
    ko: '박사 계약은 2026년 3월에 끝났습니다. 이후 BMW Group에서 AI 인프라 업무를 했고, 지금은 디펜스를 준비하면서 독립 엔지니어로 데이터·자동화 프로젝트를 맡고 있습니다.',
  },
];

export const experience: Entry[] = [
  { when: { en: 'Aug 2026 – now', ko: '2026.08 – 현재' }, what: { en: 'Independent data and automation engineer', ko: '독립 데이터·자동화 엔지니어' }, where: { en: 'Confidential SME client, remote', ko: '비공개 중소기업 고객, 원격' }, note: { en: 'Contract data platform: PostgreSQL, Flask, Superset, Android, AWS CDK.', ko: '계약 데이터 플랫폼: PostgreSQL, Flask, Superset, Android, AWS CDK.' } },
  { when: { en: 'Jun – Aug 2026', ko: '2026.06 – 2026.08' }, what: same('Senior AI Infrastructure Engineer'), where: same('BMW Group, Munich'), note: { en: 'MLflow platform, AI workload cost dashboard, evaluation of sandboxed execution for AI agents.', ko: 'MLflow 플랫폼, AI 워크로드 비용 대시보드, AI 에이전트용 샌드박스 실행 환경 평가.' } },
  { when: { en: 'Oct 2021 – Mar 2026', ko: '2021.10 – 2026.03' }, what: { en: 'AI research engineer (PhD)', ko: 'AI 연구 엔지니어 (박사과정)' }, where: same('Siemens Healthineers / FAU Erlangen-Nürnberg'), note: { en: 'Deep learning MRCP reconstruction and segmentation, distributed training on DGX and Slurm, a modular MRI toolbox.', ko: 'MRCP 딥러닝 재구성과 분할, DGX와 Slurm 분산 학습, 모듈형 MRI 툴박스.' } },
  { when: { en: 'Nov 2020 – Jul 2021', ko: '2020.11 – 2021.07' }, what: { en: 'Deep learning research intern', ko: '딥러닝 연구 인턴' }, where: same('Siemens Healthineers / FAU'), note: { en: 'Respiratory motion correction for diffusion-weighted MRI.', ko: '확산강조영상 호흡 움직임 보정.' } },
  { when: { en: 'Apr 2019 – Dec 2020', ko: '2019.04 – 2020.12' }, what: { en: 'Student research assistant', ko: '학생 연구원' }, where: same('Fraunhofer IISB, Erlangen'), note: { en: 'GUI automation for design workflows, 92% less manual effort.', ko: '설계 작업 자동화 GUI로 수작업 92% 감소.' } },
];

export const education: Entry[] = [
  { when: { en: 'Oct 2021 – now', ko: '2021.10 – 현재' }, what: { en: 'PhD (Dr.-Ing.), AI in Biomedical Engineering', ko: '박사 (Dr.-Ing.), AI in Biomedical Engineering' }, where: same('FAU Erlangen-Nürnberg'), note: { en: 'Dissertation submitted, defense upcoming. Taught Computational MRI, Deep Learning in MRI and Medical Engineering II, and supervised master’s theses.', ko: '학위논문 제출, 디펜스 예정. Computational MRI, Deep Learning in MRI, Medical Engineering II 강의와 석사 논문 지도.' } },
  { when: same('2018 – 2021'), what: { en: 'M.Sc. Medical Engineering', ko: '석사, 의공학' }, where: same('FAU Erlangen-Nürnberg'), note: { en: 'Thesis on deep learning respiratory motion correction in abdominal DWI (grade 1.0).', ko: '학위논문: 복부 확산강조영상의 딥러닝 호흡 움직임 보정 (1.0).' } },
  { when: same('2011 – 2018'), what: { en: 'B.Eng. Information, Communication and Electronics Engineering', ko: '학사, 정보통신전자공학 (컴퓨터정보공학 복수전공)' }, where: { en: 'The Catholic University of Korea', ko: '가톨릭대학교' }, note: { en: 'Double major in computer science. Exchange at St. Cloud State University, USA, 2016.', ko: '2016년 미국 St. Cloud State University 교환학생.' } },
];

export const awards: Entry[] = [
  { when: { en: 'FAU', ko: 'FAU' }, what: { en: '2nd Best Lecture Award', ko: '우수강의상 2위' }, where: { en: 'Computational MRI', ko: 'Computational MRI 강의' } },
  { when: same('2016'), what: { en: 'Outstanding Exchange Student Award', ko: '우수 교환학생상' }, where: { en: 'The Catholic University of Korea', ko: '가톨릭대학교' } },
  { when: { en: '4 semesters', ko: '4학기' }, what: { en: 'Academic Excellence Scholarship', ko: '성적 우수 장학금' }, where: { en: 'The Catholic University of Korea', ko: '가톨릭대학교' } },
];

export const activities: Entry[] = [
  { when: { en: '2019 – now', ko: '2019 – 현재' }, what: { en: 'Founder and community leader', ko: '설립자, 운영자' }, where: { en: 'Korean community in Franconia', ko: '프랑켄 지역 한인 커뮤니티' }, note: { en: 'The largest Korean online community in mid and north Bavaria.', ko: '바이에른 중·북부 최대 한인 온라인 커뮤니티.' } },
  { when: same('2023 – 2024'), what: { en: 'Founder and president', ko: '설립자, 회장' }, where: same('KOIN (Korean Students Initiative)'), note: { en: 'Cultural and academic-support events for Korean students.', ko: '한인 학생을 위한 문화·학업 지원 행사.' } },
];

export const skills: { title: T; text: string }[] = [
  { title: { en: 'Medical imaging and MRI', ko: '의료영상, MRI' }, text: 'MR/MRCP reconstruction, 3D segmentation, motion correction, reader studies with radiologists' },
  { title: { en: 'Deep learning', ko: '딥러닝' }, text: 'PyTorch, self-supervised and zero-shot learning, image restoration and analysis' },
  { title: { en: 'LLM and agentic systems', ko: 'LLM, 에이전트 시스템' }, text: 'LoRA fine-tuning, prompt engineering, multi-agent orchestration, Claude Code, Codex' },
  { title: { en: 'Distributed training and HPC', ko: '분산 학습, HPC' }, text: 'DDP, Ray, Slurm, DGX, Kubernetes, Docker' },
  { title: { en: 'Cloud and MLOps', ko: '클라우드, MLOps' }, text: 'AWS (ECS, RDS, S3, CDK), MLflow, Apache Superset, PostgreSQL' },
  { title: { en: 'Programming', ko: '프로그래밍' }, text: 'Python, TypeScript, Git' },
];

export const languages: T = { en: 'Korean (native), English (C1), German (A2/B1)', ko: '한국어 (모국어), 영어 (C1), 독일어 (A2/B1)' };
