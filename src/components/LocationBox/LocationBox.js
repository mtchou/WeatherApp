import React from "react";
import PropTypes from "prop-types";
import styles from "./LocationBox.module.css";

const LocationBox = () => (
  <div className={styles.LocationBox} data-testid="LocationBox">
    <div className={styles.Location}>Taiwan</div>
    <div className={styles.Date}>date</div>
  </div>
);

LocationBox.propTypes = {};

LocationBox.defaultProps = {};

export default LocationBox;
