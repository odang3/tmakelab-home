/** 개인 정보·문구 — 이 파일만 수정하면 메인 화면 문구가 바뀝니다 */
export const profile = {
  siteUrl: 'https://tmakelab.com',
  brand: 'the make lab',
  eyebrow: 'DEVELOPER · THE MAKE LAB',
  headline: ['일상에서 발견한 아이디어를', '웹 서비스', '로 만듭니다.'] as const,
  intro:
    '직접 만든 서비스를 운영하며, 무엇을 만들었고 왜 그렇게 만들었는지 기록합니다.',
  about:
    'Java와 Python으로 백엔드를, JavaScript와 React로 사용자 화면을 개발합니다. The Make Lab은 떠오른 아이디어를 웹 서비스로 구현하고, 그 과정에서 배운 점을 정리하는 공간입니다.',
  github: 'https://github.com/odang3',
  email: 'showme1470@naver.com',
  skills: [
    { group: 'Backend', items: ['Java', 'Python'] },
    { group: 'Frontend', items: ['JavaScript', 'React'] },
    { group: '3D · 실시간', items: ['Three.js', 'WebSocket'] },
    { group: 'Infra', items: ['Cloudflare'] },
  ],
};
