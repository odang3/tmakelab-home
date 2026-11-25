/**
 * 사이드 프로젝트 목록 — 이 파일만 수정하면 메인 카드, KPI, 상세 페이지, 푸터, sitemap이 모두 갱신됩니다.
 */
export type ProjectStatus = 'live' | 'wip' | 'archived';

export type Project = {
  slug: string;
  name: string;
  summary: string;
  url: string;
  /** /images/projects/xxx.webp — 없으면 자동 생성 썸네일 사용 */
  thumbnail?: string;
  status: ProjectStatus;
  tags: string[];
  featured?: boolean;
  /** 'YYYY-MM' (모르면 생략) */
  startedAt?: string;
  detail?: {
    /** 만든 계기 — 없으면 상세 페이지에서 숨김 */
    problem?: string;
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
  {
    slug: 'subway-dungeon',
    name: '한 정거장 던전',
    summary: '출근길 지하철이 던전이 된다. 1호선을 한 정거장씩 클리어하는 도트 액션 로그라이트.',
    url: 'https://subway-dungeon.tmakelab.com',
    thumbnail: '/images/projects/subway-dungeon.jpg',
    status: 'live',
    tags: ['React', 'PWA', 'JavaScript'],
    startedAt: '2026-10',
    detail: {
      problem:
        '출퇴근길 지하철에서 대중교통 예절을 지키지 않는 사람들을 자주 마주쳤습니다. 그때 쌓인 답답함을 유쾌하게 풀고 싶어, 지하철 빌런들을 퇴치하는 게임을 만들었습니다.',
      solution:
        '인천역부터 연천역까지 1호선 65개 역을 한 정거장씩 클리어하는 도트 액션 로그라이트입니다. 역마다 여러 라운드의 출근길 빌런을 제압하고, 서류가방(밸런스형)·노트북(중량형)·우산(거리조절형) 중 무기를 골라 빌런과의 상성을 노립니다. 클리어로 모은 질서 포인트로 체력·공격력·방어력을 강화해 다음 출근길을 준비합니다.',
      architecture:
        'React 기반 웹 게임 · PWA(홈 화면 설치, 세로 화면 고정) · Web Audio 효과음 · 진행 기록은 브라우저에 저장',
    },
  },
];
