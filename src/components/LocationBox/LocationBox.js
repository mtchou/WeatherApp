import React from "react";
import PropTypes from "prop-types";
import styles from "./LocationBox.module.css";
import { format, formatRelative } from "date-fns";
import { enAU } from "date-fns/locale";

const LocationBox = () => {
  return (
    <div className={styles.LocationBox} data-testid="LocationBox">
      <div className={styles.Location}>Taiwan</div>
      <div className={styles.Date}>
        {format(new Date(), `PPPP`, { locale: enAU })}
      </div>
    </div>
  );
};

LocationBox.propTypes = {};

LocationBox.defaultProps = {};

export default LocationBox;
