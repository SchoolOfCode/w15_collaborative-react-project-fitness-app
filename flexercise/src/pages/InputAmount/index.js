import React, { useState } from "react";
import SmallLogo from "../../components/0_SmallLogo";
import TextBox from "../../components/4_TextBox";
import Input from "../../components/9_InputBox";
import HeadingText from "../../components/6_HeadingText";

const InputPage = ({ onComplete }) => {

  const [amount, setAmount] = useState("")

  return (
    <div className="input-amount">
      <SmallLogo />
      <TextBox className="rep-amount" text="How many reps did you do?"/>
      <Input placeholder="Enter amount here" text={amount} onChange={(value) => setAmount(value)} />
      <HeadingText />
      <button className="my-button" onClick={onComplete}>Submit</button>
    </div>
    
  )
}

export default InputPage;
