import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import "./ContactContainer.css";


function ContactContainer() {
  return (
    <>
    <div className="row" id="contact-card-row">
        <div className="contact-container">
        <ContactCard subtitle="Phone" description="You can call or text the following number:" contactInfo="1 (615) 887-7949" faIcon={faPhoneSquare}/>
        <ContactCard subtitle="Email" description="You can send an email to:" contactInfo="andersonrenovationsandrepairs@gmail.com" faIcon={faEnvelopeSquare}/>
        <ContactCard subtitle="Facebook" description="Search for our purple logo on facebook:" contactInfo="Anderson Renovations and Repairs" faIcon={faFacebookSquare}/>
        </div>
    </div>
    </>
  );
}

export default ContactContainer;