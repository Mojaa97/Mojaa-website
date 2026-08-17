import { useState } from 'react'
import Link from 'next/link'
import Icon from './Icon'

const LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/nri-fema', label: 'NRI & FEMA' },
  { href: '/virtual-cfo', label: 'Virtual CFO' },
  { href: '/#team', label: 'Team' },
  { href: '/blog', label: 'Insights' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 nav-backdrop border-b border-primary/10 transition-all duration-300">
      <div className="max-w-container-max mx-auto px-gutter h-20 flex items-center justify-between">
        <Link href="/" className="font-headline-md text-headline-md tracking-tight text-primary" onClick={() => setOpen(false)}>
          MOJAA
        </Link>
        <nav className="hidden md:flex items-center gap-lg">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-body-md text-body-md text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-primary text-on-primary font-label-caps text-label-caps px-md py-sm rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300"
        >
          Get In Touch
        </Link>
        <button
          aria-label="Menu"
          className="md:hidden text-primary p-xs"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-primary/10 px-gutter py-md flex flex-col gap-md">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body-md text-body-md text-on-surface-variant font-medium hover:text-secondary transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-primary text-on-primary font-label-caps text-label-caps px-md py-sm rounded"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  )
}
