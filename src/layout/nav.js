import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "../constants";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as UserActions from "../store/actions/userActions";
import Dropdown from "../components/nav/dropdown";

const Nav = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer.token);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (token && !user._id) {
      dispatch(UserActions.getUser(localStorage.getItem("user_id")));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    dispatch(UserActions.setUserToken(""));
  };

  const getProfileImage = () => {
    return (
      <img src={user.image} alt="profile image" className="nav-profile-icon" />
    );
  };

  const getProfileIcon = () => {
    return <i className="material-icons nav-profile-icon">person</i>;
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
          <Dropdown icon={user.image ? getProfileImage() : getProfileIcon()}>
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
