import React from "react";
import Timer from "../../components/12_TimerAndStartButton";
import SmallLogo from "../../components/0_SmallLogo";
import YoutubeEmbed from "../../components/11_Video";

const TimerPage = ({ onComplete, user }) => {
  return (
    <div className="page-div">
      <SmallLogo />
      <YoutubeEmbed embedId="9OfycnUL0h8?ecver=1&amp" />
      {/* change to 120 past testing */}
      <Timer startTime={1} onComplete={onComplete} />
    </div>
  );
};

export default TimerPage;
