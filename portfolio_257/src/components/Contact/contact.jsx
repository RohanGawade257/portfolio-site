import React from 'react'
import './contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import Mail_icon from "../../assets/mail_icon.svg";
import Location_icon from "../../assets/location_icon.svg";
import likdin_icon from "../../assets/social.png";
import insta_icon from "../../assets/insta logo.png";

const Services = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’m always open to freelance work, collaborations, or just a quick
            chat about ideas. Share your project details and I’ll get back to
            you as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={Mail_icon} alt="" />
              <p>offficialrohan257@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img
                src={insta_icon}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p>rohan_crafts__257</p>
            </div>

            <div className="contact-detail">
              <img
                src={likdin_icon}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p>Rohan Gawade</p>
            </div>

            <div className="contact-detail">
              <img src={Location_icon} alt="" />
              <p>Valpoi North Goa, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label>Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
