import Navbottom from '../Nav/Nav-Links/NavLinks';
import Navtop from '../Nav/Container/Container';
import './Header.css'

const Header = () => {
    return ( 
        <div className='header__container'>
            <Navtop />
            <Navbottom />
        </div>
     );
}
 
export default Header;