import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import {Router} from 'react-router-dom';
import { createMemoryHistory } from "history";

import App from "./App"

afterEach(cleanup)

test("The APP works correctly with mocked inputs", () => {
    const history = createMemoryHistory()
    const testUser = "Jessie Jesterson"
    const testAvatar = "bottts"
    const testExercise = "Squats"

    render(  
        <Router 
        history={history}>
            <App />
        </Router>)
    //HOMEPAGE--------------------------------------------------
    //check the homepage has rendered and click the start button
    expect(screen.getByTestId("homepage-div")).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button',{class: /my-button/i}))
    // check that the content changed to the explanation page
    expect(screen.getByText(/You are about to complete/i)).toBeInTheDocument()

    //EXPLANATION--------------------------------------------------
    //Check navigation from explanation to exercise choice
    fireEvent.click(screen.getByRole('button',))
    // check that the content changed to the choice page
    expect(screen.getByText(/Select Exercise/i)).toBeInTheDocument()

    //EXERCISE CHOICE----------------------------------------------
    //1. enter username
    //2. select avatar
    //3. select exercise
    //4. test navigation to the timer page

    fireEvent.change(screen.getByPlaceholderText('Enter Name'),{target:{value:testUser}})
    expect(screen.getByTestId("name-input")).toHaveValue(testUser)
    // expect(screen.getByRole('option', { selected: true })).toHaveValue("micah")
    expect(screen.getByRole('option', {name:"Micah"}).selected).toBe(true)
    // userEvent.selectOptions(screen.getByTestId(testAvatar), {target:{value:testAvatar}});
    // console.log(screen.getAllByRole('option', { selected: true }))
    // userEvent.selectOptions(screen.getByRole('listbox'),[testAvatar])
    // expect(screen.getByRole('option', {name:"Bots"}).selected).toBe(true)
})


