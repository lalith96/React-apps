import React, { Component } from 'react';
import './banner.css';

export default class Banner extends Component {
    constructor(){
        super();
        this.temp=0;
        this.new_temp=0;
    }
    /*convertF(){
        this.temp = this.props.bInfo.temperature;
        this.new_temp = (this.temp *1.8) + 32;
        document.getElementById("temp").innerHTML=this.new_temp;
    }*/
    render() {
        return (
            <div>
                <div class="banner">
                    <div class="banner-left">
                        <div class="column1">
                            <img src={this.props.bInfo.icon} id="cond-img" alt="weather_image"></img>
                        </div>
                        <div class="column2" id="temp-disp">
                            <div class="col2_1">
                                <span id="temp">{this.props.bInfo.temperature}</span>
                            </div>
                            <div class="col2_2">
                                <a id="cel">&#8451;</a>|
                            <a id="fah">&#8457;</a>
                            </div>
                        </div>
                    </div>
                    <div class="banner-right">
                        <div class="row1">
                            <div class="pressure"> Pressure: <span id="pressure"> {this.props.bInfo.pressure}pascals</span></div>
                            <div class="humidity"> Humidity: <span id="humidity"> {this.props.bInfo.humidity}%</span></div>
                            <div class="wind"> Wind:<span id="wind"> {this.props.bInfo.windspeed}miles/hr</span></div>
                        </div>
                        <div class="row2">
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary">Temperature</button>
                                <button type="button" class="btn btn-primary">Pressure</button>
                                <button type="button" class="btn btn-primary">Wind</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}