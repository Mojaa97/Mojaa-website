import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useReveal } from '../lib/useReveal'
import { faqSections } from '../lib/faqData'

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
      '@type': 'FAQPage',
      '@id': 'https://www.mojaa.in/faq#faq',
      mainEntity: faqSections.flatMap((s) =>
        s.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a.join(' ') },
        }))
      ),
    },
  ],
}

function renderParagraph(text, key) {
  const idx = text.indexOf(':')
  if (idx > 0 && idx <= 50 && !text.slice(0, idx).includes('.')) {
    return (
      <p key={key}>
        <b>{text.slice(0, idx + 1)}</b>
        {text.slice(idx + 1)}
      </p>
    )
  }
  return <p key={key}>{text}</p>
}

export default function FAQ() {
  useReveal()
  const [openKeys, setOpenKeys] = useState({})

  const toggle = (key) => setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <>
      <Head>
        <title>FAQ | Mayank Om Jain & Associates</title>
        <meta name="description" content="Answers to real questions on startup compliance, tax planning, fundraising, Virtual CFO, NRI/FEMA compliance, and MSME/trader filing, from CA Mayank Jain." />
        <link rel="canonical" href="https://www.mojaa.in/faq" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <main>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <span className="hero-eyebrow">FAQ</span>
          <h1>Questions founders actually ask us.</h1>
          <p>Startup compliance, tax planning, fundraising, Virtual CFO, NRI/FEMA compliance, and MSME filing: answered in detail, with real numbers and real scenarios.</p>
        </div>
      </section>

      <section className="section-pad" style={{ paddingBottom: '0' }}>
        <div className="wrap">
          <div className="reveal faq-section-nav">
            {faqSections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>{s.title}</a>
            ))}
          </div>
        </div>
      </section>

      {faqSections.map((section, sIdx) => (
        <section className={`section-pad${sIdx % 2 === 1 ? ' light-soft' : ''}`} id={section.id} key={section.id}>
          <div className="wrap" style={{ maxWidth: '840px' }}>
            <div className="reveal" style={{ marginBottom: '20px' }}>
              <div className="badge-row"><span className="icon-badge">{sIdx + 1}</span><span className="eyebrow">{section.subtitle}</span></div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>{section.title}</h2>
            </div>
            <div>
              {section.faqs.map((f, fIdx) => {
                const key = `${sIdx}-${fIdx}`
                const isOpen = !!openKeys[key]
                return (
                  <div className={`faq-item reveal${isOpen ? ' open' : ''}`} key={key}>
                    <button className="faq-q faq-page-q" onClick={() => toggle(key)} type="button">
                      {f.q}<span className="plus">+</span>
                    </button>
                    <div className="faq-a-grid" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                      <div className="faq-a faq-page-a">
                        <span className="faq-target">{f.who}</span>
                        {f.a.map((p, pIdx) => renderParagraph(p, pIdx))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section-pad dark" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '600px' }}>
          <h2 className="section-heading" style={{ color: '#fff', marginBottom: '18px' }}>Didn&rsquo;t find your question?</h2>
          <p style={{ color: 'var(--ink-on-dark-soft)', marginBottom: '28px' }}>Send us your specific situation and we&rsquo;ll walk you through it directly.</p>
          <Link href="/#contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  )
}
