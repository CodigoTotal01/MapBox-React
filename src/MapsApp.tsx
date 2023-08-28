import {MapProvider, PlacesProvider} from "./context";
import {HomeScreen} from "./screens";
import './syles.css'
export const MapsApp = () => {
    return (

        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
            </MapProvider>
        </PlacesProvider>
    );
};