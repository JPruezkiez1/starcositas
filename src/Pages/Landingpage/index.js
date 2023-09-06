import { Title } from '../../Components/Title';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import awoo from '../../Resources/awoo.jpg'
import './Styles.css'


export default function Landing() {

    return (
        <div className='landing_container'>
            <Title text="Welcome to StarCositas" />
            <Image image={awoo} />
            <div className='button_container1'>
                <Button text='Login' />
                <Button text='Register' />
            </div>

        </div>

    )
}