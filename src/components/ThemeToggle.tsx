import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? '라이트' : '다크';
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={`${next} 모드로 전환`} title={`${next} 모드`}>
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
