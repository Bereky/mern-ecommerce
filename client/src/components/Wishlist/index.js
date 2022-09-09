import { useContext } from 'react';
import { WishItemsContext } from '../../Context/WishItemsContext';
import WishCard from '../Card/Wishlist/WishCard';
import './index.css'

const Wishlist = () => {
    const wishItems = useContext(WishItemsContext)

    return ( 
        <div className="wishlist">
            <div className="wishlist__container">
                <div className="wishlist__header"><h2>Your Wishlist</h2></div>
                <div className="wishlist__items__container">
                    <div className="wishlist__items">   
                    {wishItems.items.length>0? wishItems.items.map((item) => <WishCard key={item._id} item={item}/>) : <>No items</>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Wishlist;