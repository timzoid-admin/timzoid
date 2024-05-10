import React from 'react';

// import default images
import fund10 from "../../assests/fund10.png";
import hikvision from "../../assests/image 10.svg";
import ridon from "../../assests/image 3.svg";
import cisco from "../../assests/image 7.svg";
import paycenter from "../../assests/image 9(1).svg";
import microsoft from "../../assests/image 9.svg";
import loc from "../../assests/image001 2.svg";
import loma from "../../assests/loma.svg";
import smartcredit from "../../assests/smartcenter.svg";
import reslify from "../../assests/relisfy.svg";
import fintava from "../../assests/fintava.svg";

// import hover images
import locHover from "../../assests/ads logo/hover loc.svg";
import ridonHover from "../../assests/ads logo/hover ridon.svg";
import lomaHover from "../../assests/ads logo/loma hover.svg";
import microsoftHover from "../../assests/ads logo/microsoft hover.svg";
import paycenterHover from "../../assests/ads logo/paycenter hover.svg";
import hikvisionHover from "../../assests/ads logo/hikvision hover.svg";
import reslifyHover from "../../assests/ads logo/Screenshot 2024-04-26 at 17.46 2.svg";
import FintavaHover from "../../assests/ads logo/image 24.svg";
import fundHover from "../../assests/ads logo/WhatsApp Image 2024-04-26 at 10.47 2.svg";
import ciscoHover from "../../assests/ads logo/cisco hover.svg";
import smartcreditHover from "../../assests/ads logo/smartcredit hover.svg";

 
export const Ads = () => {
  const profileDetails = [
    { img: loc, hoverImg: locHover },
    { img: ridon, hoverImg: ridonHover },
    { img: microsoft, hoverImg: microsoftHover },
    { img: loma, hoverImg: lomaHover },
    { img: cisco, hoverImg: ciscoHover },
    { img: fund10, hoverImg: fundHover },
    { img: hikvision, hoverImg: hikvisionHover },
    { img: paycenter, hoverImg: paycenterHover },
    { img: smartcredit, hoverImg: smartcreditHover },
    { img: reslify, hoverImg: reslifyHover },
    { img: fintava, hoverImg: FintavaHover }
  ];

  return (
    <div className='ads_bg'>
      <div className='ads_container'>
        <div className="top_gp">
          <span>OUR TRUSTED CLIENTS & PARTNERS</span>
        </div>
        <div className='ads_img'>
          {profileDetails.map((item, index) => (
            <div className='sponsor' key={index}>
              <img src={item.img} alt='' className="sponsor-img" />
              <img src={item.hoverImg} alt='' className="sponsor-img hover-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
