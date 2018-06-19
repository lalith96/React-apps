import React, { Component } from 'react';
import './head.css';

export default class Head extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <div class="searched-place" id="searched-place">
                    <span id="place">{this.props.hInfo.city}
                </span>
                </div>
                <div class="day" id="current-day">
                    <span id="day">{this.props.hInfo.day}</span>
                </div>
                <div class="weather-condition">
                    <p id="cond">{this.props.hInfo.weather}</p>
                </div>
            </div>
        );
    }
}