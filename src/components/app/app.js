import React, {Component} from "react";
import "./app-style.css";
import WeatherCard from "../weather-card/weather-card";
import CityInput from "../city-input/city-input";

import WeatherApiService from "../../services/weather-app-service";

export default class App extends Component {

    weatherApi = new WeatherApiService()

    state = {
        townName: '',
        weather: '',
        icon: '',
        temp:'',
    }

    onInput = (nameInput) => {
        this.onGetWeather(nameInput)
    }

    onGetWeather = (nameInput) => {
        this.weatherApi.getWeather(nameInput)
            .then((body)=>{
                this.setState((state)=>{
                    return{
                        townName: body.name,
                        weather: body.weather[0].description,
                        icon: body.weather[0].icon,
                        temp:body.main.temp,
                    }
                })
            })
            .catch((err)=>console.log(err))
    }

    render() {
        return (
            <div>
                <CityInput onInput={this.onInput}/>
                <WeatherCard data={this.state}/>
            </div>
        )
    }

}
