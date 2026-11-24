/**
 * 사이드 프로젝트 목록 — 이 파일만 수정하면 메인 카드, KPI, 상세 페이지, 푸터, sitemap이 모두 갱신됩니다.
 */
export type ProjectStatus = 'live' | 'wip' | 'archived';

export type Project = {
  slug: string;
  name: string;
  summary: string;
  url: string;
  repo?: string;
  /** /images/projects/xxx.webp — 없으면 자동 생성 썸네일 사용 */
  thumbnail?: string;
  status: ProjectStatus;
  tags: string[];
  featured?: boolean;
  /** 'YYYY-MM' (모르면 생략) */
  startedAt?: string;
  detail?: {
    problem: string;
    solution: string;
    architecture?: string;
    images?: string[];
  };
};

export const statusLabel: Record<ProjectStatus, string> = {
  live: '운영중',
  wip: '개발중',
  archived: '종료',
};

export const projects: Project[] = [
  {
    slug: 'bamboo',
    name: '대나무 숲',
    summary: '누구에게도 못 한 말, 여기서는 그냥 털어놓고 가세요.',
    url: 'https://bamboo.tmakelab.com',
    thumbnail: '/images/projects/bamboo.jpg',
    status: 'live',
    tags: ['Three.js', 'WebSocket', 'JavaScript', 'Cloudflare'],
    featured: true,
    startedAt: '2026-11',
    detail: {
      problem:
        '가까운 사람에게도 차마 꺼내기 어려운 말이 있습니다. 누구에게도 못 한 말을 잠깐 털어놓고 갈 수 있는 곳이 있으면 좋겠다고 생각해 대나무 숲을 만들었습니다.',
      solution:
        'WASD로 걸어 다니는 3D 대나무 숲에서 글(500자) 또는 목소리(20초)로 "숲에 외치기"를 합니다. 나만 털어놓기(저장 안 함)와 익명 메아리 공개(7일 뒤 자동 삭제) 중 고를 수 있고, 로비에서는 대나무 여덟 그루에 걸린 쪽지로 다른 사람의 메아리를 읽고 공감을 보냅니다. 손인사·명상·돌탑쌓기 같은 상호작용과 안내 NPC "죽순지기", 저사양·접근성을 위한 텍스트 모드와 움직임 줄이기 설정도 제공합니다.',
      architecture:
        'Three.js(WebGL) 3D 숲 렌더링 · WebSocket 실시간 로비 · REST API(/api/echoes, /api/lobby) · Cloudflare 경유 서비스 · 로그인 없이 브라우저 단위로 내 메아리 관리',
    },
  },
];
