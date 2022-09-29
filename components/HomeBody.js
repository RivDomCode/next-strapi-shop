import styles from "../styles/Home.module.css";
import { GiNotebook, GiShop, GiShoppingCart } from "react-icons/gi";
import Link from "next/link";

const HomeBody = () => {
  return (
    <section className={styles.homeBody}>
      <div className={styles.service}>
       <GiNotebook className={styles.serviceIcon}/>
       <Link href="blog">Check the latest articles in our blog</Link>
      </div>
      <div className={styles.service}>
        <GiShop className={styles.serviceIcon}/>
        <Link href="shop">Start Shopping!!!</Link>
      </div>
      <div className={styles.service}>
        <GiShoppingCart className={styles.serviceIcon} />
        <Link href="cart">Review your shopping cart</Link>
      </div>
    </section>
  );
};

export default HomeBody;
