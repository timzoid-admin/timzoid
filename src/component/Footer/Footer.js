import React from 'react'
import logo from "../../assests/banner/Timzoid Logo Trans 2.png"
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter} from 'react-icons/fa6';

export const Footer = () => {
  return (
    <>
    <div className='footer'>
     
      <div className='footer_container'>
        <div className='footer_sub'>
          <Link to="/">
          <img  src={logo} alt=''/>
          </Link>
          <p>Empowering innovation, driving success</p>
        </div>
        <div className='company'>
          <h3>Company</h3>
          <Link to="/about">
            <p>About us</p>
          </Link>
          <Link to="/">
            <p>Career</p>
          </Link>
        </div>
        <div className='legal'>
          <h3>Legal</h3>
          
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
        <div className='contact_us'>
          <h3>Contact Us</h3>
        
          <p>Oduduwa House, Ahmadu Bello Wy, Victoria Island, Lagos 106104, Lagos</p>
            <p>+234 8079 752 300</p>
        </div>
      </div>
      <div className='copyright'>
        <div>
          <p>© 2024 Timzoid LTD  |  All Right Reserved.</p>
        </div>
        <div className='icons_footer'>
        <Link to="https://x.com/timzoid?s=11"><FaXTwitter />   </Link>
        <Link to="https://www.linkedin.com/company/timzoid/"><FaLinkedin/></Link>
        <Link to="https://www.instagram.com/timzoid?igsh=YWJ0eTg4czgyZ3Fv"><FaInstagram/></Link>
        <Link to="https://www.facebook.com/share/Q32zkATm7qRWMLWq/?mibextid=qi2Omg"><FaFacebook/></Link>
      </div>
      </div>
      
    </div>
    </>
  )
}
