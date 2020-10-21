import React from "react";
import "./ContactCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ContactCard({ subtitle, description, faIcon, contactInfo }) {
  return (
    <>
      <div className="contact-card">
        <FontAwesomeIcon transform="grow-30" icon={faIcon} />
        <h2 className="subtitle"><b>{subtitle}</b></h2>
        <p className="description">{description}</p>
        <p className="contact-info">{contactInfo}</p>
      </div>
    </>
  );
}

export default ContactCard;
