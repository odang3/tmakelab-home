import { profile } from '../data/profile';
import KpiTiles from './KpiTiles';

export default function Hero() {
  const [a, b, c] = profile.headline;
  return (
    <section className="container hero">
      <div className="eyebrow">{profile.eyebrow}</div>
      <h1>{a}<em>{b}</em>{c}</h1>
      <p>{profile.intro}</p>
      <div className="ctas">
        <a className="btn btn--primary" href="#projects">프로젝트 보기 ↓</a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
      <KpiTiles />
    </section>
  );
}
