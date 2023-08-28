//Informacion que queremos que se distribulla - tiene que formar parte del arbol de compoenentes
import {Map, Marker, Popup} from "mapbox-gl";
import {MapContext} from "./MapContext.ts";
import {useContext, useEffect, useReducer} from "react";
import {mapReducer} from "./mapReducer.ts";
import {PlacesContext} from "../places/PlacesContext.ts";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface MapState {
    isMapReady: boolean,
    map?: Map,
    markers: Marker[]
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: []
}
//Despliega la informacion en los demas compoenentes hijos
export const MapProvider = ({children}: Props) => {
    //Uso de un reducer es un state pero al ser mas complejo tiene otraos cambioos
    const [state, dispatch]
        = useReducer(mapReducer, INITIAL_STATE);
    const {places, isLoading} = useContext(PlacesContext);


    useEffect(() => {
        state.markers.forEach( marker => marker.remove() );
        const newMarkers: Marker[] = [];

        for (const place of places) {
            const [ lng, lat ] = place.center;
            const popup = new Popup()
                .setHTML(`
                    <h6>${ place.text_es }</h6>
                    <p>${ place.place_name_es }</p>
                `);

            const newMarker = new Marker()
                .setPopup( popup )
                .setLngLat([ lng, lat ])
                .addTo( state.map! );

            newMarkers.push( newMarker );
        }
        console.log(places)

        dispatch({type: 'setMarkers', payload: newMarkers});
    console.log(places)
    }, [ places, state.map ])


    const setMap = (map: Map) => {

        const myLocationPopup = new Popup().setHTML(`
                <h4>I'm Here</h4>
                <p>En algun lugar del mundo </p>
        `);


        //centrar posicion
        new Marker().setLngLat(map.getCenter()).addTo(map).setPopup(myLocationPopup);

        dispatch({type: 'setMap', payload: map});
    }

    return (
        <MapContext.Provider value={{
            ...state,

            //Methods
            setMap
        }}>
            {children}
        </MapContext.Provider>
    );
};