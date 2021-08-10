import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
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
    const postData = getPostData(params.id) 
    return {
        props: {
            postData
        }
    }

}
