import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { projects } from './src/data/projects';
import { profile } from './src/data/profile';

/** 빌드 시 projects.ts 기준으로 sitemap.xml 자동 생성 → 프로젝트 추가 시 수동 수정 불필요 */
function sitemap(): Plugin {
  return {
    name: 'tml-sitemap',
    apply: 'build',
    generateBundle() {
      const base = profile.siteUrl.replace(/\/$/, '');
      const today = new Date().toISOString().slice(0, 10);
      const urls = ['/', ...projects.map((p) => `/projects/${p.slug}`)];
      const body = urls
        .map((u) => `  <url><loc>${base}${u}</loc><lastmod>${today}</lastmod></url>`)
        .join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemap()],
});
