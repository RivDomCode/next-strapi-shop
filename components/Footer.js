import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <p className={styles.firstP}>
      Plant shop project developed by RivDom 2022
      </p>

      </div>
    </footer>
  )
}

export default Footer