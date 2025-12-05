import React, { useState } from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Mail_icon from "../../assets/mail_icon.svg";
import Location_icon from "../../assets/location_icon.svg";
import likdin_icon from "../../assets/social.png";
import insta_icon from "../../assets/insta logo.png";

const Contact = () => {
  const [Result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "f8089079-a819-42c7-b2e4-e595302cf14b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully ✅");
        event.target.reset();
        setShowPopup(true);

        
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } else {
        console.error("Web3Forms error:", data);
        setResult("Error submitting form ❌");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Network error ❌");
    }
  };

  return (
    <div id="contact" className="contact">
      
      {showPopup && (
        <div className="top-alert">
          <span>✅ Your message has been sent successfully!</span>
        </div>
      )}

      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
     
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

         <a
               href="https://www.instagram.com/rohan_crafts__257?igsh=ZzdkZjVoMDRlZ3E1"
               target="_blank"
               rel="noreferrer"
               className="contact-detail"
             >
               <img
                 src={insta_icon}
                 alt="Instagram"
                 style={{
                   width: "40px",
                   height: "40px",
                   borderRadius: "50%",
                   objectFit: "cover",
                 }}
               />
               <p>rohan_crafts__257</p>
             </a>

            <a
               href="https://www.linkedin.com/in/rohan-gawade-38a217313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
               target="_blank"
               rel="noreferrer"
               className="contact-detail a1"
             >
               <img
                 src={likdin_icon}
                 alt="LinkedIn"
                 style={{
                   width: "40px",
                   height: "40px",
                   borderRadius: "50%",
                   objectFit: "cover",
                 }}
               />
               <p>Rohan Gawade</p>
             </a>

            <div className="contact-detail">
              <img src={Location_icon} alt="" />
              <p>Valpoi North Goa, India</p>
            </div>
          </div>
        </div>

        
        <div>
          <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />

            <label>Write your message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
