import logo from './logo.svg';
import './App.css';
import StartComponent from './components/StartComponent/StartComponent';
import ComponentSearch from './components/ComponentSearch/ComponentSearch';

import Header from './components/Header/Header';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const[locations, fetchForecast] = useState('');
  return (
<>
<Header>
</Header>
    <main>
      <section id='section1'>
       
      <ComponentSearch location={location} setLocation={setLocation}></ComponentSearch>
      
      </section>
   <section id='section2'>
   <StartComponent></StartComponent>
   </section>

</main>
</>
  );
}

export default App;
