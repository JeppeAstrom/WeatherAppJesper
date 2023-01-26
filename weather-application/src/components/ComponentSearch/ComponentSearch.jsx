import React, { useState, useEffect } from 'react';

import "../ComponentSearch/ComponentSearch.css"
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import "../MainStyle.css"
function ComponentSearch() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (location !== "") {
      fetch(`http://api.weatherapi.com/v1/current.json?key=82fc71832ac84c4eb4b105046232301&q=${location}&aqi=no`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [location]);

  const handleSearch = event => {
    event.preventDefault();
    // setLocation(location);
  };

  return (
    <>
    <div className='weather-search'>
         <h1 id='searchWeather'>Search Weather By City</h1>
      <form onSubmit={handleSearch}>
        <input
        id='searchInput'
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={event => setLocation(event.target.value)}
          
        />
     
      </form>
      </div>
      {weather.location && (
        <div id='search-div'>
            
          <h3>Current weather in {weather.location.name}  <img src={weather.current.condition.icon} alt='Weather logo'/></h3>
          
          <p>
            Date: {new Date(weather.current.last_updated_epoch * 1000).toDateString()}
          </p>
          <p>Time: {new Date(weather.current.last_updated_epoch * 1000).toLocaleTimeString()}</p>
          <p>Temperature: {weather.current.temp_c} &#8451;</p>
          <h3 id='h3forecast'>Upcoming Days In {weather.location.name}</h3>
          <WeatherForecast location={location} setLocation={setLocation} />

        </div>
      )}
    </>
  );

}

export default ComponentSearch;
