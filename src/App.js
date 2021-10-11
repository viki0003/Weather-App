import React from "react";
import WeatherSearch from "./WeatherSearch";
import './index.css';

const App = () => {
  return(
    <React.Fragment>
   
    <div className="Main-Content">
      <h1>WEATHER SEARCH APPLICATION</h1>
    <WeatherSearch />
    </div>
  
    </React.Fragment>
  );
};

export default App;