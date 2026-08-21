import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useReveal } from '../lib/useReveal'

const points = [
  { t: 'Monthly MIS & Management Reporting', d: 'A closed reporting cycle every month — not numbers reconstructed after the fact.' },
  { t: 'Cash Flow Forecasting', d: 'Forward-looking cash flow and working capital planning, not just a rear-view P&L.' },
  { t: 'Budgeting & Variance Analysis', d: 'Budgets set, tracked, and explained when actuals move away from plan.' },
  { t: 'Financial Controls', d: 'Reporting discipline and controls that hold up to investor or lender scrutiny.' },
  { t: 'Investor & Board Readiness', d: 'Board decks, investor updates, and fundraise data rooms prepared and defensible.' },
]

const faqs = [
  {
    q: 'What does the Virtual CFO service actually include each month?',
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
    a: 'Yes. Our team has run 200+ engagements spanning 13+ sectors — healthcare, SaaS, FMCG, EdTech, and fintech among them. Financial fundamentals transfer across sectors more than founders expect.',
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
      name: 'Virtual CFO Services | Mayank Om Jain & Associates',
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
  useReveal()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Head>
        <title>Virtual CFO Services | Mayank Om Jain & Associates</title>
        <meta name="description" content="Virtual CFO services for founders and growing businesses covering MIS, cash flow, budgeting, board reporting, and financial controls." />
        <link rel="canonical" href="https://www.mojaa.in/virtual-cfo" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <Link href="/services" className="page-hero-back">&larr; All Services</Link>
          <span className="hero-eyebrow">Growth & Transaction Advisory</span>
          <h1>Virtual CFO Services</h1>
          <p>Strategic finance support for founders and growing businesses — MIS, cash flow, budgeting, and board-ready reporting, without the cost of a full-time finance leader.</p>
          <p className="page-hero-meta"><b>Best for </b>Founders and businesses that have outgrown a bookkeeper but aren't ready for a full-time CFO.</p>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <Link href="/#contact" className="btn btn-primary">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" id="quick-answer">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px' }}>
            <div className="badge-row"><span className="icon-badge">?</span><span className="eyebrow">Quick Answer</span></div>
            <h2 className="section-heading">What a Virtual CFO actually does.</h2>
            <p className="section-sub" style={{ marginTop: '16px' }}>A Virtual CFO gives startups and SMEs strategic finance support — MIS reporting, cash flow planning, budgeting, and board-ready insights — without the cost of a full-time finance leader.</p>
          </div>
        </div>
      </section>

      <section className="section-pad light-soft">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px' }}>
            <div className="badge-row"><span className="icon-badge">{points.length}</span><span className="eyebrow">Core Services</span></div>
            <h2 className="section-heading">What We Support</h2>
          </div>
          <div className="point-grid reveal-stagger">
            {points.map((pt, i) => (
              <div className="point-card" key={pt.t}>
                <span className="point-index">{String(i + 1).padStart(2, '0')}</span>
                <h4>{pt.t}</h4>
                <p>{pt.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '840px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <div className="badge-row"><span className="icon-badge">?</span><span className="eyebrow">FAQ</span></div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>Questions, answered directly.</h2>
          </div>
          <div className="reveal">
            {faqs.map(({ q, a }, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={q}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} type="button">
                  {q}<span className="plus">+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaq === i ? '400px' : '0' }}>
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
            <h2 className="section-heading" style={{ color: '#fff' }}>Ready to bring in a Virtual CFO?</h2>
            <p className="section-sub" style={{ margin: '16px auto 32px', color: 'var(--ink-on-dark-soft)' }}>Tell us what's going on with your business — we'll scope exactly what's needed.</p>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <Link href="/#contact" className="btn btn-primary">Talk to an Expert</Link>
              <Link href="/services" className="btn btn-ghost">View All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
