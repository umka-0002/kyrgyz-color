import React, { useEffect, useRef } from "react";
import styles from "../../styles/Slider/InfiniteScrollSlider.module.css";

// Импорт локальных изображений
import slide1 from "../../../assets/images/scroll-images/image1.svg";
import slide2 from "../../../assets/images/scroll-images/image2.svg";
import slide3 from "../../../assets/images/scroll-images/image3.svg";
import slide4 from "../../../assets/images/scroll-images/image4.svg";
import slide5 from "../../../assets/images/scroll-images/image1.svg";
import slide6 from "../../../assets/images/scroll-images/image2.svg";
import slide7 from "../../../assets/images/scroll-images/image3.svg";
import slide8 from "../../../assets/images/scroll-images/image4.svg";

// Массив локальных изображений
const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

const InfiniteScrollSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let startPos = 0;
    let animationFrameId;

    const scroll = () => {
      startPos += 1; // Скорость прокрутки
      slider.scrollLeft = startPos;
      if (startPos >= slider.scrollWidth / 2) {
        startPos = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.sliderContainer} ref={sliderRef}>
      <div className={styles.sliderContent}>
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollSlider;
