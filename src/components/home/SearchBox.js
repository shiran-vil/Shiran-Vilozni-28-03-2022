import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherSearch } from '../../apis/AccuWeatherAPI';
import Autocomplete from 'react-autocomplete';
import { updateCity } from '../../store/actions';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [hintData, setHintData] = useState([]);

    const setData = () => {
        return getWeatherSearch(searchText).then((res) => setHintData(res.data)).catch((err) => alert(err));
    };

    useEffect(() => {
        if (searchText.length > 0 && /^[A-Za-z -]*$/.test(searchText)) setData();
    }, [searchText]);

    const handleTyping = (e) => {
        setSearchText(e.target.value);
    }

    const handleRequestedCity = (cityName) => {
        const city = hintData.find((c) => c.LocalizedName === cityName);
        dispatch(updateCity(city));
        setHintData([]);
        setSearchText('');
    }

    const style = { width: '100%', marginTop: '3rem', position: 'relative' };
    return (
        <Autocomplete
            wrapperStyle={{ width: '50%'}}
            inputProps={{ style }}
            getItemValue={(item) => item.LocalizedName}
            items={hintData}
            renderItem={(item, isHighlighted) => (
                <div
                    key={item.Key}
                    style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                >{`${item.LocalizedName}, ${item.Country.LocalizedName}`}</div>
            )}
            value={searchText}
            onChange={handleTyping}
            onSelect={handleRequestedCity}
        />
    );
}

export default SearchBox;