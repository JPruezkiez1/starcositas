import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';
import RegisterLayout from './registerlayout';
import InputField from '../../Components/InputField';
import registerimage from '../../Resources/awoo.jpg';
import Button from '../../Components/Button/index';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const context = useContext(ShoppingCartContext);


    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');



    const navigate = useNavigate();
    const handleLogin = () => {
        const user = context.usertest.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            navigate('/');
            context.setLoggedInUser(user);
            context.setIsLogged(true);
            localStorage.setItem('loggedInUser', JSON.stringify(user));
        } else {
            console.log('Login failed. Please check your credentials.');
        }
    };

    return (
        <RegisterLayout>
            <div className='body_container'>
                <img className="imageregister" src={registerimage} alt="Login" />
                <div className='fieldsonly'>
                    <InputField
                        labelName="Username:"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        labelName="Password:"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='button_container'>
                        <Button text='Login' btn_action={handleLogin} />
                    </div>
                </div>
            </div>
        </RegisterLayout>
    );
}
