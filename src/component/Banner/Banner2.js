import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import banner from "../../assests/banner/internet security or cyber security.svg"
import shadow from "../../assests/banner/banner_shadow.svg"
import { Link } from 'react-router-dom'
const Banner2 = () => {
  return (
    <>
    <div className='banner2'>
      <div className='banner2_contain'>
     <div className='banner2_summarized'>
      <div className='banner_img'>
        <img src={banner} alt=''/>
        
      </div>
        <div className='banner2_h2'>
           <h2>Enjoy dependable resourceful solutions.</h2>
        <p>Say goodbye to ordinary interactions and hello to extraordinary experiences. We're always exploring new ideas and technologies, and we can't wait to help you achieve your goals.</p>
        <div className='btned'>
       <Link to="/contact">
       <button>Get Started</button>
         <BsArrowRight/>
       </Link>
      </div>
        </div>
      
     </div>
     {/* <div className='shadow'>
          <img src={shadow} alt=''/>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Banner2