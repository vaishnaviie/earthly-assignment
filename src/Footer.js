import React from 'react';
import './Footer.scss';
import fb from './logo/facebook-logo.png';
import insta from './logo/insta-logo.png';
import linked from './logo/linkedinn.png';
import twitter from './logo/twitter-logo.png';
import wtsp from './logo/whatsappp.png';

const Footer = () => {
  return (
    <footer>
        <div className='contact'>
          <div className='address'>
            <h1>Contact Us</h1>
              <h4>16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50, Ireland</h4>
              <h4>E-mail: hello@earthly.ie</h4>
              <h4>Phone no: +353 1552 4908</h4>
          </div>
            
        </div>

        <div className='socials'>
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={linked} alt="" />
          <img src={twitter} alt="" />
          <img src={wtsp} alt="" />
        </div>
        <div className='social-link'>

        </div>
    </footer>
  )
}

export default Footer