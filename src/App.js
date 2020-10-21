import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
// import BigImage from "./Components/BigImage/BigImage";
// import MeetEric from "./Components/MeetEric/MeetEric";
import HomePage from "./Components/HomePage/HomePage";
// import ReviewContainer from "./Components/ReviewContainer/ReviewContainer";
// import ReviewHeader from "./Components/ReviewHeader/ReviewHeader";
import ReviewPage from "./Components/ReviewPage/ReviewPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/reviews" component={ReviewPage} />
        </Switch>
     

      {/* <ReviewPage />
      <HomePage /> */}
      <Footer />
    </>
  );
}

export default App;
