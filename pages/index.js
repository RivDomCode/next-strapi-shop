import Link from "next/link";
import HomeBody from "../components/HomeBody";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout page="home">
      <main className={styles.home}>
        <div className={styles.hero}>
          <p className={styles.mainText}>
            Plants are extraordinary living things. Although they seem simple,
            they are actually, in some ways, more complicated than us. For
            instance, a whole new plant can be grown from just a single leaf.
          </p>
          <p className={styles.secondaryText}>
            All kinds of plants or tools for every environment delivered from
            our awesome facilites directly to yor home
          </p>
          <button className={styles.heroBtn}>
            <Link href="shop">Start shopping</Link>
          </button>
        </div>

        <div className={styles.heroImg}></div>
      </main>
      <HomeBody/>
    </Layout>
  );
}
