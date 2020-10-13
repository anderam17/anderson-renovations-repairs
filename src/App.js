import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import BigImage from "./Components/BigImage/BigImage";
import MeetEric from "./Components/MeetEric/MeetEric";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BigImage />
      <MeetEric />
      <Footer />
    </>
  );
}

export default App;
