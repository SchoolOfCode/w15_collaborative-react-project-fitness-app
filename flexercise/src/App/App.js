import React, { useState } from "react";
import Homepage from "../pages/Homepage/index";
import Explanation from "../pages/Explanation/index";
import ExerciseSelection from "../pages/ExerciseSelection";
import TimerPage from "../pages/TimerPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const [user, setUser] = useState({});
  console.log(user);
  switch (currentPage) {
    case "homepage":
      return <Homepage onComplete={() => setCurrentPage("explanation")} />;
    case "explanation":
      return (
        <Explanation onComplete={() => setCurrentPage("exerciseselection")} />
      );
    case "exerciseselection":
      return (
        <ExerciseSelection
          onComplete={(name, exercise) => {
            setUser({
              ...user,
              name,
              exercise,
            });

            setCurrentPage("timer");
          }}
        />
      );
    case "timer":
      return (
        <TimerPage
          user={user}
          onComplete={() => setCurrentPage("inputpage")}
        ></TimerPage>
      );
  }
}

export default App;
