import {useContext} from "react";
import {MapContext} from "../context/map/MapContext.ts";
import {PlacesContext} from "../context";

export const BtnMyLocation = () => {

    const  {map, isMapReady}= useContext(MapContext)

    const  {userLocation}= useContext(PlacesContext)
    const onCLick = () => {
        if(!isMapReady) throw new Error("Mapa no esta listo");
        if(!userLocation) throw new Error("La ubicacion n oesta lista");

        map?.flyTo({
           zoom: 14,
           center: userLocation
        });
    }
    return (
        <button className="btn btn-primary" style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 999
        }}
                onClick={onCLick}
        >
            Mi Ubicacion
        </button>
    );
};

export default BtnMyLocation;