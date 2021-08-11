import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PhotoOfDay from "./components/PhotoOfDay"


const apiKey = "INVPPOKGylFoV3ksSIcyuMQBtnzywOcHyEspSKTl"

function App() {
  const [nasData, setNasData] = useState()
  const [currentIndex, setCurrentIndex] = useState()

  const handlePrevClicked = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  const handleNextClicked = () => {
    if (currentIndex < nasData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  const noCopyright = () => {
    if (nasData.copyright === null) {
      return !nasData.copyright
    }
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-05-05`)
      .then((response) => {
        console.log(response.data);
        setNasData(response.data)
        setCurrentIndex(response.data.length - 1)
      })
      .catch((error) => {
        console.log(error);
      })
      return () => {
        console.log()
      }
  }, [])

  console.log(currentIndex)

  return (
    <div className="App container">
      <h1>Photo Of The Day</h1>
      {
        nasData && currentIndex ? <PhotoOfDay nasData={nasData[currentIndex]} prevClicked={handlePrevClicked} nextClicked={handleNextClicked} showNextButton={currentIndex < nasData.length - 1} /> : 'loading...'
      }
    </div>
  );
}

export default App;