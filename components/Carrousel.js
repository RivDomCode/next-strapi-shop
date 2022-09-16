import styles from "../styles/Carrousel.module.css";
import Image from "next/image";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useState } from "react";
import { carrouselData } from "./carrouselData";
import Slide from "./Slide";

const Carrousel = () => {

const [currentItem, setCurrentItem] = useState(0);
const length = carrouselData.length;

const nextSlide = () =>{
    setCurrentItem(currentItem === length - 1 ? 0 : currentItem + 1);
}

const prevSlide = () =>{
    setCurrentItem(currentItem === 0 ? length - 1 : currentItem - 1);
}


  return (
    <section className={styles.carrousel}>
       <GoChevronLeft className={styles.left} onClick={prevSlide}/>
       {carrouselData.map((slide, index) => {

return(
  <div  key={index} className={index === currentItem ? 'carrouselItem active' : "carrouselItem" }>
    {
        index === currentItem && (
            <Slide slide={slide}/>
        )
    }
  </div>
)
})}
      <GoChevronRight className={styles.right} onClick={nextSlide}/>
    </section>
  );
};

export default Carrousel;
