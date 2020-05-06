import React from "react";
import PropTypes from "prop-types";
import NavButton from "../common/navButton";

const Items = (props) => {
  return (
    <div className="container">
      <h1 className="header">Items</h1>
      <div className="items-actions">
        <div className="filter-section">
          {props.searchForm}
          {props.viewTypeFilter}
        </div>
        <NavButton path="/items/new" modifierClass="light" text="New" />
      </div>
      {props.list}
    </div>
  );
};

Items.propTypes = {
  searchForm: PropTypes.node,
  viewTypeFilter: PropTypes.node,
  list: PropTypes.node,
};

export default Items;
