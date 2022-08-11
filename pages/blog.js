import styles from "../styles/Blog.module.css"
import Layout from "../components/Layout"
import BlogEntry from "../components/BlogEntry"

const Blog = ( {blogEntries} ) => {

  console.log(blogEntries)

  return (
    <Layout page="blog">
        <main className="container">
          <h2 className="heading">Blog</h2>
          <div className={styles.blog}>
            {
              blogEntries.map(blogEntry => (
                <BlogEntry key={blogEntry.id} blogEntry={blogEntry}/>
              ))
            }

          </div>
        </main>
    </Layout>

  )
}

//get data from backend with getServerSideProps
export async function getServerSideProps() {
  const url ="http://localhost:1337/blogs";
  const apiresponse = await fetch(url);
  const blogEntries = await apiresponse.json()
  return {
    props:{
      blogEntries
    }
  }
}

export default Blog