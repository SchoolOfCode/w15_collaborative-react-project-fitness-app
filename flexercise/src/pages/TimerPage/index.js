import React from "react";
import Timer from "../../components/12_TimerAndStartButton";
import SmallLogo from "../../components/0_SmallLogo";
import YoutubeEmbed from "../../components/11_Video";

// This page shows the video of how to do a Squat and Displays the timer
const TimerPage = ({ onComplete, user }) => {
  return (
    <div className="page-div">
      <SmallLogo />
      <YoutubeEmbed embedId="9OfycnUL0h8?ecver=1&amp" />
   
// Once Timer has counted down, the page will change to the input page. 
       {/* change to 120 past testing */}
      <Timer startTime={10} onComplete={onComplete} />
    </div>
  );
};

export default TimerPage;
