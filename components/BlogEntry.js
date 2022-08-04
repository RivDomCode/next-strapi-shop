import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BlogEntry.module.css";


const BlogEntry = () => {
  return (
    <article className={styles.blogEntry}>
        <Image layout='responsive' height={100} width={140} src="/img/aboutUs.jpg" alt="blog pic"/>
        <div className={styles.content}>
          <h3 className={styles.title}>Titulo del post</h3>
          <p className={styles.date}>Fecha del post</p>
          <p className={styles.resume}>Resumen del post</p>
          <Link href="#">Read more</Link>
        </div>
    </article>
  )
}

export default BlogEntry