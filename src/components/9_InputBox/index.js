// This adds an input text box that changes the value on change

import React from "react";

const Input = ({ user, dispatch, action }) => {
  return (
    <input
      className="input-text"
      type="text"
      placeholder={action==="SET_NAME"?"Enter your name":"Enter your reps"}
      onBlur={(e) => dispatch({type:action, payload:e.target.value})}
    />
  );
};

export default Input;
