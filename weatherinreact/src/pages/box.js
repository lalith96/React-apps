import React, { Component } from 'react';
import Head from './head';
import Banner from './banner';
import Chart from './chart';
import Tile from '../tile';
import './box.css';

export default class Box extends Component{

    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div class="main-container" id="main-con">
                <Head hInfo={this.props.headInfo}/>
                <Banner bInfo={this.props.bannerInfo} />
                <Chart />
                {this.props.forecast.map(element=>{
                    return(
                    <Tile fInfo={element} />
                    )
                }
                )}
            </div>
        );
    }
}