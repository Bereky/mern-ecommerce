import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterCard.css';

const RegisterCard = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const { firstName, lastName, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/register', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <form className="register__inputs" onSubmit={onSubmit}>
                    <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input
                            type="text"
                            className="fname__input register__input"
                            name="firstName"
                            value={firstName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">Last name</label>
                        <input
                            type="text"
                            className="lname__input register__input"
                            name="lastName"
                            value={lastName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">Email</label>
                        <input
                            type="email"
                            className="email__input register__input"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder='example@gmail.com'
                        />
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input
                            type="password"
                            className="password__input register__input"
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="register__button__container">
                        <button className="register__button" type="submit">Create Account</button>
                    </div>
                </form>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have an account? <Link to="/account/login">Login</Link></div>
                </div>
            </div>
        </div>
    );
};

export default RegisterCard;
