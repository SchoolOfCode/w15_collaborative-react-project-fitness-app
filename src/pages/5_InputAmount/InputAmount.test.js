import React from "react";
import { render, screen, cleanup, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import InputPage from "./index"
import {MemoryRouter} from "react-router-dom"

afterEach(cleanup);

const testProps={
    user:{
    name:"",
    seeds: "micah",
    amount: "512",
    },
    dispatch:jest.fn(),
}
test("Clicking the input form will accept input", () => {
    render(
    <MemoryRouter >
        <InputPage {...testProps}/>
    </MemoryRouter>
    )
    const inputForm = screen.getByPlaceholderText(/Enter your reps/i);
    expect(inputForm).toBeInTheDocument();
    userEvent.type(inputForm,testProps.user.amount);
    expect(inputForm).toHaveValue(testProps.user.amount);
});

test("Testing the button and text box rendering", () => {
    // jest.mock(addPlayer, ()=>({
    //     addPlayer: jest.fn()
    // }))
    render(
    <MemoryRouter >
        <InputPage {...testProps}/>
    </MemoryRouter>
    )
    // addPlayer.mockImplementation(()=> {})
    const submitBtn = screen.getByRole("button", {class:/submit/i})
    expect(submitBtn).toBeInTheDocument();
    // userEvent.click(submitBtn, {button: 0})
    // expect(addPlayer).toHaveBeenCalled()
});


// const submitButton = screen.getByRole("button", {class:/submit/i})
// userEvent.click(submitButton, {button: 0})
// expect(testProps.dispatch).toHaveBeenCalled()