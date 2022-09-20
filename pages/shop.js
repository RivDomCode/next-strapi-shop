import Layout from '../components/Layout';
import ShopArticle from '../components/ShopArticle';
import styles  from "../styles/Shop.module.css"

const Shop = ( {shopArticles} ) => {

  return (
    <Layout page="shop">
      <main className="container">
        <h2 className="heading">
          OUR PLANT SELeCTION
        </h2>
        <div className={styles.shop}>
          {
            shopArticles.map(shopArticle => (
              <ShopArticle key={shopArticle.id} shopArticle={shopArticle}/>
            ))
          }
        </div>
        <p className={styles.attribution}>Photos for this part of this project Courtesy of Proven Winners - www.provenwinners.com</p>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url =`${process.env.API_URL}/plants`;
  const apiresponse = await fetch(url);
  const shopArticles = await apiresponse.json();

  return {
    props:{
      shopArticles
    }
  }
}

export default Shop;