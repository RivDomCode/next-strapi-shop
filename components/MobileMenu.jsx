import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../styles/Menu.module.css";
import { GiShoppingCart, GiLindenLeaf } from "react-icons/gi";


const MobileMenu = (  ) => {


  const { closeMenu } = useContext(AppContext)

  return (
    <div className={styles.menu}>
      <span onClick={closeMenu}>X</span>
      <div className={styles.logo}>
        <GiLindenLeaf className={styles.leaf}/>
        <Link href="/"><div className={styles.shopName}>  Plants Shop</div></Link>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="blog">Blog</Link>
        <Link href="shop ">Shop</Link>
        <Link href="cart">
          <GiShoppingCart className={styles.shoppingCart}/>
        </Link>
      </div>

    </div>
  )
}

export default MobileMenu