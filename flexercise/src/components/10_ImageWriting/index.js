// This adds the Squat picture with the word Squat over it. Styling in index.css
// When we add more images we will need to amend this to be dynamic by using objects and map function but not needed in MVP

import React from "react";
import Squat from "../App/pictures/Squat.jpg";

function ImageText() {
  return (
    <div className="exerciseChoice">
      <div className="exerciseImage">
        <img
          src={Squat}
          alt="squat"
          style={{
            width: "400px",
            height: "400px",
          }}
        />
        <h2 className="imageText">
          <span>Squats</span>
        </h2>
      </div>
    </div>
  );
}

export default ImageText;
