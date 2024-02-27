import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="login_card">
        <div className="logo_img">
          <img src="../logo.png" alt="logo" />
          <p>Log In</p>
        </div>
        <div className="input-login">
          <input type="email" name="email" placeholder="Email address..." />
          <br />
          <button> Log In </button>
        </div>
        <hr />
        <div className="logo_login">
          <div className="google_logo_login">
            <img src="../search.png" alt="" />
            <p>Login with google</p>
          </div>
          <div className="google_logo_login">
            <img src="../github.png" alt="" />
            <p>Login with github</p>
          </div>
          <div className="google_logo_login">
            <img src="../search.png" alt="" />
            <p>Login with google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
