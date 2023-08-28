import axios from "axios";


const searchApi = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYmluYXJpbzAxIiwiYSI6ImNsYXVmNW5zbjA1dnczbnFzYjhjYWJjYjAifQ.L2PFMfdH1jJlMcFpkZYyww'
    }
})


export default  searchApi;