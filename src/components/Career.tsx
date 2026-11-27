import { career } from '../data/career';

export default function Career() {
  return (
    <section id="career" className="container" aria-labelledby="career-title">
      <div className="career">
        <h2 id="career-title">Career</h2>
        <ol className="career__timeline">
          {career.map(({ area, focus }) => (
            <li key={area}>
              <h3>{area}</h3>
              <p>{focus}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
