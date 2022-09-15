import { useState } from "react";
import styles from "../styles/Carrousel.module.css";
import Slide from "./Slide";
import { sliderData } from "./sliderData";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1)
  }


  console.log(currentSlide)

  return (
    <div className={styles.carrousel}>
      <h2 className="heading">Our Services</h2>
     <GoChevronRight className={styles.rightArrow} onClick={nextSlide}/>
      {sliderData.map((slide, index) => {

        return(
          <div  key={index} className={ index === currentSlide ? 'slide active' : 'slide'}>
          {
            index === currentSlide && (
            <Slide slide={slide} />
            )
          }
          </div>
        )
      })}
          <GoChevronLeft className={styles.leftArrow} onClick={prevSlide}/>
    </div>
  );
};

export default Carrousel;
