import React from "react";
import Leaderboard from "../../components/14_Leaderboard";
import Avatar from "../../components/14-2_Avatar";
// import {Leaderboard} from "../../components/14_Leaderboard"

const Homepage = ({ onComplete }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={onComplete}>Advance</button>
      <Avatar />
      <Leaderboard />
    </div>
  );
};

export default Homepage;
