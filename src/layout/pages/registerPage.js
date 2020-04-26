import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import RequestProvider from "../../providers/requests";
import AuthForm from "../../components/auth/authForm";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ message: [] });
  const history = useHistory();

  const validateAndRegister = async () => {
    if (email && password && username) {
      let res = await RequestProvider.post("/register", {
        email: email,
        password: password,
        username: username,
      });

      if (res.error) {
        setErrors({ message: res.error });
      } else {
        history.push("/login");
      }
    } else {
      setErrors({ message: ["All fields must be filled"] });
    }
  };

  return (
    <AuthForm
      email={email}
      setEmail={setEmail}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      submitFunction={validateAndRegister}
      actionButton={
        <button type="submit" className="btn">
          Register
        </button>
      }
    >
      <p className="errorMessage">
        {errors.message.map((err, index) => {
          return <span key={index}>{err}</span>;
        })}
      </p>
    </AuthForm>
  );
};

export default RegisterPage;
