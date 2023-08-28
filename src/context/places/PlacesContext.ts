import {createContext} from "react";
import {Feature} from "../../interfaces/places.ts";
//Este solo se encarga de mostrar lo que nostros queramos a los demas componentes


export interface PlacesContextProps {
    isLoading: boolean;
    userLocation ?: [number, number],
    isLoadingPlaces: boolean;
    places: Feature[],
    searchPlacesByTerm: (query: string)=> Promise<any>

}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);