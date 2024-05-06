import React from 'react'
import timzoid_banner1 from "../../assests/banner/banner1.svg"
// import slideshow from "../../assests/banner/slideshow.svg"
// import slideshow2 from "../../assests/banner/slideshow2.svg" 


export const Banner1 = () => {
  return (
    <>
      <div className='banner1'>
        <div className='banner1_contain'>
          <div className='banner1_h2'>
            <h2>Explore Timzoid's wide range of work</h2>
            <p>Discover Timzoid's dynamic portfolio, reshaping logistics, fintech, and commerce. From optimizing supply chains to invigorating e-commerce platforms, our projects epitomize innovation and measurable impact.</p>
          </div>
          
          <div className='banner1_img'>
            <img src={timzoid_banner1} alt='' />
          </div>
        </div>
      </div>

    </>
  )
}