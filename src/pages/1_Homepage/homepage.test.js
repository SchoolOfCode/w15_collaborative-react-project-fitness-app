import React from "react";
import { render, cleanup } from "@testing-library/react";
import {Router} from 'react-router-dom';
import Homepage from "./index"
import { createMemoryHistory } from "history";

afterEach(cleanup)

test("Test the button to navigate to the next page exists", () => {
  const history = createMemoryHistory()
  const {getByRole} = render(  <Router history={history}><Homepage /></Router>)
  const button = getByRole('button',{class: /my-button/i})
  expect(button).toBeInTheDocument()
})

