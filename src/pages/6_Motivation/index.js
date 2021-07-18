import React from "react";
import TextBox from "../../components/4_TextBox";
import SmallLogo from "../../components/0_SmallLogo";
import Sunrise from "../../images/sunrise.png";

//This page provides motivational images and text to the user to congratulate them on completing the exercise
//In next iteration, the image and text will change depending on the amount of reps the user does.
const MotivationPage = ({ onComplete }) => {
  return (
    <div className="page-div motivation-div">
      <SmallLogo />

      {/* Motivational Image  */}
      <img src={Sunrise} alt="sunrise" className="motivation-picture"></img>
      {/* Motivational Text  */}
      <TextBox
        className="motivation-text"
        text='"The pain you feel today is the strength you feel tomorrow"'
      />

      {/* The button takes you to the next page */}
      <button className="my-button" onClick={onComplete}>
        Continue
      </button>
    </div>
  );
};

export default MotivationPage;
