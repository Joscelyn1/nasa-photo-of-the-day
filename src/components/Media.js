import React from "react";
import Main from "./Main.js";


const Media = (props) => {
    const mediaType = props.mediaType;
    

    if (mediaType === "image") {
        return(
        <div className="image-container">
            <img className="media" src={props.url}/>
        </div>
        )
    }
    else {
        return(
        <div className="video-container">
            <iframe className="media" width="420" height="315"
                src={props.url}>
            </iframe>
        </div>
        )
        }
}

export default Media;