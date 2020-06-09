import React from "react";
import "./weather-card-style.css";

const WeatherCard = ({data}) => {
    const {townName,weather,temp} = data
    return (
            <div className="card-weather">
                <div className="town-name">
                    <span>{townName}</span>
                </div>
                <img className="placeholder-img" src="https://via.placeholder.com/250"/>
                <div className="ikon">
                    <span></span>
                </div>
                <div className="condition-weather-div">
                    <span>{weather}</span>
                </div>
                <div className="temp-div">
                    <span>{temp}</span>
                    <span>&deg;C</span>
                </div>
            </div>
    )
}
export default WeatherCard