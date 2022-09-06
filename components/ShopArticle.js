import styles from "../styles/ShopArticle.module.css";
import Image from "next/image";

const ShopArticle = ( { shopArticle } ) => {

    const { description, name, price, plantimage } = shopArticle;

    const [ plantimageUrl ] = plantimage;

  return (
    <article className={styles.shopArticle}>
        <Image src={plantimageUrl.url} layout="responsive" width={50} height={50} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
    </article>
  )
}

export default ShopArticle