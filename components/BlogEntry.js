import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../helpers/formatDate";
import styles from "../styles/BlogEntry.module.css";


const BlogEntry = ( {blogEntry} ) => {

  const { images, title, resume, published_at,id, url} = blogEntry;



  return (
    <article className={styles.blogEntry}>
        <Image layout='responsive' height={140} width={160} src={images.url} alt="blog pic"/>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.date}>{formatDate(published_at)}</p>
          <p className={styles.resume}>{resume}</p>
          <Link href={`/blog/${url}`}>Read more</Link>
        </div>
    </article>
  )
}

export default BlogEntry

