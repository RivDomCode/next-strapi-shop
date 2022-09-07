import styles from "../styles/ShopArticle.module.css";
import Image from "next/image";
import Link from "next/link";

const ShopArticle = ( { shopArticle } ) => {

    const { description, name, price, plantimage } = shopArticle;

    const [ plantimageUrl ] = plantimage;

  return (
    <article className={styles.shopArticle}>
      <div className={styles.articleImage}>
      <Image src={plantimageUrl.url} layout="fixed" width={200} height={200} alt={name}/>

      </div>
        <h2>{name}</h2>
        <p className={styles.description}>{description}€</p>
        <p className={styles.price}>{price}€</p>
        <div className={styles.viewProductContainer}>
          <Link href="#">View Product</Link>
        </div>
    </article>
  )
}

export default ShopArticle