import React, { Component } from 'react';
import './tile.css';
export default class Tile extends Component {
    constructor()
    {
        super();
    }
    render() {
        return (
            <div className="tile">
                <div  id="grid1">
                    <p id="fday1">{this.props.fInfo.day}</p>
                    <img src={this.props.fInfo.imageURL} id="fimg1" alt="image" />
                    <p><span id="high1">{this.props.fInfo.maxTemp}</span><sup>o</sup><span id="low1">{this.props.fInfo.minTemp}</span><sup>o</sup></p>
                </div>
            </div>
        );
    }
}