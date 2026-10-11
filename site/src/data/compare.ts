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
  /** research page slug (/research/<slug>) */
  slug: string;
  label: T;
  caption: T;
  /** abbreviations listed under the caption; full names come from data/glossary.ts */
  gloss: string[];
  /** width / height of each view; sagittal shown only when present */
  corRatio: [number, number];
  sagRatio?: [number, number];
  layers: Layer[];
  /** default comparison: mode and divider positions in % */
  start: { mode: Mode; a: number; b: number };
  // Which legend lines to highlight for each pairwise comparison; 'all' highlights the union per layer.
  emphasis: Partial<Record<'p12' | 'p23' | 'p13', ('acq' | 'time' | 'train')[]>>;
}

// Rules: documents/rules/figures.md. Files: documents/sources/figures/README.md.
export const compareCases: CompareCase[] = [
  {
    id: 'zs',
    slug: 'zero-shot-breath-hold-mrcp',
    emphasis: { p12: ['time'], p13: ['time'], p23: ['acq', 'train'] },
    label: { en: 'Zero-shot breath-hold', ko: 'Zero-shot breath-hold' },
    caption: {
      en: 'Cropped coronal MIP from a volunteer at 3 T. PI-RT was acquired separately, so structures are slightly displaced. Training times are 11-volunteer averages. Kim et al., Magnetic Resonance in Medicine 2026.',
      ko: '3 T 자원자 1명의 관상면 MIP 일부입니다. PI-RT는 별도로 촬영한 호흡동기 영상으로, 구조물 위치가 조금 다릅니다. 학습 시간은 11명 평균입니다. Kim et al., Magnetic Resonance in Medicine 2026.',
    },
    gloss: ['MRCP', 'ZS-BH', 'PI-RT', 'CS', 'R', 'SSDU', 'SNR', 'PSNR'],
    corRatio: [508, 387],
    start: { mode: 'p23', a: 0, b: 50 },
    layers: [
      {
        name: 'PI-RT', cor: '/media/zs_pirt_cor.png',
        acq: { en: 'GRAPPA, R = 3, respiratory-triggered', ko: 'GRAPPA, R = 3, respiratory-triggered' },
        time: { en: 'Free-breathing, 338 s', ko: 'Free-breathing, 338초' },
        train: { en: 'No training', ko: '학습 없음' },
      },
      {
        name: 'ZS-BH (base)', cor: '/media/zs_base_cor.png',
        acq: { en: 'Zero-shot, R = 25, all 13 stages trained', ko: 'Zero-shot, R = 25, 13개 stage 모두 학습' },
        time: { en: 'Single breath-hold, 14 s', ko: 'Single breath-hold, 14초' },
        train: { en: 'Training 136 min (avg.)', ko: '학습 136분 (평균)' },
      },
      {
        name: 'ZS-BH (proposed)', cor: '/media/zs_proposed_cor.png',
        acq: { en: 'Zero-shot, R = 25, 12 frozen + 1 trained', ko: 'Zero-shot, R = 25, 12개 stage 고정 + 1개 학습' },
        time: { en: 'Single breath-hold, 14 s', ko: 'Single breath-hold, 14초' },
        train: { en: 'Training 20 min (avg.)', ko: '학습 20분 (평균)' },
      },
    ],
  },
  {
    id: 'dl',
    slug: 'accelerated-mrcp',
    emphasis: { p12: ['time'], p23: ['acq'], p13: ['acq', 'time'] },
    label: { en: 'Accelerated MRCP', ko: 'Accelerated MRCP' },
    caption: {
      en: 'One volunteer at 3 T, scanned at 2× and 6× acceleration. Cropped coronal MIP. Scan times are study averages. Kim et al., NMR in Biomedicine 2025.',
      ko: '3 T 자원자 1명의 2배·6배 가속 촬영에서 얻은 관상면 MIP 일부입니다. 촬영 시간은 연구 전체 평균입니다. Kim et al., NMR in Biomedicine 2025.',
    },
    gloss: ['MRCP', 'DL', 'SV', 'MIP', 'GRAPPA', 'CG-SENSE', 'CS', 'PSNR', 'SSIM'],
    corRatio: [502, 423],
    start: { mode: 'p23', a: 0, b: 50 },
    layers: [
      {
        name: 'GRAPPA ×2', cor: '/media/dl_grappa2x_cor.png',
        acq: { en: 'Clinical standard, R = 2', ko: 'Clinical standard, R = 2' },
        time: { en: 'Average 599 s', ko: '평균 599초' },
        train: { en: 'No training', ko: '학습 없음' },
      },
      {
        name: 'GRAPPA ×6', cor: '/media/dl_grappa6x_cor.png',
        acq: { en: 'Parallel imaging, R = 6', ko: 'Parallel imaging, R = 6' },
        time: { en: 'Average 255 s', ko: '평균 255초' },
        train: { en: 'No training', ko: '학습 없음' },
      },
      {
        name: 'DL ×6 (SV)', cor: '/media/dl_sv6x_cor.png',
        acq: { en: 'Unrolled network, R = 6', ko: 'Unrolled network, R = 6' },
        time: { en: 'Average 255 s', ko: '평균 255초' },
        train: { en: 'Supervised training', ko: 'Supervised 학습' },
      },
    ],
  },
  {
    id: 'seg',
    slug: 'segmentation-mip',
    emphasis: { p12: ['time'] },
    label: { en: 'Segmentation MIP', ko: 'Segmentation MIP' },
    caption: {
      en: 'Coronal and sagittal MIPs from one patient at 3 T, before and after nnU-Net processing. Two radiologists rated 35 cases on a 4-point scale. Kim, Werner et al., MAGMA 2026.',
      ko: '3 T 환자 1명의 관상면·시상면 MIP입니다. nnU-Net 처리 전후를 비교합니다. 전문의 2명이 35건을 4점 척도로 평가했습니다. Kim, Werner et al., MAGMA 2026.',
    },
    gloss: ['MRCP', 'MIP'],
    corRatio: [525, 387],
    sagRatio: [91, 387],
    start: { mode: 'p12', a: 50, b: 100 },
    layers: [
      {
        name: 'Original MIP', cor: '/media/seg_original_cor.png', sag: '/media/seg_original_sag.png',
        acq: { en: 'Standard projection', ko: 'Standard projection' },
        time: { en: 'Structure overlap 2.5 ± 0.6', ko: 'Structure overlap 2.5 ± 0.6' },
      },
      {
        name: 'Proposed MIP', cor: '/media/seg_segmented_cor.png', sag: '/media/seg_segmented_sag.png',
        acq: { en: 'nnU-Net segmentation before projection', ko: '투영 전 nnU-Net segmentation' },
        time: { en: 'Structure overlap 3.5 ± 0.9', ko: 'Structure overlap 3.5 ± 0.9' },
      },
    ],
  },
];
