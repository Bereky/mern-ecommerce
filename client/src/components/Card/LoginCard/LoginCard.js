import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginCard.css';

const LoginCard = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', formData); // Changed endpoint to relative URL
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return ( 
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <form className="login__inputs" onSubmit={onSubmit}>
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">Email</label>
                        <input
                            type="email"
                            className="email__input login__input"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder='example@gmail.com'
                        />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >Password</label>
                        <input
                            type="password"
                            className="password__input login__input"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder='**********'
                        />
                    </div>
                    <div className="login__button__container">
                        <button className="login__button" type="submit">LOGIN</button>
                    </div>
                </form>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">Don't have an account? <Link to="/account/register">Create account</Link> </div>
                </div>
            </div>
        </div>
    );
}

export default LoginCard;
