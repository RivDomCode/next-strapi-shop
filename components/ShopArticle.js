import styles from "../styles/ShopArticle.module.css";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

const ShopArticle = ( { shopArticle, addToCart, setModalProductAdded } ) => {


  const { attributes, id} = shopArticle;
  const { name, description, url, plantimage, price } = attributes;

  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedProduct = {
      id,
      img: plantimage.data.attributes.url,
      name,
      price,
      quantity
    }

    addToCart(selectedProduct);
    setModalProductAdded(true);
  }
  return (
    <article className={styles.shopArticle}>
      <div className={styles.articleImage}>
      <Image src={plantimage.data.attributes.url} layout="fixed" width={200} height={200} alt={name}/>
      </div>
        <h2>{name}</h2>
        <p className={styles.description}>{description}€</p>
        <p className={styles.price}>{price}€</p>
        <form className={styles.form} onSubmit={handleSubmit}>
              <label>Quantity</label>

              <select
                value={quantity}
                onChange={ e => setQuantity(parseInt(e.target.value))}
              >
                <option value="">-- Select --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>

              <input type="submit" value="Add to Cart" />
            </form>
    </article>
  )
}

export default ShopArticle