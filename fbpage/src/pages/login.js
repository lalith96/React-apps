import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="logindiv">
                <div className="uprow">
                    <p>Email or phone</p>
                    <p>Password</p>
                </div>
                <div className="fields">
                    <input type="text" />
                    <input type="password" />
                   <Link to={"/loginscreen"}><input type="submit" value="Log in" /></Link>
                </div>
                <div className="downrow">
                    <input type="checkbox" /><p>&nbsp;Keep me logged in</p>
                    <p><a href="">Forgotten your password ?</a></p>
                </div>
            </div>
        )
    }
}