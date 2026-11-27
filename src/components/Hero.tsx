import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <h1 id="hero-title">{profile.headline}</h1>
      <p>{profile.intro}</p>
    </section>
  );
}
