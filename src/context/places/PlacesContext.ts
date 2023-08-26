import {createContext} from "react";
//Este solo se encarga de mostrar lo que nostros queramos a los demas componentes

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
}


export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);