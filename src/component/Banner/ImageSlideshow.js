// import React, { useState, useEffect } from 'react';
//  import slides from "../../assests/banner/banner1.svg"
//  import sliding from "../../assests/banner/slideshow.svg"
//  import slidings from "../../assests/banner/slideshow2.svg"
//  import styles from "../../styles/banner.css"
// const images = [
//     slides,
//     sliding,
//     slidings,
//   // Add more image paths as needed
// ];

// const ImageSlideshow = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [fadeOut, setFadeOut] = useState(false);
  
//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         setFadeOut(true);
//         setTimeout(() => {
//           setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//           setFadeOut(false);
//         }, 500); // Adjust this time according to your transition duration
//       }, 5000); // Change the interval time as needed
  
//       return () => clearInterval(intervalId);
//     }, []);
  
//     return (
//       <div className={styles.slideshow}>
//         <div
//           className={`${styles.slide} ${fadeOut ? styles.fadeOut : ""}`}
//           style={{
//             backgroundImage: `url(${images[activeIndex]})`
//           }}
//         />
//       </div>
//     );
//   };
  
//   export default ImageSlideshow;