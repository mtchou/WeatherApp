import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherBox from "./WeatherBox";

describe("<WeatherBox />", () => {
  test("it should mount", () => {
    render(<WeatherBox />);

    const weatherBox = screen.getByTestId("WeatherBox");

    expect(weatherBox).toBeInTheDocument();
  });
});
