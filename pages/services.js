import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { services, serviceGroups } from '../lib/services'
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
      '@type': 'WebPage',
      '@id': 'https://www.mojaa.in/services#webpage',
      name: 'Services | Mayank Om Jain & Associates',
      url: 'https://www.mojaa.in/services',
      description: '15 service areas spanning audit, taxation, startup advisory, virtual CFO, FEMA/NRI compliance, and specialised licensing, delivered by one team.',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.mojaa.in/services#itemlist',
      isPartOf: { '@id': 'https://www.mojaa.in/services#webpage' },
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.desc,
          url: `https://www.mojaa.in${s.href || `/services/${s.slug}`}`,
          provider: { '@id': 'https://www.mojaa.in/#organization' },
        },
      })),
    },
  ],
}

export default function Services() {
  useReveal()

  return (
    <>
      <Head>
        <title>Services | Mayank Om Jain & Associates</title>
        <meta name="description" content="15 service areas spanning audit, taxation, startup advisory, virtual CFO, FEMA/NRI compliance, and specialised licensing, delivered by one team, under one roof." />
        <link rel="canonical" href="https://www.mojaa.in/services" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <span className="hero-eyebrow">15+ Service Areas · One Platform</span>
          <h1>Our services deliver on every front.</h1>
          <p>From incorporation to fundraise, from monthly bookkeeping to FEMA compliance, every service your business needs sits under one roof, managed directly by our team. No referrals, no hand-offs.</p>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <Link href="/#contact" className="btn btn-primary">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      {serviceGroups.map((group) => (
        <section className="section-pad" id={group.slug} key={group.slug}>
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: '640px' }}>
              <div className="badge-row"><span className="icon-badge">{services.filter((s) => s.group === group.slug).length}</span><span className="eyebrow">{group.title}</span></div>
              <h2 className="section-heading">{group.title}</h2>
              <p className="section-sub" style={{ marginTop: '16px' }}>{group.desc}</p>
            </div>
            <div className="services-grid reveal-stagger">
              {services.filter((s) => s.group === group.slug).map((s, i) => {
                const href = s.href || `/services/${s.slug}`
                return (
                  <div className="service-card" key={s.num}>
                    <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <Link href={href} className="service-card-cta">Learn more <span>&rarr;</span></Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad dark">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '18px' }}>Get In Touch</span>
            <h2 className="section-heading" style={{ color: '#fff' }}>Not sure which service you need?</h2>
            <p className="section-sub" style={{ margin: '16px auto 32px', color: 'var(--ink-on-dark-soft)' }}>Tell us what's going on with your business, and we'll point you to the right service, or a combination of them.</p>
            <Link href="/#contact" className="btn btn-primary">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
