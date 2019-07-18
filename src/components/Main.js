import React from "react";
import Media from "./Media.js";


const Main = (props) => {
    return (
      <main>
        <Media key="1026" url={props.url} mediaType={props.mediaType}/>
        <p>{props.explanation}</p>
      </main>
    );
  };
  
  export default Main;