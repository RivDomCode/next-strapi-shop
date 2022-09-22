import styles from "../styles/Cart.module.css";
import Layout from '../components/Layout'
import CartArticle from "../components/CartArticle";

const cart = ( {cart, updateQuantity, removeArticle} ) => {

  return (
    <Layout page="shopping-cart">
        <h2 className="heading">Shopping Cart</h2>
        <main className={`${styles.cart} container`}>
            {
              cart.map(cartArticle => (
                <CartArticle key={cartArticle.id} cartArticle={cartArticle} updateQuantity={updateQuantity} removeArticle={removeArticle}/>
                )
              )
            }
        </main>
    </Layout>
  )
}

export default cart