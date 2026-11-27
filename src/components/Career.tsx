import { career } from '../data/career';

export default function Career() {
  return (
    <section id="career" className="section" aria-labelledby="career-title">
      <div className="container">
        <h2 id="career-title">실무 경험</h2>
        <div className="career">
          {career.map(({ area, technologies, context, contribution }) => (
            <article className="career__entry" key={area}>
              <div>
                <h3>{area}</h3>
                <ul className="career__tech" aria-label="사용 기술">
                  {technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <div className="career__story">
                <p>{context}</p>
                <p>{contribution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
