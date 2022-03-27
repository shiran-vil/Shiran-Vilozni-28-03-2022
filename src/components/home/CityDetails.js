import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/actions';
import { getCurrentWeather } from '../../apis/AccuWeatherAPI';
import TemperatureData from '../TemperatureData';
import { addToLocalStorage, isInFavorites } from '../../helpers/dataHelpers';
const CityDetails = ({ city }) => {
   
   const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites);
	const [ currentWeather, setCurrentWeather ] = useState([]);
	const cityKey = city.Key;
	const isFavorite = isInFavorites(cityKey, favorites);

	const setWeather = () => {
		return getCurrentWeather(cityKey).then((res) => setCurrentWeather(res.data[0])).catch((err) => alert(err));
	};

	const handleAddToFavorites = () => {
		dispatch(addFavorite(city));
		addToLocalStorage('favorites', [ ...favorites, city ]);
	};

	const handleRemoveFromFavorites = () => {
		dispatch(removeFavorite(cityKey));
		addToLocalStorage('favorites', [ ...favorites.filter((c) => c.Key !== cityKey) ]);
	};

	useEffect(
		() => {
			if (cityKey) setWeather();
		},
		[ cityKey ]
	);

	if (!cityKey || currentWeather.length === 0) return null;

    return (
        <div className="d-flex flex-column align-items-center p-2 w-100">
            <div className="d-flex flex-row justify-content-between w-100">
                <div className="d-flex flex-column">
                    <h5 className='font-style'>{`${city.LocalizedName}, ${city.Country.LocalizedName}`}</h5>
                    <TemperatureData type="current" data={currentWeather} />
                </div>
                <div>
                    <button
                        className="btn btn-light favorite-btn"
                        onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
                    >
                        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    </button>
                    {isFavorite ? <i className="fas fa-heart fa-lg p-2 favorite-color" /> : <i className="far fa-heart fa-lg p-2" />}
                </div>
            </div>
            <h3 className='font-style'>{currentWeather.WeatherText}</h3>
        </div>
    );
}

export default CityDetails;