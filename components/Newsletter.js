import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="newsletter-box">
      <div>
        <div className="newsletter-eyebrow">Newsletter</div>
        <h3>Stay ahead of tax, compliance, and funding deadlines.</h3>
        <p>One email a month. No spam, unsubscribe anytime.</p>
      </div>
      {status === 'success' ? (
        <div className="newsletter-success">You&rsquo;re subscribed. Thanks for joining.</div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="newsletter-error">Something went wrong. Please try again.</p>}
    </div>
  )
}
