import React, { useState } from "react";
import SmallLogo from "../../components/0_SmallLogo";
import TextBox from "../../components/4_TextBox";
import Input from "../../components/9_InputBox";

const InputPage = ({ onComplete, name, seeds }) => {
  const [amount, setAmount] = useState("");

  const PRIVATE = "3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A";
  
  async function addPlayer() {
    const addURL = `https://www.dreamlo.com/lb/${PRIVATE}/add/${name || 'Anonymous'}/${amount}/120/${seeds}`;
    await fetch(addURL);

    onComplete(amount)
  }

  return (
    <div className="page-div">
      <SmallLogo />
      <TextBox className="rep-amount" text="How many reps did you do?" />
      <Input
        placeholder="Enter amount here"
        text={amount}
        onChange={(value) => setAmount(value)}
      />
      <button className="my-button" id="submit-button" onClick={addPlayer}>
        Submit
      </button>
    </div>
  );
};

export default InputPage;
