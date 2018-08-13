import React, { Component } from 'react';
import Login from './login';
import Imagebox from './imagebox';
import Signupbox from './signupbox';
import logo from '../logo.jpg';
import Footer from './footer';
import './homepage.css';

export default class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <div className="homepage-header">
                    <div className="name">
                        <img src={logo} className="fbimg" alt="fbimg" />
                    </div>
                    <div className="login">
                        <Login />
                    </div>
                </div>
                <div className="banner">
                    <div className="imagebox">
                        <Imagebox />
                    </div>
                    <div className="signupbox">
                        <Signupbox />
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}