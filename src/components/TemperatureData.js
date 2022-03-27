import React from "react";
import { useSelector } from "react-redux";

function TemperatureData({ type, data }) {
	const units = useSelector((state) => state.units);

	if (!type || data.length === 0) return null;

	switch (type) {
		case 'current':
			if (units === 'Metric') {
				return <span className='font-style'>{data.Temperature.Metric.Value} &#8451;</span>;
			}
			return <span className='font-style'>{data.Temperature.Imperial.Value} &#8457;</span>;
		case 'min-temp':
			if (units === 'Metric') {
				return <span className='font-style'>{data.Temperature.Minimum.Value} &#8451;</span>;
			}
			return <span className='font-style'>{data.Temperature.Minimum.Value} &#8457;</span>;
		case 'max-temp':
			if (units === 'Metric') {
				return <span className='font-style'>{data.Temperature.Maximum.Value} &#8451;</span>;
			}
			return <span className='font-style'>{data.Temperature.Maximum.Value} &#8457;</span>;
		default:
			return null;
	}
}

export default TemperatureData;