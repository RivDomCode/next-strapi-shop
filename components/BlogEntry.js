import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BlogEntry.module.css";


const BlogEntry = () => {
  return (
    <article>
        <Image layout='responsive' height={400} width={400} src="/img/aboutUs.jpg" alt="blog pic"/>
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