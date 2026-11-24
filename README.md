# tmakelab-home

tmakelab.com 메인 페이지: 사이드 프로젝트 허브 + 개발자 포트폴리오 (React + Vite + TypeScript, 정적 사이트)

## 실행
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/ 생성 (+ sitemap.xml 자동 생성)
npm run preview
```

## 프로젝트 추가 방법
1. `src/data/projects.ts`에 객체 1개 추가 (slug, name, summary, url, status, tags, startedAt)
2. (선택) 스크린샷을 `public/images/projects/<slug>.webp` (1280px 이하)로 넣고 `thumbnail` 지정. 없으면 자동 그래픽 사용
3. git push → Cloudflare Pages 자동 배포

KPI 타일, 필터 태그, 푸터 서브도메인 목록, sitemap은 모두 projects.ts에서 자동 계산됩니다.
소개 문구, 스킬은 `src/data/profile.ts`에서 수정합니다.

## 구조
```
public/   _redirects(SPA fallback) · _headers(보안 헤더/CSP) · robots.txt · favicon.svg · theme-init.js
src/
  data/        projects.ts · profile.ts
  styles/      tokens.css(디자인 토큰, 다크 기본/라이트) · global.css
  components/  Header · ThemeToggle · Hero · KpiTiles · ProjectFilter · ProjectCard · ProjectThumb · Skills · Contact · Footer
  pages/       Home · ProjectDetail(/projects/:slug) · NotFound
  hooks/       useTheme · useDocumentTitle
```

## Cloudflare Pages 배포
1. GitHub 저장소 생성 후 push
2. Cloudflare → Workers & Pages → Pages → Git 연결. Build `npm run build`, Output `dist`
3. Custom domains에 `tmakelab.com`, `www.tmakelab.com` 추가
4. Redirect Rule: `www.tmakelab.com/*` → `https://tmakelab.com/${1}` (301)
5. Email Routing: `contact@tmakelab.com` → 개인 메일 포워딩
6. Web Analytics 활성화 (CSP에 cloudflareinsights 허용되어 있음)

## TODO (실데이터 교체)
- [ ] `profile.ts`: 소개 문구·스킬 확정
- [ ] `public/og-image.png` (1200×630) 제작
