import React, { Component } from 'react';
import Box from './box';
import './firstpage.css';
import * as moment from 'moment';
import * as _ from 'lodash';
export default class Firstpage extends Component {
    constructor(){
        
        super();
        this.days={};
        this.state=
        {
            cityName:'',
            heads:{
                city:'',
                day:'',
                weather:''
            },
            tempcontents:{
                pressure:'',
                temperature:'',
                humidity:'',
                windspeed:'',
                icon:''
                
            },
            forecastInfo: []
        }
        this.Btnclick=this.Btnclick.bind(this);
        this.getCity=this.getCity.bind(this);
    }


    getCity(e){
        this.setState({
           
           cityName :e.target.value
            
        })
        
    }

    Btnclick(){
        fetch('http://api.openweathermap.org/data/2.5/forecast?q='+this.state.cityName+'&appid=d14c83dc1f84f75137ecb3c8a6c78fde').
        then(res=>res.json()).
        then(data=>{
            const iconcode=data.list[0].weather[0].icon;
            const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            console.log(data)
            this.setState({
                heads:{
                city:data.city.name,
                day:moment(data.list[0].dt * 1000).format('dddd'),
                weather:data.list[0].weather[0].description
                },
                tempcontents:{
                    temperature:Math.ceil(data.list[0].main.temp-273),
                    pressure:data.list[0].main.pressure,
                    humidity:data.list[0].main.humidity,
                    windspeed:data.list[0].wind.speed,
                    icon:iconurl
                }
            })
            console.log(this.state.heads.day);
            console.log(this.state.heads.weather)

            data.list.forEach((obj)=>{

                let todaydate = new Date(obj.dt*1000);
                let today = todaydate.getDay();
                if(today in this.days){
                        this.days[today].push(obj);
                }
                else{
                    this.days[today]=[obj];
                }

            });
            console.log(this.days)

            const sortedMap = _.sortBy(this.days, (value) => {
                let dayOfWeek = new Date(value[0].dt * 1000).getDay();
                let today = new Date().getDay();
                const diff = dayOfWeek - today;
                return diff < 0 ? diff + 7 : diff;
             });

             const forecastInfo = _.map(sortedMap, (obj) => {
                const minTemp = _.reduce(obj.map(interval => interval.main.temp_min), (a, b) => a + b) / obj.length;
                const code=obj[0].weather[0].icon;
                console.log(code);
                const url = "http://openweathermap.org/img/w/" + code + ".png";
            
                return {
                  day: moment(obj[0].dt * 1000).format("ddd"),
                  minTemp: _.round(minTemp - 270),
                  maxTemp: _.round(obj[0].main.temp_max - 270),
                  imageURL: url,
                  dayNum: new Date(obj[0].dt * 1000).getDay()
                }
              });
      
              this.setState({
                forecastInfo
              })

        })

        
    }
    render() {
        return (
            <div>
                <div class="input-group">
                    <input type="text" onChange={this.getCity}  class="form-control" id="cname" placeholder="Search for..."/>
                    <span class="input-group-btn">
                        <button onClick={this.Btnclick} class="btn btn-default" type="button" id="search"><svg focusable="false" width="25px" fill="#4285f4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></button>
                    </span>
                </div>
                <Box headInfo={this.state.heads} bannerInfo={this.state.tempcontents} forecast={this.state.forecastInfo}/>
            </div>
        );
    }
}