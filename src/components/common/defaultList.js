import React from "react";
import PropTypes from "prop-types";

import DefaultCard from "./defaultCard";
import { NavLink } from "react-router-dom";

const DefaultList = (props) => {
  return (
    <div className={props.filterViewType + " items-list"}>
      {props.items.length ? (
        props.items.map((item, index) => (
          <NavLink className="item" to={"/items/" + item._id} key={index}>
            <DefaultCard deleteItem={props.deleteItem} item={item} />
          </NavLink>
        ))
      ) : (
        <p className="empty-list-message">...no items to show</p>
      )}
    </div>
  );
};

DefaultList.propTypes = {
  items: PropTypes.array.isRequired,
  filterViewType: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default DefaultList;
