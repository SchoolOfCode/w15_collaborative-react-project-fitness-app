// This adds the Squat picture with the word Squat over it. Styling in index.css
// When we add more images we will need to amend this to be dynamic by using objects and map function but not needed in MVP

import React from "react";

function ImageText({ image, name, onClick, disabled }) {
  return (
    <div className="exerciseChoice" onClick={!disabled ? onClick : null}>
      <div id="choose-exercise" className={`exerciseImage ${disabled ? "disabled" : null}`}>
        <img className="select-img"
          src={image}
          alt={name}
        />
        <h2 className="middle">
          <span className="text">{name}</span>
        </h2>
      </div>
    </div>
  );
}

export default ImageText;
