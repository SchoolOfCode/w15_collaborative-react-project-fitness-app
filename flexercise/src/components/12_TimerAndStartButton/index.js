import React, { useEffect, useState } from "react";

// if start time doesnt get passed in it sets to 0 (default value) this will be useful for reuse of timer if it is counting up
// cant usesetInterval as every time state changes everything is rerendered

function Timer({ startTime = 0, onComplete }) {
  const [timer, setTimer] = useState(startTime);
  const [running, setRunning] = useState(false);

  // useEffect(() => {
  //     if (running) {
  //       const interval = setInterval(() => {
  //         setTimer(timer - 1);
  //       }, 1000);
  //       return () => clearInterval(interval);
  //     }
  //   }, [running]);
  // console.log(timer, running)

  useEffect(() => {
    if (running) {
      if (timer === 0) {
        onComplete();
        return;
      }

      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [running, timer]);

  return (
    <div className="timer">
      <h1>{`${Math.floor(timer / 60).toLocaleString("en-GB", {
        minimumIntegerDigits: 2,
      })}:${(timer % 60).toLocaleString("en-GB", {
        minimumIntegerDigits: 2,
      })}`}</h1>
      <button onClick={() => setRunning(true)}>START</button>
    </div>
  );
}

export default Timer;

/* Dividing 120 by 60 to get how many minutes are left and then modulus divide - divides by 60 and gives remainer */
// minimum Interdigits: minimum number of digits to be 2
