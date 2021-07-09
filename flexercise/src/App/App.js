/* eslint-disable default-case */
import React, { useState } from "react";
import Homepage from "../pages/Homepage/index";
import Explanation from "../pages/Explanation/index";
import ExerciseSelection from "../pages/ExerciseSelection";
import TimerPage from "../pages/TimerPage";
import InputPage from "../pages/InputAmount";
import MotivationPage from "../pages/Motivation";
import LeaderboardPage from "../pages/LeaderboardPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const [user, setUser] = useState({});

  switch (currentPage) {
    case "homepage":
      return <Homepage onComplete={() => setCurrentPage("explanation")} />;

    case "explanation":
      return (
        <Explanation onComplete={() => setCurrentPage("exerciseselection")} />
      );

    case "exerciseselection":
      if (user.name !== undefined) setUser({});

      return (
        <ExerciseSelection
          onComplete={(name, seeds, exercise) => {
            setUser({
              ...user,
              name,
              exercise,
              seeds,
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

    case "inputpage":
      return (
        <InputPage
          name={user.name}
          seeds={user.seeds}
          onComplete={async (amount) => {
            setUser({
              ...user,
              amount,
            });

            setCurrentPage("motivation");
          }}
        />
      );

    case "motivation":
      return (
        <MotivationPage onComplete={() => setCurrentPage("leaderboard")} />
      );

    case "leaderboard":
      return (
        <LeaderboardPage
          onComplete={() => setCurrentPage("exerciseselection")}
        />
      );
  }
}

export default App;
