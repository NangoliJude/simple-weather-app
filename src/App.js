import React, { Component } from 'react';
import Search from './components/search'
import WeatherList from './components/weatherList';
import "./App.css"


class App extends Component{
    render(){
        return(
            <div>
                <Search/>
                <WeatherList/>
            </div>
        )
    }
};

export default App;