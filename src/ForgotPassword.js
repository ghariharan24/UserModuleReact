import React, { Component } from 'react';

export default class ForgotPassword extends Component {

    render() {

        return (
            <div>
                <form>
                    
                    <input className="LoginInput" type="text" placeholder="Enter password" />
                    <br />
                    <input className="LoginInput " type="password" placeholder="Reenter password" />
                    
                </form>
            </div>
        );


    }



}