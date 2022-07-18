import styles from "../styles/Home.module.css";


const HomeBody = () => {
  return (
    <section className={styles.homeBody}>
        <div className={styles.service}>
        <span className="material-symbols-outlined">
construction
</span>
            Any kind of tools for your house and garden

        </div>
        <div className={styles.service}>
        <span className="material-symbols-outlined">
potted_plant
</span>
            Seed from all the continents straight to your home

        </div>
        <div className={styles.service}>
        <span className="material-symbols-outlined">
chair
</span>
Also we got an awesome furniture section for
        </div>
    </section>
  )
}

export default HomeBody