import React from "react";
import TemperatureData from '../TemperatureData';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Forecast = ({ day }) => {
    const date = new Date(day.Date);
    return (
        <div className="d-flex flex-column align-items-center card p-4 mt-2 forecast-style">
            <h5 className='font-style'>{DAYS_OF_WEEK[date.getDay()]}</h5>
            <div>
                <strong>MIN:</strong> <TemperatureData type="min-temp" data={day} />
            </div>
            <div > 
                <strong>MAX:</strong> <TemperatureData type="max-temp" data={day} />
            </div>
        </div>
    );
}

export default Forecast;