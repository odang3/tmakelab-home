import { projects } from '../data/projects';
import { hostOf } from './ProjectCard';

export default function Footer() {
  const live = projects.filter((p) => p.status === 'live');
  return (
    <footer className="footer">
      <div className="container footer__in">
        <span>© {new Date().getFullYear()} tmakelab</span>
        <nav className="footer__subs" aria-label="서브도메인 바로가기">
          {live.map((p) => (
            <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer">{hostOf(p.url).split('.')[0]}.</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
