import { useEffect } from 'react';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import './index.css'

const Search = () => {
    const search = useContext(SearchContext)
    const [ searchParam, setSearchParam ] = useSearchParams()

    const searchQuery = {
        query: search.searchQuery
    }

    useEffect(() => {
        setSearchParam(searchQuery, { replace: true })
    }, [searchQuery.query])

    return ( 
        <div className="search__container">
            <div className="search__container__header">
                <h1>No results found for "{search.searchQuery}"</h1>
            </div>
        </div>
     );
}
 
export default Search;