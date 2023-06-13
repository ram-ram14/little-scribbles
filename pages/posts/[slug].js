import styles from '../styles/Slug.module.css';
import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient('https://api-ap-southeast-2.hygraph.com/v2/clinteyc30jqt01t77ac126mk/master');

const QUERY = gql`
  query Post($slug: String!){
    post(where: {slug: $slug}){
        id, 
        title, 
        slug, 
        datePublished, 
        author{
            id, 
            name, 
            avatar{
                url
            }
        }
        content{
            html
        }
        coverPhoto{
            id, 
            url
        }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
        slug
    }
  }
`

export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post) => ({ params: {slug: post.slug } })),
        fallback: false, 
    };
}

export async function getStaticProps({params}) {
    const slug = params.slug;
  const {posts} = await graphcms.request(QUERY, {slug});
  const post = data.post;
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function BlogPost({post}){
    return (
        <main className=''></main>
    )
}