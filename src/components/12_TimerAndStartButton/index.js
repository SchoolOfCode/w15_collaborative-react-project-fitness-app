// This is a timer that can count down from the required time. The time is set on the timer page above
import { Redirect } from "react-router-dom";
import React, { useRef, useState } from "react";
import Countdown, {zeroPad} from 'react-countdown'


const Timer = ({ totalTime = 0 }) => {
  
  const [completed, setCompleted] = useState(false)
  const ref=useRef()
  const startCountdown = () =>{
    ref.current?.start()
  }
  return (
    <div className="timer-container">        
    <Countdown 
      date={Date.now()+ totalTime*1000}
      renderer={({minutes, seconds})=>(
        <h1 className="timer-box">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </h1>)}
      autoStart={false}
      ref={ref}
      onComplete={()=> setCompleted(true)}
      />
      <button className="my-button" id="start" onClick={startCountdown}>
        START
      </button>
      {completed ? <Redirect to="/amount"/>: null}
    </div>
  );
};

export default Timer;
