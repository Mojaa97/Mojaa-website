import Link from 'next/link'
import Icon from './Icon'

export default function Footer() {
  return (
    <>
      <footer className="bg-surface dark:bg-[#0d1420] w-full py-xl border-t border-primary/10 dark:border-white/10">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="md:col-span-2">
            <h3 className="font-headline-sm text-headline-sm text-primary dark:text-[#e9edf5] mb-md">
              Mayank Om Jain &amp; Associates
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] max-w-md">
              Chartered Accountants. Strategic financial advisory, Virtual CFO, tax, GST, and
              FEMA/NRI compliance for founders, HNIs, and growing businesses.
            </p>
            <div className="mt-lg">
              <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-[#a6acb9] mb-xs">Member of</p>
              <p className="font-body-md text-body-md text-primary dark:text-[#e9edf5] font-medium">
                The Institute of Chartered Accountants of India (ICAI)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-caps text-label-caps text-primary dark:text-[#e9edf5] mb-xs">Firm</h4>
            <Link href="/#services" className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-200">Services</Link>
            <Link href="/#team" className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-200">Team</Link>
            <Link href="/blog" className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-200">Insights</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-caps text-label-caps text-primary dark:text-[#e9edf5] mb-xs">Practice Areas</h4>
            <Link href="/nri-fema" className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-200">NRI &amp; FEMA Advisory</Link>
            <Link href="/virtual-cfo" className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-200">Virtual CFO Services</Link>
            <Link href="/contact" className="font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9] hover:text-secondary dark:hover:text-[#e9c176] transition-colors duration-200">Contact</Link>
          </div>
          <div className="md:col-span-4 mt-lg pt-md border-t border-primary/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-sm">
            <p className="font-label-caps text-label-caps text-on-surface-variant dark:text-[#a6acb9]">
              © 2026 Mayank Om Jain &amp; Associates. Member of ICAI.
            </p>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/919131325035?text=Hello%20CA%20Mayank%2C%20I%20would%20like%20to%20discuss%20a%20financial%20matter."
        target="_blank"
        rel="noreferrer"
        title="WhatsApp CA Mayank"
        className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
      >
        <Icon name="chat" className="text-white" style={{ fontSize: '28px' }} />
      </a>
    </>
  )
}
