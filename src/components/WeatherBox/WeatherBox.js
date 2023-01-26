import React from "react";
import PropTypes from "prop-types";
import styles from "./WeatherBox.module.css";

const WeatherBox = () => (
  <div className={styles.WeatherBox} data-testid="WeatherBox">
    <div className={styles.Temperature}>15C</div>
    <div className={styles.Weather}>Sunny</div>
  </div>
);

WeatherBox.propTypes = {};

WeatherBox.defaultProps = {};

export default WeatherBox;
