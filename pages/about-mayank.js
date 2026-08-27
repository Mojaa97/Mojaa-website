import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useReveal } from '../lib/useReveal'

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
      '@type': 'ProfilePage',
      '@id': 'https://www.mojaa.in/about-mayank#webpage',
      name: 'CA Mayank Jain, Founder, Mayank Om Jain & Associates',
      url: 'https://www.mojaa.in/about-mayank',
      description: "CA Mayank Jain's professional journey, core capabilities, and work philosophy. Founder of Mayank Om Jain & Associates.",
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
    },
  ],
}

const capabilities = [
  {
    n: '01',
    t: 'Startup Financial Architecture',
    p: 'When a company incorporates, you have one opportunity to build the foundation right: correct chart of accounts, proper statutory register maintenance, GST setup, TAN integration, TDS compliance framework. I approach financial architecture as scalable infrastructure:',
    items: [
      <>Your month-end close should happen in <b>7 days, not 3 weeks</b>. This requires proper process design, not heroic effort.</>,
      <>Your MIS should tell you where cash is <b>actually</b> going, not where you think it&rsquo;s going. This requires proper ledger structure and reconciliation discipline.</>,
      <>Your statutory compliance should be anticipated <b>quarterly</b>, not discovered at audit time. This requires proper calendar management.</>,
    ],
    scenario: 'For a newly-incorporated FMCG startup transitioning from proprietorship: structured incorporation, GST setup, historical MIS reconstruction from the proprietorship period (6 months of revenue and expense data), books setup, DPIIT eligibility tracking, Startup India recognition, 5-year financial modeling, and Virtual CFO support, all coordinated under one SOW.',
  },
  {
    n: '02',
    t: 'Cap Table Structuring & Governance',
    p: 'Cap tables are complex instruments: multiple share classes with different rights, vesting schedules with cliffs and clawback provisions, investor rights like ROFR and anti-dilution, and related party transactions that create opacity if left undocumented. I build cap tables to three standards:',
    items: [
      <><b>Legal clarity:</b> every term is documented, every share allotment is formalized, no ambiguity about ownership or rights.</>,
      <><b>Operational simplicity:</b> founders understand their dilution path, employees understand their vesting, investors understand their terms.</>,
      <><b>Institutional readiness:</b> documentation is VC-standard, investor diligence finds no surprises, legal review is efficient.</>,
    ],
    scenario: 'A founder came to me with a cap table containing conflicting CCPS terms from 3 different funding rounds, each with different anti-dilution clauses. Restructuring was needed before Series B. We consolidated the terms, got investor alignment, and completed the process within 4 weeks, avoiding what would have been 8+ weeks of legal negotiation during the raise.',
  },
  {
    n: '03',
    t: 'Financial Modeling & Scenario Planning',
    p: 'Most startups build a financial model once and stop. I build dynamic models that are:',
    items: [
      <><b>Actuals-linked:</b> change your revenue, and projections recalculate; change your burn, and runway updates.</>,
      <><b>Scenario-based:</b> base case, optimistic case, and conservative case all live in one model.</>,
      <><b>Metric-focused:</b> not just P&amp;L; includes cash flow, runway, unit economics, and key ratios.</>,
      <><b>Investor-ready:</b> assumptions clearly separated, key drivers highlighted, talking points prepared.</>,
    ],
    scenario: 'A ₹2 Cr revenue SaaS startup was raising Series A with a model showing profitability in Year 3 at ₹50 Cr revenue, assuming 100% YoY growth with zero churn. I rebuilt it with realistic assumptions (60% YoY, 5% churn, real customer acquisition costs). The profitability timeline extended and the acquisition math looked different. I also modeled hiring a VP Sales (₹40L + team ≈ ₹1 Cr/year) and showed the hire actually extended runway by improving unit economics. Without this modeling, it would have happened speculatively.',
  },
  {
    n: '04',
    t: 'Due Diligence & Investor Readiness',
    p: 'Institutional investors conduct thorough financial due diligence: revenue quality, customer concentration risk, financial consistency across books and filings, statutory compliance, cap table clarity, and related party documentation. I run that same review internally before you fundraise:',
    items: [
      <><b>Revenue audit:</b> trace material transactions to supporting contracts and payment evidence.</>,
      <><b>Statutory compliance inventory:</b> verify all required registers, check completeness, validate signatures.</>,
      <><b>Financial consistency check:</b> reconcile books to bank statements, validate GST returns, cross-check ITR filings.</>,
      <><b>Cap table validation:</b> confirm all allotments are documented, verify share certificates, validate investor terms.</>,
      <><b>Related party mapping:</b> identify all RP transactions, ensure documentation and board approvals.</>,
    ],
    scenario: 'Before fundraising, internal DD for one client uncovered a founder investment that was never properly documented (it looked like personal debt instead of equity), incomplete statutory registers (AGM minutes missing for a year), and undocumented related-party rent payments. We fixed all of it within 4 weeks. When actual investor diligence happened, it was a smooth process, not a minefield.',
  },
  {
    n: '05',
    t: 'Tax Planning & Structuring',
    p: 'Tax planning is most effective when done during the business year, not after it&rsquo;s closed.',
    items: [
      <><b>Income Tax:</b> salary vs. dividend optimization, Section 80-IAC startup tax holiday eligibility (the ₹100 Cr turnover cap, the 7-year deduction window), capital gains treatment, and entity-level structuring (Pvt Ltd vs. LLP vs. Partnership vs. OPC).</>,
      <><b>GST:</b> rate classification across 5/12/18/28% slabs, input tax credit optimization, threshold vs. voluntary registration, and interstate supply treatment.</>,
    ],
    scenario: 'A founder was taking ₹2L monthly salary plus ₹50L annual dividend, with a tax outgo of ₹45L. We restructured to ₹1L salary plus ₹80L dividend, utilizing a corporate-level deduction that wasn&rsquo;t being used. Tax dropped to ₹28L, an annual saving of ₹17L.',
  },
  {
    n: '06',
    t: 'Virtual CFO Services (Fractional CFO)',
    p: "I work with founders who need ongoing financial leadership but can't support a full-time CFO hire. The engagement includes:",
    items: [
      <><b>Monthly financial review:</b> P&amp;L analysis, cash flow assessment, variance explanation, runway calculation.</>,
      <><b>Cash flow planning:</b> forecasting when you&rsquo;ll run out of cash, determining optimal fundraise timing, planning major expense decisions.</>,
      <><b>Burn rate optimization:</b> identifying inefficient expense lines, prioritizing cost cuts without compromising growth.</>,
      <><b>Investor relations:</b> board-ready financial dashboards, quarterly investor updates, annual performance summaries.</>,
      <><b>Term sheet analysis:</b> understanding valuation, liquidation preference and anti-dilution mechanics, and calculating the dilution waterfall across rounds.</>,
      <><b>Strategic financial guidance:</b> should you hire now, spend on marketing, build internally or outsource.</>,
    ],
    scenario: 'A founder running at ₹30L monthly burn thought he had 4 months of runway. Recalculation showed 2.5 months. We identified and cut two major expense lines (contractor overhead and SaaS subscriptions), bringing burn down to ₹20L. Runway extended to 5 months, enough extra time for better Series A negotiations instead of fundraising from a position of urgency. Estimated equity savings: ₹2–3 Cr in dilution.',
  },
]

