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
