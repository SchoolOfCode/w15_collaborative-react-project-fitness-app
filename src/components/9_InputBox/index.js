// This adds an input text box that changes the value on change

import React from "react";

const Input = ({ text, onChange, placeholder, type }) => {
  return (
    <input
      className="input-text"
      data-testid="name-input"
      type={type}
      placeholder={placeholder}
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
