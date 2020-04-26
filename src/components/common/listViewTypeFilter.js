import React from "react";
import PropTypes from "prop-types";

const ListViewTypeFilter = (props) => {
  return (
    <div className="filter-view">
      <label>View:</label>
      {props.filterViewType === props.cardsView && (
        <div
          className="filter-view-type"
          onClick={() => props.setFilterViewType(props.listView)}
        >
          <i className="material-icons">view_list</i>
        </div>
      )}
      {props.filterViewType === props.listView && (
        <div
          className="filter-view-type"
          onClick={() => props.setFilterViewType(props.cardsView)}
        >
          <i className="material-icons">view_module</i>
        </div>
      )}
    </div>
  );
};

ListViewTypeFilter.propTypes = {
  filterViewType: PropTypes.string.isRequired,
  setFilterViewType: PropTypes.func.isRequired,
  cardsView: PropTypes.string,
  listView: PropTypes.string,
};

export default ListViewTypeFilter;
