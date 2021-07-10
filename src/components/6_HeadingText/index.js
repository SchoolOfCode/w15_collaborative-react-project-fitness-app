// A component to add H1 heading text

// Examples of what to write in the return function:
//** Explanation Page **
// <HeadingText heading="Exercise Challenge Overview"/>
// <HeadingText heading="Instructions"/>

// This component is actually unnecessary as its easier to write <H1> tags

import React from "react";

const HeadingText = ({ heading }) => {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};

export default HeadingText;
