import {createContext} from "react";
import {Map} from "mapbox-gl";

interface MapContexProps {
    isMapReady: boolean,
    map?: Map,

    //Methods
    setMap: (map: Map) => void
}
//Informacion que ocupa almacenar
export const MapContext = createContext({} as MapContexProps);