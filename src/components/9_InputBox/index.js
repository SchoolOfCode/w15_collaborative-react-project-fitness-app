// This adds an input text box that changes the value on change

import React from "react";

const Input = ({ text, onChange, placeholder }) => {
  return (
    <input
      className="input-text"
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
