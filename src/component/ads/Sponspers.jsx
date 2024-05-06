import React from 'react'
import fund10 from "../../assests/fund10.png"
import hikvision from "../../assests/image 10.svg"
import ridon from "../../assests/image 3.svg"
import cisco from "../../assests/image 7.svg"
import paycenter from "../../assests/image 9(1).svg"
import microsoft from "../../assests/image 9.svg"
import loc from "../../assests/image001 2.svg"
import loma from "../../assests/loma.svg"
import smartcredit from "../../assests/smartcenter.svg"
import reslify from "../../assests/relisfy.svg"
import fintava from "../../assests/fintava.svg"

export const Ads = () => {
  const profileDetails =[
    {
       img: loc,
      
    },
    {
      img: ridon,
     
   },
   {
    img: microsoft,
   
  },
    {
      img: loma,
     
   },
   {
    img: cisco,
   
 },
   {
    img: fund10,
   
 },
 {
  img: hikvision,
 
},

   {
    img: paycenter,
   
 },
 {
  img: smartcredit,
 
},
{
  img: reslify,
 
},
{
  img: fintava,
 
},
    
  ]
  return (
    <>
    <div className='ads_bg'>
      <div className='ads_container'>
      <div className="top_bg">
                <span>OUR TRUSTED CLIENTS & PARTNERS</span>
        </div>
        <div className='ads_img'>
          {profileDetails.map((item,index)=>(
            <div className='sponsor' key={index}>
            <img src={item.img} alt=''/>
          </div> 
          ))}
          
        </div>
      </div>
    </div>
    </>
  )
}
