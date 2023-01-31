import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import LocationBox from "./components/LocationBox/LocationBox";
import WeatherBox from "./components/WeatherBox/WeatherBox";

function App() {
  const [queryCity, setQueryCity] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <div className="app">
      <main>
        <SearchBox
          queryCity={queryCity}
          setQueryCity={setQueryCity}
          setWeather={setWeather}
        />
        {typeof weather.main != "undefined" ? (
          <>
            <LocationBox
              cityName={weather?.name}
              country={weather?.sys?.country}
            />
            <WeatherBox weather={weather} />
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
