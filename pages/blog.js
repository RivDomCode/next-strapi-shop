import styles from "../styles/Blog.module.css"
import Layout from "../components/Layout"
import BlogEntry from "../components/BlogEntry"

const Blog = () => {
  return (
    <Layout page="blog">
        <main className="container">
          <h2 className="heading">Blog</h2>
          <div className={styles.blog}>
            <BlogEntry/>
          </div>
        </main>
    </Layout>

  )
}

export default Blog