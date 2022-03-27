import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherSearch } from '../../apis/AccuWeatherAPI';
import { updateCity } from '../../store/actions';
import CityDetails from './CityDetails';
import ForecastFive from './ForecastFive';

const DEFAULT_CITY_NAME = 'tel aviv';

const City = () => {
    const dispatch = useDispatch();
    const city = useSelector((state) => state.requestedCity);
    const cityKey = city.Key;

    const setDefaultCity = () => {
        return getWeatherSearch(DEFAULT_CITY_NAME)
            .then((res) => dispatch(updateCity(res.data[0])))
            .catch((err) => alert(err));
            
    };

    useEffect(() => {
        if (!cityKey) {
            setDefaultCity();
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