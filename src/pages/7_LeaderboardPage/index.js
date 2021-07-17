import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/exercise-choice">
      <button className="my-button">
        Try Again
      </button>
      </Link>
    </div>
  );
};

export default LeaderboardPage;
