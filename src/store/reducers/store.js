import favoritesReducer from './favorites';
import requestedCityReducer from './requestedCity';
import unitsReducer from './units';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	favorites: favoritesReducer,
	requestedCity: requestedCityReducer,
	units: unitsReducer
});

export default rootReducers;