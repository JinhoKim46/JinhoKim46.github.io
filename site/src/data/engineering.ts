import type { T } from '../i18n';

export interface Project {
  title: T;
  text: T;
  meta: T;
  href?: string;
}

const gh = (repo: string) => `https://github.com/JinhoKim46/${repo}`;
const same = (s: string): T => ({ en: s, ko: s });

/** Three summary cards on the home page. */
export const homeCards: Project[] = [
  {
    title: { en: 'Full-stack development', ko: '풀스택 개발' },
    text: {
      en: 'A contract platform for an SME client: a Flask portal and JSON API on PostgreSQL, read-only Superset dashboards defined in code, and an Android app for field technicians. 1,000+ contracts migrated; manual search time down 80%.',
      ko: '중소기업 고객을 위한 계약 관리 플랫폼. PostgreSQL 위의 Flask 포털과 JSON API, 코드로 정의한 읽기 전용 Superset 대시보드, 현장 기술자용 Android 앱을 만들었습니다. 계약 1,000건 이상을 옮겨 수동 검색 시간을 80% 줄였습니다.',
    },
    meta: { en: 'Flask, PostgreSQL, Superset, Android, Docker, AWS CDK', ko: 'Flask, PostgreSQL, Superset, Android, Docker, AWS CDK' },
  },
  {
    title: { en: 'LLM engineering', ko: 'LLM 엔지니어링' },
    text: {
      en: 'Claude Code agents and plugins for literature reviews and codebase reports, a decision-model benchmark, and LoRA fine-tuning of GPT-2 Large on 0.38% of its weights.',
      ko: '문헌고찰과 코드베이스 분석을 위한 Claude Code 에이전트·플러그인, decision model 벤치마크, 가중치 0.38%만 학습한 GPT-2 Large LoRA 파인튜닝.',
    },
    meta: { en: 'Claude Code, OpenRouter, LoRA, Streamlit', ko: 'Claude Code, OpenRouter, LoRA, Streamlit' },
  },
  {
    title: { en: 'ML infrastructure', ko: 'ML 인프라' },
    text: {
      en: 'Distributed training on DGX and Slurm that cut training time by 25%, a Slurm + Ray scheduler that cut GPU idle time by 63%, and self-hosted MLflow on AWS for 8 projects.',
      ko: 'DGX와 Slurm 분산 학습으로 학습 시간 25% 단축, Slurm + Ray 스케줄러로 GPU 유휴 시간 63% 감소, 8개 프로젝트가 쓰는 AWS 기반 MLflow 구축.',
    },
    meta: { en: 'PyTorch DDP, Ray, Slurm, Kubernetes, MLflow, AWS', ko: 'PyTorch DDP, Ray, Slurm, Kubernetes, MLflow, AWS' },
  },
];

