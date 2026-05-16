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
        <meta name="description" content="Tax, compliance, startup law, and financial strategy — explained plainly for founders and business leaders by CA Mayank Jain." />
      </Head>
      <Nav />
      <section className="blog-bg" style={{paddingTop:'120px'}}>
        <div className="section-tag">Insights</div>
        <h2 className="section-heading">From the <em>MOJAA desk.</em></h2>
        <p className="section-sub">Tax, compliance, startup law, and financial strategy — explained plainly for founders and business leaders.</p>
        {allPostsData.length === 0 ? (
          <div style={{marginTop:'56px', padding:'48px', background:'#fff', textAlign:'center', border:'1px solid var(--border)'}}>
            <h3 style={{color:'var(--navy)', fontFamily:'Cormorant Garamond, serif', fontSize:'1.5rem', fontWeight:'400', marginBottom:'12px'}}>Blog posts coming soon.</h3>
            <p style={{color:'var(--gray)', fontSize:'0.88rem'}}>Add markdown files to the <code style={{background:'var(--offwhite)', padding:'2px 6px', borderRadius:'2px'}}>posts/</code> folder to publish articles here.</p>
          </div>
        ) : (
          <div className="blog-grid" style={{marginTop:'56px'}}>
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <div className="blog-card" key={id}>
                <div className="blog-card-body">
                  <div className="blog-date">{date}</div>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <Link href={`/blog/${id}`} className="blog-read-more">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  )
}
