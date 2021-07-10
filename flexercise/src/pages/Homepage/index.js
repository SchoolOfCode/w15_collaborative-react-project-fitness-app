import React from "react";
import BackgroundImage from "../../components/1_BackgroundImage/index"
import LogoImage from "../../components/2_Logo";

// This page is the Home Page, the onComplete prop changes to the next page on press of a button 

const Homepage = ({ onComplete }) => {
  return (
    <div className="page-div">     
      <LogoImage />
      <button className="my-button" onClick={onComplete}>TRY A 2 MINUTE CHALLENGE NOW</button>
    </div>
  );
};

export default Homepage;
