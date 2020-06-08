import React, {Component} from "react";

export default class WeatherApiService {

    _apiKey = 'vly5PrGw8QHmJiPid0gkhx9UMCAMyyGd'

    async getCity(city) {

        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        const query = `?apikey=${this._apiKey}&q=${city}`

        const res = await fetch(base + query)
            if (!res.ok){
                throw new Error(`Could not FETCH ${res}`)
            }

        const data = await res.json()
        return data[0]

    }

    async getCurrentConditions(id){
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const query = `${id}?apikey=${this._apiKey}`
        const res = await fetch(base+query)
        const data = await res.json()
        return data
    }
}





