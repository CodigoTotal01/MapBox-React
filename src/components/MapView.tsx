import {useContext, useLayoutEffect, useRef} from "react";
import {PlacesContext} from "../context";
import {Loading} from "./Loading.tsx";
import {Map} from "mapbox-gl";
import {MapContext} from "../context/map/MapContext.ts";

export const MapView = () => {

    const {isLoading, userLocation} = useContext(PlacesContext);

    //El contexto de una aplicacion
    const {setMap} = useContext(MapContext);

    //Guardar refenrencia del mapa
    const mapDiv = useRef<HTMLDivElement>(null);

    //Cuando se halla renderizado antes que se meustre se ejecutara este efecto - se ejcutara justo cuando el is loading se redibuja
    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapDiv.current!, // container ID-              //pa indicar que si vendra el valor
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14, // starting zoom
            });
            
            setMap(map);
        }
    }, [isLoading]);

    //Nunca poner los hooks despues de una condicional
    if (isLoading) {
        return (<Loading/>);
    }


    return (
        <div ref={mapDiv}
             style={
                 {
                     backgroundColor: 'grey',
                     height: '100vh',
                     width: '100vw',
                     position: 'fixed',
                     top: 0,
                     left: 0
                 }
             }
        ></div>
    );
};