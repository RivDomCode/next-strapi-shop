import Layout from '../components/Layout';
import ShopArticle from '../components/ShopArticle';
import styles  from "../styles/Shop.module.css";
import ModalProductAdded from "../components/ModalProductAdded";
import { useState } from "react";


const Shop = ( {shopArticles, articlesInCart, addToCart} ) => {

const { data } = shopArticles;
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
            data?.map(shopArticle => (
              <ShopArticle key={shopArticle.id} setModalProductAdded={setModalProductAdded} shopArticle={shopArticle} addToCart={addToCart}/>
            ))
          }
        </div>
        <p className={styles.attribution}>Photos for this part of this project Courtesy of Proven Winners - www.provenwinners.com</p>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url =`${process.env.API_URL}/api/plants?populate=plantimage`;
  const apiresponse = await fetch(url);
  const shopArticles = await apiresponse.json();

  return {
    props:{
      shopArticles
    }
  }
}

export default Shop;