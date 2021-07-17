import React, { useState, useReducer, Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { userReducer } from "./userReducer";

import Homepage from "../pages/1_Homepage/index";
import Explanation from "../pages/2_Explanation/index";
import ExerciseSelection from "../pages/3_ExerciseSelection";
import TimerPage from "../pages/4_TimerPage";
import InputPage from "../pages/5_InputAmount";
import MotivationPage from "../pages/6_Motivation";
import LeaderboardPage from "../pages/7_LeaderboardPage";
import Error from "../pages/8_Error"

function App() {

  const [userState, dispatch] = useReducer(userReducer, {
    name:"",
    avatarSeed:"micah",
    score: 0,
  })

  return (
    <main>
      <Switch>
        <Route path="/" exact ><Homepage /></Route>
        <Route path="/explanation"><Explanation /></Route>
        <Route path="/exercise-choice"><ExerciseSelection dispatch={dispatch} /></Route>
        <Route path="/timer" component={TimerPage}  />
        <Route path="/profile" component={InputPage}  />
        <Route path="/motivation" component={MotivationPage}  />
        <Route path="/leaderboard" component={LeaderboardPage}  />
        <Route component={Error} />
      </Switch>
    </main>
  )
  //   case "exerciseselection":
  //     // This page stores the name and exercise selection into the user object
  //     if (user.name !== undefined) setUser({});
  //     return (
  //       <ExerciseSelection
  //         onComplete={(name, seeds, exercise) => {
  //           setUser({
  //             ...user,
  //             name,
  //             exercise,
  //             seeds,
  //           });
  //           setCurrentPage("timer");
  //         }}
  //       />
  //     );
  //   // This page will change to the next page once the timer start button is pressed and the time elasps
  //   case "timer":
  //     return (
  //       <TimerPage
  //         user={user}
  //         onComplete={() => setCurrentPage("inputpage")}
  //       ></TimerPage>
  //     );
  //   // This page adds the user input of amount of reps they completed into the user object and changes to next page on press of the button.
  //   case "inputpage":
  //     return (
  //       <InputPage
  //         name={user.name}
  //         seeds={user.seeds}
  //         onComplete={async (amount) => {
  //           setUser({
  //             ...user,
  //             amount,
  //           });

  //           setCurrentPage("motivation");
  //         }}
  //       />
  //     );
  //   // This page shows the motivation page to the user and changes to leaderboard on click on press of the button.
  //   case "motivation":
  //     return (
  //       <MotivationPage onComplete={() => setCurrentPage("leaderboard")} />
  //     );
  //   // This page will show the user the leaderboard and take the user back to the Exercise Selection page in case they want to use it again.
  //   case "leaderboard":
  //     return (
  //       <LeaderboardPage
  //         onComplete={() => setCurrentPage("exerciseselection")}
  //       />
  //     );
  // }
}

export default App;
