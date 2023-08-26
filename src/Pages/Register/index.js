import RegisterLayout from './registerlayout'
import InputField from '../../Components/InputField'
import Layout from '../../Components/Layout/index'
import registerimage from '../../Resources/awoo.jpg'
import { useState } from 'react';
import Button from '../../Components/Button/index'
import './Styles.css'
import OrderCart from '../../Components/OrderCart';
export default function Register() {


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <RegisterLayout>
            {/* <div className='body_container'>
                <img className="imageregister" src={registerimage} />
                <div className='fieldsonly'>
                    <InputField labelName="Email:" type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <InputField labelName="Username:" type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <InputField labelName="Password:" type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className='button_container'>
                        <Button text='Login' />
                        <Button text='Register' />
                    </div>
                </div>
            </div> */}

            <OrderCart />
        </RegisterLayout>
    )
};
