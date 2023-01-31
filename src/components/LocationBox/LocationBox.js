import React from "react";
import PropTypes from "prop-types";
import styles from "./LocationBox.module.css";
import { format, formatRelative } from "date-fns";
import { enAU } from "date-fns/locale";

const LocationBox = ({ cityName, country }) => {
  return (
    <div className={styles.LocationBox} data-testid="LocationBox">
      <div className={styles.Location}>
        {cityName} ({country})
      </div>
      <div className={styles.Date}>
        {format(new Date(), `PPPP`, { locale: enAU })}
      </div>
    </div>
  );
};

LocationBox.propTypes = {};

LocationBox.defaultProps = {
  cityName: "Australia",
  country: "AU",
};

export default LocationBox;
