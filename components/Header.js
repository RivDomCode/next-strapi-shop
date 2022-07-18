import styles from "../styles/Header.module.css";
import Link  from "next/link";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">eco</span>
        <div className={styles.shopName}>Plants Shop</div>
      </div>
      <div className={styles.linkPages}>
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        <Link href="shop ">Shop</Link>
        <Link href="blog">Blog</Link>
      </div>
    </nav>
  );
};
