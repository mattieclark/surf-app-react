
import './App.css';
// import react from 'react';
// import Beach from './components/Beach';
import Arrow from './components/Arrow';
import BeachName from './components/BeachName';
import Narrow from './components/Narrow';
import Data from './components/Data';
import SwellImage from './components/SwellImage';

function App() {
  return (
    <div className="container">

      <div className='beach_background'>

        <div className="banner">
          <div className="beach_name"><BeachName /></div>
          <div className="NorthOrient"><Narrow /></div>
        </div>

        <div className='wind'>
          <div className="wind_arrow"><Arrow /></div>
          <div className="wind_data"><Data /></div>
        </div>

        <div className='wave'>
          <div className="wave_arrow"><Arrow /></div>
          <div className="wave_direction_data"><Data /></div>
        </div>

        <div className='swell'>
        <div className="swell_data"><Data /></div>
        <div className='swell_image'><SwellImage /></div>

        </div>




      </div>

    </div>


  );
}

export default App;