export const groups: { title: T; items: Project[] }[] = [
  {
    title: same('Agentic AI'),
    items: [
      {
        title: same('route-work'), href: gh('agent-skills'),
        text: { en: 'A Claude Code skill that sizes a coding request and routes it through the right skills, issues and PRs.', ko: '코딩 요청의 크기를 판단해 알맞은 스킬과 이슈·PR 흐름으로 보내는 Claude Code 스킬.' },
        meta: { en: 'Open source', ko: '오픈소스' },
      },
      {
        title: same('Laya vs JEV'), href: gh('laya-vs-jev'),
        text: { en: 'Two decision models compared on identical support tickets. Laya on GPU takes about 4 ms per batched request; hosted JEV about 22 ms.', ko: '같은 고객 문의로 두 decision model을 비교했습니다. GPU의 Laya는 배치 요청당 약 4 ms, 호스팅 JEV는 약 22 ms.' },
        meta: { en: 'Benchmark', ko: '벤치마크' },
      },
      {
        title: { en: 'Adversarial unit test generator', ko: '적대적 단위 테스트 생성기' },
        text: { en: 'A VS Code extension where a generator agent and a checker agent write tests together. I led a team of four over 48 hours; tests came 90% faster with up to 74% more coverage.', ko: '생성 에이전트와 검증 에이전트가 함께 테스트를 쓰는 VS Code 확장. 4명 팀을 이끌어 48시간 안에 만들었고, 수작업보다 90% 빠르고 커버리지는 최대 74% 높았습니다.' },
        meta: { en: 'Hackbay 2025, team lead', ko: 'Hackbay 2025, 팀 리드' },
      },
      {
        title: same('litreview-agent'), href: gh('litreview-agent'),
        text: { en: 'Runs a systematic review and meta-analysis on Claude Code: search, deduplication and screening with an audit trail, ending in a PRISMA 2020 draft.', ko: 'Claude Code 위에서 체계적 문헌고찰과 메타분석을 수행합니다. 검색, 중복 제거, 선별 기록을 남기고 PRISMA 2020 초안까지 씁니다.' },
        meta: { en: 'Open source', ko: '오픈소스' },
      },
      {
        title: same('code-flow-report'), href: gh('code-flow-report'),
        text: { en: 'A Claude Code plugin that traces a Python codebase call by call. Every claim is re-checked against the AST on each build.', ko: 'Python 코드베이스를 호출 단위로 추적하는 Claude Code 플러그인. 설명은 빌드할 때마다 AST로 다시 검증합니다.' },
        meta: { en: 'Open source, EN/KO', ko: '오픈소스, EN/KO' },
      },
    ],
  },
  {
    title: same('Turing College, AI Engineering'),
    items: [
      {
        title: same('Interview Helper'), href: gh('TC_AE_Sprint1_Interview_helper'),
        text: { en: 'Mock interviews built from a real job ad and CV. Models ask and judge; code counts, weights and decides the band. Every input passes an injection guard.', ko: '실제 채용 공고와 CV로 모의 면접을 진행합니다. 질문과 평가는 모델이, 점수 계산은 코드가 맡고, 모든 입력은 인젝션 검사를 거칩니다.' },
        meta: { en: 'Sprint 1 capstone, Streamlit + OpenRouter', ko: 'Sprint 1 캡스톤, Streamlit + OpenRouter' },
      },
      {
        title: { en: 'Domain chatbot with RAG', ko: 'RAG 도메인 챗봇' },
        text: { en: 'Planned: a LangChain chatbot with advanced RAG, three or more tool calls and a Streamlit UI.', ko: '계획: advanced RAG, tool call 3개 이상, Streamlit UI를 갖춘 LangChain 챗봇.' },
        meta: { en: 'Sprint 2, in progress', ko: 'Sprint 2, 진행 중' },
      },
    ],
  },
  {
    title: { en: 'Model training', ko: '모델 학습' },
    items: [
      {
        title: { en: 'MRI reconstruction', ko: 'MRI 재구성' }, href: '/research',
        text: { en: 'Supervised, self-supervised and zero-shot unrolled networks for multi-coil MRCP, evaluated against parallel imaging and compressed sensing.', ko: '다중 코일 MRCP를 위한 supervised, self-supervised, zero-shot unrolled network. 병렬영상, compressed sensing과 비교 평가했습니다.' },
        meta: { en: 'Siemens Healthineers / FAU, 2021–2026', ko: 'Siemens Healthineers / FAU, 2021–2026' },
      },
      {
        title: { en: 'MRI segmentation', ko: 'MRI 분할' }, href: '/research',
        text: { en: 'A 3D nnU-Net trained on 265 MRCP cases to remove overlapping anatomy before projection.', ko: 'MRCP 265건으로 학습해 투영 전에 겹치는 장기를 지우는 3D nnU-Net.' },
        meta: { en: 'Siemens Healthineers / FAU, 2021–2026', ko: 'Siemens Healthineers / FAU, 2021–2026' },
      },
      {
        title: { en: 'LoRA fine-tuning', ko: 'LoRA 파인튜닝' }, href: gh('BMW_LLMs_Finetuning'),
        text: { en: 'Crawled BMW press releases and fine-tuned GPT-2 Large with LoRA, training 0.38% of the weights. NLL fell 23.3%.', ko: 'BMW 보도자료를 수집해 GPT-2 Large를 LoRA로 학습. 가중치의 0.38%만 학습해 NLL을 23.3% 낮췄습니다.' },
        meta: { en: 'Personal project, 2026', ko: '개인 프로젝트, 2026' },
      },
      {
        title: { en: 'MRI motion correction', ko: 'MRI 움직임 보정' },
        text: { en: 'Deep learning correction of respiratory motion in free-breathing abdominal diffusion-weighted MRI. PSNR up 10.6%, SSIM up 5.7%.', ko: '자유 호흡 복부 확산강조영상의 호흡 움직임을 딥러닝으로 보정. PSNR 10.6%, SSIM 5.7% 향상.' },
        meta: { en: 'Siemens Healthineers, internship, 2021', ko: 'Siemens Healthineers 인턴, 2021' },
      },
      {
        title: { en: 'Natural image super-resolution', ko: '자연 영상 초해상도' },
        text: { en: 'Real-time image enhancement and upscaling, published in the Journal of IEIE.', ko: '실시간 영상 화질 개선과 업스케일링 방법. 대한전자공학회 논문지 게재.' },
        meta: { en: 'The Catholic University of Korea, 2017', ko: '가톨릭대학교, 2017' },
      },
    ],
  },
  {
    title: { en: 'ML infrastructure', ko: 'ML 인프라' },
    items: [
      {
        title: same('Slurm + Ray'), href: gh('Distributed-training-for-multiple-configurations'),
        text: { en: 'Runs 20+ experiments inside one Slurm job with Ray. Against Slurm array jobs, GPU idle time fell 63% and blocking time 91%.', ko: 'Slurm job 하나 안에서 Ray로 실험 20개 이상을 동시에 돌립니다. Slurm array job 대비 GPU 유휴 시간 63%, 대기 시간 91% 감소.' },
        meta: { en: 'Open source', ko: '오픈소스' },
      },
      {
        title: { en: 'MLflow and cost dashboard', ko: 'MLflow와 비용 대시보드' },
        text: { en: 'Self-hosted MLflow on AWS ECS, RDS and S3 for 8 projects and about 30 users, plus a Superset dashboard for AI workload cost.', ko: 'AWS ECS, RDS, S3에 MLflow를 직접 올려 8개 프로젝트, 약 30명이 씁니다. AI 워크로드 비용을 보여 주는 Superset 대시보드도 만들었습니다.' },
        meta: same('BMW Group, 2026'),
      },
      {
        title: { en: 'Distributed training pipelines', ko: '분산 학습 파이프라인' },
        text: { en: 'Scaled MRI reconstruction training on DGX (Kubernetes, Docker) and HPC (Slurm), cutting end-to-end training time by 25%.', ko: 'DGX(Kubernetes, Docker)와 HPC(Slurm)에서 MRI 재구성 학습을 확장해 전체 학습 시간을 25% 줄였습니다.' },
        meta: same('Siemens Healthineers / FAU'),
      },
    ],
  },
  {
    title: { en: 'Data and automation', ko: '데이터와 자동화' },
    items: [
      {
        title: { en: 'Contract management platform', ko: '계약 관리 플랫폼' },
        text: {
          en: 'Moved 1,000+ contracts from spreadsheets into a PostgreSQL model, cutting manual search time by 80%. Flask portal and JSON API, read-only Superset dashboards defined in code, an Android field app, and a Docker Compose stack deployed to AWS with CDK behind a release gate.',
          ko: '스프레드시트에 흩어진 계약 1,000건 이상을 PostgreSQL 모델로 옮겨 수동 검색 시간을 80% 줄였습니다. Flask 포털과 JSON API, 코드로 정의한 읽기 전용 Superset 대시보드, 현장용 Android 앱을 만들고, Docker Compose 스택을 릴리스 검증을 거쳐 AWS CDK로 배포합니다.',
        },
        meta: { en: 'Client work, 2026', ko: '고객 프로젝트, 2026' },
      },
      {
        title: same('Blog automation'), href: gh('BlogAutomation'),
        text: { en: 'Drafts posts with OpenAI, keeps Notion as the editorial database and publishes to Webflow CMS.', ko: 'OpenAI로 글을 쓰고 Notion을 편집 DB로 써서 Webflow CMS에 게시하는 파이프라인.' },
        meta: { en: 'Open source', ko: '오픈소스' },
      },
    ],
  },
];
