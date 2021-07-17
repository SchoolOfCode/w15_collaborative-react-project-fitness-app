import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmallLogo from "../../components/0_SmallLogo";
import Input from "../../components/9_InputBox";
import HeadingText from "../../components/6_HeadingText";
import ImageText from "../../components/10_ImageWriting";
import Squat from "../../images/Squat.jpg";
import Situp from "../../images/situp.jpg";
import Plank from "../../images/plank2.jpg";

// This page allows the user to enter their name and select what exercise they will do
const ExerciseSelection = ({ onComplete }) => {
  // This is an object that allows us to add more exercises for the user to select
  const exercises = [
    {
      type: "Squats",
      source: Squat,
    },
    {
      type: "Plank",
      source: Plank,
      disabled: true,
    },
    {
      type: "Sit Ups",
      source: Situp,
      disabled: true,
    },
  ];

  // This stores the user name with the initial value blank
  const [name, setName] = useState("");
  // This sets the avatar picture to be an initial value of the picture micah
  const [seeds, setSeeds] = useState("micah");

  return (
    <div className="page-div selection-div">
      <SmallLogo />

      <div className="nameinput-div">
        {/* This sets the avatar to the inital value */}
        <img
          className="choose-avatar"
          src={`https://avatars.dicebear.com/api/${seeds}/${name}.svg`}
          alt=""
        />
        {/* This allows the user to enter their name, on change it will set the value of the name in the user object  */}
        <Input
          placeholder="Enter Name"
          text={name}
          onChange={(value) => setName(value)}
          type="text"
        />
        {/* This allows the user to change their Avatar and update the value in the user object */}

        <select
          className="select-seed"
          onChange={(e) => setSeeds(e.target.value)}
          id="seeds"
          name="seed"
        >
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

      {/* This maps the images from the exercise object above onto the page, allowing several options. 
It also allows the user to select which exercise they will do and add this to the user object.
A value of disabled was added as on the first iteration we will only be allowing the user to select squats.
onComplete changes to the next page when a selection is made.  */}

      <div className="exercise-images">
        {exercises.map((exercise) => (
          <Link to="/timer">
            <ImageText
              // onClick={() => onComplete(name, seeds, exercise)}
              image={exercise.source}
              name={exercise.type}
              key={exercise.type}
              disabled={exercise.disabled}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSelection;
