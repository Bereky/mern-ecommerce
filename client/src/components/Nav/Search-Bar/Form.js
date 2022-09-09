import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Form.css'

const Form = () => {
    const [ searchInput, setSearchInput] = useState('')

    const handelChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handelFormSubmit = (e) => {  
        e.preventDefault()
    }

    return ( 
            <form className="search__form" onSubmit={handelFormSubmit}>
                <input type="text"  placeholder='Search for products' className="search__form__input" value={searchInput} onChange={handelChange} required/>
                <button className="search__form__button" type='submit'>
                    <Link to={`/search?${searchInput? searchInput : "none" }`}> <SearchIcon fontSize='medium'/> </Link>
                </button>
            </form>
     );
}
 
export default Form;