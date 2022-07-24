import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <Layout page="about">
      <main className="container">
      <h2 className="heading">About us</h2>
        <div className={styles.about}>
            <Image layout="responsive" width={200} height={250} src="/img/aboutUs.jpg" alt="about us"/>
            <div className={styles.aboutText}>
              <p>
              It is a long established fact that aadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).              </p>
              <p>
              It is a long established fact when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
        </div>
      </main>

    </Layout>
  )
}

export default About