import React from "react";
import City from "../components/home/City";
import SearchBox from "../components/home/SearchBox";

const HomeScreen = () => {
    return(
        <div className="d-flex flex-column align-items-center">
            <img src="weather.png" className="home-pic"></img>
            <SearchBox />
            <City />
        </div>
    )
}
export default HomeScreen;