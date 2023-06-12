import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

export default function BlogPost({title, author, coverPhoto, datePublished, slug}) {
    return (
        <div className={styles.card}>
            <Link>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt="" />
                </div>
            </Link>
        </div>
    )
}