// This adds the Squat picture with the word Squat over it. Styling in index.css
// When we add more images we will need to amend this to be dynamic by using objects and map function but not needed in MVP

import React from "react";

function ImageText({image, name, onClick}) {
  return (
    <div className="exerciseChoice" onClick={onClick}>
      <div className="exerciseImage">
        <img
          src={image}
          alt={name}
          style={{
            width: "400px",
            height: "400px",
          }}
        />
        <h2 className="imageText">
          <span>{name}</span>
        </h2>
      </div>
    </div>
  );
}

export default ImageText;
