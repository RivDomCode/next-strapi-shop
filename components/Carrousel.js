import { useState } from "react";
import styles from "../styles/Carrousel.module.css";
import Slide from "./Slide";
import { sliderData } from "./sliderData";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  return (
    <div className={styles.carrousel}>
      <h2 className="heading">Our Services</h2>
     <GoChevronRight className={styles.rightArrow}/>
      {sliderData.map((slide) => {
        return <Slide key={slide.name} slide={slide} />;
      })}
          <GoChevronLeft className={styles.leftArrow}/>
    </div>
  );
};

export default Carrousel;
