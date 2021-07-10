// Small Flexercise Logo to be added on several pages see component tree
// The logo is transparent, the background colour for pages is 232323 


import React from "react";
import Logo from "../../images/logo.svg";

function SmallLogo() {
  return (
    <div>
      <img src={Logo} alt="logo" className="small-logo"></img>
    </div>
  );
}

export default SmallLogo;
