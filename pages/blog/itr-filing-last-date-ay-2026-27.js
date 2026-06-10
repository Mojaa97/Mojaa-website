import fs from 'fs';
import path from 'path';

export default function ITRFilingLastDate({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'blog', 'itr-filing-last-date-ay-2026-27', 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  return { props: { html } };
}
