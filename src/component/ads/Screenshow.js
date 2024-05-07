import React from 'react';
 
import image1 from '../../assests/slideshow/Component 28.svg';
import image2 from '../../assests/slideshow/Property 1=Group 1000001665.svg';
import image3 from '../../assests/slideshow/Property 1=Group 1000001666.svg';
import { useState, useEffect } from "react";
 import "../../styles/slider.css";

const images = [
    image1,
    image2,
    image3,
  // Add more image paths as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval as per your requirement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='show_main'>
      <div className="slider-container">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt=""
          className={`slider-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
    </div>
  );
};  

export default ImageSlider;