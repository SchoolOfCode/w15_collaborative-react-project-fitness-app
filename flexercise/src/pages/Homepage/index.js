import React from "react";
import Leaderboard from "../../components/14_Leaderboard";
import BackgroundImage from "../../components/1_BackgroundImage/index"
import LogoImage from "../../components/2_Logo";

const Homepage = ({ onComplete }) => {
  return (
    <div>

      <h1>Home Page</h1>
      <button onClick={onComplete}>Advance</button>
      <Leaderboard />

      
      <LogoImage />
      <button className="my-button" onClick={onComplete}>TRY A 2 MINUTE CHALLENGE NOW</button>

    </div>
  );
};

export default Homepage;
