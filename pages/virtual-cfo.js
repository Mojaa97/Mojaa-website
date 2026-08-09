import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const faqs = [
  {
    q: 'What does MOJAA’s Virtual CFO service actually include each month?',
    a: 'A recurring cycle of closed and reconciled books, monthly MIS reporting, cash flow tracking, and a review call walking you through what moved and why. Budgeting, board decks, and fundraise support sit on top of that base cadence as needed.',
  },
  {
    q: 'How is a Virtual CFO engagement priced?',
    a: 'Pricing scales with scope, not company size alone — from a light monthly touchpoint for early-stage founders to near-daily availability during a fundraise or scale-up phase. We scope this on a call once we understand your stage and reporting needs.',
  },
  {
    q: 'How quickly can a Virtual CFO engagement start?',
    a: 'Typically within a week of scoping. The first one to two months are largely setup — understanding the business and cleaning up historical data — before the engagement shifts into steady-state advisory work.',
  },
  {
    q: 'Will a Virtual CFO replace my current bookkeeper or accountant?',
    a: 'No. A Virtual CFO works on top of your bookkeeping and compliance layer, not instead of it. If those foundational functions are messy, fixing that pipeline is usually the first step before strategic reporting can be trusted.',
  },
  {
    q: 'Can a Virtual CFO help specifically with an upcoming fundraise?',
    a: 'Yes — this is one of the most common reasons founders bring us on. We prepare the data room, review financial projections, clean up the cap table, and act as the finance-side point of contact during investor diligence.',
  },
  {
    q: 'Do you work with startups outside specific sectors?',
    a: 'Yes. Our team has run Virtual CFO-style engagements across 100+ startups spanning healthcare, SaaS, FMCG, EdTech, and fintech. Financial fundamentals transfer across sectors more than founders expect.',
  },
  {
    q: 'Is the Virtual CFO engagement remote, or does it require in-person work?',
    a: 'Primarily remote, run through your existing tools — Tally, Zoho, QuickBooks, or Xero — with scheduled review calls. In-person sessions can be arranged for board meetings or fundraise milestones if useful.',
  },
  {
    q: 'What is the minimum engagement period for Virtual CFO services?',
    a: 'Most substantive engagements run three to six months at a minimum, since it takes one or two reporting cycles to properly diagnose the financial structure before adding real strategic value.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.mojaa.in/#organization',
      name: 'Mayank Om Jain & Associates',
      url: 'https://www.mojaa.in',
      logo: 'https://www.mojaa.in/favicon.ico',
      sameAs: ['https://www.linkedin.com/in/jainmayank13/'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.mojaa.in/virtual-cfo#webpage',
      name: 'Virtual CFO Services | MOJAA',
      url: 'https://www.mojaa.in/virtual-cfo',
      description: 'Virtual CFO services for founders and growing businesses, covering MIS, cash flow, budgeting, board reporting, and financial control.',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        xpath: ['//section[@id="quick-answer"]'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mojaa.in/virtual-cfo#faq',
      isPartOf: { '@id': 'https://www.mojaa.in/virtual-cfo#webpage' },
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function VirtualCFO() {
  return (
    <>
      <Head>
        <title>Virtual CFO Services | Mayank Om Jain & Associates</title>
        <meta name="description" content="Virtual CFO services for founders and growing businesses covering MIS, cash flow, budgeting, board reporting, and financial controls." />
        <link rel="canonical" href="https://www.mojaa.in/virtual-cfo" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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

        <section style={{ marginTop: '48px' }}>
          <h2>Frequently asked questions</h2>
          {faqs.map(({ q, a }, i) => (
            <details
              key={i}
              style={{
                borderBottom: '1px solid var(--border)',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                padding: '16px 0',
              }}
            >
              <summary style={{ fontWeight: 600, color: 'var(--navy)', cursor: 'pointer', fontSize: '1rem' }}>
                {q}
              </summary>
              <p style={{ margin: '12px 0 0', color: '#334155', lineHeight: 1.7, fontSize: '0.95rem' }}>{a}</p>
            </details>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
