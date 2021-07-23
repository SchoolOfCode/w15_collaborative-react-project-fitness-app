// This adds the an image box with writing over the top of it. The disabled tag allows us to make it unclickable and we can style them so user knows they are not avaliable.
import React from "react";

const ImageText = ({ image, name, onClick, disabled }) => {
  return (
    <div className={`exerciseChoice${name}`} onClick={!disabled ? onClick : null}>
      <div
        id="choose-exercise"
        className={`exerciseImage ${disabled ? "disabled" : null}`}
      >
        <img className={`select-img ${name}`} src={image} alt={name} data-testid={`test-${name}`}/>
        <h2 className="middle">
          <span className="text">{name}</span>
        </h2>
      </div>
    </div>
  );
};

export default ImageText;
