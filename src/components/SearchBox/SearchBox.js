import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";
import openWeatherAPI from "../../Api/openWeatherAPI";

const SearchBox = ({ queryCity, setQueryCity, setWeather }) => {
  const searchOnChangeHandler = (event) => {
    event.preventDefault();

    fetch(
      `${openWeatherAPI.base}weather?q=${queryCity}&appid=${openWeatherAPI.key}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQueryCity("");
        console.log(result);
      });
  };

  return (
    <div className={styles.SearchBox} data-testid="SearchBox">
      <div className="search-box">
        <form onSubmit={searchOnChangeHandler}>
          <input
            type="text"
            className={styles.SearchBar}
            placeholder="Search..."
            onChange={(e) => setQueryCity(e.target.value)}
            value={queryCity}
          />
        </form>
      </div>
    </div>
  );
};

SearchBox.propTypes = {};

SearchBox.defaultProps = {};

export default SearchBox;
