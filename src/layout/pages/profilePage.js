import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as userActions from "../../store/actions/userActions";

const LoginPage = () => {
  let dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (!user._id) {
      dispatch(userActions.getUser(localStorage.getItem("user_id")));
    }
  }, []);

  return (
    <div className="container">
      <h1 className="header">Profile</h1>
      <p className="profile-details">
        <span>Username: {user.username}</span>
        <span>Email: {user.email}</span>
      </p>
    </div>
  );
};

export default LoginPage;
