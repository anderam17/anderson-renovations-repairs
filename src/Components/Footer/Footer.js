import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-column">
                CONTACT US:
                <br/>
                <FontAwesomeIcon icon={faEnvelopeSquare} /> andersonrenovationsandrepairs@gmail.com
                <br/>
                <FontAwesomeIcon icon={faPhoneSquare} /> 1 (615) 887-7949
                <br/>
                <FontAwesomeIcon icon={faFacebookSquare} /> https://www.facebook.com/andersonrenovationsandrepairs

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
