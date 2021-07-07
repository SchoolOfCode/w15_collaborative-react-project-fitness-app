import React from "react";
import Timer from "../../components/12_TimerAndStartButton";
import Logo from "../../components/2_Logo";
import Video from "../../components/11_Video";

const TimerPage = ({ onComplete, user }) => {
  return (
    <div className="timer-page">
      <Logo />
      <Video />
      {/* change to 120 past testing */}
      <Timer startTime={12} onComplete={onComplete} />
    </div>
  );
};

export default TimerPage;
