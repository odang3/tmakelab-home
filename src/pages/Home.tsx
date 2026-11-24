import { useMemo, useState } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter, { type FilterKey } from '../components/ProjectFilter';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const statusOrder = { live: 0, wip: 1, archived: 2 } as const;

export default function Home() {
  useDocumentTitle();
  const [filter, setFilter] = useState<FilterKey>('all');

  // 태그는 데이터에서 자동 추출 (사용 빈도순)
  const tags = useMemo(() => {
    const cnt = new Map<string, number>();
    projects.forEach((p) => p.tags.forEach((t) => cnt.set(t, (cnt.get(t) ?? 0) + 1)));
    return [...cnt.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
  }, []);

  const list = useMemo(() => {
    const sorted = [...projects].sort(
      (a, b) =>
        Number(!!b.featured) - Number(!!a.featured) ||
        statusOrder[a.status] - statusOrder[b.status] ||
        (b.startedAt ?? '').localeCompare(a.startedAt ?? ''),
    );
    if (filter === 'all') return sorted;
    const [kind, val] = [filter.slice(0, 2), filter.slice(2)];
    return sorted.filter((p) => (kind === 's:' ? p.status === val : p.tags.includes(val)));
  }, [filter]);

  return (
    <>
      <Hero />
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <p className="section__sub">*.tmakelab.com 에서 운영 중인 사이드 프로젝트 모음</p>
          {/* 프로젝트가 적을 때 필터는 의미가 없어 숨김 */}
          {projects.length >= 3 && <ProjectFilter tags={tags} value={filter} onChange={setFilter} />}
          {list.length ? (
            <div className={list.length === 1 ? 'grid grid--single' : 'grid'}>{list.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
          ) : (
            <div className="empty">조건에 맞는 프로젝트가 없습니다.</div>
          )}
        </div>
      </section>
      <Skills />
      <Contact />
    </>
  );
}
