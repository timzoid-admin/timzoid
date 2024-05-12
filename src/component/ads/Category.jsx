import React from 'react';
import Slider from 'react-slick';
import Lottie from 'react-lottie';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const flashcards = [
  { name: 'Enhance customer experience.',  Contents: 'Elevate every interaction and delight your customers with seamless experiences.', animationData: require('../../assests/anime/real.json') },
  { name: 'Enhance brand visibility', Contents: 'Elevate your brands visibility and reach new heights.', animationData: require('../../assests/anime/spanner.json') },
  { name: 'Expand market reach', Contents: 'Increase your market reach and connect with more potential customers.', animationData: require('../../assests/anime/Animation - 1714903245171.json') },
  { name: 'Operations Optimization', Contents: 'Optimize your operations for peak performance and efficiency.', animationData: require('../../assests/anime/settings.json') },
  { name: 'Guidance in technology leverage', Contents: 'Our expert guidance leverages innovations, driving your business precisely',animationData: require('../../assests/anime/Animation - 1714904483587.json') },
  { name: 'Workflow Optimization', Contents: ' Streamline your workflow for enhanced efficiency and productivity.', animationData: require('../../assests/anime/Animation - 1714904503424.json') },
];

// const NextArrow = ({ onClick }) => (
//   <div className="control-btn" onClick={onClick}>
//     <button className="next">
//       <i className="fa fa-arrow-right"></i>
//     </button>
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div className="control-btn" onClick={onClick}>
//     <button className="prev">
//       <i className="fa fa-arrow-left"></i>
//     </button>
//   </div>
// );

const FlashCard = () => {
  const settings = {
    dots: false,
    infinite: true, 
    // Set to true for infinite looping
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
     // Set to 0 to disable automatic sliding
    slidesToShow: 4,
    slidesToScroll: 1,
    // fade: true,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    cssEase: 'linear',
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed:0,
          infinite: true,
          dots: false,
          arrows: false,
          // cssEase: 'linear',
        }
      }
    ]
  };



  // window.addEventListener('resize', () => {
  //   const newSlidesToShow = getSlidesToShow();
  //   if (newSlidesToShow !== settings.slidesToShow) {
  //     settings.slidesToShow = newSlidesToShow;
  //   }
  // });

  return (
    <Slider {...settings}>
      {flashcards.map((flashcard, index) => (
        <div
          key={index}
          // className="box"
          // initial={{ opacity: 0, x: -100 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.5 }}
        >
          <div className="productef ">
            <div className='Slide_width'>
            <div className="slider_container">
              {/* Lottie animation */}
              <div className="animation_image">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: flashcard.animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                 />
              </div>
              <div className="Contents">
                <h3>{flashcard.name}</h3>
                <p>{flashcard.Contents}</p>
              </div>
            </div>
            </div>
          </div>
        </
        // motion.
        div>
      ))}
    </Slider>
  );
};

export default FlashCard;
