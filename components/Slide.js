import Image from "next/image";
import styles from "../styles/Carrousel.module.css";

const Slide = ( { slide } ) =>{

    const  { name, url, text } = slide

  return (
    <div className={styles.slide}>
         <h3> {name}</h3>
         <Image src={url} layout="intrinsic" width={700} height={450} alt={name}/>
        <h4>  {text}</h4>
    </div>
  )
}

export default Slide