import React from 'react'
import ReactDOM from 'react-dom/client'
import {MapsApp} from "./MapsApp.tsx";


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYmluYXJpbzAxIiwiYSI6ImNsYXVmNW5zbjA1dnczbnFzYjhjYWJjYjAifQ.L2PFMfdH1jJlMcFpkZYyww';

if(!navigator.geolocation){
    alert("Tu navegador no tiene opcion de geolocalizacion");
    throw new Error("Tu navegador no tiene opcion de geolocalizacion");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)