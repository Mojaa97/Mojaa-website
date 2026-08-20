import fs from 'fs';
import path from 'path';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function ITRFilingLastDate({ html }) {
  return (
    <>
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'blog', 'itr-filing-last-date-ay-2026-27', 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  return { props: { html } };
}
