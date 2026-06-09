import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'blog', 'itr-filing-last-date-ay-2026-27', 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  return { props: { html } };
}

export default function ITRFilingLastDate({ html }) {
  return (
    <>
      <Head>
        <title>ITR Filing Last Date AY 2026-27 &amp; Which ITR Form to File</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
