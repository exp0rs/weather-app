import React, {Component} from "react";
import "./city-input-style.css"

export default class CityInput extends Component{

    state = {
        searchValue: ''
    }

    onLabelChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.onInput(this.state.searchValue)
        this.setState({
            searchValue: ''
        })
    }

    render(){
        return (
            <div className="city-input">
                <span>Weather App</span>
                <form className="input-form"
                onSubmit={this.onSubmit}>
                    <input type="text" className="in"
                           placeholder="Enter City for weather information"
                           value={this.state.searchValue}
                           onChange={this.onLabelChange}/>
                </form>
            </div>
        )
    }
}
