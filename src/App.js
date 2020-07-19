import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import ForgotPassword from "./ForgotPassword";


class App extends Component {

    render() {

        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/forgotpassword" component={ForgotPassword} />
                </Switch>
            </div>

        );
    }

}

export default App;
