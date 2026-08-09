import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NRI and FEMA Advisory | MOJAA',
  url: 'https://www.mojaa.in/nri-fema',
  description: 'NRI and FEMA advisory for cross-border tax, property transactions, DTAA, and compliance planning.',
  inLanguage: 'en',
  speakable: {
    '@type': 'SpeakableSpecification',
    xpath: ['//section[@id="quick-answer"]'],
  },
}

export default function NRIFEMA() {
  return (
    <>
      <Head>
        <title>NRI and FEMA Advisory | Mayank Om Jain & Associates</title>
        <meta name="description" content="NRI and FEMA advisory for cross-border taxation, property transactions, DTAA, and compliance planning for Indians abroad." />
        <link rel="canonical" href="https://www.mojaa.in/nri-fema" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      </Head>
      <Nav />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px 60px' }}>
        <Link href="/" style={{ color: 'var(--teal)', fontWeight: 600 }}>← Back to Home</Link>
        <h1 style={{ marginTop: '20px' }}>NRI & FEMA Advisory</h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#334155' }}>
          MOJAA supports NRIs and overseas Indians with compliance-focused advice across FEMA, cross-border taxation, DTAA, and property or investment-related planning.
        </p>

        <section id="quick-answer" style={{ marginTop: '32px', padding: '24px', background: '#f8fafc', borderRadius: '12px' }}>
          <h2 style={{ marginTop: 0 }}>Quick Answer</h2>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            NRI advisory covers FEMA compliance, DTAA planning, tax treatment of overseas income, and guidance on property and investment transactions for Indian residents living abroad.
          </p>
        </section>

        <section style={{ marginTop: '32px' }}>
          <h2>Common areas we cover</h2>
          <ul style={{ lineHeight: 1.8 }}>
            <li>FEMA and cross-border compliance</li>
            <li>DTAA and international tax planning</li>
            <li>Property and investment transactions</li>
            <li>NRE/NRO and remittance-related guidance</li>
            <li>Tax planning for overseas income</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
