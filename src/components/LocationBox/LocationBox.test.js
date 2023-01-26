import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LocationBox from "./LocationBox";

describe("<LocationBox />", () => {
  test("it should mount", () => {
    render(<LocationBox />);

    const locationBox = screen.getByTestId("LocationBox");

    expect(locationBox).toBeInTheDocument();
  });
});
