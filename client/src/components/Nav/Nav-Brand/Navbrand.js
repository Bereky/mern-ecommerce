import './NavBrand.css'
import { Link } from 'react-router-dom';

const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
               <Link to="/">SHEMA</Link>
            </h1>
        </div>
     );
}
 
export default NavBrand;