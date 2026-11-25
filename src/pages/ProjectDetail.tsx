import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectThumb from '../components/ProjectThumb';
import { StatusBadge, hostOf } from '../components/ProjectCard';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];
  useDocumentTitle(project?.name);
  if (!project) return <NotFound />;

  const prev = projects[idx - 1];
  const next = projects[idx + 1];
  const d = project.detail;

  return (
    <article className="container detail">
      <Link to={{ pathname: '/', hash: '#projects' }} className="back">← 프로젝트 목록</Link>
      <div className="detail__head">
        <h1>{project.name}</h1>
        <StatusBadge status={project.status} />
      </div>
      <p className="section__sub">{project.summary}</p>
      <div className="ctas">
        {project.status !== 'archived' && (
          <a className="btn btn--primary" href={project.url} target="_blank" rel="noopener noreferrer">{hostOf(project.url)} 방문 ↗</a>
        )}
        {project.repo && <a className="btn" href={project.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
      </div>

      <div className="thumb detail__shot"><ProjectThumb project={project} /></div>

      {d ? (
        <div className="detail__cols">
          {d.problem && <div className="panel"><h2>문제</h2><p>{d.problem}</p></div>}
          <div className="panel" style={d.problem ? undefined : { gridColumn: '1 / -1' }}><h2>해결</h2><p>{d.solution}</p></div>
          {d.architecture && <div className="panel" style={{ gridColumn: '1 / -1' }}><h2>아키텍처</h2><p className="mono">{d.architecture}</p></div>}
        </div>
      ) : (
        <div className="empty">상세 설명을 준비 중입니다.</div>
      )}

      <div className="tags" style={{ marginTop: 20 }}>
        {project.tags.map((t) => <span key={t} className="tag">#{t}</span>)}
        {project.startedAt && <span className="tag">시작 {project.startedAt}</span>}
      </div>

      {d?.images?.length ? (
        <div className="grid" style={{ marginTop: 24 }}>
          {d.images.map((src) => <img key={src} src={src} alt={`${project.name} 화면`} loading="lazy" className="detail__shot" />)}
        </div>
      ) : null}

      <nav className="pager" aria-label="다른 프로젝트">
        {prev ? <Link to={`/projects/${prev.slug}`}>← {prev.name}</Link> : <span />}
        {next ? <Link to={`/projects/${next.slug}`}>{next.name} →</Link> : <span />}
      </nav>
    </article>
  );
}
