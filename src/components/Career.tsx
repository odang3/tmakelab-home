const careerPreview = [
  { area: '금융 시스템', focus: '데이터 배치 · 수집 자동화 · REST API' },
  { area: '병원 BI', focus: '대시보드 · SSO · 사용자 권한 관리' },
  { area: 'CDW 데이터 마트', focus: '의료 데이터 이관 · 정합성 검증 · SQL 처리' },
];

export default function Career() {
  return (
    <section id="career" className="container" aria-labelledby="career-title">
      <div className="career">
        <h2 id="career-title">Career</h2>
        <p className="career__note">검토 문서의 경력 예시 · 공개 내용 확인 예정</p>
        <ol className="career__timeline">
          {careerPreview.map(({ area, focus }) => (
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
