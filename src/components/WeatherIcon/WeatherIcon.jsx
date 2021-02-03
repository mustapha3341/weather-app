import React from "react";
import Skycons, { SkyconsType } from "react-skycons";

const WeatherIcon = (props) => {
    return (
        <div className="weather--icon">
            <Skycons
                type={SkyconsType.CLEAR_DAY}
                color="white"
                animate={true}
                size={50}
                resizeClear={true}
            />
        </div>
    );
};

export default WeatherIcon;
