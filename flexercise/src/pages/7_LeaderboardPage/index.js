import React from "react";
import Leaderboard from "../../components/14_Leaderboard";
import HeadingText from "../../components/6_HeadingText";

// Displays the leaderboard page on the screen
const LeaderboardPage = ({ onComplete }) => {
  return (
    <div className="page-div">
      <HeadingText heading="Leaderboard" />
      <Leaderboard />
      {/* On click of button go back to exercise selection page */}
      <button className="my-button" onClick={onComplete}>
        Finished
      </button>
    </div>
  );
};

export default LeaderboardPage;
