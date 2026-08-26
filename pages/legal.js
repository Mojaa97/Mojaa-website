import Head from 'next/head'
import Link from 'next/link'
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
      '@type': 'WebPage',
      '@id': 'https://www.mojaa.in/legal#webpage',
      name: 'Legal & Disclaimers | Mayank Om Jain & Associates',
      url: 'https://www.mojaa.in/legal',
      description: 'Website disclaimer, Insights disclaimer, and privacy information for Mayank Om Jain & Associates, in line with ICAI guidelines for Chartered Accountant websites.',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
    },
  ],
}

export default function Legal() {
  useReveal()

  return (
    <>
      <Head>
        <title>Legal & Disclaimers | Mayank Om Jain & Associates</title>
        <meta name="description" content="Website disclaimer, Insights disclaimer, and privacy information for Mayank Om Jain & Associates, in line with ICAI guidelines for Chartered Accountant websites." />
        <link rel="canonical" href="https://www.mojaa.in/legal" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <span className="hero-eyebrow">Legal</span>
          <h1>Legal &amp; Disclaimers</h1>
          <p>This page sets out the terms on which this website may be used, in line with the Institute of Chartered Accountants of India&rsquo;s guidelines for professional websites.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <div className="badge-row"><span className="icon-badge">1</span><span className="eyebrow">Website Disclaimer</span></div>
            <h2 className="section-heading">Website Disclaimer</h2>
          </div>
          <div className="legal-copy reveal">
            <p>This website is owned and maintained by Mayank Om Jain &amp; Associates, a firm of Chartered Accountants registered with the Institute of Chartered Accountants of India (ICAI).</p>
            <p>In compliance with the ICAI Code of Ethics and Advertisement Guidelines, this website does not constitute, and should not be construed as, solicitation of work or advertisement of professional services. The content on this website is published solely for informational purposes, at the request of visitors seeking to know more about the firm and its services.</p>
            <p>Browsing this website, submitting an enquiry through it, or contacting the firm via WhatsApp, email, or the contact form does not, by itself, create a professional relationship between the visitor and the firm. A professional engagement is established only once a formal engagement letter has been signed by both parties.</p>
            <ul>
              <li>We reserve the right to modify, update, or remove any content on this website at any time, without prior notice.</li>
              <li>This website may contain links to third-party websites for reference. We are not responsible for the content, accuracy, or privacy practices of any external website we do not control.</li>
              <li>All content, logos, and material on this website are the property of Mayank Om Jain &amp; Associates, unless otherwise stated, and may not be reproduced without prior written permission.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad light-soft">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <div className="badge-row"><span className="icon-badge">2</span><span className="eyebrow">Insights Disclaimer</span></div>
            <h2 className="section-heading">Insights Disclaimer</h2>
          </div>
          <div className="legal-copy reveal">
            <p>Articles published under Insights are intended to provide general guidance on topics of interest and reflect our understanding as of their date of publication. Tax, regulatory, and compliance positions referenced in these articles can change after publication, and older articles may no longer reflect the current law or practice.</p>
            <p>Nothing on this website, including the Insights section, constitutes professional advice and should not be relied upon as a substitute for consultation with a qualified professional regarding your specific circumstances. Mayank Om Jain &amp; Associates accepts no liability for any loss or damage arising from any action taken, or refrained from, on the basis of content published on this website.</p>
            <p>For advice specific to your situation, please <Link href="/#contact" style={{ color: 'var(--teal)', fontWeight: 600 }}>contact us</Link> to schedule a consultation.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <div className="badge-row"><span className="icon-badge">3</span><span className="eyebrow">Privacy</span></div>
            <h2 className="section-heading">How We Handle Your Information</h2>
          </div>
          <div className="legal-copy reveal">
            <p>Information you submit through our contact form (name, email, phone number, service of interest, and message) is used only to respond to your enquiry and to provide the services you request. It is not sold, rented, or shared with third parties, except where necessary to deliver a service you have engaged us for, or where required by law.</p>
            <p>If you have questions about how your information is used, or would like it removed from our records, write to us through the contact form and we will act on your request.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
