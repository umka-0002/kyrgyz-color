import React, { useState, useEffect } from 'react';
import styles from '../../styles/Slider/Slider.module.css';

// Импорт локальных изображений
import slide1 from '../../../assets/images/slider-images/image1.svg';
import slide2 from '../../../assets/images/slider-images/image2.svg';
import slide3 from '../../../assets/images/slider-images/image10.svg';

// Массив локальных изображений
const images = [slide1, slide2, slide3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Slider;
