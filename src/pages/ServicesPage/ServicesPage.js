import React from "react";
import Header from "../../Components/Header/Header";
import ServicesContainer from "../../Components/ServicesContainer/ServicesContainer";

function HomePage() {
  return (
    <>
        <Header title="Services Offered"/>
        <ServicesContainer />
    </>
  );
}

export default HomePage;