import React from "react";
import BackgroundImage from "../../components/1_BackgroundImage/index"
import LogoImage from "../../components/2_Logo";

const Homepage = ({ onComplete }) => {
  return (
    <div className="homepage-div">     
      <LogoImage />
      <button className="my-button" onClick={onComplete}>TRY A 2 MINUTE CHALLENGE NOW</button>
    </div>
  );
};

export default Homepage;
