import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useReveal } from '../lib/useReveal'
import { clientProfiles } from '../lib/clientsData'

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
      '@id': 'https://www.mojaa.in/our-clients#webpage',
      name: 'Our Clients | Mayank Om Jain & Associates',
      url: 'https://www.mojaa.in/our-clients',
      description: 'Who we work with and how: startup founders, venture-backed startups, SMEs, NRIs, freelancers, traders, MSMEs, incubators, and sector-specific businesses across SaaS, D2C, and EdTech.',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
    },
  ],
}

export default function OurClients() {
  useReveal()
  const [query, setQuery] = useState('')
  const [activeSlug, setActiveSlug] = useState(clientProfiles[0].slug)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && clientProfiles.some((c) => c.slug === hash)) {
      setActiveSlug(hash)
    }
  }, [])

  const selectClient = (slug) => {
    setActiveSlug(slug)
    window.history.replaceState(null, '', `#${slug}`)
    if (window.innerWidth < 900) {
      document.getElementById('client-detail-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const filtered = clientProfiles.filter((c) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q) || c.challenge.toLowerCase().includes(q)
  })

  const active = clientProfiles.find((c) => c.slug === activeSlug) || clientProfiles[0]

  return (
    <>
      <Head>
        <title>Our Clients | Mayank Om Jain & Associates</title>
        <meta name="description" content="Who we work with and how: startup founders, venture-backed startups, SMEs, NRIs, freelancers, traders, MSMEs, incubators, and sector-specific businesses across SaaS, D2C, and EdTech." />
        <link rel="canonical" href="https://www.mojaa.in/our-clients" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <main>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <span className="hero-eyebrow">Our Clients</span>
          <h1>Who We Serve</h1>
          <p>We work with specific types of businesses and individuals where financial strategy directly impacts growth. Search or pick a category to see how we work with each.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="clients-layout">
            <aside className="clients-sidebar">
              <div className="clients-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input
                  type="text"
                  placeholder="Search client type..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search client types"
                />
              </div>
              <div className="clients-nav-list" role="navigation" aria-label="Client types">
                {filtered.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    className={`client-nav-item${c.slug === active.slug ? ' active' : ''}`}
                    onClick={() => selectClient(c.slug)}
                  >
                    <span className="cni-num">{c.n}</span>
                    <span className="cni-text">
                      <span className="cni-title">{c.title}</span>
                      <span className="cni-sub">{c.subtitle}</span>
                    </span>
                  </button>
                ))}
                {filtered.length === 0 && <p className="cni-empty">No matches. Try a different search term.</p>}
              </div>
            </aside>

            <div className="client-detail" id="client-detail-panel">
              <div className="cap-num">{active.n}</div>
              <h3>{active.title}</h3>
              <div className="client-subtitle">{active.subtitle}</div>

              <div className="client-block">
                <div className="cb-label">Your Challenge</div>
                <p>{active.challenge}</p>
              </div>
              <div className="client-block">
                <div className="cb-label">What We Do</div>
                <p>{active.whatWeDo}</p>
              </div>
              <div className="client-block">
                <div className="cb-label">Why MOJAA</div>
                <p>{active.whyMojaa}</p>
              </div>
              <div className="client-block">
                <div className="cb-label">Typical Engagement</div>
                <p>{active.engagement}</p>
              </div>

              <div className="client-next">
                <p>{active.nextStep}</p>
                <Link href="/#contact" className="btn btn-primary">Book a 20-Min Discovery Call</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad light-soft">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <div className="badge-row"><span className="icon-badge">?</span><span className="eyebrow">Not Your Stage or Sector?</span></div>
          <h2 className="section-heading" style={{ marginBottom: '18px' }}>We probably still fit.</h2>
          <div className="legal-copy">
            <p>If you don&rsquo;t see your exact situation above, we likely still work with businesses like yours. Book a 20-minute discovery call and we&rsquo;ll assess fit and discuss options.</p>
            <p>Common sectors we&rsquo;ve worked with: Fintech, Healthtech, Logistics, Tour &amp; Travel, Online Gifting, FMCG, Spices Export, B2B Platforms, Recruitment, Real Estate, and more.</p>
            <p><b>The principle:</b> if you need financial strategy aligned with growth, not just compliance, we&rsquo;re a fit.</p>
          </div>
        </div>
      </section>

      <section className="section-pad dark" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '600px' }}>
          <h2 className="section-heading" style={{ color: '#fff', marginBottom: '18px' }}>Have a business decision coming up?</h2>
          <Link href="/#contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  )
}
