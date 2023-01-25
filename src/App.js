import logo from "./logo.svg";
import "./App.css";

const api = {
  key: "72cc48d6e206d009934112e42d0e6d53",
  base: "https://api.openweathermap.org/data/3.0/",
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
