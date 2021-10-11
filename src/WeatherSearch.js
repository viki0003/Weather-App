import React, {useState, useEffect} from "react";
import './index.css';
import axios from 'axios';


const WeatherSearch = () => {
const [name, setName] = useState();
const [city, setCity] = useState();
const [temp, setTemp] = useState();
const [mintemp, setMinTemp] = useState ();
const [maxtemp, setMaxTemp] = useState();



useEffect ( () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e1e5c849abcfaa866c94b003590bdb68`
    const fetchData = async () => {
            const response = await axios.get(url);
            console.log(response);
            setCity(response.data.name)
            setTemp(response.data.main.temp)
            setMinTemp(response.data.main.temp_min)
            setMaxTemp(response.data.main.temp_max)
    }    
    
    fetchData()
} )

   return (
       <React.Fragment>
       <div className="Search-Design">
        <h2>Search Any City</h2>

        <div className="Location-Design">
<input type="text" placeholder="Search Location" onChange={(e) => {setName(e.target.value)}} value={name}/>
        <div className="data-design">
<h3>{city}</h3>
        <h4>Temperature: {temp} </h4>
        <h5>Temperature Min: {mintemp} </h5>
        <h5>Temperature Max: {maxtemp} </h5>
        </div>
        </div>

        </div>
    </React.Fragment>

    );
}

export default WeatherSearch;