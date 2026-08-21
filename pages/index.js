import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CountUp from '../components/CountUp'
import { getSortedPostsData } from '../lib/posts'
import { services } from '../lib/services'
import { useReveal } from '../lib/useReveal'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 3)
  return { props: { allPostsData } }
}

const capabilities = [
  { label: 'Tax', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="9.5" cy="9.5" r="1.3" /><circle cx="14.5" cy="14.5" r="1.3" /><path d="M15 9l-6 6" /></svg> },
  { label: 'Funding', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6" /><circle cx="15" cy="15" r="6" /></svg> },
  { label: 'Compliance', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg> },
  { label: 'Cash Flow', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18V9M10 18V5M16 18v-7M20 18V3" /></svg> },
  { label: 'Investment', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l5-5 4 4 7-7" /><path d="M15 9h5v5" /></svg> },
  { label: 'Documentation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg> },
  { label: 'Growth', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-9" /><path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6z" /><path d="M12 12c0-3 2-5 6-5 0 3-2 5-6 5z" /></svg> },
]

const roofNodes = [
  { t: 'Audit', desc: 'Statutory, tax, internal and GST audits — independent and on time.', who: 'Businesses needing statutory or lender-mandated audits.', rel: ['Tax', 'Corp Secretarial'] },
  { t: 'Tax', desc: 'ITR filing, tax planning, capital gains, advance tax, GST, NRI taxation and DTAA.', who: 'Founders, traders, NRIs, HNIs.', rel: ['Audit', 'FEMA'] },
  { t: 'Startup Advisory', desc: 'Incorporation, DPIIT recognition, MSME registration, fundraise readiness, ESOP structuring.', who: 'Founders from idea to fundraise.', rel: ['Virtual CFO', 'Due Diligence'] },
  { t: 'Due Diligence', desc: 'Buy-side and sell-side diligence, business and share valuation.', who: 'Businesses raising, selling, or acquiring.', rel: ['Tax', 'Term Sheets'] },
  { t: 'Virtual CFO', desc: 'MIS, cash flow, budgeting, board reporting, working capital optimisation.', who: 'Businesses past early-stage, scaling operations.', rel: ['Accounting', 'Startup Advisory'] },
  { t: 'FEMA', desc: 'FDI/ODI compliance, FC-GPR, DTAA advisory, cross-border structuring, NRI taxation.', who: 'NRIs, foreign investors, cross-border businesses.', rel: ['Tax', 'Due Diligence'] },
  { t: 'Corp Secretarial', desc: 'ROC filings, director KYC, share allotment, statutory registers.', who: 'Every registered company, every year.', rel: ['Audit', 'Restructuring'] },
  { t: 'Accounting', desc: 'Tally, Zoho Books, QuickBooks, Xero — monthly close and offshore accounting.', who: 'Any business needing clean books.', rel: ['Virtual CFO', 'Tax'] },
  { t: 'Restructuring', desc: 'Mergers, demergers, conversions, and entity restructuring.', who: 'Businesses reorganising or consolidating entities.', rel: ['Corp Secretarial', 'Due Diligence'] },
  { t: 'SHA Drafting', desc: 'Founder equity splits, vesting terms, exit clauses, and shareholder rights.', who: 'Founders bringing on co-founders or investors.', rel: ['Term Sheets', 'Startup Advisory'] },
  { t: 'Term Sheets', desc: 'Term sheet review and investment documentation support.', who: 'Founders closing an investment round.', rel: ['SHA Drafting', 'Due Diligence'] },
  { t: 'MSME Loans', desc: 'Project reports, CMA data, and loan documentation for bank loans and MSME funding.', who: 'MSMEs and businesses raising debt.', rel: ['Govt Schemes', 'Virtual CFO'] },
  { t: 'Govt Schemes', desc: 'Startup India recognition, MSME schemes, and subsidy applications.', who: 'Startups and MSMEs seeking grants or schemes.', rel: ['MSME Loans', 'Startup Advisory'] },
  { t: 'Spice Board', desc: 'CRES and related registrations for spice exporters and processors.', who: 'Spice exporters and processors.', rel: ['FSSAI', 'Tax'] },
  { t: 'FSSAI', desc: 'Registration and licensing support for food and beverage businesses.', who: 'Food and beverage businesses.', rel: ['Spice Board', 'Accounting'] },
]

const scenarios = [
  { label: "I'm raising funding", chain: ['Financial statements', 'Due diligence', 'Valuation', 'Term sheet review', 'Shareholder agreement', 'Investment documentation', 'FEMA', 'Execution'] },
  { label: "I'm taking a loan", chain: ['Business financials', 'CMA data', 'Project report', 'Working capital analysis', 'Documentation', 'Bank submission'] },
  { label: "I'm starting a company", chain: ['Structuring', 'Incorporation', 'DPIIT / MSME registration', 'GST registration', 'Accounting setup', 'Compliance calendar'] },
  { label: "I'm expanding", chain: ['MIS reporting', 'Cash flow planning', 'Tax structuring', 'Working capital', 'Multi-state GST compliance'] },
  { label: "I'm bringing in an investor", chain: ['Valuation', 'Due diligence', 'Term sheet', 'Shareholder agreement', 'FEMA (FC-GPR)', 'Tax implications'] },
  { label: "I'm an NRI investing in India", chain: ['FEMA', 'DTAA', 'NRE/NRO structuring', 'Transaction compliance', 'Tax filing'] },
  { label: 'I need better financial control', chain: ['Bookkeeping cleanup', 'MIS setup', 'Budgeting', 'Virtual CFO', 'Board reporting'] },
  { label: 'I need to fix my compliance', chain: ['Compliance audit', 'GST reconciliation', 'ROC filings', 'Director KYC', 'Assessment representation'] },
]

const stages = [
  { n: '01', t: 'Idea', desc: "Before you register anything, structure decides your tax and liability position for years.", caps: ['Entity structuring', 'Founder agreements', 'Startup advisory'] },
  { n: '02', t: 'Incorporate', desc: 'Getting registered correctly the first time avoids costly restructuring later.', caps: ['Incorporation', 'DPIIT recognition', 'MSME registration', 'GST registration'] },
  { n: '03', t: 'Operate', desc: 'The unglamorous work that keeps a business compliant and audit-ready every month.', caps: ['Bookkeeping & accounting', 'GST returns', 'TDS compliance', 'Direct tax filing'] },
  { n: '04', t: 'Fund', desc: "Whether it's a bank loan or an investor cheque, funding runs on documentation.", caps: ['CMA data', 'Valuation', 'Due diligence', 'Investment documentation', 'FEMA'] },
  { n: '05', t: 'Scale', desc: 'Growth without financial visibility is how businesses lose control of cash, margins, and compliance all at once.', caps: ['Virtual CFO', 'MIS & board reporting', 'Multi-entity structuring', 'Investor & lender relations'] },
]

const audiences = [
  { title: 'Startups', desc: 'Funding, structuring, and compliance support from idea to fundraise.', tags: ['Startup Advisory', 'SHA Drafting', 'Fundraise Readiness'] },
  { title: 'MSMEs', desc: 'Bank loans, government schemes, GST, and day-to-day accounting.', tags: ['MSME Loans', 'Govt Schemes', 'GST'] },
  { title: 'Food & Beverage Businesses', desc: 'FSSAI registration, Spice Board certification, and compliance for F&B operations.', tags: ['FSSAI', 'Spice Board'] },
  { title: 'NRIs & HNIs', desc: 'FEMA, DTAA, and cross-border tax planning.', tags: ['FEMA', 'DTAA', 'Cross-Border Tax'] },
  { title: 'Traders & Freelancers', desc: 'Simple, accurate tax and GST filing.', tags: ['Tax Filing', 'GST'] },
]

const whyBlocks = [
  { n: '01', t: 'Proactive, not reactive.', p: 'We flag issues before they become problems. Compliance deadlines, tax exposures, regulatory changes — we inform you first, not after.', chips: ['Deadline', 'Alert', 'Action'] },
  { n: '02', t: 'Founders understand us.', p: 'We speak the language of unit economics, MIS, cap tables and investor decks — not just balance sheets. Built for modern business leaders.' },
  { n: '03', t: 'One roof, every service.', p: 'From FSSAI registration to fundraise readiness, all 15 service areas sit under one team. No referrals, no gaps, no coordination overhead for you.', chips: ['Audit', 'Tax', 'FSSAI', 'CFO', 'One team'] },
  { n: '04', t: 'Investment banking DNA.', p: "CA Vivek Jain's M&A and IPO background gives the team a capital markets lens that pure compliance firms don't have." },
  { n: '05', t: 'Technology-first delivery.', p: 'Tally, Zoho Books, QuickBooks, Xero — plus AI-augmented workflows. Faster, more accurate, better documented work.', chips: ['Tally', 'Zoho Books', 'QuickBooks', 'Xero'] },
  { n: '06', t: 'Direct partner access.', p: 'No junior handling your file without oversight. CA Mayank Jain and CA Vivek Jain are personally involved in every engagement — you speak to the people actually doing the work.', chips: ['You', 'CA directly'] },
]

const scenarioCards = [
  { quote: '"We need a bank loan."', chain: ['Business data', 'CMA data', 'Project report', 'Financial analysis', 'Documentation', 'Bank submission'] },
  { quote: '"We\'re preparing for investment."', chain: ['Financial statements', 'Due diligence', 'Valuation', 'Term sheet', 'SHA', 'Investment documentation'] },
  { quote: '"I\'m an NRI investing in India."', chain: ['FEMA', 'Tax', 'DTAA', 'Transaction structuring', 'Compliance'] },
  { quote: '"We\'re scaling quickly."', chain: ['Accounting', 'MIS', 'Cash flow', 'Virtual CFO', 'Tax', 'Financial controls'] },
]

const numbers = [
  { n: '200+', l: 'Startup Engagements' },
  { n: '13+', l: 'Sectors Served' },
  { n: '5', l: 'IPOs on the Team’s Track Record' },
  { n: '₹12,300 Cr+', l: 'Capital Markets Deals' },
]

const faqs = [
  { q: 'What does Mayank Om Jain & Associates actually specialize in?', a: 'Fifteen connected service areas — audit, tax, startup and transaction advisory, due diligence, Virtual CFO, FEMA and NRI compliance, corporate secretarial, bookkeeping, corporate restructuring, SHA and founder agreement drafting, term sheet review, MSME loans and funding support, government scheme assistance, and FSSAI/Spice Board certification — delivered by one team instead of being scattered across referrals.' },
  { q: 'Do you work with businesses outside India?', a: 'Yes. We regularly support NRIs, overseas Indians, and international clients needing offshore accounting or FEMA-compliant cross-border structuring.' },
  { q: 'How are you different from a traditional CA firm?', a: "We're built around how founders actually operate — MIS, cap tables, investor decks — not just annual compliance. CA Vivek Jain's investment banking background also brings a capital markets lens most compliance firms don't have." },
  { q: "Can you help before I've even incorporated my company?", a: "Yes. Structure decides your tax and liability position for years, so we're often involved before incorporation — not just after." },
  { q: 'What does a typical engagement look like?', a: "It starts with a conversation about what's actually happening in your business, then we scope the specific service areas it touches. Most clients end up engaging us across more than one area over time." },
  { q: 'How quickly can we get started?', a: 'Most engagements begin within a week of an initial call. We respond to every enquiry within 24 business hours.' },
]

export default function Home({ allPostsData }) {
  const [formState, setFormState] = useState('idle')
  const [activeScenario, setActiveScenario] = useState(0)
  const [chainShown, setChainShown] = useState(false)
  const [activeRoof, setActiveRoof] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const [capsShown, setCapsShown] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [roofPaused, setRoofPaused] = useState(false)
  const [stagePaused, setStagePaused] = useState(false)

  useReveal()

  useEffect(() => {
    setChainShown(false)
    const t = setTimeout(() => setChainShown(true), 30)
    return () => clearTimeout(t)
  }, [activeScenario])

  useEffect(() => {
    setCapsShown(false)
    const t = setTimeout(() => setCapsShown(true), 30)
    return () => clearTimeout(t)
  }, [activeStage])

  useEffect(() => {
    if (roofPaused) return
    const t = setTimeout(() => setActiveRoof((r) => (r + 1) % roofNodes.length), 4000)
    return () => clearTimeout(t)
  }, [activeRoof, roofPaused])

  useEffect(() => {
    if (stagePaused) return
    const t = setTimeout(() => setActiveStage((s) => (s + 1) % stages.length), 4500)
    return () => clearTimeout(t)
  }, [activeStage, stagePaused])

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.mojaa.in/#organization',
        name: 'Mayank Om Jain & Associates',
        url: 'https://www.mojaa.in',
        logo: 'https://www.mojaa.in/favicon.ico',
        telephone: '+919131325035',
        email: 'mayank@mojaa.in',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+919131325035',
            email: 'mayank@mojaa.in',
            contactType: 'customer support',
            areaServed: 'India',
            availableLanguage: 'English',
          },
        ],
        areaServed: 'India',
        sameAs: ['https://www.linkedin.com/in/jainmayank13/'],
      },
      {
        '@type': 'Person',
        '@id': 'https://www.mojaa.in/#mayank-jain',
        name: 'CA Mayank Jain',
        jobTitle: 'Chartered Accountant',
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'ICAI' },
        sameAs: ['https://www.linkedin.com/in/jainmayank13/'],
        knowsAbout: ['Startup Advisory', 'Virtual CFO', 'FEMA', 'GST', 'Income Tax'],
        affiliation: { '@id': 'https://www.mojaa.in/#organization' },
      },
      {
        '@type': 'Person',
        '@id': 'https://www.mojaa.in/#vivek-jain',
        name: 'CA Vivek Jain',
        jobTitle: 'Chartered Accountant',
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'ICAI' },
        sameAs: ['https://www.linkedin.com/in/jainmayank13/'],
        knowsAbout: ['M&A', 'Due Diligence', 'IPO', 'Capital Markets'],
        affiliation: { '@id': 'https://www.mojaa.in/#organization' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.mojaa.in/#faq',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }

  const roof = roofNodes[activeRoof]
  const roofCount = roofNodes.length

  return (
    <>
      <Head>
        <title>Mayank Om Jain & Associates | Chartered Accountants</title>
        <meta name="description" content="Mayank Om Jain & Associates — a full-service Chartered Accountancy firm for startups, MSMEs, NRIs, HNIs, traders, and food businesses. Audit, tax, Virtual CFO, FEMA, funding, and compliance — all under one roof." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      {/* HERO */}
      <section className="hero dark" id="hero">
        <div className="wrap hero-grid">
          <span className="hero-eyebrow">Chartered Accountants · Strategic Advisors</span>
          <h1>Your business doesn&rsquo;t make decisions <em>only at year&#8209;end.</em></h1>
          <div className="sub-h">So why should your CA only show up at year-end? Mayank Om Jain &amp; Associates works with founders, businesses, NRIs and professionals throughout the year across tax, funding, compliance and finance.</div>
          <div className="hero-ctas">
            <Link href="#contact" className="btn btn-primary">Talk to an Expert</Link>
            <Link href="#services" className="btn btn-ghost">See what we handle</Link>
          </div>
        </div>
      </section>

      {/* HERO STATS + ORBIT (solid bg, below the banner photo) */}
      <section className="hero-below">
        <div className="hero-stats">
          <div><CountUp value="200+" /><span>Startup Engagements</span></div>
          <div><CountUp value="7+" /><span>Years Experience</span></div>
          <div><CountUp value="13+" /><span>Sectors Served</span></div>
          <div><CountUp value="15" /><span>Service Areas</span></div>
        </div>
        <div className="wrap" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div className="capability-panel">
            <div className="capability-head">
              <span className="capability-eyebrow">What we cover</span>
              <h3>Every function your business runs on.</h3>
            </div>
            <div className="capability-grid">
              {capabilities.map((c) => (
                <div className="capability-card" key={c.label}>
                  <span className="capability-icon">{c.icon}</span>
                  <span className="capability-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ONE DECISION */}
      <section className="section-pad" id="decision">
        <div className="wrap">
          <div className="decision-head reveal">
            <div className="badge-row"><span className="icon-badge">&#9670;</span><span className="eyebrow">Our Method</span></div>
            <h2 className="section-heading">One business decision can create ten financial decisions.</h2>
            <p style={{ marginTop: '16px', color: 'var(--ink-soft)', fontSize: '15.5px' }}>Pick what&rsquo;s actually happening in your business. We&rsquo;ll show you what it touches.</p>
          </div>

          <div className="scenario-grid reveal">
            {scenarios.map((s, i) => (
              <button
                key={s.label}
                className={`scenario-chip${activeScenario === i ? ' active' : ''}`}
                onClick={() => setActiveScenario(i)}
                type="button"
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="chain-stage reveal">
            <span className="chain-label">{scenarios[activeScenario].label}</span>
            <div className="chain-track">
              {scenarios[activeScenario].chain.map((item, i) => (
                <span key={item} style={{ display: 'contents' }}>
                  {i > 0 && <span className={`chain-arrow${chainShown ? ' show' : ''}`} style={{ transitionDelay: `${i * 0.08}s` }}>&#8594;</span>}
                  <span className={`chain-item${chainShown ? ' show' : ''}`} style={{ transitionDelay: `${i * 0.08}s` }}>{item}</span>
                </span>
              ))}
            </div>
            <div className="chain-footer">
              <p>One conversation. Multiple connected pieces.</p>
              <Link href="#contact" className="btn btn-primary">Contact us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ONE ROOF */}
      <section className="section-pad dark" id="roof">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '50px' }}>
            <div className="badge-row"><span className="icon-badge">&#9678;</span><span className="eyebrow">One Roof, Every Service</span></div>
            <h2 className="section-heading" style={{ color: '#fff' }}>One firm. More of what your business needs.</h2>
          </div>
          <div className="roof-layout">
            <div
              className="roof-wheel reveal"
              onMouseEnter={() => setRoofPaused(true)}
              onMouseLeave={() => setRoofPaused(false)}
            >
              <div className="roof-center">Our<br />Firm</div>
              {roofNodes.map((node, i) => {
                const angle = (i / roofCount) * 2 * Math.PI - Math.PI / 2
                const x = 50 + 40 * Math.cos(angle)
                const y = 50 + 40 * Math.sin(angle)
                return (
                  <div
                    key={node.t}
                    className={`roof-node${activeRoof === i ? ' active' : ''}`}
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
                    onClick={() => setActiveRoof(i)}
                  >
                    {node.t}
                  </div>
                )
              })}
            </div>
            <div className="roof-panel reveal">
              <span className="rp-tag">{roof.who}</span>
              <h3>{roof.t}</h3>
              <p>{roof.desc}</p>
              <div className="roof-related">
                {roof.rel.map((r) => <span key={r}>{r}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" id="services">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px' }}>
            <div className="badge-row"><span className="icon-badge">15</span><span className="eyebrow">Our Services</span></div>
            <h2 className="section-heading">15 service areas. <em>One trusted partner.</em></h2>
            <p className="section-sub" style={{ marginTop: '16px' }}>End-to-end financial services delivered under one roof. No referrals, no hand-offs — every engagement managed directly by our team.</p>
          </div>
          <div className="services-grid reveal-stagger">
            {services.map((s) => (
              <Link href={s.href || `/services/${s.slug}`} className="service-card" key={s.num}>
                <span className="service-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-card-cta">Learn more <span>&rarr;</span></span>
              </Link>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: '36px', textAlign: 'center' }}>
            <Link href="/services" className="btn btn-ghost">View All Services</Link>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="section-pad light-soft">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '680px', marginBottom: '50px' }}>
            <div className="badge-row"><span className="icon-badge">&#8599;</span><span className="eyebrow">The Business Lifecycle</span></div>
            <h2 className="section-heading">We can be involved before the decision — not just after it.</h2>
          </div>
          <div className="reveal" onMouseEnter={() => setStagePaused(true)} onMouseLeave={() => setStagePaused(false)}>
            <div className="stage-track">
              {stages.map((s, i) => (
                <button
                  key={s.n}
                  className={`stage-btn${activeStage === i ? ' active' : ''}`}
                  onClick={() => setActiveStage(i)}
                  type="button"
                >
                  <span className="n">{s.n}</span>{s.t}
                  {activeStage === i && !stagePaused && <span className="stage-progress" key={activeStage} />}
                </button>
              ))}
            </div>
            <div className="stage-panel">
              <div className="sp-left">
                <h3>{stages[activeStage].t}</h3>
                <p>{stages[activeStage].desc}</p>
              </div>
              <div className="sp-caps">
                {stages[activeStage].caps.map((c, i) => (
                  <span key={c} className={`sp-cap${capsShown ? ' show' : ''}`} style={{ transitionDelay: `${i * 0.06}s` }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section-pad" id="serve">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px' }}>
            <div className="badge-row"><span className="icon-badge">&#10003;</span><span className="eyebrow">Who We Serve</span></div>
            <h2 className="section-heading">Built for <em>every stage</em> of your journey.</h2>
            <p className="section-sub" style={{ marginTop: '16px' }}>From pre-incorporation to scale-up, from FSSAI licensing to NRI investment compliance — we are your one-roof financial partner.</p>
          </div>
          <div className="audience-grid reveal-stagger">
            {audiences.map((a) => (
              <div className="audience-card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <div className="ac-tags">
                  {a.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-pad light-soft">
        <div className="wrap founder-grid">
          <div className="reveal founder-photo">
            <Image src="/mayank.jpeg" alt="CA Mayank Jain, Founder of Mayank Om Jain & Associates" width={600} height={700} style={{ width: '100%', height: 'auto' }} />
            <div className="fp-badge">Chartered Accountant · ICAI, November 2022</div>
          </div>
          <div className="reveal">
            <div className="founder-name">CA Mayank Jain — Founder</div>
            <h2>You shouldn&rsquo;t have to explain your business five times.</h2>
            <p className="desc">Chartered Accountant with over 7 years of experience in financial advisory, audit, and taxation, across 200+ engagements spanning 13+ sectors — helping businesses build strong financial foundations rather than just meet compliance deadlines. He founded Mayank Om Jain &amp; Associates because most businesses don&rsquo;t need a firm that shows up once a year to file returns — they need a partner who is involved through the year, understands the business, and helps them make better financial and legal decisions. Also a consultant at Alchemy Business Intelligence &amp; Insights; previously at Banshi Jain &amp; Associates, 2017–2024.</p>
            <div className="founder-numbers">
              <div><CountUp value="7+" /><span>Years</span></div>
              <div><CountUp value="200+" /><span>Engagements</span></div>
              <div><CountUp value="13+" /><span>Sectors</span></div>
              <div><CountUp value="15" /><span>Service Areas</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" id="team">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px' }}>
            <div className="badge-row"><span className="icon-badge">2</span><span className="eyebrow">Our Team</span></div>
            <h2 className="section-heading">The people behind <em>the practice.</em></h2>
          </div>
          <div className="team-grid reveal-stagger">
            <div className="team-card">
              <div className="team-photo-row">
                <Image src="/mayank.jpeg" alt="CA Mayank Jain" width={76} height={76} />
                <div>
                  <div className="team-role">Founder</div>
                  <h3>CA Mayank Jain</h3>
                  <div className="cred">Chartered Accountant · ICAI, Nov 2022</div>
                </div>
              </div>
              <p className="bio">7+ years and 200+ engagements across financial advisory, audit, and taxation. AICA Level 1 — AI Fundamentals, ICAI.</p>
              <div className="team-tags">
                <span>Financial Advisory</span><span>Tax</span><span>Startup Advisory</span><span>Virtual CFO</span><span>Due Diligence</span>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo-row">
                <Image src="/vivek.jpeg" alt="CA Vivek Jain" width={76} height={76} />
                <div>
                  <div className="team-role">Associate</div>
                  <h3>CA Vivek Jain</h3>
                  <div className="cred">Investment Banking &amp; M&amp;A · Joined Dec 2025</div>
                </div>
              </div>
              <p className="bio">Background spanning Intensive Fiscal Services, D.K. Surana Family Office and Chhajed &amp; Doshi CA Mumbai. Part of 5 landmark IPOs, including Vishal Mega Mart (₹8,000 Cr) and Waaree Energies (₹4,300 Cr).</p>
              <div className="team-tags">
                <span>Investment Banking</span><span>M&amp;A</span><span>Capital Markets</span><span>5 IPOs</span><span>Due Diligence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad light-soft" id="why">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '10px' }}>
            <div className="badge-row"><span className="icon-badge">&#9733;</span><span className="eyebrow">Why Choose Us</span></div>
            <h2 className="section-heading">Not a commodity firm. <em>A strategic partner.</em></h2>
          </div>

          {whyBlocks.map((w) => (
            <div className="why-block reveal" key={w.n}>
              <div className="why-num">{w.n}</div>
              <div>
                <h3>{w.t}</h3>
                <p>{w.p}</p>
                {w.chips && (
                  <div className="why-anim">
                    {w.chips.map((c, i) => (
                      <span key={c} style={{ display: 'contents' }}>
                        {i > 0 && <span className="wa-arrow">&#8594;</span>}
                        <span
                          className="wa-node"
                          style={i === w.chips.length - 1 && w.chips.length > 1 ? { borderColor: 'var(--teal-light)', background: 'rgba(79,163,150,.15)' } : undefined}
                        >
                          {c}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px' }}>
            <div className="badge-row"><span className="icon-badge">&#9654;</span><span className="eyebrow">In Practice</span></div>
            <h2 className="section-heading">What this looks like in real life.</h2>
            <p className="section-sub" style={{ marginTop: '16px' }}>Anonymised, illustrative scenarios — not client case studies.</p>
          </div>
          <div className="scenario-cards reveal-stagger">
            {scenarioCards.map((s) => (
              <div className="scenario-card" key={s.quote}>
                <div className="sc-quote">{s.quote}</div>
                <div className="sc-chain">
                  {s.chain.map((c, i) => (
                    <span key={c} style={{ display: 'contents' }}>
                      {i > 0 && <span className="arrow">&#8594;</span>}
                      <span className="node">{c}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section-pad dark">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 10px' }}>
            <span className="eyebrow" style={{ textAlign: 'center' }}>By The Numbers</span>
          </div>
        </div>
        <div className="numbers-grid reveal-stagger">
          {numbers.map((n) => (
            <div className="number-cell" key={n.l}>
              <b>{n.n}</b>
              <span>{n.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      {allPostsData.length > 0 && (
        <section className="section-pad" id="blog">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: '640px' }}>
              <div className="badge-row"><span className="icon-badge">&#9998;</span><span className="eyebrow">Insights</span></div>
              <h2 className="section-heading">Useful answers to expensive questions.</h2>
              <p className="section-sub" style={{ marginTop: '16px' }}>Tax, compliance, startup law and financial strategy — explained without unnecessary jargon.</p>
            </div>
            <div className="blog-grid reveal-stagger">
              {allPostsData.map(({ id, date, title, excerpt }) => (
                <Link className="blog-card" href={`/blog/${id}`} key={id}>
                  <span className="blog-date">{date}</span>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <span className="rm">Read More &#8594;</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <Link href="/blog" className="btn btn-primary">View All Posts</Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-pad light-soft">
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

      {/* CONTACT */}
      <section className="section-pad contact-section" id="contact">
        <div className="wrap contact-grid">
          <div className="reveal">
            <div className="badge-row"><span className="icon-badge">&#8594;</span><span className="eyebrow">Get In Touch</span></div>
            <h2>Have a business decision coming up?</h2>
            <p className="lede">Let&rsquo;s understand the financial, tax and compliance side before you make the move.</p>
            <div className="reach-item">
              <span className="rl">Mobile / WhatsApp</span>
              <a href="tel:+919131325035">+91 91313 25035</a>
            </div>
            <div className="reach-item">
              <span className="rl">Email</span>
              <a href="mailto:mayank@mojaa.in">mayank@mojaa.in</a>
            </div>
            <div className="reach-item">
              <span className="rl">Location</span>
              <div>India</div>
            </div>
            <div className="reach-item">
              <span className="rl">Response Time</span>
              <div style={{ fontSize: '16px', color: 'var(--ink-on-dark-soft)' }}>Within 24 business hours</div>
            </div>
          </div>
          <div className="reveal form-box">
            {formState === 'success' ? (
              <div className="contact-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48"><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We&rsquo;ll get back to you within 24 business hours.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  setFormState('submitting')
                  const data = Object.fromEntries(new FormData(e.target))
                  try {
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    })
                    setFormState(res.ok ? 'success' : 'error')
                  } catch {
                    setFormState('error')
                  }
                }}
              >
                <div className="form-row"><label>Full Name</label><input type="text" name="name" placeholder="Your name" required /></div>
                <div className="form-row"><label>Mobile Number</label><input type="tel" name="mobile" placeholder="+91" required /></div>
                <div className="form-row"><label>Email Address</label><input type="email" name="email" placeholder="you@company.com" required /></div>
                <div className="form-row">
                  <label>I Need Help With</label>
                  <select name="service" required defaultValue="">
                    <option value="" disabled>Select a service area</option>
                    <option>Startup Advisory &amp; Incorporation</option>
                    <option>Virtual CFO Services</option>
                    <option>Direct &amp; Indirect Taxation</option>
                    <option>NRI / FEMA Compliance</option>
                    <option>Due Diligence &amp; Valuation</option>
                    <option>Audit &amp; Assurance</option>
                    <option>Corporate Secretarial &amp; ROC Compliance</option>
                    <option>Bookkeeping &amp; Offshore Accounting</option>
                    <option>Corporate Restructuring</option>
                    <option>SHA &amp; Founder Agreement Drafting</option>
                    <option>Term Sheet &amp; Investment Documentation</option>
                    <option>Bank Loans &amp; MSME Funding Support</option>
                    <option>Government Grants &amp; Scheme Assistance</option>
                    <option>FSSAI Registration &amp; Licensing</option>
                    <option>Spice Board Certification</option>
                    <option>Other — I will explain below</option>
                  </select>
                </div>
                <div className="form-row"><label>Brief Description (optional)</label><textarea name="message" rows="3" placeholder="What's going on?" /></div>
                {formState === 'error' && (
                  <p style={{ color: '#f87171', marginBottom: '12px', fontSize: '13px' }}>Something went wrong. Please try WhatsApp or email us directly.</p>
                )}
                <button type="submit" className="btn-submit" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
