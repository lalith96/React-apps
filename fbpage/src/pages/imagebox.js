import React, { Component } from 'react';
import world from '../world.png';
import './imagebox.css';

export default class Imagebox extends Component {
    render() {
        return (
            <div className="ibox">
                <p>Facebook helps you connect and share with the people in your life.</p>
                <img src={world} className="worldimg" alt="world_image" />
            </div>
        )
    }
}