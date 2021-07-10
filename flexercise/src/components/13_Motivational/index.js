// This component is not used on the MVP as only one motivational page however on second iteration 
// motivational quote and image will be sourced from an array which will change depending on range of user exercise amount input

import React from "react";

function MotivationalQuote({ text }) {
  return (
    <div className="motivational">
//motivational image 
      <div className="motivational-image-container">
        <img className="motivational-image" src={image} />
      </div>

//motivational text 
      <div className="motivation-text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default MotivationalQuote;
