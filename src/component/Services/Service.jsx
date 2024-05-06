import React from 'react';
 import software from "../../assests/mainIcons/soft.jpg"
import computer from "../../assests/mainIcons/mingcute_computer-line.jpg"
import phone from "../../assests/mainIcons/gridicons_phone.jpg"
import symbols from "../../assests/mainIcons/material-symbols_air.jpg"
import less from "../../assests/mainIcons/lets-icons_ito.jpg"
import digital from "../../assests/mainIcons/bxl_digitalocean.jpg"

const Services = () => {
  const serviceData = [
    { name: 'Custom software development',  Contents: 'Help you create custom software solutions tailored to your specific needs.', Icon: software },
    { name: 'Mobile application development', Contents: 'Provide complete end to end solutions for your business by developing complete packaged mobile applications.', Icon: computer },
    { name: 'Website development', Contents: 'Develop comprehensive and competitive web solutions with a focus on usability and responsiveness.', Icon: phone },
    { name: 'Artificial intelligence', Contents: 'Help to provide constant evaluation, guaranteeing that any problems are quickly fixed.', Icon: symbols },
    { name: 'IT Consulting', Contents: 'Provide complete end to end solutions for your business by developing complete packaged mobile applications.', Icon: less },
    { name: 'Digital transformation', Contents: 'Help to analyze, improve, and digitize workflows for enhanced efficiency and innovation.', Icon: digital},
  ];

  return (
    <div className='services'>
      <div className='service_container'>
        <div className='service_head'>
          <h3>Our Services</h3>
          <p>We are your gateway to enhanced customer experiences that drive lasting loyalty and growth. Our comprehensive range of development services include:</p>
        </div>
        <div className='service_shapes'>
          {serviceData.map((item, index) => (
            <div key={index}>
              <div className='service_box'>
                <img src={item.Icon} alt='image_icon'/>
                <h4>{item.name}</h4>
                <p>{item.Contents}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
