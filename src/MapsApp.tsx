import {PlacesProvider} from "./context";
import {HomeScreen} from "./screens";
import './syles.css'
export const MapsApp = () => {
    return (
        <PlacesProvider>
            <HomeScreen />
        </PlacesProvider>
    );
};