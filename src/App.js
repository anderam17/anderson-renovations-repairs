import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import ReviewPage from "./Components/ReviewPage/ReviewPage";
import Footer from "./Components/Footer/Footer";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/reviews" component={ReviewPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
