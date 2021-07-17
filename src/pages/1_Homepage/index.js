import React from "react";
import LogoImage from "../../components/2_Logo";
import { Link, Redirect } from "react-router-dom";
// This page is the Home Page, the onComplete prop changes to the next page on press of the advance button

const Homepage = ({ onComplete }) => {
  return (
    <div className="page-div homepage-div" data-testid="homepage-div" >
      <LogoImage />
      <Link to="/explanation">
        <button className="my-button" onClick={onComplete}>
          TRY A 2 MINUTE <br /> CHALLENGE NOW
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
