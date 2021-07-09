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
      disabled: true
    },
    {
      type: "Squats",
      source: Squat,
      disabled: true
    },
  ];

  const [name, setName] = useState("");
  const [seeds, setSeeds] = useState("micah");

  return (
    <div className="exercise-selection">
      <SmallLogo />

      <div>
        <img
          className="results-avatar"
          src={`https://avatars.dicebear.com/api/${seeds}/${name}.svg`}
          alt=""
        />
        <Input
          placeholder="Enter Name"
          text={name}
          onChange={(value) => setName(value)}
        />
        <select onChange={(e) => setSeeds(e.target.value)} id="seeds" name="seed">
          <optgroup label="Select">
            <option value="micah">Micah</option>
            <option value="human">Human</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="bottts">Bots</option>
            <option value="avataaars">Avatars</option>
            <option value="identicon">Identicon</option>
            <option value="jdenticon">Jdenticon</option>
            <option value="gridy">Gridy</option>
            <option value="initials">Initials</option>
          </optgroup>
        </select>
      </div>

      <HeadingText />
      <h1>Select Exercise</h1>
      <div className="exercise-images">
        {exercises.map((exercise) => (
          <ImageText
            onClick={() => onComplete(name, seeds, exercise)}
            image={exercise.source}
            name={exercise.type}
            key={exercise.type}
            disabled={exercise.disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseSelection;
