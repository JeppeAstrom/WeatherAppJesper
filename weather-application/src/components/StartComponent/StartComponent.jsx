
import "../StartComponent/StartComponent.css"

import React, { useState, useEffect } from 'react';

function StartComponent() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=82fc71832ac84c4eb4b105046232301&q=Stockholm&aqi=no')
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    
    <div className='stockholm-weather'>
      {weather.location && (
        <div>
          <h1>Today's Weather in {weather.location.name}  </h1>
          <img className="weather-logo" src={weather.current.condition.icon} alt="Weather logo" />
          {/* , {weather.location.region} */}
          <p>
            {new Date(weather.current.last_updated_epoch * 1000).toDateString()}
          </p>
          <p>{new Date(weather.current.last_updated_epoch * 1000).toLocaleTimeString()}</p>
          <p> {weather.current.temp_c} &#8451;</p>
        </div>
      )}
      
    </div>

  );
}

export default StartComponent;
