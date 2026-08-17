import Head from 'next/head'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Icon from '../components/Icon'

const SERVICE_OPTIONS = [
  'Startup Advisory & Incorporation',
  'Virtual CFO Services',
  'GST Registration & Compliance',
  'Income Tax & Tax Planning',
  'NRI / FEMA / International Tax',
  'Due Diligence & Valuation',
  'Audit & Assurance',
  'Corporate Secretarial',
  'Bookkeeping & Accounting',
  'Other — I will explain below',
]

function Field({ id, name, label, type = 'text', required = false }) {
  return (
    <div className="relative group">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder=" "
        className="peer block w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-transparent transition-colors"
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-4 font-label-caps text-label-caps text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:font-body-md peer-placeholder-shown:text-body-md peer-focus:-top-4 peer-focus:font-label-caps peer-focus:text-label-caps peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState('idle') // idle | submitting | success | error

  return (
    <>
      <Head>
        <title>Contact Us | Mayank Om Jain & Associates</title>
        <meta
          name="description"
          content="Get in touch with Mayank Om Jain & Associates — Chartered Accountants. Startup advisory, Virtual CFO, tax, GST, and NRI/FEMA compliance."
        />
        <link rel="canonical" href="https://www.mojaa.in/contact" />
      </Head>
      <Nav />
      <main className="pt-32 pb-xl px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 md:mb-24">
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">
              Contact Us
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              We welcome the opportunity to discuss how our strategic advisory can support your
              business or personal financial objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left: contact details */}
            <div className="lg:col-span-5 space-y-12">
              <section>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-6 border-b border-primary/10 pb-4">
                  Reach Us Directly
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Icon name="call" className="text-secondary" />
                    <a href="tel:+919131325035" className="font-body-md text-body-md text-on-background hover:text-secondary transition-colors">
                      +91 91313 25035
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="mail" className="text-secondary" />
                    <a href="mailto:mayank@mojaa.in" className="font-body-md text-body-md text-on-background hover:text-secondary transition-colors">
                      mayank@mojaa.in
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="chat" className="text-secondary" />
                    <a
                      href="https://wa.me/919131325035?text=Hello%20CA%20Mayank%2C%20I%20would%20like%20to%20discuss%20a%20financial%20matter."
                      target="_blank"
                      rel="noreferrer"
                      className="font-body-md text-body-md text-on-background hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="location_on" className="text-secondary mt-1" />
                    <p className="font-body-md text-body-md text-on-background">
                      Serving clients pan-India and NRIs worldwide — remote-first engagements.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="schedule" className="text-secondary mt-1" />
                    <p className="font-body-md text-body-md text-on-background">
                      We respond within 24 business hours.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest border border-primary/10 p-8 md:p-12">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-8">
                  Start a Conversation
                </h2>

                {formState === 'success' ? (
                  <div className="flex flex-col items-center text-center gap-4 py-16">
                    <Icon name="check_circle" className="text-secondary" style={{ fontSize: '48px' }} />
                    <h3 className="font-headline-sm text-headline-sm text-primary">Message Sent!</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
                      Thank you for reaching out. We&apos;ll get back to you within 24 business
                      hours.
                    </p>
                  </div>
                ) : (
                  <form
                    className="space-y-8"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      setFormState('submitting')
                      const data = Object.fromEntries(new FormData(e.target))
                      try {
                        const res = await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(data),
                        })
                        setFormState(res.ok ? 'success' : 'error')
                      } catch {
                        setFormState('error')
                      }
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field id="name" name="name" label="Full Name" required />
                      <Field id="mobile" name="mobile" label="Mobile Number" type="tel" required />
                    </div>
                    <Field id="email" name="email" label="Email Address" type="email" required />
                    <div className="relative group">
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="block w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Primary Area of Interest</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <Icon name="arrow_drop_down" className="absolute right-0 top-2 text-on-surface-variant pointer-events-none" />
                    </div>
                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder=" "
                        className="peer block w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-background placeholder-transparent transition-colors resize-none mt-4"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 -top-4 font-label-caps text-label-caps text-on-surface-variant transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:font-body-md peer-placeholder-shown:text-body-md peer-focus:-top-4 peer-focus:font-label-caps peer-focus:text-label-caps peer-focus:text-primary"
                      >
                        How can we assist you? (optional)
                      </label>
                    </div>
                    {formState === 'error' && (
                      <p className="font-body-md text-body-md text-error">
                        Something went wrong. Please try WhatsApp or email us directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 w-full md:w-auto inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                      <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
