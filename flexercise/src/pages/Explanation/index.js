import React from "react";
import TextBox from "../../components/4_TextBox";

const Explanation = ({onComplete}) => {
    return ( 
        <div className="explanation-page">
            <div className="explanation-background">
                <h1>Exercise Challenge Overview</h1>  
                <TextBox className="explanation-text" text="You are about to complete a short base test which will be used to create a daily workout challenge for you."/>
                <h1>Instructions</h1> 
                <TextBox className="explanation-text" text="Enter Username"/>
                <TextBox className="explanation-text" text="Pick Exercise"/>
                <TextBox className="explanation-text" text="You will be asked to start a 2 minute timer"/>
                <TextBox className="explanation-text" text="Keep count of the amount of reps you completed in the time"/>
                <TextBox className="explanation-text" text="Enter the amount on the next screen"/>
                <TextBox className="explanation-text" text="Your score will be entered on the daily leaderboard so you can challenge other people "/>
                </div>
        <button className="my-button" onClick={onComplete}>Continue</button>
        </div>
     );
}
 
export default Explanation;