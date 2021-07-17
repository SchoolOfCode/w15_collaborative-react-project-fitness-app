import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./index"

describe("Sequentially testing rendering of pages in the linear site", () => {
  test("Renders homepage button and content on loading", () => {
    render(
    <Homepage />
    );
    expect(screen.getByTestId("homepage-div")).toBeInTheDocument();
  });

})

