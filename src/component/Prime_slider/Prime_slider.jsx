import React from 'react'
import FlashCard from './../ads/Category';

const Prime_slider = () => {
  return (
    <>
     <div className='primeSlider'>
      <div className='primeSlider_container'>
        <div className='primeSlide_Content'>
          <span>THE TIMZOID ADVANTAGE</span>
        </div>
        <div className="primeSliderHead">
          <h3> Ingenious solutions for business growth and efficiency</h3>
        </div>
        <div className="primeSliderP">
          <p> We have a deep understanding of the software development industry. From businesses in fintech and eCommerce to the banking sectors, we help to communicate better with business customers, fostering interactions and building stronger connections.</p>
        </div>
        
      </div>
      <div>
          <FlashCard/>
        </div>
     </div>
    </>
  )
}

export default Prime_slider