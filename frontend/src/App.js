import React from 'react';
import { useState } from 'react';
import './App.css';
import ReactMapGL,{Marker} from 'react-map-gl';
import dotenv from 'dotenv';
import RoomIcon from '@material-ui/icons/Room';

dotenv.config();

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.78,
    longitude: -122.45,
    zoom: 4
  });
  return (
    <div className="App">
       <ReactMapGL
       {...viewport}
       mapboxApiAccessToken={'pk.eyJ1IjoiamFuaXRoMTIzIiwiYSI6ImNrc3NwcW1lbjA4Zjkydm5zYXN3OXRtN2IifQ.IvKAludDmrZbfH_W7EVrbQ'}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      
    >
      <Marker
       latitude={37.78}
       longitude={-122.41}
       offsetLeft={-20} 
       offsetTop={-10}
      > 
       
        <RoomIcon style={{fontSize:viewport.zoom*7, color:'slateblue'}} />
      </Marker>

    </ReactMapGL>
    </div>
  );
}

export default App;
