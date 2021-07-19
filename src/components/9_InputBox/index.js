// This adds an input text box that changes the value on change

import React from "react";

const Input = ({ user, dispatch }) => {
  return (
    <input
      className="input-text"
      type="text"
      placeholder="Enter your name"
      onBlur={(e) => dispatch({type:"SET_NAME", payload:e.target.value})}
    />
  );
};

export default Input;
