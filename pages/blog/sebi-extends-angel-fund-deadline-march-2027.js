import fs from 'fs';
import path from 'path';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function SebiAngelFundDeadline({ html }) {
  return (
    <>
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'blog', 'sebi-extends-angel-fund-deadline-march-2027', 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  return { props: { html } };
}