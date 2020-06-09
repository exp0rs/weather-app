import React,{Component} from "react";
import "./weather-card-style.css";
import Loader from "../loader/loader";

export default class WeatherCard extends Component {

    render(){
        const {data} = this.props

        const loa = data.loading

        const loader = loa ? <Loader className="placeholder-img"/> : null

        return (
            <div className="card-weather">
                {loader}
                <WeatherView data={data}/>
            </div>
        )
    }
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
