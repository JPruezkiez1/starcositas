import Layout from '../../Components/Layout/index'
import { Title } from "../../Components/Title/index"
import './Styles.css'
import Button from '../../Components/Button/index'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <Layout>
            <div>
                <div className='notfound_container'>
                </div>

                <div className='notfoundtext'>
                    <Title text="Ups... there was an error" />
                    <div className='returnbutton'><Link to='/'><Button text="Return to home" /></Link></div>
                </div>
            </div>
        </Layout>
    )

};
