import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/NotFound.module.css"

const NotFound = () => {
  return (
    <Layout page="404 page not found">
        <div className={styles.notFound}>
            <h1 className="heading">404 Page not found</h1>
            <Link href="/">Back to home</Link>
        </div>
    </Layout>
  )
}

export default NotFound