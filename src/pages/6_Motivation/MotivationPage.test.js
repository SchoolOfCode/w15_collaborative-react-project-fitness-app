import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MotivationPage from "../6_Motivation/index"
import {MemoryRouter} from "react-router-dom"

afterEach(cleanup)

test("Renders the image, motivational quote and button",()=>{
    render(
    <MemoryRouter >
        <MotivationPage />
    </MemoryRouter>
    )
    expect(screen.getByText(/The pain you feel today/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {class:/my-button/i})).toBeInTheDocument();
    expect(screen.getByAltText(/sunrise/i)).toBeInTheDocument();
})