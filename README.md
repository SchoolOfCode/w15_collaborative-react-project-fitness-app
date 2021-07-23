
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

## Documentation

Todo....

  
## Tech Stack

**Client:** React

**Server:** Node

  
## Authors

- [@Becki Floyd](https://github.com/nass84)
- [@Helena Archer](https://github.com/Archianne)
- [@Shola Quadri](https://github.com/codewurld)

  
