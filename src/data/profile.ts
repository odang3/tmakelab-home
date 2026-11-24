/** 개인 정보·문구 — 이 파일만 수정하면 메인 화면 문구가 바뀝니다 */
export const profile = {
  siteUrl: 'https://tmakelab.com',
  brand: 'tmakelab',
  eyebrow: '// SIDE PROJECTS · FULL-STACK',
  headline: ['아이디어를 ', '직접 만들고', ' 운영합니다'] as const,
  intro:
    'Java·Python·JavaScript·React로 만든 사이드 프로젝트를 tmakelab.com의 서브도메인에서 운영하고 있습니다. 운영 중인 서비스는 아래에서 바로 둘러볼 수 있습니다.',
  github: 'https://github.com/odang3',
  email: 'contact@tmakelab.com', // Cloudflare Email Routing으로 개인 메일에 포워딩
  skills: [
    { group: 'Backend', items: ['Java', 'Python'] },
    { group: 'Frontend', items: ['JavaScript', 'React'] },
    { group: '3D · 실시간', items: ['Three.js', 'WebSocket'] },
    { group: 'Infra', items: ['Cloudflare'] },
  ],
};
