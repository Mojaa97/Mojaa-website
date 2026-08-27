import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog & Insights | Mayank Om Jain & Associates</title>
        <meta name="description" content="Tax, compliance, startup law, and financial strategy, explained plainly for founders and business leaders by CA Mayank Jain." />
      </Head>
      <Nav />
      <main>
            <section className="section-pad blog-bg" style={{paddingTop:'140px'}}>
        <div className="wrap">
          <div className="badge-row"><span className="icon-badge">&#9998;</span><span className="eyebrow">Insights</span></div>
          <h2 className="section-heading">From <em>our desk.</em></h2>
          <p className="section-sub">Tax, compliance, startup law, and financial strategy, explained plainly for founders and business leaders.</p>
          {allPostsData.length === 0 ? (
            <div style={{marginTop:'56px', padding:'48px', background:'#fff', textAlign:'center', border:'1px solid var(--border)'}}>
              <h3 style={{color:'var(--navy)', fontSize:'1.5rem', fontWeight:'700', marginBottom:'12px'}}>Blog posts coming soon.</h3>
              <p style={{color:'var(--gray)', fontSize:'0.88rem'}}>Add markdown files to the <code style={{background:'var(--offwhite)', padding:'2px 6px', borderRadius:'2px'}}>posts/</code> folder to publish articles here.</p>
            </div>
          ) : (
            <div className="blog-grid" style={{marginTop:'50px'}}>
              {allPostsData.map(({ id, date, title, excerpt }) => (
                <Link className="blog-card" href={`/blog/${id}`} key={id}>
                  <span className="blog-date">{date}</span>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <span className="rm">Read More &#8594;</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
