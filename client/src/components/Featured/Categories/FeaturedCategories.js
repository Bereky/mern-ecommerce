import { useContext } from "react";
import { FeatureCategoryContext } from "../../../Context/FeaturedCategoryContext";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import './FeaturedCategories.css'

const Categories = () => {
    const featuredCategories = useContext(FeatureCategoryContext)
    
    return ( 
        <div className="featured__categories__container">
            <div className="featured__categories">
                <div className="featured__categories__header">
                    <h1 className='featured__header__big'>Featured Categories </h1>
                    <div className="featured__categories__header__line"></div>
                </div>
                <div className="featured__categories__card__container">
                    { featuredCategories.map((category) =>  <CategoryCard key={category.id} data={category}/>)}
                </div>
            </div>
        </div>  
     );
}
 
export default Categories;