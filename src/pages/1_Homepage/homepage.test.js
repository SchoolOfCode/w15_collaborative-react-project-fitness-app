import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Homepage from "./index"
import {Router} from "react-router-dom"
import { createMemoryHistory } from 'history'
import App from "../../App/App"

afterEach(cleanup);

test("Renders homepage button and content on loading", () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Homepage />
    </Router>
  )
  expect(screen.getByTestId("homepage-div")).toBeInTheDocument();
  expect(screen.getByRole('button', {class:/my-button/i})).toBeInTheDocument();
});

test("Clicking the start button takes you to the explanation page", () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  const button = screen.getByRole('button', {class:/my-button/i})
  userEvent.click(button, { button: 0 })
  expect(screen.getByText(/You are about to complete a short/i)).toBeInTheDocument()
});
