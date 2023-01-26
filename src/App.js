import logo from "./logo.svg";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import LocationBox from "./components/LocationBox/LocationBox";
import WeatherBox from "./components/WeatherBox/WeatherBox";

const api = {
  key: "72cc48d6e206d009934112e42d0e6d53",
  base: "https://api.openweathermap.org/data/3.0/",
};

function App() {
  return (
    <div className="app">
      <main>
        <SearchBox />
        <LocationBox />
        <WeatherBox />
      </main>
    </div>
  );
}

export default App;
