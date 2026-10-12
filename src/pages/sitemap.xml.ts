import type { APIRoute } from 'astro';
import { CLASSES, chapterSlug } from '../data/mpboard';
import { EXAMS } from '../data/exams';
import { TESTS } from '../data/tests';
import { SITE } from '../site.config';

export const GET: APIRoute = () => {
  const paths = ['/', '/mp-board/', '/exams/', '/mock-tests/', '/about/'];
  for (const c of CLASSES) {
    paths.push(`/mp-board/${c.slug}/`);
    for (const s of c.subjects) {
      paths.push(`/mp-board/${c.slug}/${s.slug}/`);
      s.chapters.forEach((_, i) => paths.push(`/mp-board/${c.slug}/${s.slug}/${chapterSlug(i)}/`));
    }
  }
  EXAMS.forEach((e) => paths.push(`/exams/${e.slug}/`));
  TESTS.forEach((t) => paths.push(`/mock-tests/${t.id}/`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE.url}${p}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
