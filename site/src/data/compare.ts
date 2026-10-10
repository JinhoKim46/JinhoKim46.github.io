import type { T } from '../i18n';

export type Mode = 'all' | 'p12' | 'p23' | 'p13';

export interface Layer {
  name: string;
  cor: string;
  sag?: string;
  acq: T;
  time: T;
  train?: T;
}

export interface CompareCase {
  id: 'zs' | 'dl' | 'seg';
  label: T;
  caption: T;
  /** width / height of each view; sagittal shown only when present */
  corRatio: [number, number];
  sagRatio?: [number, number];
  layers: Layer[];
  /** default comparison: mode and divider positions in % */
  start: { mode: Mode; a: number; b: number };
}

// Rules: documents/rules/figures.md. Files: documents/sources/figures/README.md.
export const compareCases: CompareCase[] = [
  {
    id: 'zs',
    label: { en: 'Zero-shot breath-hold', ko: 'Zero-shot breath-hold' },
    caption: {
      en: 'Cropped coronal MIP of one volunteer at 3 T. PI-RT is a separate respiratory-triggered scan, so anatomy shifts slightly. Training times are 11-volunteer averages. Kim et al., Magnetic Resonance in Medicine 2026.',
      ko: '3 T에서 촬영한 한 피험자의 관상면 MIP(확대). PI-RT는 호흡 동기로 따로 촬영한 영상이라 위치가 조금 다릅니다. 학습 시간은 11명 평균입니다. Kim et al., Magnetic Resonance in Medicine 2026.',
    },
    corRatio: [508, 387],
    start: { mode: 'p13', a: 50, b: 50 },
    layers: [
      {
        name: 'PI-RT', cor: '/media/zs_pirt_cor.png',
        acq: { en: 'GRAPPA, R = 3, respiratory-triggered', ko: 'GRAPPA, R = 3, 호흡 동기' },
        time: { en: 'Free-breathing, 338 s', ko: '자유 호흡, 338초' },
        train: { en: 'No training', ko: '학습 없음' },
      },
      {
        name: 'ZS-BH (base)', cor: '/media/zs_base_cor.png',
        acq: { en: 'Zero-shot, R = 25, all 13 stages trained', ko: 'Zero-shot, R = 25, 13단계 전체 학습' },
        time: { en: 'Single breath-hold, 14 s', ko: '1회 호흡정지, 14초' },
        train: { en: 'Training 136 min (avg.)', ko: '학습 136분 (평균)' },
      },
      {
        name: 'ZS-BH (proposed)', cor: '/media/zs_proposed_cor.png',
        acq: { en: 'Zero-shot, R = 25, 12 frozen + 1 trained', ko: 'Zero-shot, R = 25, 12단계 고정 + 1단계 학습' },
        time: { en: 'Single breath-hold, 14 s', ko: '1회 호흡정지, 14초' },
        train: { en: 'Training 20 min (avg.)', ko: '학습 20분 (평균)' },
      },
    ],
  },
  {
    id: 'dl',
    label: { en: 'Accelerated MRCP', ko: '가속 MRCP' },
    caption: {
      en: 'One volunteer at 3 T, prospectively undersampled at 2× and 6×. Cropped coronal MIP. Acquisition times are study averages. Kim et al., NMR in Biomedicine 2025.',
      ko: '3 T에서 2배, 6배로 전향적 언더샘플링해 촬영한 한 피험자의 관상면 MIP(확대). 촬영 시간은 연구 전체 평균입니다. Kim et al., NMR in Biomedicine 2025.',
    },
    corRatio: [502, 423],
    start: { mode: 'p13', a: 50, b: 50 },
    layers: [
      {
        name: 'GRAPPA ×2', cor: '/media/dl_grappa2x_cor.png',
        acq: { en: 'Clinical standard, R = 2', ko: '임상 표준, R = 2' },
        time: { en: 'Average 599 s', ko: '평균 599초' },
        train: { en: 'No training', ko: '학습 없음' },
      },
      {
        name: 'GRAPPA ×6', cor: '/media/dl_grappa6x_cor.png',
        acq: { en: 'Parallel imaging, R = 6', ko: '병렬 영상, R = 6' },
        time: { en: 'Average 255 s', ko: '평균 255초' },
        train: { en: 'No training', ko: '학습 없음' },
      },
      {
        name: 'DL ×6 (SV)', cor: '/media/dl_sv6x_cor.png',
        acq: { en: 'Unrolled network, R = 6', ko: 'Unrolled network, R = 6' },
        time: { en: 'Average 255 s', ko: '평균 255초' },
        train: { en: 'Supervised training', ko: 'Supervised 학습' },
      },
    ],
  },
  {
    id: 'seg',
    label: { en: 'Segmentation MIP', ko: '분할 기반 MIP' },
    caption: {
      en: 'Coronal and sagittal MIP of one patient at 3 T, original and proposed (after nnU-Net based suppression). Scores from two radiologists over 35 cases, 4-point scale. Kim, Werner et al., MAGMA 2026.',
      ko: '3 T 환자 한 명의 관상면·시상면 MIP, nnU-Net 기반 배경 제거 전후. 점수는 영상의학과 전문의 2명이 35건을 4점 척도로 평가한 결과입니다. Kim, Werner et al., MAGMA 2026.',
    },
    corRatio: [525, 387],
    sagRatio: [91, 387],
    start: { mode: 'p12', a: 50, b: 100 },
    layers: [
      {
        name: 'Original MIP', cor: '/media/seg_original_cor.png', sag: '/media/seg_original_sag.png',
        acq: { en: 'Standard projection', ko: '기존 투영' },
        time: { en: 'Structure overlap 2.5 ± 0.6', ko: '구조 중첩 점수 2.5 ± 0.6' },
      },
      {
        name: 'Proposed MIP', cor: '/media/seg_segmented_cor.png', sag: '/media/seg_segmented_sag.png',
        acq: { en: 'nnU-Net segmentation before projection', ko: '투영 전 nnU-Net 분할' },
        time: { en: 'Structure overlap 3.5 ± 0.9', ko: '구조 중첩 점수 3.5 ± 0.9' },
      },
    ],
  },
];
