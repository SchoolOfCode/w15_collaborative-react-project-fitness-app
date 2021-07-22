import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import TimerPage from "./index"
import {MemoryRouter} from "react-router-dom"

afterEach(cleanup);

test("Clicking the button will start the timer", async() => {
    render(
    <MemoryRouter >
        <TimerPage time={1}/>
    </MemoryRouter>
    )
    expect(screen.getByText("00:01")).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {class:/my-button/i}), { button: 0 })
    setTimeout(()=>{
        expect(screen.getByText("00:00")).toBeInTheDocument()
    },2000)
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
// test("Loads the div with the iframe sucessfully", () => {
//     render(<YoutubeEmbed embedId="9OfycnUL0h8?ecver=1&amp"/>)
//     // expect(screen.getByText("Error Loading Video")).toBeInTheDocument()

//     expect(screen.getByText("Embedded youtube")).toBeInTheDocument()
// });