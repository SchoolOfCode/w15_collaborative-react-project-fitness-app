import React from "react";

// motivational quote and image will be sourced from an array using array methods depending on range of user exercise amount input

function MotivationalQuote({text}) {
  return (
    <div className="motivational">
      <div className="motivational-image-container">
        <img className="motivational-image" src={image} />
      </div>
      <div className="motivation-text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default MotivationalQuote;
