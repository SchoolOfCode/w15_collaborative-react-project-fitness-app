// This adds the background image for the Home Page

import React from "react";
import Lunge from "../../images/Lunge.jpg";

function BackgroundImage() {
  return (
    <div className="homepage">
      <img id="homepage-background-img" src={Lunge} alt="man lunging" />
    </div>
  );
}

export default BackgroundImage;
