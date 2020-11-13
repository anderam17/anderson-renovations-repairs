import React from "react";
import "./ServiceCard.css";

function ServiceCard({ imageClass, id, title, description, services, image }) {
  //!how am I going to pass the image thing through if I have it as background image?
  return (
    <>
      <div className="card services-card">
        <div className="card-img" id={imageClass}></div>
        <div className="card-body services-body">
          <h2 className="services-title"> {title}</h2>
          <p>{description}</p>
          <ul>
            {services &&
              services.map((item) => {
                return <li>{item}</li>;
              })}
          <a href="#" id={id}>See More Here</a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
