import type { T } from '../i18n';

export interface Paper {
  authors: string;
  title: string;
  venue: string;
  detail: string;
  href?: string;
  linkLabel?: string;
}

const doi = (id: string) => `https://doi.org/${id}`;

// Sources: published PDFs in documents/sources/papers, the dissertation's
// list of own publications, and the comprehensive CV (London 2022, KR journals).
export const journals: Paper[] = [
  { authors: 'Kim J*, Werner S*, Afat S, Nickel MD, Knoll F.', title: 'Clinical evaluation of nnU-Net-based segmentation for enhanced MRCP maximum intensity projection visualization.', venue: 'Magnetic Resonance Materials in Physics, Biology and Medicine', detail: '2026.', href: doi('10.1007/s10334-026-01407-x') },
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Zero-shot self-supervised learning of single breath-hold magnetic resonance cholangiopancreatography (MRCP) reconstruction.', venue: 'Magnetic Resonance in Medicine', detail: '2026.', href: doi('10.1002/mrm.70467') },
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Deep learning-based accelerated MR cholangiopancreatography without fully-sampled data.', venue: 'NMR in Biomedicine', detail: '38(3):e70002, 2025.', href: doi('10.1002/nbm.70002') },
  { authors: 'Kim J, Lee C.', title: 'Efficient method for real-time implementation of image enhancement and image upscaling.', venue: 'Journal of IEIE', detail: '54(11):146–153, 2017.', href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002285062', linkLabel: 'KCI' },
  { authors: 'Kim J, Gil M, Lee C.', title: 'Efficient color image enhancement technique using saturation components of color images.', venue: 'Journal of KIBME', detail: '20(5):770–773, 2015.', href: doi('10.5909/JBE.2015.20.5.770') },
];

export const conferences: Paper[] = [
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Deep learning-based reconstruction of accelerated MR cholangiopancreatography.', venue: 'ISMRM & ISMRT Annual Meeting', detail: 'Singapore, 2024.' },
  { authors: 'Kim J, Benkert T, Riemenschneider B, Nickel MD, Knoll F.', title: 'Analysis of deep learning-based reconstruction models for highly accelerated MR cholangiopancreatography: to fine-tune or not to fine-tune.', venue: 'ISMRM & ISMRT Annual Meeting', detail: 'Toronto, 2023.' },
  { authors: 'Kim J, Gadjimuradov F, Benkert T, Vahle T, Maier A.', title: 'Deep learning-based respiratory motion correction in free-breathing abdominal diffusion-weighted imaging.', venue: 'ISMRM & ISMRT Annual Meeting', detail: 'London, 2022.' },
];

export const talks: Paper[] = [
  { authors: 'Kim J.', title: 'Single breath-hold MRCP reconstruction using zero-shot self-supervised learning methods.', venue: 'VeKNI Fall Conference', detail: 'Essen, 2025.' },
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Deep learning for enhanced MRCP visualization: toward more accurate diagnoses.', venue: 'EKC, Medical Science and Engineering Division', detail: 'Vienna, 2025.' },
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Assessment of deep learning-based reconstruction with imperfect ground truth for MRCP.', venue: 'IFIP TC-7 System Modeling and Optimization', detail: 'Hamburg, 2024.' },
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Overview of MRI reconstruction methods using various constraints to solve the ill-posed problems.', venue: 'EKC, Science and Technology Division', detail: 'Munich, 2023.' },
  { authors: 'Kim J.', title: 'Deep learning-based accelerated MRI reconstruction without fully-sampled reference.', venue: 'VeKNI Fall Conference', detail: 'Essen, 2022.' },
];

export const datasets: Paper[] = [
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Single breath-hold MRCP at 3T using a 3D T2-weighted TSE (3D SPACE) sequence for zero-shot learning reconstruction.', venue: 'Zenodo', detail: 'v1.0.0, 2025.', href: doi('10.5281/zenodo.16731625') },
  { authors: 'Kim J, Nickel MD, Knoll F.', title: 'Respiratory-triggered MRCP acquisition at 3T using a T2-weighted TSE (3D SPACE) sequence for deep learning-based reconstruction of MRCP.', venue: 'Zenodo', detail: 'v3, 2024.', href: doi('10.5281/zenodo.13912092') },
];

export const software: Paper[] = [
  { authors: '', title: 'MRCP_DLRecon: deep learning-based MRCP reconstruction.', venue: 'GitHub', detail: '2025.', href: 'https://github.com/JinhoKim46/MRCP_DLRecon', linkLabel: 'GitHub' },
  { authors: '', title: 'ZS_BH-MRCP: zero-shot self-supervised learning for breath-hold MRCP reconstruction.', venue: 'GitHub', detail: '2025.', href: 'https://github.com/JinhoKim46/ZS_BH-MRCP', linkLabel: 'GitHub' },
  { authors: '', title: 'mri_toolbox: Python tools for MRI data I/O, preprocessing and evaluation.', venue: 'GitHub', detail: '2025.', href: 'https://github.com/JinhoKim46/mri_toolbox', linkLabel: 'GitHub' },
];

export const paperGroups: { title: T; items: Paper[] }[] = [
  { title: { en: 'Journal articles', ko: '저널 논문' }, items: journals },
  { title: { en: 'Conference abstracts', ko: '학회 초록' }, items: conferences },
  { title: { en: 'Oral presentations', ko: '구두 발표' }, items: talks },
  { title: { en: 'Datasets', ko: 'Datasets' }, items: datasets },
  { title: { en: 'Software', ko: 'Software' }, items: software },
];
