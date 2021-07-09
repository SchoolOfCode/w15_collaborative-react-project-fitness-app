// This adds an input text box 
// To import write -  import Input from "../9_InputBox";
//To add to return function <Input />
// Will need to add functions, state and props to connect it. 

import React from "react";

function Input({ text, onChange, placeholder }) {
  
  return <input type="text" placeholder={placeholder} value={text} onChange={(e)=>onChange(e.target.value)} />;


}

export default Input;


