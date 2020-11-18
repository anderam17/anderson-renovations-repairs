import React from "react";
import "./ServiceCard.css";

function ServiceCard({ imageClass, title, description, services}) {

  return (
    <>
      <div className="card services-card">
        <div className="card-img" id={imageClass}>
        <div className="middle">
            <div className="text">See More</div>
          </div>
        </div>
        <div className="card-body services-body">
          <h2 className="services-title"> {title}</h2>
          <p>{description}</p>
          <ul>
            {services &&
              services.map((item) => {
                return <li>{item}</li>;
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;