import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default function Blog({ allPostsData }) {
  const [featured, ...rest] = allPostsData

  return (
    <>
      <Head>
        <title>Blog & Insights | Mayank Om Jain & Associates</title>
        <meta name="description" content="Tax, compliance, startup law, and financial strategy — explained plainly for founders and business leaders by CA Mayank Jain." />
      </Head>
      <Nav />
      <main className="pt-32 pb-xl max-w-container-max mx-auto px-gutter w-full">
        <section className="mb-lg">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-sm block">Editorial &amp; Analysis</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-md">Wealth &amp; Compliance Insights</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Tax, compliance, startup law, and financial strategy — explained plainly for founders
            and business leaders.
          </p>
        </section>

        {allPostsData.length === 0 ? (
          <div className="mt-xl p-xl bg-surface-container-lowest ghost-border rounded-lg text-center">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Blog posts coming soon.</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Check back shortly for new articles.</p>
          </div>
        ) : (
          <>
            {featured && (
              <section className="mb-xl ghost-border rounded-lg overflow-hidden bg-surface-container-lowest grid grid-cols-1 md:grid-cols-2">
                <div className="bg-primary-container min-h-[220px] md:min-h-full flex items-center justify-center relative overflow-hidden">
                  <Icon name="auto_stories" className="text-surface-container-lowest/10" style={{ fontSize: '180px' }} />
                </div>
                <div className="p-lg flex flex-col justify-center">
                  <span className="font-label-caps text-label-caps text-secondary mb-sm">Latest · {featured.date}</span>
                  <h2 className="font-headline-md text-headline-md text-primary mb-sm">{featured.title}</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-lg">{featured.excerpt}</p>
                  <Link href={`/blog/${featured.id}`} className="font-body-md text-body-md text-primary font-medium flex items-center group w-fit">
                    <span className="border-b border-secondary-container group-hover:border-primary transition-colors pb-1">Read Full Article</span>
                    <Icon name="arrow_forward" className="ml-2 transition-transform group-hover:translate-x-1" style={{ fontSize: '16px' }} />
                  </Link>
                </div>
              </section>
            )}

            {rest.length > 0 && (
              <section className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
                {rest.map(({ id, date, title, excerpt }) => (
                  <Link href={`/blog/${id}`} key={id} className="bg-surface-container-lowest ghost-border rounded p-md flex flex-col h-full hover:bg-surface transition-colors">
                    <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs">{date}</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">{title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-md">{excerpt}</p>
                    <span className="font-body-md text-body-md text-primary font-medium inline-flex items-center gap-xs">
                      Read More <Icon name="arrow_forward" style={{ fontSize: '16px' }} />
                    </span>
                  </Link>
                ))}
              </section>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
