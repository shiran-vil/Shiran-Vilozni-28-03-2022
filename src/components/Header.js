import * as React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { updateUnits } from '../store/actions';

const Header = () => {
    const style = ({ isActive }) => ({
        borderTop: isActive ? '3px solid white' : 'none',
    });

    const dispatch = useDispatch();

    const setUnits = (val) => {
        dispatch(updateUnits(val));
    };

    return (
        <header>
            <div className="container">
                <nav className="nav_checkbox">
                    <Link to="/" className="logo"><h2>Abra Weather</h2></Link>
                    <input type="checkbox" id="tab-nav" className="tab-nav" />
                    <label htmlFor="tab-nav" className="label">
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </label>
                    <ul className="content_nav">
                        <li><NavLink to="/" style={style}>HOME</NavLink></li>
                        <li><NavLink to="/favorites" style={style}>FAVORITES</NavLink></li>
                        <li>

                            <div className="dropdown">
                                <button className="dropbtn" type="button">UNITS</button>
                                <div className="dropdown-content">
                                    <label onClick={() => setUnits('Metric')}>Metric</label>
                                    <label onClick={() => setUnits('Imperial')}>Imperial</label>
                                </div>
                            </div>

                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}
export default Header;