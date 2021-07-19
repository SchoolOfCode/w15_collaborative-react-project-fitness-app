import React, { useReducer} from "react";
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
  
  const initialUserState = {
    name:"",
    exerciseType:"",
    exerciseSource: "",
    seeds: "micah",
    amount: 0,
  }
  const [userState,dispatch] = useReducer(userReducer,initialUserState)
  
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/explanation">
          <Explanation />
        </Route>
        <Route path="/exercise-choice">
          <ExerciseSelection user={userState} dispatch={dispatch} />
        </Route>
        <Route path="/timer">
          <TimerPage user={userState} />
        </Route>
        <Route path="/profile">
          <InputPage user={userState} dispatch={dispatch} />
        </Route>
        <Route path="/motivation">
          <MotivationPage />
        </Route>
        <Route path="/leaderboard">
          <LeaderboardPage user={userState} dispatch={dispatch}/>
        </Route>
        <Route component={Error} />
      </Switch>
    </main>
  )
}

export default App;
