import React from "react";
import Leaderboard from "../../components/14_Leaderboard";
import HeadingText from "../../components/6_HeadingText";
import SmallLogo from "../../components/0_SmallLogo";

// Displays the leaderboard page on the screen
const LeaderboardPage = ({ onComplete }) => {
  return (
    <div className="page-div leaderboard-div">
      <SmallLogo />
      <HeadingText heading="Leaderboard" />
      <Leaderboard />
      {/* On click of button go back to exercise selection page */}
      <button className="my-button" onClick={onComplete}>
        Try Again
      </button>
    </div>
  );
};

export default LeaderboardPage;
