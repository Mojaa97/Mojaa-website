import fs from 'fs';
import path from 'path';

export default function NRIFEMAComplianceGuide({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'blog', 'nri-fema-compliance-guide', 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  return { props: { html } };
}
