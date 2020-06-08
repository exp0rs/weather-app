import React,{Component} from "react";
import "./weather-card-style.css";
import WeatherApiService from "../../services/weather-app-service"

export default class WeatherCard extends Component {

    weatherApi = new WeatherApiService()

    state = {
        townName: null,
        weatherCondition: null,
        temp:null
    }

    updateTown(searchValue){
        this.weatherApi.getCity(searchValue).then((city)=>{
            this.props.onMatch()
                this.setState(({townName})=>{
                    return {
                        townName: city.LocalizedName,
                    }
                })
            this.weatherApi.getCurrentConditions(city.Key).then((condition)=>{
                console.log(condition)
                this.setState( ({weatherCondition, temp})=>{
                    return{
                        weatherCondition: condition[0].WeatherText,
                        temp: condition[0].Temperature.Metric.Value
                    }
                })
            })
        })
    }

    render() {
        const {searchValue} = this.props
        const {townName, weatherCondition, temp} = this.state

        if (searchValue.length>1){
            this.updateTown(searchValue)
        }

        return (
            <div className="card-weather">
                <div className="town-name">
                    <span>{townName}</span>
                </div>
                <img className="placeholder-img" src="https://via.placeholder.com/250"/>
                <div className="ikon">

                </div>
                <div className="condition-weather-div">
                    <span>{weatherCondition}</span>
                </div>
                <div className="temp-div">
                    <span>{temp}</span>
                    <span>&deg;C</span>
                </div>
            </div>
        )
    }
}