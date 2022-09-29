import styles from "../styles/Cart.module.css";
import Layout from '../components/Layout'
import CartArticle from "../components/CartArticle";
import { useEffect, useState } from "react";

const Cart = ( {cart, updateQuantity, removeArticle} ) => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalUpdated = cart.reduce((total, product) => total +(product.quantity * product.price), 0)
    setTotal(totalUpdated)
  }, [cart])


  return (
    <Layout page="shopping-cart">
        <h2 className="heading">Shopping Cart</h2>
        <main className={`${styles.cart} container`}>
          <div>
          {
              cart.map(cartArticle => (
                <CartArticle key={cartArticle.id} cartArticle={cartArticle} updateQuantity={updateQuantity} removeArticle={removeArticle}/>
                )
              )
            }
          </div>

            <div className={styles.order}>
                <h3>Your Order</h3>
                {
                  total > 0 ? (
                    <p> Total price: {total}€</p>
                  ) : (
                    <span> - Your shopping cart is empty - </span>
                  )
                }

            </div>
        </main>
    </Layout>
  )
}

export default Cart