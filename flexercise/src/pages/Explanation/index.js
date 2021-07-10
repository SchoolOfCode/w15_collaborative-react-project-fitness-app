import React from "react";
import TextBox from "../../components/4_TextBox";
import Line from "../../components/7_Line";

// This page explains to the user what they will be doing. 
const Explanation = ({ onComplete }) => {
  return (
    <div className="page-div">
      <div className="explanation-background">
// Aria- Hidden removes decorative items from the accessibility tree. This can improve the experience for assistive technology users.
        <h1><i class="fa fa-list" aria-hidden="true"></i> Exercise Challenge Overview</h1>
// This inserts the text box component, the text you set can change the wording in the box
        <TextBox
          className="explanation-text"
          text="You are about to complete a short base test which will be used to create a daily workout challenge for you."
        />
// Decorative Line component
        <Line />
        <h1><i class="fa fa-list" aria-hidden="true"></i> Instructions</h1>
// Text Boxes will include icon components in the next version of the app which is why they have been split up
        <TextBox className="explanation-text" text="Enter Username" />
        <TextBox className="explanation-text" text="Pick Exercise" />
        <TextBox
          className="explanation-text"
          text="You will be asked to start a 2 minute timer"
        />
        <TextBox
          className="explanation-text"
          text="Keep count of the amount of reps you completed in the time"
        />
        <TextBox
          className="explanation-text"
          text="Enter the amount on the next screen"
        />
        <TextBox
          className="explanation-text"
          text="Your score will be entered on the daily leaderboard so you can challenge other people "
        />
      </div>
// This button will take the user to the next page
      <button className="my-button" onClick={onComplete}>
        Continue
      </button>
    </div>
  );
};

export default Explanation;
