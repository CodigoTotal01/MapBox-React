import {createContext} from "react";
import {Map} from "mapbox-gl";

interface MapContexProps {
    isMapReady: boolean,
    map?: Map,

    //Methods
    setMap: (map: Map) => void,
    getRouterBetweenPoint: (start: [number, number], end: [number, number]) => Promise<void>;
}
//Informacion que ocupa almacenar
export const MapContext = createContext({} as MapContexProps);