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

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 dark:bg-[#0a0f1a]/90 nav-backdrop border-b border-primary/10 dark:border-white/10 transition-all duration-300">
      <div className="max-w-container-max mx-auto px-gutter h-20 flex items-center justify-between gap-md">
        <Link href="/" className="flex items-center gap-sm flex-shrink-0" onClick={() => setOpen(false)}>
          <span className="font-headline-md text-headline-md tracking-tight text-primary dark:text-[#e9edf5]">MOJAA</span>
          <span className="hidden sm:block w-px h-8 bg-primary/15 dark:bg-white/15" />
          <span className="hidden sm:block font-label-caps text-[11px] uppercase tracking-[0.08em] leading-tight text-on-surface-variant dark:text-[#a6acb9]">
            Mayank Om Jain
            <br />
            &amp; Associates
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-lg">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] font-medium hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-sm">
          {onToggleTheme && (
            <button
              aria-label="Toggle dark mode"
              onClick={onToggleTheme}
              className="text-primary dark:text-[#e9edf5] p-xs rounded-full hover:bg-surface-variant dark:hover:bg-white/10 transition-colors duration-300"
            >
              <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
            </button>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-on-primary dark:bg-[#e9c176] dark:text-[#1b1400] font-label-caps text-label-caps px-md py-sm rounded hover:bg-secondary-container hover:text-on-secondary-container dark:hover:bg-[#fed488] transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
        <div className="flex md:hidden items-center gap-xs">
          {onToggleTheme && (
            <button
              aria-label="Toggle dark mode"
              onClick={onToggleTheme}
              className="text-primary dark:text-[#e9edf5] p-xs"
            >
              <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
            </button>
          )}
          <button
            aria-label="Menu"
            className="text-primary dark:text-[#e9edf5] p-xs"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-background dark:bg-[#0a0f1a] border-t border-primary/10 dark:border-white/10 px-gutter py-md flex flex-col gap-md">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] font-medium hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-primary text-on-primary dark:bg-[#e9c176] dark:text-[#1b1400] font-label-caps text-label-caps px-md py-sm rounded"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  )
}
