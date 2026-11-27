import { profile } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>사용 기술</h2>
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
