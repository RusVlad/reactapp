import React from "react";
import PropTypes from "prop-types";

const AuthForm = (props) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.submitFunction();
  };

  return (
    <div className="container">
      <form className="login-form form" onSubmit={handleSubmit}>
        {props.setEmail && (
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={props.email}
              onChange={(event) => props.setEmail(event.target.value)}
            />
          </div>
        )}
        {props.setUsername && (
          <div className="form-item">
            <label htmlFor="email">Username</label>
            <input
              id="username"
              name="username"
              value={props.username}
              onChange={(event) => props.setUsername(event.target.value)}
            />
          </div>
        )}
        {props.setPassword && (
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={props.password}
              onChange={(event) => props.setPassword(event.target.value)}
            />
          </div>
        )}
        {props.actionButton}
        {props.children}
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  actionButton: PropTypes.element.isRequired,
  children: PropTypes.node,
  submitFunction: PropTypes.func,
};

export default AuthForm;
