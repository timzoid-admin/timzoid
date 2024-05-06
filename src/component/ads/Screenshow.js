import React from 'react';
 
import image1 from '../../assests/slideshow/Component 28.svg';
import image2 from '../../assests/slideshow/Property 1=Group 1000001665.svg';
import image3 from '../../assests/slideshow/Property 1=Group 1000001666.svg';
import { useState, useEffect } from "react";
 import styles from "../../styles/slider.css";

const images = [
    image1,
    image2,
    image3,
  // Add more image paths as needed
];

const ImageSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.slideshow}>
    {images.map((imageUrl, index) => (
      <div
        key={index}
        className={`${styles.slide} ${
          index === activeIndex ? styles.active : ""
        }`}
      >
        <img
          src={imageUrl}
          alt={`Slide ${index + 1}`}
          className={styles.image}
        />
      </div>
    ))}
  </div>
  );
};

export default ImageSlideshow;
