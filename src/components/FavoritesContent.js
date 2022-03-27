import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentWeather } from "../apis/AccuWeatherAPI";
import { updateCity } from "../store/actions";
import TemperatureData from "./TemperatureData";


const FavoritesContent = ({ city }) => {
	const dispatch = useDispatch();
	const cityKey = city.Key;
	const [currentWeather, setCurrentWeather] = useState([]);

	const setWeather = () => {
		return getCurrentWeather(cityKey).then((res) => setCurrentWeather(res.data[0])).catch((err) => alert(err));
	};

	const handleRequestedCity = () => {
		dispatch(updateCity(city));

	};

	useEffect(
		() => {
			if (cityKey) setWeather();
		},
		[cityKey]
	);

	if (!cityKey || currentWeather.length === 0) return null;

	return (
		<Link
		    className=" favorite-card"
		    onClick={handleRequestedCity} to="/">
		    <div className="">
		        <h5 className="font-style text-center">{city.LocalizedName}</h5>
		        <h5 className="text-center"><TemperatureData type='current' data={currentWeather} /></h5>
		        <i className="fa-solid fa-temperature-empty fa-lg p-2 fa-beat icon-position"></i>
		    </div>
			<h4 className="text-center">{currentWeather.WeatherText}</h4>
		</Link>
		

	)
}

export default FavoritesContent;