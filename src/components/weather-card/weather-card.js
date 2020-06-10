import React,{Component} from "react";
import "./weather-card-style.css";
import Loader from "../loader/loader";

export default class WeatherCard extends Component {

    render(){
        const {data} = this.props
        const loa = data.loading
        const msg = data.error ? <ErrorMsg/> : ""

        const loader = loa ? <Loader className="placeholder-img"/> : <WeatherView data={data}/>

        return (
            <div className="card-weather">
                {msg}
                {loader}
            </div>
        )
    }
}

const ErrorMsg = () => {
    return (
        <div className="error-msg">
            <h3>wrong city name</h3>
        </div>
    )
}

const WeatherView = ({data}) => {
    const {townName,weather,icon,temp} = data
    return(
        <React.Fragment >
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
        </React.Fragment>
    )
}
