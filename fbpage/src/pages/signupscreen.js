import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signupscreen extends Component {
    render() {
        return (
            <div>
                <h1>You are successfully registered. Please <Link to={"/"} >click here</Link> to login into facebook.</h1>
            </div>
        )
    }
}