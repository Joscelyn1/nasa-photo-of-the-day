import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from  "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


function App() {

  const [media, setMedia] = useState("");

  useEffect(() => {

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => setMedia(res.data.url))
      .catch(err => console.log(err));

  }, []);

axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('problem', error);
    })

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
