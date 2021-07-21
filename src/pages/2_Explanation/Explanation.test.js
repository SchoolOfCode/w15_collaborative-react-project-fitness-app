import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Explanation from "./index"
import {MemoryRouter} from "react-router-dom"
import App from "../../App/App"

afterEach(cleanup);

test("Renders explanation page and next page button on loading", () => {
    render(
    <MemoryRouter >
        <Explanation />
    </MemoryRouter>
    )
    expect(screen.getByText(/Exercise Challenge/i)).toBeInTheDocument();
    expect(screen.getByText(/Keep count of the amount of reps you completed in the time/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {class:/my-button/i})).toBeInTheDocument();
});

test("Clicking the continue button takes you to the choices/input page", () => {

    render(
    <MemoryRouter initialEntries={['/explanation']}>
        <App />
    </MemoryRouter>
    )
    const button = screen.getByRole('button', {class:/my-button/i})
    userEvent.click(button, { button: 0 })
    expect(screen.getByText(/Select Exercise/i)).toBeInTheDocument()
});
