import type { Project } from '../data/projects';

/** 썸네일 이미지가 없을 때 slug 기반으로 결정적인 미니 차트 그래픽을 그림 */
function hash(s: string) {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

export default function ProjectThumb({ project }: { project: Project }) {
  if (project.thumbnail) {
    return <img src={project.thumbnail} alt={`${project.name} 화면`} loading="lazy" width={640} height={360} />;
  }
  const h = hash(project.slug);
  const hue = h % 360;
  const solid = `hsl(${hue} 70% 60%)`;
  const soft = `hsl(${hue} 70% 60% / .25)`;
  const bars = Array.from({ length: 8 }, (_, i) => 20 + ((i * 37 + h) % 60));
  const peak = bars.indexOf(Math.max(...bars));
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="180" fill={`hsl(${hue} 40% 50% / .06)`} />
      {bars.map((v, i) => (
        <rect key={i} x={24 + i * 36} y={150 - v} width="22" height={v} rx="3" fill={i === peak ? solid : soft} />
      ))}
    </svg>
  );
}
