import type { T } from '../i18n';

// Each item has the same three lines:
// meta   = when · who it was for (client, company, team, or personal)
// status = how it exists today (one badge, from a fixed set)
// stack  = the technologies that matter for the work
export interface Project {
  title: string;
  text: T;
  meta: T;
  href?: string;
  status: T;
  stack: string[];
}

const gh = (repo: string) => `https://github.com/JinhoKim46/${repo}`;
const same = (s: string): T => ({ en: s, ko: s });

const production = { en: 'In production', ko: '운영 중' };
const openSource = { en: 'Open source', ko: '오픈소스' };
const claudeSkill = { en: 'Claude skill', ko: 'Claude skill' };
const claudePlugin = { en: 'Claude Code plugin', ko: 'Claude Code plugin' };

export const groups: { title: string; items: Project[] }[] = [
  {
    title: 'Agentic AI',
    items: [
      { title: 'MILO', meta: { en: '2026 · Turing College AI Engineering, Sprint 2', ko: '2026 · Turing College AI Engineering, Sprint 2' },
        status: { en: 'Private repo', ko: '비공개 repo' }, stack: ['Python', 'Flask', 'RAG', 'Chroma', 'Supabase PostgreSQL', 'OpenRouter', 'Claude Sonnet'],
        text: { en: 'An app that listens to a business owner\'s story, diagnoses the workflow, and proposes which parts to automate. Built end to end: the owner talks with an AI assistant, every fact is stored with the quote it came from, and on submit it produces a report with the current process, automation candidates, recommended modules, an indicative cost range and next steps. Dense RAG over the knowledge base, Supabase PostgreSQL with row-level security, a Flask app, and Claude Sonnet as the product model.', ko: '고객의 비즈니스 이야기를 듣고 워크플로우를 진단해, 자동화할 수 있는 부분과 그 제안을 만드는 앱을 혼자 end-to-end로 구현함. 사업자는 AI 어시스턴트와 대화하고, 모든 사실은 근거 문장과 함께 저장됨. 제출하면 현재 프로세스, 자동화 후보, 추천 모듈, 예상 비용 범위, 다음 단계를 담은 보고서를 만듦. 지식 베이스에 dense RAG를, 데이터에 RLS가 적용된 Supabase PostgreSQL을, 웹에 Flask를 쓰고 제품 모델은 Claude Sonnet임.' } },

      { title: 'Interview Helper', href: gh('TC_AE_Sprint1_Interview_helper'), meta: { en: '2026 · Turing College AI Engineering', ko: '2026 · Turing College AI Engineering' },
        status: openSource, stack: ['LLM', 'OpenRouter', 'Streamlit'],
        text: { en: 'Mock interviews built from a real job ad and CV. Models ask and judge; code counts, weights and decides the score, and every input passes an injection guard.', ko: '실제 job description과 CV로 mock interview를 진행하도록 구현함. 질문과 평가는 모델이, 점수 계산은 코드가 맡고, 모든 입력은 injection guard를 거치도록 함.' } },

      { title: 'route-work', href: gh('route-work'), meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: claudeSkill, stack: ['Claude Code', 'Agent skills'],
        text: { en: 'A Claude Code skill that sizes a coding request and routes it through the right skills, issues and PRs.', ko: '코딩 요청의 규모를 판단해 알맞은 skill과 issue·PR 흐름으로 보내도록 구현함.' } },

      { title: 'code-flow-report', href: gh('code-flow-report'), meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: claudePlugin, stack: ['Claude Code', 'Python', 'AST'],
        text: { en: 'A Claude Code plugin that traces a Python codebase call by call. Every claim is re-checked against the AST on each build.', ko: 'Python 코드베이스를 호출 단위로 추적하는 Claude Code plugin을 구현함. 모든 설명은 빌드할 때마다 AST로 다시 검증함.' } },

      { title: 'Laya vs JEV', href: gh('laya-vs-jev'), meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: { en: 'Exploratory benchmark', ko: '실험적 벤치마크' }, stack: ['Laya', 'Fine-tuning', 'JEV', 'OpenRouter', 'PyTorch', 'GPU'],
        text: { en: 'Exploratory run, not a formal benchmark: Laya vs JEV on 16 support tickets. Fine-tuned Laya beat JEV on urgency and churn risk; Laya on GPU took about 12 ms per request against about 250 ms for JEV, roughly 20 times faster.', ko: '정식 벤치마크가 아닌 실험적 실행임. 지원 ticket 16건으로 Laya와 JEV를 비교함. fine-tuned Laya가 긴급도와 이탈 위험에서 JEV를 앞섰고, GPU에서는 요청당 약 12ms로 JEV의 약 250ms보다 약 20배 빨랐음.' } },
        
      { title: 'LoRA fine-tuning', href: gh('BMW_LLMs_Finetuning'), meta: { en: '2026 · Personal project', ko: '2026 · 개인 프로젝트' },
        status: openSource, stack: ['Fine-tuning', 'LoRA', 'GPT-2 Large', 'LLM'],
        text: { en: 'GPT-2 Large on crawled BMW press releases, training 0.38% of the weights. NLL fell 23.3%.', ko: '수집한 BMW 보도자료로 GPT-2 Large를 LoRA로 학습함. 전체 weight의 0.38%만 학습해 NLL을 23.3% 낮춤.' } },

      { title: 'Adversarial unit test generator', meta: same('2025 · Hackbay, team lead'),
        status: { en: 'Hackathon', ko: '해커톤' }, stack: ['VS Code extension', 'Multi-agent', 'LLM'],
        text: { en: 'A VS Code extension in which a generator agent and a checker agent compete adversarially to write unit tests. Built with a team of four in 48 hours: tests 90% faster, coverage up to 74% higher.', ko: 'Generator agent와 checker agent가 서로 적대적으로 경쟁하며 unit test를 작성하는 VS Code extension을 팀 4명과 48시간 만에 만듦. 테스트 작성 속도 90% 향상, coverage 최대 74% 향상.' } },
    ],
  },
  {
    title: 'ML infrastructure',
    items: [
      { title: 'Slurm + Ray', href: gh('Distributed-training-for-multiple-configurations'), meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: openSource, stack: ['Slurm', 'Ray', 'GPU'],
        text: { en: 'Schedules 20 training runs inside one Slurm job. In a 20-configuration demo, GPU idle time fell 63% and blocked time 91% against array jobs.', ko: 'Slurm job 하나에 학습 20개를 배정해 실행함. 20개 설정 데모에서 array job 대비 GPU idle time을 63%, blocked time을 91% 줄임.' } },
        
      { title: 'MLflow and cost dashboard', meta: { en: '2026 · BMW Group', ko: '2026 · BMW Group' },
        status: { en: 'Internal tool', ko: '사내 도구' }, stack: ['MLflow', 'AWS', 'Grafana'],
        text: { en: 'Self-hosted MLflow on AWS ECS, RDS and S3 for about 30 users from 8 projects, with a Grafana dashboard for AI workload cost.', ko: 'AWS ECS, RDS, S3 위에 MLflow를 self-hosting해 8개 프로젝트의 약 30명이 쓰도록 구성함. AI workload 비용을 보는 Grafana dashboard도 함께 만듦.' } },
        
      { title: 'Distributed training', meta: { en: '2021–2026 · Siemens Healthineers / FAU', ko: '2021–2026 · Siemens Healthineers / FAU' },
        status: { en: 'In research', ko: '연구에 사용' }, stack: ['DGX', 'Kubernetes', 'Docker', 'Slurm'],
        text: { en: 'Scaled MRI reconstruction training on DGX (Kubernetes, Docker) and Slurm during PhD research, cutting end-to-end training time by 25%.', ko: '박사과정 중 DGX(Kubernetes, Docker)와 Slurm으로 MRI 재구성 모델을 분산 학습하도록 구성해 전체 학습 시간을 25% 줄임.' } },
    ],
  },
  {
    title: 'Full-stack development',
    items: [
      { title: 'Contract operations platform', meta: { en: '2026 · Project for an SME', ko: '2026 · 중소기업 프로젝트' },
        status: production, stack: ['Claude Code', 'PostgreSQL', 'Flask', 'Android', 'AWS CDK', 'Anthropic SDK', 'RAG', 'Titan Embeddings V2', 'Hybrid search', 'LLM'],
        text: { en: 'Structured fragmented business records into a PostgreSQL database, with a Flask web app and an Android client on top. A deterministic pipeline turns daily operational data into management reports. Added a retrieval chatbot over live records: keyword and vector search run side by side and merge into one candidate pool, and the assistant queries through a read-only database role. Infrastructure is defined with AWS CDK. Raised answer accuracy from a first measurement of 48% to 99% through a 12-round improvement loop. Built with Claude Code, and operated end to end.', ko: '업무 자료 조각을 PostgreSQL DB로 정형화하고, 그 위에 Flask 웹 앱과 Android 클라이언트를 만듦. 매일 쌓이는 운영 데이터는 결정적 파이프라인이 경영 보고서로 만듦. 운영 기록을 검색해 답하는 챗봇을 추가함. 키워드 검색과 벡터 검색을 나란히 돌려 후보 하나로 합치고, 비서는 읽기 전용 DB 권한으로만 조회함. 인프라는 AWS CDK로 정의함. 12라운드 개선 루프로 답변 정확도를 첫 측정 48%에서 최종 99%까지 높임. Claude Code로 직접 만들고 운영까지 맡고 있음.' } },
    ],
  },
];
