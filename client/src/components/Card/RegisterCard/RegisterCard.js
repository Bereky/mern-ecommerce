import { Link } from 'react-router-dom';
import './RegisterCard.css';

const RegisterCard = () => {
    return ( 
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input type="text" className="fname__input register__input" />
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">Last name</label>
                        <input type="text" className="lname__input register__input"/>
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input register__input" placeholder='example@gmail.com' />
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input type="password" className="password__input register__input" />
                    </div>
                    <div className="register__button__container">
                        <button className="register__button" >Create Account</button>
                    </div>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have account? <Link to="/account/login">Login</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default RegisterCard;