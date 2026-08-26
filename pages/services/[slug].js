import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { services, serviceGroups } from '../../lib/services'
import { useReveal } from '../../lib/useReveal'

const detailedServices = services.filter((s) => s.slug)

export async function getStaticPaths() {
  return {
    paths: detailedServices.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const service = detailedServices.find((s) => s.slug === params.slug)
  return { props: { service } }
}

export default function ServiceDetail({ service }) {
  useReveal()
  const group = serviceGroups.find((g) => g.slug === service.group)

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
        '@type': 'Service',
        '@id': `https://www.mojaa.in/services/${service.slug}#service`,
        name: service.title,
        description: service.desc,
        provider: { '@id': 'https://www.mojaa.in/#organization' },
        areaServed: 'IN',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.mojaa.in/services' },
          { '@type': 'ListItem', position: 2, name: service.title, item: `https://www.mojaa.in/services/${service.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>{service.title} | Mayank Om Jain & Associates</title>
        <meta name="description" content={service.desc} />
        <link rel="canonical" href={`https://www.mojaa.in/services/${service.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <Link href="/services" className="page-hero-back">&larr; All Services</Link>
          <span className="hero-eyebrow">{group?.title}</span>
          <h1>{service.title}</h1>
          <p>{service.tagline}</p>
          {service.forWho && <p className="page-hero-meta"><b>Best for </b>{service.forWho}</p>}
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <Link href="/#contact" className="btn btn-primary">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px' }}>
            <div className="badge-row"><span className="icon-badge">{service.points.length}</span><span className="eyebrow">Core Services</span></div>
            <h2 className="section-heading">{service.pointsLabel}</h2>
          </div>
          <div className="point-grid reveal-stagger">
            {service.points.map((pt, i) => (
              <div className="point-card" key={pt.t}>
                <span className="point-index">{String(i + 1).padStart(2, '0')}</span>
                <h4>{pt.t}</h4>
                <p>{pt.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.advisory && (
        <section className="section-pad light-soft">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: '640px' }}>
              <div className="badge-row"><span className="icon-badge">{service.advisory.length}</span><span className="eyebrow">Advisory</span></div>
              <h2 className="section-heading">{service.advisoryLabel}</h2>
            </div>
            <div className="point-grid reveal-stagger">
              {service.advisory.map((pt, i) => (
                <div className="point-card" key={pt.t}>
                  <span className="point-index">{String(i + 1).padStart(2, '0')}</span>
                  <h4>{pt.t}</h4>
                  <p>{pt.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`section-pad${service.advisory ? '' : ' light-soft'}`}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '50px' }}>
            <div className="badge-row"><span className="icon-badge">&#9733;</span><span className="eyebrow">Our Edge</span></div>
            <h2 className="section-heading">{service.edgeLabel}</h2>
          </div>
          {service.edge.map((w, i) => (
            <div className="why-block reveal" key={w.t}>
              <div className="why-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{w.t}</h3>
                <p>{w.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
            <h2 className="section-heading">Ready to talk about {service.title.toLowerCase()}?</h2>
            <p className="section-sub" style={{ margin: '16px auto 32px' }}>Tell us what's going on with your business, and we'll scope exactly what's needed.</p>
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
