import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


/*
function App() {
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      // Which we then set to state
      .then(res => setDogPic(res.data.message))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />
    </div>
  );
}
*/

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
