import logo from './logo.svg';
import './App.css';
import StartComponent from './components/StartComponent/StartComponent';
import ComponentSearch from './components/ComponentSearch/ComponentSearch';

import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const[locations, fetchForecast] = useState('');
  return (
<>

<header>
<StartComponent></StartComponent>

</header>
<ComponentSearch location={location} setLocation={setLocation}></ComponentSearch>
  

</>
  );
}

export default App;
