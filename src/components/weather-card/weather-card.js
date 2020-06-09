import React from "react";
import "./weather-card-style.css";

const WeatherCard = ({data}) => {
    const {townName,weather,icon,temp} = data
    return (
            <div className="card-weather">
                <div className="town-name">
                    <span>{townName}</span>
                </div>
                <div className="ikon">
                    <img className="placeholder-img" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
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