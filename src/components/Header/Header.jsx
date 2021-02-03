import React from "react";
import "./Header.css";

import { WeatherIcon } from "../../components";

const Header = (props) => {
    return (
        <div className="header">
            <div className="weather--info">
                <WeatherIcon />
                <h2 className="temperature">25</h2>
            </div>
            <h4 className="location">Abuja/Lagos</h4>
        </div>
    );
};

export default Header;
