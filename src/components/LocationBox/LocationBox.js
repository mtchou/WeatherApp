import React from "react";
import styles from "./LocationBox.module.css";
import { format } from "date-fns";
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

export default LocationBox;
