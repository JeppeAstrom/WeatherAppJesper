
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
          <h1>Weather in {weather.location.name}</h1>
          {/* , {weather.location.region} */}
          <p>
            Date: {new Date(weather.current.last_updated_epoch * 1000).toDateString()}
          </p>
          <p>Time: {new Date(weather.current.last_updated_epoch * 1000).toLocaleTimeString()}</p>
          <p>Temperature: {weather.current.temp_c} &#8451;</p>
        </div>
      )}
    </div>
  );
}

export default StartComponent;
