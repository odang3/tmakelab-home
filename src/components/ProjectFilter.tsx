export type FilterKey = 'all' | `s:${string}` | `t:${string}`;

type Props = { tags: string[]; value: FilterKey; onChange: (k: FilterKey) => void };

export default function ProjectFilter({ tags, value, onChange }: Props) {
  const status: { k: FilterKey; l: string }[] = [
    { k: 'all', l: '전체' },
    { k: 's:live', l: '운영중' },
    { k: 's:wip', l: '개발중' },
  ];
  const chip = (k: FilterKey, l: string) => (
    <button key={k} type="button" className="chip" aria-pressed={value === k} onClick={() => onChange(k)}>{l}</button>
  );
  return (
    <div className="chips" role="group" aria-label="프로젝트 필터">
      {status.map((s) => chip(s.k, s.l))}
      {tags.length > 0 && <span className="chips__sep" aria-hidden="true" />}
      {tags.map((t) => chip(`t:${t}`, `#${t}`))}
    </div>
  );
}
