import React from "react";
import { render, screen, cleanup, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import TimerPage from "./index"
import {MemoryRouter} from "react-router-dom"

afterEach(cleanup);

test("Clicking the button will start the timer", () => {
    jest.useFakeTimers();
    render(
    <MemoryRouter >
        <TimerPage />
    </MemoryRouter>
    )
    expect(screen.getByText("02:00")).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {class:/my-button/i}), { button: 0 })
    act(() => {
        jest.advanceTimersByTime(120000);
    })
    expect(screen.getByText("00:00")).toBeInTheDocument()
});


test("Renders video and button sucessfully", async() => {
    jest.useRealTimers();
    render(
    <MemoryRouter >
        <TimerPage />
    </MemoryRouter>
    )
    //Test the components are present
    expect(screen.getByText(/START/)).toBeInTheDocument();
    await screen.findByTitle("Embedded youtube")
});