import React from "react";
import PropTypes from "prop-types";
import styles from "./WeatherBox.module.css";

const WeatherBox = ({ weather }) => (
  <div className={styles.WeatherBox} data-testid="WeatherBox">
    <div className={styles.Temperature}>
      {Math.round(weather.main.temp)} &deg;C
    </div>
    <div className={styles.Weather}>{weather.weather[0].main}</div>
  </div>
);

WeatherBox.propTypes = {};

WeatherBox.defaultProps = {};

export default WeatherBox;
