// This is a timer that can count down from the required time. The time is set on the timer page above

import React, { useEffect, useState } from "react";

// if start time doesnt get passed in it sets to 0 (default value) this will be useful for reuse of timer if it is counting up such as for the plank option
// cant usesetInterval as every time state changes everything is rerendered

function Timer({ startTime = 0, onComplete }) {
  const [timer, setTimer] = useState(startTime);
  const [running, setRunning] = useState(false);

// Use Effects fires this function after every render unless it has dependencies, in this case it only fires when timer is running, the timer starts or time gets to 0
  useEffect(() => {
    if (running) {
      if (timer === 0) {
        onComplete();
        return;
      }
// This removes 1 from the timer amount every second 
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      
// This is the clean up function to clear the interval fron above function
      return () => clearInterval(interval);
    }
// Dependencies set so function only runs when timer is running, the timer starts or time gets to 0
  }, [running, timer, onComplete]);

  return (
    <div className="timer-container">

// This rounds the number down, divides the timer amount by 60 and changes it to have at least 2 digits to replicate the 2 timer design
      <h1 className="timer-box">{`${Math.floor(timer / 60).toLocaleString(
        "en-GB",
        {
          minimumIntegerDigits: 2,
        }
      )}:${(timer % 60).toLocaleString("en-GB", {
        minimumIntegerDigits: 2,
      })}`}</h1>

// This starts the timer and changes the state to true
      <button className="my-button" id="start" onClick={() => setRunning(true)}>
        START
      </button>
    </div>
  );
}

export default Timer;

