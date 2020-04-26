import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavButton = (props) => {
  return (
    <NavLink
      className={`btn ${props.modifierClass ? props.modifierClass : ""}`}
      to={props.path}
    >
      {props.children ? props.children : props.text}
    </NavLink>
  );
};

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  modifierClass: PropTypes.string,
  children: PropTypes.node,
};

export default NavButton;
