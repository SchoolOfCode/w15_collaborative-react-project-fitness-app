import React from "react";
import { Link } from "react-router-dom";

import SmallLogo from "../../components/0_SmallLogo";
import TextBox from "../../components/4_TextBox";
import Input from "../../components/9_InputBox";

// This page allows the user to enter the amount of Reps they did so this can be added to the leaderboard
//This takes in an oncomplete the name of the user and the avatar
const InputPage = ({user, dispatch}) => {

  // This is the API key for the leaderboard
  const PRIVATE = "3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A";
  // This fetches the leaderboard information from the API and adds the information from the User Object into the leaderboard
  async function addPlayer() {
    const addURL = `https://www.dreamlo.com/lb/${PRIVATE}/add/${
      user.name || "Anonymous"}/${
      user.amount || "0"}/120/${
      user.seeds || "micah"}`;
    await fetch(addURL);
  }
  return (
    <div className="page-div reps-div">
      <SmallLogo />
      <TextBox className="rep-amount" text={'How many reps did you do?'} />
      {/* On change it sets the amount of reps into user object */}
      <Input user={user} dispatch={dispatch} action={"SET_AMOUNT"}/>
      {/* On click it runs the add Player function which adds the information to the 
leaderboard and changes to the leaderboard page.  */}
    <Link to="motivation">
      <button 
        className="my-button" 
        id="submit-button"
        onClick={addPlayer}
        >
        Submit
      </button>
    </Link>
    </div>
 
  );
};

export default InputPage;
