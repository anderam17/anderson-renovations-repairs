import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import Footer from "./Components/Footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

function App() {
  return (
    <>
      <Navbar />
      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/reviews" component={ReviewPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/services" component={ServicesPage} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
