import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Icon from '../components/Icon'

const faqs = [
  {
    q: "What does MOJAA's Virtual CFO service actually include each month?",
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

const inclusions = [
  'Monthly MIS & Management Reporting',
  'Cash Flow & Working Capital',
  'Budgeting & Variance Analysis',
  'Board Deck & Investor Reporting',
  'Financial Controls & Systems',
  'Fundraise & Diligence Support',
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
      speakable: { '@type': 'SpeakableSpecification', xpath: ['//section[@id="quick-answer"]'] },
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
      <main className="pt-32 pb-xl">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-gutter mb-xl">
          <div className="max-w-3xl">
            <span className="flex items-center gap-sm font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-md">
              <span className="w-8 h-px bg-secondary" />
              Service Offering
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight mb-md">
              Strategic financial leadership for scaling startups.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-md">
              Elevate your enterprise with bespoke Virtual CFO services designed to instill
              rigorous financial discipline, optimize capital allocation, and drive sustainable
              growth without the overhead of a full-time executive.
            </p>
            <Link href="/contact" className="inline-flex items-center text-primary-container font-medium group">
              <span className="border-b border-secondary pb-1 group-hover:border-b-2 transition-all duration-300">Consult our Advisory Team</span>
              <Icon name="arrow_forward" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" style={{ fontSize: '18px' }} />
            </Link>
          </div>
        </section>

        {/* Scope */}
        <section className="max-w-container-max mx-auto px-gutter py-xl border-t border-primary/10" id="services">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg">Comprehensive Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/[0.08] ghost-border">
            {[
              { icon: 'account_balance', title: 'Cash Flow Management', desc: 'Meticulous oversight of liquidity, ensuring optimal working capital and precise forecasting to navigate aggressive scaling phases seamlessly.' },
              { icon: 'pie_chart', title: 'Budgeting & Allocation', desc: 'Strategic formulation of operating budgets, aligning departmental spend with top-level corporate objectives for maximum capital efficiency.' },
              { icon: 'trending_up', title: 'Fundraising Support', desc: 'Development of institutional-grade financial models, data room preparation, and strategic advisory during equity or debt raising processes.' },
              { icon: 'summarize', title: 'Board Reporting', desc: 'Curation of definitive board packs, translating complex financial data into actionable intelligence for stakeholders and investors.' },
            ].map((cell) => (
              <div key={cell.title} className="bg-surface-container-lowest p-lg hover:bg-surface transition-colors duration-500">
                <div className="w-12 h-12 rounded-full border border-primary-container/20 flex items-center justify-center mb-sm text-primary-container">
                  <Icon name={cell.icon} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{cell.title}</h3>
                <p className="text-on-surface-variant font-body-md text-body-md">{cell.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audience & Inclusions */}
        <section className="max-w-container-max mx-auto px-gutter py-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
            <div className="md:col-span-5 space-y-md">
              <h2 className="font-headline-md text-headline-md text-primary">Who It&apos;s For</h2>
              <div className="w-16 h-px bg-secondary" />
              <p className="font-body-lg text-body-lg text-primary-container leading-relaxed">
                Designed for founders and growing businesses who need structure without a
                full-time finance hire.
              </p>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Our Virtual CFO framework provides the rigor and foresight of a seasoned
                financial executive. It bridges the gap for scaling entities that require
                senior-level oversight to navigate growth inflection points, without committing
                to the cost of a full-time executive.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-secondary mb-md">Core Inclusions</h3>
              <ul className="flex flex-col">
                {inclusions.map((item) => (
                  <li key={item} className="py-4 border-b border-primary/10 flex items-center justify-between group hover:bg-surface-container-lowest hover:px-2 transition-all duration-300">
                    <span className="font-headline-sm text-headline-sm text-primary text-xl">{item}</span>
                    <Icon name="check" className="text-outline group-hover:text-secondary transition-colors" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-container-max mx-auto px-gutter py-lg">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg">Frequently Asked Questions</h2>
          <div className="flex flex-col">
            {faqs.map(({ q, a }, i) => (
              <details key={q} className="faq-item border-b border-primary/10 py-md" open={i === 0}>
                <summary className="flex items-center justify-between gap-md font-body-md text-body-md font-semibold text-primary">
                  {q}
                  <Icon name="expand_more" className="faq-chevron text-secondary flex-shrink-0" />
                </summary>
                <p className="font-body-md text-body-md text-on-surface-variant mt-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-container-max mx-auto px-gutter py-xl my-lg" id="consult">
          <div className="bg-primary-container text-center py-20 px-8 relative overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <Icon name="assured_workload" className="absolute -right-20 -bottom-20 text-surface-container-lowest/[0.03] select-none pointer-events-none" style={{ fontSize: '300px' }} />
            <h2 className="font-headline-md text-headline-md text-on-primary mb-sm relative z-10 max-w-2xl">
              Ready to formalize your financial architecture?
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim mb-lg relative z-10 max-w-lg">
              Engage in a confidential consultation to explore how our Virtual CFO services align
              with your strategic trajectory.
            </p>
            <Link href="/contact" className="relative z-10 bg-secondary text-on-secondary px-8 py-4 rounded-sm font-label-caps text-label-caps tracking-widest hover:bg-surface-container-lowest hover:text-primary transition-colors duration-300">
              Consult our Virtual CFO Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
