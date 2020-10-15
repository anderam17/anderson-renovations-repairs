import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import BigImage from "./Components/BigImage/BigImage";
import MeetEric from "./Components/MeetEric/MeetEric";
import ReviewContainer from "./Components/ReviewContainer/ReviewContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ReviewContainer />
      {/* <BigImage />
      <MeetEric /> */}
      <Footer />
    </>
  );
}

export default App;
