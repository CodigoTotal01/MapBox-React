import {ChangeEvent, useContext, useRef} from "react";

import {PlacesContext} from "../context";
import {SearchResults} from "./SearchResults.tsx";

export const SearchBar = () => {

    const {searchPlacesByTerm}  = useContext(PlacesContext);

    const debouncedRef = useRef<number>();
    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if(debouncedRef.current)
            clearTimeout(debouncedRef.current);
        debouncedRef.current= setTimeout(()=> {
            searchPlacesByTerm(event.target.value);
        }, 350);
    }

    return (
        <div className="search-container">
            <input type="text" className="form-control" placeholder="Buscar Lugar ..."
            onChange={onQueryChanged}/>
            <SearchResults />
        </div>
    );
};