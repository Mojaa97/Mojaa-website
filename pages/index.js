import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 3)
  return { props: { allPostsData } }
}

const audiences = [
  { icon: 'rocket_launch', title: 'Startup Founders', desc: 'Incorporation to fundraise readiness. SOW-backed engagements covering compliance, MIS, Virtual CFO, and investor-ready reporting.' },
  { icon: 'public', title: 'NRIs & HNIs', desc: 'FEMA, DTAA, NRE/NRO planning, property transactions, and cross-border tax structuring for Non-Resident Indians and high-net-worth individuals.' },
  { icon: 'apartment', title: 'Growing Businesses', desc: 'SMEs and established enterprises needing robust audit, tax planning, GST compliance, and structured financial reporting systems.' },
  { icon: 'person', title: 'Freelancers & Solopreneurs', desc: 'Simplified tax filing, GST registration, entity structuring advice, and compliance clarity for independent professionals.' },
  { icon: 'show_chart', title: 'Traders & Investors', desc: 'Capital gains computation, F&O tax treatment, advance tax planning, ITR filing, and portfolio-level tax efficiency strategies.' },
  { icon: 'handshake', title: 'Service Providers', desc: 'GST on services, TDS compliance, professional fee structuring, and sector-specific advisory for consultants and service businesses.' },
]

const services = [
  { num: '01', icon: 'fact_check', title: 'Audit & Assurance', desc: 'Statutory, tax, internal, and GST audits. Risk-focused, independent, and delivered on time.' },
  { num: '02', icon: 'receipt_long', title: 'Direct Tax Advisory', desc: 'ITR filing, tax planning, capital gains, advance tax, NRI taxation, DTAA, and assessment representation.' },
  { num: '03', icon: 'account_balance_wallet', title: 'GST & Indirect Tax', desc: 'Registration, monthly returns, ITC reconciliation, LUT filing, export advisory, and GST litigation support.' },
  { num: '04', icon: 'rocket_launch', title: 'Startup & Business Advisory', desc: 'Incorporation, DPIIT recognition, MSME registration, financial projections, fundraise readiness, and ESOP structuring.' },
  { num: '05', icon: 'query_stats', title: 'Virtual CFO Services', desc: 'MIS reporting, cash flow management, budgeting, board deck support, working capital optimization, and financial controls.' },
  { num: '06', icon: 'search', title: 'Due Diligence & Valuation', desc: 'Buy-side and sell-side financial due diligence, business valuation, share valuation under Income Tax and FEMA.' },
  { num: '07', icon: 'public', title: 'FEMA & International', desc: 'FDI / ODI compliance, FC-GPR, Form 145/146, DTAA advisory, transfer pricing, cross-border structuring.' },
  { num: '08', icon: 'gavel', title: 'Corporate Secretarial', desc: 'Annual ROC filings, director KYC, share allotment, change of directors, registered office changes, statutory registers.' },
  { num: '09', icon: 'calculate', title: 'Bookkeeping & Accounting', desc: 'Tally, Zoho Books, QuickBooks, Xero. Monthly close, financial statement preparation, payroll, and management reporting.' },
  { num: '10', icon: 'language', title: 'Offshore Accounting', desc: 'End-to-end bookkeeping and financial reporting for international clients aligned with global accounting standards.' },
  { num: '11', icon: 'account_tree', title: 'Corporate Restructuring', desc: 'Business reorganization, mergers, demergers, and structuring for tax efficiency and operational clarity.' },
  { num: '12', icon: 'description', title: 'Legal & Investment Documentation', desc: 'Shareholder Agreement (SHA) and Founder Agreement drafting, term sheet review, and investment documentation support.' },
  { num: '13', icon: 'account_balance', title: 'Bank Loans & MSME Funding', desc: 'Project reports, CMA data preparation, and end-to-end documentation support for bank loans and MSME funding.' },
  { num: '14', icon: 'volunteer_activism', title: 'Government Grants & Schemes', desc: 'Startup India and MSME scheme assistance, subsidy applications, and government grant facilitation.' },
  { num: '15', icon: 'verified_user', title: 'FSSAI & Spice Board Certification', desc: 'FSSAI registration and licensing, plus Spice Board (CRES) certification and related registrations for F&B businesses.' },
]

