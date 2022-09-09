import './Category.css';
import ItemCard from '../Card/ItemCard/ItemCard';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TabTitle } from '../../utils/General';
import { Button } from '@mui/material';

const Category = (props) => {
    TabTitle(props.name)

    const [show, setShow] = useState('All');
    const [filter, setFilter] = useState('Latest');

    const handleShowChange = (event) => {
        setShow(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return ( 
        <div className="category__container">
            <div className="category">
                <div className="category__header__container">
                    <div className="category__header__big">
                        <div className="category__header">
                            <h2>{props.name}</h2>
                        </div> 
                        <div className="category__header__line"></div>
                    </div>
                    <div className="category__sort">
                        <div className="show__filter">
                            <Box sx={{ minWidth: 100} }>
                                <FormControl fullWidth size="small">
                                    <InputLabel>Show</InputLabel>
                                    <Select
                                    value={show}
                                    label="Show"
                                    onChange={handleShowChange}
                                    >
                                        <MenuItem value={'All'}>All</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                       </div>
                       <div className="filter__by">
                       <div className="show__filter">
                            <Box sx={{ width: 120} }>
                                <FormControl fullWidth size="small">
                                    <InputLabel>Filter by</InputLabel>
                                    <Select
                                    value={filter}
                                    label="Filter"
                                    onChange={handleFilterChange}
                                    >
                                        <MenuItem value={'Latest'}>Latest</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="category__card__container">
                    <div className="category__product__card">
                        {props.items.map((data) => <ItemCard item={data} category={props.category}/>)}
                        <div className="show__more__action">
                            <Button variant='outlined' sx={[ {width: '200px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: '#FFE26E', borderColor: '#FFE26E', color: 'black' }, {'&:hover': { borderColor: '#FFE26E', backgroundColor: "none" }}]}>Show more</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Category;