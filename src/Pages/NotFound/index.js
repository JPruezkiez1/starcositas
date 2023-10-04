import Layout from '../../Components/Layout/index'
import { Title } from "../../Components/Title/index"
import './Styles.css'
import Button from '../../Components/Button/index'
import { Redirect } from 'react-router-dom'
export default function NotFound() {
    return (
        <Layout>
            <div>
                <div className='notfound_container'>
                </div>

                <div className='notfoundtext'>
                    <Title text="Ups... there was an error" />
                    <div className='returnbutton'><Redirect to='/'><Button text="Return to home" /></Redirect></div>
                </div>
            </div>
        </Layout>
    )

};