const whyMojaa = [
  { n: '01', icon: 'notifications_active', t: 'Proactive, Not Reactive', p: 'We flag issues before they become problems. Compliance deadlines, tax exposures, regulatory changes — we inform you first, not after.' },
  { n: '02', icon: 'insights', t: 'Founders Understand Us', p: 'We speak the language of unit economics, MIS, cap tables, and investor decks — not just balance sheets. Built for modern business leaders.' },
  { n: '03', icon: 'layers', t: 'One Roof, Every Service', p: 'From GST registration to IPO readiness, all 15 service areas under one team. No referrals, no gaps, no coordination overhead for you.' },
  { n: '04', icon: 'account_balance', t: 'Investment Banking DNA', p: "CA Vivek Jain's M&A and IPO background gives our team a capital markets lens that pure compliance firms simply do not have." },
  { n: '05', icon: 'auto_awesome', t: 'Technology-First Delivery', p: 'Tally, Zoho, QuickBooks, Xero — and AI-augmented workflows. We deliver faster, more accurate, and better documented work.' },
  { n: '06', icon: 'support_agent', t: 'Direct Partner Access', p: 'No juniors handling your file without oversight. CA Mayank Jain and CA Vivek Jain are personally involved in every engagement.' },
]

export default function Home({ allPostsData }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = window.localStorage.getItem('mojaa-theme')
    if (saved === 'dark') setTheme('dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('mojaa-theme', next)
      return next
    })
  }

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
    ],
  }

  useEffect(() => {
    const els = document.querySelectorAll('.reveal-up')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('active')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Mayank Om Jain & Associates | Chartered Accountants</title>
        <meta name="description" content="Mayank Om Jain & Associates — Chartered Accountants, India. Startup advisory, Virtual CFO, Tax, GST, FEMA/NRI. Strategic financial partner for founders, HNIs, and growing businesses." />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main>
        {/* HERO */}
        <section className="min-h-[85vh] flex items-center relative overflow-hidden bg-surface-container-lowest dark:bg-[#0a0f1a] pt-20">
          <Image
            src="/hero-banner.png"
            alt="Mayank Om Jain & Associates"
            fill
            priority
            className="object-cover opacity-70 dark:opacity-40 pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-transparent dark:from-[#0a0f1a] dark:via-[#0a0f1a]/90 dark:to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(26,38,52,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,38,52,0.08) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
          <div className="max-w-container-max mx-auto px-gutter w-full relative z-10 py-xl">
            <div className="max-w-3xl reveal-up">
              <span className="font-label-caps text-label-caps tracking-widest text-secondary dark:text-[#e9c176] mb-md flex items-center gap-sm">
                <span className="w-8 h-px bg-secondary dark:bg-[#e9c176]" />
                Chartered Accountants · Strategic Advisors
              </span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-[#e9edf5] mb-lg leading-tight">
                Not just compliance. <span className="italic text-secondary dark:text-[#e9c176]">Strategic financial partnership.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#a6acb9] max-w-2xl mb-xl">
                We work with startup founders, HNIs, NRIs, and growing businesses building the
                financial foundation that enables confident decisions, clean compliance, and
                investment-ready growth.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link href="/contact" className="bg-primary text-on-primary dark:bg-[#e9c176] dark:text-[#1b1400] font-label-caps text-label-caps px-lg py-md rounded hover:bg-secondary-container hover:text-on-secondary-container dark:hover:bg-[#fed488] transition-colors duration-300 inline-flex items-center gap-xs">
                  Start a Conversation
                  <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
                </Link>
                <a href="#services" className="border border-primary/20 dark:border-white/20 text-primary dark:text-[#e9edf5] font-label-caps text-label-caps px-lg py-md rounded hover:bg-surface-variant dark:hover:bg-white/10 transition-colors duration-300">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CREDIBILITY BAND */}
        <section className="bg-primary-container dark:bg-[#111a29] text-on-primary py-lg">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md text-center divide-x divide-on-primary/10">
              <div className="px-sm reveal-up">
                <p className="font-headline-md text-headline-md mb-xs text-secondary-container">7+</p>
                <p className="font-label-caps text-label-caps text-primary-fixed-dim">Years of Excellence</p>
              </div>
              <div className="px-sm reveal-up">
                <p className="font-headline-md text-headline-md mb-xs text-secondary-container">200+</p>
                <p className="font-label-caps text-label-caps text-primary-fixed-dim">Client Engagements</p>
              </div>
              <div className="px-sm reveal-up">
                <p className="font-headline-md text-headline-md mb-xs text-secondary-container">13+</p>
                <p className="font-label-caps text-label-caps text-primary-fixed-dim">Sectors Served</p>
              </div>
              <div className="px-sm reveal-up">
                <p className="font-headline-md text-headline-md mb-xs text-secondary-container">ICAI</p>
                <p className="font-label-caps text-label-caps text-primary-fixed-dim">Affiliated Firm</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="bg-surface dark:bg-[#0d1420] py-xl">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl mb-lg">
              <span className="font-label-caps text-label-caps text-secondary dark:text-[#e9c176] uppercase tracking-widest mb-sm block">Who We Serve</span>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-[#e9edf5] mb-sm">
                Built for <span className="italic text-secondary dark:text-[#e9c176]">every stage</span> of your journey.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9]">
                From pre-incorporation to scale-up, from individual tax filing to NRI investment
                compliance — we are your one-roof financial partner.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {audiences.map((a) => (
                <div key={a.title} className="reveal-up bg-surface-container-lowest dark:bg-[#111a29] ghost-border rounded-lg p-lg hover:border-secondary-container/60 dark:hover:border-[#e9c176]/40 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary dark:text-[#e9c176] mb-md">
                    <Icon name={a.icon} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary dark:text-[#e9edf5] mb-sm">{a.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9]">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-surface-container dark:bg-[#121a2c] py-xl" id="services">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid md:grid-cols-2 gap-lg items-end mb-lg">
              <div>
                <span className="font-label-caps text-label-caps text-secondary dark:text-[#e9c176] uppercase tracking-widest mb-sm block">Our Services</span>
                <h2 className="font-headline-md text-headline-md text-primary dark:text-[#e9edf5]">
                  Fifteen service areas. <span className="italic text-secondary dark:text-[#e9c176]">One trusted partner.</span>
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9]">
                End-to-end financial services delivered under one roof. No referrals, no
                hand-offs — every engagement managed directly by our team.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-start">
              {services.map((s) => (
                <details
                  key={s.num}
                  className="faq-item group bg-surface-container-lowest dark:bg-[#0f1524] ghost-border rounded-lg px-lg py-md transition-colors duration-300 hover:border-secondary/40 dark:hover:border-[#e9c176]/40"
                >
                  <summary className="flex items-center gap-md">
                    <span className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary dark:text-[#e9c176] flex-shrink-0 transition-colors duration-300 group-open:bg-secondary group-open:text-on-secondary dark:group-open:bg-[#e9c176] dark:group-open:text-[#1b1400]">
                      <Icon name={s.icon} style={{ fontSize: '20px' }} />
                    </span>
                    <span className="flex-1 flex flex-col justify-center min-h-[52px]">
                      <span className="font-label-caps text-label-caps text-secondary dark:text-[#e9c176] block mb-[2px]">{s.num}</span>
                      <span className="font-body-md text-body-md font-semibold text-primary dark:text-[#e9edf5]">{s.title}</span>
                    </span>
                    <Icon name="expand_more" className="faq-chevron text-secondary dark:text-[#e9c176] flex-shrink-0" />
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] mt-sm pl-[52px] leading-relaxed">
                    {s.desc}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-primary-container dark:bg-[#111a29] py-xl" id="team">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl mb-lg">
              <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest mb-sm block">Our Team</span>
              <h2 className="font-headline-md text-headline-md text-on-primary">
                The people behind <span className="italic text-secondary-container">the practice.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="reveal-up bg-primary/40 border border-on-primary/10 rounded-lg overflow-hidden">
                <Image src="/mayank.jpeg" alt="CA Mayank Jain" width={600} height={480} className="w-full h-[420px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="p-lg">
                  <span className="font-label-caps text-label-caps text-secondary-container mb-xs block">Founder</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">CA Mayank Jain</h3>
                  <p className="font-body-md text-body-md text-primary-fixed-dim mb-md">Chartered Accountant · ICAI, November 2022</p>
                  <p className="font-body-md text-body-md text-on-primary/70 mb-md">
                    Chartered Accountant with over 7 years of experience in financial advisory,
                    audit, and taxation, having worked across 200+ engagements spanning 13+
                    sectors — helping businesses build strong financial foundations rather than
                    just meeting compliance deadlines. Founded Mayank Om Jain &amp; Associates to
                    be the partner businesses need through the year, not just once a year at
                    filing time.
                  </p>
                  <div className="flex flex-col gap-xs">
                    <p className="font-body-md text-body-md text-on-primary/60 border-l-2 border-secondary-container pl-sm">AICA Level 1 — AI Fundamentals, ICAI</p>
                    <p className="font-body-md text-body-md text-on-primary/60 border-l-2 border-secondary-container pl-sm">200+ Engagements · Healthcare, SaaS, FMCG, EdTech, Fintech &amp; more</p>
                    <p className="font-body-md text-body-md text-on-primary/60 border-l-2 border-secondary-container pl-sm">Prior: Banshi Jain &amp; Associates · 2017–2024</p>
                  </div>
                </div>
              </div>
              <div className="reveal-up bg-primary/40 border border-on-primary/10 rounded-lg overflow-hidden">
                <Image src="/vivek.jpeg" alt="CA Vivek Jain" width={600} height={480} className="w-full h-[420px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="p-lg">
                  <span className="font-label-caps text-label-caps text-secondary-container mb-xs block">Associate</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">CA Vivek Jain</h3>
                  <p className="font-body-md text-body-md text-primary-fixed-dim mb-md">Chartered Accountant · Investment Banking &amp; M&amp;A</p>
                  <p className="font-body-md text-body-md text-on-primary/70 mb-md">
                    Distinguished background in investment banking and M&amp;A advisory. Has
                    worked with Intensive Fiscal Services, D.K. Surana Family Office, and Chhajed
                    &amp; Doshi CA Mumbai. Part of 5 landmark IPOs including Vishal Mega Mart (₹8,000
                    Cr) and Waaree Energies (₹4,300 Cr). Joined MOJAA in December 2025.
                  </p>
                  <div className="flex flex-wrap gap-xs">
                    {['Investment Banking', 'M&A Advisory', '5 IPOs', 'Due Diligence', 'Capital Markets'].map((t) => (
                      <span key={t} className="font-label-caps text-label-caps px-sm py-xs bg-secondary-container/20 text-secondary-container rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY MOJAA */}
        <section className="bg-surface dark:bg-[#0d1420] py-xl" id="why">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl mb-lg">
              <span className="font-label-caps text-label-caps text-secondary dark:text-[#e9c176] uppercase tracking-widest mb-sm block">Why MOJAA</span>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-[#e9edf5]">
                Not a commodity firm. <span className="italic text-secondary dark:text-[#e9c176]">A strategic partner.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {whyMojaa.map((w) => (
                <div
                  key={w.n}
                  className="reveal-up group relative bg-surface-container-lowest dark:bg-[#111a29] ghost-border rounded-lg p-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 dark:hover:border-[#e9c176]/50 hover:shadow-lg"
                >
                  <span
                    className="font-headline-md absolute top-md right-lg text-primary/15 dark:text-white/10 select-none pointer-events-none transition-colors duration-300 group-hover:text-secondary/60 dark:group-hover:text-[#e9c176]/60"
                    style={{ fontSize: '56px' }}
                  >
                    {w.n}
                  </span>
                  <div className="relative w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary dark:text-[#e9c176] mb-md transition-colors duration-300 group-hover:bg-secondary group-hover:text-on-secondary dark:group-hover:bg-[#e9c176] dark:group-hover:text-[#1b1400]">
                    <Icon name={w.icon} />
                  </div>
                  <h3 className="relative font-body-md text-body-md font-semibold text-primary dark:text-[#e9edf5] mb-xs">{w.t}</h3>
                  <p className="relative font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9]">{w.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS PREVIEW */}
        {allPostsData.length > 0 && (
          <section className="bg-surface-container dark:bg-[#121a2c] py-xl" id="insights">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="max-w-2xl mb-lg">
                <span className="font-label-caps text-label-caps text-secondary dark:text-[#e9c176] uppercase tracking-widest mb-sm block">Insights</span>
                <h2 className="font-headline-md text-headline-md text-primary dark:text-[#e9edf5] mb-sm">
                  From the <span className="italic text-secondary dark:text-[#e9c176]">MOJAA desk.</span>
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9]">
                  Tax, compliance, startup law, and financial strategy — explained plainly for
                  founders and business leaders.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
                {allPostsData.map(({ id, date, title, excerpt }) => (
                  <Link href={`/blog/${id}`} key={id} className="bg-surface-container-lowest dark:bg-[#0f1524] ghost-border rounded p-md flex flex-col h-full hover:bg-surface dark:hover:bg-[#111a29] transition-colors">
                    <span className="font-label-caps text-label-caps text-on-surface-variant dark:text-[#a6acb9] mb-xs">{date}</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary dark:text-[#e9edf5] mb-sm">{title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] flex-grow mb-md">{excerpt}</p>
                    <span className="font-body-md text-body-md text-primary dark:text-[#e9c176] font-medium inline-flex items-center gap-xs">
                      Read More <Icon name="arrow_forward" style={{ fontSize: '16px' }} />
                    </span>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link href="/blog" className="inline-flex items-center gap-xs border border-primary/20 dark:border-white/20 text-primary dark:text-[#e9edf5] font-label-caps text-label-caps px-lg py-md rounded hover:bg-surface-variant dark:hover:bg-white/10 transition-colors duration-300">
                  View All Insights
                  <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-container-max mx-auto px-gutter py-xl" id="contact">
          <div className="bg-primary-container dark:bg-[#111a29] text-center py-20 px-8 rounded-lg relative overflow-hidden flex flex-col items-center justify-center">
            <Icon name="assured_workload" className="absolute -right-16 -bottom-16 text-surface-container-lowest/[0.04] select-none pointer-events-none" style={{ fontSize: '300px' }} />
            <h2 className="font-headline-md text-headline-md text-on-primary mb-sm relative z-10 max-w-2xl">
              Let&apos;s build your financial foundation.
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim mb-lg relative z-10 max-w-lg">
              Tell us about your business or your situation — we&apos;ll get back to you within
              24 business hours with a clear next step.
            </p>
            <Link href="/contact" className="relative z-10 bg-secondary text-on-secondary px-8 py-4 rounded font-label-caps text-label-caps tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300">
              Get In Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
