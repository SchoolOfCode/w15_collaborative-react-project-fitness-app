import React, { useState } from "react";
import LogoImage from "../../components/2_Logo";
import SmallLogo from "../../components/0_SmallLogo";
import TextBox from "../../components/4_TextBox";
import Input from "../../components/9_InputBox";
import HeadingText from "../../components/6_HeadingText";
import ImageText from "../../components/10_ImageWriting";
import Squat from "../../images/Squat.jpg";
import Situp from "../../images/situp.jpg";
import Plank from "../../images/plank2.jpg";

const ExerciseSelection = ({ onComplete }) => {
  const exercises = [
   
    {
      type: "Sit Ups",
      source: Situp,
    },
    {
      type: "Plank",
      source: Plank,
    },
    {
      type: "Squats",
      source: Squat,
    },
  ];

  const [name, setName] = useState("")

  return (
    <div className="exercise-selection">
      <SmallLogo />
      <Input placeholder="Enter Name" text={name} onChange={(value) => setName(value)} />
      <HeadingText />
      <h1>Select Exercise</h1>
      <div className="exercise-images">
      {exercises.map((exercise) => (
        <ImageText
          onClick={() => onComplete(name, exercise.type)}
          image={exercise.source}
          name={exercise.type}
          key={exercise.type}
          
        />
      ))}
      </div>
    </div>
  );
};

export default ExerciseSelection;
