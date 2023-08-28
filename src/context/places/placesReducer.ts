//FUncion pura se resuklve solo con los argumentos- Este se encargara de cguardar los datos en memoria


import {PlaceState} from "./PlacesProvider.tsx";
import {Feature} from "../../interfaces/places.ts";

type PlacesAction =
    { type: 'setUserLocation', payload: [number, number] } |
    { type: 'setPlaces', payload: Feature[] } |
    { type: 'setLoadingPlaces' }
    ;


//Retornara un nuevo estado
export const placesReducer = (state: PlaceState, action: PlacesAction): PlaceState => {
    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        case 'setLoadingPlaces':
            return {
                ...state,
                isLoading: true,
                places: []
            }

        case 'setPlaces':
            return {
                ...state,
                isLoading: false,
                places: action.payload
            }


        default:
            return state;
    }
}