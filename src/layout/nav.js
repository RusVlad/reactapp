import React from "react";
import { NAV_ITEMS } from "../constants";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as UserActions from "../store/actions/userActions";

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
          <li onClick={logout} className="nav-item nav-item-login">
            <span className="nav-link">Logout</span>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Nav;
