import React from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  return (
    <div className="search-form form">
      <label htmlFor="search-input">
        {props.label ? props.label : "Search"}
      </label>
      <input
        id="search-input"
        name="search-input"
        value={props.searchInputValue}
        onChange={(event) => props.setSearchInputValue(event.target.value)}
      />
    </div>
  );
};

SearchForm.propTypes = {
  label: PropTypes.string,
  searchInputValue: PropTypes.string.isRequired,
  setSearchInputValue: PropTypes.func.isRequired,
};

export default SearchForm;
