import styles from "../styles/Cart.module.css";
import Layout from '../components/Layout'

const cart = ( {cart} ) => {



  return (
    <Layout page="shopping-cart">
        <h2 className="heading">Shopping Cart</h2>
        <main className={`${styles.cart} container`}>
            <div></div>
            <p>second item</p>
        </main>
    </Layout>
  )
}

export default cart