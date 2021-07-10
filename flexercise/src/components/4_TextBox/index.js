// A component to add text to pages

// Examples of what to write in the return function: 
// Exercise Selection Page 
// <TextBox className="" text="You are about to complete a short base test which will be used to create a daily workout challenge for you."/>
// <TextBox className="" text="Pick Exercise"/> */

import React from "react";

function TextBox({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default TextBox;
