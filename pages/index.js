import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 3)
  return { props: { allPostsData } }
}

export default function Home({ allPostsData }) {
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const services = [
    { num: '01', title: 'Audit & Assurance', desc: 'Statutory, tax, internal, and GST audits. Risk-focused, independent, and delivered on time.' },
    { num: '02', title: 'Direct Tax Advisory', desc: 'ITR filing, tax planning, capital gains, advance tax, NRI taxation, DTAA, and assessment representation.' },
    { num: '03', title: 'GST & Indirect Tax', desc: 'Registration, monthly returns, ITC reconciliation, LUT filing, export advisory, and GST litigation support.' },
    { num: '04', title: 'Startup & Business Advisory', desc: 'Incorporation, DPIIT recognition, MSME registration, financial projections, fundraise readiness, and ESOP structuring.' },
    { num: '05', title: 'Virtual CFO Services', desc: 'MIS reporting, cash flow management, budgeting, board deck support, working capital optimization, and financial controls.' },
    { num: '06', title: 'Due Diligence & Valuation', desc: 'Buy-side and sell-side financial due diligence, business valuation, share valuation under Income Tax and FEMA.' },
    { num: '07', title: 'FEMA & International', desc: 'FDI / ODI compliance, FC-GPR, Form 145/146, DTAA advisory, transfer pricing, cross-border structuring.' },
    { num: '08', title: 'Corporate Secretarial', desc: 'Annual ROC filings, director KYC, share allotment, change of directors, registered office changes, statutory registers.' },
    { num: '09', title: 'Bookkeeping & Accounting', desc: 'Tally, Zoho Books, QuickBooks, Xero. Monthly close, financial statement preparation, payroll, and management reporting.' },
    { num: '10', title: 'Offshore Accounting', desc: 'End-to-end bookkeeping and financial reporting for international clients aligned with global accounting standards.' },
  ]

  return (
    <>
      <Head>
        <title>Mayank Om Jain & Associates | Chartered Accountants</title>
        <meta name="description" content="Mayank Om Jain & Associates — Chartered Accountants, India. Startup advisory, Virtual CFO, Tax, GST, FEMA/NRI. Strategic financial partner for founders, HNIs, and growing businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-eyebrow">Chartered Accountants · India</div>
          <h1>Not Just Compliance.<br /><em>Strategic Financial</em><br />Partnership.</h1>
          <p className="hero-desc">We work with startup founders, HNIs, NRIs, and growing businesses — building the financial foundation that enables confident decisions, clean compliance, and investment-ready growth.</p>
          <div className="hero-actions">
            <Link href="#contact" className="btn-primary">Start a Conversation</Link>
            <Link href="#services" className="btn-outline">Explore Services</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><div className="stat-num">100<span>+</span></div><div className="stat-label">Startup Engagements</div></div>
            <div className="stat-item"><div className="stat-num">7<span>+</span></div><div className="stat-label">Years Experience</div></div>
            <div className="stat-item"><div className="stat-num">13<span>+</span></div><div className="stat-label">Sectors Served</div></div>
            <div className="stat-item"><div className="stat-num">10<span>+</span></div><div className="stat-label">Service Areas</div></div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="serve-bg" id="serve">
        <div className="section-tag">Who We Serve</div>
        <h2 className="section-heading">Built for <em>every stage</em> of your journey.</h2>
        <p className="section-sub">From pre-incorporation to scale-up, from individual tax filing to NRI investment compliance — we are your one-roof financial partner.</p>
        <div className="serve-grid">
          {[
            { icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, title: 'Startup Founders', desc: 'Incorporation to fundraise readiness. SOW-backed engagements covering compliance, MIS, Virtual CFO, and investor-ready reporting.' },
            { icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, title: 'NRIs & HNIs', desc: 'FEMA, DTAA, NRE/NRO planning, property transactions, and cross-border tax structuring for Non-Resident Indians and high-net-worth individuals.' },
            { icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>, title: 'Growing Businesses', desc: 'SMEs and established enterprises needing robust audit, tax planning, GST compliance, and structured financial reporting systems.' },
            { icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>, title: 'Freelancers & Solopreneurs', desc: 'Simplified tax filing, GST registration, entity structuring advice, and compliance clarity for independent professionals.' },
            { icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>, title: 'Traders & Investors', desc: 'Capital gains computation, F&O tax treatment, advance tax planning, ITR filing, and portfolio-level tax efficiency strategies.' },
            { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, title: 'Service Providers', desc: 'GST on services, TDS compliance, professional fee structuring, and sector-specific advisory for consultants and service businesses.' },
          ].map((c, i) => (
            <div className="serve-card fade-up" key={i}>
              <div className="serve-icon"><svg viewBox="0 0 24 24">{c.icon}</svg></div>
              <h3>{c.title}</h3><p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="services-intro">
          <div>
            <div className="section-tag">Our Services</div>
            <h2 className="section-heading">Ten service areas.<br /><em>One trusted partner.</em></h2>
          </div>
          <p className="section-sub">End-to-end financial services delivered under one roof. No referrals, no hand-offs — every engagement managed directly by our team.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-item${activeService === i ? ' active' : ''}`} onClick={() => setActiveService(i)}>
              <div className="service-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="team-bg" id="team">
        <div className="section-tag" style={{color:'var(--teal)'}}>Our Team</div>
        <h2 className="section-heading" style={{color:'#fff'}}>The people behind <em>the practice.</em></h2>
        <div className="team-grid">
          {/* Mayank */}
          <div className="team-card fade-up">
            <Image src="/mayank.jpeg" alt="CA Mayank Jain" width={600} height={340} className="team-photo" />
            <div className="team-info">
              <div className="team-tag">Founder</div>
              <div className="team-name">CA Mayank Jain</div>
              <div className="team-title">Chartered Accountant · ICAI, November 2022</div>
              <p className="team-bio">Chartered Accountant with 7+ years of experience spanning financial analysis, due diligence, startup advisory, and Virtual CFO-style engagements across 13+ sectors. Also serves as a consultant at Alchemy Business Intelligence & Insights, bringing institutional-grade financial thinking to growing businesses.</p>
              <div className="team-creds">
                <div className="team-cred">AICA Level 1 — AI Fundamentals, ICAI</div>
                <div className="team-cred">100+ Startup Engagements · Healthcare, SaaS, FMCG, EdTech, Fintech & more</div>
                <div className="team-cred">Prior: Banshi Jain & Associates · 2017–2024</div>
              </div>
            </div>
          </div>
          {/* Vivek */}
          <div className="team-card fade-up">
            <Image src="/vivek.jpeg" alt="CA Vivek Jain" width={600} height={340} className="team-photo" />
            <div className="team-info">
              <div className="team-tag">Associate</div>
              <div className="team-name">CA Vivek Jain</div>
              <div className="team-title">Chartered Accountant · Investment Banking & M&A</div>
              <p className="team-bio">Distinguished background in investment banking and M&A advisory. Has worked with Intensive Fiscal Services, D.K. Surana Family Office, and Chhajed & Doshi CA Mumbai. Part of 5 landmark IPOs including Vishal Mega Mart (₹8,000 Cr) and Waaree Energies (₹4,300 Cr). Joined MOJAA in December 2025.</p>
              <div className="team-highlights">
                <span className="team-highlight-tag">Investment Banking</span>
                <span className="team-highlight-tag">M&A Advisory</span>
                <span className="team-highlight-tag">5 IPOs</span>
                <span className="team-highlight-tag">Due Diligence</span>
                <span className="team-highlight-tag">Capital Markets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MOJAA */}
      <section id="why">
        <div className="section-tag">Why MOJAA</div>
        <h2 className="section-heading">Not a commodity firm.<br /><em>A strategic partner.</em></h2>
        <div className="why-grid">
          {[
            { n:'01', t:'Proactive, Not Reactive', p:'We flag issues before they become problems. Compliance deadlines, tax exposures, regulatory changes — we inform you first, not after.' },
            { n:'02', t:'Founders Understand Us', p:'We speak the language of unit economics, MIS, cap tables, and investor decks — not just balance sheets. Built for modern business leaders.' },
            { n:'03', t:'One Roof, Every Service', p:'From GST registration to IPO readiness, all 10 service areas under one team. No referrals, no gaps, no coordination overhead for you.' },
            { n:'04', t:'Investment Banking DNA', p:"CA Vivek Jain's M&A and IPO background gives our team a capital markets lens that pure compliance firms simply do not have." },
            { n:'05', t:'Technology-First Delivery', p:'Tally, Zoho, QuickBooks, Xero — and AI-augmented workflows. We deliver faster, more accurate, and better documented work.' },
            { n:'06', t:'Direct Partner Access', p:'No juniors handling your file without oversight. CA Mayank Jain and CA Vivek Jain are personally involved in every engagement.' },
          ].map((w,i) => (
            <div className="why-card fade-up" key={i}>
              <div className="why-num">{w.n}</div>
              <h3>{w.t}</h3><p>{w.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      {allPostsData.length > 0 && (
        <section className="blog-bg" id="blog">
          <div className="section-tag">Insights</div>
          <h2 className="section-heading">From the <em>MOJAA desk.</em></h2>
          <p className="section-sub">Tax, compliance, startup law, and financial strategy — explained plainly for founders and business leaders.</p>
          <div className="blog-grid">
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <div className="blog-card" key={id}>
                <div className="blog-card-body">
                  <div className="blog-date">{date}</div>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <Link href={`/blog/${id}`} className="blog-read-more">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:'40px', textAlign:'center'}}>
            <Link href="/blog" className="btn-primary" style={{display:'inline-block'}}>View All Posts</Link>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section className="contact-bg" id="contact">
        <div className="section-tag" style={{color:'var(--teal)'}}>Get In Touch</div>
        <h2 className="section-heading" style={{color:'#fff'}}>Let&apos;s build your<br /><em>financial foundation.</em></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Reach us directly.</h3>
            <div className="contact-item">
              <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg></div>
              <div><div className="contact-label">Mobile / WhatsApp</div><div className="contact-value"><a href="tel:+919131325035">+91 91313 25035</a></div></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
              <div><div className="contact-label">Email</div><div className="contact-value"><a href="mailto:mayank@mojaa.in">mayank@mojaa.in</a></div></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div><div className="contact-label">Location</div><div className="contact-value">Chhattisgarh, India</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
              <div><div className="contact-label">Response Time</div><div className="contact-value">Within 24 business hours</div></div>
            </div>
          </div>
          <div>
            <form className="contact-form" onSubmit={e => { e.preventDefault(); const b = e.target.querySelector('.btn-submit'); b.textContent='Message Sent ✓'; b.style.background='#2d9087'; setTimeout(()=>{b.textContent='Send Message';b.style.background=''},3000); }}>
              <div className="form-row">
                <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required /></div>
                <div className="form-group"><label>Mobile Number</label><input type="tel" placeholder="+91 XXXXX XXXXX" required /></div>
              </div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@company.com" required /></div>
              <div className="form-group">
                <label>I Need Help With</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a service area</option>
                  <option>Startup Advisory & Incorporation</option>
                  <option>Virtual CFO Services</option>
                  <option>GST Registration & Compliance</option>
                  <option>Income Tax & Tax Planning</option>
                  <option>NRI / FEMA / International Tax</option>
                  <option>Due Diligence & Valuation</option>
                  <option>Audit & Assurance</option>
                  <option>Corporate Secretarial</option>
                  <option>Bookkeeping & Accounting</option>
                  <option>Other — I will explain below</option>
                </select>
              </div>
              <div className="form-group"><label>Brief Description (optional)</label><textarea placeholder="Tell us a bit about your requirement..."/></div>
              <div className="form-submit">
                <button type="submit" className="btn-submit">Send Message</button>
                <a href="https://wa.me/919131325035?text=Hello%20CA%20Mayank%2C%20I%20would%20like%20to%20discuss%20a%20financial%20matter." target="_blank" rel="noreferrer" className="whatsapp-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.128 1.528 5.866L.057 23.428a.5.5 0 0 0 .515.572l5.687-1.49A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.372l-.361-.214-3.735.979.997-3.643-.235-.374A9.86 9.86 0 0 1 2.1 12c0-5.468 4.432-9.9 9.9-9.9 5.468 0 9.9 4.432 9.9 9.9 0 5.468-4.432 9.9-9.9 9.9z"/></svg>
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
