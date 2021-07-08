import React from "react";
import TextBox from "../../components/4_TextBox";
import SmallLogo from "../../components/0_SmallLogo";
import Sunrise from "../../images/sunrise.png";

const MotivationPage = ({ onComplete }) => {
  return (
    <div className="motivation-page">
      <SmallLogo />
      <img src={Sunrise} alt="sunrise" className="motivation-picture"></img>
      <TextBox
        className="motivation-text"
        text="The pain you feel today is the strength you feel tomorrow"
      />
      <button className="my-button" onClick={onComplete}>
        Continue
      </button>
    </div>
  );
};

export default MotivationPage;
