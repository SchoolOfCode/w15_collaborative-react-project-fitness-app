//import page components to the app
import React, { useState, useReducer } from "react";
import Homepage from "../pages/1_Homepage/index";
import Explanation from "../pages/2_Explanation/index";
import ExerciseSelection from "../pages/3_ExerciseSelection";
import TimerPage from "../pages/4_TimerPage";
import InputPage from "../pages/5_InputAmount";
import MotivationPage from "../pages/6_Motivation";
import LeaderboardPage from "../pages/7_LeaderboardPage";

function reducer(userState,action){
  if (action.type === "SET_NAME"){
    return {
      ...userState,
      name: action.payload
    }
  }
  if (action.type === "SET_SEED"){
    return {
      ...userState,
      seeds: action.payload
    }
  }
  if (action.type === "SET_EXERCISE"){
    return {
      ...userState,
      exerciseType: action.payload.exerciseType,
      exerciseSource: action.payload.exerciseSource
    }
  }
  if(action.type === "SET_AMOUNT"){
    return {
      ...userState,
      amount: action.payload
    }
  }
  return userState
}

const initialUserState = {
  name:"",
  exerciseType:"",
  exerciseSource: "",
  seeds: "micah",
  amount: 0
}

function App() {
  // The first page it shows is the homepage
  const [currentPage, setCurrentPage] = useState("homepage");
  // Creates an inital value of an empty object to store our user information in as you go through the app
  const [user, setUser] = useState({});
  const [userState,dispatch] = useReducer(reducer,initialUserState)
  // This controls what prrage you are on. Once the button is clicked it will change to the next page.
  switch (currentPage) {
    case "homepage":
      return <Homepage onComplete={() => setCurrentPage("explanation")} />;
    case "explanation":
      return (
        <Explanation onComplete={() => setCurrentPage("exerciseselection")} />
      );
    case "exerciseselection":
      // This page stores the name and exercise selection into the user object
      if (user.name !== undefined) setUser({});
      return (
        <ExerciseSelection
          user={userState}
          dispatch={dispatch}
          onComplete={ () => {
            setCurrentPage("timer");
          }}
        />
      );
    // This page will change to the next page once the timer start button is pressed and the time elasps
    case "timer":
      return (
        <TimerPage
          user={user}
          onComplete={() => setCurrentPage("inputpage")}
        ></TimerPage>
      );
    // This page adds the user input of amount of reps they completed into the user object and changes to next page on press of the button.
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
    // This page shows the motivation page to the user and changes to leaderboard on click on press of the button.
    case "motivation":
      return (
        <MotivationPage onComplete={() => setCurrentPage("leaderboard")} />
      );
    // This page will show the user the leaderboard and take the user back to the Exercise Selection page in case they want to use it again.
    case "leaderboard":
      return (
        <LeaderboardPage
          onComplete={() => setCurrentPage("exerciseselection")}
        />
      );
      default:
        return;
  }
}

export default App;
