import { profile } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <p className="section__sub">사이드 프로젝트에서 실제로 쓰는 기술</p>
        <div className="skills">
          {profile.skills.map((g) => (
            <div key={g.group} className="sk">
              <h3>{g.group}</h3>
              <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
