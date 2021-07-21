import React from "react";
import { render, screen, cleanup, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import TimerPage from "./index"
import YoutubeEmbed from "../../components/11_Video";
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

test("Renders button sucessfully", () => {
    render(
    <MemoryRouter >
        <TimerPage />
    </MemoryRouter>
    )
    //Test the button is present
    expect(screen.getByText(/START/)).toBeInTheDocument();
});

//testing iFrame loading not working - ned to add a delay or maybe async with setTimeout?
test("Loads the div with the iframe sucessfully", () => {
    render(<YoutubeEmbed embedId="9OfycnUL0h8?ecver=1&amp"/>)
    expect(screen.getByText("Error Loading Video")).toBeInTheDocument()

    expect(screen.getByText("Embedded youtube")).toBeInTheDocument()
});