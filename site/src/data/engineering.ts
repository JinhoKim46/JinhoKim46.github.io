import type { T } from '../i18n';

export interface Project {
  title: string;
  text: T;
  meta: T;
  href?: string;
}

const gh = (repo: string) => `https://github.com/JinhoKim46/${repo}`;
const same = (s: string): T => ({ en: s, ko: s });
const open = { en: 'Open source', ko: '오픈소스' };

// Research projects live in the research section only; this list is everything else.
export const groups: { title: string; items: Project[] }[] = [
  {
    title: 'Agentic AI',
    items: [
      { title: 'Management reports and guide chatbot', meta: { en: 'Client work, 2026. Anthropic SDK (Claude Opus, Sonnet, Haiku)', ko: '고객 프로젝트, 2026. Anthropic SDK (Claude Opus, Sonnet, Haiku)' },
        text: { en: 'Daily, weekly and monthly management reports: code computes every number, Claude writes the summary and recommendations, and a checker rejects text whose numbers do not match. A role-aware guide chatbot answers in two steps (pick sections, then answer from them) with no access to business data. All calls pass one gateway with a kill switch, a monthly budget cap, PII removal and per-call cost logging.', ko: '일일·주간·월간 경영 보고서. 숫자는 모두 코드가 계산하고, Claude가 요약과 권고를 쓰며, 숫자가 맞지 않는 문장은 검사 단계에서 걸러집니다. 역할별 이용 안내 chatbot은 두 단계(관련 절 선택 후 그 절로 답변)로 답하고 업무 데이터에는 접근하지 않습니다. 모든 호출은 kill switch, 월 예산 상한, 개인정보 제거, 호출별 비용 기록을 갖춘 gateway 하나를 지납니다.' } },
      { title: 'litreview-agent', href: gh('litreview-agent'), meta: open,
        text: { en: 'Runs a systematic review and meta-analysis on Claude Code, with an audit trail from search to screening, and drafts a PRISMA 2020 manuscript.', ko: 'Claude Code에서 systematic review와 meta-analysis를 실제로 수행합니다. 검색부터 screening까지 기록을 남기고 PRISMA 2020 원고 초안을 씁니다.' } },
      { title: 'code-flow-report', href: gh('code-flow-report'), meta: { en: 'Open source, EN/KO', ko: '오픈소스, EN/KO' },
        text: { en: 'A Claude Code plugin that traces a Python codebase call by call. Every claim is re-checked against the AST on each build.', ko: 'Python 코드베이스를 호출 단위로 추적하는 Claude Code plugin. 모든 설명은 빌드할 때마다 AST로 다시 검증합니다.' } },
      { title: 'route-work', href: gh('agent-skills'), meta: open,
        text: { en: 'A Claude Code skill that sizes a coding request and routes it through the right skills, issues and PRs.', ko: '코딩 요청의 규모를 판단해 알맞은 skill과 issue·PR 흐름으로 보내는 Claude Code skill.' } },
      { title: 'Laya vs JEV', href: gh('laya-vs-jev'), meta: same('Benchmark'),
        text: { en: 'Two decision models on identical support tickets: Laya on GPU at about 4 ms per batched request, hosted JEV at about 22 ms.', ko: '같은 support ticket으로 두 decision model을 비교했습니다. GPU의 Laya는 batch 요청당 약 4 ms, hosted JEV는 약 22 ms.' } },
      { title: 'Adversarial unit test generator', meta: { en: 'Hackbay 2025, team lead', ko: 'Hackbay 2025, 팀 리드' },
        text: { en: 'A VS Code extension in which a generator agent and a checker agent write tests together. Built with a team of four in 48 hours: tests 90% faster, coverage up to 74% higher.', ko: 'Generator agent와 checker agent가 함께 테스트를 쓰는 VS Code extension. 4명이 48시간 동안 만들었고, 테스트 작성은 90% 빨라지고 coverage는 최대 74% 올랐습니다.' } },
    ],
  },
  {
    title: 'Turing College, AI Engineering',
    items: [
      { title: 'Interview Helper', href: gh('TC_AE_Sprint1_Interview_helper'), meta: same('Sprint 1 capstone, Streamlit + OpenRouter'),
        text: { en: 'Mock interviews built from a real job ad and CV. Models ask and judge; code counts, weights and decides the score, and every input passes an injection guard.', ko: '실제 job description과 CV로 mock interview를 진행합니다. 질문과 평가는 모델이, 점수 계산은 코드가 맡고, 모든 입력은 injection guard를 거칩니다.' } },
      { title: 'RAG domain chatbot', meta: { en: 'Sprint 2, in progress', ko: 'Sprint 2, 진행 중' },
        text: { en: 'Planned: a LangChain chatbot with advanced RAG, three or more tool calls and a Streamlit UI.', ko: '계획: advanced RAG, tool call 3개 이상, Streamlit UI를 갖춘 LangChain chatbot.' } },
    ],
  },
  {
    title: 'ML infrastructure',
    items: [
      { title: 'Slurm + Ray', href: gh('Distributed-training-for-multiple-configurations'), meta: open,
        text: { en: 'Runs 20+ experiments inside one Slurm job. Against array jobs, GPU idle time fell 63% and blocking time 91%.', ko: 'Slurm job 하나에서 실험 20개 이상을 동시에 돌립니다. Array job 대비 GPU idle time 63%, blocking time 91% 감소.' } },
      { title: 'MLflow and cost dashboard', meta: same('BMW Group, 2026'),
        text: { en: 'Self-hosted MLflow on AWS ECS, RDS and S3 for 8 projects and about 30 users, with a Superset dashboard for AI workload cost.', ko: 'AWS ECS, RDS, S3 위에 MLflow를 self-hosting해 8개 프로젝트, 약 30명이 씁니다. AI workload 비용용 Superset dashboard 포함.' } },
      { title: 'Distributed training', meta: same('Siemens Healthineers / FAU'),
        text: { en: 'Scaled MRI reconstruction training on DGX (Kubernetes, Docker) and Slurm, cutting end-to-end training time by 25%.', ko: 'DGX(Kubernetes, Docker)와 Slurm에서 MRI reconstruction 학습을 확장해 전체 학습 시간을 25% 줄였습니다.' } },
    ],
  },
  {
    title: 'Models',
    items: [
      { title: 'LoRA fine-tuning', href: gh('BMW_LLMs_Finetuning'), meta: { en: 'Personal project, 2026', ko: '개인 프로젝트, 2026' },
        text: { en: 'GPT-2 Large on crawled BMW press releases, training 0.38% of the weights. NLL fell 23.3%.', ko: '수집한 BMW 보도자료로 GPT-2 Large를 학습. 전체 weight의 0.38%만 학습해 NLL을 23.3% 낮췄습니다.' } },
      { title: 'MRI motion correction', meta: { en: 'Siemens Healthineers, 2021', ko: 'Siemens Healthineers, 2021' },
        text: { en: 'Respiratory motion correction for free-breathing abdominal diffusion-weighted MRI. PSNR up 10.6%, SSIM up 5.7%.', ko: 'Free-breathing 복부 diffusion-weighted MRI의 호흡 motion correction. PSNR 10.6%, SSIM 5.7% 향상.' } },
      { title: 'Natural image super-resolution', meta: { en: 'The Catholic University of Korea, 2017', ko: '가톨릭대학교, 2017' },
        text: { en: 'Real-time image enhancement and upscaling, published in the Journal of IEIE.', ko: '실시간 image enhancement와 upscaling 방법. 대한전자공학회 논문지 게재.' } },
    ],
  },
  {
    title: 'Full-stack and automation',
    items: [
      { title: 'Contract operations platform', meta: { en: 'Client work, 2026. Python, Flask, PostgreSQL, Apache Superset, Android, Firebase, Docker, AWS (ECS Fargate, RDS, S3, ALB, Secrets Manager, CDK)', ko: '고객 프로젝트, 2026. Python, Flask, PostgreSQL, Apache Superset, Android, Firebase, Docker, AWS (ECS Fargate, RDS, S3, ALB, Secrets Manager, CDK)' },
        text: { en: 'Moved 1,000+ contracts from spreadsheets into a PostgreSQL model, cutting manual search time by 80%. Staff enter contracts, devices and maintenance logs in a Flask portal; technicians use an Android field app with push notifications; dashboards are defined in code on a read-only database role. Deployed to AWS with CDK behind a release gate that reruns the full test suite.', ko: '스프레드시트의 계약 1,000건 이상을 PostgreSQL 모델로 옮겨 수동 검색 시간을 80% 줄였습니다. 직원은 Flask portal에서 계약·기기·유지보수 일지를 입력하고, 기술자는 push 알림이 오는 Android 현장 앱을 씁니다. Dashboard는 read-only DB role 위에 코드로 정의했습니다. 전체 test suite를 다시 도는 release gate를 거쳐 AWS CDK로 배포합니다.' } },
      { title: 'Blog automation', href: gh('BlogAutomation'), meta: open,
        text: { en: 'Drafts posts with OpenAI, keeps Notion as the editorial database and publishes to Webflow.', ko: 'OpenAI로 글을 쓰고, Notion을 편집 DB로 두고, Webflow에 게시하는 pipeline.' } },
    ],
  },
];
