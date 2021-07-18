import React from "react";
import { Link} from "react-router-dom";

import LogoImage from "../../components/2_Logo";

// This page is the Home Page

const Homepage = () => {
  return (
    <div className="page-div homepage-div" data-testid="homepage-div" >
      <LogoImage />
      <Link to="/explanation">
        <button className="my-button">
          TRY A 2 MINUTE <br /> CHALLENGE NOW
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
