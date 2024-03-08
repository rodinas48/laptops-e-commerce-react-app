import React from "react";
import { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigateLogin = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = "Username is required!";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required!";
    } else if (!/^[A-Z0-9._\-+%]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      validationErrors.email = "Invaild email address!";
    }
    if (!password.trim() || password.length < 8) {
      validationErrors.password = "Password Should be at least 8 charaters!";
    }
    setErrors({ ...errors, ...validationErrors });
    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        username: "",
        password: "",
        email: "",
        isLogin: false,
      };
      userData.username = username;
      userData.email = email;
      userData.password = password;
      setUsername("");
      setPassword("");
      setEmail("");
      navigateLogin("/login");
      const dataJson = JSON.stringify(userData);
      localStorage.setItem("User Data", dataJson);
    }
  };
  const onChange = (e, field) => {
    if (field === "username") {
      setUsername(e.target.value);
      // console.log(e.target.value);
    } else if (field === "password") {
      setPassword(e.target.value);
      // console.log(e.target.value);
    } else if (field === "email") {
      setEmail(e.target.value);
    }
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <Form
      isSignUp={true}
      username={username}
      password={password}
      email={email}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default Signup;
