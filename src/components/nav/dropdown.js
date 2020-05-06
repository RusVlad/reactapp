import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const dropdownNode = useRef(null);

  const defaultIcon = () => (
    <i className="material-icons nav-profile-icon">arrow_drop_down</i>
  );
  const icon = props.icon ? props.icon : defaultIcon();

  /**
   *
   * @param {node} evt .nav-item-profile dropdown component
   */
  const handleOutsideClick = (evt) => {
    if (dropdownNode.current.contains(evt.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    // close dropdown
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <li className="nav-item nav-item-profile" ref={dropdownNode}>
      <span className="nav-link" onClick={() => setOpen(!open)}>
        {props.text ? props.text : icon}
      </span>

      <div className={`profile-menu ${open ? "active" : ""}`}>
        <ul>{props.children}</ul>
      </div>
    </li>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default Dropdown;
