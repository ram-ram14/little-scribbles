// Import the Link component from the 'next/link' module
import Link from 'next/link';

// Import the styles from the 'BlogCard.module.css' file located in the '../../styles' directory
import styles from '../../styles/BlogCard.module.css';

// Define a functional component called BlogPost that accepts props: title, author, coverPhoto, datePublished, and slug
export default function BlogPost({title, author, coverPhoto, datePublished, slug}) {
    // Render the following JSX code
    return (
        // Start of the main card container with the CSS class 'card'
        <div className={styles.card}>
            {/* Create a link that points to '/posts/' + slug */}
            <Link href={'/posts/' + slug}>
                {/* Start of the image container with the CSS class 'imgContainer' */}
                <div className={styles.imgContainer}>
                    {/* Render an image with the source specified by the coverPhoto.url */}
                    <img src={coverPhoto.url} alt="" />
                </div>
            </Link>
            {/* Start of the text container with the CSS class 'text' */}
            <div className={styles.text}>
                {/* Render the blog post title */}
                <h2>{title}</h2>
                {/* Start of the details container with the CSS class 'details' */}
                <div className={styles.details}>
                    {/* Start of the author container with the CSS class 'author' */}
                    <div className={styles.author}>
                        {/* Render the author's avatar image */}
                        <img src={author.avatar.url} alt='' />
                        {/* Render the author's name */}
                        <h3>{author.name}</h3>
                    </div>
                    {/* Start of the date container with the CSS class 'date' */}
                    <div className={styles.date}>
                        {/* Render the date of publication */}
                        <h3>{datePublished}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
