import React from "react";

import Timer from "../../components/12_TimerAndStartButton";
import SmallLogo from "../../components/0_SmallLogo";
import YoutubeEmbed from "../../components/11_Video";

// This page shows the video of how to do a Squat and displays the timer
// It takes the user object in which will change what video/timer is displayed in future iterations.
const TimerPage = ({ time=120 }) => {
  return (
    <div className="page-div">
      <SmallLogo />
      <YoutubeEmbed embedId="9OfycnUL0h8?ecver=1&amp"/>

      {/* Once Timer has counted down, the page will change to the input page.  */}
      <Timer totalTime={time} />
    </div>
  );
};

export default TimerPage;
