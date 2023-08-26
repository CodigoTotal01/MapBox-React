//En el proveedor indicamos como queremos que se vea el estado - se guardara en memoria
import {PlacesContext} from "./PlacesContext.ts";
import {useEffect, useReducer} from "react";
import {placesReducer} from "./placesReducer.ts";
import {getUserLocations} from "../../helpers/getUserLocations.ts";

export interface PlaceState {
    isLoading: boolean;
    userLocation ?: [number, number]
}

const INITIAL_STATE: PlaceState = {
    isLoading: true,
    userLocation: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}: Props) => {

    //Reducer
    const [state,dispatch ] = useReducer(placesReducer, INITIAL_STATE)

    useEffect( () => {
             void getUserLocations()
                .then(lngLat => dispatch({type: "setUserLocation", payload: lngLat}))
    }, []);


    //Inicializar los valores del contex atravez del provider
    return (
        <PlacesContext.Provider value={{
            ...state
        }}>

            {children}
        </PlacesContext.Provider>
    );
};

