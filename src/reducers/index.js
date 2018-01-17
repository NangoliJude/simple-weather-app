import { combineReducers } from 'redux';
import WeatherReducer from './reducer-weather'


const allReducer = combineReducers({
    weather: WeatherReducer
});

export default allReducer;