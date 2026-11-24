import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'tml-theme';
const mq = () => window.matchMedia('(prefers-color-scheme: light)');

/** 저장된 선택 → 없으면 OS 설정. 실제 적용은 <html data-theme> */
export function useTheme() {
  const read = (): Theme => {
    const t = document.documentElement.dataset.theme;
    if (t === 'light' || t === 'dark') return t;
    return mq().matches ? 'light' : 'dark';
  };
  const [theme, setTheme] = useState<Theme>(read);

  useEffect(() => {
    const onChange = () => setTheme(read());
    mq().addEventListener('change', onChange);
    return () => mq().removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = read() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch { /* 저장 불가 환경 무시 */ }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
