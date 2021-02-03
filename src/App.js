import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { Header, WeatherCards } from "./components";

function App() {
    const [data, setData] = useState(null);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);


    window.navigator.geolocation.getCurrentPosition((position) => {
        if(position) {
            const { longitude, latitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
        }
    });

    const fetchData = useCallback( async () => {
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const url = `${proxy}https://api.darksky.net/forecast/3a1e7ea23d3340d9e6f2b4672843a1ec`;

        const response = await axios.get(`${url}/${latitude},${longitude}`);
        console.log(response.data);
    }, [latitude, longitude]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="App">
            <Header />
            <WeatherCards />
        </div>
    );
}

export default App;
