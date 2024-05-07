import React from 'react'
import aboutimg from "../../assests/2149208028 1@2x.png"
import arrowRi from "../../assests/banner/aboutall.svg"
import arrowLe from "../../assests/banner/aboutarr.svg"
import { Header } from '../header/Header'
import { Footer } from '../Footer/Footer'

export const AboutPage = () => {
  return (
    <>
    <div>
        <Header/>
    </div>
    <div className='about'>
    <div className="bg_con">
         <div className="bg_about">
        
        <div className="top_bgs">
       
        <span>TIMZOID LIMITED</span>
        </div>
        
            <div className='bg_texts'>
            <h2>WHERE TECHNOLOGY MEETS INNOVATION</h2>
             <p>Welcome to TIMZOID! We’re all about turning your dreams into reality. We are a team of passionate IT experts dedicated to delivering top-notch solutions that meet your unique needs.</p>
            </div>
            </div>
                
      </div>
      <div className='about_us'>
        <div className='about_us_container'>
          <div className='h2_p'>
            <div className='about_h2'>
             <img src={arrowLe} className='arr' alt='arrow'/>
            <h2>WHO WE ARE</h2>
            <img src={arrowRi} className='arr' alt='arrow'/>
            </div>
            <p>With over 2 decades of experience in the innovative technology space, we are committed to providing innovative solutions that address pressing challenges across industries. Timzoid Limited is a technology solution company poised to revolutionize operations in various sectors including Fintech, Oil & Gas, Construction, Government, Human Resources, E-commerce and others enabling them to offer better services to their new and existing customers.
              <br className='spaced'/>
               Our commitment to excellence is reflected in our diverse range of comprehensive technological services. We understand that every business is unique which is why we take time to understand your specific needs and goals. Also, we stay up-to-date with the latest industry trends and technologies to ensure that our clients receive the most efficient solutions available. Our goal is to not only meet your expectations but exceed them.</p>
          </div>
          <div className='about_img'>
            <img src={aboutimg} alt='about img'/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
