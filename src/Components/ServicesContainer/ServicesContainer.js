import React from "react";
import "./ServicesContainer.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import image from "../../assets/placeholder.png";


function ServicesContainer() {
  return (
    <>
    <div className="row">
      <div className="services-container">
        <ServiceCard image = {image} imageClass="card-img-home" id="home" title="Complete Home Renovations" services={["Kitchens", "Bathrooms", "Living rooms", "and More"]}/>
        <ServiceCard image = {image} imageClass="card-img-add-on" id="add-on" title="Add-Ons" services={["Deck Builds", "Sun Rooms", "Porches", "Car Ports", "and More"]}/>
        <ServiceCard image = {image} imageClass="card-img-other" id="other" title="Don't see your project?" description="Give us a call! We can do a lot of services that don't fit into a specific topic. We can help you figure out how to get what you need done."/>
      </div>
    </div>
    </>
  );
}

export default ServicesContainer;