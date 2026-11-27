import { Link } from 'react-router-dom';
import { statusLabel, type Project } from '../data/projects';
import ProjectThumb from './ProjectThumb';

export function StatusBadge({ status }: { status: Project['status'] }) {
  return <span className={`status status--${status}`}>{statusLabel[status]}</span>;
}

export const hostOf = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="thumb"><ProjectThumb project={project} /></div>
      <div className="card__body">
        <div className="card__top">
          <h3>{project.name}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="card__desc">{project.summary}</p>
        <div className="tags">
          {project.tags.map((t) => <span key={t} className="tag">#{t}</span>)}
        </div>
        <div className="card__act">
          <Link to={`/projects/${project.slug}`}>개발 사례 보기 <span aria-hidden="true">→</span></Link>
          {project.status !== 'archived' && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">서비스 방문 ↗</a>
          )}
        </div>
      </div>
    </article>
  );
}
