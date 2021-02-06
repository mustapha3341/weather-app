import { useState, useEffect } from "react";
import axios from "axios";

import { Header, WeatherCards } from "./components";

function App() {
    const [data, setData] = useState(null);

    const fetchData = () => {
        window.navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                if (!position) throw new Error("Error processing request.");
                const { longitude, latitude } = position.coords;

                const proxy = `https://cors-anywhere.herokuapp.com/`;
                const url = `https://api.darksky.net/forecast/ac80f0b7f7195c33fef1aa2be4cc6edf`;

                const response = await axios.get(
                    `${url}/${latitude},${longitude}`
                );

                if (!response) throw new Error("Error processing request");
                console.log(response.data);
            } catch (error) {
                console.error(error.message);
            }
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <Header />
            <WeatherCards />
        </div>
    );
}

export default App;
