import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoritesContent from '../components/FavoritesContent';

function FavoritesScreen() {
    const favorites = useSelector((state) => state.favorites);
    

    if (favorites.length === 0) {
        return (
            <div className="content">
                <h2 className="text-center mt-5 text-white">No favorites yet!
                    <br></br>
                    <Link to="/"><button className='btn btn-info font-style mt-3'>Find & Add Cities</button></Link></h2>

            </div>);
    }

    return (
        <div className=" favorites-space">
            {favorites.map((city) => <FavoritesContent key={city.Key} city={city} />)}
        </div>
    );
}

export default FavoritesScreen;