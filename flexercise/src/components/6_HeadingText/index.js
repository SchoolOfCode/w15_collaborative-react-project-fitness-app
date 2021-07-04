import React from "react";


function HeadingText({heading}) {
    return (
        <div>
            <h1>{heading}</h1>
        </div>
    )
}

export default HeadingText;

// import HeadingText from "../6_HeadingText";
// ** Explanation Page **
// <HeadingText heading="Exercise Challenge Overview"/>
// <HeadingText heading="Instructions"/>
// ** Exercise Selection Page **
//<HeadingText heading="Select Exercise"/>