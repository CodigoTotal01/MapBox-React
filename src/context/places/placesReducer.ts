//FUncion pura se resuklve solo con los argumentos- Este se encargara de cguardar los datos en memoria


import {PlaceState} from "./PlacesProvider.tsx";

type PlacesAction = {
    type: 'setUserLocation',
    payload: [number, number]
};
//Retornara un nuevo estado
export const placesReducer = (state: PlaceState, action: PlacesAction): PlaceState => {
    switch (action.type){
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
            break;
        default:
            return state;
    }
}