import Control from '../Controls/Control';
import DrawerNav from '../DrawerNav/DrawerNav';
import NavBrand from '../Nav-Brand/Navbrand';
import Form from '../Search-Bar/Form';
import './Container.css'

const Navtop = () => {
    return ( 
            <div className="nav__top__container">
                <div className="top__container">
                    <NavBrand />
                    <div className="form__container">
                        <Form />
                    </div>
                    <div className="control__bar">
                        <Control />
                    </div>
                    <div className="drawer">
                        <DrawerNav />
                    </div>
                </div>
            </div>
     );
}
 
export default Navtop;