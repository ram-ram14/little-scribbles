// Importing required modules and styles
import styles from '../../styles/Slug.module.css';
import { GraphQLClient, gql } from 'graphql-request';

// Creating a GraphQL client instance
const graphcms = new GraphQLClient('https://api-ap-southeast-2.hygraph.com/v2/clinteyc30jqt01t77ac126mk/master');

// GraphQL query for retrieving a blog post by slug
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

// GraphQL query for retrieving the list of slugs for all posts
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

// Function for generating static paths for all blog posts
export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false, 
  };
}

// Function for fetching the data for a specific blog post using its slug
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { post } = await graphcms.request(QUERY, { slug });
  return {
    props: {
      post,
    },
    revalidate: 10, // Revalidate the data every 10 seconds
  };
}

// Component for rendering a blog post
export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
      <div className={styles.title}>
        <div className={styles.authtext}>
          <h6>By {post.author.name}</h6>
          <h6 className={styles.date}>{post.datePublished}</h6>
        </div>
      </div>
      <h2>{post.title}</h2>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
  );
}
