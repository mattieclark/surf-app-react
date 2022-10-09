
import './App.css';
// import Beach from './components/Beach';
import Arrow from './components/Arrow';
import BeachName from './components/BeachName';
import Narrow from './components/Narrow';

function App() {
  return (
    <div className="container">
      
      <div className='beach_background'>

        <div className="banner">
            <div className="beach_name"><BeachName/></div>
            <div className="NorthOrient"><Narrow/></div>
        </div>

            <div className="wind_arrow"><Arrow/></div>   
            <div className="wave_arrow"><Arrow/></div>      
             
            
        </div>
     
      </div>
      
    
  );
}

export default App;
