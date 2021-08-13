import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
        </article>
    </Layout>
  )
}

export async function getStaticPaths() {
    // return a list of possible value for id
    const paths = getAllPostIds() // this includes the params defined by `pages/posts/[id].js`
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id) 
    return {
        props: {
            postData
        }
    }

}
