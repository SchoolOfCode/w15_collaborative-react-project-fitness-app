import React from "react";
// import BackgroundImage from "../../components/1_BackgroundImage/index";
import LogoImage from "../../components/2_Logo";

// This page is the Home Page, the onComplete prop changes to the next page on press of the advance button

const Homepage = ({ onComplete }) => {
  return (
    <div className="page-div homepage-div">
      <LogoImage />
      <button className="my-button" onClick={onComplete}>
        TRY A 2 MINUTE <br /> CHALLENGE NOW
      </button>
    </div>
  );
};

export default Homepage;
