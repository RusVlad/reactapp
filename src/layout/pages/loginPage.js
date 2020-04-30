import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import RequestProvider from "../../providers/requests";
import * as userActions from "../../store/actions/userActions";
import AuthForm from "../../components/auth/authForm";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ message: [] });
  let history = useHistory();
  let dispatch = useDispatch();

  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token);
    dispatch(userActions.setUserToken(token));
    history.push("/");
  };

  const validateAndLogin = async () => {
    if (email && password) {
      let res = await RequestProvider.post("/login", {
        email: email,
        password: password,
      });

      if (res.token) {
        handleLoginSuccess(res.token);
      } else {
        setErrors({ message: res.error });
      }
    } else {
      setErrors({ message: ["All fields must be filled"] });
    }
  };

  return (
    <AuthForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      submitFunction={validateAndLogin}
      actionButton={
        <button type="submit" className="btn">
          Login
        </button>
      }
    >
      <NavLink className="register-link" to="/register">
        Register
      </NavLink>
      <p className="errorMessage">
        {errors.message.map((err, index) => {
          return <span key={index}>{err}</span>;
        })}
      </p>
    </AuthForm>
  );
};

export default LoginPage;
