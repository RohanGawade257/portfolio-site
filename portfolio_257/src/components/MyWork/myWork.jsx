import React from 'react'
import './myWork.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from '../../assets/mywork_data';
import arrow_icon from "../../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {

  const navigate = useNavigate();

  // ✅ 2 Graphic (first 2)
  const graphicWorks = mywork_data.slice(0, 2);

  // ✅ 2 More (middle items – you can adjust index anytime)
  const videoWorks = mywork_data.slice(7, 9);

  // ✅ 2 More
  const webWorks = mywork_data.slice(10, 12);

  // Combine all 6
  const topWorks = [...graphicWorks, ...videoWorks, ...webWorks];

  return (
    <div id='work' className='myWork'>
      <div className="myWork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="myWork-container">
        {topWorks.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              alt={work.w_name}
            />
          )
        })}
      </div>

      <div
        className="myWork-show-more"
        onClick={() => navigate("/work")}
        style={{ cursor: "pointer" }}
      >
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Services