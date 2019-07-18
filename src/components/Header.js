import React from "react";

const Header = (props) => {
    return (
      <header>
        <h1 class="site-title">🚀 NASA Picture of the Day 🚀</h1>
        <h3 class="date">{props.date}</h3>
        <h3 class="media-title">{props.title}</h3>
      </header>
    );
  };
  
  export default Header;