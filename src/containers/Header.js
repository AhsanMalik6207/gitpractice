import React from "react";
import image from '../images/2.jpg'
import '../index.css'

function Header() {

  return (
    <div className="ui fixed menu">
      <div className="ui container">
        <img className="imgLogo" src={image} alt="Logo"/>
      </div>
    </div>
  );
}

export default Header;
