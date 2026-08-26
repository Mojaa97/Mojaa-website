import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const faqs = [
  {
    q: 'What NRI and FEMA services do you provide?',
    a: 'Residential status determination under FEMA and the Income Tax Act, NRE/NRO/FCNR account structuring, property purchase and sale compliance, repatriation support, DTAA planning, and Indian ITR filing for NRIs.',
  },
  {
    q: 'Can you help with repatriating money from India to abroad?',
    a: 'Yes. We handle the full repatriation process from NRO accounts and property sale proceeds, including the Form 15CA/15CB certification required by banks before funds can move out of India.',
  },
  {
    q: 'Do you help NRIs with property purchase or sale compliance in India?',
    a: 'Yes, including TDS positioning on sale, obtaining a lower or nil TDS certificate under Section 197 where applicable, and structuring the transaction to stay within FEMA\'s property and repatriation rules.',
  },
  {
    q: 'Can you help me determine my residential status under FEMA and the Income Tax Act?',
    a: 'Yes. FEMA and Income Tax use different residency tests, and the two often don\'t align in the year you move. We assess both separately so your accounts, filings, and remittances are based on your actual status under each law.',
  },
  {
    q: 'Do you handle DTAA claims and foreign tax credit for NRIs?',
    a: 'Yes. We review the applicable Double Taxation Avoidance Agreement between India and your country of residence and structure your filings to claim relief or foreign tax credit correctly, on both sides where needed.',
  },
  {
    q: 'Can you assist with FC-GPR or FC-TRS filings for foreign investment?',
    a: 'Yes. Alongside individual NRI advisory, our team handles entity-level FEMA filings for foreign investment into Indian companies, including FC-GPR for share issuances and FC-TRS for transfers between resident and non-resident holders.',
  },
  {
    q: 'Do you provide the CA certification (Form 15CB) needed for repatriation?',
    a: 'Yes, this is one of our most frequent NRI engagements. We issue the Form 15CB certification your bank requires before processing an outward remittance above the applicable threshold.',
  },
  {
    q: 'Can NRIs engage Mayank Om Jain & Associates remotely from abroad?',
    a: 'Yes. Most of our NRI clients are engaged entirely remotely: document review, calls, and filings are handled without requiring you to be physically present in India.',
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
      '@id': 'https://www.mojaa.in/nri-fema#webpage',
      name: 'NRI and FEMA Advisory | Mayank Om Jain & Associates',
      url: 'https://www.mojaa.in/nri-fema',
      description: 'NRI and FEMA advisory for cross-border tax, property transactions, DTAA, and compliance planning.',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        xpath: ['//section[@id="quick-answer"]'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mojaa.in/nri-fema#faq',
      isPartOf: { '@id': 'https://www.mojaa.in/nri-fema#webpage' },
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function NRIFEMA() {
  return (
    <>
      <Head>
        <title>NRI and FEMA Advisory | Mayank Om Jain & Associates</title>
        <meta name="description" content="NRI and FEMA advisory for cross-border taxation, property transactions, DTAA, and compliance planning for Indians abroad." />
        <link rel="canonical" href="https://www.mojaa.in/nri-fema" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <Nav />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px 60px' }}>
        <Link href="/" style={{ color: 'var(--teal)', fontWeight: 600 }}>← Back to Home</Link>
        <h1 style={{ marginTop: '20px' }}>NRI & FEMA Advisory</h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#334155' }}>
          We support NRIs and overseas Indians with compliance-focused advice across FEMA, cross-border taxation, DTAA, and property or investment-related planning.
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
