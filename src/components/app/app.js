import React, {Component} from "react";
import "./app-style.css";
import WeatherCard from "../weather-card/weather-card";
import Loader from "../loader/loader";
import CityInput from "../city-input/city-input";

import WeatherApiService from "../../services/weather-app-service";

export default class App extends Component {

    weatherApi = new WeatherApiService()

    state = {
        loading: false,
        error: false,
        townName: 'Moscow',
        icon: '01d',
        weather: 'clear sky',
        temp:'23.96',
    }

    onInput = (nameInput) => {
        this.setState({loading: true})
        this.onGetWeather(nameInput)

    }

    onGetWeather = (nameInput) => {
        this.weatherApi.getWeather(nameInput)
            .then((body)=>{
                this.setState((state)=>{
                    return{
                        loading: false,
                        error: false,
                        townName: body.name,
                        weather: body.weather[0].description,
                        icon: body.weather[0].icon,
                        temp:body.main.temp,
                    }
                })
            })
            .catch((err)=>{
                this.setState((state)=>{
                    return {
                        loading: true,
                        error: true
                    }
                })
                console.log(err)})
    }

    render() {
        const data = this.state
        return (
            <div>
                <CityInput onInput={this.onInput}/>
                <WeatherCard data={data}/>
            </div>
        )
    }

}
