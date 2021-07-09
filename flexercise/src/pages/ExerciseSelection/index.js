import React, { useState } from "react";
import LogoImage from "../../components/2_Logo";
import Input from "../../components/9_InputBox";
import HeadingText from "../../components/6_HeadingText";
import ImageText from "../../components/10_ImageWriting";
import Squat from "../../images/Squat.jpg";
import Situp from "../../images/situp.jpg";
import Plank from "../../images/plank2.jpg";

const ExerciseSelection = ({ onComplete }) => {
  const exercises = [
    {
      type: "squat",
      source: Squat,
    },
    {
      type: "situp",
      source: Situp,
    },
    {
      type: "plank",
      source: Plank,
    },
  ];

  const [name, setName] = useState("")

  return (
    <div>
      <LogoImage />
      <Input text={name} onChange={(value) => setName(value)} />
      <HeadingText />
      {exercises.map((exercise) => (
        <ImageText
          onClick={() => onComplete(name, exercise.type)}
          image={exercise.source}
          name={exercise.type}
          key={exercise.type}
        />
      ))}
    </div>
  );
};

export default ExerciseSelection;
