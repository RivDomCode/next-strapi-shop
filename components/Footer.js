import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.firstP}>
      Plant shop project developed by RivDom 2022
      </p>
      <p className={styles.secondP}>
        If you wanna see more projects go to <a href="https://www.pedrorivas.dev" target="_blank" rel="noreferrer"> MY PORTFOLIO SITE</a>
      </p>


    </footer>
  )
}

export default Footer