import React from 'react'
import './footer.css'
import Footer_logo from '../../assets/rg-logo.svg'
import User_icon from '../../assets/user_icon.svg'

const Services = () => {
  return (
    <div className='footer'>
    
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src={Footer_logo}
            alt=""
            style={{
              width: "90px",
              height: "auto",
              display: "block",
            }}
          />
          <p>
            I’m always open to freelance work, collaborations, or just a quick
            chat about ideas. Share your project details and I’ll get back to
            you as soon as possible.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={User_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr className="footer-line" />

    
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Rohan Gawade Portfolio. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Services
