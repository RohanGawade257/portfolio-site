import React from "react";
import { useParams } from "react-router-dom";
import workData from "../data/workData";
import "./workCategory.css";

const WorkCategory = () => {
  const { category } = useParams();

  const categoryData = workData[category];

  if (!categoryData) {
    return <h2 style={{ textAlign: "center" }}>No Data Found</h2>;
  }

  return (
    <div className="category-page">
      <h1>{categoryData.title}</h1>

      <div className="category-container">
        {categoryData.items.map((item, index) => (
          <div key={index} className="category-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCategory;