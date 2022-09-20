import styles from "../styles/Carrousel.module.css";
import Image from "next/image";

const Slide = ({ slide }) => {
   const { name, url, text } = slide
  return (
    <article className={styles.slide}>
       <h1>{name}</h1>
       <Image src={url} layout="intrinsic" width={700} height={350} alt={name}/>
       <p>{text}</p>
    </article>
  )
}

export default Slide