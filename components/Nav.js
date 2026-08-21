import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <Link href="/" className="nav-brand">
        <span className="brand-word">Mayank Om Jain</span>
        <span className="brand-suffix">&amp; Associates</span>
      </Link>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><Link href="/#serve" onClick={() => setOpen(false)}>Who We Serve</Link></li>
        <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link href="/#team" onClick={() => setOpen(false)}>Team</Link></li>
        <li><Link href="/#why" onClick={() => setOpen(false)}>Why Choose Us</Link></li>
        <li><Link href="/blog" onClick={() => setOpen(false)}>Insights</Link></li>
        <li><Link href="/#contact" className="btn nav-cta" onClick={() => setOpen(false)}>Contact Us</Link></li>
      </ul>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span/><span/><span/>
      </button>
    </nav>
  )
}
