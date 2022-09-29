import styles from "../styles/Header.module.css";
import Link  from "next/link";
import { GiLindenLeaf, GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const Header = () => {


  const { openMenu } = useContext(AppContext)

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <GiLindenLeaf className={styles.leaf}/>
              <Link href="/"><div className={styles.shopName}>  Plants Shop</div></Link>
      </div>
      <div className={styles.linkPages}>
        <Link href="/">Home</Link>
        <Link href="blog">Blog</Link>
        <Link href="shop ">Shop</Link>
        <Link href="cart">
         <GiShoppingCart className={styles.shoppingCart}/>
        </Link>

      </div>
        <GiHamburgerMenu className={styles.menu}  onClick={openMenu}/>
    </nav>
  );
};
