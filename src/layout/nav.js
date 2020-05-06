import React from "react";
import { NAV_ITEMS } from "../constants";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as UserActions from "../store/actions/userActions";
import Dropdown from "../components/nav/dropdown";

const Nav = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer.token);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(UserActions.setUserToken(""));
  };

  return (
    <header id="header">
      <ul className="nav-menu">
        {token &&
          NAV_ITEMS.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <NavLink exact className="nav-link" to={item.route}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        {token && (
          <Dropdown
            icon={<i className="material-icons nav-profile-icon">person</i>}
          >
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li onClick={logout} className="nav-item">
              <span className="nav-link">Logout</span>
            </li>
          </Dropdown>
        )}
      </ul>
    </header>
  );
};

export default Nav;
