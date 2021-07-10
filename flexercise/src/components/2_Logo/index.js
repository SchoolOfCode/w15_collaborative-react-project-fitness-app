// This is the high quality logo seperated into the picture and words

import React from "react";
import Logo from "../../images/logo.svg";

function LogoImage() {
  return (
    <div className="logo-div">
      <img className="logo-img" src={Logo} alt="logo" />
// Flexercise picture 
      <h1 id="title-flexercise">FLEXERCISE</h1>
// Flexercise slogan
      <h3 id="slogan-flexercise">Fitness Made Fun</h3>
    </div>
  );
}

export default LogoImage;
