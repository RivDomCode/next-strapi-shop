import Layout from "../../components/Layout";
import Image from 'next/image';
import { formatDate } from '../../helpers/formatDate';
import styles from "../../styles/BlogEntry.module.css"

const BlogEntryContent = ( { blogEntryContent } ) => {

    console.log(blogEntryContent)

const { content, images, published_at, title} = blogEntryContent;
console.log(content)

  return (
    <Layout>
    <main className='container'>
        <h1 className='heading'>{title}</h1>
        <article className={styles.detail}>
        <Image layout="responsive" height={200} width={400} alt="post-img" src={images.url} />
        <div className={styles.content}>
            <p className={styles.date}>
                {formatDate(published_at)}
            </p>
            <p className={styles.textContent}>
                {content}
            </p>
        </div>
        </article>
    </main>
    </Layout>
  )
}

export async function getServerSideProps ({query: {url}}){ //asi tendriamos el url

    const urlBlog= `${process.env.API_URL}/blogs?url=${url}`;
    const resp = await fetch(urlBlog);
    const blogEntryContent = await resp.json();


    return {
        props:{
            blogEntryContent: blogEntryContent[0]
        }
    }
}

export default BlogEntryContent
