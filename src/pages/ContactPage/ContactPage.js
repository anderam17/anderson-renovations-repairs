import React from "react";
import Header from "../../Components/Header/Header";
import ContactContainer from "../../Components/ContactContainer/ContactContainer"


function ContactPage() {
  return (
    <>
        <Header title="Contact Us" body="If you are interested in working with us, below are a number of way you can get in touch so we can get a quote to you as soon as possible!"/>
        <ContactContainer />
    </>
  );
}

export default ContactPage;