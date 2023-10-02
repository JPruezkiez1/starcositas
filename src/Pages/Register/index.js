import React, { useContext, useState } from 'react';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button/index';
import Layout from '../../Components/Layout/index';
import registerimage from '../../Resources/awoo.jpg';
import { ShoppingCartContext } from '../../Context';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        country_id: 1,
        email: '',
        birthdate: '',
        sex: '',
        image: 'none',
    });
    const navigate = useNavigate();
    const context = useContext(ShoppingCartContext); // Access the context

    const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const checkUsernameAvailability = () => {
        // Check if the username already exists in the context
        const isTaken = context.usertest.some(user => user.username === formData.username);
        setIsUsernameAvailable(!isTaken);
    };

    const handleRegister = async () => {
        checkUsernameAvailability();
        if (!isUsernameAvailable) {
            alert('Username is already taken. Please choose another.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/add-customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/login')
            } else {
                alert('Registration Failed.');
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <Layout>
            <div className="register_form">
                <img className="imageregister1" src={registerimage} alt="Login" />
                <div className="register_form2">
                    <div className="forinput_container_01">
                        <InputField
                            labelName="Username:"
                            type="text"
                            placeholder="Sexy username.."
                            value={formData.username}
                            onChange={(e) => handleInputChange({ target: { name: 'username', value: e.target.value } })}
                        />
                        <InputField
                            labelName="Password:"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => handleInputChange({ target: { name: 'password', value: e.target.value } })}
                        />
                        <InputField
                            labelName="First.Name:"
                            type="text"
                            placeholder="Your Cute Name"
                            value={formData.first_name}
                            onChange={(e) => handleInputChange({ target: { name: 'first_name', value: e.target.value } })}
                        />
                        <InputField
                            labelName="Last.Name:"
                            type="text"
                            placeholder="Great Last Name"
                            value={formData.last_name}
                            onChange={(e) => handleInputChange({ target: { name: 'last_name', value: e.target.value } })}
                        />
                        <InputField
                            labelName=" country:"
                            type="number"
                            placeholder="country_id"
                            value={formData.country_id}
                            onChange={(e) => handleInputChange({ target: { name: 'country_id', value: e.target.value } })}
                        />
                        <InputField
                            labelName="Email:"
                            type="text"
                            placeholder="your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange({ target: { name: 'email', value: e.target.value } })}
                        />
                        <InputField
                            labelName="  BirthDate:"
                            type="date"
                            value={formData.birthdate}
                            onChange={(e) => handleInputChange({ target: { name: 'birthdate', value: e.target.value } })}
                        />
                        <InputField
                            labelName="  Sex:"
                            type="text"
                            placeholder="M OR F"
                            value={formData.sex}
                            onChange={(e) => handleInputChange({ target: { name: 'sex', value: e.target.value } })}
                        />

                    </div>
                    {!isUsernameAvailable && (
                        <p style={{ color: 'red' }}>Username is already taken. Please choose another.</p>
                    )}
                    <div className="registerbutton_container">
                        <Button text="Register" btn_action={handleRegister} />
                        <Button text="Back To login" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
