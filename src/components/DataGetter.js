
import React, { useState, useEffect } from "react";
import axios from "axios";


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

  export {media, setMedia};