import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import {Router} from 'react-router-dom';
import { createMemoryHistory } from "history";

import App from "./App"

afterEach(cleanup)

test("the button link navigates to the explanations page", () => {
    const history = createMemoryHistory()
    render(  
      <Router 
        history={history}>
          <App />
      </Router>)
  
    expect(screen.getByTestId("homepage-div")).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button',{class: /my-button/i}))
  
    // check that the content changed to the new page
    expect(screen.getByText(/You are about to complete/i)).toBeInTheDocument()
  })