const philosophy = [
  { t: 'Compliance is foundational, not strategic.', p: "Every startup needs clean books, proper statutory compliance, and current regulatory filings. But compliance alone doesn't build a financially confident business. Strategy and rigor do." },
  { t: 'Financial clarity enables better decisions.', p: 'When you know your runway down to the week, understand your unit economics precisely, and can see your cash flow six months forward, you make different decisions: faster, smarter decisions.' },
  { t: 'Proactive beats reactive.', p: 'Flagging a tax issue in month 6, when you can still restructure, is vastly different from discovering it at year-end audit when your options are limited. I prioritize early flagging.' },
  { t: 'Transparency and direct accountability.', p: "I own your engagement end-to-end. You're not talking to multiple people across your file. You're talking to me. When something changes or action is needed, you hear it directly." },
]

const sectors = ['SaaS', 'Healthcare (AI Diagnostics, Radiology)', 'FMCG', 'EdTech', 'Fintech', 'Logistics', 'D2C', 'Spices Export', 'B2B Platforms', 'Recruitment', 'Tour & Travel', 'Online Gifting', 'Civil Consultancy']

export default function AboutMayank() {
  useReveal()

  return (
    <>
      <Head>
        <title>CA Mayank Jain, Founder, Mayank Om Jain & Associates</title>
        <meta name="description" content="CA Mayank Jain's professional journey, core capabilities, and work philosophy. Founder of Mayank Om Jain & Associates, Chartered Accountant with 7+ years across startup advisory, due diligence, and Virtual CFO services." />
        <link rel="canonical" href="https://www.mojaa.in/about-mayank" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <span className="hero-eyebrow">Founder</span>
          <h1>CA Mayank Jain</h1>
          <p className="page-hero-meta" style={{ marginTop: '-10px' }}>Founder, Mayank Om Jain &amp; Associates &middot; Chartered Accountant &middot; Strategic Financial Advisor</p>
          <p style={{ marginTop: '22px' }}>I help founders and business leaders build financially confident organizations: ones where financial clarity drives decision-making, compliance is systematic, and growth is planned with precision.</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad">
        <div className="wrap">
          <div className="reveal founder-grid">
            <div className="founder-photo">
              <Image src="/mayank-jain.webp" alt="CA Mayank Jain, Founder of Mayank Om Jain & Associates" width={600} height={700} sizes="(max-width: 900px) 100vw, 460px" priority style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <div className="badge-row"><span className="icon-badge">1</span><span className="eyebrow">Overview</span></div>
              <h2 className="section-heading" style={{ marginBottom: '18px' }}>Building financially confident organizations.</h2>
              <div className="legal-copy">
                <p>I&rsquo;m a Chartered Accountant (qualified November 2022, ICAI) with 7+ years of hands-on experience across financial analysis, due diligence, startup advisory, and Virtual CFO services across 13+ sectors. I also consult with Alchemy Business Intelligence &amp; Insights on financial systems design and institutional-grade analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL JOURNEY */}
      <section className="section-pad light-soft">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <div className="badge-row"><span className="icon-badge">2</span><span className="eyebrow">Professional Journey</span></div>
            <h2 className="section-heading">From article apprentice to founder.</h2>
          </div>
          <div className="bio-timeline">
            <div className="bio-timeline-item reveal">
              <div className="period">2017 – 2020</div>
              <h3>Article Apprenticeship</h3>
              <p>Three years exposed to diverse engagement types across startup and corporate compliance:</p>
              <ul>
                <li><b>Startup compliance:</b> company incorporation, statutory compliance, regulatory registrations (DPIIT, MSME, Startup India, angel tax filings).</li>
                <li><b>Financial analysis:</b> cap table models, valuation workings, financial readiness assessments for founder-facing advisory.</li>
                <li><b>Due diligence:</b> assisted with startup sell-side diligence readiness: identifying documentation gaps, financial inconsistencies, and governance issues before investor DD.</li>
                <li><b>Tax &amp; audit:</b> supported statutory audits and tax audits for startups and LLPs.</li>
              </ul>
              <p style={{ marginTop: '4px' }}>This period taught me that startup financial challenges are structural, not computational. The issue isn&rsquo;t calculating a tax number; it&rsquo;s architecting a financial system that scales.</p>
            </div>

            <div className="bio-timeline-item reveal">
              <div className="period">2020 – 2024</div>
              <h3>Associate to Assistant Manager</h3>
              <p>Advanced to Associate (2020) and then Assistant Manager (2023). Deepened expertise across four areas:</p>
              <ul>
                <li><b>Startup compliance end-to-end:</b> set up 50+ companies from incorporation through first-year statutory compliance, learning what it takes to build a financial foundation that&rsquo;s clean, scalable, and audit-ready.</li>
                <li><b>Due diligence readiness:</b> a systematic process for preparing startups for investor due diligence: cap table audit, historical financial restatement, statutory compliance validation, related party documentation, and governance gap analysis.</li>
                <li><b>Financial valuation &amp; analysis:</b> valuations under Income Tax Act Section 56, FEMA regulations (FDI rounds), and Companies Act norms, learning that defensible valuation is about methodology clarity and assumption validation, not sophisticated spreadsheets.</li>
                <li><b>Virtual CFO support (fractional):</b> ongoing financial strategy: cash flow planning, budget vs. actuals, runway forecasting, hiring/fundraising timing, investor reporting. This work shaped the belief that financial advisory is ultimately about business decisions, not accounting mechanics.</li>
              </ul>
            </div>

            <div className="bio-timeline-item reveal">
              <div className="period">2024 – Present</div>
              <h3>Founder, Mayank Om Jain &amp; Associates</h3>
              <p>Incorporated MOJAA to build a financial advisory practice that serves founders and growing businesses with technical rigor, strategic clarity, and direct CA accountability.</p>
            </div>

            <div className="bio-timeline-item reveal">
              <div className="period">2022 – Present (Concurrent)</div>
              <h3>Consultant on Financial Systems</h3>
              <p>Advise on financial systems architecture and institutional-grade analytics for mid-market and scaling businesses, work that keeps my thinking anchored in how financial infrastructure scales with business complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <div className="badge-row"><span className="icon-badge">3</span><span className="eyebrow">Core Capabilities</span></div>
            <h2 className="section-heading">What I actually do for clients.</h2>
          </div>
          <div>
            {capabilities.map((c) => (
              <div className="bio-capability reveal" key={c.n}>
                <div className="cap-num">{c.n}</div>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
                <ul>
                  {c.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <div className="bio-scenario">
                  <div className="label">Real scenario (anonymized)</div>
                  <p>{c.scenario}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section-pad light-soft">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '720px' }}>
            <div className="badge-row"><span className="icon-badge">4</span><span className="eyebrow">Sectors &amp; Experience</span></div>
            <h2 className="section-heading" style={{ marginBottom: '18px' }}>Sector diversity matters.</h2>
            <div className="legal-copy">
              <p>A SaaS startup&rsquo;s financial structure, tax considerations, and fundraise strategy are fundamentally different from a manufacturing business. I don&rsquo;t apply one-size-fits-all frameworks.</p>
            </div>
            <div className="bio-tags">
              {sectors.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* WORK PHILOSOPHY */}
      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <div className="badge-row"><span className="icon-badge">5</span><span className="eyebrow">Work Philosophy</span></div>
            <h2 className="section-heading">How I think about the work.</h2>
          </div>
          <div>
            {philosophy.map((p) => (
              <div className="bio-principle reveal" key={p.t}>
                <h3>{p.t}</h3>
                <p>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad dark" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '600px' }}>
          <h2 className="section-heading" style={{ color: '#fff', marginBottom: '18px' }}>Have a business decision coming up?</h2>
          <Link href="/#contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
