import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/ShopArticle.module.css";

const PlantDetail = ({ plantContent }) => {
  console.log(plantContent);

  const { name, plantimage, description, price } = plantContent;

  const [plantimageUrl] = plantimage;

  return (
    <Layout page={name}>
      <main className="container">
        <div className={styles.detailContainer}>
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
            <form className={styles.form}>
              <label>Quantity</label>

              <select>
                <option value="">-- Select --</option>
                <option value="1">1</option>
                <option value="2">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>

              <input type="submit" value="Add to Cart" />
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  //asi tendriamos el url

  const urlPlant = `${process.env.API_URL}/plants?url=${url}`;
  const resp = await fetch(urlPlant);
  const plantContent = await resp.json();

  return {
    props: {
      plantContent: plantContent[0],
    },
  };
}

export default PlantDetail;
