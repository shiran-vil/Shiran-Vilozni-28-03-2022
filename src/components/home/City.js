import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getForecast, getWeatherSearch, geoLocation } from '../../apis/AccuWeatherAPI';
import { updateCity } from '../../store/actions';
import CityDetails from './CityDetails';
import ForecastFive from './ForecastFive';
import axios from 'axios';
const DEFAULT_CITY_NAME = 'tel aviv';

const API_KEY = process.env.REACT_APP_ACCUWEATHER_APIKEY;

const City = () => {
    const dispatch = useDispatch();
    const city = useSelector((state) => state.requestedCity);
    const cityKey = city.Key;


    const geoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        }
        else {
            alert("Your browser does not support geo location!");
        }

        function locationSuccess(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            //looking for the city id using geolocation
            axios.get(lat, lon, null).then((res) => dispatch(updateCity(res.data)))
                .catch((err) => alert(err));;
        }



        function locationError(error) {
            switch (error.code) {
                case error.TIMEOUT:
                    alert("A timeout occured! Please try again!");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert('We can\'t detect your location. Sorry!');
                    break;
                case error.PERMISSION_DENIED:
                    alert('Please allow geolocation access for this to work.');
                    break;
                default:
                    alert('An unknown error occured!');
                    break;
            }
        }

    };


    useEffect(() => {
        if (!cityKey) {
            geoLocation();

        }
    }, [cityKey]
    );

    if (city.length === 0 && !cityKey) return null;

    return (
        <div
            className="w-100  home-weather-box"
            style={{ background: 'rgba(0, 204, 255, 0.3)' }}
        >
            <CityDetails city={city} />
            <ForecastFive cityKey={cityKey} />
        </div>
    );

}
export default City;