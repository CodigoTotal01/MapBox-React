//En el proveedor indicamos como queremos que se vea el estado - se guardara en memoria
import {PlacesContext} from "./PlacesContext.ts";
import {useEffect, useReducer} from "react";
import {placesReducer} from "./placesReducer.ts";
import {getUserLocations} from "../../helpers/getUserLocations.ts";
import {searchApi} from "../../apis";
import {Feature, PlacesResponse} from "../../interfaces/places.ts";

export interface PlaceState {
    isLoading: boolean;
    userLocation ?: [number, number],
    isLoadingPlaces: boolean;
    places: Feature[]
}

const INITIAL_STATE: PlaceState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
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


    const searchPlacesByTerm = async(query: string)  => {

        if(query.length === 0)  {
            dispatch({type: 'setPlaces', payload: []})
            return [];
        }
        if(!state.userLocation) throw new Error("No hay ubicacion del usuario") ;

        dispatch({type: 'setLoadingPlaces'});

        const resp = await searchApi.get<PlacesResponse>(`${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });

        dispatch({type: 'setPlaces', payload: resp.data.features});

        return resp.data.features[0];
    }


    //Inicializar los valores del contex atravez del provider
    return (
        <PlacesContext.Provider value={{
            ...state,
            searchPlacesByTerm
        }}>

            {children}
        </PlacesContext.Provider>
    );
};

