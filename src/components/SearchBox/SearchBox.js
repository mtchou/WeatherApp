import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = () => (
  <div className={styles.SearchBox} data-testid="SearchBox">
    <div className="search-box">
      <input type="text" className={styles.SearchBar} placeholder="Search..." />
    </div>
  </div>
);

SearchBox.propTypes = {};

SearchBox.defaultProps = {};

export default SearchBox;
