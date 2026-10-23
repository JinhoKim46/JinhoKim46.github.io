import type { T } from "../i18n";

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

const production = { en: "In production", ko: "운영 중" };
const openSource = { en: "Open source", ko: "오픈소스" };
const claudeSkill = { en: "Claude skill", ko: "Claude skill" };
const claudePlugin = { en: "Claude Code plugin", ko: "Claude Code plugin" };
const publicRepo: T = { en: "Public repository", ko: "공개 저장소"};

export const groups: { title: string; items: Project[] }[] = [
  {
    title: "AI Systems & LLM Engineering",
    items: [
      {
        title: 'MILO',
        href: gh('TC_AE_Sprint2_MILO'),
        meta: {
          en: '2026 · Turing College AI Engineering, Sprint 2',
          ko: '2026 · Turing College AI Engineering, Sprint 2'
        },
        status: openSource,
        stack: [
          'Python', 'Flask', 'RAG', 'Chroma',
          'Supabase PostgreSQL', 'OpenRouter',
          'Claude Sonnet', 'Pydantic'
        ],
        text: {
          en: 'Built an evidence-grounded AI assistant that interviews business owners, extracts structured requirements, and proposes workflow automation with rule-based cost estimates. Implemented RAG, fact verification, and security evaluation.',
          ko: '사업자와 대화하며 업무 요구사항을 구조화하고 자동화 방안과 규칙 기반 비용 견적을 제안하는 AI 시스템을 구축함. RAG, 정보 근거 검증, 보안 평가 체계를 구현함.'
        }
      },
      {
        title: 'Interview Helper',
        href: gh('TC_AE_Sprint1_Interview_helper'),
        meta: {
          en: '2026 · Turing College AI Engineering, Sprint 1',
          ko: '2026 · Turing College AI Engineering, Sprint 1'
        },
        status: openSource,
        stack: [
          'Python', 'Streamlit', 'OpenRouter',
          'LLM-as-a-Judge', 'STT/TTS',
          'Pydantic', 'Prompt Injection Defense'
        ],
        text: {
          en: 'Built a JD/CV-grounded mock interview app supporting text and voice. LLMs conduct interviews and evaluate answers, while deterministic code handles rubric scoring, evidence verification, and prompt-injection safeguards.',
          ko: 'JD와 CV에 기반한 텍스트·음성 모의 면접 앱을 개발함. LLM이 면접 진행과 답변 평가를 담당하고, 코드 기반으로 평가 점수 계산, 답변 근거 검증, 프롬프트 인젝션 방어를 구현함.'
        }
      },

      {
        title: "route-work",
        href: gh("route-work"),
        meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: claudeSkill,
        stack: [
          "Claude Code",
          "Agent Skills",
          "GitHub",
          "TDD",
        ],
        text: {
          en: "Built a Claude Code skill that routes coding tasks by complexity through specification, TDD, GitHub Issues, parallel implementation, and reviewed PRs.",
          ko: "개발 요청의 복잡도에 따라 명세 작성, TDD, GitHub Issues, 병렬 구현 및 PR 리뷰를 연결하는 Claude Code skill을 개발함.",
        },
      },

      {
        title: "code-flow-report",
        href: gh("code-flow-report"),
        meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: claudePlugin,
        stack: [
          "Claude Code",
          "Python",
          "AST",
          "Static Analysis",
          "HTML",
        ],
        text: {
          en: "Built a Claude Code plugin that generates interactive code-flow reports from Python AST analysis. Traces execution paths and validates referenced symbols against source code on every build.",
          ko: "Python AST 분석으로 실행 흐름을 추적하고 인터랙티브 코드 분석 보고서를 생성하는 Claude Code plugin을 개발함. 빌드마다 참조된 코드 심볼을 소스와 대조해 검증함.",
        },
      },

      {
        title: "Laya vs JEV",
        href: gh("laya-vs-jev"),
        meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: { en: "Exploratory benchmark", ko: "실험적 벤치마크" },
        stack: [
          "Laya",
          "JEV",
          "Fine-tuning",
          "PyTorch",
          "GPU",
          "OpenRouter",
        ],
        text: {
          en: "Compared local and API-based decision models on 16 labeled tickets. Fine-tuned Laya reached 94% urgency accuracy versus JEV's 69%, with ~12 ms GPU inference versus ~250 ms API latency including network overhead.",
          ko: "16개 라벨링 사례로 로컬·API 기반 결정 모델을 비교함. Fine-tuned Laya는 긴급도 정확도 94%(JEV 69%)를 달성했으며, GPU 추론 약 12ms와 네트워크 포함 API 응답 약 250ms를 측정함.",
        },
      },

      {
        title: "LoRA fine-tuning",
        href: gh("BMW_LLMs_Finetuning"),
        meta: { en: "2026 · Personal project", ko: "2026 · 개인 프로젝트" },
        status: openSource,
        stack: [
          "Python",
          "PyTorch",
          "LoRA",
          "GPT-2 Large",
          "Hugging Face",
        ],
        text: {
          en: "Built a data pipeline to crawl BMW press releases and fine-tune GPT-2 Large with LoRA. Trained only 0.38% of model parameters while reducing negative log-likelihood by 23.3%.",
          ko: "BMW 보도자료 수집부터 GPT-2 Large의 LoRA 미세조정까지 데이터·학습 파이프라인을 구축함. 전체 파라미터의 0.38%만 학습해 NLL을 23.3% 감소시킴.",
        },
      },

      {
        title: "Adversarial unit test generator",
        meta: same("2025 · Hackbay, team lead"),
        status: { en: "Hackathon", ko: "해커톤" },
        stack: [
          "VS Code Extension",
          "Multi-agent",
          "LLM",
          "Test Automation",
        ],
        text: {
          en: "Led a four-person team to build a VS Code extension where generator and checker agents collaborate adversarially on unit tests. In a 48-hour hackathon, reduced test-writing time by 90% and improved coverage by up to 74%.",
          ko: "4인 팀을 이끌며 테스트 생성·검증 에이전트가 적대적으로 협업하는 VS Code extension을 48시간 해커톤에서 개발함. 테스트 작성 시간을 90% 단축하고 coverage를 최대 74% 향상시킴.",
        },
      },
    ],
  },


  // =====================================================
  // ML INFRASTRUCTURE
  // =====================================================
  {
    title: "ML infrastructure",
    items: [
      {
        title: "Slurm + Ray",
        href: gh("Distributed-training-for-multiple-configurations"),
        meta: { en: `2026 · Personal project`, ko: `2026 · 개인 프로젝트` },
        status: publicRepo,
        stack: [
          "Slurm",
          "Ray",
          "Python",
          "GPU",
          "Distributed Training",
        ],
        text: {
          en: "Integrated Ray with Slurm to dynamically schedule multiple GPU training configurations within a single job. In a 20-configuration demo, reduced GPU idle time by 63% and blocked time by 91% versus array jobs.",
          ko: "Slurm 단일 작업 내에서 Ray로 다수의 GPU 학습 설정을 동적 스케줄링함. 20개 설정 데모에서 array job 대비 GPU 유휴 시간을 63%, blocked time을 91% 감소시킴.",
        },
      },

      {
        title: "MLflow and cost dashboard",
        meta: { en: "2026 · BMW Group", ko: "2026 · BMW Group" },
        status: { en: "Internal tool", ko: "사내 도구" },
        stack: [
          "MLflow",
          "AWS ECS",
          "AWS RDS",
          "Amazon S3",
          "Grafana",
        ],
        text: {
          en: "Deployed a self-hosted MLflow platform on AWS ECS, RDS, and S3 for approximately 30 users across 8 projects. Built a Grafana dashboard to monitor AI workload costs.",
          ko: "AWS ECS, RDS, S3 기반의 MLflow 플랫폼을 구축해 8개 프로젝트, 약 30명이 사용하도록 지원함. AI 워크로드 비용 모니터링을 위한 Grafana 대시보드도 개발함.",
        },
      },

      {
        title: "Distributed training",
        meta: {
          en: "2021–2026 · Siemens Healthineers / FAU",
          ko: "2021–2026 · Siemens Healthineers / FAU",
        },
        status: { en: "In research", ko: "연구에 사용" },
        stack: [
          "NVIDIA DGX",
          "Kubernetes",
          "Docker",
          "Slurm",
          "PyTorch",
        ],
        text: {
          en: "Scaled deep learning-based MRI reconstruction training using DGX, Kubernetes, Docker, and Slurm. Optimized distributed training workflows, reducing end-to-end training time by 25%.",
          ko: "DGX, Kubernetes, Docker, Slurm을 활용해 딥러닝 MRI 재구성 모델의 분산 학습 환경을 구축·최적화함. 전체 학습 시간을 25% 단축함.",
        },
      },
    ],
  },


  // =====================================================
  // FULL-STACK DEVELOPMENT
  // =====================================================
  {
    title: "Full-stack development",
    items: [
      {
        title: "Contract & Field Operations Platform",
        meta: {
          en: "2026 · Freelance Client Project",
          ko: "2026 · 기업 외주 개발",
        },
        status: production,
        stack: [
          "Python",
          "Flask",
          "PostgreSQL",
          "Android",
          "AWS ECS/RDS/CDK",
          "Anthropic SDK",
          "RAG",
          "Hybrid Search",
          "Titan Embeddings V2",
        ],
        text: {
          en: "Built and deployed an AWS-hosted business operations platform integrating contract, sales, asset, and field-service workflows across Flask and Android. Designed a centralized PostgreSQL database and hybrid-search RAG assistant, improving answer accuracy from 48% to 99% over 12 evaluation rounds.",
          ko: "계약·영업·장비·현장 업무를 통합하는 AWS 기반 기업 운영 플랫폼을 구축·배포함. Flask 웹 포털과 Android 앱, PostgreSQL 통합 DB를 설계하고 Hybrid Search 기반 RAG 챗봇의 답변 정확도를 12차례 평가·개선하여 48%에서 99%로 향상시킴.",
        },
      },
    ],
  },
];
