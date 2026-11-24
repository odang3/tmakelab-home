import { projects } from '../data/projects';

/** 모든 수치는 projects.ts에서 자동 계산 — 수동 입력 금지 */
export default function KpiTiles() {
  const count = (s: string) => projects.filter((p) => p.status === s).length;
  const live = count('live');
  const techs = new Set(projects.flatMap((p) => p.tags)).size;
  const tiles = [
    { l: '운영 중인 서비스', v: String(live), d: '*.tmakelab.com' },
    { l: '전체 프로젝트', v: String(projects.length), d: `live ${live} · wip ${count('wip')} · end ${count('archived')}` },
    { l: '사용 기술', v: String(techs), d: '프로젝트 태그 기준' },
  ];
  return (
    <div className="kpis">
      {tiles.map((t) => (
        <div key={t.l} className="kpi">
          <div className="kpi__l">{t.l}</div>
          <div className="kpi__v">{t.v}</div>
          <div className="kpi__d">{t.d}</div>
        </div>
      ))}
    </div>
  );
}
