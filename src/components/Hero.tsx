import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import ProjectThumb from './ProjectThumb';

export default function Hero() {
  const [a, b, c] = profile.headline;
  const featured = projects.find((project) => project.featured);

  return (
    <section className={featured ? 'container hero hero--featured' : 'container hero'}>
      <div className="hero__intro">
        <div className="eyebrow">{profile.eyebrow}</div>
        <h1>{a}{' '}<em>{b}</em>{c}</h1>
        <p>{profile.intro}</p>
        <div className="ctas">
          <a className="btn btn--primary" href="#projects">프로젝트 보기 ↓</a>
          <a className="btn" href="#about">개발자 소개 ↓</a>
        </div>
      </div>
      {featured && (
        <Link className="hero__project" to={`/projects/${featured.slug}`}>
          <div className="thumb"><ProjectThumb project={featured} loading="eager" /></div>
          <div className="hero__caption">
            <div>
              <span className="hero__caption-label">대표 프로젝트</span>
              <strong>{featured.name}</strong>
            </div>
            <span aria-hidden="true">→</span>
          </div>
        </Link>
      )}
    </section>
  );
}
