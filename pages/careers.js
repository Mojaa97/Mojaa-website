import { useState } from 'react'
import Head from 'next/head'
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
      '@id': 'https://www.mojaa.in/careers#webpage',
      name: 'Careers | Mayank Om Jain & Associates',
      url: 'https://www.mojaa.in/careers',
      description: 'Work with Mayank Om Jain & Associates. Submit your details and resume to be considered for current and future openings.',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mojaa.in/#organization' },
    },
  ],
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export default function Careers() {
  useReveal()
  const [formState, setFormState] = useState('idle')
  const [fileName, setFileName] = useState('')
  const [fileError, setFileError] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) {
      setFileName('')
      setFileError('')
      return
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError('File is too large. Please upload a resume under 5MB.')
      setFileName('')
      e.target.value = ''
      return
    }
    setFileError('')
    setFileName(file.name)
  }

  return (
    <>
      <Head>
        <title>Careers | Mayank Om Jain & Associates</title>
        <meta name="description" content="Work with Mayank Om Jain & Associates. Submit your details and resume to be considered for current and future openings." />
        <link rel="canonical" href="https://www.mojaa.in/careers" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Nav />

      <main>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <span className="hero-eyebrow">Careers</span>
          <h1>Work With Us</h1>
          <p>We&rsquo;re always looking to meet people who care about doing the work right. Tell us a bit about yourself and share your resume &mdash; we&rsquo;ll reach out if there&rsquo;s a fit, now or down the line.</p>
        </div>
      </section>

      <section className="section-pad contact-bg">
        <div className="wrap" style={{ maxWidth: '640px' }}>
          <div className="reveal form-box">
            {formState === 'success' ? (
              <div className="contact-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48"><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></svg>
                <h3>Application Received!</h3>
                <p>Thank you for your interest. We&rsquo;ll review your details and get back to you if there&rsquo;s a fit.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  setFormState('submitting')
                  const form = e.target
                  const data = Object.fromEntries(new FormData(form))
                  const fileInput = form.elements.resume
                  const file = fileInput?.files?.[0]

                  try {
                    let resumeName = ''
                    let resumeContent = ''
                    if (file) {
                      resumeName = file.name
                      resumeContent = await fileToBase64(file)
                    }

                    const res = await fetch('/api/careers', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ ...data, resumeName, resumeContent }),
                    })
                    setFormState(res.ok ? 'success' : 'error')
                  } catch {
                    setFormState('error')
                  }
                }}
              >
                <div className="form-row"><label>Full Name</label><input type="text" name="name" placeholder="Your name" required /></div>
                <div className="form-row"><label>Mobile Number</label><input type="tel" name="mobile" placeholder="+91" required /></div>
                <div className="form-row"><label>Email Address</label><input type="email" name="email" placeholder="you@example.com" required /></div>
                <div className="form-row"><label>Education</label><input type="text" name="education" placeholder="e.g. CA Final, B.Com, MBA Finance" required /></div>
                <div className="form-row"><label>Current Location</label><input type="text" name="location" placeholder="City, State" required /></div>
                <div className="form-row"><label>Why do you want to join us? (optional)</label><textarea name="message" rows="4" placeholder="Tell us a bit about yourself and what interests you about this role" /></div>
                <div className="form-row">
                  <label>Resume / CV (PDF or Word, max 5MB)</label>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  {fileName && <p style={{ fontSize: '13px', color: 'var(--teal-light)', marginTop: '6px' }}>Selected: {fileName}</p>}
                  {fileError && <p style={{ fontSize: '13px', color: '#f87171', marginTop: '6px' }}>{fileError}</p>}
                </div>
                {formState === 'error' && (
                  <p style={{ color: '#f87171', marginBottom: '12px', fontSize: '13px' }}>Something went wrong. Please email your resume to mayank@mojaa.in directly.</p>
                )}
                <button type="submit" className="btn-submit" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  )
}
