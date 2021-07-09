// A component to add H1 heading text
// To import to upper component add to top of screen - import HeadingText from "../6_HeadingText";
// Examples of what to write in the return function:
//** Explanation Page **
// <HeadingText heading="Exercise Challenge Overview"/>
// <HeadingText heading="Instructions"/>
// ** Exercise Selection Page **
//<HeadingText heading="Select Exercise"/>

import React from "react";

function HeadingText({ heading }) {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
}

export default HeadingText;
