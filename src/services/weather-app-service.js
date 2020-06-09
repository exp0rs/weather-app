import React, {Component} from "react";

export default class WeatherApiService {

    _apiKey = 'be4901119b449048c22cf5841a0c7bc5'
    _apiBase = '//api.openweathermap.org/data/2.5/'


    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}${this._apiKey}`)

        if (!res.ok) {
            throw new Error(`NOT FETCHING ${url}, ${res.status}`)
        }

        const body = await res.json()
        console.log(body)
        return body
    }

    async getWeather (townName) {
        return await this.getResource(`weather?q=${townName}&appid=`)
    }


}





