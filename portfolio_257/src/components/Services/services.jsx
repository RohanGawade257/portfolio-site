import React from 'react';
import './services.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate(); // <-- Added navigation hook

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div
              key={index}
              className="services-fromat"
              onClick={() => navigate(`/services/${service.slug}`)} // <-- SPA-friendly navigation
              style={{ cursor: "pointer" }}
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>

              <div className="services-read-more">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services;
