import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Homepage from "./index"
import { MemoryRouter} from "react-router-dom"
import App from "../../App/App"

afterEach(cleanup);

test("Renders homepage button and content on loading", () => {
  render(
    <MemoryRouter >
      <Homepage />
    </MemoryRouter>
  )
  expect(screen.getByTestId("homepage-div")).toBeInTheDocument();
  expect(screen.getByRole('button', {class:/my-button/i})).toBeInTheDocument();
});

test("Renders logo", () => {
  const {getByAltText} =   render(
    <MemoryRouter >
      <Homepage />
    </MemoryRouter>
  )
  const testLogo = getByAltText("logo")
  expect(testLogo).toBeInTheDocument()
  expect(testLogo).toHaveAttribute("src", "logo.svg")
});

test("Clicking the start button takes you to the explanation page", () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  const button = screen.getByRole('button', {class:/my-button/i})
  userEvent.click(button, { button: 0 })
  expect(screen.getByText(/You are about to complete a short/i)).toBeInTheDocument()
});
