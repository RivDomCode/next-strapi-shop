import styles from "../styles/Cart.module.css";
import Image from "next/image";

const CartArticle = ( {cartArticle, updateQuantity, removeArticle}) => {

const { img, name, price, quantity, id } = cartArticle;

  return (
    <div className={styles.cartArticle}>
        <div>
            <Image src={img} layout="intrinsic" width={250} height={300} alt={`img ${name}`}/>
        </div>
        <div>
            <p className={styles.name}>{name}</p>
            <div className={styles.quantity}>
            <p >Quantity: </p>
            <select
                value={quantity}
                onChange ={ (e) => updateQuantity({
                  quantity: e.target.value,
                  id: id
                })
                }
                className={styles.quantitySelect}
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
            </div>
            <p className={styles.price}><span>Price:</span> €{price}</p>
            <p className={styles.subtotal}>Subtotal: €<span>{price * quantity}</span></p>
        </div>
        <button type="button" className={styles.remove} onClick={()=> removeArticle(id)}>x</button>
    </div>
  )
}

export default CartArticle