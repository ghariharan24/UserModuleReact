import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import ForgotPassword from "./ForgotPassword";

export default class Login extends Component {

  render() {

    return (

      <div className="loginContainer">
        <form>
          <h1 className="h1Login">Sign In</h1>
          <input className="LoginInput" type="text" placeholder="username" />
          <br />
          <input className="LoginInput " type="password" placeholder="password" />
          <button className="LoginButton">Login</button>
          <input type="checkbox" name="remember" /> Remember me
          <Link to="/forgotpassword" className="forgetPass">Forgot Password?</Link>
        </form>
      </div>

    );
  }

}

