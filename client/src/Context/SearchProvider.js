import { useState, useContext } from "react";
import { SearchContext } from "./SearchContext";

const SearchProvider = (props) => {
    const [ query, setQuery ] = useState()
    const SearchContext = useContext(SearchContext)

    const setSearchQuery = (queryParam) => {
        setQuery(queryParam)
    }

    const searchCtx = {
        searchQuery: query,
        setSearchQuery: setSearchQuery
    }
    return ( 
        <SearchContext.Provider value={searchCtx}>
            {props.children}
        </SearchContext.Provider>
     );
}
 
export default SearchProvider;