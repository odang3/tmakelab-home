import { useEffect } from 'react';
import { profile } from '../data/profile';

const BASE = profile.brand;

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : `${BASE} — 사이드 프로젝트 & 포트폴리오`;
  }, [title]);
}
