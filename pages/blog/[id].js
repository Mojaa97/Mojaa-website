import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return { props: { postData } }
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Mayank Om Jain & Associates</title>
        <meta name="description" content={postData.excerpt || postData.title} />
      </Head>
      <Nav />
      <div className="blog-post-container">
        <Link href="/blog" className="back-link">← Back to Blog</Link>
        <h1>{postData.title}</h1>
        <div className="blog-post-meta">
          {postData.date} · {postData.author || 'CA Mayank Jain'} · Mayank Om Jain & Associates
        </div>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <Footer />
    </>
  )
}
