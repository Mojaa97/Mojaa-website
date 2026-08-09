import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Virtual CFO Services | MOJAA',
  url: 'https://www.mojaa.in/virtual-cfo',
  description: 'Virtual CFO services for founders and growing businesses, covering MIS, cash flow, budgeting, board reporting, and financial control.',
  inLanguage: 'en',
  speakable: {
    '@type': 'SpeakableSpecification',
    xpath: ['//section[@id="quick-answer"]'],
  },
}

export default function VirtualCFO() {
  return (
    <>
      <Head>
        <title>Virtual CFO Services | Mayank Om Jain & Associates</title>
        <meta name="description" content="Virtual CFO services for founders and growing businesses covering MIS, cash flow, budgeting, board reporting, and financial controls." />
        <link rel="canonical" href="https://www.mojaa.in/virtual-cfo" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      </Head>
      <Nav />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px 60px' }}>
        <Link href="/" style={{ color: 'var(--teal)', fontWeight: 600 }}>← Back to Home</Link>
        <h1 style={{ marginTop: '20px' }}>Virtual CFO Services</h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#334155' }}>
          MOJAA helps founders and growing businesses bring structure to finance without building a full in-house team. Our Virtual CFO support covers reporting, controls, cashflow visibility, budgeting, investor readiness, and decision support.
        </p>

        <section id="quick-answer" style={{ marginTop: '32px', padding: '24px', background: '#f8fafc', borderRadius: '12px' }}>
          <h2 style={{ marginTop: 0 }}>Quick Answer</h2>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            A Virtual CFO gives startups and SMEs strategic finance support, including MIS reporting, cash flow planning, budgeting, and board-ready insights, without the cost of a full-time finance leader.
          </p>
        </section>

        <section style={{ marginTop: '32px' }}>
          <h2>What we support</h2>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Monthly MIS and management reporting</li>
            <li>Cash flow forecasting and working capital planning</li>
            <li>Budgeting and variance analysis</li>
            <li>Financial controls and reporting discipline</li>
            <li>Investor readiness and board-level support</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
