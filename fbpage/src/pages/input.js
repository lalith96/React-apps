import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} style={{width:this.props.width}}/>
        )
    }
}