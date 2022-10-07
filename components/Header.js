import styles from "../styles/Header.module.css";
import Link  from "next/link";
import { GiLindenLeaf, GiShoppingCart } from "react-icons/gi";


export const Header = ( { articlesInCart}) => {
  
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <GiLindenLeaf className={styles.leaf}/>
        <Link href="/"><div className={styles.shopName}>  Plants Shop</div></Link>
      </div>
      <div className={styles.linkPages}>
        <Link href="/">Home</Link>
        <Link href="/shop ">Shop</Link>
        <Link href="/cart">
         <GiShoppingCart className={styles.shoppingCart}/>
        </Link>
        <span>{articlesInCart}</span>
      </div>
    </nav>
  );
};
