import React, {Component} from "react";
import "./app-style.css";
import WeatherCard from "../weather-card/weather-card";
import CityInput from "../city-input/city-input";

export default class App extends Component {

    state = {
        searchValue: ''
    }

    onSearch=(s)=>{
        this.setState({searchValue: s})
    }

    onMatch=()=>{
        this.setState({searchValue:''})
    }

    render() {
        const {searchValue} = this.state
        return (
            <div>
                <CityInput onSearch={this.onSearch}/>
                <WeatherCard searchValue={searchValue}
                             onMatch={this.onMatch}/>
            </div>
        )
    }

}
