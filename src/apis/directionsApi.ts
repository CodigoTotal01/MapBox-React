import axios from "axios";

const directionsApi = axios.create({
    baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiYmluYXJpbzAxIiwiYSI6ImNsYXVmNW5zbjA1dnczbnFzYjhjYWJjYjAifQ.L2PFMfdH1jJlMcFpkZYyww'
    }
})

export default directionsApi;