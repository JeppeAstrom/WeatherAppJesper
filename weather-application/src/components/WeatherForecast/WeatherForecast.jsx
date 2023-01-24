import React, { useState, useEffect } from 'react';
import "./WeatherForecast.css"
function WeatherForecast({ location }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function fetchForecast() {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=82fc71832ac84c4eb4b105046232301&q=${location}&days=5&aqi=no&alerts=no`);
        const data = await response.json();
        setForecast(data.forecast.forecastday);
      } catch (error) {
        console.log(error);
      }
    }

    if (location !== "") {
      fetchForecast();
    }
  }, [location]);

  return (
    <div>
      <form>
        {forecast.map((day) => (
          <div key={day.date}>
            <p>{day.date}</p>
            <p>Minimum Temperature: {day.day.mintemp_c}°C</p>
            <p>Maximum Temperature: {day.day.maxtemp_c}°C</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text}/>
          </div>
        ))}
      </form>
    </div>
  );
}

export default WeatherForecast;
