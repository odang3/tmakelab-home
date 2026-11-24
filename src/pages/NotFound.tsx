import { Link, useLocation } from 'react-router-dom';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { hostOf } from '../components/ProjectCard';

export default function NotFound() {
  useDocumentTitle('페이지를 찾을 수 없음');
  const { pathname } = useLocation();
  const live = projects.filter((p) => p.status === 'live');
  return (
    <section className="container nf">
      <h1 style={{ fontSize: 40 }}>404</h1>
      <code>SELECT * FROM pages WHERE path = '{pathname}'; → 0 rows</code>
      <div className="ctas" style={{ justifyContent: 'center' }}>
        <Link className="btn btn--primary" to="/">홈으로</Link>
      </div>
      <p className="section__sub" style={{ marginTop: 32 }}>혹시 이 서비스를 찾으셨나요?</p>
      <div className="tags" style={{ justifyContent: 'center' }}>
        {live.map((p) => (
          <a key={p.slug} className="tag" href={p.url} target="_blank" rel="noopener noreferrer">{hostOf(p.url)}</a>
        ))}
      </div>
    </section>
  );
}
