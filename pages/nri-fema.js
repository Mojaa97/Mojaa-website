import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Icon from '../components/Icon'

const faqs = [
  {
    q: 'What NRI and FEMA services does MOJAA provide?',
    a: 'Residential status determination under FEMA and the Income Tax Act, NRE/NRO/FCNR account structuring, property purchase and sale compliance, repatriation support, DTAA planning, and Indian ITR filing for NRIs.',
  },
  {
    q: 'Can MOJAA help with repatriating money from India to abroad?',
    a: 'Yes. We handle the full repatriation process from NRO accounts and property sale proceeds, including the Form 15CA/15CB certification required by banks before funds can move out of India.',
  },
  {
    q: 'Do you help NRIs with property purchase or sale compliance in India?',
    a: "Yes, including TDS positioning on sale, obtaining a lower or nil TDS certificate under Section 197 where applicable, and structuring the transaction to stay within FEMA's property and repatriation rules.",
  },
  {
    q: 'Can you help me determine my residential status under FEMA and the Income Tax Act?',
    a: "Yes. FEMA and Income Tax use different residency tests, and the two often don't align in the year you move. We assess both separately so your accounts, filings, and remittances are based on your actual status under each law.",
  },
  {
    q: 'Do you handle DTAA claims and foreign tax credit for NRIs?',
    a: 'Yes. We review the applicable Double Taxation Avoidance Agreement between India and your country of residence and structure your filings to claim relief or foreign tax credit correctly, on both sides where needed.',
  },
  {
    q: 'Can you assist with FC-GPR or FC-TRS filings for foreign investment?',
    a: 'Yes. Alongside individual NRI advisory, our team handles entity-level FEMA filings for foreign investment into Indian companies, including FC-GPR for share issuances and FC-TRS for transfers between resident and non-resident holders.',
  },
  {
    q: 'Do you provide the CA certification (Form 15CB) needed for repatriation?',
    a: 'Yes, this is one of our most frequent NRI engagements. We issue the Form 15CB certification your bank requires before processing an outward remittance above the applicable threshold.',
  },
  {
    q: 'Can NRIs engage MOJAA remotely from abroad?',
    a: 'Yes. Most of our NRI clients are engaged entirely remotely — document review, calls, and filings are handled without requiring you to be physically present in India.',
  },
]

