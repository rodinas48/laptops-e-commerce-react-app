import React from "react";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
function Form({
  isSignUp,
  email,
  username,
  password,
  onChange,
  errors,
  onSubmit,
}) {
  return (
    <div className="form">
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>{isSignUp ? "Signup" : "Login"}</h2>
        <p>Please enter your details below</p>
        {errors.wrong && (
          <div className="alert alert-danger" role="alert">
            <FontAwesomeIcon icon={faTriangleExclamation} /> {errors.wrong}
          </div>
        )}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="username*"
          onChange={(e) => onChange(e, "username")}
        />
        {errors.username && (
          <div className="alert alert-danger" role="alert">
            <FontAwesomeIcon icon={faTriangleExclamation} /> {errors.username}
          </div>
        )}
        {isSignUp && (
          <>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email*"
              id="email"
              value={email}
              onChange={(e) => onChange(e, "email")}
            />
            {errors.email && (
              <div className="alert alert-danger" role="alert">
                <FontAwesomeIcon icon={faTriangleExclamation} /> {errors.email}
              </div>
            )}
          </>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password*"
          value={password}
          onChange={(e) => onChange(e, "password")}
        />
        {errors.password && (
          <div className="alert alert-danger" role="alert">
            <FontAwesomeIcon icon={faTriangleExclamation} /> {errors.password}
          </div>
        )}
        <a href="#0" className="forgot">
          Forgot Password?
        </a>
        <button className="btn btn-warning btn1 my-3" type="submit">
          {isSignUp ? "Signup" : "Login"}
        </button>

        {isSignUp ? (
          <p>
            Already have an Account? <a href="#0">Register</a>
          </p>
        ) : (
          <p>
            {" "}
            Don't have an account? <a href="#0">Register</a>
          </p>
        )}
      </form>
    </div>
  );
}

export default Form;
