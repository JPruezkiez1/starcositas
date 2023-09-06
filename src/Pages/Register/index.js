import RegisterLayout from './registerlayout';
import './Styles.css';
import Circle from '../../Animations/Circle';



export default function Register() {
    return (
        <RegisterLayout>
            <div className='body_container'>
                <div className='text_section'>
                    <div className='text'> Coming soon..</div>
                    <div className='text' > But for real.. we just lazy</div>
                </div>
                <Circle />
            </div>
        </RegisterLayout>
    );
}
