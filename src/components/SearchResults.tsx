import {useContext, useState} from "react";
import {PlacesContext} from "../context";
import {LoadingPlaces} from "./LoadingPlaces.tsx";
import {MapContext} from "../context/map/MapContext.ts";
import {Feature} from "../interfaces/places.ts";

export const SearchResults = () => {
//chevere cuidado con lo que se expone en el contexto
        const {places, isLoadingPlaces, userLocation} = useContext(PlacesContext);
        const {map, getRouterBetweenPoint} = useContext(MapContext);


        const [activeId, setActiveId] = useState('');
        const onPlaceClicked = (place: Feature) => {
            const [lng, lat] = place.center;
            setActiveId(place.id);
            map?.flyTo({
                zoom: 14,
                center: [lng, lat]
            })
        }

        const getRoute = (place: Feature) => {
            //star: userLocation
            if (!userLocation) return;

            const [lng, lat] = place.center;


            getRouterBetweenPoint(userLocation, [lng, lat]);
        }

        if (isLoadingPlaces) {
            return <LoadingPlaces/>
        }

        if (places.length === 0) {
            return <></>

        }

        return (
            <ul className="list-group mt-3">

                {
                    places.map(place => (
                        <li
                            key={place.id}
                            className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active text-white' : ''}`}
                            onClick={() => onPlaceClicked(place)}>
                            <h6>{place.text_es}</h6>
                            <p className="text-muted" style={{
                                fontSize: '12px',
                            }}>
                                {place.place_name}
                            </p>


                            <button
                                onClick={() => getRoute(place)}
                                className={`btn btn-sm ${activeId == place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}>
                                Direcciones
                            </button>
                        </li>))
                }

            </ul>
        );
    }
;