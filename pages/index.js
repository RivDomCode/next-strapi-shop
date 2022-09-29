import { useContext } from "react";
import About from "../components/About";
import HomeBody from "../components/HomeBody";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import { AppContext } from "../context/AppContext";
import styles from "../styles/Home.module.css";

export default function Home() {

const { isMenuOpen } = useContext(  AppContext  )

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
            our awesome facilites directly to your home
          </p>
        </div>

        <div className={styles.heroImg}>

        </div>
        {
          isMenuOpen ?  (<MobileMenu/>) : null
        }
      </main>
      <HomeBody/>
      <About/>
    </Layout>
  );
}
