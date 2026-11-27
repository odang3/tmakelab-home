import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div>
          <p className="hero__role">Java · Spring Boot · SQL</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="ctas">
            <a className="btn btn--primary" href="#career">실무 경험 보기 <span aria-hidden="true">↓</span></a>
            <a className="btn" href="#contact">연락하기 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero__scope">
          <h2>주요 업무</h2>
          <ul>
            <li>기존 업무 시스템의 API와 권한 구조 개선</li>
            <li>데이터 마트 설계와 이관 결과 검증</li>
            <li>배치 운영 및 장애 원인 분석</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
