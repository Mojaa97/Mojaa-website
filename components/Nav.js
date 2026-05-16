import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <Link href="/" className="nav-brand">
        <span className="firm-name">Mayank Om Jain &amp; Associates</span>
        <span className="firm-sub">Chartered Accountants</span>
      </Link>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><Link href="/#serve" onClick={() => setOpen(false)}>Who We Serve</Link></li>
        <li><Link href="/#services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link href="/#team" onClick={() => setOpen(false)}>Team</Link></li>
        <li><Link href="/#why" onClick={() => setOpen(false)}>Why MOJAA</Link></li>
        <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
        <li><Link href="/#contact" className="nav-cta" onClick={() => setOpen(false)}>Get In Touch</Link></li>
      </ul>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span/><span/><span/>
      </button>
    </nav>
  )
}
