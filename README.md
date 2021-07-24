
![Logo](https://github.com/SchoolOfCode/w15_collaborative-react-project-fitness-app/blob/gc_testing-and-documentation/public/github_logo_v1.png?raw=true)
# Flexercise

Flexercise is an application designed to encourage people to exercise. It provides a simple interface to track repetitions for the selected exercise, and provides a leaderboard for motivation.

## Demo

[Click here to try the app!](https://schoolofcode.github.io/w15_collaborative-react-project-fitness-app/)

  
## Installation

To get started, once you have cloned down the repository, run the following commands to start a local instance (usually https://localhost:3000):

```bash
  npm install
  npm start
```
### Dependencies

**App:**  react, react-countdown, react-dom, react-router-dom, react-scripts  
**Testing:** react-testing-library, cypress, msw
## Running Tests

To run the unit tests (utilising Jest and react-testing-library), enter the following command:
```bash
    npm test
```

To run the end-to-end test, enter the following:
```bash
    npm run cypress
```
The end-to-end tests currently rely on the base URL being http://localhost:3000
If you have to run the tests on a different port, then edit the baseURL variable in:
```
/cypress/integration/App-test.spec.js
```
## Usage  
<img src="https://github.com/SchoolOfCode/w15_collaborative-react-project-fitness-app/blob/gc_testing-and-documentation/src/images/amount.png?raw=true" height=350/>  <img src="https://github.com/SchoolOfCode/w15_collaborative-react-project-fitness-app/blob/gc_testing-and-documentation/src/images/explanation.png?raw=true" height=350/>  
   
   
After entering the app, click the button to see the explanation page.  
  
  
<img src="https://github.com/SchoolOfCode/w15_collaborative-react-project-fitness-app/blob/gc_testing-and-documentation/src/images/choice.png?raw=true" height=500/>  
  
    
Once you have read the instructions and are motivated to proceed, click the button to enter a name and choose an avatar style (this is completely optional, you will be Anonymous without entering a name). Then choose from the range of exercises presented. Once you have clicked on your chosen exercise, and are ready to go, start the timer and count your repetitions. A video to help if you aren;t sure of your technique is also available.  
  
  
  
<img src="https://github.com/SchoolOfCode/w15_collaborative-react-project-fitness-app/blob/gc_testing-and-documentation/src/images/timer.png?raw=true" height=350/>  
  
  
  
Once the the countdown has ended, it will take you to the next page where you can enter the number of repetitions you completed.
It will automatically update your score on the leaderboard, if you have enetered your name exactly the same as your previous time, if you have used the app before.  

  
  
<img src="https://github.com/SchoolOfCode/w15_collaborative-react-project-fitness-app/blob/gc_testing-and-documentation/src/images/leaderboard.png?raw=true" height=350/>   
  
  
After a brief motivational message, you can see the scrollable leaderboard, and choose to try again if you wish.

## Documentation

### Examples - Interactive Components 

**Input**

```javascript
import Input from "../../components/9_InputBox";

function App() {
  return <Input user={**state**} dispatch={**dispatch**} action={"SOME_ACTION"}/>
}
```
Input will generate an input form, with an onBlur event, so that when focus is lost, it will dispatch the value to a reducer function.
The state and dispatch function should be passed down as a prop.
  
  The action prop will change the behaviour of the input by changing the payload sent to the reducer e.g. changing the name or changing the amount of the user state.

  
**Timer**

```javascript
import Timer from "../../components/12_TimerAndStartButton";

function App() {
  return <Timer totalTime={**target time in seconds**} />
}
```
The timer is built utilising a library react-countdown.
It utilises Date objects to accurately get the current time, set a target time, and countdown towards that.
This prevents blocking processes from interfering with the time if setInterval were used in isolation.
  
The default time is zero, if no time prop is supplied.  
Once the timer reaches zero, it will trigger navigation to the next page.



  
## Tech Stack

**Client:** React

**Server:** Node

  
## Authors

- [@Becki Floyd](https://github.com/nass84)
- [@Helena Archer](https://github.com/Archianne)
- [@Shola Quadri](https://github.com/codewurld)

  
