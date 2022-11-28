import Layout from '../components/Layout';
import ShopArticle from '../components/ShopArticle';
import styles  from "../styles/Shop.module.css";
import ModalProductAdded from "../components/ModalProductAdded";
import { useState } from "react";
import JSONDATA from "../data/plantData.json";


const Shop = ( { articlesInCart, addToCart} ) => {

const plantData = JSONDATA;
console.log(plantData)
const [modalProductAdded, setModalProductAdded] = useState(false);


  return (
    <Layout page="shop" articlesInCart={articlesInCart}>
      <main className="container">
        <h2 className="heading">
          OUR PLANT SELECTION
        </h2>


        <div className={styles.shop}>
        {
            modalProductAdded && <ModalProductAdded setModalProductAdded={setModalProductAdded}/>
          }
          {
            plantData.map(shopArticle => (
              <ShopArticle key={shopArticle.id} setModalProductAdded={setModalProductAdded} shopArticle={shopArticle} addToCart={addToCart}/>
            ))
          }
        </div>
        <p className={styles.attribution}>Photos for this part of this project Courtesy of Proven Winners - www.provenwinners.com</p>
      </main>
    </Layout>
  )
}

export default Shop;