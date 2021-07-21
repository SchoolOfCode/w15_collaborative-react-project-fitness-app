import React from "react";
import { render, screen, cleanup, getByAltText } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import ExerciseSelection from "./index"
import {MemoryRouter} from "react-router-dom"
import App from "../../App/App"

afterEach(cleanup);

const testProps={
    user:{
    name:"",
    seeds: "micah",
    amount: 512,
    },
    dispatch:jest.fn(),
}
const testName = "Jimothy"
const testAvatar = "Bots"

test("Renders choices page, input form and avatar selection tests", () => {
    render(
    <MemoryRouter >
        <ExerciseSelection {...testProps}/>
    </MemoryRouter>
    )
    //Test one of the headings has loaded
    expect(screen.getByText(/Select Exercise/i)).toBeInTheDocument();
    //Testing the input form
    const inputForm = screen.getByPlaceholderText(/Enter your name/i);
    expect(inputForm).toBeInTheDocument();
    userEvent.type(inputForm,testName);
    expect(inputForm).toHaveValue(testName)
    //The dispatch should only happen once focus is lost (to avoid abusing the avatar API)
    expect(testProps.dispatch).not.toHaveBeenCalled()
    //Click out of the input area to set the state i.e. dispatch should be called
    userEvent.click(screen.getByText(/Select Exercise/i))
    expect(testProps.dispatch).toHaveBeenCalled()
    //Select an Avatar
    userEvent.selectOptions(screen.getByTestId("avatarChoice"), testAvatar);
    expect((screen.getByText('Micah')).selected).toBeFalsy();
    expect((screen.getByText(testAvatar)).selected).toBeTruthy();
    expect(testProps.dispatch).toHaveBeenCalled()
});

test("Clicking the exercise button takes you to the timer page", () => {

    render(
    <MemoryRouter initialEntries={['/exercise-choice']}>
        <App />
    </MemoryRouter>
    )
    const button = screen.getByTestId("test-Squats")
    userEvent.click(button, { button: 0 })
    expect(screen.getByText(/START/)).toBeInTheDocument()
});
