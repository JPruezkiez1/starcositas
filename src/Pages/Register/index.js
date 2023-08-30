import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';
import { NavLink } from 'react-router-dom';
import RegisterLayout from './registerlayout';
import InputField from '../../Components/InputField';
import registerimage from '../../Resources/awoo.jpg';
import Button from '../../Components/Button/index';
import './Styles.css';

export default function Register() {
    const context = useContext(ShoppingCartContext);
    /// Register function //
    const handleRegister = () => {
        const isUsernameTaken = context.users.some((user) => user.username === context.username);
        if (isUsernameTaken) {
            context.setErrorMessage('your mom gay');
        } else {
            const newUser = { email: context.email, username: context.username, password: context.password };
            context.registerUser(newUser);
            context.setErrorMessage('');
            context.setEmail('');
            context.setUsername('');
            context.setPassword('');
            console.log(context.users)
        }
    };
    return (
        <RegisterLayout>
            <div className='body_container'>
                <img className="imageregister" src={registerimage} alt="Registration" />
                <div className='fieldsonly'>
                    <InputField
                        labelName="Email:"
                        type="email"
                        placeholder="Email"
                        value={context.email}
                        onChange={(e) => context.setEmail(e.target.value)}
                    />
                    <InputField
                        labelName="Username:"
                        type="text"
                        placeholder="Username"
                        value={context.username}
                        onChange={(e) => context.setUsername(e.target.value)}
                    />
                    <InputField
                        labelName="Password:"
                        type="password"
                        placeholder="Password"
                        value={context.password}
                        onChange={(e) => context.setPassword(e.target.value)}
                    />
                    <div className='button_container'>
                        <Button text='Register' btn_action={handleRegister} />
                    </div>
                    {context.errorMessage && <div className="error-message">{context.errorMessage}</div>}
                </div>
            </div>
        </RegisterLayout>
    );
}