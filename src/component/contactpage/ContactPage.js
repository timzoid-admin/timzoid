import React from 'react'
import { Link } from 'react-router-dom';
import arrowRi from "../../assests/banner/aboutall.svg"
import arrowLe from "../../assests/banner/aboutarr.svg"
import {FiPhone} from "react-icons/fi"
import {MdOutlineMail} from "react-icons/md"
import { Header } from '../header/Header';
import { Footer } from '../Footer/Footer';
const ContactPage = () => {
  return (
    <>
    <div>
        <Header/>
    </div>
    <div className='contact'>
      <div className='contact_contain'>
        <div className='leftse'>
          <span>
            <p>CONTACT US</p>
          </span>
          <h3>Feel free to get in touch whenever you like.</h3>
          <p>If you have any questions or inquiries, don't hesitate to reach out to us. Timzoid is here to assist you with any assistance you may need.</p>
          <div className='contact_btn'>
            <button>
              <FiPhone className='iconNames' />
            +234 8079 752 300
            </button>
            <button>
            <FiPhone className='iconNames' />
            +2348168176824
            </button>
            <button>
              <Link to="info@timzoid.com">
                <MdOutlineMail className='iconNames' />
              info@timzoid.com 
              </Link>
            
            </button>
            <button>
            <Link to="Support@timzoid.com">
            <MdOutlineMail className='iconNames' />
            Support@timzoid.com
              </Link>
            
            </button>
          </div>
        </div>
        <div className='right_sideContact'>
          <div className='rightside_container'>
          <div className='contact_arrow'>
            <img src={arrowLe} alt='arrow' className='arr'/>
            <h2>SUPPORT</h2>
            <img src={arrowRi} className='arr' alt='arrow'/></div>
            <form>
              
              <label>Full Name</label>
              <input 
                type="text"  
                   placeholder="Enter your full name" 
               />
              <label>Email Address</label>
              <input 
                type="email"  
                 placeholder="Enter your email address" 
                />
               <label>Phone Number</label>
              <input 
                type="text"  
                   placeholder="Enter your phone number" 
                     />
                     <label>Inquiry</label>
                     <textarea 
                         placeholder="Type here"
                        style={{ resize: 'none' }} // This style prevents resizing
                          />
                     <button type='submit'>Send Message</button>
              
            </form>
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

export default ContactPage