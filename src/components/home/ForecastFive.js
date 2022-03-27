import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Forecast from './Forecast';
import { getForecast } from '../../apis/AccuWeatherAPI';

const ForecastFive = ({ cityKey }) => {
    const units = useSelector((state) => state.units);
    const [forecasts, setforecasts] = useState([]);

    const setData = () => {
        return getForecast(cityKey, units === 'Metric').then((res) => setforecasts(res.data)).catch((err) => alert(err));
    };

    useEffect(() => {
        if (cityKey) setData();
    },[cityKey, units]
    );

    if (!cityKey || forecasts.length === 0) return null;

	return (
		<div className="forecastsContainer d-flex flex-row justify-content-between flex-wrap p-4 w-100">
			{forecasts.DailyForecasts.map((d) => <Forecast key={d.EpochDate} day={d} />)}
		</div>
	);

}

export default ForecastFive;