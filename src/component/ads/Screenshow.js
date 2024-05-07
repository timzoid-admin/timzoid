import React from "react";

import image1 from "../../assests/slideshow/Component 28.svg";
import image2 from "../../assests/slideshow/Property 1=Group 1000001665.svg";
import image3 from "../../assests/slideshow/Property 1=Group 1000001666.svg";
import { useState, useEffect } from "react";
import "../../styles/slider.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="show_main">
      <div className="slider-container">
        {/* {images.map((imageUrl, index) => (
        
      ))} */}

        <img src={images[index]} alt="" className={`slider-image`} />
      </div>
    </div>
  );
};

export default ImageSlider;
