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

export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Article() {
    return <div>article</div>;
}