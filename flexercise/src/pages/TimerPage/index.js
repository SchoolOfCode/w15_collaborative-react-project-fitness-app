import React from "react";
import Timer from "../../components/12_TimerAndStartButton";
import Logo from "../../components/2_Logo";
import YoutubeEmbed from "../../components/11_Video";

const TimerPage = ({ onComplete, user }) => {
  return (
    <div className="timer-page">
      <Logo />
      <YoutubeEmbed embedId="9OfycnUL0h8?ecver=1&amp" />
      {/* change to 120 past testing */}
      <Timer startTime={12} onComplete={onComplete} />
    </div>
  );
};

export default TimerPage;
