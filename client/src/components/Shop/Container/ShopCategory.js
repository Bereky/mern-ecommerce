import ItemCard from "../../Card/ItemCard/ItemCard";
import './ShopCategory.css'

const ShopCategory = (props) => {
    return ( 
        <div className="shop__category__container">
            <div className="shop__category__header">
                <div className="shop__category__header__big">
                    <div className="shop__category__head">
                        <h2>{props.name} Fashion</h2>
                    </div> 
                    <div className="shop__category__header__line"></div>
                </div>
                </div>
                <div className="shop__category__card__container">
                    <div className="shop__category__product__card">
                        {props.items.map((data) => <ItemCard item={data} category={props.category}/>)}
                    </div>
            </div>
        </div>
     );
}
 
export default ShopCategory;