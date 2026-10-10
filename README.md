# jinhokim46.github.io

Jinho Kim의 개인 사이트 소스입니다. MRI reconstruction 연구와 ML engineering을 영어와 한국어로 소개합니다.

라이브 사이트: <https://jinhokim46.github.io>

## 목차

- [개요](#개요)
- [프로젝트 구조](#프로젝트-구조)
- [로컬 개발 환경](#로컬-개발-환경)
- [콘텐츠 수정 가이드](#콘텐츠-수정-가이드)
- [이미지(figure) 추가·교체](#이미지figure-추가교체)
- [배포](#배포)
- [배포 확인 및 문제 해결](#배포-확인-및-문제-해결)
- [참고](#참고)

## 개요

| 항목 | 내용 |
|---|---|
| 프레임워크 | Astro 5 (정적 사이트) |
| 스타일 | Tailwind CSS 4 (`@tailwindcss/vite`) |
| 콘텐츠 | MDX (case study), TypeScript 데이터 파일 |
| 기타 | `@astrojs/sitemap` |
| 다국어 | 영어가 기본(prefix 없음), 한국어는 `/ko/` 아래 |
| 호스팅 | GitHub Pages, GitHub Actions로 자동 배포 |
| 저장소 | `git@github.com:JinhoKim46/JinhoKim46.github.io.git` (branch `main`) |

구성은 홈 페이지 하나(`site/src/views/Home.astro`)와 case study 페이지들입니다. `main`에 push하면 GitHub Actions가 빌드와 배포를 자동으로 수행합니다.

## 프로젝트 구조

```text
.
├── .github/workflows/deploy.yml   # 배포 workflow (push to main 시 실행)
├── documents/                     # 로컬 전용 작업 문서 (gitignore, 저장소에 없음)
│   ├── publications/
│   ├── rules/
│   └── sources/figures/           # figure 원본 (여기서 site/public/media로 복사)
└── site/                          # Astro 프로젝트 (npm 명령은 여기서 실행)
    ├── scripts/sync-sources.mjs   # documents의 figure를 public/media로 복사
    ├── public/media/              # 사이트가 실제로 쓰는 이미지 (커밋 대상)
    ├── src/
    │   ├── config.ts              # 프로필, 소개 문구, 연락처 링크
    │   ├── data/
    │   │   ├── about.ts           # About / timeline
    │   │   ├── engineering.ts     # Engineering 섹션
    │   │   ├── papers.ts          # Papers 목록
    │   │   └── compare.ts         # 비교 슬라이더 (cases, layers, captions)
    │   ├── content/research/
    │   │   ├── en/*.mdx           # case study (영어)
    │   │   └── ko/*.mdx           # case study (한국어, 같은 slug)
    │   ├── views/                 # Home.astro, CaseStudy.astro
    │   ├── components/            # Compare, ContactBlock, PaperList, SectionTitle
    │   ├── layouts/Base.astro
    │   ├── styles/global.css
    │   └── pages/                 # 얇은 route 파일 (index, ko/, research/[slug])
    ├── astro.config.mjs
    └── package.json
```

`documents/`는 `.gitignore`에 포함되어 있어 GitHub에 올라가지 않습니다. 이 폴더 안에서만 한 수정은 배포되지 않고 git에도 나타나지 않습니다.

## 로컬 개발 환경

### 요구사항

- Node.js v22 (로컬 환경 기준)
- npm
- git (GitHub 접근용 SSH 키 설정)
- 선택: `gh` CLI (배포 상태 확인용)

### 설치

```bash
cd site
npm install
```

### 실행

모든 명령은 `site/` 안에서 실행합니다.

| 명령 | 동작 |
|---|---|
| `npm run dev` | sync 후 개발 서버 실행 (http://localhost:4321) |
| `npm run build` | sync 후 정적 빌드, 결과는 `site/dist` |
| `npm run preview` | 빌드 결과(`dist`)를 http://localhost:4321 에서 확인 |
| `npm run check` | `astro check` (타입/콘텐츠 검사) |
| `npm run sync` | figure 복사만 단독 실행 |

```bash
cd site
npm run dev
```

개발 서버가 켜져 있으면 파일을 저장할 때마다 브라우저에 반영됩니다.

## 콘텐츠 수정 가이드

### 무엇을 어디서 고치는가

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이메일, 역할(role), 소속(affiliation), 소개 문구(EN/KO), 연락처 링크 | `site/src/config.ts` |
| About / timeline | `site/src/data/about.ts` |
| Engineering 섹션 | `site/src/data/engineering.ts` |
| Papers 목록 | `site/src/data/papers.ts` |
| 비교 슬라이더 (case, layer, caption, 기본 비교 설정) | `site/src/data/compare.ts` |
| Case study 페이지 본문 | `site/src/content/research/{en,ko}/*.mdx` |
| 홈 페이지 레이아웃 | `site/src/views/Home.astro` |
| Case study 페이지 레이아웃 | `site/src/views/CaseStudy.astro` |
| 공용 컴포넌트 | `site/src/components/` (`Compare.astro`, `ContactBlock.astro`, `PaperList.astro`, `SectionTitle.astro`) |
| 공통 레이아웃, 전역 스타일 | `site/src/layouts/Base.astro`, `site/src/styles/global.css` |
| route | `site/src/pages/` (`index.astro`, `ko/`, `research/[slug].astro`는 얇은 연결 파일이라 보통 수정하지 않습니다) |

### 수정 규칙

- 텍스트 필드는 `{ en, ko }` 형태의 bilingual object입니다. 화면에 보이는 모든 문자열은 두 언어 모두 있어야 합니다.
- Case study는 언어별로 파일이 하나씩이며, `en/`과 `ko/`에서 같은 slug(파일명)를 사용합니다. 한쪽을 고치면 다른 쪽도 함께 확인합니다.
- 숫자와 단위 사이에는 non-breaking space를 넣습니다. 예: `3 T`, `599 s`, `R = 25`.
- 논문 제목, 저자, 학회/저널명은 두 언어 모두 영어로 유지합니다.
- 박사 학위 취득 후에는 `site/src/config.ts`의 `affiliation`(코드 주석: "Change after the defense")을 수정합니다.

### 비교 슬라이더 기본값

`site/src/data/compare.ts`의 기본 비교 설정은 `start: { mode, a, b }` 형태입니다.

- `mode`: 어떤 layer끼리 비교할지 정합니다. `'all'`, `'p12'`, `'p23'`, `'p13'` 중 하나입니다.
- `a`, `b`: 구분선(divider)의 위치이며 단위는 %입니다.

### 수정 후 확인

저장한 뒤 `npm run dev`로 EN과 KO(`/ko/`) 페이지를 모두 확인합니다. 배포 전에는 `npm run build`가 통과해야 합니다.

## 이미지(figure) 추가·교체

사이트는 `site/public/media/`의 이미지만 읽습니다. 원본은 로컬 전용 폴더에 있고, 이 폴더는 git에 올라가지 않으므로 순서가 중요합니다.

- 원본 위치: `documents/sources/figures/` (gitignore)
- `sync-sources.mjs`는 이 폴더를 `site/public/media/`로 복사합니다. 복사 전에 `public/media/`를 먼저 비우며, `*.md`, `legacy_*`, `mip_cover*`, `zs_*_sag*`는 제외합니다.
- CI에는 `documents/`가 없으므로, CI는 저장소에 커밋된 `site/public/media/`를 그대로 사용합니다.

따라서 figure를 바꿀 때는 아래 순서를 따릅니다.

1. 이미지를 `documents/sources/figures/`에 추가하거나 교체합니다.
2. 로컬에서 `npm run dev` 또는 `npm run build`를 실행해 `site/public/media/`를 갱신합니다.

   ```bash
   cd site
   npm run build
   ```

3. `compare.ts`나 `.mdx`에서 새 파일명을 참조하도록 수정합니다.
4. `git status`로 `site/public/media/`의 변경을 확인하고, 이 변경도 반드시 커밋합니다. 커밋하지 않으면 라이브 사이트에서 이미지가 보이지 않습니다.

## 배포

배포는 "커밋 후 `main`에 push"가 전부입니다. `.github/workflows/deploy.yml`이 `main`에 push될 때마다 자동 실행됩니다. Actions 탭에서 `workflow_dispatch`로 수동 실행도 가능합니다.

Workflow는 두 job으로 구성됩니다.

- `build`: `withastro/action`으로 `site/`를 빌드합니다 (`path: site`).
- `deploy`: `actions/deploy-pages`로 GitHub Pages에 게시합니다.

### 단계별 절차

1. 로컬에서 빌드가 통과하는지 확인합니다. 필수입니다.

   ```bash
   cd site
   npm run build
   ```

2. (선택) 빌드 결과를 미리 봅니다.

   ```bash
   npm run preview   # http://localhost:4321
   ```

3. 변경 사항을 확인합니다. figure를 바꿨다면 `site/public/media/`가 목록에 있어야 합니다.

   ```bash
   cd ..
   git status
   ```

4. 스테이징하고 커밋합니다.

   ```bash
   git add -A          # 또는 필요한 경로만 지정
   git commit -m "Update papers list"
   ```

5. `main`에 push합니다.

   ```bash
   git push origin main
   ```

6. GitHub Actions가 끝날 때까지 기다립니다 (아래 "배포 확인" 참고). 보통 1~2분 걸립니다.

## 배포 확인 및 문제 해결

### 배포 확인

- 브라우저에서 <https://github.com/JinhoKim46/JinhoKim46.github.io/actions> 를 열어 최신 run이 초록색(성공)이 될 때까지 확인합니다.
- `gh` CLI가 설치되어 있다면 터미널에서도 확인할 수 있습니다.

  ```bash
  gh run list
  gh run watch
  ```

- 성공하면 약 1~2분 안에 <https://jinhokim46.github.io> 에 반영됩니다. 브라우저 캐시 때문에 이전 화면이 보이면 강력 새로고침(hard refresh)을 합니다.

### 문제 해결

| 증상 | 원인과 조치 |
|---|---|
| Actions에서 build 실패 | 로컬에서 `cd site && npm run build`를 실행해 같은 오류를 재현하고 수정합니다. |
| 라이브 사이트에서 이미지가 보이지 않음 | `site/public/media/`를 커밋하지 않았을 가능성이 큽니다. [이미지 절차](#이미지figure-추가교체)를 다시 확인하고 커밋 후 push합니다. |
| 수정했는데 사이트가 그대로임 | 브라우저 캐시이거나 workflow가 아직 실행 중입니다. Actions 탭에서 완료를 확인한 뒤 강력 새로고침합니다. |
| workflow는 성공했는데 페이지가 게시되지 않음 | 저장소 Settings → Pages에서 Source가 "GitHub Actions"로 설정되어 있는지 확인합니다. |

## 참고

- `documents/` 안의 작업만 수정한 경우(rules, content-plan, sources 등)에는 배포되지 않으며 git에도 나타나지 않습니다.
- 저장소가 public이므로 `site/` 안에는 공개해도 되는 내용만 넣습니다.
- 빌드 결과 `site/dist`는 생성물이므로 직접 수정하지 않습니다.
