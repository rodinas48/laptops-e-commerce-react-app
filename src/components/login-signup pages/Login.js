import React, { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const nagivateHome = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = "Username is required!";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required!";
    }
    setErrors({ ...errors, ...validationErrors });
    if (Object.keys(validationErrors).length === 0) {
      const userDataObject = JSON.parse(localStorage.getItem("User Data"));
      if (
        userDataObject &&
        userDataObject.username.trim() === username.trim() &&
        userDataObject.password.trim() === password.trim()
      ) {
        userDataObject.isLogin = true;
        setIsLoggedIn(true);
        const dataJson = JSON.stringify(userDataObject);
        localStorage.setItem("User Data", dataJson);
        nagivateHome("/");
        validationErrors.wrong = "";
      } else {
        setUsername("");
        setPassword("");
        validationErrors.wrong = "Invalid username or password!";
        setErrors({ ...errors, ...validationErrors });
      }
    }
  };
  const onChange = (e, field) => {
    if (field === "username") {
      setUsername(e.target.value);
    } else if (field === "password") {
      setPassword(e.target.value);
    }
    setErrors({ ...errors, [e.target.name]: "" });
    setErrors({ ...errors, wrong: "" });
  };
  return (
    <Form
      isSignUp={false}
      username={username}
      password={password}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default Login;