const inclusions = [
  'FEMA & cross-border compliance',
  'DTAA & international tax planning',
  'Property & investment transactions',
  'NRE/NRO & remittance guidance',
  'Tax planning for overseas income',
  'FC-GPR / FC-TRS filings for foreign investment',
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
      '@id': 'https://www.mojaa.in/nri-fema#webpage',
      name: 'NRI and FEMA Advisory | MOJAA',
      url: 'https://www.mojaa.in/nri-fema',
      description: 'NRI and FEMA advisory for cross-border tax, property transactions, DTAA, and compliance planning.',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
      speakable: { '@type': 'SpeakableSpecification', xpath: ['//section[@id="quick-answer"]'] },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mojaa.in/nri-fema#faq',
      isPartOf: { '@id': 'https://www.mojaa.in/nri-fema#webpage' },
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function NRIFEMA() {
  return (
    <>
      <Head>
        <title>NRI and FEMA Advisory | Mayank Om Jain & Associates</title>
        <meta name="description" content="NRI and FEMA advisory for cross-border taxation, property transactions, DTAA, and compliance planning for Indians abroad." />
        <link rel="canonical" href="https://www.mojaa.in/nri-fema" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <Nav />
      <main className="pt-24 pb-xl">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-gutter py-xl">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps tracking-widest text-secondary mb-md flex items-center gap-sm">
              <span className="w-8 h-px bg-secondary" />
              Practice Area
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-md">
              Expert cross-border tax &amp; compliance for global citizens.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl">
              Navigating Indian taxation and FEMA regulations while residing abroad requires
              precision and foresight. We provide bespoke advisory to protect your wealth, ensure
              compliance, and streamline your financial obligations in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm">
              <Link href="/contact" className="inline-flex items-center justify-center px-lg py-sm bg-primary text-on-primary font-label-caps text-label-caps rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300">
                Schedule a Consultation
              </Link>
              <a href="#focus-areas" className="inline-flex items-center justify-center px-lg py-sm bg-transparent text-primary border border-primary font-label-caps text-label-caps rounded hover:bg-surface-variant transition-colors duration-300">
                Explore Focus Areas
              </a>
            </div>
          </div>
        </section>

        {/* Core Focus Areas — bento grid */}
        <section className="max-w-container-max mx-auto px-gutter py-lg" id="focus-areas">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant/30 pb-sm">
            Core Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="col-span-1 md:col-span-2 bg-surface-container-lowest ghost-border rounded-lg p-lg hover:border-secondary-container/60 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary mb-md">
                  <Icon name="account_balance" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">NRI Taxation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  Comprehensive tax planning and compliance for Non-Resident Indians. We manage
                  the complexities of determining residential status and fulfilling all statutory
                  obligations with the Income Tax Department.
                </p>
              </div>
              <ul className="space-y-xs font-body-md text-body-md text-on-surface-variant border-t border-outline-variant/20 pt-sm mt-sm">
                {['Residential status determination', 'Filing of income tax returns for NRIs', 'Lower TDS certificates (Section 197)'].map((t) => (
                  <li key={t} className="flex items-center">
                    <Icon name="check" className="text-secondary mr-xs" style={{ fontSize: '16px' }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 bg-surface-container-lowest ghost-border rounded-lg p-lg hover:border-secondary-container/60 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary mb-md">
                <Icon name="gavel" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">FEMA Compliance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ensuring adherence to the Foreign Exchange Management Act. Expert guidance on
                property transactions, investments, and maintaining NRO/NRE accounts in India.
              </p>
            </div>
            <div className="col-span-1 bg-surface-container-lowest ghost-border rounded-lg p-lg hover:border-secondary-container/60 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-tertiary mb-md">
                <Icon name="public" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">DTAA Planning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Double Taxation Avoidance Agreement planning to optimize your global tax
                footprint. We ensure you claim applicable reliefs and avoid paying taxes twice on
                the same income.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 bg-primary-container text-on-primary rounded-lg p-lg flex flex-col md:flex-row items-center gap-lg relative overflow-hidden">
              <Icon name="currency_exchange" className="absolute top-0 right-0 text-secondary-container/10 -mr-8 -mt-8 pointer-events-none" style={{ fontSize: '220px' }} />
              <div className="flex-1 z-10">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-md">
                  <Icon name="currency_exchange" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-sm">Repatriation of Funds</h3>
                <p className="font-body-md text-body-md text-on-primary/80 mb-md">
                  Seamless transfer of funds from India to your country of residence. We handle
                  the preparation and issuance of Forms 15CA and 15CB, ensuring full compliance
                  with RBI and Income Tax guidelines.
                </p>
                <Link href="/contact" className="inline-flex items-center text-secondary-fixed hover:text-secondary-container transition-colors duration-300 font-label-caps text-label-caps border-b border-secondary-fixed/30 pb-xs">
                  Ask about Form 15CA/CB
                  <Icon name="arrow_forward" className="ml-xs" style={{ fontSize: '16px' }} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What we handle */}
        <section className="bg-surface-container py-xl my-lg">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-md">
                Tailored NRI Advisory
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Beyond compliance, we offer strategic advisory tailored for the unique
                constraints and opportunities available to NRIs dealing with India.
              </p>
              <ul className="space-y-sm font-body-md text-body-md text-on-surface-variant">
                <li className="flex items-start">
                  <Icon name="account_tree" className="text-primary mr-sm mt-1" style={{ fontSize: '20px' }} />
                  <span>Structuring investments in Indian real estate and financial markets.</span>
                </li>
                <li className="flex items-start">
                  <Icon name="shield" className="text-primary mr-sm mt-1" style={{ fontSize: '20px' }} />
                  <span>Assessing tax implications of inherited property and assets in India.</span>
                </li>
                <li className="flex items-start">
                  <Icon name="timeline" className="text-primary mr-sm mt-1" style={{ fontSize: '20px' }} />
                  <span>Long-term wealth preservation strategies aligned with global residency.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-label-caps text-label-caps uppercase tracking-widest text-secondary mb-md">What We Handle</h3>
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

        {/* CTA */}
        <section className="max-w-container-max mx-auto px-gutter py-xl">
          <div className="bg-primary-container text-center py-16 px-8 rounded-lg flex flex-col items-center justify-center">
            <h2 className="font-headline-md text-headline-md text-on-primary mb-sm max-w-2xl">
              Secure your financial interests in India.
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim mb-lg max-w-lg">
              Time is a luxury for busy overseas professionals. Let our dedicated team manage the
              intricacies of Indian tax and FEMA compliance on your behalf.
            </p>
            <Link href="/contact" className="bg-secondary text-on-secondary px-8 py-4 rounded font-label-caps text-label-caps tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300">
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
