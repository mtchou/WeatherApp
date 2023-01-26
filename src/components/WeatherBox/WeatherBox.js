import React from "react";
import PropTypes from "prop-types";
import styles from "./WeatherBox.module.css";

const WeatherBox = () => (
  <div className={styles.WeatherBox} data-testid="WeatherBox">
    WeatherBox Component
  </div>
);

WeatherBox.propTypes = {};

WeatherBox.defaultProps = {};

export default WeatherBox;
