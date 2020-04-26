import React from "react";
import PropTypes from "prop-types";

const ActionButton = (props) => {
  return (
    <button
      className={`btn ${props.modifierClass && props.modifierClass}`}
      onClick={props.onClickFunction}
      type={props.type ? props.type : "button"}
    >
      {props.children ? props.children : props.text}
    </button>
  );
};

ActionButton.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  text: PropTypes.string,
  modifierClass: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default ActionButton;
