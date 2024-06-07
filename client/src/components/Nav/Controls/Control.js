import React, { useState, useEffect } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Cart from '../../Card/Cart/Cart';
import { useContext } from 'react';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import axios from 'axios';

const Control = () => {
    const wishItems = useContext(WishItemsContext);
    const [firstname, setFirstname] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/register'); // Assuming backend endpoint to fetch user info
                setFirstname(res.data.firstname);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsername();
    }, []);

    return ( 
        <div className="control__bar__container">
            <div className="controls__container">
                <div className="control">
                    <Link to="/account/login">
                        <PersonOutlineIcon color="black" size="large" sx={{ width: '35px'}}/>
                        {firstname && <p>{firstname}</p>}
                    </Link>
                </div>
                <div className="control">
                    <Link to="/wishlist">
                        <Badge badgeContent={wishItems.items.length} color="error">
                            <FavoriteBorderIcon color="black" sx={{ width: '35px'}}/>
                        </Badge>
                    </Link>
                </div>
                <div className="control">
                    <Cart />
                </div>
            </div>
        </div>
    );
}
 
export default Control;
