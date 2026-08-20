import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return { props: { postData } }
}

const relatedServices = [
  { label: 'Virtual CFO Services', href: '/virtual-cfo' },
  { label: 'NRI & FEMA Advisory', href: '/nri-fema' },
  { label: 'All Services', href: '/#services' },
]

export default function Post({ postData }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = window.localStorage.getItem('mojaa-theme')
    if (saved === 'dark') setTheme('dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('mojaa-theme', next)
      return next
    })
  }

  return (
    <>
      <Head>
        <title>{postData.title} | Mayank Om Jain & Associates</title>
        <meta name="description" content={postData.excerpt || postData.title} />
      </Head>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="pt-32 pb-xl max-w-container-max mx-auto px-gutter w-full bg-background dark:bg-[#0a0f1a] transition-colors duration-300">
        <Link href="/blog" className="inline-flex items-center gap-xs font-label-caps text-label-caps text-secondary dark:text-[#e9c176] mb-lg hover:text-primary dark:hover:text-[#e9edf5] transition-colors">
          <Icon name="arrow_back" style={{ fontSize: '16px' }} />
          Back to Insights
        </Link>

        <article className="grid grid-cols-1 md:grid-cols-12 gap-lg relative">
          <aside className="hidden md:block col-span-3 sticky top-32 h-fit">
            <div className="bg-surface-container dark:bg-[#121a2c] ghost-border rounded-lg p-md">
              <h4 className="font-headline-sm text-headline-sm text-primary dark:text-[#e9edf5] mb-sm">Related Services</h4>
              <ul className="space-y-sm font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9]">
                {relatedServices.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="hover:text-primary dark:hover:text-[#e9edf5] hover:underline underline-offset-4 decoration-secondary-container transition-all">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="col-span-1 md:col-span-7 prose-mojaa font-body-lg text-body-lg text-on-surface dark:text-[#c7cdd9] leading-relaxed">
            <header className="mb-lg">
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-[#e9edf5] mb-sm">
                {postData.title}
              </h1>
              <p className="text-on-surface-variant dark:text-[#a6acb9] font-medium font-body-md text-body-md mb-md">
                {postData.date} · {postData.author || 'CA Mayank Jain'} · Mayank Om Jain &amp; Associates
              </p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>

          <div className="hidden md:block col-span-2" />

          <aside className="md:hidden col-span-1 mt-lg border-t border-primary/10 dark:border-white/10 pt-md">
            <h4 className="font-headline-sm text-headline-sm text-primary dark:text-[#e9edf5] mb-sm">Related Services</h4>
            <ul className="space-y-sm font-body-md text-body-md text-on-surface-variant dark:text-[#a6acb9]">
              {relatedServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  )
}
