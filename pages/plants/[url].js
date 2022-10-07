import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/ShopArticle.module.css";

const PlantDetail = ({ addToCart }) => {

  // const { name, plantimage, description, price, id } = plantContent;
  // const [plantimageUrl] = plantimage;





  return (
    <Layout page="">
      <main className="container">
        {/* <div className={styles.detailContainer}>

          <div className={styles.image}>
            <Image
              src={plantimageUrl.url}
              layout="intrinsic"
              width={400}
              height={500}
              alt={`plant image ${name}`}
            />
          </div>
          <div className={styles.detailText}>
            <h2 className={styles.detailName}>{name}</h2>
            <p className={styles.detailDescription}>{description}</p>
            <p className={styles.detailPrice}>Price: {price}€</p>

          </div>
        </div> */}
      </main>
    </Layout>
  );
};

export async function getServerSideProps( datos) {
  console.log("hola")
  const resp = await fetch(`${process.env.API_URL}/api/plants?filters[url]=cool-plant&populate=plantimage`);
  const { data } = await resp.json();
  console.log(data, "hola")

  return {
    props: {

    },
  };
}

export default PlantDetail;
